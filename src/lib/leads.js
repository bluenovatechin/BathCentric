// Sends an enquiry to BathCentric. No secret keys live in the browser:
//  - 'web3forms' (GitHub Pages today): posts to Web3Forms with its public access key; it emails the lead.
//  - 'api' (Vercel later): posts to /api/lead, which verifies the request and emails it with server-side keys.
//  - not configured: the caller falls back to opening WhatsApp with the enquiry pre-filled.
import { integrations, site, whatsappLink } from '../config/site';

const MIN_FILL_MS = 3000; // humans take longer than this to fill a form
const RESUBMIT_MS = 30000;
const LAST_KEY = 'bc_last_lead';

export const leadsConfigured = () =>
  (integrations.formProvider === 'web3forms' && !!integrations.web3formsKey) || integrations.formProvider === 'api';

// Resize a photo in the browser so uploads stay small (max 1600px, JPEG).
export function compressImage(file, maxSide = 1600, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve({ name: file.name.replace(/\.\w+$/, '') + '.jpg', type: 'image/jpeg', dataUrl: canvas.toDataURL('image/jpeg', quality) });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Could not read ${file.name}. Please try a JPG or PNG photo.`));
    };
    img.src = url;
  });
}

const summarise = (fields) =>
  Object.entries(fields)
    .filter(([, v]) => v !== '' && v != null)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');

export const whatsappHandoff = (title, fields) => whatsappLink(`Hi ${site.name}, ${title}\n\n${summarise(fields)}`);

/**
 * @param {object} opts
 * @param {string} opts.formName      'quote' | 'contact'
 * @param {object} opts.fields        human-readable label -> value
 * @param {Array}  [opts.photos]      [{ name, type, dataUrl }]
 * @param {string} opts.honeypot      value of the hidden field (bots fill it)
 * @param {number} opts.startedAt     Date.now() when the form was first shown
 * @param {string} [opts.turnstileToken]
 * @returns {Promise<{ ok: boolean, spam?: boolean, error?: string, notConfigured?: boolean }>}
 */
export async function submitLead({ formName, fields, photos = [], honeypot, startedAt, turnstileToken }) {
  // Bots: pretend success, send nothing.
  if (honeypot || Date.now() - startedAt < MIN_FILL_MS) return { ok: true, spam: true };

  try {
    const last = Number(localStorage.getItem(LAST_KEY) || 0);
    if (Date.now() - last < RESUBMIT_MS) return { ok: false, error: 'You just sent an enquiry. Please wait a few seconds before sending another.' };
  } catch {
    // storage unavailable: skip the client-side throttle (the server/provider still rate-limits)
  }

  if (!leadsConfigured()) return { ok: false, notConfigured: true };

  const subject = `New ${formName === 'quote' ? 'quote request' : 'enquiry'} from ${fields.Name || 'website'}`;
  let res;
  try {
    if (integrations.formProvider === 'web3forms') {
      res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: integrations.web3formsKey,
          subject,
          from_name: `${site.name} website`,
          botcheck: false,
          ...fields,
          ...(photos.length ? { Photos: `${photos.length} photo(s) selected. Ask the customer to share them on WhatsApp.` } : {}),
        }),
      });
    } else {
      res = await fetch(integrations.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formName, subject, fields, photos, turnstileToken, website: honeypot, elapsedMs: Date.now() - startedAt }),
      });
    }
  } catch {
    return { ok: false, error: 'We could not reach our server. Please check your connection, or send your enquiry on WhatsApp.' };
  }

  let body = {};
  try {
    body = await res.json();
  } catch {
    // non-JSON error page
  }
  if (!res.ok || body.success === false) {
    return { ok: false, error: body.message || body.error || 'Something went wrong sending your enquiry. Please try again or use WhatsApp.' };
  }
  try {
    localStorage.setItem(LAST_KEY, String(Date.now()));
  } catch {
    // ignore
  }
  return { ok: true };
}
