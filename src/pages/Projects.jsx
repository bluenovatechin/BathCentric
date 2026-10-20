import { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    category: 'swing',
    title: 'The Altamount Master Ensuite',
    location: 'Worli, Mumbai',
    description: 'Custom 10mm low-iron clear glass with brushed brass PVD hinges and 450mm architectural ladder pull, installed against bookmatched Calacatta marble.',
    image: '/images/project-1.jpg',
    tags: ['Swing Frameless', 'Brushed Brass', '10mm Low-Iron']
  },
  {
    id: 2,
    category: 'sliding',
    title: 'Skyline Penthouse Wetroom',
    location: 'Indiranagar, Bengaluru',
    description: 'Tactile fluted reeded glass sliding system with matte black SUS 304 top track and soft-close dampers, preserving privacy and open light.',
    image: '/images/project-2.jpg',
    tags: ['Sliding System', 'Matte Black', 'Fluted Reeded Glass']
  },
  {
    id: 3,
    category: 'l-shaped',
    title: 'Heritage Modern Villa',
    location: 'Golf Links, New Delhi',
    description: 'Expansive 1200x1000mm 90-degree corner enclosure with polished chrome solid brass clamps, corner stabilizer arm, and flush magnetic seals.',
    image: '/images/project-3.jpg',
    tags: ['L-Shaped Corner', 'Polished Chrome', '10mm Clear']
  },
  {
    id: 4,
    category: 'fixed',
    title: 'Architectural Wetroom Screen',
    location: 'Jubilee Hills, Hyderabad',
    description: 'Stationary 1200mm single walk-in panel with matte black ceiling stabilizer bar and continuous micro-floor channel for zero water escape.',
    image: '/images/project-4.jpg',
    tags: ['Fixed Walk-In', 'Matte Black', '12mm Ultra-Clear']
  },
  {
    id: 5,
    category: 'swing',
    title: 'Serene Master Bathroom',
    location: 'Koregaon Park, Pune',
    description: 'Custom alcove swing door with fixed inline glass panel. Engineered with brushed gold hardware and warm ambient lighting.',
    image: '/images/project-5.jpg',
    tags: ['Swing Frameless', 'Brushed Brass', 'EasyClean Shield']
  },
  {
    id: 6,
    category: 'sliding',
    title: 'Coastal Contemporary Ensuite',
    location: 'Boat Club Road, Chennai',
    description: '1300mm span sliding glass system with marine-grade SUS 316 roller assembly specifically resistant to coastal saline air.',
    image: '/images/project-6.jpg',
    tags: ['Sliding System', 'Gunmetal Grey', '10mm Toughened']
  },
  {
    id: 7,
    category: 'l-shaped',
    title: 'Parkview Villa 90° Cubicle',
    location: 'DLF Phase 5, Gurugram',
    description: 'Bespoke 90° corner enclosure with matte black minimal hardware, flush magnetic water seals, and floating marble vanity integration.',
    image: '/images/project-7.jpg',
    tags: ['L-Shaped Corner', 'Matte Black', '10mm Toughened']
  },
  {
    id: 8,
    category: 'fixed',
    title: 'Monochrome Slate Wetroom',
    location: 'Bodakdev, Ahmedabad',
    description: 'Seamless walk-in clear glass partition anchored into recessed architectural floor channels with dark slate tiles and ceiling rainfall head.',
    image: '/images/project-8.jpg',
    tags: ['Fixed Walk-In', 'Gunmetal Grey', '12mm Toughened']
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Projects</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>Our Portfolio</span>
          <h1>Architectural Installations</h1>
          <p>
            A curated selection of bespoke shower enclosures installed across premier luxury apartments, private residences, and heritage bungalows.
          </p>
        </div>
      </section>

      {/* Filterable Projects Section */}
      <section className="section">
        <div className="container">

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-tab ${filter === 'fixed' ? 'active' : ''}`}
              onClick={() => setFilter('fixed')}
            >
              Fixed Walk-In
            </button>
            <button
              className={`filter-tab ${filter === 'swing' ? 'active' : ''}`}
              onClick={() => setFilter('swing')}
            >
              Swing Frameless
            </button>
            <button
              className={`filter-tab ${filter === 'sliding' ? 'active' : ''}`}
              onClick={() => setFilter('sliding')}
            >
              Sliding Systems
            </button>
            <button
              className={`filter-tab ${filter === 'l-shaped' ? 'active' : ''}`}
              onClick={() => setFilter('l-shaped')}
            >
              L-Shaped Corner
            </button>
          </div>

          {/* Project Grid */}
          <div className="grid-3" id="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-img">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-body">
                  <div className="project-loc">{project.location}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.85rem' }}>
                    {project.description}
                  </p>
                  <div className="project-meta">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="badge-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="send-bathroom-banner">
            <div className="banner-content">
              <span className="eyebrow" style={{ color: 'var(--color-accent-on-dark)' }}>Inspired By A Project?</span>
              <h2 className="banner-title">Build A Similar Enclosure For Your Home</h2>
              <p className="banner-desc">
                Share the project photo you love along with your bathroom measurements. We will engineer a custom adaptation tailored precisely to your floor plan.
              </p>
              <div className="banner-actions">
                <Link to="/quote" className="btn btn-accent btn-lg">Get A Custom Quote</Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
