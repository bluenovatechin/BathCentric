import { Link } from 'react-router-dom';
import { PageHeader, SectionHead, CtaBand, Faq } from '../components/Blocks';
import { FeatureGrid, FeatureRow } from '../components/Sections';
import { drains, drainFeatures, drainZoning, serviceAnswers, drainFaqs } from '../data/services';

const pad = (n) => String(n).padStart(2, '0');

export default function Drains() {
  return (
    <>
      <PageHeader crumbs={[['Linear Drains']]} kicker="Linear drains" no="01" title={<>Drainage, <em>invisible</em></>} answer={serviceAnswers.drains} />

      <section className="section section-paper" aria-labelledby="drain-why">
        <div className="wrap">
          <SectionHead no="02" kicker="Why a linear drain" title={<>Cleaner floors, <em>no pests.</em></>} id="drain-why" />
          <FeatureGrid items={drainFeatures} />
        </div>
      </section>

      <section className="section">
        <div className="wrap frows">
          {drains.map((d, i) => (
            <FeatureRow key={d.id} id={d.id} photo={d.photo} alt={d.name} no={pad(i + 3)} kicker={d.badge} title={d.name} text={d.text}>
              <ul className="ticks">{d.specs.map((s) => <li key={s}>{s}</li>)}</ul>
              <p className="mat-cap"><strong>Price:</strong> quoted to your bathroom layout and length.</p>
              <div className="actions" style={{ marginTop: 24 }}>
                <Link to={`/quote?service=drains&drain=${d.id}`} className="btn btn-ink btn-sm">Request a quote</Link>
              </div>
            </FeatureRow>
          ))}
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="drain-zoning">
        <div className="wrap">
          <SectionHead no="06" kicker="The wet & dry solution" title={<>Glass plus drain, <em>together.</em></>} id="drain-zoning" split>
            A glass partition with a linear drain along it creates a lasting, hygienic divide between the shower and the rest of the bathroom.
          </SectionHead>
          <ol className="commit-grid" data-reveal="stagger">
            {drainZoning.map(([t, d], i) => <li key={t}><b>{pad(i + 1)}</b><h3 className="h3">{t}</h3><p>{d}</p></li>)}
          </ol>
        </div>
      </section>

      <Faq items={drainFaqs} no="07" />
      <CtaBand title={<>Send us your <em>floor plan</em></>} />
    </>
  );
}
