import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Drains() {
  const [activeCategory, setActiveCategory] = useState('all');

  const drainModels = [
    {
      id: 'tile-insert',
      category: 'tile-insert',
      title: 'Invisible Tile-Insert Linear Channel',
      badge: 'Most Popular for Minimalist Bathrooms',
      image: '/images/drain-tile-insert.jpg',
      desc: 'The matching floor tile is cut and fitted directly into the top channel tray. Water drains discreetly through a subtle 4mm perimeter slit, creating a clean, unbroken continuous floor visual.',
      specs: [
        'Available standard lengths: 600mm, 750mm, 900mm, 1200mm, or bespoke wall-to-wall',
        'Material: 1.5mm Heavy-Gauge AISI 304 Marine Grade Stainless Steel',
        'Features removable hair-strainer basket and easy lifting key',
        'Compatible with standard 40mm, 50mm, or 75mm Indian vertical plumbing outlets'
      ]
    },
    {
      id: 'designer-grate',
      category: 'designer',
      title: 'Architectural PVD Slotted Linear Drain',
      badge: 'PVD Coated Finishes',
      image: '/images/drain-black.jpg',
      desc: 'Precision laser-cut slotted top grating in premium PVD architectural finishes. Complements matte black, rose gold, brushed bronze, or chrome shower fixtures.',
      specs: [
        'Available finishes: Matte Black PVD, Champagne Gold, Brushed Bronze, Gunmetal Grey',
        'Ultra-fast flow rate: Over 35 Litres per minute handling multi-jet rain showers',
        'Anti-scratch electro-deposition coating resistant to hard water and bath salts',
        'Adjustable leveling feet for accurate screed alignment during tile setting'
      ]
    },
    {
      id: 'trap-core',
      category: 'trap',
      title: 'Gravity Anti-Cockroach & Anti-Odor Trap Core',
      badge: 'Pest & Odor Barrier',
      image: '/images/drain-trap.jpg',
      desc: 'Mechanical magnetic/gravity counterweight trap that stays tightly sealed when dry, and swings open effortlessly under water flow. Prevents pests, sewer odor, and foam backflow.',
      specs: [
        'Zero foul sewer gas escape into the bathroom interior',
        'Positive mechanical seal prevents cockroaches, silverfish, and drain flies',
        'Easily twists out for hair clearing and cleaning in seconds without tools',
        'Universal design fits standard square and linear BathCentric floor drain troughs'
      ]
    }
  ];

  const filteredDrains = activeCategory === 'all'
    ? drainModels
    : drainModels.filter(d => d.category === activeCategory);

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Linear Floor Drains</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Discreet Water Evacuation &amp; Pest Protection</span>
          <h1>Architectural Linear Floor Drains</h1>
          <p>
            Seamless AISI-304 stainless steel linear shower drains, tile-insert channels, and mechanical anti-cockroach traps engineered for rapid drainage and clean single-slope bathroom floor tiling.
          </p>
        </div>
      </section>

      {/* 4 Drain Innovations Banner */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Engineered For Indian Bathrooms</span>
            <h2>Why BathCentric Linear Drains Excel</h2>
            <p>Solving the common issues of floor water pooling, unsightly diagonal tile cuts, and foul sewer odors.</p>
          </div>

          <div className="grid-4">
            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="layers" /></div>
              <h3 className="feature-title">Invisible Tile-Insert</h3>
              <p className="feature-desc">
                Your bathroom floor tile sets flush into the channel, leaving an elegant continuous floor with only a subtle 4mm perimeter drainage reveal.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="shield" /></div>
              <h3 className="feature-title">Anti-Cockroach Trap</h3>
              <p className="feature-desc">
                Counterweighted mechanical gravity trap shuts tight when water stops, blocking drain flies, cockroaches, and sewer gases completely.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="droplet" /></div>
              <h3 className="feature-title">Single-Slope Drainage</h3>
              <p className="feature-desc">
                Enables simple one-directional slope for large 600x1200mm floor tiles without ugly diagonal envelope diamond cuts or uneven lippage.
              </p>
            </div>

            <div className="feature-card" style={{ background: '#fff' }}>
              <div className="feature-icon"><Icon name="award" /></div>
              <h3 className="feature-title">AISI 304 Marine Steel</h3>
              <p className="feature-desc">
                Crafted from 1.5mm thick surgical-grade stainless steel with passivated welds to withstand Indian hard water, acid wash, and cleaning chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drain Catalog Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">Product Collection</span>
            <h2>Specialized Shower Channel Systems</h2>
            <p>Select an architectural drainage solution tailored to your bathroom layout, tile format, and plumbing placement.</p>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '24px' }}>
              {[
                { label: 'All Drainage Solutions', value: 'all' },
                { label: 'Tile-Insert Channels', value: 'tile-insert' },
                { label: 'PVD Slotted Grates', value: 'designer' },
                { label: 'Anti-Odor Traps', value: 'trap' }
              ].map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveCategory(tab.value)}
                  className={`btn btn-sm ${activeCategory === tab.value ? 'btn-primary' : 'btn-outline'}`}
                  style={{ borderRadius: '20px', padding: '8px 20px', transition: 'all 0.2s ease' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {filteredDrains.map((drain, idx) => (
              <div
                key={drain.id}
                className="feature-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                  gap: '40px',
                  alignItems: 'center',
                  background: '#ffffff',
                  padding: '36px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', aspectRatio: '3/2' }}>
                    <img
                      src={drain.image}
                      alt={drain.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: 'rgba(27, 42, 59, 0.9)',
                        color: '#fff',
                        padding: '6px 14px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        borderRadius: '4px',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      {drain.badge}
                    </span>
                  </div>
                </div>

                <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                    {drain.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {drain.desc}
                  </p>

                  <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', marginBottom: '12px' }}>
                    Technical Specifications
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {drain.specs.map((spec, sIdx) => (
                      <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#444' }}>
                        <span style={{ color: 'var(--color-accent)', marginTop: '2px' }}><Icon name="check" size={16} /></span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ padding: '14px 18px', background: '#F8F9FA', borderRadius: '6px', borderLeft: '3px solid var(--color-accent)', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Pricing &amp; Customization</div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-primary)', fontSize: '1rem' }}>
                      As per client&apos;s bathroom space &amp; outlet specifications
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to="/quote" className="btn btn-primary">
                      Request Custom Channel Sizing
                    </Link>
                    <a
                      href="https://wa.me/919999999999?text=Hi%20BathCentric,%20I%20am%20inquiring%20about%20Linear%20Floor%20Drains%20for%20my%20bathroom."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <Icon name="chat" size={16} /> WhatsApp Layout
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Wet/Dry Bathroom Zoning Guide */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
            <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Architectural Solution</span>
            <h2>Solving the Indian Bathroom Wet/Dry Dilemma</h2>
            <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.7 }}>
              In traditional Indian bathrooms, water from bucket showers or rainheads spreads across the entire floor, keeping the WC and vanity areas perpetually damp. BathCentric pairs custom glass partitions with linear floor drains to create a permanent hygienic partition.
            </p>
          </div>

          <div className="grid-3">
            <div style={{ background: '#F8F9FA', padding: '32px', borderRadius: '8px', borderTop: '3px solid var(--color-primary)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                1. Single Slope Gradient
              </div>
              <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Unlike center round drains that force mason tile cuts in four diagonals, linear drains allow a continuous single-pitch slope toward the back shower wall. Large tiles stay pristine and unbroken.
              </p>
            </div>

            <div style={{ background: '#F8F9FA', padding: '32px', borderRadius: '8px', borderTop: '3px solid var(--color-primary)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                2. Zero Water Overflow
              </div>
              <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Positioning a linear drain channel directly along the glass enclosure threshold captures 100% of water runoff before it can seep into the dry toilet and vanity zone.
              </p>
            </div>

            <div style={{ background: '#F8F9FA', padding: '32px', borderRadius: '8px', borderTop: '3px solid var(--color-primary)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                3. Anti-Pest Peace of Mind
              </div>
              <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Cockroaches and drain pests enter high-rise and bungalow bathrooms through open floor jali traps. Our mechanical gravity flap ensures an airtight physical seal 24 hours a day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="cta-banner" style={{ textAlign: 'center', padding: '70px 0' }}>
        <div className="container">
          <h2>Ready to Upgrade Your Shower Drainage?</h2>
          <p style={{ maxWidth: '650px', margin: '16px auto 32px auto', fontSize: '1.1rem', opacity: 0.9 }}>
            Send us your bathroom floor drawing or tile layout. Our bathroom specialists will recommend the exact drain length, positioning, and anti-odor trap mechanism.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/quote" className="btn btn-primary btn-lg">
              Request Free Consultation
            </Link>
            <Link to="/enclosures" className="btn btn-outline-light btn-lg">
              Explore Glass Enclosures
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
