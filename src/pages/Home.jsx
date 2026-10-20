import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Photo from '../components/Photo';
import { Label, Faq } from '../components/Blocks';
import { HeroSlider, Marquee, CollectionCards } from '../components/Showcase';
import { FitFinder, WhyCard, MaterialsPanel } from '../components/Explore';
import { ServiceCards, Beyond, Commitments } from '../components/Sections';
import { processSteps, homeFaqs } from '../data/catalog';
import { brand } from '../config';
import { whatsappUrl } from '../lib/whatsapp';

const pad = (n) => String(n).padStart(2, '0');

export default function Home() {
  return (
    <>
      <HeroSlider>
        <p className="stage-kicker">Shower enclosures · Made to measure</p>
        <h1 className="stage-title">Reimagine your <em>shower</em> space.</h1>
        <p className="stage-lead">8mm Saint-Gobain glass. SS 304 fittings. Four finishes. Made to measure.</p>
        <div className="actions">
          <Link to="/quote" className="btn btn-light">Request a Quote <Icon name="arrow" size={16} /></Link>
          <Link to="/shower-enclosures" className="link link-light">View the collection</Link>
        </div>
      </HeroSlider>

      {/* 01 · The standard, in numbers */}
      <section className="section-tight facts-band" aria-label="At a glance">
        <ul className="wrap facts" data-reveal="stagger">
          <li><strong><span data-count="8">8</span><small>mm</small></strong><span>Toughened Saint-Gobain glass</span></li>
          <li><strong>SS <span data-count="304">304</span></strong><span>Premium stainless steel fittings</span></li>
          <li><strong><span data-count="7">7</span><small>yrs</small></strong><span>Warranty on fittings</span></li>
          <li><strong><span data-count="3">3</span><small>yrs</small></strong><span>Glass breakage warranty</span></li>
        </ul>
      </section>

      <WhyCard />

      {/* Collection */}
      <section className="section" aria-labelledby="collection-title">
        <div className="wrap">
          <div className="head head-split">
            <div>
              <Label no="01">The collection</Label>
              <h2 className="h2" id="collection-title" data-reveal="title">Four enclosures. <em>One</em> standard.</h2>
            </div>
            <Link to="/shower-enclosures" className="link" data-reveal="up">Compare all four</Link>
          </div>
          <CollectionCards />
        </div>
      </section>

      <FitFinder paper />

      <ServiceCards no="02" />

      <MaterialsPanel />

      <Marquee items={['Single Panel', 'L-Type', 'Sliding', 'Swing', 'Saint-Gobain glass', 'SS 304 fittings', 'Chrome · Rose Gold · Matte Black · Gold']} />

      <Beyond no="05" />
      <Commitments no="06" />

      {/* Process */}
      <section className="section on-ink parallax-host" aria-labelledby="process-title">
        <div className="parallax-bg" data-parallax="0.08" aria-hidden="true"><Photo name="process-installation" alt="" sizes="100vw" fallback={null} /></div>
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="head head-split">
            <div>
              <Label no="07">The process</Label>
              <h2 className="h2" id="process-title" data-reveal="title">Five steps to <em>installation.</em></h2>
            </div>
            <Link to="/how-it-works" className="link" data-reveal="up">How it works</Link>
          </div>
          <ol className="steps" data-reveal="stagger">
            {processSteps.map((s, i) => (
              <li className="step" key={s.id}><b>{pad(i + 1)}</b><h3>{s.title}</h3><p>{s.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={homeFaqs} no="08" />

      {/* CTA */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="cta-media" data-parallax="0.06" aria-hidden="true"><Photo name="cta" alt="" sizes="100vw" fallback={null} /></div>
        <div className="wrap cta-inner on-ink">
          <Label>Private consultation</Label>
          <h2 className="display" id="cta-title" data-reveal="title">Let’s design <em>yours.</em></h2>
          <div className="actions" data-reveal="up">
            <Link to="/quote" className="btn btn-light">Request a Quote <Icon name="arrow" size={16} /></Link>
            <a href={whatsappUrl(`Hello ${brand.name}, I would like to discuss my bathroom.`)} className="link link-light" target="_blank" rel="noopener noreferrer">WhatsApp {brand.whatsappDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
