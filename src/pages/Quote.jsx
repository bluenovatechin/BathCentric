import { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: '',
    stage: 'New bathroom',
    interest: 'Turnkey Bathroom Design',
    budget: 'Premium Contemporary',
    enclosure: 'Not sure',
    glass: 'Not sure / Need Advice',
    finish: 'Brushed Brass / Gold',
    dimensions: '',
    message: '',
    consent: true
  });

  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');
  const [whatsAppLink, setWhatsAppLink] = useState('');

  // Handle URL prefill (e.g. /quote?type=fixed)
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      const typeMap = {
        fixed: 'Fixed Walk-In',
        swing: 'Swing Frameless',
        sliding: 'Sliding System',
        'l-shaped': 'L-Shaped Corner'
      };
      if (typeMap[typeParam.toLowerCase()]) {
        setFormData(prev => ({ ...prev, enclosure: typeMap[typeParam.toLowerCase()] }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const processFiles = (files) => {
    if (!files || !files.length) return;

    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) {
        alert('Please upload image files only (JPG, PNG, WebP).');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`File ${file.name} exceeds 5MB limit.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedPhotos(prev => [
          ...prev,
          {
            name: file.name,
            size: (file.size / 1024).toFixed(1) + ' KB',
            dataUrl: e.target.result
          }
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    processFiles(e.dataTransfer.files);
  };

  const removePhoto = (index) => {
    setUploadedPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Please agree to allow BathCentric to contact you regarding your quotation.');
      return;
    }

    const leadId = 'BC-' + Date.now().toString().slice(-6);
    const newLead = {
      id: leadId,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ...formData,
      photosCount: uploadedPhotos.length,
      photos: uploadedPhotos.map(p => ({ name: p.name, dataUrl: p.dataUrl }))
    };

    // Save to LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem('bathcentric_leads') || '[]');
      existing.unshift(newLead);
      localStorage.setItem('bathcentric_leads', JSON.stringify(existing));
    } catch (err) {
      // Fallback if images exceed LocalStorage quota
      newLead.photos = uploadedPhotos.map(p => ({ name: p.name, note: 'Photo attached in session' }));
      const existing = JSON.parse(localStorage.getItem('bathcentric_leads') || '[]');
      existing.unshift(newLead);
      localStorage.setItem('bathcentric_leads', JSON.stringify(existing));
    }

    // Prepare WhatsApp Link
    const whatsappMsg = encodeURIComponent(
      `Hi BathCentric, I just submitted a bathroom enquiry (Ref: ${leadId}).\n` +
      `Name: ${formData.name}\n` +
      `Location: ${formData.location}\n` +
      `Interest: ${formData.interest}\n` +
      `Enclosure: ${formData.enclosure}\n` +
      `Glass: ${formData.glass}\n` +
      `Finish: ${formData.finish}\n` +
      `Stage: ${formData.stage}\n` +
      `Please review my bathroom photos and requirements!`
    );
    setWhatsAppLink(`https://wa.me/919876543210?text=${whatsappMsg}`);
    setSubmittedLeadId(leadId);
    setModalOpen(true);

    // Reset Form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      location: '',
      stage: 'New bathroom',
      interest: 'Complete Bathroom Suite',
      enclosure: 'Not sure',
      glass: 'Not sure / Need Advice',
      finish: 'Brushed Brass / Gold',
      dimensions: '',
      message: '',
      consent: true
    });
    setUploadedPhotos([]);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="hero-wordmark" aria-hidden="true">BATHCENTRIC</div>

        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Book Free Site Visit &amp; Quote</span>
          </nav>
          <span className="eyebrow" style={{ color: 'var(--color-accent-dark)' }}>100% Free Doorstep Consultation</span>
          <h1>Book a Free Site Visit &amp; Quotation</h1>
          <p>
            Get 100% free doorstep laser measurement, layout advice, and a transparent quotation for custom glass partitions, shower enclosures, and matching luxury accessories.
          </p>
        </div>
      </section>

      {/* Quotation Form Container */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>

          <div className="quote-card">
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <span className="eyebrow">Measurement &amp; Proposal Request</span>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Send Your Bathroom For Quotation</h2>
              <p style={{ fontSize: '0.95rem' }}>
                Share your bathroom photos and layout ideas below. Our specialists review plumbing, suggest optimal glass &amp; accessory finishes, and provide an itemized quote within 24 hours.
              </p>
            </div>

            <form id="quote-form" onSubmit={handleSubmit}>

              {/* Contact Row */}
              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="q-name">Full Name *</label>
                  <input
                    type="text"
                    id="q-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. Vikram Singhania"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-mobile">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="q-mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. +91 98200 55443"
                    required
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="q-email">Email Address <span className="optional">(Optional)</span></label>
                  <input
                    type="email"
                    id="q-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. vikram@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-location">Location / City &amp; Area *</label>
                  <input
                    type="text"
                    id="q-location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="e.g. Worli, Mumbai or Indiranagar, Bengaluru"
                    required
                  />
                </div>
              </div>

              {/* Bathroom Stage */}
              <div className="form-group">
                <label className="form-label">Bathroom Stage *</label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {['New bathroom', 'Renovation', 'Existing bathroom'].map((st) => (
                    <label key={st} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="stage"
                        value={st}
                        checked={formData.stage === st}
                        onChange={handleInputChange}
                        style={{ accentColor: 'var(--color-accent)' }}
                      />
                      <span>{st === 'New bathroom' ? 'New Construction' : st === 'Renovation' ? 'Full Renovation' : 'Existing Bathroom Upgrade'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* What Are You Looking For? (Scope of Interest) */}
              <div className="form-group">
                <label className="form-label">Scope of Solution Needed *</label>
                <div className="option-cards-grid">
                  {[
                    { id: 'Turnkey Bathroom Design', label: 'Bespoke Bathroom Design & Implementation' },
                    { id: 'Bathroom Redesign / Renovation', label: 'Bathroom Redesign & Remodeling' },
                    { id: 'Shower Enclosure', label: 'Frameless Shower Enclosure / Glass' },
                    { id: 'Smart LED Mirrors', label: 'Smart Touch LED Vanity Mirrors' },
                    { id: 'Linear Floor Drains', label: 'Invisible Tile-Insert Linear Drains' },
                    { id: 'Bathroom Maintenance', label: 'Annual Deep Cleaning & Care' },
                    { id: 'Bathroom Accessories', label: 'Luxury Accessories & PVD Hardware Only' },
                    { id: 'Not sure', label: 'Not Sure (Need Expert Advice)' }
                  ].map((item) => (
                    <label key={item.id} className="radio-card">
                      <input
                        type="radio"
                        name="interest"
                        value={item.id}
                        checked={formData.interest === item.id}
                        onChange={handleInputChange}
                      />
                      <div className="radio-card-label" style={{ padding: '0.9rem 0.5rem' }}>
                        <span>{item.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget & Specification Tier */}
              <div className="form-group">
                <label className="form-label">Specification &amp; Budget Preference</label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {[
                    { id: 'Smart Architecture', label: 'Smart Architecture (Space-Saving Essentials)' },
                    { id: 'Premium Contemporary', label: 'Premium Contemporary (Modern Hotel Luxury)' },
                    { id: 'Ultra Bespoke', label: 'Ultra Bespoke (Designer Suite)' },
                    { id: 'Open', label: 'Open / Need Consultation' }
                  ].map((b) => (
                    <label key={b.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="budget"
                        value={b.id}
                        checked={formData.budget === b.id}
                        onChange={handleInputChange}
                        style={{ accentColor: 'var(--color-accent)' }}
                      />
                      <span style={{ fontSize: '0.92rem' }}>{b.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Enclosure System */}
              <div className="form-group">
                <label className="form-label">Preferred Enclosure Style</label>
                <div className="option-cards-grid">
                  {[
                    { id: 'Fixed Walk-In', label: 'Fixed Walk-In' },
                    { id: 'Swing Frameless', label: 'Swing Frameless' },
                    { id: 'Sliding System', label: 'Sliding System' },
                    { id: 'L-Shaped Corner', label: 'L-Shaped Corner' },
                    { id: 'Not sure', label: 'Not Sure / Open' }
                  ].map((item) => (
                    <label key={item.id} className="radio-card">
                      <input
                        type="radio"
                        name="enclosure"
                        value={item.id}
                        checked={formData.enclosure === item.id}
                        onChange={handleInputChange}
                      />
                      <div className="radio-card-label">
                        <span>{item.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Glass Type */}
              <div className="form-group">
                <label className="form-label">Preferred Glass Type</label>
                <div className="option-cards-grid">
                  {[
                    { id: 'Low-Iron Ultra-Clear', label: 'Low-Iron Ultra-Clear' },
                    { id: 'Fluted / Reeded', label: 'Fluted Reeded Glass' },
                    { id: 'Clear Toughened', label: 'Clear Toughened' },
                    { id: 'Acid-Etched Frosted', label: 'Satin Frosted' },
                    { id: 'Not sure / Need Advice', label: 'Need Advice' }
                  ].map((item) => (
                    <label key={item.id} className="radio-card">
                      <input
                        type="radio"
                        name="glass"
                        value={item.id}
                        checked={formData.glass === item.id}
                        onChange={handleInputChange}
                      />
                      <div className="radio-card-label">
                        <span>{item.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Hardware / Accessory Finish */}
              <div className="form-group">
                <label className="form-label">Preferred Accessory &amp; Hardware Finish</label>
                <div className="option-cards-grid">
                  {[
                    { id: 'Brushed Brass / Gold', label: 'Brushed Brass / Gold' },
                    { id: 'Matte Black', label: 'Matte Black' },
                    { id: 'Polished Chrome', label: 'Polished Chrome' },
                    { id: 'Brushed Rose Gold', label: 'Rose Gold' },
                    { id: 'Gunmetal Grey', label: 'Gunmetal Grey' }
                  ].map((item) => (
                    <label key={item.id} className="radio-card">
                      <input
                        type="radio"
                        name="finish"
                        value={item.id}
                        checked={formData.finish === item.id}
                        onChange={handleInputChange}
                      />
                      <div className="radio-card-label">
                        <span>{item.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Approximate Dimensions */}
              <div className="form-group">
                <label className="form-label" htmlFor="q-dimensions">
                  Approximate Dimensions <span className="optional">(Optional: Width x Height in mm, inches, or feet)</span>
                </label>
                <input
                  type="text"
                  id="q-dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="e.g. Width: 1200mm, Height: 2100mm, or 4ft x 7ft"
                />
              </div>

              {/* Upload Bathroom Photos */}
              <div className="form-group">
                <label className="form-label">
                  Upload Bathroom Photos <span className="optional">(Recommended: 2–3 photos for plumbing and drainage clearance review)</span>
                </label>

                <div
                  className={`dropzone ${dragOver ? 'dragover' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragEnter={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
                  onDrop={handleFileDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    onChange={(e) => processFiles(e.target.files)}
                  />
                  <div className="dropzone-icon"><Icon name="camera" size={40} strokeWidth={1.4} /></div>
                  <div className="dropzone-text">Click or drag &amp; drop bathroom photos here</div>
                  <div className="dropzone-subtext">Supports JPG, PNG, WebP up to 5MB each. Multiple angles recommended.</div>
                </div>

                {/* Previews Grid */}
                {uploadedPhotos.length > 0 && (
                  <div className="preview-grid">
                    {uploadedPhotos.map((photo, index) => (
                      <div key={index} className="preview-thumb">
                        <img src={photo.dataUrl} alt={photo.name} />
                        <button
                          type="button"
                          className="preview-remove-btn"
                          title="Remove photo"
                          onClick={(e) => {
                            e.stopPropagation();
                            removePhoto(index);
                          }}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Message / Requirements */}
              <div className="form-group">
                <label className="form-label" htmlFor="q-message">
                  Additional Notes &amp; Accessories Needed <span className="optional">(Optional)</span>
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Tell us about your bathroom: e.g. need matching towel bars and corner glass shelf in brushed brass, water curb detail, floor drain preferences, or wall tile information."
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <span>
                    I consent to BathCentric contacting me via WhatsApp, phone, or email with a customized quotation and layout recommendation.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div style={{ marginTop: '2.5rem' }}>
                <button type="submit" className="btn btn-accent btn-lg" style={{ width: '100%' }}>
                  Submit Bathroom Details &amp; Get Quotation &rarr;
                </button>
                <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                  🔒 Your information is confidential and will never be shared. Free, no-obligation proposal.
                </div>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Success Modal */}
      <div className={`modal-overlay ${modalOpen ? 'open' : ''}`} onClick={() => setModalOpen(false)}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setModalOpen(false)}
            aria-label="Close modal"
          >
            &times;
          </button>

          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981, #059669)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '28px'
            }}>
              ✓
            </div>
            <span className="eyebrow" style={{ color: 'var(--color-success)' }}>Submission Received</span>
            <h2>Thank You for Reaching Out</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
              Your bathroom details have been registered under Reference ID: <strong>{submittedLeadId}</strong>.
            </p>
          </div>

          <div style={{ background: 'var(--color-bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
            <p style={{ margin: 0 }}>
              Our architectural design engineer will review your bathroom photos and prepare a tailored layout plan with glass specifications and matching accessory finishes within 24 hours.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%' }}
            >
              <span>Instant Chat on WhatsApp</span>
              <Icon name="arrow" size={16} strokeWidth={2} />
            </a>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setModalOpen(false)}
            >
              Close &amp; Return to Website
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
