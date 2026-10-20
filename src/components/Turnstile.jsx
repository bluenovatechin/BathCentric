import { useEffect, useRef } from 'react';
import { integrations } from '../config/site';

const SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

// Cloudflare Turnstile bot check. Renders nothing unless VITE_TURNSTILE_SITE_KEY is set;
// the token is verified server-side by api/lead.js.
export default function Turnstile({ onToken }) {
  const ref = useRef(null);
  const siteKey = integrations.turnstileSiteKey;

  useEffect(() => {
    if (!siteKey || !ref.current) return undefined;
    let widgetId;
    const render = () => {
      widgetId = window.turnstile.render(ref.current, {
        sitekey: siteKey,
        callback: onToken,
        'expired-callback': () => onToken(''),
        'error-callback': () => onToken(''),
      });
    };
    if (window.turnstile) render();
    else {
      let s = document.querySelector(`script[src="${SCRIPT}"]`);
      if (!s) {
        s = document.createElement('script');
        s.src = SCRIPT;
        s.async = true;
        document.head.appendChild(s);
      }
      s.addEventListener('load', render, { once: true });
    }
    return () => {
      if (widgetId !== undefined && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [siteKey, onToken]);

  if (!siteKey) return null;
  return <div ref={ref} className="turnstile-box" />;
}
