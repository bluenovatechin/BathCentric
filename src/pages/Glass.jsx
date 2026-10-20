import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Glass() {
  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Glass Options</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Pure Clarity & Certified Safety</span>
          <h1>Architectural Shower Glass</h1>
          <p>
            Discover our range of thermally toughened safety glass variants, engineered with precision chamfered edges, flawless optical transparency, and hydrophobic surface protection.
          </p>
        </div>
      </section>

      {/* Glass Variants Showcase */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Curated Varieties</span>
            <h2>Select Your Glass Aesthetic</h2>
            <p>Every pane is custom tempered to order. Choose the ideal balance between transparency, light transmission, and visual privacy.</p>
          </div>

          <div className="grid-3" style={{ gap: '2.5rem' }}>

            {/* 1. Low-Iron Ultra Clear */}
            <div className="feature-card">
              <div style={{ height: '200px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                <img src="/images/glass-lowiron.jpg" alt="Low-Iron Ultra Clear Glass" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge-tag">Most Popular</span>
              <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Extra-Clear Low-Iron Glass</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                Manufactured with reduced ferric oxide content to eliminate the natural greenish edge tint of standard glass. Yields pristine true-to-life color rendering of marble, onyx, and mosaic tiles behind it.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Thickness:</strong> 10mm, 12mm</li>
                <li><strong>Light Transmission:</strong> 91.5%</li>
                <li><strong>Privacy Level:</strong> Open / Transparent</li>
              </ul>
            </div>

            {/* 2. Fluted Reeded Glass */}
            <div className="feature-card">
              <div style={{ height: '200px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                <img src="/images/glass-fluted.jpg" alt="Fluted Reeded Ribbed Shower Glass" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge-tag">Architects Choice</span>
              <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Fluted / Reeded Glass</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                Features vertical tactile ribbed flutes that refract light playfully while obscuring silhouettes for elegant privacy. A hallmark of mid-century and modern transitional interior architecture.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Thickness:</strong> 10mm Toughened</li>
                <li><strong>Light Transmission:</strong> 85%</li>
                <li><strong>Privacy Level:</strong> Semi-Private / Diffused</li>
              </ul>
            </div>

            {/* 3. Clear Toughened */}
            <div className="feature-card">
              <div style={{ height: '200px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                <img src="/images/glass-clear.jpg" alt="Clear Toughened Safety Glass" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge-tag">Standard Classic</span>
              <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Clear Toughened Glass</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                The standard architectural float glass, thermally heat-treated to 650°C and rapidly quenched. Outstanding structural rigidity, impact resistance, and brilliant luminous clarity.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Thickness:</strong> 8mm, 10mm, 12mm</li>
                <li><strong>Light Transmission:</strong> 89%</li>
                <li><strong>Privacy Level:</strong> Transparent</li>
              </ul>
            </div>

            {/* 4. Satin Acid-Etched / Frosted */}
            <div className="feature-card">
              <div style={{ height: '200px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                <img src="/images/glass-frosted.jpg" alt="Frosted Acid-Etched Glass" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge-tag">Maximum Privacy</span>
              <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Acid-Etched Satin Frosted</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                Chemically treated surface creating a velvety, uniform translucent finish. Unlike sandblasted glass, acid-etched satin does not absorb fingerprints or oils and washes clean effortlessly.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Thickness:</strong> 10mm</li>
                <li><strong>Light Transmission:</strong> 78%</li>
                <li><strong>Privacy Level:</strong> Full Privacy</li>
              </ul>
            </div>

            {/* 5. Tinted Smoked Grey */}
            <div className="feature-card">
              <div style={{ height: '200px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                <img src="/images/glass-tinted-grey.jpg" alt="Smoked Grey Tinted Shower Glass" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge-tag">Moody & Dramatic</span>
              <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Smoked Grey Tinted Glass</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                Body-tinted glass creating a subtle smoky silhouette. Ideal for dramatic masculine ensuites, dark tile motifs, or pairing with Matte Black and Gunmetal Grey PVD hardware.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Thickness:</strong> 10mm</li>
                <li><strong>Light Transmission:</strong> 55%</li>
                <li><strong>Privacy Level:</strong> Semi-Private</li>
              </ul>
            </div>

            {/* 6. Tinted Bronze Glass */}
            <div className="feature-card">
              <div style={{ height: '200px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
                <img src="/images/glass-tinted-bronze.jpg" alt="Bronze Tinted Glass" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="badge-tag">Warm Luxury</span>
              <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Bronze Tinted Glass</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                Infused with rich amber and copper undertones that resonate beautifully with Brushed Brass and Rose Gold hardware and warm travertine or limestone bathroom tiles.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Thickness:</strong> 10mm</li>
                <li><strong>Light Transmission:</strong> 58%</li>
                <li><strong>Privacy Level:</strong> Semi-Private</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Bathroom Architectural Applications */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Bathroom Architecture</span>
            <h2>Where Glass Transforms Your Bathroom</h2>
            <p>
              Architectural glass is the foundation of light, space, and modern wet/dry zoning in luxury bathrooms. Explore how our custom cut-to-size panels elevate every corner.
            </p>
          </div>

          <div className="grid-4">
            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="shield" /></div>
              <h3 className="feature-title">Shower &amp; Wetroom Glass</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Frameless walk-in panels, hinged doors, and sliding systems that keep water contained while keeping the bathroom visually expansive.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="layers" /></div>
              <h3 className="feature-title">Wet/Dry Zone Dividers</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Full-height structural glass partitions separating bathing zones from dry vanity areas to prevent moisture spread across the bathroom.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="lock" /></div>
              <h3 className="feature-title">WC &amp; Toilet Privacy Screens</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Fluted reeded and acid-etched satin glass dividers that create discreet toilet enclosures while permitting natural daylight to filter through.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="sparkle" /></div>
              <h3 className="feature-title">Vanity Mirrors &amp; Shelving</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Precision copper-free silver mirrors with bevelled edges and 10mm tempered floating glass vanity shelves with solid brass wall clamps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Thickness & Safety Engineering */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Safety & Certification</span>
              <h2>Why BathCentric Uses 10mm & 12mm Glass</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Many off-the-shelf prefabricated enclosures use flimsy 6mm or thin 8mm glass that flexes and wobbles when opened. At BathCentric, we mandate a minimum of 10mm architectural safety glass for all frameless swing doors and walk-in screens.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span>
                  <div><strong>Shatter-Safe Crumble Pattern:</strong> In the rare event of severe impact, toughened glass disintegrates into harmless, small dull granules rather than dangerous jagged shards.</div>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span>
                  <div><strong>Certified Compliance:</strong> Strictly conforms to <strong>EN 12150</strong> (European Standard for Thermally Toughened Glass) and <strong>IS 2553</strong> (Bureau of Indian Standards).</div>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span>
                  <div><strong>Flat Pencil Polished Edges:</strong> All perimeter edges undergo 8-stage CNC diamond grinding and polishing for an immaculate, touch-safe velvety edge profile.</div>
                </li>
              </ul>
            </div>

            {/* EasyClean Hydrophobic Shield */}
            <div style={{ background: 'var(--color-accent-light)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid rgba(51, 156, 211, 0.4)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💧</div>
              <h3 style={{ marginBottom: '0.75rem' }}>EasyClean Hydrophobic Nano-Shield</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                Standard glass is microscopically porous, trapping minerals, soap residue, and hard water scale that create permanent cloudy etching.
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Every BathCentric panel is treated with a covalent bonding nano-coating that fills microscopic valleys. Water beads into spherical droplets that roll off effortlessly, reducing routine glass cleaning time by up to <strong>90%</strong>.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent-dark)' }}>
                <span>🛡️ 3-Year Factory Hydrophobic Warranty Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section">
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Need Glass Samples?</span>
              <h2 className="banner-title">Touch & Experience Our Glass Swatches</h2>
              <p className="banner-desc">Our technical engineer brings physical sample swatches of our Clear, Low-Iron, Fluted, and Frosted glass directly to your site during the laser measurement survey.</p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Book Measurement & Samples</Link>
                <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20request%20glass%20swatches." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Request via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
