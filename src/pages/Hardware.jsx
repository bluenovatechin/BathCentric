import { useState } from 'react';
import { Link } from 'react-router-dom';
import FinishSelector from '../components/FinishSelector';
import Icon from '../components/Icon';

export default function Hardware() {
  const [activeTab, setActiveTab] = useState('all');

  const accessories = [
    {
      category: 'accessories',
      icon: 'sparkle',
      title: 'Glass-Mount & Wall Towel Bars',
      image: '/images/hw-towelbar.jpg',
      desc: 'Solid brass drop-forged towel bars available in single, double, and combination dual-function designs (exterior towel bar with interior door knob).',
      specs: [
        'Lengths: 450mm, 600mm, 750mm custom',
        'Mounting: Glass-through (with neoprene gaskets) or wall-mount',
        'Available in all 5 matching PVD finishes',
        'Corrosion-proof in high steam & humidity'
      ]
    },
    {
      category: 'accessories',
      icon: 'award',
      title: 'Designer Robe & Towel Hooks',
      image: '/images/hw-hook.jpg',
      desc: 'Minimalist luxury pegs and dual-prong solid brass hooks. Available in smooth satin or precision diamond-knurled textures for superior grip.',
      specs: [
        'Single and dual wall-mounted hooks',
        'Over-glass hooks (zero-drill installation)',
        'Heavy load tested to 15kg',
        'Color-matched to bathroom tapware'
      ]
    },
    {
      category: 'accessories',
      icon: 'layers',
      title: 'Floating Glass Shelving & Clamps',
      image: '/images/hw-shelf.jpg',
      desc: '10mm certified toughened safety glass corner and linear shelves with solid brass wall clamps. Keeps shampoos and soaps elegantly organized.',
      specs: [
        'Radiused polished pencil-chamfer edges',
        'Corner triangular or straight rectangular formats',
        'Heavy-duty solid brass mounting brackets',
        'Easy to detach and clean'
      ]
    },
    {
      category: 'accessories',
      icon: 'droplet',
      title: 'Linear Shower Drains & Channels',
      image: '/images/hw-drain.jpg',
      desc: 'Architectural floor drains in marine-grade SUS 304 stainless steel with matching PVD grates or tile-insert options for a seamless wetroom floor.',
      specs: [
        'Sizes: 600mm, 750mm, 900mm, 1200mm',
        'Integrated removable hair trap & anti-odor seal',
        'High discharge flow rate: 42 L/min',
        'Coordinated with shower screen finishes'
      ]
    },
    {
      category: 'accessories',
      icon: 'shield',
      title: 'Magnetic Door Stops & Floor Buffers',
      image: '/images/hw-door-stop.jpg',
      desc: 'Architectural solid brass floor-mounted door retainers with neodymium magnetic catches and concealed silicone buffers to prevent door over-travel.',
      specs: [
        'Floor or wall-mounted orientation',
        'Silent silicone dampening ring',
        'Concealed anchoring screws',
        'Matching PVD finish suite'
      ]
    },
    {
      category: 'hardware',
      icon: 'door',
      title: 'Forged Solid Brass Hinges',
      image: '/images/hw-hinge.jpg',
      desc: 'Drop-forged for high tensile strength (supports glass doors up to 55kg). Features dual internal stainless steel springs that self-close automatically from 25 degrees.',
      specs: [
        'Wall-to-Glass 90° Hinges',
        'Glass-to-Glass 180° In-line Hinges',
        'Glass-to-Glass 90° Corner Hinges',
        'Cycle tested to 100,000 openings'
      ]
    },
    {
      category: 'hardware',
      icon: 'hand',
      title: 'Architectural Handle Suite',
      image: '/images/hw-handle.jpg',
      desc: 'Ergonomically weighted back-to-back handle designs with concealed screw fixings and high-durability neoprene gaskets protecting the glass clamp point.',
      specs: [
        'Minimalist D-Pulls (250mm, 300mm)',
        'Architectural Ladder Pulls (450mm, 600mm)',
        'Knurled Industrial Bar Pulls',
        'Discrete Finger Knobs for Compact Spaces'
      ]
    },
    {
      category: 'hardware',
      icon: 'cog',
      title: 'SUS 304 Sliding Roller Carriers',
      image: '/images/hw-sliding-track.jpg',
      desc: 'Top-hung stainless steel roller carriers with precision sealed ball bearings. Quiet nylon tire inserts ensure silence and vibration-free motion.',
      specs: [
        'Exposed Architectural Roller Wheels',
        'Concealed Slim Track Sliding System',
        'Dual Hydraulic Soft-Close Dampers',
        'Anti-jump safety lock pins'
      ]
    },
    {
      category: 'hardware',
      icon: 'ruler',
      title: 'Stabilizer Support Bars & Rods',
      image: '/images/hw-stabilizer-bar.jpg',
      desc: 'Eliminates top-edge glass deflection and absorbs lateral vibration. Available in round or rectangular tubular profiles with multi-directional swivel heads.',
      specs: [
        '45° Diagonal Wall-to-Glass Braces',
        '90° Perpendicular Wall Brackets',
        'Direct Vertical Ceiling-Mount Rods',
        'Matching PVD colored finishes'
      ]
    },
    {
      category: 'hardware',
      icon: 'layers',
      title: 'Slimline Wall Channels & Floor Track',
      image: '/images/hw-wall-channel.jpg',
      desc: 'Architectural aluminum wall U-channels with a sleek 15mm visible face. Provides 15mm of built-in out-of-plumb adjustment for uneven wall tiling.',
      specs: [
        'Slimline U-Channel Profiles',
        'Discrete Brass Floor Clamps',
        'Recessed Flush Floor Track Options',
        'Anodized and PVD color matched'
      ]
    },
    {
      category: 'hardware',
      icon: 'shield',
      title: 'Watertight Magnetic Gaskets & Dams',
      image: '/images/hw-gasket.jpg',
      desc: 'UV-stabilized virgin PVC and silicone gaskets that will not yellow, crack, or harden. Strong neodymium magnetic cores snap shut securely.',
      specs: [
        '90° & 180° Magnetic Door Seals',
        'Dual-Fin Bottom Drip Sweeps',
        'Low-Profile Aluminum Water Dams',
        'Sanitary Anti-Bacterial Silicone'
      ]
    }
  ];

  const filteredItems = activeTab === 'all'
    ? accessories
    : accessories.filter(item => item.category === activeTab);

  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Bathroom Accessories &amp; Hardware</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Architectural Accessories &amp; Engineering</span>
          <h1>Luxury Bathroom Accessories &amp; Hardware</h1>
          <p>
            We craft everything for your bathroom: from solid brass towel rails, designer hooks, floating glass shelves, and linear drains to precision-engineered shower hinges and rollers — all harmonized in flawless PVD finishes.
          </p>
        </div>
      </section>

      {/* Interactive Luxury Finish Palette */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">The Coordinated Color Library</span>
            <h2>Match Every Single Accessory in Your Bathroom</h2>
            <p>
              Never mix clashing chrome and gold fittings. Choose from our 5 architectural finishes so your towel bars, robe hooks, shower door handles, hinges, and floor drains match your faucets and mixers identically.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <FinishSelector defaultFinish="Brushed Brass / Gold" />

              <div style={{ background: 'var(--color-bg-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginTop: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Why BathCentric Uses PVD Coating:</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Unlike conventional spray-painting or electroplating that peels and chips over time, Physical Vapor Deposition (PVD) bonds vaporized titanium and zirconium molecules into the metal in a high-vacuum chamber. The result is an ultra-hard, scratch-resistant barrier that will never flake, peel, or tarnish in wet environments.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/images/hardware.jpg"
                alt="Architectural Shower Hardware and Bathroom Accessories"
                style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Component Catalog */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="eyebrow">The Complete Catalog</span>
            <h2>Accessories &amp; Movement Engineering</h2>
            <p>Explore our complete range of solid brass bathroom accessories and heavy-duty shower hardware.</p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              type="button"
              className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Items ({accessories.length})
            </button>
            <button
              type="button"
              className={`filter-tab ${activeTab === 'accessories' ? 'active' : ''}`}
              onClick={() => setActiveTab('accessories')}
            >
              Bathroom Accessories (Towel Bars, Hooks, Shelves, Drains)
            </button>
            <button
              type="button"
              className={`filter-tab ${activeTab === 'hardware' ? 'active' : ''}`}
              onClick={() => setActiveTab('hardware')}
            >
              Enclosure Hardware (Hinges, Handles, Rollers, Profiles)
            </button>
          </div>

          <div className="grid-3">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="feature-card" style={{ display: 'flex', flexDirection: 'column' }}>
                {item.image && (
                  <div style={{ height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid var(--color-border)' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <span className="badge-tag" style={{ textTransform: 'capitalize' }}>
                    {item.category === 'accessories' ? 'Bathroom Accessory' : 'Enclosure Hardware'}
                  </span>
                  <div className="feature-icon" style={{ width: '36px', height: '36px', minWidth: '36px', marginBottom: 0 }}>
                    <Icon name={item.icon} size={18} />
                  </div>
                </div>
                <h3 className="feature-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', marginBottom: '1rem', flexGrow: 1 }}>
                  {item.desc}
                </p>
                <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {item.specs.map((s, sIdx) => (
                    <li key={sIdx}>• {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Assurance Banner */}
      <section className="section">
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Our Guarantee</span>
              <h2 className="banner-title">5-Year Comprehensive Warranty on All Accessories &amp; Hardware</h2>
              <p className="banner-desc">
                Every towel rail, hook, hinge, handle, track, and bracket installed by BathCentric is covered by our 5-year replacement warranty against mechanical failure, sagging, peeling, or corrosion.
              </p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Send Your Bathroom For Quotation</Link>
                <a href="https://wa.me/919876543210?text=Hi%20BathCentric,%20I'd%20like%20to%20consult%20about%20bathroom%20accessories%20and%20hardware%20finishes." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  WhatsApp a Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
