// Forms are delivered through WhatsApp: the details are formatted into a message and the visitor's
// WhatsApp opens with it ready to send. Nothing is stored or sent anywhere else by the website.
import { brand } from '../config';
import { track } from './analytics';

export const whatsappReady = () => Boolean(brand.whatsapp);

export function buildMessage(title, fields) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `*${k}:* ${String(v).trim()}`);
  return `Hello ${brand.name},\n${title}\n\n${lines.join('\n')}`;
}

export const whatsappUrl = (text) => `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`;

// Opens WhatsApp in a new tab (app on phones). Returns the URL so the page can show a fallback link.
export function sendToWhatsApp(formName, title, fields) {
  const url = whatsappUrl(buildMessage(title, fields));
  track('generate_lead', { form_name: formName, method: 'whatsapp' });
  const win = window.open(url, '_blank', 'noopener');
  return { url, opened: Boolean(win) };
}
