import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>About</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>The BathCentric Philosophy</span>
          <h1>Architectural Bathroom Solutions</h1>
          <p>
            We founded BathCentric on a singular principle: your bathroom is an intimate architectural retreat. We engineer custom architectural glass, luxury solid brass accessories, and bespoke shower enclosures that harmonize in beauty and longevity.
          </p>
        </div>
      </section>

      {/* Brand Story & Core Ethos */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Our Story &amp; Positioning</span>
              <h2>Rejecting The "One-Size-Fits-All" Box</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                For decades, bathroom renovation required homeowners to compromise. Either choose a clumsy plastic-framed modular cubicle that leaked and rattled, or purchase mismatched hardware and uncertified glass that quickly sagged and stained.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                <strong>BathCentric was built to bridge this chasm.</strong> We operate as an architectural partner for architects, interior designers, and homeowners. We fabricate custom architectural glass partitions, craft matching solid brass accessories (towel bars, robe hooks, floating shelves, and drains in 5 PVD finishes), and engineer frameless shower systems measured on-site with laser precision.
              </p>
              <div className="stat-row">
                <div className="stat-item">
                  <div className="stat-number">1,500+</div>
                  <div className="stat-label">Bathrooms Transformed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Coordinated PVD Finishes</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5 Years</div>
                  <div className="stat-label">Warranty Promise</div>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/about.jpg" alt="BathCentric Architectural Craftsmanship" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services: Design, Redesign, Products, Maintenance */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Comprehensive Capabilities</span>
            <h2>What We Do: Turnkey Bathroom Solutions</h2>
            <p>From conceptual layout design and existing bathroom renovation to specialized product fabrication and long-term care.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {/* 1. Custom Bathroom Design & Implementation */}
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>01 • From Blueprint To Reality</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  Bespoke Bathroom Design &amp; Implementation
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Every home has unique architecture. We design and execute bathrooms tailored precisely around your space limitations, plumbing risers, and lifestyle preferences.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#F8F9FA', padding: '14px', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-primary)' }}>Space &amp; Layout</strong>
                    <span style={{ fontSize: '0.82rem', color: '#666' }}>Laser-mapped zones eliminating awkward door and vanity clashes.</span>
                  </div>
                  <div style={{ background: '#F8F9FA', padding: '14px', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-primary)' }}>Budget Tailoring</strong>
                    <span style={{ fontSize: '0.82rem', color: '#666' }}>Transparent tiering from smart compact suites to palatial penthouses.</span>
                  </div>
                  <div style={{ background: '#F8F9FA', padding: '14px', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-primary)' }}>Accessory Selection</strong>
                    <span style={{ fontSize: '0.82rem', color: '#666' }}>Harmonized smart mirrors, linear drains, and solid brassware.</span>
                  </div>
                  <div style={{ background: '#F8F9FA', padding: '14px', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-primary)' }}>Turnkey Handover</strong>
                    <span style={{ fontSize: '0.82rem', color: '#666' }}>Single-point accountability from survey to watertight handover.</span>
                  </div>
                </div>
                <Link to="/quote" className="btn btn-primary btn-sm">Consult With A Bathroom Architect &rarr;</Link>
              </div>
              <div>
                <img
                  src="/images/service-design-implementation.jpg"
                  alt="Custom Bathroom Design and Implementation"
                  style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* 2. Bathroom Redesign & Renovation */}
            <div className="grid-2" style={{ alignItems: 'center', direction: 'rtl' }}>
              <div style={{ direction: 'ltr' }}>
                <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>02 • Upgrading Existing Spaces</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  Bathroom Redesign &amp; Complete Renovation
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Tired of slippery wet floors, stained grout, leaky shower curtains, or outdated tile layouts? We transform existing, older bathrooms into modern hotel-grade sanctuaries.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem' }}>
                    <Icon name="check" size={16} style={{ color: 'var(--color-accent)' }} />
                    <span>Replacement of damaged acrylic doors, curtains, and corroded channels</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem' }}>
                    <Icon name="check" size={16} style={{ color: 'var(--color-accent)' }} />
                    <span>Wet/Dry retrofitting with recessed linear floor drains and floor re-sloping</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem' }}>
                    <Icon name="check" size={16} style={{ color: 'var(--color-accent)' }} />
                    <span>Modern tile overlay or complete retiling with vanity counter modernization</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem' }}>
                    <Icon name="check" size={16} style={{ color: 'var(--color-accent)' }} />
                    <span>Dust-controlled, rapid execution keeping domestic disruption to a minimum</span>
                  </li>
                </ul>
                <Link to="/quote" className="btn btn-primary btn-sm">Plan Your Bathroom Redesign &rarr;</Link>
              </div>
              <div style={{ direction: 'ltr' }}>
                <img
                  src="/images/bathroom-renovation.jpg"
                  alt="Bathroom Redesign and Renovation by BathCentric"
                  style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* 3. Preventive Maintenance & Care */}
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>03 • Protecting Your Investment</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  Specialized Maintenance &amp; Care Services
                </h3>
                <p style={{ marginBottom: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  High-mineral Indian hard water, soap film, and humidity take a toll over time. Our dedicated maintenance crew ensures your bathroom retains its day-one sparkle year after year.
                </p>
                <div className="grid-2" style={{ gap: '12px', marginBottom: '1.5rem' }}>
                  <div style={{ background: '#F8F9FA', padding: '12px 14px', borderRadius: '6px' }}>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary)', display: 'block' }}>Limescale Deep Extraction</strong>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>Eco-friendly descaling removing stubborn calcium cloudiness.</span>
                  </div>
                  <div style={{ background: '#F8F9FA', padding: '12px 14px', borderRadius: '6px' }}>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary)', display: 'block' }}>Hydrophobic Shield Refresh</strong>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>Re-bonding repellent nano-coatings on tempered glass surfaces.</span>
                  </div>
                  <div style={{ background: '#F8F9FA', padding: '12px 14px', borderRadius: '6px' }}>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary)', display: 'block' }}>Anti-Fungal Silicone Resealing</strong>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>Stripping aged caulk and applying fresh anti-mildew sealant.</span>
                  </div>
                  <div style={{ background: '#F8F9FA', padding: '12px 14px', borderRadius: '6px' }}>
                    <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary)', display: 'block' }}>Hardware Re-alignment</strong>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>Torque checking hinges, leveling tracks, and replacing soft-close buffers.</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20enquire%20about%20your%20Bathroom%20Maintenance%20and%20Care%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  Book Maintenance Visit On WhatsApp
                </a>
              </div>
              <div>
                <img
                  src="/images/bathroom-maintenance.jpg"
                  alt="Professional Bathroom Maintenance and Glass Care"
                  style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '340px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Quality Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Integrity In Every Detail</span>
            <h2>The Four Quality Pillars</h2>
            <p>How we ensure unmatched longevity and beauty in high-moisture bathroom spaces.</p>
          </div>

          <div className="grid-4">
            <div className="feature-card">
              <div className="feature-icon"><Icon name="gem" /></div>
              <h3 className="feature-title">Pure Certified Glass</h3>
              <p style={{ fontSize: '0.95rem' }}>Only 10mm & 12mm thermally tempered safety glass meeting EN 12150 and IS 2553 standards with diamond-polished pencil edges.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="shield" /></div>
              <h3 className="feature-title">Solid Brass & Stainless</h3>
              <p style={{ fontSize: '0.95rem' }}>Zero zinc alloy or hollow pot-metal. We use only drop-forged solid brass and SUS 304 marine-grade stainless steel.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="sparkle" /></div>
              <h3 className="feature-title">PVD Surface Technology</h3>
              <p style={{ fontSize: '0.95rem' }}>Physical Vapor Deposition creates an atomic bond impervious to steam, moisture, and cleaning detergents without tarnishing.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><Icon name="hardhat" /></div>
              <h3 className="feature-title">Certified In-House Crews</h3>
              <p style={{ fontSize: '0.95rem' }}>We never outsource installations to unvetted third parties. Every installer is full-time, trained, and accountable to BathCentric.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Presence */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <img src="/images/team-installers.jpg" alt="BathCentric Service Standards" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
            <div>
              <span className="eyebrow">Service Footprint</span>
              <h2>Serving Discerning Homes Across India</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Headquartered with dedicated regional survey teams across <strong>Mumbai, Bengaluru, Delhi NCR, Hyderabad, Chennai, and Pune</strong>.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Whether collaborating directly with leading architectural practices or private homeowners constructing or redesigning their dream bathroom, BathCentric delivers personalized attention, rapid turnaround, and relentless pursuit of perfection.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/quote" className="btn btn-primary">Book A Site Survey</Link>
                <Link to="/contact" className="btn btn-outline">Contact Regional Office</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
