// Vercel serverless function: POST /api/lead
// Receives a quote/contact enquiry, checks it is not spam, and emails it (with photos) via Resend.
// All keys are server-side environment variables, never shipped to the browser:
//   RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL, TURNSTILE_SECRET_KEY (optional)
// Used when the site runs on Vercel with VITE_FORM_PROVIDER=api. GitHub Pages ignores this folder.

const MAX_PHOTOS = 5;
const MAX_PHOTO_BYTES = 1.5 * 1024 * 1024; // after browser-side compression
const MOBILE = /^[6-9]\d{9}$/;
const recent = new Map(); // best-effort per-instance rate limit: ip -> [timestamps]

const json = (res, status, body) => res.status(status).json(body);
const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function rateLimited(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 5;
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile not enabled
  if (!token) return false;
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token, remoteip: ip || '' }),
  });
  const data = await r.json().catch(() => ({}));
  return data.success === true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { success: false, message: 'Method not allowed' });
  }

  const origin = req.headers.origin || '';
  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (allowed.length && !allowed.includes(origin)) return json(res, 403, { success: false, message: 'Forbidden' });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const body = typeof req.body === 'object' && req.body ? req.body : {};

  // Spam: honeypot filled or form submitted inhumanly fast -> accept silently, send nothing.
  if (body.website || Number(body.elapsedMs) < 3000) return json(res, 200, { success: true });
  if (rateLimited(ip)) return json(res, 429, { success: false, message: 'Too many enquiries. Please try again in a few minutes or use WhatsApp.' });
  if (!(await verifyTurnstile(body.turnstileToken, ip))) {
    return json(res, 400, { success: false, message: 'Please complete the security check and try again.' });
  }

  const f = body.fields || {};
  const fields = {};
  for (const [k, v] of Object.entries(f).slice(0, 20)) fields[clean(k, 40)] = clean(v, k === 'Message' ? 2000 : 200);

  let mobile = (fields.Mobile || '').replace(/\D/g, '');
  if (mobile.length === 12 && mobile.startsWith('91')) mobile = mobile.slice(2);
  if (mobile.length === 11 && mobile.startsWith('0')) mobile = mobile.slice(1);
  if (!fields.Name || fields.Name.length < 2 || !MOBILE.test(mobile) || !fields.Location) {
    return json(res, 400, { success: false, message: 'Please check your name, mobile number and location.' });
  }

  const attachments = (Array.isArray(body.photos) ? body.photos : []).slice(0, MAX_PHOTOS).flatMap((p, i) => {
    const m = /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/.exec(String(p?.dataUrl || ''));
    if (!m) return [];
    const content = m[2];
    if ((content.length * 3) / 4 > MAX_PHOTO_BYTES) return [];
    return [{ filename: `bathroom-${i + 1}.${m[1] === 'jpeg' ? 'jpg' : m[1]}`, content }];
  });

  const { RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !LEAD_TO_EMAIL) {
    console.error('lead: RESEND_API_KEY or LEAD_TO_EMAIL is not configured');
    return json(res, 500, { success: false, message: 'Enquiries are temporarily unavailable. Please use WhatsApp.' });
  }

  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><th align="left" style="padding:6px 12px;background:#F2F6FA">${escapeHtml(k)}</th><td style="padding:6px 12px">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  const kind = body.formName === 'quote' ? 'Quote request' : 'Enquiry';

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: LEAD_FROM_EMAIL || 'BathCentric Website <onboarding@resend.dev>',
      to: LEAD_TO_EMAIL.split(',').map((s) => s.trim()),
      ...(fields.Email ? { reply_to: fields.Email } : {}),
      subject: `${kind}: ${fields.Name} (${fields.Location})`,
      html: `<h2 style="font-family:sans-serif">${kind} from bathcentric website</h2><table style="font-family:sans-serif;border-collapse:collapse">${rows}</table><p style="font-family:sans-serif">${attachments.length} photo(s) attached.</p>`,
      attachments,
    }),
  });

  if (!r.ok) {
    console.error('lead: resend failed', r.status, await r.text().catch(() => ''));
    return json(res, 502, { success: false, message: 'We could not send your enquiry. Please try again or use WhatsApp.' });
  }
  return json(res, 200, { success: true });
}

export const config = { api: { bodyParser: { sizeLimit: '4mb' } } };
