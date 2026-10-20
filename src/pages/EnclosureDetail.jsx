import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Img from '../components/Img';
import CtaBanner from '../components/CtaBanner';
import FinishSelector from '../components/FinishSelector';
import NotFound from './NotFound';
import { asset, whatsappLink } from '../config/site';
import {
  enclosureBySlug, enclosures, fittings, glassTypes, addOns, warranty, formatINR, GST_NOTE, PRICE_NOTE,
} from '../data/catalog';

export default function EnclosureDetail({ slug }) {
  const e = enclosureBySlug[slug];
  if (!e) return <NotFound />;
  const others = enclosures.filter((o) => o.slug !== slug);

  return (
    <>
      <div className="crumb-bar">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shower-enclosures">Shower Enclosures</Link></li>
              <li><span aria-current="page">{e.shortName}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section section-top">
        <div className="container">
          <div className="product-hero-grid">
            <div className="product-gallery">
              <div className="product-main-image">
                <Img src={e.image} alt={`${e.name} with 8mm toughened glass and SS 304 fittings`} sizes="(min-width: 992px) 55vw, 100vw" priority />
              </div>
              <figure className="product-schematic-box">
                <figcaption className="product-schematic-title">Layout diagram</figcaption>
                <img src={asset(e.diagram)} alt={`Plan view of a ${e.shortName.toLowerCase()} shower enclosure`} width="600" height="300" loading="lazy" />
              </figure>
            </div>

            <div className="product-details">
              <p className="eyebrow">{e.badge}</p>
              <h1>{e.name}</h1>
              <p className="lead-text">{e.description}</p>

              <div className="product-price-box">
                <p className="price-title">Price per sq ft</p>
                <p className="price-amount">
                  {formatINR(697)} <span className="price-unit">chrome</span>
                </p>
                <p className="price-sub">{formatINR(797)} in gold, rose gold or matte black</p>
                <p className="price-disclaimer">{PRICE_NOTE} {GST_NOTE}</p>
              </div>

              <div className="btn-row">
                <Link to={`/quote?type=${e.slug}`} className="btn btn-accent btn-lg">Get a Quote</Link>
                <a href={whatsappLink(`I would like a quote for a ${e.name}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" data-track={`product-${e.slug}`}>
                  <Icon name="chat" size={18} /> WhatsApp us
                </a>
              </div>

              <h2 className="h3-like">Best for</h2>
              <ul className="check-list compact">
                {e.bestFor.map((b) => (
                  <li key={b}><span className="check-list-icon" aria-hidden="true"><Icon name="check" size={14} strokeWidth={2.4} /></span>{b}</li>
                ))}
              </ul>

              <FinishSelector />

              <h2 className="h3-like">Specifications</h2>
              <table className="specs-table">
                <tbody>
                  <tr><th scope="row">How it opens</th><td>{e.operation}</td></tr>
                  <tr><th scope="row">Glass</th><td>8mm toughened Saint-Gobain glass</td></tr>
                  <tr><th scope="row">Glass types</th><td>{glassTypes.map((g) => g.name).join(', ')} (tinted available as an add-on)</td></tr>
                  <tr><th scope="row">Fittings</th><td>SS 304 stainless steel</td></tr>
                  <tr><th scope="row">Finishes</th><td>Chrome, Gold, Rose Gold, Matte Black</td></tr>
                  <tr><th scope="row">Size</th><td>Made to your measured shower area</td></tr>
                  <tr><th scope="row">Warranty</th><td>{warranty.fittingsYears} years on fittings, {warranty.glassYears} years glass breakage</td></tr>
                </tbody>
              </table>

              <h2 className="h3-like">Fittings included</h2>
              <ul className="fitting-list">
                {e.fittings.map((id) => (
                  <li key={id}>
                    <strong>{fittings[id].name}</strong>
                    <span>{fittings[id].text}</span>
                  </li>
                ))}
              </ul>

              <div className="included-box">
                <h2 className="h3-like">What is included</h2>
                <ul>
                  <li>Measurement of your shower area</li>
                  <li>8mm toughened glass cut to your measurements</li>
                  <li>All SS 304 fittings listed above in your chosen finish</li>
                  <li>Installation, alignment and sealing by our team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="addons-title">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Optional</p>
            <h2 id="addons-title">Add-ons for this enclosure</h2>
          </div>
          <ul className="addon-grid">
            {addOns.map((a) => (
              <li className="addon-card" key={a.id}>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
                <p className="addon-price">{formatINR(a.price)}<span>/{a.unit}*</span></p>
              </li>
            ))}
          </ul>
          <p className="fine-print">{GST_NOTE}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="other-title">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Compare</p>
            <h2 id="other-title">Other enclosure types</h2>
          </div>
          <div className="grid-3">
            {others.map((o) => (
              <Link to={o.path} className="mini-card" key={o.slug}>
                <Img src={o.image} alt="" sizes="(min-width: 992px) 33vw, (min-width: 640px) 50vw, 100vw" />
                <span className="mini-card-body">
                  <strong>{o.name}</strong>
                  <span>{o.summary}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={`Get a quote for a ${e.shortName.toLowerCase()} enclosure`} quoteHref={`/quote?type=${e.slug}`} whatsappMessage={`I would like a quote for a ${e.name}.`} />
    </>
  );
}
