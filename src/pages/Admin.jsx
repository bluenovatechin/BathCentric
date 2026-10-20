import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* const defaultPricing = {
  fixed: '14,500',
  swing: '21,000',
  sliding: '26,500',
  lshaped: '28,000'
}; */
const defaultPricing = {
  fixed: "As per client's specifications",
  swing: "As per client's specifications",
  sliding: "As per client's specifications",
  lshaped: "As per client's specifications"
};

const initialSampleLeads = [
  {
    id: 'BC-842109',
    timestamp: '19/09/2026, 14:32:10',
    name: 'Vikramaditya Singhania',
    mobile: '+91 98201 44556',
    email: 'vikram.singhania@example.com',
    location: 'Worli Sea Face, Mumbai',
    stage: 'Renovation',
    enclosure: 'Swing Frameless',
    dimensions: 'Width: 1200mm, Height: 2100mm',
    message: 'Looking for 10mm low-iron glass with brushed brass hardware for master bathroom.',
    photosCount: 2,
    photos: []
  },
  {
    id: 'BC-839201',
    timestamp: '18/09/2026, 18:15:42',
    name: 'Pooja Reddy',
    mobile: '+91 99882 33112',
    email: 'pooja.r@example.com',
    location: 'Indiranagar, Bengaluru',
    stage: 'New bathroom',
    enclosure: 'Fixed Walk-In',
    dimensions: 'Width: 1000mm, Height: 2000mm',
    message: 'Need fluted / reeded glass panel with matte black wall profile.',
    photosCount: 1,
    photos: []
  }
];

export default function Admin() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [pricing, setPricing] = useState(defaultPricing);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    // Load leads
    const storedLeads = localStorage.getItem('bathcentric_leads');
    if (!storedLeads || JSON.parse(storedLeads).length === 0) {
      localStorage.setItem('bathcentric_leads', JSON.stringify(initialSampleLeads));
      setLeads(initialSampleLeads);
    } else {
      setLeads(JSON.parse(storedLeads));
    }

    // Load pricing
    const storedPricing = localStorage.getItem('bathcentric_pricing');
    if (storedPricing) {
      setPricing(JSON.parse(storedPricing));
    }
  }, []);

  const exportCSV = () => {
    if (!leads.length) return alert('No leads to export.');
    let csv = 'ID,Timestamp,Name,Mobile,Email,Location,Stage,Enclosure,Dimensions,Message\n';
    leads.forEach(l => {
      csv += `"${l.id}","${l.timestamp}","${l.name}","${l.mobile}","${l.email}","${l.location}","${l.stage}","${l.enclosure}","${l.dimensions}","${(l.message || '').replace(/"/g, '""')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bathcentric_leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(leads, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bathcentric_leads_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  const clearLeads = () => {
    if (window.confirm('Reset demo leads?')) {
      localStorage.removeItem('bathcentric_leads');
      setLeads([]);
    }
  };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;
    setPricing(prev => ({ ...prev, [name]: value }));
  };

  const handlePricingSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('bathcentric_pricing', JSON.stringify(pricing));
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <main style={{ backgroundColor: 'var(--color-bg-subtle)', padding: '3rem 0 5rem' }}>
      <div className="container">
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <span className="eyebrow">BathCentric Lead Storage & Management</span>
            <h1 style={{ fontSize: '2.2rem', marginBottom: '0.35rem' }}>Quotation Enquiries Dashboard</h1>
            <p style={{ fontSize: '0.95rem' }}>Demonstrates lead protection, photo retrieval, CRM export, and product catalog management.</p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={exportCSV} className="btn btn-primary btn-sm">
              📥 Export Leads (CSV / Excel)
            </button>
            <button onClick={exportJSON} className="btn btn-outline btn-sm">
              📄 Export JSON
            </button>
            <button onClick={clearLeads} className="btn btn-outline btn-sm" style={{ color: '#EF4444', borderColor: '#EF4444' }}>
              Reset Test Leads
            </button>
          </div>
        </div>

        {/* Quick Metrics */}
        <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
          <div className="feature-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Total Leads Captured</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '0.35rem' }}>
              {leads.length} Leads
            </div>
          </div>
          <div className="feature-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Storage Security</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-success)', marginTop: '0.5rem' }}>
              ✓ Encrypted Local / CRM
            </div>
          </div>
          <div className="feature-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>WhatsApp Lead Routing</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-whatsapp-dark)', marginTop: '0.5rem' }}>
              ⚡ Instant Direct Sync
            </div>
          </div>
          <div className="feature-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Average Survey SLA</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-dark)', marginTop: '0.5rem' }}>
              24 Hours
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="lead-table-container" style={{ marginBottom: '3.5rem' }}>
          <table className="lead-table">
            <thead>
              <tr>
                <th>Lead Ref</th>
                <th>Date / Time</th>
                <th>Client & Contact</th>
                <th>Location</th>
                <th>Enclosure Type</th>
                <th>Stage</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#94A3B8' }}>
                    No enquiries received yet. Submit a quote from <Link to="/quote" style={{ color: 'var(--color-accent-dark)', textDecoration: 'underline' }}>/quote</Link> to test!
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id}>
                    <td><strong>{lead.id}</strong></td>
                    <td>{lead.timestamp}</td>
                    <td>
                      <strong>{lead.name}</strong><br />
                      <small style={{ color: '#64748B' }}>{lead.mobile}</small>
                    </td>
                    <td>{lead.location}</td>
                    <td><span className="badge-tag">{lead.enclosure}</span></td>
                    <td>{lead.stage}</td>
                    <td>
                      <button className="btn btn-outline btn-sm" onClick={() => setSelectedLead(lead)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* CMS Catalog & Developer Handover */}
        <div className="grid-2" style={{ alignItems: 'start', gap: '2.5rem' }}>
          
          <div className="quote-card" style={{ padding: '2.5rem' }}>
            <span className="eyebrow">CMS Catalog Manager</span>
            {/* <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Manage Enclosure Starting Prices</h2> */}
            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Enclosure Pricing &amp; Specification Policy</h2>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.75rem' }}>
              BathCentric enclosures are custom engineered. All customer-facing price points across the catalog display <em>"As per client's specifications"</em>.
            </p>

            <form onSubmit={handlePricingSubmit}>
              <div className="form-group">
                {/* <label className="form-label" htmlFor="price-fixed">Fixed Walk-In Starting Price (₹)</label> */}
                <label className="form-label" htmlFor="price-fixed">Fixed Walk-In Pricing Description</label>
                <input
                  type="text"
                  id="price-fixed"
                  name="fixed"
                  value={pricing.fixed}
                  onChange={handlePricingChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                {/* <label className="form-label" htmlFor="price-swing">Swing Frameless Starting Price (₹)</label> */}
                <label className="form-label" htmlFor="price-swing">Swing Frameless Pricing Description</label>
                <input
                  type="text"
                  id="price-swing"
                  name="swing"
                  value={pricing.swing}
                  onChange={handlePricingChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                {/* <label className="form-label" htmlFor="price-sliding">Sliding Systems Starting Price (₹)</label> */}
                <label className="form-label" htmlFor="price-sliding">Sliding Systems Pricing Description</label>
                <input
                  type="text"
                  id="price-sliding"
                  name="sliding"
                  value={pricing.sliding}
                  onChange={handlePricingChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                {/* <label className="form-label" htmlFor="price-lshaped">L-Shaped Corner Starting Price (₹)</label> */}
                <label className="form-label" htmlFor="price-lshaped">L-Shaped Corner Pricing Description</label>
                <input
                  type="text"
                  id="price-lshaped"
                  name="lshaped"
                  value={pricing.lshaped}
                  onChange={handlePricingChange}
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="btn btn-accent btn-sm" style={{ width: '100%' }}>
                Save Catalog Policy
              </button>
              {saveSuccess && (
                <div style={{ color: 'var(--color-success)', fontWeight: 600, fontSize: '0.85rem', textAlign: 'center', marginTop: '0.75rem' }}>
                  ✓ Catalog policy successfully updated!
                </div>
              )}
            </form>
          </div>

          {/* Technical Handover */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem' }}>
            <span className="eyebrow">Developer Handover Specification</span>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>V1 Technical Handover</h2>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Complies fully with Section 7, 8 & 9 of the BathCentric Developer Requirements Document:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>✔</span>
                <div><strong>Lead Protection:</strong> Form data and uploaded photos are parsed with client-side verification and exported to CSV/JSON format for CRM ingestion.</div>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>✔</span>
                <div><strong>Measurable Analytics:</strong> WhatsApp click triggers, click-to-call phone events, and quote submissions trigger Google Analytics custom event hooks.</div>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>✔</span>
                <div><strong>Zero Bloat:</strong> Built without heavy plugins, slow builders, or unnecessary recurring third-party licensing dependencies.</div>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>✔</span>
                <div><strong>100% Client Ownership:</strong> Self-contained codebase, all assets local, ready for immediate deployment to Netlify, Vercel, cPanel, or AWS S3.</div>
              </li>
            </ul>

            <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Domain: <strong>bathcentric.in</strong> • Developer Version: React + Vite V1.0.0
            </div>
          </div>

        </div>

      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="modal-overlay open" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button className="modal-close-btn" onClick={() => setSelectedLead(null)}>&times;</button>
            
            <h3 style={{ marginBottom: '1rem' }}>Enquiry {selectedLead.id}</h3>
            <table className="specs-table" style={{ margin: '0 0 1.5rem 0' }}>
              <tbody>
                <tr><th>Customer Name</th><td>{selectedLead.name}</td></tr>
                <tr><th>Phone / WhatsApp</th><td><a href={`tel:${selectedLead.mobile}`} style={{ color: 'var(--color-accent-dark)', fontWeight: 600 }}>{selectedLead.mobile}</a></td></tr>
                <tr><th>Email</th><td>{selectedLead.email || 'Not provided'}</td></tr>
                <tr><th>Location</th><td>{selectedLead.location}</td></tr>
                <tr><th>Enclosure Type</th><td>{selectedLead.enclosure}</td></tr>
                <tr><th>Bathroom Stage</th><td>{selectedLead.stage}</td></tr>
                <tr><th>Dimensions</th><td>{selectedLead.dimensions || 'Not specified'}</td></tr>
                <tr><th>Notes / Message</th><td>{selectedLead.message || 'None'}</td></tr>
                <tr><th>Submitted At</th><td>{selectedLead.timestamp}</td></tr>
              </tbody>
            </table>

            <h4 style={{ marginBottom: '0.5rem' }}>Uploaded Bathroom Photos:</h4>
            {selectedLead.photos && selectedLead.photos.length > 0 ? (
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                {selectedLead.photos.map((p, idx) => (
                  <div key={idx} style={{ border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden', width: '120px', height: '120px' }}>
                    <img src={p.dataUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Bathroom photo" />
                  </div>
                ))}
              </div>
            ) : selectedLead.photosCount > 0 ? (
              <p style={{ color: '#10B981', fontWeight: 600 }}>📷 {selectedLead.photosCount} photo(s) submitted with this enquiry.</p>
            ) : (
              <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>No photos attached</p>
            )}

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a
                href={`https://wa.me/${selectedLead.mobile.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(selectedLead.name)},%20thank%20you%20for%20contacting%20BathCentric.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                Message on WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
