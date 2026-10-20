import { Link } from 'react-router-dom';
import Icon from './Icon';
import Photo from './Photo';
import { Label, SectionHead } from './Blocks';
import { services, wetDry, commitments } from '../data/services';

const pad = (n) => String(n).padStart(2, '0');

// Without vs with a glass partition.
export function WetDry({ no }) {
  return (
    <section className="section on-ink" aria-labelledby="wetdry-title">
      <div className="wrap">
        <SectionHead no={no} kicker="Why it matters" title={<>The wet &amp; dry <em>divide.</em></>} id="wetdry-title" split>
          {wetDry.intro}
        </SectionHead>
        <div className="wetdry" data-reveal="stagger">
          <div className="wetdry-col">
            <p className="ref">Without a glass partition</p>
            <ul>{wetDry.without.map((t) => <li key={t}><Icon name="close" size={16} />{t}</li>)}</ul>
          </div>
          <div className="wetdry-col is-with">
            <p className="ref">With a BathCentric enclosure</p>
            <ul>{wetDry.with.map((t) => <li key={t}><Icon name="check" size={16} />{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Six quality commitments.
export function Commitments({ no, paper = false }) {
  return (
    <section className={`section ${paper ? 'section-paper' : ''}`} aria-labelledby="quality-title">
      <div className="wrap">
        <SectionHead no={no} kicker="Quality assurance" title={<>Made right, <em>made to last.</em></>} id="quality-title" split>
          Premium materials, exact measurements and careful installation, backed by a 7 year fittings warranty and a 3 year glass breakage warranty.
        </SectionHead>
        <ol className="commit-grid" data-reveal="stagger">
          {commitments.map((c, i) => (
            <li key={c.title}>
              <b>{pad(i + 1)}</b>
              <h3 className="h3">{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Three service cards.
export function ServiceCards({ no }) {
  return (
    <section className="section" aria-labelledby="services-title">
      <div className="wrap">
        <div className="head head-split">
          <div>
            <Label no={no}>Services</Label>
            <h2 className="h2" id="services-title" data-reveal="title" style={{ marginTop: 22 }}>The <em>whole</em> bathroom.</h2>
          </div>
          <Link to="/services" className="link" data-reveal="up">All services</Link>
        </div>
        <ul className="svc-cards" data-reveal="stagger">
          {services.map((s, i) => (
            <li key={s.id}>
              <Link to={`/services#${s.id}`} className="card">
                <span className="card-media wide" data-reveal="img">
                  <Photo name={s.photo} alt={s.title} sizes="(min-width: 1000px) 31vw, 100vw" fallback={<span className="ph" aria-hidden="true" />} />
                </span>
                <span className="card-body">
                  <span className="card-title">{s.title}</span>
                  <span className="card-sub">{s.kicker}</span>
                </span>
              </Link>
              <p className="muted svc-text">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Mirrors, drains and accessories teaser.
const BEYOND = [
  { to: '/bathroom-mirrors', photo: 'mirror-arch', title: 'Mirrors', sub: 'Pill · Arch · Round · Rectangular' },
  { to: '/linear-drains', photo: 'drain-tile-insert', title: 'Linear Drains', sub: 'Tile-insert · Slotted · Anti-odour trap' },
  { to: '/bathroom-accessories', photo: 'accessory-towel-bar', title: 'Accessories', sub: 'Towel bars · Hooks · Shelves · Door stops' },
];

export function Beyond({ no }) {
  return (
    <section className="section section-paper" aria-labelledby="beyond-title">
      <div className="wrap">
        <SectionHead no={no} kicker="Beyond the shower" title={<>Every detail, <em>matched.</em></>} id="beyond-title" split>
          Mirrors, linear drains and accessories in the same finishes as your enclosure fittings.
        </SectionHead>
        <ul className="svc-cards" data-reveal="stagger">
          {BEYOND.map((b) => (
            <li key={b.to}>
              <Link to={b.to} className="card">
                <span className="card-media wide" data-reveal="img">
                  <Photo name={b.photo} alt={b.title} sizes="(min-width: 1000px) 31vw, 100vw" fallback={<span className="ph" aria-hidden="true" />} />
                </span>
                <span className="card-body">
                  <span className="card-title">{b.title}</span>
                  <span className="card-sub">{b.sub}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Image + text row used on the service, mirror and drain pages (alternates sides).
export function FeatureRow({ id, photo, alt, no, kicker, title, text, children }) {
  return (
    <article className="frow" id={id}>
      <div className="figure-frame frow-media" data-reveal="img">
        <Photo name={photo} alt={alt} sizes="(min-width: 1000px) 48vw, 100vw" fallback={<span className="ph" aria-hidden="true" />} />
      </div>
      <div className="frow-body">
        <Label no={no}>{kicker}</Label>
        <h2 className="h2" data-reveal="title" style={{ margin: '20px 0 18px' }}>{title}</h2>
        {text && <p className="lead">{text}</p>}
        {children}
      </div>
    </article>
  );
}

// Icon + title + text grid.
export function FeatureGrid({ items }) {
  return (
    <ul className="feat-grid" data-reveal="stagger">
      {items.map((f) => (
        <li key={f.title}>
          <Icon name={f.icon} size={28} stroke={1.3} />
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </li>
      ))}
    </ul>
  );
}

// Two-column spec table.
export function SpecList({ rows, label }) {
  return (
    <dl className="spec-list" aria-label={label}>
      {rows.map(([k, v]) => (
        <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
      ))}
    </dl>
  );
}
