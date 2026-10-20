import { Link } from 'react-router-dom';
import { PageHeader, Figure, CtaBand } from '../components/Blocks';
import { addOns, answers, QUOTE_NOTE } from '../data/catalog';

export default function AddOns() {
  return (
    <>
      <PageHeader crumbs={[['Add-ons']]} kicker="Add ons" no="01" title={<>Finishing <em>touches</em></>} answer={answers.addons} />
      <section className="section">
        <div className="wrap">
          <ul className="addon-grid" data-reveal="stagger">
            {addOns.map((a, i) => (
              <li className="addon-card" key={a.id}>
                <Figure name={`addon-${a.id}`} alt={`${a.name} add-on for a glass shower enclosure`} sizes="(min-width: 900px) 33vw, 100vw" caption={<><span>No. {String(i + 1).padStart(2, '0')}</span><span>Add-on</span></>} />
                <h2 style={{ marginTop: 14 }}>{a.name}</h2>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
          <p className="note">{QUOTE_NOTE} Choose add-ons in the <Link to="/quote" className="link">quote form</Link>.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
