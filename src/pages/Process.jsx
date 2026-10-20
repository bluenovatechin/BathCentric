import { Link } from 'react-router-dom';

export default function Process() {
  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>How It Works</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>The BathCentric Journey</span>
          <h1>How It Works: Precision From Survey To Installation</h1>
          <p>
            A transparent, turnkey 5-step process designed to remove all guesswork. Because toughened safety glass cannot be cut or trimmed once tempered, precision measurement is everything.
          </p>
        </div>
      </section>

      {/* The 5 Steps Detailed */}
      <section className="section">
        <div className="container">

          {/* Step 1 */}
          <div className="grid-2" style={{ marginBottom: '5rem' }}>
            <div>
              <div className="step-number" style={{ fontSize: '3rem' }}>01</div>
              <span className="eyebrow">Initial Consultation</span>
              <h2>Enquiry & Layout Assessment</h2>
              <p style={{ marginBottom: '1rem' }}>
                You submit your bathroom photos or floorplans via our online form or WhatsApp. Our design specialist analyzes:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                <li>✓ Shower tray vs sunken floor drainage slope</li>
                <li>✓ Clearances with vanity counters, WC commodes, and towel rails</li>
                <li>✓ Recommended configuration: Fixed, Swing, Sliding, or L-Shaped</li>
                {/* <li>✓ Ballpark price estimate within 4 working hours</li> */}
                <li>✓ Ballpark quotation customized as per client specifications within 4 working hours</li>
              </ul>
              <Link to="/quote" className="btn btn-primary btn-sm">Start With An Enquiry &rarr;</Link>
            </div>
            <div>
              <img src="/images/process-consultation.jpg" alt="BathCentric Design Consultation" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', height: '320px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid-2" style={{ marginBottom: '5rem', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <div className="step-number" style={{ fontSize: '3rem' }}>02</div>
              <span className="eyebrow">On-Site Survey</span>
              <h2>Digital Laser Measurement</h2>
              <p style={{ marginBottom: '1rem' }}>
                Once your bathroom tiling is completed, our certified field engineer visits your residence equipped with Leica digital laser distance meters and digital inclinometers:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <li>✓ Measures plumb angles at bottom, middle, and top of wall</li>
                <li>✓ Records floor gradient and shower threshold level</li>
                <li>✓ Checks for concealed in-wall water supply and electrical pipes</li>
                <li>✓ Presents physical glass swatches (Clear, Low-Iron, Fluted) and hardware samples</li>
              </ul>
            </div>
            <div style={{ direction: 'ltr' }}>
              <img src="/images/process-measurement.jpg" alt="Laser Measurement Survey" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', height: '320px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid-2" style={{ marginBottom: '5rem' }}>
            <div>
              <div className="step-number" style={{ fontSize: '3rem' }}>03</div>
              <span className="eyebrow">Transparent Proposal</span>
              <h2>Itemized 3D Quotation & CAD Drawing</h2>
              <p style={{ marginBottom: '1rem' }}>
                We generate a comprehensive technical proposal including:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <li>✓ Precise CAD shop drawings showing door swing arcs and hinge cutouts</li>
                <li>✓ Transparent breakdown of glass thickness, hardware quantity, and PVD finish</li>
                <li>✓ Clear timeline commitment with zero hidden surprise charges</li>
                <li>✓ Digital sign-off and order confirmation</li>
              </ul>
            </div>
            <div>
              <img src="/images/process-quotation.jpg" alt="Technical CAD and Quotation" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', height: '320px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid-2" style={{ marginBottom: '5rem', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <div className="step-number" style={{ fontSize: '3rem' }}>04</div>
              <span className="eyebrow">Bespoke Fabrication</span>
              <h2>CNC Manufacturing & Tempering</h2>
              <p style={{ marginBottom: '1rem' }}>
                Your enclosure enters our specialized architectural glass processing plant:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <li>✓ <strong>Intermac CNC Cutting:</strong> Glass is cut to 0.5mm tolerances with bespoke tapers for out-of-square walls</li>
                <li>✓ <strong>Diamond Edge Polishing:</strong> Water-cooled 8-stage pencil polish</li>
                <li>✓ <strong>Thermal Tempering:</strong> Baked at 650°C to achieve EN 12150 safety certification</li>
                <li>✓ <strong>EasyClean Shield:</strong> Hydrophobic nano-coating chemically bonded to both glass faces</li>
              </ul>
            </div>
            <div style={{ direction: 'ltr' }}>
              <img src="/images/process-glass-manufacturing.jpg" alt="Precision Glass CNC Processing" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', height: '320px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid-2">
            <div>
              <div className="step-number" style={{ fontSize: '3rem' }}>05</div>
              <span className="eyebrow">White-Glove Delivery</span>
              <h2>Certified Master Installation</h2>
              <p style={{ marginBottom: '1rem' }}>
                Our dedicated in-house installation team conducts the installation with surgical care:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <li>✓ <strong>Precision Anchoring:</strong> Diamond-core drilling through porcelain and marble tiles without chipping</li>
                <li>✓ <strong>Subtle Alignment:</strong> Hinges and tracks balanced for effortless fingertip operation</li>
                <li>✓ <strong>Silicone Waterproofing:</strong> High-grade anti-fungal Dow Corning architectural sealant applied</li>
                <li>✓ <strong>Clean Handover:</strong> Full clean-down, vacuuming, and 5-year warranty certificate handover</li>
              </ul>
            </div>
            <div>
              <img src="/images/process-installation.jpg" alt="Completed Master Shower Installation" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', height: '320px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>

        </div>
      </section>

      {/* Important Site Preparation FAQs */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header text-center">
            <span className="eyebrow">Homeowner & Architect Guide</span>
            <h2>Frequently Asked Questions</h2>
            <p>Key information regarding site readiness, timelines, and warranty.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="feature-card">
              <h4>When is the right time to book the measurement survey?</h4>
              <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Measurement must happen <strong>after</strong> all wall tiles, floor tiles, and any raised granite/marble threshold sills are fully laid and grouted. Because tempered safety glass cannot be cut or sanded down after manufacturing, measuring before tiling is finished can lead to fitting errors.
              </p>
            </div>

            <div className="feature-card">
              <h4>How long does manufacturing and installation take?</h4>
              <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>
                From the day of final laser measurement and quote approval, CNC fabrication, thermal tempering, and PVD hardware preparation take <strong>5 to 7 working days</strong>. The on-site installation itself takes approximately <strong>3 to 4 hours</strong>.
              </p>
            </div>

            <div className="feature-card">
              <h4>How soon after installation can the shower be used?</h4>
              <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>
                We require a <strong>24-hour drying period</strong> for the architectural silicone seals to cure completely before turning on water. After 24 hours, the silicone forms a permanent watertight, anti-mildew barrier.
              </p>
            </div>

            <div className="feature-card">
              <h4>What if my bathroom walls are not straight?</h4>
              <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>
                This is extremely common in residential construction. Our laser surveying identifies exact wall plumb deviations down to 1mm. We CNC-cut the glass with matching non-square tapered angles so the glass aligns flush with your wall while maintaining a plumb door swing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section">
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Ready To Begin?</span>
              <h2 className="banner-title">Step 1 Starts With A Simple Bathroom Photo</h2>
              <p className="banner-desc">Upload photos of your bathroom space or message us directly on WhatsApp. We will help you select the ideal enclosure layout and schedule your laser measurement survey.</p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Request Laser Measurement</Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">Message On WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
