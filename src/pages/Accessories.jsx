import { Link } from 'react-router-dom';
import { PageHeader, SectionHead, CtaBand, Figure } from '../components/Blocks';
import { FinishSwatch } from '../components/Swatches';
import { finishes } from '../data/catalog';
import { accessories, accessoriesIntro, serviceAnswers } from '../data/services';

export default function Accessories() {
  return (
    <>
      <PageHeader crumbs={[['Accessories']]} kicker="Accessories" no="01" title={<>Finished in <em>one</em> finish</>} answer={serviceAnswers.accessories}>
        {accessoriesIntro}
      </PageHeader>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <ul className="swatch-row" aria-label="Available finishes">
            {finishes.map((f) => <li key={f.id}><FinishSwatch id={f.id} size="sm" />{f.name}</li>)}
          </ul>
          <ul className="addon-grid two-up" data-reveal="stagger" style={{ marginTop: 48 }}>
            {accessories.map((a) => (
              <li className="addon-card" key={a.id}>
                <Figure name={`accessory-${a.id}`} alt={`${a.name} in a bright bathroom`} sizes="(min-width: 900px) 46vw, 100vw" caption={<><span>{a.name}</span><span>4 finishes</span></>} />
                <h2 style={{ marginTop: 14 }}>{a.name}</h2>
                <p>{a.text}</p>
                <ul className="ticks">{a.specs.map((s) => <li key={s}>{s}</li>)}</ul>
              </li>
            ))}
          </ul>
          <div className="actions" style={{ marginTop: 48 }}>
            <Link to="/quote?service=accessories" className="btn btn-ink">Request a quote</Link>
            <Link to="/fittings-and-finishes" className="link">See the finishes</Link>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="acc-more">
        <div className="wrap two">
          <SectionHead no="02" kicker="Complete the look" title={<>Mirrors &amp; <em>drains</em></>} id="acc-more" />
          <div>
            <p className="lead">Pair your accessories with a mirror made to your vanity and a linear drain in the same finish.</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link to="/bathroom-mirrors" className="btn btn-line btn-sm">Mirrors</Link>
              <Link to="/linear-drains" className="btn btn-line btn-sm">Linear drains</Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
