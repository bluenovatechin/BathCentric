import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Contact</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Get In Touch</span>
          <h1>We Are Here To Assist Your Project</h1>
          <p>
            Whether you need technical advice on door swing clearances, glass load specifications, or scheduling an on-site laser survey, our advisors respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Channels & Information Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: '4rem' }}>

            {/* Contact Info Left Column */}
            <div>
              <span className="eyebrow">Direct Channels</span>
              <h2>Talk With A Shower Specialist</h2>
              <p style={{ marginBottom: '2rem' }}>
                Reach our engineering desk directly for instant support or project collaboration.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div className="feature-icon" style={{ marginBottom: 0, flexShrink: 0 }}><Icon name="phone" /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Telephone Support</h4>
                    <p style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>Monday – Saturday, 9:30 AM – 7:30 PM IST</p>
                    <a href="tel:+919876543210" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-accent-dark)' }}>
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div className="feature-icon" style={{ marginBottom: 0, flexShrink: 0, background: 'rgba(37, 211, 102, 0.15)', color: 'var(--color-whatsapp-dark)' }}><Icon name="chat" /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>WhatsApp Instant Consultation</h4>
                    <p style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>Send site photos and drawings for fastest review</p>
                    <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20enquire%20about%20a%20shower%20enclosure." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                      Chat on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div className="feature-icon" style={{ marginBottom: 0, flexShrink: 0 }}><Icon name="mail" /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Email Inquiries</h4>
                    <p style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>For architectural RFPs and formal tenders</p>
                    <a href="mailto:enquiries@bathcentric.in" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                      enquiries@bathcentric.in
                    </a>
                  </div>
                </div>

              </div>

              {/* Service Coverage Metros */}
              <div style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.75rem' }}>
                <h4 style={{ marginBottom: '0.75rem' }}>Metro Service Coverage Areas:</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                  Our digital laser survey and white-glove installation teams operate across major Indian metropolitan areas:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge-tag">Mumbai MMR</span>
                  <span className="badge-tag">Bengaluru</span>
                  <span className="badge-tag">Delhi NCR & Gurgaon</span>
                  <span className="badge-tag">Hyderabad</span>
                  <span className="badge-tag">Pune</span>
                  <span className="badge-tag">Chennai</span>
                  <span className="badge-tag">Kolkata</span>
                  <span className="badge-tag">Ahmedabad</span>
                </div>
              </div>

            </div>

            {/* General Enquiry Form Right Column */}
            <div className="quote-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Send A Message</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.75rem' }}>We typically reply within 2 to 4 business hours.</p>

              {submitted ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--color-success)', borderRadius: 'var(--radius-sm)', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
                  <h4 style={{ color: 'var(--color-success)', marginBottom: '0.5rem' }}>Thank You!</h4>
                  <p style={{ fontSize: '0.9rem' }}>Your message has been received. A BathCentric specialist will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-name">Your Name</label>
                    <input type="text" id="c-name" className="form-control" placeholder="e.g. Rahul Sharma" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-phone">Phone / WhatsApp Number</label>
                    <input type="tel" id="c-phone" className="form-control" placeholder="e.g. +91 98200 12345" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-email">Email Address <span className="optional">(Optional)</span></label>
                    <input type="email" id="c-email" className="form-control" placeholder="e.g. rahul@example.com" />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-city">City / Location</label>
                    <input type="text" id="c-city" className="form-control" placeholder="e.g. Worli, Mumbai" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-message">How Can We Help?</label>
                    <textarea id="c-message" className="form-control" placeholder="Describe your project, bathroom dimensions, or questions..." required />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      <span>I agree to allow BathCentric to contact me regarding my inquiry.</span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Message</button>
                </form>
              )}

              <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Have bathroom photos ready?</span><br />
                <Link to="/quote" style={{ fontWeight: 600, color: 'var(--color-accent-dark)', textDecoration: 'underline' }}>
                  Use our Photo Upload Quotation Form &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
