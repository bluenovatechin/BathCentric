// Deployment settings and business contact details. All values come from VITE_* environment
// variables (see .env.example). Contact details are not part of the catalogue, so anything left
// empty is simply not shown on the site.
const env = import.meta.env;

export const SITE_URL = String(env.VITE_SITE_URL || 'https://bluenovatechin.github.io/BathCentric').replace(/\/+$/, '');
export const BASE = env.BASE_URL || '/';

// BathCentric's WhatsApp and phone number. Quote and contact forms are sent here.
const NUMBER = '919876543210';

const whatsapp = String(env.VITE_WHATSAPP || NUMBER).replace(/\D/g, ''); // digits with country code
// "+91 98765 43210" for display
const pretty = (d) => (d.length === 12 && d.startsWith('91') ? `+91 ${d.slice(2, 7)} ${d.slice(7)}` : `+${d}`);

export const brand = {
  name: 'BathCentric',
  phone: env.VITE_PHONE || pretty(whatsapp), // shown as written, e.g. "+91 90000 00000"
  whatsapp,
  whatsappDisplay: pretty(whatsapp),
  email: env.VITE_EMAIL || '',
  address: env.VITE_ADDRESS || '', // showroom / office address
  area: env.VITE_SERVICE_AREA || '', // e.g. "Ahmedabad and Gandhinagar"
  hours: env.VITE_HOURS || '', // e.g. "Mon–Sat, 10 am – 7 pm"
};

export const integrations = {
  gaId: env.VITE_GA_ID || '', // GA4, loaded only after cookie consent
  googleVerification: env.VITE_GOOGLE_SITE_VERIFICATION || '',
};

export const asset = (p) => `${BASE}${String(p).replace(/^\/+/, '')}`;
export const absUrl = (p = '/') => SITE_URL + (p.startsWith('/') ? p : `/${p}`);
export const telHref = brand.phone ? `tel:${brand.phone.replace(/[^\d+]/g, '')}` : '';
export const mailHref = brand.email ? `mailto:${brand.email}` : '';
export const waHref = (text = '') =>
  brand.whatsapp ? `https://wa.me/${brand.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : '';
