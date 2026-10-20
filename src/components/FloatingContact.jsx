import { brand, telHref, waHref } from '../config';

// Floating WhatsApp and call buttons; each appears only once its number is configured.
export default function FloatingContact() {
  if (!brand.whatsapp && !brand.phone) return null;
  return (
    <aside className="float" aria-label="Quick contact">
      {brand.whatsapp && (
        <a className="float-btn float-wa" href={waHref('Hello, I would like to know more about your shower enclosures.')} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${brand.whatsappDisplay} (opens in a new tab)`} title={`WhatsApp ${brand.whatsappDisplay}`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M12.03 6.17a5.77 5.77 0 0 0-4.75 9.05l-.71 2.6 2.66-.7a5.77 5.77 0 1 0 2.8-10.95Zm10.22 5.77A10.25 10.25 0 0 1 7.25 21.04l-5.56 1.46 1.49-5.42A10.25 10.25 0 1 1 22.25 11.94Z" />
          </svg>
        </a>
      )}
      {brand.phone && (
        <a className="float-btn float-call" href={telHref} aria-label={`Call ${brand.phone}`} title={`Call ${brand.phone}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2Z" />
          </svg>
        </a>
      )}
    </aside>
  );
}
