import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Photo from '../components/Photo';
import { PageHeader, SectionHead, Label, CtaBand, Figure } from '../components/Blocks';
import { FinishShowcase } from '../components/Showcase';
import { FinishSwatch } from '../components/Swatches';
import { finishes, fittings, fittingInfo, enclosures, whyChooseUs, FINISH_TEXT } from '../data/catalog';
import { hardwareOptions } from '../data/products';

// /fittings-and-finishes: the four finishes, the ten SS 304 fittings, and seals / handles.
const usedIn = (id) => enclosures.filter((e) => e.fittings.includes(id)).map((e) => e.short).join(' · ');
const design = whyChooseUs.find((w) => w.id === 'design').points[0];

export const fittingsAnswer = 'Every BathCentric enclosure uses SS 304 grade premium stainless steel fittings with a 7 year warranty, in one of four finishes: Chrome, Rose Gold, Matte Black or Gold.';

export default function FinishesGlass() {
  return (
    <>
      <PageHeader crumbs={[['Fittings & Finishes']]} kicker="Fittings & finishes" title={<>Steel, finished <em>your</em> way</>} answer={fittingsAnswer}>
        {design}.
      </PageHeader>

      <section className="section" aria-labelledby="finish-title">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <FinishShowcase />
          <div>
            <Label>A variety of finishes</Label>
            <h2 className="h2" data-reveal="title" id="finish-title" style={{ margin: '22px 0 18px' }}>Four <em>finishes.</em></h2>
            <p className="lead">All fittings on your enclosure come in one finish, so they match your taps and accessories.</p>
            <ul className="ledger" data-reveal="stagger" style={{ marginTop: 32 }}>
              {finishes.map((f) => (
                <li key={f.id}><h3 style={{ display: 'flex', alignItems: 'center', gap: 14 }}><FinishSwatch id={f.id} size="sm" />{f.name}</h3><p>{FINISH_TEXT[f.id]}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="parts-title">
        <div className="wrap">
          <SectionHead kicker="An ensemble of fittings" title={<>The <em>components.</em></>} split id="parts-title">
            SS 304 grade premium stainless steel. Our stainless steel fittings come with a 7 year warranty. Each card shows which enclosures use it.
          </SectionHead>
          <ul className="parts-grid" data-reveal="stagger">
            {Object.keys(fittings).map((id) => (
              <li className="part" key={id}>
                <div className="figure-frame"><Photo name={`fitting-${id}`} alt={`${fittings[id]}, SS 304 shower enclosure fitting`} sizes="(min-width: 900px) 20vw, 50vw" /></div>
                <h3>{fittings[id]}</h3>
                <p>{fittingInfo[id]}</p>
                <p className="used">{usedIn(id)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="hw-title">
        <div className="wrap">
          <SectionHead kicker="Seals, channels & handles" title={<>The details that keep it <em>dry.</em></>} split id="hw-title">
            Options we fit with your enclosure, chosen at measurement, in the same finish as your fittings.
          </SectionHead>
          <ul className="hw-grid" data-reveal="stagger">
            {hardwareOptions.map((h) => (
              <li key={h.id}>
                <Figure name={h.photo} alt={h.name} sizes="(min-width: 900px) 30vw, 100vw" />
                <div className="hw-body">
                  <h3>{h.name}</h3>
                  <p>{h.text}</p>
                  <ul className="ticks">{h.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="actions" style={{ marginTop: 40 }}>
            <Link to="/shower-glass" className="link">Shower glass <Icon name="arrow" size={14} /></Link>
            <Link to="/add-ons" className="link">Add-ons <Icon name="arrow" size={14} /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
