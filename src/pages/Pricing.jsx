import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Faq from '../components/Faq';
import CtaBanner from '../components/CtaBanner';
import { finishes, addOns, enclosures, formatINR, GST_NOTE, PRICE_NOTE, START_PRICE } from '../data/catalog';

export default function Pricing() {
  return (
    <>
      <PageHero crumbs={[['Price List']]} eyebrow="Price list 2026" title="Shower enclosure prices">
        Simple per-square-foot rates. Shower enclosures start at {formatINR(START_PRICE)}/sq ft in chrome. GST is
        extra.
      </PageHero>

      <section className="section" aria-labelledby="rates-title">
        <div className="container container-mid">
          <div className="section-header">
            <p className="eyebrow">Enclosure rates</p>
            <h2 id="rates-title">Price by fitting finish</h2>
            <p>
              These rates apply to single panel, swing, sliding and L-type enclosures in 8mm toughened Saint-Gobain glass
              with SS 304 fittings.
            </p>
          </div>
          <div className="table-scroll" role="region" aria-label="Price per sq ft by finish" tabIndex={0}>
            <table className="specs-table price-table">
              <thead>
                <tr><th scope="col">Finish</th><th scope="col">Price per sq ft*</th></tr>
              </thead>
              <tbody>
                {finishes.map((f) => (
                  <tr key={f.id}>
                    <th scope="row"><span className={`finish-dot ${f.swatch}`} aria-hidden="true" />{f.name}</th>
                    <td><strong>{formatINR(f.price)}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine-print-left">{PRICE_NOTE} {GST_NOTE}</p>

          <div className="section-header mt-xl">
            <p className="eyebrow">Add-ons</p>
            <h2 id="addon-rates-title">Add-on prices</h2>
          </div>
          <div className="table-scroll" role="region" aria-label="Add-on prices" tabIndex={0}>
            <table className="specs-table price-table">
              <thead>
                <tr><th scope="col">Add-on</th><th scope="col">What it is</th><th scope="col">Price*</th></tr>
              </thead>
              <tbody>
                {addOns.map((a) => (
                  <tr key={a.id}>
                    <th scope="row">{a.name}</th>
                    <td>{a.text}</td>
                    <td><strong>{formatINR(a.price)}</strong> per {a.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine-print-left">{GST_NOTE}</p>

          <div className="info-box mt-xl">
            <h2 className="h3-like">How your quote is worked out</h2>
            <ol className="numbered-list">
              <li>We measure your shower area.</li>
              <li>The area in sq ft is multiplied by the rate for your chosen finish.</li>
              <li>Any add-ons you pick are added at the rates above.</li>
              <li>GST is added at the prevailing rate on the date of invoicing.</li>
            </ol>
            <p>
              Enclosure type, glass type and the layout of your bathroom can also affect the final figure, so we always
              confirm the price in a written quote before work starts.
            </p>
            <div className="btn-row">
              <Link to="/quote" className="btn btn-accent">Get a Quote</Link>
              <Link to="/shower-enclosures" className="link-arrow">Compare {enclosures.length} enclosure types</Link>
            </div>
          </div>
        </div>
      </section>

      <Faq title="Pricing and product questions" />
      <CtaBanner />
    </>
  );
}
