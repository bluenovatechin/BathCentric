import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import FinishSelector from '../components/FinishSelector';
import useHeroParallax from '../components/useHeroParallax';

export default function Home() {
  const [bathroomSize, setBathroomSize] = useState('compact');
  const heroRef = useRef(null);
  useHeroParallax(heroRef);

  const sizeData = {
    compact: {
      title: 'Compact & Standard Apartment Bathrooms',
      area: 'Under 45 sq.ft (e.g. 5x7 ft or 4x8 ft)',
      problem: 'Water splashes all over the commode and basin, making the floor wet and slippery all day.',
      solution: 'Space-Saving Sliding Enclosure or Sleek Fixed Walk-In Screen',
      specs: ['Top-hung smooth sliding track', 'Zero door-swing collision', 'Keeps 65% of bathroom dry', '10mm Toughened Glass'],
      /* price: '₹14,500*', */
      price: "As per client's specifications",
      image: '/images/compact-bathroom.jpg',
      link: '/sliding'
    },
    medium: {
      title: 'Master Ensuite & Family Bathrooms',
      area: '45 – 85 sq.ft (e.g. 6x10 ft or 7x9 ft)',
      problem: 'Needs clear demarcation between the shower zone, vanity mirror, and WC without feeling cramped.',
      solution: 'Frameless Hinged Swing Door with In-line Fixed Glass',
      specs: ['Drop-forged 180° brass hinges', 'Magnetic watertight snap seals', 'Low-iron optical clarity', 'Matching brass towel rail'],
      /* price: '₹21,000*', */
      price: "As per client's specifications",
      image: '/images/medium-bathroom.jpg',
      link: '/swing'
    },
    spacious: {
      title: 'Luxury Villa & Penthouse Suites',
      area: '85+ sq.ft (e.g. 8x12 ft or expansive open wetrooms)',
      problem: 'Large open spaces requiring high-end architectural grandeur, private WC cubicles, and designer brassware.',
      solution: '90° L-Shaped Corner Cubicle or Fluted Reeded Glass Suite',
      specs: ['Dual 90° return glass panels', 'Tactile fluted privacy glass', 'Full suite of PVD accessories', 'Integrated linear floor drain'],
      /* price: '₹28,000*', */
      price: "As per client's specifications",
      image: '/images/spacious-bathroom.jpg',
      link: '/l-shaped'
    }
  };

  const activeSize = sizeData[bathroomSize];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background" aria-hidden="true">
          <div className="hero-media">
            <img src="/images/hero.jpg" alt="Architectural frameless glass shower enclosure and luxury bathroom accessories" fetchpriority="high" />
          </div>
          <div className="hero-light" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-pill">
              <span className="hero-pill-dot" />
              Turnkey Bathroom Design • Redesign • Glass &amp; Fittings
            </span>
            <h1 className="hero-title">
              Transform your bathroom with <span className="text-gradient">bespoke design &amp; glass.</span>
            </h1>
            <p className="hero-subtitle">
              We design, renovate, and implement complete bathrooms tailored to your space, layout, budget, and accessory preferences — from frameless glass shower enclosures and smart LED mirrors to invisible tile-insert drains.
            </p>
            <div className="hero-ctas">
              <Link to="/quote" className="btn btn-accent btn-lg">
                <Icon name="calendar" size={18} strokeWidth={2} />
                Book a FREE Site Visit
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20book%20a%20free%20site%20visit%20for%20my%20bathroom."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">100% Free</div>
              <div className="hero-stat-label">Doorstep Consultation</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">Tailored</div>
              <div className="hero-stat-label">Space, Layout &amp; Budget</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">Turnkey</div>
              <div className="hero-stat-label">Design, Install &amp; Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="trust-strip" aria-label="Certifications and commitments">
        <div className="container trust-strip-inner">
          <span>Saint-Gobain Certified Glass</span>
          <span>SUS 304 Marine Stainless</span>
          <span>Zero-Cost Doorstep Visit</span>
          <span>7 Days Quick Installation</span>
          <span>10-Year Hardware Durability</span>
        </div>
      </div>

      {/* Interactive Bathroom Size Selector (For any home!) */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Tailored For Every Home</span>
            <h2 className="section-title">What Size Is Your Bathroom?</h2>
            <p>
              Whether you live in a compact city apartment or an expansive independent villa, see how our custom glass solutions create a spotless wet &amp; dry divide for your specific floor plan.
            </p>
          </div>

          <div className="bathroom-matcher">
            {/* Tabs */}
            <div className="matcher-tabs">
              <div
                className={`matcher-tab ${bathroomSize === 'compact' ? 'active' : ''}`}
                onClick={() => setBathroomSize('compact')}
                role="button"
                tabIndex={0}
              >
                <div className="matcher-tab-title">1. Compact Apartment</div>
                <div className="matcher-tab-subtitle">Under 45 sq.ft • Small Ensuite</div>
              </div>

              <div
                className={`matcher-tab ${bathroomSize === 'medium' ? 'active' : ''}`}
                onClick={() => setBathroomSize('medium')}
                role="button"
                tabIndex={0}
              >
                <div className="matcher-tab-title">2. Master Ensuite</div>
                <div className="matcher-tab-subtitle">45 – 85 sq.ft • Standard Family</div>
              </div>

              <div
                className={`matcher-tab ${bathroomSize === 'spacious' ? 'active' : ''}`}
                onClick={() => setBathroomSize('spacious')}
                role="button"
                tabIndex={0}
              >
                <div className="matcher-tab-title">3. Villa / Luxury Suite</div>
                <div className="matcher-tab-subtitle">85+ sq.ft • Expansive Master</div>
              </div>
            </div>

            {/* Content Display */}
            <div className="matcher-content-grid">
              <div>
                <span className="badge-shimmer" style={{ marginBottom: '1rem' }}>
                  Recommended Layout
                </span>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                  {activeSize.solution}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                  <strong>Typical Dimensions:</strong> {activeSize.area}
                </p>

                <div style={{ background: 'var(--color-bg-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--color-border)' }}>
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.25rem' }}>Common Challenge:</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>{activeSize.problem}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  {activeSize.specs.map((spec, idx) => (
                    <span key={idx} className="matcher-spec-pill">
                      ✓ {spec}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {/* <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Indicative Starting Price</span>
                    <strong style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{activeSize.price}</strong>
                  </div> */}
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pricing Guide</span>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>As per client's specifications</strong>
                  </div>
                  <Link to="/quote" className="btn btn-accent">
                    Book Free Site Visit
                  </Link>
                  <Link to={activeSize.link} className="btn btn-outline btn-sm">
                    View System Details &rarr;
                  </Link>
                </div>
              </div>

              <div>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)', height: '340px' }}>
                  <img
                    src={activeSize.image}
                    alt={activeSize.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Bathroom Capabilities: Design, Redesign & Maintenance */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">End-to-End Bathroom Architecture</span>
            <h2 className="section-title">Designed As Per Your Space, Layout &amp; Budget</h2>
            <p>
              Whether creating a new master ensuite from scratch, remodeling an existing bathroom, or seeking preventive care, we engineer every detail to your exact specifications.
            </p>
          </div>

          <div className="grid-3">
            {/* 1. Design & Implementation */}
            <article className="feature-card" style={{ background: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/2', marginBottom: '20px' }}>
                <img
                  src="/images/service-design-implementation.jpg"
                  alt="Custom Bathroom Design and Implementation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(14, 31, 46, 0.85)',
                    color: 'var(--color-accent-on-dark)',
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  Custom Design
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-primary)' }}>
                Bespoke Design &amp; Execution
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '16px' }}>
                Custom layout planning, laser site surveys, and seamless integration of glass enclosures, vanity counters, tiles, and sanitaryware tailored to your budget.
              </p>
              <div style={{ padding: '10px 14px', background: '#F8F9FA', borderRadius: '6px', fontSize: '0.85rem', color: '#555', marginBottom: '16px' }}>
                <strong>Specifications:</strong> Space-optimized layout, plumb alignment, 3D proposal
              </div>
              <Link to="/quote" className="link-arrow" style={{ fontWeight: 600 }}>
                Request Custom Design <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </article>

            {/* 2. Redesign & Renovation */}
            <article className="feature-card" style={{ background: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/2', marginBottom: '20px' }}>
                <img
                  src="/images/bathroom-renovation.jpg"
                  alt="Bathroom Redesign and Renovation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(14, 31, 46, 0.85)',
                    color: 'var(--color-accent-on-dark)',
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  Redesign &amp; Remodel
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-primary)' }}>
                Bathroom Redesign &amp; Renovation
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '16px' }}>
                Transform old, damp, leaking bathrooms into sparkling hotel-grade sanctuaries. We replace flimsy curtains and corroded cubicles with clean wet/dry zoning.
              </p>
              <div style={{ padding: '10px 14px', background: '#F8F9FA', borderRadius: '6px', fontSize: '0.85rem', color: '#555', marginBottom: '16px' }}>
                <strong>Scope:</strong> Floor re-sloping, linear drain fitting, glass partitions, modern fixtures
              </div>
              <Link to="/quote" className="link-arrow" style={{ fontWeight: 600 }}>
                Plan Bathroom Renovation <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </article>

            {/* 3. Maintenance & Care */}
            <article className="feature-card" style={{ background: '#fff', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/2', marginBottom: '20px' }}>
                <img
                  src="/images/bathroom-maintenance.jpg"
                  alt="Bathroom Maintenance and Care Services"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(14, 31, 46, 0.85)',
                    color: 'var(--color-accent-on-dark)',
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  Maintenance &amp; Care
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: 'var(--color-primary)' }}>
                Preventive Maintenance &amp; Care
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '16px' }}>
                Keep your bathroom immaculate forever. Deep extraction of hard-water limescale, hydrophobic nano-seal replenishment, and anti-mildew silicone resealing.
              </p>
              <div style={{ padding: '10px 14px', background: '#F8F9FA', borderRadius: '6px', fontSize: '0.85rem', color: '#555', marginBottom: '16px' }}>
                <strong>Services:</strong> Acid-free descaling, nano-coating refresh, hinge torque tune
              </div>
              <Link to="/about" className="link-arrow" style={{ fontWeight: 600 }}>
                Learn About Annual Care <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Wet & Dry Zone Separation Value (Why every bathroom needs this!) */}
      <section className="section" style={{ paddingTop: 0, backgroundColor: 'var(--color-bg-white)' }}>
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <div className="wet-dry-banner">
            <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>The BathCentric Advantage</span>
            <h2>Why Modern Bathrooms Need a Wet &amp; Dry Division</h2>
            <p style={{ maxWidth: '720px', color: 'rgba(255, 255, 255, 0.85)' }}>
              In traditional Indian bathrooms without glass partitions, taking a single shower wets the entire room — soaking the toilet, fogging the vanity mirror, and creating dangerous slippery floors. Our glass enclosures solve this permanently.
            </p>

            <div className="wet-dry-grid">
              <div className="wet-box">
                <h4>🚫 Without Glass Partition</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                  <li>• Wet, hazardous slippery tiles across the entire room</li>
                  <li>• Water splashes on the toilet seat and vanity countertop</li>
                  <li>• High humidity creates black mold and soap-scum buildup</li>
                  <li>• Requires constant wiping and floor-mopping after every shower</li>
                </ul>
              </div>

              <div className="dry-box">
                <h4>✨ With BathCentric Glass Partition</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: '#BFE2F5' }}>
                  <li>• 100% of shower spray stays inside the wet zone</li>
                  <li>• Vanity, mirror, and toilet area remain completely dry and clean</li>
                  <li>• Safe for children, elderly parents, and guests</li>
                  <li>• Instant hotel-grade aesthetic that increases your home value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Shower Enclosures */}
      <section className="section full-width">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Our Enclosure Systems</span>
            <h2 className="section-title">Engineered For Your Exact Space</h2>
            <p>
              Custom-measured down to the millimeter. Choose the movement mechanism that matches your bathroom's layout and clearances.
            </p>
          </div>

          <div className="grid-4 full-width fullwidth-grid">
            {/* 1. Fixed Walk-In */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Walk-In Wetroom</span>
                <img src="/images/fixed.jpg" alt="Fixed Walk-In Shower Screen" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Fixed Walk-In Screen</h3>
                <p className="category-card-desc">Minimalist single glass panel with a stabilizer rod. Barrier-free open entry, ideal for quick daily use.</p>
                {/* <div className="category-card-price">From <strong>₹14,500*</strong></div> */}
                <div className="category-card-price" style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  As per client's specifications
                </div>
                <div className="category-card-footer">
                  <Link to="/fixed" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=fixed" className="btn btn-outline btn-sm">Book Visit</Link>
                </div>
              </div>
            </article>

            {/* 2. Sliding */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Space Saving</span>
                <img src="/images/sliding.jpg" alt="Sliding Shower Door Enclosure" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Sliding Glass System</h3>
                <p className="category-card-desc">Top-hung silent rollers with dual soft-close dampers. Zero swing-clearance required — perfect for compact spaces.</p>
                {/* <div className="category-card-price">From <strong>₹26,500*</strong></div> */}
                <div className="category-card-price" style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  As per client's specifications
                </div>
                <div className="category-card-footer">
                  <Link to="/sliding" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=sliding" className="btn btn-outline btn-sm">Book Visit</Link>
                </div>
              </div>
            </article>

            {/* 3. Swing / Frameless */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Hinged Luxury</span>
                <img src="/images/swing.jpg" alt="Frameless Swing Hinged Shower Door" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">Swing Frameless Door</h3>
                <p className="category-card-desc">Solid drop-forged brass hinges with watertight magnetic seals. Classic architectural elegance for spacious ensuites.</p>
                {/* <div className="category-card-price">From <strong>₹21,000*</strong></div> */}
                <div className="category-card-price" style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  As per client's specifications
                </div>
                <div className="category-card-footer">
                  <Link to="/swing" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=swing" className="btn btn-outline btn-sm">Book Visit</Link>
                </div>
              </div>
            </article>

            {/* 4. L-Shaped Corner */}
            <article className="category-card">
              <div className="category-card-img">
                <span className="category-badge">Corner Solution</span>
                <img src="/images/l-shaped.jpg" alt="L-Shaped Corner Glass Shower Enclosure" loading="lazy" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">L-Shaped Corner Unit</h3>
                <p className="category-card-desc">Two 90° glass panels utilizing corner zones efficiently. Available with sliding or pivot swing door entries.</p>
                {/* <div className="category-card-price">From <strong>₹28,000*</strong></div> */}
                <div className="category-card-price" style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  As per client's specifications
                </div>
                <div className="category-card-footer">
                  <Link to="/l-shaped" className="link-arrow">View Specs <Icon name="arrow" size={16} strokeWidth={2} /></Link>
                  <Link to="/quote?type=l-shaped" className="btn btn-outline btn-sm">Book Visit</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Smart LED Mirrors & Linear Floor Drains Showcase */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Bathroom Innovations</span>
            <h2 className="section-title">Smart Vanity Mirrors &amp; Invisible Linear Drains</h2>
            <p>
              Engineered specifically for the realities of Indian bathrooms: steam-resistant touch electronics and discreet anti-cockroach floor drainage.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {/* Mirror Card */}
            <article className="feature-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-border)', padding: '28px', borderRadius: '12px' }}>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/2', marginBottom: '20px' }}>
                <img
                  src="/images/mirror-arch.jpg"
                  alt="Architectural Smart LED Vanity Mirror with Defogger"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(14, 31, 46, 0.85)',
                    color: 'var(--color-accent-on-dark)',
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  Pill • Arch • Round • Rect
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--color-primary)' }}>
                Smart Touch-Sensor LED Mirrors
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                5mm copper-free high-definition float glass with integrated touch-sensor dimmer, 3-tone CCT color changing (Warm/Day/Cool), and rapid demister heating pads that eliminate steam in seconds.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span className="badge-tag">3-Tone CCT Light</span>
                <span className="badge-tag">Anti-Fog Defogger</span>
                <span className="badge-tag">Touch Dimmer</span>
                <span className="badge-tag">IP44 Waterproof</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  As per client's vanity specifications
                </div>
                <Link to="/mirrors" className="btn btn-primary btn-sm">
                  View All Smart Mirrors &rarr;
                </Link>
              </div>
            </article>

            {/* Drain Card */}
            <article className="feature-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-border)', padding: '28px', borderRadius: '12px' }}>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '3/2', marginBottom: '20px' }}>
                <img
                  src="/images/drain-tile-insert.jpg"
                  alt="Invisible Tile-Insert Linear Floor Drain Channel"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(14, 31, 46, 0.85)',
                    color: 'var(--color-accent-on-dark)',
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}
                >
                  SS304 Marine Steel
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--color-primary)' }}>
                Tile-Insert Linear Floor Drains
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Your bathroom floor tile fits directly into the top channel, creating an invisible, continuous floor plane. Equipped with a weighted gravity flap that permanently seals out cockroaches, drain flies, and sewer odors.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span className="badge-tag">Invisible Tile Insert</span>
                <span className="badge-tag">Anti-Cockroach Trap</span>
                <span className="badge-tag">Single-Slope Drainage</span>
                <span className="badge-tag">AISI-304 Heavy Gauge</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                  As per client's bathroom layout &amp; length
                </div>
                <Link to="/drains" className="btn btn-primary btn-sm">
                  Explore Linear Drains &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our 6 Commitments (Inspired by bathvera.in) */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Quality &amp; Assurance</span>
            <h2 className="section-title">Why Homeowners &amp; Architects Choose BathCentric</h2>
            <p>Premium materials. Precision laser engineering. Built for beauty, made to last decades.</p>
          </div>

          <div className="commitments-grid">
            <div className="commitment-card">
              <div className="commitment-num">01</div>
              <h3 className="commitment-title">100% Free Doorstep Visit</h3>
              <p>Our senior engineer visits your bathroom with laser measuring tools to record millimeter-accurate wall plumb and floor slopes at zero cost.</p>
            </div>

            <div className="commitment-card">
              <div className="commitment-num">02</div>
              <h3 className="commitment-title">Saint-Gobain Certified Glass</h3>
              <p>10mm &amp; 12mm thermally toughened safety glass compliant with EN 12150 and IS 2553 standards. 5x stronger than regular glass with polished chamfered edges.</p>
            </div>

            <div className="commitment-card">
              <div className="commitment-num">03</div>
              <h3 className="commitment-title">SUS 304 Stainless &amp; Solid Brass</h3>
              <p>Marine-grade Jindal steel and drop-forged solid brass hardware. PVD coated to guarantee zero rust, zero flaking, and zero discoloration.</p>
            </div>

            <div className="commitment-card">
              <div className="commitment-num">04</div>
              <h3 className="commitment-title">7-Day Fast Turnaround</h3>
              <p>From the moment you approve your layout, our specialized glass tempering facility fabricates, coats, and installs your enclosure within 7 days.</p>
            </div>

            <div className="commitment-card">
              <div className="commitment-num">05</div>
              <h3 className="commitment-title">10-Year Mechanical Durability</h3>
              <p>Stress-tested to 100,000 cycles with full 5-year replacement warranty on all hinges, rollers, and handles backed by our in-house service team.</p>
            </div>

            <div className="commitment-card">
              <div className="commitment-num">06</div>
              <h3 className="commitment-title">Anti-Limescale Nano Shield</h3>
              <p>Factory-bonded hydrophobic coating makes water bead up and roll off instantly, repelling soap scum and reducing cleaning effort by 90%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Bathroom Accessories Showcase */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Harmonized Finishes</span>
              <h2>Complete Bathroom Accessories in Matching PVD Finishes</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Never compromise with mismatched metal fixtures. BathCentric crafts every accessory — from solid brass towel bars and designer hooks to floating glass shelves and linear shower drains — in identical PVD finishes matching your bathroom tapware.
              </p>

              <FinishSelector defaultFinish="Brushed Brass / Gold" />

              <div className="grid-2" style={{ gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: 'var(--color-bg-white)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Towel Bars &amp; Rails</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Solid brass glass-mounted &amp; wall-mounted towel rails.</span>
                </div>
                <div style={{ background: 'var(--color-bg-white)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Designer Robe Hooks</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>Knurled detail pegs, over-glass hooks &amp; dual hangers.</span>
                </div>
                <div style={{ background: 'var(--color-bg-white)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Floating Glass Shelves</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>10mm tempered corner shelves with brass clamps.</span>
                </div>
                <div style={{ background: 'var(--color-bg-white)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Linear Floor Drains</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>SUS 304 shower drainage channels in matching finishes.</span>
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/hardware" className="btn btn-primary">View Full Accessories Suite</Link>
                <Link to="/quote" className="btn btn-outline">Enquire for Accessories</Link>
              </div>
            </div>

            <div>
              <img
                src="/images/hardware.jpg"
                alt="Architectural Bathroom Accessories and PVD Hardware"
                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Seamless Process */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Frictionless Experience</span>
            <h2>How Your Bathroom Gets Transformed</h2>
            <p>From first doorstep consultation to final waterproof silicone sealing, we make the entire process effortless.</p>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Free Site Visit</h3>
              <p className="step-desc">Book online or via WhatsApp. Our technical engineer visits your home with laser tools and physical glass samples.</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Laser Survey</h3>
              <p className="step-desc">We measure wall plumb deviations, floor drainage slope, and plumbing clearances down to the millimeter.</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Itemized Quote</h3>
              <p className="step-desc">Receive a transparent, fully itemized CAD proposal with glass specs, accessories, and all-inclusive pricing.</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">CNC Fabrication</h3>
              <p className="step-desc">Custom CNC cutting, diamond edge chamfering, thermal tempering, and hydrophobic nano-coating at our facility.</p>
            </div>

            <div className="process-step">
              <div className="step-number">05</div>
              <h3 className="step-title">3-Hr Installation</h3>
              <p className="step-desc">Certified BathCentric master technicians assemble, align, and waterproof seal your enclosure cleanly in 3 hours.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/quote" className="btn btn-accent btn-lg">
              Book Your Free Measurement Visit Today
              <Icon name="arrow" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Completed Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Real Installations</span>
            <h2 className="section-title">Completed Bathroom Transformations</h2>
            <p>Explore recent bespoke glass enclosures installed across leading apartments and luxury residences.</p>
          </div>

          <div className="grid-3">
            <article className="project-card">
              <div className="project-img">
                <img src="/images/project-1.jpg" alt="Master Ensuite Walk-In Enclosure Mumbai" loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-loc">Worli, Mumbai</div>
                <h3 className="project-title">The Altamount Master Ensuite</h3>
                <p style={{ fontSize: '0.9rem' }}>10mm Low-Iron Clear Glass with Brushed Brass PVD Hinges and overhead ceiling-height stabilizer profile.</p>
                <div className="project-meta">
                  <span className="badge-tag">Swing Frameless</span>
                  <span className="badge-tag">Brushed Brass</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-img">
                <img src="/images/project-2.jpg" alt="Penthouse Sliding Shower System Bengaluru" loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-loc">Indiranagar, Bengaluru</div>
                <h3 className="project-title">Skyline Penthouse Wetroom</h3>
                <p style={{ fontSize: '0.9rem' }}>Reeded Fluted Glass Sliding Enclosure with Matte Black SUS 304 soft-close top roller track.</p>
                <div className="project-meta">
                  <span className="badge-tag">Sliding System</span>
                  <span className="badge-tag">Matte Black</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-img">
                <img src="/images/project-3.jpg" alt="Luxury Villa L-Shaped Corner Enclosure Delhi" loading="lazy" />
              </div>
              <div className="project-body">
                <div className="project-loc">Golf Links, New Delhi</div>
                <h3 className="project-title">Heritage Modern Villa</h3>
                <p style={{ fontSize: '0.9rem' }}>90° L-Shaped Corner Frameless Enclosure with 12mm Toughened Clear Glass and Polished Chrome fittings.</p>
                <div className="project-meta">
                  <span className="badge-tag">L-Shaped Corner</span>
                  <span className="badge-tag">Polished Chrome</span>
                </div>
              </div>
            </article>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/projects" className="btn btn-outline">Explore All Projects <Icon name="arrow" size={16} strokeWidth={2} /></Link>
          </div>
        </div>
      </section>

      {/* Book Free Site Visit / Send Bathroom Banner */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Zero Cost Consultation</span>
              <h2 className="banner-title">Book a Free Doorstep Site Visit or Send Your Bathroom Photos</h2>
              <p className="banner-desc">
                Whether renovating an existing bathroom or building a new home, get 100% free doorstep measurement and layout consultation. Our specialist will analyze your plumbing, calculate exact clearances, and provide a clear quote.
              </p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">
                  <Icon name="calendar" size={20} strokeWidth={2} />
                  <span>Book Free Site Visit</span>
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I%20am%20ready%20for%20my%20bathroom%20transformation.%20Could%20we%20schedule%20a%20free%20consultation%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
