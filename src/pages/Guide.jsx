import { Link } from 'react-router-dom';
import { PageHeader, Label, CtaBand, Faq } from '../components/Blocks';
import { guide, guideFaqs, answers } from '../data/catalog';

const pad = (n) => String(n).padStart(2, '0');

export default function Guide() {
  return (
    <>
      <PageHeader crumbs={[['Buying Guide']]} kicker="Buying guide 2026" no="01" title={<>How to choose a <em>shower enclosure</em></>} answer={answers.guide} />

      <section className="section">
        <div className="wrap guide">
          <nav className="toc" aria-label="In this guide">
            <p className="label" style={{ marginBottom: 18 }}>In this guide</p>
            <ol>{guide.map((c) => <li key={c.id}><a href={`#${c.id}`}>{c.title}</a></li>)}</ol>
          </nav>
          <article>
            {guide.map((c, i) => (
              <section className="chapter" id={c.id} key={c.id} aria-labelledby={`${c.id}-h`}>
                <Label no={pad(i + 1)}>Step {i + 1}</Label>
                <h2 className="h2" data-reveal="title" id={`${c.id}-h`}>{c.title}</h2>
                <p className="lead">{c.intro}</p>
                <ul className="ledger" data-reveal="stagger">
                  {c.points.map((p) => (
                    <li key={p.label}>
                      <h3>{p.href ? <Link to={p.href}>{p.label}</Link> : p.label}</h3>
                      <span className="amt" style={{ fontSize: '1.05rem' }}>{p.value}</span>
                      <p>{p.text}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <div className="actions">
              <Link to="/quote" className="btn btn-ink">Request a Quote</Link>
              <Link to="/how-it-works" className="link">How it works</Link>
            </div>
          </article>
        </div>
      </section>

      <Faq items={guideFaqs} no="02" />
      <CtaBand />
    </>
  );
}
