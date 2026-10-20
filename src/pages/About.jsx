import { PageHeader, SectionHead, Figure, CtaBand, Faq, Label } from '../components/Blocks';
import { ServiceCards, Commitments } from '../components/Sections';
import { about, whyChooseUs, benefits, faqs } from '../data/catalog';
import { qualityChecks } from '../data/services';

const pad = (n) => String(n).padStart(2, '0');

export default function About() {
  return (
    <>
      <PageHeader crumbs={[['About']]} kicker="About BathCentric" no="01" title={<>Bathrooms, <em>made to measure</em></>} answer={about.split('. ').slice(0, 2).join('. ') + '.'} />

      <section className="section" aria-labelledby="story-title">
        <div className="wrap statement">
          <Figure name="about" alt="Frameless glass shower enclosure with gold fittings" sizes="(min-width: 1000px) 35vw, 100vw" caption={<><span>Wet & dry</span><span>SS 304 · Saint-Gobain</span></>} />
          <div>
            <Label no="02">New in 2026</Label>
            <h2 className="h2" id="story-title" data-reveal="title" style={{ margin: '22px 0 20px' }}>No more <em>one-size-fits-all.</em></h2>
            <p className="lead" data-reveal="up">Too often, a new shower has meant a compromise: a framed cubicle that leaks and rattles, or mismatched hardware with glass that soon stains. BathCentric is a new bathroom brand, launched in 2026 to end that compromise.</p>
            <p className="lead" data-reveal="up" style={{ marginTop: 16 }}>We measure, make and install frameless shower enclosures for homeowners, architects and interior designers, and complete the bathroom around them with matching mirrors, drains and accessories. As a new studio, every project gets our full attention, from the first message to handover.</p>
            <blockquote data-reveal="up" style={{ marginTop: 36 }}>{about}</blockquote>
            <ol className="benefits" data-reveal="stagger">
              {benefits.map((b, i) => <li key={b.title}><b>{pad(i + 1)}</b><strong>{b.title}</strong><p>{b.text}</p></li>)}
            </ol>
          </div>
        </div>
      </section>

      <ServiceCards no="03" />

      <section className="section section-paper" aria-labelledby="why-title">
        <div className="wrap">
          <SectionHead no="04" kicker="Why choose us" title={<>Design, quality <em>&amp;</em> warranty.</>} id="why-title" />
          <div className="pillars" data-reveal="stagger">
            {whyChooseUs.map((w, i) => (
              <article className="pillar" key={w.id}>
                <p className="ref">{pad(i + 1)}</p>
                <h3 className="h3">{w.title}</h3>
                <ul>{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Commitments no="05" />

      <section className="section section-paper" aria-labelledby="checks-title">
        <div className="wrap two">
          <SectionHead no="06" kicker="Quality checks" title={<>Checked before <em>handover.</em></>} id="checks-title" />
          <dl className="spec-list" data-reveal="stagger">
            {qualityChecks.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="standard-title">
        <div className="wrap">
          <SectionHead no="07" kicker="The standard" title={<>Built to <em>last.</em></>} id="standard-title" />
          <ul className="numbers" data-reveal="stagger">
            <li><strong>8<small>mm</small></strong><span>Toughened Saint-Gobain glass</span></li>
            <li><strong>304</strong><span>SS 304 grade premium stainless steel fittings</span></li>
            <li><strong>7<small>yrs</small></strong><span>Warranty on stainless steel fittings</span></li>
            <li><strong>3<small>yrs</small></strong><span>Glass breakage warranty</span></li>
          </ul>
        </div>
      </section>

      <Faq items={faqs} no="08" />
      <CtaBand />
    </>
  );
}
