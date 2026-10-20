// Google Analytics 4, loaded only after the visitor accepts analytics cookies.
import { integrations } from '../config';

const KEY = 'bc_consent';
let loaded = false;

export function getConsent() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    // storage blocked: the choice lasts for this visit only
  }
  if (value === 'granted') loadAnalytics();
}

export function loadAnalytics() {
  if (loaded || !integrations.gaId) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
  };
  window.gtag('js', new Date());
  window.gtag('config', integrations.gaId, { send_page_view: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(integrations.gaId)}`;
  document.head.appendChild(s);
  pageView();
}

export function track(event, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) window.gtag('event', event, params);
}

export const pageView = () => track('page_view', { page_location: window.location.href, page_title: document.title });

// One listener for every phone / WhatsApp / email link on the site.
export function trackContactClicks() {
  const onClick = (e) => {
    const href = e.target.closest?.('a[href]')?.getAttribute('href') || '';
    if (href.includes('wa.me/')) track('whatsapp_click');
    else if (href.startsWith('tel:')) track('call_click');
    else if (href.startsWith('mailto:')) track('email_click');
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
