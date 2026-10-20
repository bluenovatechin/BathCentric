import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { PageHeader, CtaBand, Faq } from '../components/Blocks';
import { FeatureRow, WetDry } from '../components/Sections';
import { brand } from '../config';
import { whatsappUrl } from '../lib/whatsapp';
import { services, serviceAnswers, serviceFaqs } from '../data/services';

const pad = (n) => String(n).padStart(2, '0');

export default function Services() {
  return (
    <>
      <PageHeader crumbs={[['Services']]} kicker="Services" no="01" title={<>The whole bathroom, <em>handled</em></>} answer={serviceAnswers.services} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap frows">
          {services.map((s, i) => (
            <FeatureRow key={s.id} id={s.id} photo={s.photo} alt={s.title} no={pad(i + 1)} kicker={s.kicker} title={s.title} text={s.text}>
              <dl className="point-grid">
                {s.points.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
              </dl>
              <div className="actions" style={{ marginTop: 28 }}>
                <Link to={`/quote?service=${s.id}`} className="btn btn-ink btn-sm">Request {s.short}</Link>
                <a href={whatsappUrl(`Hello ${brand.name}, I would like to know more about ${s.title.toLowerCase()}.`)} className="link" target="_blank" rel="noopener noreferrer">
                  <Icon name="chat" size={16} /> WhatsApp {brand.whatsappDisplay}
                </a>
              </div>
            </FeatureRow>
          ))}
        </div>
      </section>

      <WetDry no="02" />
      <Faq items={serviceFaqs} no="03" />
      <CtaBand />
    </>
  );
}
