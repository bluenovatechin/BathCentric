import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Blocks';
import { brand, mailHref } from '../config';

// Starting drafts. Have them reviewed by a legal adviser and add the registered business details.
const UPDATED = '17 October 2026';
const contact = brand.email ? <a href={mailHref}>{brand.email}</a> : 'the contact details on our Get a Quote page';

export function Privacy() {
  const cookies = () => window.dispatchEvent(new Event('bc:cookies'));
  return (
    <>
      <PageHeader crumbs={[['Privacy Policy']]} title="Privacy Policy"><p>Last updated {UPDATED}</p></PageHeader>
      <section className="section">
        <div className="wrap prose">
          <p>This policy explains what information {brand.name} collects through this website and how it is used, in line with India&apos;s Digital Personal Data Protection Act, 2023.</p>
          <h2>What we collect</h2>
          <ul>
            <li><strong>Quote and contact forms:</strong> the details you enter are not stored by this website. They are placed into a WhatsApp message that you choose to send to us on {brand.whatsappDisplay}, so we receive them only if you press send.</li>
            <li><strong>Analytics, only if you accept cookies:</strong> pages visited, device and browser type and approximate location, through Google Analytics.</li>
            <li><strong>Browser storage:</strong> your cookie choice.</li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To reply to your request and prepare your quote.</li>
            <li>To understand how the website is used, if you allowed analytics.</li>
          </ul>
          <p>We do not sell your information.</p>
          <h2>Who processes it</h2>
          <p>Our website host, Google Analytics (only with your consent), and WhatsApp (Meta) for the messages you send us.</p>
          <h2>How long we keep it</h2>
          <p>Quote requests are kept for up to 24 months after our last contact with you, unless a longer period is required by law.</p>
          <h2>Your rights</h2>
          <p>You can ask to see, correct or delete your information, or withdraw your consent, by contacting {contact}.</p>
          <h2>Cookies</h2>
          <p>Google Analytics cookies (<code>_ga</code>, <code>_ga_*</code>) are set only after you click Accept. Essential browser storage (<code>bc_consent</code>) does not identify you.</p>
          <p><button type="button" className="btn btn-outline btn-sm" onClick={cookies}>Change cookie settings</button></p>
          <h2>Security</h2>
          <p>This website is served over HTTPS. WhatsApp messages are end-to-end encrypted by WhatsApp.</p>
          <p>See also our <Link to="/terms">Terms & Conditions</Link>.</p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <PageHeader crumbs={[['Terms & Conditions']]} title="Terms & Conditions"><p>Last updated {UPDATED}</p></PageHeader>
      <section className="section">
        <div className="wrap prose">
          <h2>Website</h2>
          <p>Information on this website is for general guidance. Images are for illustration; glass and finishes may look slightly different in person.</p>
          <h2>Prices</h2>
          <p>Prices are not shown on this website. Every enclosure and service is priced on a written quotation after we understand or measure your bathroom. Applicable taxes are shown on the quotation, and your written quotation is the final price.</p>
          <h2>Warranty</h2>
          <p>Our stainless steel fittings come with a 7 year warranty. Glasses come with a 3 year breakage warranty. Warranty conditions are provided with your quotation.</p>
          <h2>Quote requests</h2>
          <p>When you send a request, please make sure your details are accurate. We handle your information as described in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
          <h2>Use of the website</h2>
          <p>Do not misuse this website, for example by sending automated or spam requests. The {brand.name} name, logo and content belong to {brand.name}.</p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India.</p>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="section notfound">
      <div className="wrap wrap-narrow center">
        <p className="notfound-code" aria-hidden="true">404</p>
        <h1 className="display">Page not found</h1>
        <p className="muted">The page you are looking for does not exist.</p>
        <div className="result-actions">
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/shower-enclosures" className="btn btn-outline">Shower Enclosures</Link>
        </div>
      </div>
    </section>
  );
}
