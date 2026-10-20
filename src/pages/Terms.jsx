import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { site, mailLink } from '../config/site';
import { warranty } from '../data/catalog';

// TODO(BathCentric): have this reviewed by your legal adviser and add payment, cancellation and jurisdiction details.
export const TERMS_UPDATED = '17 October 2026';

export default function Terms() {
  return (
    <>
      <PageHero crumbs={[['Terms & Conditions']]} title="Terms and conditions">
        Last updated {TERMS_UPDATED}
      </PageHero>

      <section className="section section-top">
        <div className="container prose">
          <p>
            These terms apply when you use the {site.name} website and when you request a quote from us. By using the site
            you agree to them.
          </p>

          <h2>1. Website content</h2>
          <p>
            We keep the information on this site accurate and up to date, but it is general information, not a binding
            offer. Product images are for illustration and some are design visualisations. Glass and finishes can look
            slightly different in person.
          </p>

          <h2>2. Prices and quotations</h2>
          <ul>
            <li>Prices on this site are per square foot (or per bathroom where stated) and exclude GST.</li>
            <li>GST is charged at the prevailing rate on the date of invoicing.</li>
            <li>
              Your price depends on the measured size, enclosure type, glass, finish and add-ons. The written quotation we
              send you is the only binding price.
            </li>
            <li>Payment terms, validity and timelines are set out in your quotation.</li>
          </ul>

          <h2>3. Measurement and orders</h2>
          <p>
            Every enclosure is made to measure. Your order is confirmed when you accept our written quotation. Because
            glass is cut to your measurements, changes or cancellations after manufacturing starts may not be possible; the
            quotation explains what applies.
          </p>

          <h2>4. Installation</h2>
          <p>
            Please make sure the shower area is ready on the agreed date: walls and floor tiled and finished, and clear
            access to the bathroom. If the site is not ready, we may need to reschedule.
          </p>

          <h2>5. Warranty</h2>
          <p>
            Stainless steel fittings carry a {warranty.fittingsYears}-year warranty and glass carries a{' '}
            {warranty.glassYears}-year breakage warranty, both from the date of installation. Full warranty conditions are
            provided with your invoice.
          </p>

          <h2>6. Enquiries and your data</h2>
          <p>
            When you send an enquiry, you confirm the details are yours and accurate. We handle your data as described in
            our <Link to="/privacy-policy">privacy policy</Link>.
          </p>

          <h2>7. Acceptable use</h2>
          <p>
            Do not misuse the website, including sending spam or automated submissions, attempting to break its security,
            or copying its content for commercial use without permission.
          </p>

          <h2>8. Intellectual property</h2>
          <p>
            The {site.name} name, logo, text and images on this site belong to {site.name} or are used with permission.
          </p>

          <h2>9. Liability</h2>
          <p>
            We are not liable for losses caused by relying on general information on this website. Nothing in these terms
            limits rights you have under Indian consumer protection law.
          </p>

          <h2>10. Governing law</h2>
          <p>These terms are governed by the laws of India.</p>

          <h2>11. Contact</h2>
          <p>
            Questions about these terms? Email <a href={mailLink}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
