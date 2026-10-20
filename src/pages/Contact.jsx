import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHeader } from '../components/Blocks';
import WhatsAppForm, { TextField, ChoiceGroup } from '../components/WhatsAppForm';
import { brand, telHref, mailHref } from '../config';
import { whatsappUrl } from '../lib/whatsapp';

const TOPICS = ['Shower enclosures', 'Bathroom design', 'Renovation', 'Mirrors', 'Linear drains', 'Accessories', 'Maintenance'];
const initial = { name: '', phone: '', city: '', topic: '', message: '' };
const toFields = (v) => ({ Name: v.name, Mobile: v.phone, City: v.city, Topic: v.topic, Message: v.message });

export default function Contact() {
  const details = [
    brand.whatsapp && { icon: 'chat', label: 'WhatsApp', node: <a href={whatsappUrl(`Hello ${brand.name},`)} target="_blank" rel="noopener noreferrer">{brand.whatsappDisplay}</a> },
    brand.phone && { icon: 'phone', label: 'Phone', node: <a href={telHref}>{brand.phone}</a> },
    brand.email && { icon: 'mail', label: 'Email', node: <a href={mailHref}>{brand.email}</a> },
    brand.address && { icon: 'pin', label: 'Studio', node: <span>{brand.address}</span> },
    brand.area && { icon: 'pin', label: 'Service area', node: <span>{brand.area}</span> },
    brand.hours && { icon: 'clock', label: 'Hours', node: <span>{brand.hours}</span> },
  ].filter(Boolean);

  return (
    <>
      <PageHeader crumbs={[['Contact']]} kicker="Contact" no="01" title={<>Let’s <em>talk</em></>}>
        Send a message and it opens in WhatsApp, ready to send to us on <strong>{brand.whatsappDisplay}</strong>.{brand.phone === brand.whatsappDisplay && ' You can also call us on the same number.'}
      </PageHeader>

      <section className="section">
        <div className="wrap quote-grid">
          <WhatsAppForm
            formName="contact"
            title="I have a question."
            initial={initial}
            toFields={toFields}
            requireMessage
            submitLabel={`Send to WhatsApp ${brand.whatsappDisplay}`}
            render={({ v, errors, onChange, aria }) => (
              <>
                <div className="grid-3">
                  <TextField id="contact-name" label="Name" error={errors.name}>
                    <input id="contact-name" name="name" type="text" autoComplete="name" value={v.name} onChange={onChange} required {...aria('name')} />
                  </TextField>
                  <TextField id="contact-phone" label="Mobile" error={errors.phone}>
                    <input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={onChange} required {...aria('phone')} />
                  </TextField>
                  <TextField id="contact-city" label="City" error={errors.city}>
                    <input id="contact-city" name="city" type="text" autoComplete="address-level2" value={v.city} onChange={onChange} required {...aria('city')} />
                  </TextField>
                </div>
                <ChoiceGroup legend="Topic" name="topic" value={v.topic} onChange={onChange} options={TOPICS.map((t) => ({ value: t, label: t }))} />
                <TextField id="contact-message" label="Message" error={errors.message}>
                  <textarea id="contact-message" name="message" rows={4} maxLength={1000} value={v.message} onChange={onChange} required {...aria('message')} />
                </TextField>
              </>
            )}
          />

          <aside className="quote-aside" aria-label="Contact details">
            <h2 className="h3">Reach us</h2>
            {details.length > 0 ? (
              <ul className="detail-list">
                {details.map((d) => <li key={d.label}><Icon name={d.icon} /><span><strong>{d.label}</strong>{d.node}</span></li>)}
              </ul>
            ) : (
              <p className="muted">Contact details will appear here.</p>
            )}
            <div className="info-card">
              <h3 className="h3">Want a quotation?</h3>
              <p className="muted">Choose your enclosure, finish, glass and anything else you need.</p>
              <Link to="/quote" className="btn btn-ink btn-sm">Request a Quote</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
