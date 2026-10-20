import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Photo from './Photo';
import EnclosureDiagram from './EnclosureDiagram';
import PlanView from './PlanView';
import { Label, SectionHead } from './Blocks';
import { FinishSwatch } from './Swatches';
import {
  about, benefits, enclosures, enclosureBySlug, glasses, addOns, finishes, FINISH_TEXT, fittings, fittingInfo,
} from '../data/catalog';
import { bathroomSizes, enclosureSpecs, glassRange } from '../data/products';

// ---------------------------------------------------------------------------
// 1 · Which enclosure suits your bathroom? (by bathroom size, with a photo per size)
// ---------------------------------------------------------------------------
export function FitFinder({ paper = false }) {
  const [id, setId] = useState(bathroomSizes[0].id);
  const s = bathroomSizes.find((x) => x.id === id);
  const e = enclosureBySlug[s.pick];
  const alt = enclosureBySlug[s.alt];
  return (
    <section className={`section ${paper ? 'section-paper' : ''}`} aria-labelledby="fit-title">
      <div className="wrap">
        <SectionHead kicker="Find your fit" id="fit-title" split title={<>What size is <em>your</em> bathroom?</>}>
          From a compact apartment to a large villa bathroom, see which enclosure gives you a clean wet and dry divide.
        </SectionHead>
        <div className="fit-tabs" role="group" aria-label="Your bathroom size">
          {bathroomSizes.map((x) => (
            <button key={x.id} type="button" className={`fit-tab ${id === x.id ? 'is-on' : ''}`} aria-pressed={id === x.id} onClick={() => setId(x.id)}>
              <strong>{x.tab}</strong>
              <span>{x.sub}</span>
            </button>
          ))}
        </div>
        <div className="fit-result" aria-live="polite">
          <div className="fit-copy">
            <p className="tag">Recommended</p>
            <h3 className="h3">{s.solution}</h3>
            <p className="fit-size"><Icon name="ruler" size={16} /> <span><strong>Typical size:</strong> {s.area}</span></p>
            <div className="fit-challenge">
              <strong>The common problem</strong>
              <p>{s.challenge}</p>
            </div>
            <ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <p className="fit-also">Best match: <Link to={e.path}>{e.name}</Link> · Also suits: <Link to={alt.path}>{alt.short}</Link></p>
            <div className="actions">
              <Link to={`/quote?enclosure=${e.slug}`} className="btn btn-ink btn-sm">Get a Quote</Link>
              <Link to={e.path} className="link">View the {e.short} <Icon name="arrow" size={14} /></Link>
            </div>
          </div>
          <figure className="fit-media">
            <Photo key={s.photo} name={s.photo} alt={`${s.tab} with a ${e.short.toLowerCase()} shower enclosure`} sizes="(min-width: 1000px) 45vw, 100vw" fallback={<span className="ph" aria-hidden="true" />} />
            <figcaption>{s.tab} · {e.short}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2 · Why a shower enclosure
// ---------------------------------------------------------------------------
export function WhyCard() {
  return (
    <section className="section on-ink why" aria-labelledby="why-title">
      <div className="wrap">
        <SectionHead kicker="Why a shower enclosure" id="why-title" split title={<>Keep the wet area wet and the <em>dry area dry.</em></>}>
          {about}
        </SectionHead>
        <ul className="why-grid" data-reveal="stagger">
          {benefits.map((b) => (
            <li key={b.title}>
              <span className="why-icon" aria-hidden="true"><Icon name={b.icon} size={20} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3 · Materials: the three standard glasses + finish picker
// ---------------------------------------------------------------------------
export function MaterialsPanel() {
  const [fin, setFin] = useState(finishes[0].id);
  const f = finishes.find((x) => x.id === fin);
  const standard = glassRange.filter((g) => g.availability === 'Standard');
  return (
    <section className="section section-paper" aria-labelledby="materials-title">
      <div className="wrap">
        <SectionHead kicker="Materials" id="materials-title" split title={<>Glass and steel, <em>your</em> way.</>}>
          8mm toughened Saint-Gobain glass in three standard types, and SS 304 stainless steel fittings in four finishes.
        </SectionHead>
        <p className="sub-label">01 · Glass</p>
        <ul className="glass-cards" data-reveal="stagger">
          {standard.map((g) => (
            <li key={g.id} className="g-card">
              <div className="g-card-media"><Photo name={g.photo} alt={`Shower enclosure in ${g.name.toLowerCase()}`} sizes="(min-width: 900px) 30vw, 100vw" /></div>
              <div className="g-card-body">
                <h3>{g.name}</h3>
                <p className="g-tag">{g.privacy}</p>
                <p>{g.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="g-more">Also available: extra-clear low-iron glass on request, and grey or bronze tinted glass. <Link to="/shower-glass" className="link">All six glass types <Icon name="arrow" size={14} /></Link></p>

        <p className="sub-label" style={{ marginTop: 48 }}>02 · Fitting finish</p>
        <div className="finish-panel">
          <div className="finish-cards" role="group" aria-label="Choose a fitting finish">
            {finishes.map((x) => (
              <button key={x.id} type="button" className={`finish-card ${fin === x.id ? 'is-on' : ''}`} aria-pressed={fin === x.id} onClick={() => setFin(x.id)}>
                <FinishSwatch id={x.id} size="lg" />
                <strong>{x.name}</strong>
                <span>SS 304</span>
              </button>
            ))}
          </div>
          <div className="finish-info">
            <div className="finish-photo"><Photo key={fin} name={`finish-${fin}`} alt={`Shower door hinge in ${f.name}`} sizes="(min-width: 900px) 18vw, 40vw" fallback={<FinishSwatch id={fin} size="lg" />} /></div>
            <div>
              <h3 className="h3">{f.name}</h3>
              <p className="muted">{FINISH_TEXT[fin]} Every fitting on your enclosure comes in the same finish, with a 7 year warranty.</p>
              <div className="actions" style={{ marginTop: 18 }}>
                <Link to="/fittings-and-finishes" className="link">Fittings &amp; finishes <Icon name="arrow" size={14} /></Link>
                <Link to="/add-ons" className="link">Add-ons <Icon name="arrow" size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4 · Collection rows: image and text alternate on desktop
// ---------------------------------------------------------------------------
export function EnclosureRows() {
  return (
    <section className="section" aria-label="The four shower enclosures">
      <div className="wrap enc-rows">
        {enclosures.map((e, i) => {
          const sp = enclosureSpecs[e.slug];
          return (
            <article key={e.slug} className={`enc-row ${i % 2 ? 'is-flip' : ''}`} aria-labelledby={`enc-${e.slug}`}>
              <div className="enc-media" data-reveal="img">
                <Photo name={e.image} alt={`${e.name} with SS 304 fittings`} sizes="(min-width: 1000px) 45vw, 100vw" fallback={<EnclosureDiagram enclosure={e} showNumbers={false} />} />
              </div>
              <div className="enc-copy">
                <Label>{e.badge}</Label>
                <h2 className="h2" id={`enc-${e.slug}`} data-reveal="title">{e.name}</h2>
                <p className="lead">{e.description}</p>
                <ul className="ticks">{e.bestFor.map((b) => <li key={b}>{b}</li>)}</ul>
                <dl className="enc-facts">
                  <div><dt>Width</dt><dd>{sp.width}</dd></div>
                  <div><dt>Space in front</dt><dd>{sp.space}</dd></div>
                  <div><dt>Fittings</dt><dd>{e.fittings.map((x) => fittings[x]).join(', ')}</dd></div>
                </dl>
                <div className="actions">
                  <Link to={e.path} className="btn btn-ink btn-sm">{e.short} details</Link>
                  <Link to={`/quote?enclosure=${e.slug}`} className="link">Get a quote <Icon name="arrow" size={14} /></Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5 · Anatomy: how it works, the plan from above, and the fittings on the drawing
// ---------------------------------------------------------------------------
export function Anatomy({ enclosure: e }) {
  const [active, setActive] = useState(e.fittings[0]);
  const sp = enclosureSpecs[e.slug];
  return (
    <section className="section section-paper" aria-labelledby="parts-title">
      <div className="wrap">
        <SectionHead kicker="How it is made" id="parts-title" split title={<>Inside the <em>{e.short}</em>.</>}>
          How the {e.short} works, how it sits in your bathroom, and the SS 304 fittings that hold it together.
        </SectionHead>

        <div className="anat-top">
          <div>
            <p className="sub-label">01 · How it works</p>
            <ol className="anat-steps">{e.howItWorks.map((t) => <li key={t}>{t}</li>)}</ol>
          </div>
          <figure className="anat-plan">
            <PlanView enclosure={e} />
            <figcaption><strong>Seen from above.</strong> {sp.space}</figcaption>
          </figure>
        </div>

        <p className="sub-label" style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>02 · The fittings · tap one to see where it sits</p>
        <div className="anat">
          <div className="anat-sheet">
            <p className="tag">{e.operation}</p>
            <EnclosureDiagram enclosure={e} active={active} onPick={setActive} />
            <p className="anat-now"><b>{e.fittings.indexOf(active) + 1}</b> <span><strong>{fittings[active]}:</strong> {fittingInfo[active]}</span></p>
          </div>
          <ul className="anat-parts">
            {e.fittings.map((f, n) => (
              <li key={f}>
                <button type="button" className={active === f ? 'is-on' : ''} aria-pressed={active === f} onClick={() => setActive(f)} onMouseEnter={() => setActive(f)} onFocus={() => setActive(f)}>
                  <span className="n" aria-hidden="true">{n + 1}</span>
                  <span className="pic"><Photo name={`fitting-${f}`} alt="" sizes="56px" fallback={null} /></span>
                  <span className="txt"><strong>{fittings[f]}</strong><small>{fittingInfo[f]}</small></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6 · Glass and add-ons: two sub-sections, each with its own list and photo
// ---------------------------------------------------------------------------
function PickSub({ no, title, intro, items, value, onPick, photo, caption, alt, tagOf }) {
  return (
    <div className="pick-sub">
      <div className="pick-copy">
        <p className="sub-label">{no} · {title}</p>
        <p className="muted pick-intro">{intro}</p>
        <ul className="pick-list">
          {items.map((x) => (
            <li key={x.id}>
              <button type="button" className={value === x.id ? 'is-on' : ''} aria-pressed={value === x.id} onClick={() => onPick(x.id)}>
                <span className="pk-row"><strong>{x.name}</strong>{tagOf && <em>{tagOf(x)}</em>}</span>
                <small>{x.text}</small>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <figure className="pick-img" aria-live="polite">
        <div className="pi-frame"><Photo key={photo} name={photo} alt={alt} sizes="(min-width: 900px) 40vw, 100vw" /></div>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}

export function GlassAddonPicker() {
  const [g, setG] = useState(glasses[0].id);
  const [a, setA] = useState(addOns[0].id);
  const glass = glassRange.find((x) => x.id === g);
  const addon = addOns.find((x) => x.id === a);
  return (
    <section className="section" aria-labelledby="glass-title">
      <div className="wrap">
        <SectionHead kicker="Glass & add-ons" id="glass-title" split title={<>Clear, frosted <em>or</em> fluted.</>}>
          Pick a glass, then any finishing touches. Select an option to see it.
        </SectionHead>
        <PickSub
          no="01"
          title="Glass"
          intro="All three are 8mm toughened Saint-Gobain glass. The difference is how much they hide."
          items={glassRange.filter((x) => x.availability === 'Standard')}
          value={g}
          onPick={setG}
          photo={glass.photo}
          alt={`Shower enclosure in ${glass.name.toLowerCase()}`}
          caption={`${glass.name} · ${glass.privacy}`}
          tagOf={(x) => x.privacy}
        />
        <PickSub
          no="02"
          title="Add-ons"
          intro="Optional extras for privacy, easier cleaning and keeping water inside the shower."
          items={addOns}
          value={a}
          onPick={setA}
          photo={`addon-${addon.id}`}
          alt={`${addon.name} add-on for a glass shower enclosure`}
          caption={`${addon.name} · Add-on`}
        />
        <div className="actions" style={{ marginTop: 32 }}>
          <Link to="/shower-glass" className="link">All six glass types <Icon name="arrow" size={14} /></Link>
          <Link to="/add-ons" className="link">About the add-ons <Icon name="arrow" size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
