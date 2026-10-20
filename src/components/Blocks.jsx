import { Link } from 'react-router-dom';
import Icon from './Icon';
import Photo from './Photo';
import { tagline } from '../data/catalog';
import { asset, brand, waHref } from '../config';

// Section label: a short line, then the text. (Callers may still pass `no`; it is not shown.)
export function Label({ children }) {
  return <p className="label">{children}</p>;
}

// Page intro with breadcrumb and an "In short" answer box (answer-engine friendly).
export function PageHeader({ crumbs = [], kicker, title, answer, children }) {
  return (
    <section className="intro">
      <span className="intro-glow" aria-hidden="true" />
      <img className="intro-mark" src={asset('brand/logo-symbol.svg')} alt="" aria-hidden="true" width="420" height="420" />
      <div className="wrap">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li><Link to="/">Home</Link></li>
            {crumbs.map(([label, href]) => (
              <li key={label}>{href ? <Link to={href}>{label}</Link> : <span aria-current="page">{label}</span>}</li>
            ))}
          </ol>
        </nav>
        {kicker && <Label>{kicker}</Label>}
        <h1 className="h1" data-reveal="title">{title}</h1>
        {children && <div className="lead intro-lead">{children}</div>}
        {answer && (
          <div className="answer" data-reveal="up">
            <p className="answer-h"><Icon name="sparkle" size={15} /> In short</p>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({ no, kicker, title, children, split = false, id }) {
  return (
    <div className={`head ${split ? 'head-split' : ''}`}>
      <div>
        {kicker && <Label no={no}>{kicker}</Label>}
        <h2 className="h2" data-reveal="title" id={id} style={{ marginTop: kicker ? 22 : 0 }}>{title}</h2>
      </div>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}

// Framed photo with drawn fallback.
// reveal={false} for figures that mount after the page has loaded (e.g. behind a filter).
export function Figure({ name, alt, sizes, priority, fallback, caption, className = '', reveal = true, children }) {
  return (
    <figure className={`figure ${className}`}>
      <div className="figure-frame" data-reveal={reveal ? 'img' : undefined}>
        <Photo name={name} alt={alt} sizes={sizes} priority={priority} fallback={fallback ?? <span className="ph" aria-hidden="true" />} />
        {children}
      </div>
      {caption && <figcaption className="figure-cap">{caption}</figcaption>}
    </figure>
  );
}

// The site's single call to action.
export function CtaBand({ title }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta-media" aria-hidden="true">
        <Photo name="cta" alt="" sizes="100vw" fallback={null} />
      </div>
      <div className="wrap cta-inner on-ink">
        <Label>Private consultation</Label>
        <h2 className="display" id="cta-title">{title || <>Reimagine your <em>shower</em> space</>}</h2>
        <div className="actions">
          <Link to="/quote" className="btn btn-light">Request a Quote <Icon name="arrow" size={16} /></Link>
          <a href={waHref(`Hello ${brand.name}, I would like to discuss my bathroom.`)} className="link" target="_blank" rel="noopener noreferrer">WhatsApp {brand.whatsappDisplay}</a>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items, title = <>Questions, <em>answered</em></>, no = '', id = 'faq-title' }) {
  return (
    <section className="section" aria-labelledby={id}>
      <div className="wrap qa">
        <div className="head">
          <Label no={no}>Good to know</Label>
          <h2 className="h2" data-reveal="title" id={id} style={{ marginTop: 22 }}>{title}</h2>
          <Link to="/buying-guide" className="link" style={{ marginTop: 12, justifySelf: 'start' }}>Read the buying guide</Link>
        </div>
        <div className="qa-list" data-reveal="stagger">
          {items.map((f) => (
            <details key={f.q} className="qa-item">
              <summary><h3>{f.q}</h3></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const TAGLINE = tagline;
