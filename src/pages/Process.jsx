import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Photo from '../components/Photo';
import { PageHeader, CtaBand } from '../components/Blocks';
import { processSteps, answers } from '../data/catalog';

const ICONS = { enquiry: 'chat', measurement: 'ruler', quotation: 'doc', manufacturing: 'layers', installation: 'tools' };
const pad = (n) => String(n).padStart(2, '0');

export default function Process() {
  return (
    <>
      <PageHeader crumbs={[['Process']]} kicker="Our process" no="01" title={<>From enquiry to <em>installation</em></>} answer={answers.process} />
      <section className="section">
        <div className="wrap">
          <ol className="timeline" data-reveal="stagger">
            {processSteps.map((s, i) => (
              <li className="tl-row" key={s.id}>
                <b aria-hidden="true">{pad(i + 1)}</b>
                <div>
                  <p className="ref">Step {i + 1} of {processSteps.length}</p>
                  <h2 className="h2" data-reveal="title" style={{ margin: '12px 0 16px' }}>{s.title}</h2>
                  <p className="lead">{s.detail}</p>
                  {i === 0 && <div className="actions" style={{ marginTop: 28 }}><Link to="/quote" className="btn btn-ink btn-sm">Request a Quote</Link></div>}
                </div>
                <div className="figure-frame">
                  <Photo name={`process-${s.id}`} alt={`Step ${i + 1}: ${s.title}`} sizes="(min-width: 900px) 40vw, 100vw" fallback={<span className="step-fallback" aria-hidden="true"><Icon name={ICONS[s.id]} size={64} stroke={1} /></span>} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
