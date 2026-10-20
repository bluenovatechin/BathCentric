import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { site, mailLink } from '../config/site';

// TODO(BathCentric): have this reviewed by your legal adviser and add the registered business name and address.
export const PRIVACY_UPDATED = '17 October 2026';

export default function Privacy() {
  const openCookieSettings = () => window.dispatchEvent(new Event('bc:cookie-settings'));

  return (
    <>
      <PageHero crumbs={[['Privacy Policy']]} title="Privacy policy">
        Last updated {PRIVACY_UPDATED}
      </PageHero>

      <section className="section section-top">
        <div className="container prose">
          <p>
            This policy explains what personal information {site.name} collects through this website, why we collect it,
            and the choices you have. We process personal data in line with India&apos;s Digital Personal Data Protection
            Act, 2023.
          </p>

          <h2>Who we are</h2>
          <p>
            {site.legalName} designs and installs custom shower enclosures. For any privacy question or request, email us
            at <a href={mailLink}>{site.email}</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Details you send us</strong> through the quote or contact form, or on WhatsApp: your name, mobile
              number, email (optional), city and area, details about your bathroom, any photos you add, and your message.
            </li>
            <li>
              <strong>Analytics data, only if you accept analytics cookies:</strong> pages you visit, how you reached the
              site, device and browser type, and an approximate location based on your IP address, collected by Google
              Analytics.
            </li>
            <li>
              <strong>Essential browser storage:</strong> your cookie choice and a short timer that stops a form being sent
              twice by accident. These do not identify you.
            </li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To reply to your enquiry and prepare your quote.</li>
            <li>To arrange measurement, manufacturing, installation and warranty service if you go ahead.</li>
            <li>To understand which pages are useful and improve the website (analytics, with your consent).</li>
            <li>To meet legal, tax and accounting obligations.</li>
          </ul>
          <p>We do not sell your personal data, and we do not use it for unrelated marketing without your consent.</p>

          <h2>Who we share it with</h2>
          <p>We share data only with service providers that help us run the website and reply to you:</p>
          <ul>
            <li>our website host, which serves the site;</li>
            <li>our form and email providers, which deliver your enquiry to our inbox;</li>
            <li>Google Analytics, if you accept analytics cookies;</li>
            <li>WhatsApp (Meta), if you choose to message us there.</li>
          </ul>
          <p>Some of these providers may process data outside India. We only use providers that protect it appropriately.</p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiry details for up to 24 months after our last contact with you. If you become a customer, we keep
            the details needed for your warranty and for legal and tax records for as long as those require.
          </p>

          <h2>Your rights</h2>
          <p>You can ask us to:</p>
          <ul>
            <li>tell you what personal data we hold about you;</li>
            <li>correct or update it;</li>
            <li>delete it, where we do not need to keep it by law;</li>
            <li>stop contacting you, by withdrawing your consent at any time.</li>
          </ul>
          <p>
            Email <a href={mailLink}>{site.email}</a> and we will respond within 30 days. If you are not satisfied with our
            response, you may complain to the Data Protection Board of India.
          </p>

          <h2>Cookies</h2>
          <div className="table-scroll" role="region" aria-label="Cookies used on this site" tabIndex={0}>
          <table className="specs-table">
            <thead>
              <tr><th scope="col">Name</th><th scope="col">Purpose</th><th scope="col">Type</th></tr>
            </thead>
            <tbody>
              <tr><td>bc_cookie_consent</td><td>Remembers your cookie choice</td><td>Essential (browser storage)</td></tr>
              <tr><td>bc_last_lead</td><td>Prevents a form being sent twice by accident</td><td>Essential (browser storage)</td></tr>
              <tr><td>_ga, _ga_*</td><td>Google Analytics: counts visits and page views</td><td>Analytics, only with consent (up to 2 years)</td></tr>
            </tbody>
          </table>
          </div>
          <p>
            <button type="button" className="btn btn-outline btn-sm" onClick={openCookieSettings}>Change cookie settings</button>
          </p>

          <h2>Security</h2>
          <p>
            The site is served over HTTPS, and enquiries are sent over an encrypted connection. Access to enquiries is
            limited to the people who need it to serve you.
          </p>

          <h2>Children</h2>
          <p>This website is meant for adults. We do not knowingly collect data from children.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy. The date at the top shows when it last changed.</p>

          <p>
            See also our <Link to="/terms">terms and conditions</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
