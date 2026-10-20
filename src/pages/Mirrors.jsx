import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, SectionHead, CtaBand, Faq, Figure } from '../components/Blocks';
import { FeatureGrid, SpecList } from '../components/Sections';
import { mirrors, mirrorFeatures, mirrorSpecs, serviceAnswers, mirrorFaqs } from '../data/services';

export default function Mirrors() {
  const [shape, setShape] = useState('all');
  const shown = shape === 'all' ? mirrors : mirrors.filter((m) => m.id === shape);
  return (
    <>
      <PageHeader crumbs={[['Mirrors']]} kicker="Bathroom mirrors" no="01" title={<>Mirrors, <em>made to measure</em></>} answer={serviceAnswers.mirrors} />

      <section className="section section-paper" aria-labelledby="mirror-why">
        <div className="wrap">
          <SectionHead no="02" kicker="Built for bathrooms" title={<>Clear for <em>years.</em></>} id="mirror-why" />
          <FeatureGrid items={mirrorFeatures} />
        </div>
      </section>

      <section className="section" aria-labelledby="mirror-shapes">
        <div className="wrap">
          <SectionHead no="03" kicker="Four shapes" title={<>Choose your <em>silhouette.</em></>} id="mirror-shapes" />
          <div className="seg seg-wrap" role="group" aria-label="Filter by shape">
            <button type="button" aria-pressed={shape === 'all'} onClick={() => setShape('all')}>All shapes</button>
            {mirrors.map((m) => (
              <button key={m.id} type="button" aria-pressed={shape === m.id} onClick={() => setShape(m.id)}>{m.name.replace(' Mirror', '')}</button>
            ))}
          </div>
          <ul className="addon-grid two-up" style={{ marginTop: 40 }}>
            {shown.map((m) => (
              <li className="addon-card" key={m.id}>
                <Figure reveal={false} name={`mirror-${m.id}`} alt={`${m.name} above a floating vanity`} sizes="(min-width: 900px) 46vw, 100vw" caption={<><span>{m.badge}</span><span>Made to size</span></>} />
                <h2 style={{ marginTop: 14 }}>{m.name}</h2>
                <p>{m.text}</p>
                <p className="mat-cap"><strong>Sizes:</strong> {m.sizes}</p>
                <Link to={`/quote?service=mirrors&mirror=${m.id}`} className="link" style={{ marginTop: 14 }}>Request a quote</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="mirror-spec">
        <div className="wrap two">
          <SectionHead no="04" kicker="Specification" title={<>The <em>details.</em></>} id="mirror-spec" />
          <SpecList rows={mirrorSpecs} label="Mirror specification" />
        </div>
      </section>

      <Faq items={mirrorFaqs} no="05" />
      <CtaBand title={<>A mirror for <em>your</em> vanity</>} />
    </>
  );
}
