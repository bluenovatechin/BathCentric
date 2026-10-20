import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, setConsent, loadAnalytics } from '../lib/analytics';

// Analytics stays off until the visitor accepts. "Cookie settings" in the footer reopens this.
export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = getConsent();
    if (c === 'granted') loadAnalytics();
    if (c === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener('bc:cookies', reopen);
    return () => window.removeEventListener('bc:cookies', reopen);
  }, []);

  if (!open) return null;
  const choose = (v) => {
    setConsent(v);
    setOpen(false);
  };

  return (
    <div className="cookie" role="region" aria-label="Cookie consent">
      <p>
        We use cookies for analytics only if you allow it. Read our <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => choose('denied')}>Decline</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => choose('granted')}>Accept</button>
      </div>
    </div>
  );
}
