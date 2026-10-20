import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, setConsent, loadAnalytics } from '../lib/analytics';

// Analytics cookies stay off until the visitor accepts. The footer's "Cookie settings" link reopens this.
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === 'granted') loadAnalytics();
    else if (consent === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener('bc:cookie-settings', reopen);
    return () => window.removeEventListener('bc:cookie-settings', reopen);
  }, []);

  if (!open) return null;

  const choose = (value) => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-text">
      <div className="cookie-inner">
        <div>
          <p id="cookie-title" className="cookie-title">Cookies on this site</p>
          <p id="cookie-text" className="cookie-text">
            We use essential storage to make the site work. With your permission we also use Google Analytics cookies to
            understand which pages help visitors. See our <Link to="/privacy-policy">privacy policy</Link>.
          </p>
        </div>
        <div className="cookie-actions">
          <button type="button" className="btn btn-outline btn-sm" onClick={() => choose('denied')}>
            Reject
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => choose('granted')}>
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
