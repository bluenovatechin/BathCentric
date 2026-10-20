import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Photo from '../components/Photo';
import { PageHeader, SectionHead, CtaBand, Faq } from '../components/Blocks';
import { FeatureGrid } from '../components/Sections';
import { GlassCompare } from '../components/Showcase';
import { glassRange, glassUses, glassSafety, glassFaqs } from '../data/products';

const LEVELS = ['Open', 'Some', 'Partial', 'Full'];
const LIGHT = ['', 'Soft', 'Medium', 'High', 'Very high'];

function Meter({ label, value, text }) {
  return (
    <div className="meter">
      <span>{label}</span>
      <i aria-hidden="true">{[1, 2, 3, 4].map((n) => <b key={n} className={n <= value ? 'on' : ''} />)}</i>
      <span>{text}</span>
    </div>
  );
}

export const glassAnswer = 'BathCentric shower enclosures use 8mm toughened Saint-Gobain glass. Clear, frosted and fluted are standard; extra-clear low-iron glass is available on request, and grey or bronze tinted glass as the Tinted add-on.';

export default function ShowerGlass() {
  return (
    <>
      <PageHeader crumbs={[['Shower Glass']]} kicker="Shower glass" title={<>Choose your <em>glass</em></>} answer={glassAnswer} />

      <section className="section" aria-labelledby="range-title">
        <div className="wrap">
          <SectionHead kicker="The range" id="range-title" split title={<>Six looks, <em>one</em> standard.</>}>
            Start with how much privacy you want and how much light you want to keep. Every option is toughened safety glass, cut to your measurements.
          </SectionHead>
          <ul className="glass-range" data-reveal="stagger">
            {glassRange.map((g) => (
              <li key={g.id}>
                <div className="gr-media">
                  <Photo name={g.photo} alt={`Shower enclosure in ${g.name.toLowerCase()}`} sizes="(min-width: 1000px) 30vw, (min-width: 640px) 50vw, 100vw" />
                  <span className="tag">{g.availability}</span>
                </div>
                <div className="gr-body">
                  <h3>{g.name}</h3>
                  <p>{g.text}</p>
                  <div className="meters">
                    <Meter label="Privacy" value={g.privacyLevel + 1} text={g.privacy} />
                    <Meter label="Light" value={g.light} text={LIGHT[g.light]} />
                  </div>
                  <p className="gr-best"><strong>Best for:</strong> {g.bestFor}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="note">Privacy scale: {LEVELS.join(' · ')}. Tinted glass is the Tinted add-on; low-iron glass is on request.</p>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="compare-title">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <div>
            <SectionHead kicker="See the difference" id="compare-title" title={<>Clear against <em>frosted</em> or fluted.</>} />
            <p className="lead">Drag the handle to compare the same view through clear glass and through frosted or fluted glass.</p>
            <ul className="ticks" style={{ marginTop: 24 }}>
              <li>Clear keeps the bathroom open and bright.</li>
              <li>Frosted hides the view completely but still lets light in.</li>
              <li>Fluted blurs the view behind vertical ribs for partial privacy.</li>
            </ul>
          </div>
          <GlassCompare />
        </div>
      </section>

      <section className="section" aria-labelledby="uses-title">
        <div className="wrap">
          <SectionHead kicker="Where glass is used" id="uses-title" split title={<>More than the <em>shower.</em></>}>
            The same toughened glass can divide the whole bathroom, not just the shower.
          </SectionHead>
          <FeatureGrid items={glassUses} />
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="safety-title">
        <div className="wrap two">
          <SectionHead kicker="Safety & care" id="safety-title" title={<>Strong, safe and <em>easy to clean.</em></>} />
          <dl className="spec-list">
            {glassSafety.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="next-title">
        <div className="wrap two" style={{ alignItems: 'center' }}>
          <SectionHead kicker="Next step" id="next-title" title={<>Add the <em>finishing touches.</em></>} />
          <div>
            <p className="lead">Frosting, stickering, tinting and a water-repellent nanocoating can all be added to your glass.</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link to="/add-ons" className="btn btn-ink btn-sm">See the add-ons</Link>
              <Link to="/fittings-and-finishes" className="link">Fittings &amp; finishes <Icon name="arrow" size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <Faq items={glassFaqs} />
      <CtaBand />
    </>
  );
}
