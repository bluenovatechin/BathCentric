// Google Analytics 4, loaded only after the visitor accepts analytics cookies.
// Tracks the events the brief asks for: WhatsApp clicks, call clicks and enquiry submissions.
import { integrations } from '../config/site';

const CONSENT_KEY = 'bc_cookie_consent';
let loaded = false;

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY); // 'granted' | 'denied' | null
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // storage blocked (private mode): the choice simply lasts for this page view
  }
  if (value === 'granted') loadAnalytics();
  window.dispatchEvent(new CustomEvent('bc:consent', { detail: value }));
}

export function loadAnalytics() {
  const id = integrations.gaId;
  if (loaded || !id || typeof window === 'undefined') return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
  };
  window.gtag('js', new Date());
  window.gtag('config', id, { send_page_view: false, anonymize_ip: true });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  trackPageView(window.location.pathname + window.location.search);
}

export function trackPageView(path) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href, page_title: document.title });
}

export function track(event, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', event, params);
}

// One delegated listener tracks every WhatsApp / phone / email link on the site.
export function installClickTracking() {
  const onClick = (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const where = { link_location: a.dataset.track || window.location.pathname };
    if (href.includes('wa.me/')) track('whatsapp_click', where);
    else if (href.startsWith('tel:')) track('call_click', where);
    else if (href.startsWith('mailto:')) track('email_click', where);
  };
  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
