import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Mirrors() {
  const [activeShape, setActiveShape] = useState('all');

  const mirrorModels = [
    {
      id: 'pill',
      category: 'pill',
      title: 'The Pill / Capsule LED Mirror',
      badge: 'Bestseller for Vanities',
      image: '/images/mirror-pill.jpg',
      desc: 'Elegant elongated capsule silhouette with rounded contours. Softens rectilinear tile geometries and pairs effortlessly above single and twin floating basin vanities.',
      specs: [
        'Available standard sizes: 450x900mm, 500x1000mm, 600x1200mm, or bespoke',
        'Dual illumination: Front frosted border + ambient wall halo backlight',
        'Built-in anti-fog heating pad with independent touch toggle',
        '3-tone CCT: Warm White (3000K), Natural Day (4000K), Cool White (6000K)'
      ]
    },
    {
      id: 'arch',
      category: 'arch',
      title: 'The Architectural Arch LED Mirror',
      badge: 'Designer Statement',
      image: '/images/mirror-arch.jpg',
      desc: 'Dramatic architectural arch with a flat bottom base designed to sit flush against quartz vanity backsplashes or floating shelves, crowned with an expansive curve.',
      specs: [
        'Available standard sizes: 500x800mm, 600x900mm, 750x1050mm, or bespoke',
        'Touch-dimmer sensor with memory recall of last brightness level',
        'Steam-proof internal defogger demister element',
        '5mm Copper-Free high-definition float glass with bevelled pencil edge'
      ]
    },
    {
      id: 'round',
      category: 'round',
      title: 'The Halo Symmetrical Circle Mirror',
      badge: 'Minimalist Icon',
      image: '/images/mirror-round.jpg',
      desc: 'Timeless circular geometry producing an even 360° shadowless ring of light across the face. Transforms powder rooms and compact apartment ensuites into luxury sanctuaries.',
      specs: [
        'Available diameters: 600mm, 750mm, 900mm, 1050mm custom',
        'High CRI > 90+ for true-to-life skin tone reflection and grooming',
        'IP44 waterproof certified sealed power driver and LED strips',
        'Concealed French cleat aluminum wall mounting bracket'
      ]
    },
    {
      id: 'rect',
      category: 'rect',
      title: 'The Floating Rectangular LED Mirror',
      badge: 'Classic Architectural',
      image: '/images/mirror-rect.jpg',
      desc: 'Crisp, contemporary rectangular format with perimeter frosted light diffuser. Can be hung in portrait or landscape orientation to span wide double-sink vanity counters.',
      specs: [
        'Available sizes: 600x800mm, 900x750mm, 1200x800mm, 1500x900mm custom',
        'Multi-function sensor: On/Off, CCT tone change, and stepless dimming',
        'Integrated rapid demister pad clearing fog within 30 seconds',
        '50,000+ hour continuous duty LED life with 3-year warranty'
      ]
    }
  ];

  const filteredMirrors = activeShape === 'all'
    ? mirrorModels
    : mirrorModels.filter(m => m.category === activeShape);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Smart LED Mirrors</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Shadowless Illumination &amp; Smart Controls</span>
          <h1>Smart LED Vanity Mirrors</h1>
          <p>
            Architectural bathroom mirrors crafted from 5mm copper-free float glass, equipped with feather-touch sensors, 3-color tone lighting, and rapid anti-fog demisters tailored as per your bathroom vanity specifications.
          </p>
        </div>
      </section>

      {/* 4 Smart Innovations Banner */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Engineered For Indian Bathrooms</span>
            <h2>Why BathCentric Smart Mirrors Excel</h2>
            <p>Designed specifically to withstand high bathroom humidity, steam condensation, and daily grooming demands.</p>
          </div>

          <div className="grid-4">
            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="sparkle" /></div>
              <h3 className="feature-title">3-Color CCT Tuning</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Toggle effortlessly between Warm Light (3000K for evening ambiance), Neutral Natural (4000K for grooming), and Daylight (6000K for razor-sharp precision).
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="shield" /></div>
              <h3 className="feature-title">Steam-Free Anti-Fog</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Concealed silicon heating pad gently warms the center glass surface, preventing condensation fog even during long, piping-hot monsoon and winter showers.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="layers" /></div>
              <h3 className="feature-title">5mm Copper-Free Glass</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Standard mirrors oxidize and develop black spots along perimeter edges within 12 months. Our copper-free silvering is impervious to moisture decay.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="lock" /></div>
              <h3 className="feature-title">Stepless Touch Dimming</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Feather-touch surface button with responsive glow. Press and hold to dim seamlessly from gentle 10% nightlight glow to vibrant 100% illumination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Mirror Catalog */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Bespoke Silhouettes</span>
            <h2>Choose Your Mirror Architecture</h2>
            <p>Custom fabricated to your vanity counter width, wall clearances, and preferred LED halo ambiance.</p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              type="button"
              className={`filter-tab ${activeShape === 'all' ? 'active' : ''}`}
              onClick={() => setActiveShape('all')}
            >
              All Silhouettes ({mirrorModels.length})
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'pill' ? 'active' : ''}`}
              onClick={() => setActiveShape('pill')}
            >
              Capsule / Pill
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'arch' ? 'active' : ''}`}
              onClick={() => setActiveShape('arch')}
            >
              Architectural Arch
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'round' ? 'active' : ''}`}
              onClick={() => setActiveShape('round')}
            >
              Circular Halo
            </button>
            <button
              type="button"
              className={`filter-tab ${activeShape === 'rect' ? 'active' : ''}`}
              onClick={() => setActiveShape('rect')}
            >
              Minimalist Rectangle
            </button>
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            {filteredMirrors.map((mirror) => (
              <article key={mirror.id} className="feature-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '320px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
                  <img src={mirror.image} alt={mirror.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge-tag">{mirror.badge}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-accent-dark)', fontWeight: 600 }}>CRI &gt; 90+ High Definition</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{mirror.title}</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>{mirror.desc}</p>
                <ul style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                  {mirror.specs.map((s, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px dashed var(--color-border-strong)', paddingTop: '1.25rem', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-light)', display: 'block' }}>Pricing Guide</span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--color-primary)' }}>As per client specifications</strong>
                  </div>
                  <Link to="/quote?type=mirror" className="btn btn-accent btn-sm">
                    Customize Sizing &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Matrix */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Specifications</span>
            <h2>Technical Engineering Standards</h2>
            <p>Built to luxury hotel and master ensuite longevity benchmarks.</p>
          </div>

          <div style={{ maxWidth: '880px', margin: '0 auto', overflowX: 'auto' }}>
            <table className="specs-table">
              <tbody>
                <tr>
                  <th style={{ width: '30%' }}>Glass Specification</th>
                  <td>5mm High-Grade Copper-Free Lead-Free Silver Mirror Float Glass</td>
                </tr>
                <tr>
                  <th>Edge Detailing</th>
                  <td>CNC Diamond Ground Flat Polish with safety arris chamfering</td>
                </tr>
                <tr>
                  <th>LED Specifications</th>
                  <td>High-density SMD 2835 LEDs (120 LEDs/meter), 50,000+ hour rated lifespan</td>
                </tr>
                <tr>
                  <th>Color Temperature (CCT)</th>
                  <td>Triple Switchable: 3000K (Warm White) / 4000K (Natural) / 6000K (Cool White)</td>
                </tr>
                <tr>
                  <th>Color Rendering Index</th>
                  <td>CRI &ge; 90+ (Pristine, true-to-life makeup and grooming reflection)</td>
                </tr>
                <tr>
                  <th>Anti-Fog Defogger</th>
                  <td>Integrated PET heating element (25W–45W depending on mirror surface area)</td>
                </tr>
                <tr>
                  <th>Water Resistance</th>
                  <td>IP44 / IP65 splash-proof sealed aluminum back-chassis</td>
                </tr>
                <tr>
                  <th>Power Input</th>
                  <td>Standard 220V–240V AC 50Hz with concealed wall wire connection</td>
                </tr>
                <tr>
                  <th>Warranty</th>
                  <td>3-Year Comprehensive Warranty on LED strip, power driver, and touch sensor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Custom Vanity Dimensions?</span>
              <h2 className="banner-title">Get Your Mirror Custom Sized During Your Site Visit</h2>
              <p className="banner-desc">
                Our technician measures your bathroom vanity width, backsplash tile lines, and electrical outlet placement during the laser survey to produce a custom-fitted LED mirror.
              </p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Book Free Site Measurement</Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20consult%20about%20custom%20smart%20LED%20bathroom%20mirrors."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  Consult via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
