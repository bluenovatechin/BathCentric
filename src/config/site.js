// Single source of truth for business details and deployment settings.
// Everything environment-specific comes from VITE_* variables (see .env.example)
// so moving from GitHub Pages to Vercel + bathcentric.in is a config change only.

const env = import.meta.env;

const trimSlash = (s) => String(s || '').replace(/\/+$/, '');

export const SITE_URL = trimSlash(env.VITE_SITE_URL || 'https://bluenovatechin.github.io/BathCentric');
export const BASE_PATH = env.BASE_URL || '/';

export const site = {
  name: 'BathCentric',
  legalName: 'BathCentric',
  tagline: 'Designed around your bathroom.',
  description:
    'Custom frameless shower enclosures made to measure: single panel, swing, sliding and L-type. 8mm toughened Saint-Gobain glass, SS 304 fittings in chrome, gold, rose gold or matte black.',

  // TODO(BathCentric): replace these placeholders with the real business details before launch.
  phoneDisplay: env.VITE_PHONE_DISPLAY || '+91 98765 43210',
  phoneE164: env.VITE_PHONE_E164 || '+919876543210',
  whatsappNumber: env.VITE_WHATSAPP_NUMBER || '919876543210',
  email: env.VITE_EMAIL || 'enquiries@bathcentric.in',
  serviceArea: env.VITE_SERVICE_AREA || '',
  hours: 'Monday – Saturday, 10:00 AM – 7:00 PM IST',

  social: {
    instagram: env.VITE_INSTAGRAM_URL || '',
    facebook: env.VITE_FACEBOOK_URL || '',
  },
};

// Integrations. All of these are public, browser-safe identifiers; secret keys never live here.
export const integrations = {
  // GA4 measurement id, e.g. G-XXXXXXXXXX. Loaded only after cookie consent.
  gaId: env.VITE_GA_ID || '',
  // 'web3forms' (GitHub Pages, today) or 'api' (Vercel serverless function at /api/lead).
  formProvider: env.VITE_FORM_PROVIDER || (env.VITE_WEB3FORMS_KEY ? 'web3forms' : ''),
  // Web3Forms access keys are designed to be public: they only allow sending to the inbox they were created for.
  web3formsKey: env.VITE_WEB3FORMS_KEY || '',
  apiEndpoint: env.VITE_LEAD_API || '/api/lead',
  // Cloudflare Turnstile site key (public). Verified server-side by api/lead.js.
  turnstileSiteKey: env.VITE_TURNSTILE_SITE_KEY || '',
  googleSiteVerification: env.VITE_GOOGLE_SITE_VERIFICATION || '',
};

export const absoluteUrl = (path = '/') => SITE_URL + (path.startsWith('/') ? path : `/${path}`);

// Prefix a public-folder asset with the deploy base path (/BathCentric/ on GitHub Pages, / on Vercel).
export const asset = (path) => `${BASE_PATH}${String(path).replace(/^\/+/, '')}`;

export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:${site.phoneE164}`;
export const mailLink = `mailto:${site.email}`;
