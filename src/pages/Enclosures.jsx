import { Link } from 'react-router-dom';

export default function Enclosures() {
  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Shower Enclosures</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Architectural Systems</span>
          <h1>Custom Shower Enclosures</h1>
          <p>
            Engineered around your room geometry. Explore our four principal enclosure configurations, designed to elevate spaces from compact urban suites to expansive master wetrooms.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* 1. Fixed Walk-In */}
          <div className="grid-2" style={{ marginBottom: '5.5rem' }}>
            <div>
              <span className="eyebrow">Minimalist Barrier-Free</span>
              <h2>Fixed Walk-In Enclosures</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                A single stationary architectural glass screen with no moving doors. Eliminates thresholds for seamless walk-in accessibility, maximizing light flow and spatial openness.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <li><strong>Ideal For:</strong> Open-plan wetrooms, long alcoves (minimum 1400mm room length recommended).</li>
                <li><strong>Glass Options:</strong> 10mm or 12mm Toughened Clear, Low-Iron, or Fluted Reeded.</li>
                <li><strong>Hardware:</strong> Ceiling or wall stabilizer bar, slimline aluminum floor/wall profile.</li>
                {/* <li><strong>Starting Price:</strong> From ₹14,500*</li> */}
                <li><strong>Pricing:</strong> Customized as per client specifications</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/fixed" className="btn btn-primary">Explore Fixed Specs &rarr;</Link>
                <Link to="/quote?type=fixed" className="btn btn-outline">Get Fixed Quote</Link>
              </div>
            </div>
            <div>
              <img src="/images/fixed.jpg" alt="Fixed Walk-In Shower Screen" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: '380px', objectFit: 'cover' }} />
            </div>
          </div>

          {/* 2. Swing / Frameless Hinged */}
          <div className="grid-2" style={{ marginBottom: '5.5rem', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <span className="eyebrow">Classic Architectural Precision</span>
              <h2>Swing / Frameless Hinged Enclosures</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Engineered with heavy-duty solid forged brass hinges, offering effortless 90° inward or outward door swing. Integrated with translucent magnetic gaskets for absolute water containment.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <li><strong>Ideal For:</strong> Standard and large alcoves or corner layouts where swing clearance is available.</li>
                <li><strong>Configurations:</strong> Single swing door, door + fixed inline panel, double French swing doors.</li>
                <li><strong>Hardware:</strong> Solid brass 90°/180° hinges, magnetic PVC water-stop, architectural handle.</li>
                {/* <li><strong>Starting Price:</strong> From ₹21,000*</li> */}
                <li><strong>Pricing:</strong> Customized as per client specifications</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/swing" className="btn btn-primary">Explore Swing Specs &rarr;</Link>
                <Link to="/quote?type=swing" className="btn btn-outline">Get Swing Quote</Link>
              </div>
            </div>
            <div style={{ direction: 'ltr' }}>
              <img src="/images/swing.jpg" alt="Frameless Hinged Shower Door" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: '380px', objectFit: 'cover' }} />
            </div>
          </div>

          {/* 3. Sliding Systems */}
          <div className="grid-2" style={{ marginBottom: '5.5rem' }}>
            <div>
              <span className="eyebrow">Space Optimization</span>
              <h2>Sliding Shower Systems</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Designed for bathrooms where outward door swing is constrained by vanities, toilets, or entry doors. Features top-hung architectural rollers that glide silently on precision-machined SUS 304 tracks.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <li><strong>Ideal For:</strong> Compact bathrooms, alcoves 1000mm–1800mm wide, luxury apartment ensuites.</li>
                <li><strong>Smooth Gliding:</strong> Heavy-duty bearings tested for 50,000 glide cycles with soft-close dampers.</li>
                <li><strong>Hardware:</strong> Top roller bar, floor guide, recessed or ladder pull handles.</li>
                {/* <li><strong>Starting Price:</strong> From ₹26,500*</li> */}
                <li><strong>Pricing:</strong> Customized as per client specifications</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/sliding" className="btn btn-primary">Explore Sliding Specs &rarr;</Link>
                <Link to="/quote?type=sliding" className="btn btn-outline">Get Sliding Quote</Link>
              </div>
            </div>
            <div>
              <img src="/images/sliding.jpg" alt="Sliding Shower Door System" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: '380px', objectFit: 'cover' }} />
            </div>
          </div>

          {/* 4. L-Shaped Corner */}
          <div className="grid-2" style={{ direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <span className="eyebrow">Corner Transformation</span>
              <h2>L-Shaped Corner Enclosures</h2>
              <p style={{ marginBottom: '1.25rem' }}>
                Transforms an open 90° bathroom corner into a dedicated luxury shower chamber. Features two perpendicular glass walls: a fixed return glass panel and an entry panel with swing or sliding access.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                <li><strong>Ideal For:</strong> Corner shower zones, square and rectangular room plans.</li>
                <li><strong>Configurations:</strong> Corner entry (double sliding), or front swing door with 90° fixed return.</li>
                <li><strong>Hardware:</strong> 90° glass-to-glass clamps, stabilizer corner bar, watertight magnetic corner seal.</li>
                {/* <li><strong>Starting Price:</strong> From ₹28,000*</li> */}
                <li><strong>Pricing:</strong> Customized as per client specifications</li>
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/l-shaped" className="btn btn-primary">Explore L-Shaped Specs &rarr;</Link>
                <Link to="/quote?type=l-shaped" className="btn btn-outline">Get Corner Quote</Link>
              </div>
            </div>
            <div style={{ direction: 'ltr' }}>
              <img src="/images/l-shaped.jpg" alt="L-Shaped Corner Frameless Shower" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: '380px', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Selection Guide</span>
            <h2>System Comparison Matrix</h2>
            <p>Compare specifications side-by-side to select the ideal configuration for your bathroom project.</p>
          </div>

          <div className="lead-table-container">
            <table className="specs-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Fixed Walk-In</th>
                  <th>Swing Frameless</th>
                  <th>Sliding System</th>
                  <th>L-Shaped Corner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Door Operation</strong></td>
                  <td>Open Walkway (No Door)</td>
                  <td>90°/180° In/Out Swing</td>
                  <td>Lateral Top Gliding</td>
                  <td>Swing or Sliding Corner</td>
                </tr>
                <tr>
                  <td><strong>Recommended Width</strong></td>
                  <td>700mm - 1400mm</td>
                  <td>600mm - 1800mm</td>
                  <td>1000mm - 2000mm</td>
                  <td>800x800mm to 1500x1200mm</td>
                </tr>
                <tr>
                  <td><strong>Glass Thickness</strong></td>
                  <td>10mm or 12mm</td>
                  <td>10mm</td>
                  <td>8mm or 10mm</td>
                  <td>10mm</td>
                </tr>
                <tr>
                  <td><strong>Space Efficiency</strong></td>
                  <td>Requires long wetroom zone</td>
                  <td>Requires front swing clearance</td>
                  <td>Maximum space efficiency</td>
                  <td>Ideal for corner layouts</td>
                </tr>
                <tr>
                  <td><strong>Water Containment</strong></td>
                  <td>Open wetroom zone</td>
                  <td>100% Sealed with magnetic PVC</td>
                  <td>100% Sealed with bottom track</td>
                  <td>100% Sealed dual-wall seal</td>
                </tr>
                <tr>
                  <td><strong>Hardware Finishes</strong></td>
                  <td>All 5 PVD Finishes</td>
                  <td>All 5 PVD Finishes</td>
                  <td>All 5 PVD Finishes</td>
                  <td>All 5 PVD Finishes</td>
                </tr>
                <tr>
                  <td><strong>Pricing Guide</strong></td>
                  {/* <td><strong>₹14,500*</strong></td>
                  <td><strong>₹21,000*</strong></td>
                  <td><strong>₹26,500*</strong></td>
                  <td><strong>₹28,000*</strong></td> */}
                  <td colSpan="4" style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Customized as per client &amp; site specifications
                  </td>
                </tr>
                <tr>
                  <td><strong>Action</strong></td>
                  <td><Link to="/fixed" className="btn btn-outline btn-sm">Details</Link></td>
                  <td><Link to="/swing" className="btn btn-outline btn-sm">Details</Link></td>
                  <td><Link to="/sliding" className="btn btn-outline btn-sm">Details</Link></td>
                  <td><Link to="/l-shaped" className="btn btn-outline btn-sm">Details</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="section">
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Need Expert Guidance?</span>
              <h2 className="banner-title">Let Us Recommend The Perfect Enclosure</h2>
              <p className="banner-desc">Share your bathroom plan or site photos. Our technical advisors will evaluate door swing clearances, water spray zones, and provide an accurate CAD proposal.</p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Request Measurement & Quote</Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
