import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHeader } from '../components/Blocks';
import { FinishSwatch } from '../components/Swatches';
import WhatsAppForm, { TextField, ChoiceGroup } from '../components/WhatsAppForm';
import { brand, telHref, waHref } from '../config';
import { enclosures, finishes, addOns } from '../data/catalog';
import { mirrors, drains, accessories, services } from '../data/services';
import { glassRange } from '../data/products';

// What the visitor can ask for. `id` matches ?service= links from the rest of the site.
const SCOPE = [
  { id: 'enclosure', label: 'Shower enclosure' },
  ...services.filter((s) => s.id !== 'maintenance').map((s) => ({ id: s.id, label: s.short.replace(/^./, (c) => c.toUpperCase()) })),
  { id: 'mirrors', label: 'Mirrors' },
  { id: 'drains', label: 'Linear drains' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'maintenance', label: 'Maintenance & care' },
];
const scopeLabel = Object.fromEntries(SCOPE.map((s) => [s.id, s.label]));

const STAGES = ['New bathroom', 'Renovation', 'Existing bathroom'];
const SIZES = ['Compact · under 45 sq ft', 'Standard · 45–85 sq ft', 'Large · over 85 sq ft', 'Not sure'];
const VISIT = ['Yes, please measure on site', 'I will share photos first'];
const SPEC = ['Essential', 'Premium', 'Bespoke designer', 'Need advice'];
const TIMES = ['Morning', 'Afternoon', 'Evening', 'Any time'];
const CARE = ['Limescale removal', 'Nanocoating refresh', 'Silicone resealing', 'Hardware alignment'];
const DRAIN_LENGTHS = ['600 mm', '750 mm', '900 mm', '1200 mm', 'Wall to wall'];

const opts = (list) => list.map((x) => ({ value: x, label: x }));

// Which detail sections apply to the chosen scope.
const needs = (scope) => ({
  enclosure: scope.length === 0 || scope.some((s) => ['enclosure', 'design', 'renovation'].includes(s)),
  mirrors: scope.includes('mirrors'),
  drains: scope.includes('drains'),
  accessories: scope.includes('accessories'),
  maintenance: scope.includes('maintenance'),
});

function toFields(v) {
  const n = needs(v.scope);
  return {
    Name: v.name,
    Mobile: v.phone,
    Email: v.email,
    'City / area': v.city,
    'Best time to call': v.time,
    'Looking for': v.scope.map((s) => scopeLabel[s]).join(', ') || 'Not sure yet',
    Bathroom: v.stage,
    'Bathroom size': v.size,
    'Approx. measurements': v.dimensions,
    'Site visit': v.visit,
    ...(n.enclosure && {
      Enclosure: v.enclosure,
      Glass: v.glass,
      'Fitting finish': v.finish,
      'Add-ons': v.addons.join(', '),
    }),
    ...(n.mirrors && { 'Mirror shape': v.mirror, 'Mirror size': v.mirrorSize }),
    ...(n.drains && { 'Drain type': v.drain, 'Drain length': v.drainLength }),
    ...(n.accessories && { Accessories: v.accessories.join(', ') }),
    ...(n.maintenance && { 'Care needed': v.care.join(', ') }),
    ...((n.mirrors || n.drains || n.accessories) && !n.enclosure && { Finish: v.finish }),
    Specification: v.spec,
    Message: v.message,
  };
}

const EMPTY = new URLSearchParams();

function Part({ no, title, hint, children }) {
  return (
    <section className="form-part" aria-label={title}>
      <h2 className="form-part-h"><b>{no}</b>{title}</h2>
      {hint && <p className="form-part-hint">{hint}</p>}
      {children}
    </section>
  );
}

export default function Quote() {
  const [urlParams] = useSearchParams();
  // The prerendered page has no ?query, so apply link pre-selections only after hydration.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const params = hydrated ? urlParams : EMPTY;
  const initial = useMemo(() => {
    const enc = enclosures.find((x) => x.slug === params.get('enclosure'));
    const service = SCOPE.find((s) => s.id === params.get('service'));
    const mirror = mirrors.find((m) => m.id === params.get('mirror'));
    const drain = drains.find((d) => d.id === params.get('drain'));
    const scope = [...new Set([enc && 'enclosure', service?.id].filter(Boolean))];
    return {
      name: '', phone: '', email: '', city: '', time: '',
      scope, stage: '', size: '', dimensions: '', visit: '',
      enclosure: enc ? enc.name : '', glass: '', finish: '', addons: [],
      mirror: mirror ? mirror.name : '', mirrorSize: '',
      drain: drain ? drain.name : '', drainLength: '',
      accessories: [], care: [], spec: '', message: '',
    };
  }, [params]);

  return (
    <>
      <PageHeader crumbs={[['Request a Quote']]} kicker="Request a quote" no="01" title={<>Tell us about <em>your</em> bathroom</>}>
        Choose what you need and the details you like. Your request opens in WhatsApp, ready to send to us on <a href={waHref()} target="_blank" rel="noopener noreferrer"><strong>{brand.whatsappDisplay}</strong></a>.
      </PageHeader>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap quote-grid">
          <WhatsAppForm
            key={params.toString()}
            formName="quote"
            title="I would like a quotation for my bathroom."
            initial={initial}
            toFields={toFields}
            submitLabel={`Send to WhatsApp ${brand.whatsappDisplay}`}
            render={({ v, errors, onChange, aria }) => {
              const n = needs(v.scope);
              let no = 2;
              const next = () => String(no++).padStart(2, '0');
              const summary = Object.entries(toFields(v)).filter(([, x]) => x && String(x).trim());
              return (
                <>
                  <Part no="01" title="Your details">
                    <div className="grid-2">
                      <TextField id="quote-name" label="Name" error={errors.name}>
                        <input id="quote-name" name="name" type="text" autoComplete="name" value={v.name} onChange={onChange} required {...aria('name')} />
                      </TextField>
                      <TextField id="quote-phone" label="Mobile / WhatsApp" error={errors.phone}>
                        <input id="quote-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={v.phone} onChange={onChange} required {...aria('phone')} />
                      </TextField>
                      <TextField id="quote-city" label="City & area" error={errors.city}>
                        <input id="quote-city" name="city" type="text" autoComplete="address-level2" value={v.city} onChange={onChange} required {...aria('city')} />
                      </TextField>
                      <TextField id="quote-email" label="Email" optional error={errors.email}>
                        <input id="quote-email" name="email" type="email" autoComplete="email" value={v.email} onChange={onChange} {...aria('email')} />
                      </TextField>
                    </div>
                    <ChoiceGroup legend="Best time to call" name="time" value={v.time} onChange={onChange} options={opts(TIMES)} />
                  </Part>

                  <Part no={next()} title="What do you need?" hint="Choose one or more. The form shows the details for what you pick.">
                    <ChoiceGroup legend="Looking for" name="scope" multiple value={v.scope} onChange={onChange} options={SCOPE.map((s) => ({ value: s.id, label: s.label }))} />
                  </Part>

                  <Part no={next()} title="Your bathroom">
                    <ChoiceGroup legend="Bathroom" name="stage" value={v.stage} onChange={onChange} options={opts(STAGES)} />
                    <ChoiceGroup legend="Bathroom size" name="size" value={v.size} onChange={onChange} options={opts(SIZES)} />
                    <TextField id="quote-dimensions" label="Approximate measurements" optional>
                      <input id="quote-dimensions" name="dimensions" type="text" placeholder="e.g. shower area 4 ft × 7 ft" maxLength={80} value={v.dimensions} onChange={onChange} />
                    </TextField>
                    <ChoiceGroup legend="Site visit" name="visit" value={v.visit} onChange={onChange} options={opts(VISIT)} />
                  </Part>

                  {n.enclosure && (
                    <Part no={next()} title="Shower enclosure">
                      <ChoiceGroup legend="Enclosure type" name="enclosure" value={v.enclosure} onChange={onChange} options={[...enclosures.map((e) => ({ value: e.name, label: e.short })), { value: 'Not sure', label: 'Not sure' }]} />
                      <ChoiceGroup legend="Glass" name="glass" value={v.glass} onChange={onChange} options={glassRange.map((g) => ({ value: g.name, label: g.name.replace(' Glass', '') }))} />
                      <ChoiceGroup legend="Fitting finish" name="finish" value={v.finish} onChange={onChange} options={finishes.map((f) => ({ value: f.name, label: f.name, icon: <FinishSwatch id={f.id} size="xs" /> }))} />
                      <ChoiceGroup legend="Add-ons" name="addons" multiple value={v.addons} onChange={onChange} options={addOns.map((a) => ({ value: a.name, label: a.name }))} />
                    </Part>
                  )}

                  {n.mirrors && (
                    <Part no={next()} title="Mirror">
                      <ChoiceGroup legend="Shape" name="mirror" value={v.mirror} onChange={onChange} options={mirrors.map((m) => ({ value: m.name, label: m.name.replace(' Mirror', '') }))} />
                      <TextField id="quote-mirror-size" label="Mirror size or vanity width" optional>
                        <input id="quote-mirror-size" name="mirrorSize" type="text" placeholder="e.g. 600 × 900 mm, or vanity 1200 mm wide" maxLength={80} value={v.mirrorSize} onChange={onChange} />
                      </TextField>
                    </Part>
                  )}

                  {n.drains && (
                    <Part no={next()} title="Linear drain">
                      <ChoiceGroup legend="Drain type" name="drain" value={v.drain} onChange={onChange} options={drains.map((d) => ({ value: d.name, label: d.name }))} />
                      <ChoiceGroup legend="Length" name="drainLength" value={v.drainLength} onChange={onChange} options={opts(DRAIN_LENGTHS)} />
                    </Part>
                  )}

                  {n.accessories && (
                    <Part no={next()} title="Accessories">
                      <ChoiceGroup legend="Accessories" name="accessories" multiple value={v.accessories} onChange={onChange} options={accessories.map((a) => ({ value: a.name, label: a.name }))} />
                    </Part>
                  )}

                  {(n.mirrors || n.drains || n.accessories) && !n.enclosure && (
                    <Part no={next()} title="Finish">
                      <ChoiceGroup legend="Finish" name="finish" value={v.finish} onChange={onChange} options={finishes.map((f) => ({ value: f.name, label: f.name, icon: <FinishSwatch id={f.id} size="xs" /> }))} />
                    </Part>
                  )}

                  {n.maintenance && (
                    <Part no={next()} title="Maintenance & care">
                      <ChoiceGroup legend="Care needed" name="care" multiple value={v.care} onChange={onChange} options={opts(CARE)} />
                    </Part>
                  )}

                  <Part no={next()} title="Anything else">
                    <ChoiceGroup legend="Specification" name="spec" value={v.spec} onChange={onChange} options={opts(SPEC)} />
                    <TextField id="quote-message" label="Notes" optional error={errors.message}>
                      <textarea id="quote-message" name="message" rows={3} maxLength={1000} placeholder="e.g. wall tile details, a matching towel bar, timing of your renovation" value={v.message} onChange={onChange} {...aria('message')} />
                    </TextField>
                  </Part>

                  <div className="form-summary" aria-live="polite">
                    <p className="ref">Your request · sent to {brand.whatsappDisplay}</p>
                    {summary.length > 1 ? (
                      <dl>{summary.map(([k, x]) => <div key={k}><dt>{k}</dt><dd>{x}</dd></div>)}</dl>
                    ) : (
                      <p className="muted">Your choices will appear here.</p>
                    )}
                  </div>
                </>
              );
            }}
          />

          <aside className="quote-aside" aria-label="How it works">
            <div className="sticky">
              <h2 className="h3">How it works</h2>
              <ol className="steps-num" data-reveal="stagger">
                <li>Choose what you need and the details you like.</li>
                <li><span>Press send. WhatsApp opens with your request to <strong>{brand.whatsappDisplay}</strong>; attach photos of your bathroom.</span></li>
                <li>We measure and send your written quotation.</li>
              </ol>
              <ul className="contact-list" style={{ marginTop: 28 }}>
                <li><a href={waHref(`Hello ${brand.name},`)} target="_blank" rel="noopener noreferrer"><Icon name="chat" /> WhatsApp {brand.whatsappDisplay}</a></li>
                <li><a href={telHref}><Icon name="phone" /> Call {brand.phone}</a></li>
              </ul>
              <p className="muted" style={{ marginTop: 20, fontSize: '0.9rem' }}>Every project is priced on a written quotation. See <Link to="/how-it-works" className="link">how it works</Link>.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
