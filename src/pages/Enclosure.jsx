import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Photo from '../components/Photo';
import EnclosureDiagram from '../components/EnclosureDiagram';
import { FinishSwatch } from '../components/Swatches';
import { SectionHead, Figure, CtaBand, Faq, Label } from '../components/Blocks';
import { Anatomy, GlassAddonPicker } from '../components/Explore';
import { enclosureSpecs } from '../data/products';
import { enclosures, finishes, glasses, productFaqs, QUOTE_NOTE } from '../data/catalog';

const pad = (n) => String(n).padStart(2, '0');

export default function Enclosure({ slug }) {
  const i = enclosures.findIndex((x) => x.slug === slug);
  const e = enclosures[i];
  const ref = `BC-${pad(i + 1)}`;
  const others = enclosures.filter((x) => x.slug !== slug);
  const sp = enclosureSpecs[slug];

  return (
    <>
      <section className="product">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shower-enclosures">Collection</Link></li>
              <li><span aria-current="page">{e.short}</span></li>
            </ol>
          </nav>
          <div className="product-grid">
            <Figure name={e.image} alt={`${e.name} in 8mm toughened glass with SS 304 fittings`} sizes="(min-width: 1000px) 55vw, 100vw" priority fallback={<EnclosureDiagram enclosure={e} showNumbers={false} />} caption={<><span>Ref. {ref}</span><span>{e.operation}</span></>} />
            <div>
              <p className="ref">Ref. {ref} · {e.badge}</p>
              <h1 className="h1">{e.short} <em>Shower Enclosure</em></h1>
              <div className="answer">
                <p className="answer-h">In short</p>
                <p>{e.summary} Made to measure in 8mm toughened Saint-Gobain glass with SS 304 fittings, priced on a written quotation.</p>
              </div>
              <p className="lead" style={{ marginTop: 28 }}>{e.description}</p>
              <div className="rates">
                <p className="rates-h"><span>Fitting finishes</span><span>SS 304</span></p>
                <ul>
                  {finishes.map((f) => (
                    <li key={f.id}><span><FinishSwatch id={f.id} size="sm" />{f.name}</span></li>
                  ))}
                </ul>
                <p className="note">{QUOTE_NOTE}</p>
              </div>
              <Link to={`/quote?enclosure=${e.slug}`} className="btn btn-ink btn-block">Request a Quote <Icon name="arrow" size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <Anatomy enclosure={e} />

      <section className="section" aria-labelledby="spec-title">
        <div className="wrap two">
          <div>
            <Label no="02">Specification</Label>
            <h2 className="h2" data-reveal="title" id="spec-title" style={{ margin: '22px 0 32px' }}>Specification <em>sheet.</em></h2>
            <table className="spec" data-reveal="stagger">
              <tbody>
                <tr><th scope="row">Reference</th><td>{ref} · {e.name}</td></tr>
                <tr><th scope="row">How it opens</th><td>{e.operation}</td></tr>
                <tr><th scope="row">Glass</th><td>8mm toughened Saint-Gobain glass</td></tr>
                <tr><th scope="row">Glass types</th><td>{glasses.map((g) => g.name).join(', ')} as standard; low-iron and tinted on request</td></tr>
                <tr><th scope="row">Fittings</th><td>SS 304 grade premium stainless steel</td></tr>
                <tr><th scope="row">Finishes</th><td>{finishes.map((f) => f.name).join(', ')}</td></tr>
                <tr><th scope="row">Height</th><td>{sp.height}</td></tr>
                <tr><th scope="row">Width</th><td>{sp.width}</td></tr>
                <tr><th scope="row">Options</th><td>{sp.configurations.join(' · ')}</td></tr>
                <tr><th scope="row">Space in front</th><td>{sp.space}</td></tr>
                <tr><th scope="row">Sealing</th><td>{sp.sealing}</td></tr>
                <tr><th scope="row">Warranty</th><td>7 years on stainless steel fittings · 3 year glass breakage</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <Label no="03">Best for</Label>
            <ul className="ticks" data-reveal="stagger" style={{ marginTop: 26 }}>{e.bestFor.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="info-card">
              <h3 className="h3">What is included</h3>
              <ul className="ticks" data-reveal="stagger">
                {sp.included.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GlassAddonPicker />

      <Faq items={productFaqs(e)} no="05" title={<>The {e.short}, <em>answered.</em></>} />

      <section className="section section-sand" aria-labelledby="more-title">
        <div className="wrap">
          <SectionHead no="06" kicker="The collection" title={<>More <em>enclosures.</em></>} id="more-title" />
          <div className="addon-grid" data-reveal="stagger">
            {others.map((o) => (
              <Link key={o.slug} to={o.path} className="addon-card">
                <div className="figure-frame"><Photo name={o.image} alt="" sizes="(min-width: 900px) 33vw, 100vw" fallback={<EnclosureDiagram enclosure={o} showNumbers={false} />} /></div>
                <h2 style={{ marginTop: 14 }}>{o.short}</h2>
                <p>{o.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
