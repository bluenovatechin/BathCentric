import { PageHeader, SectionHead, CtaBand } from '../components/Blocks';
import { EnclosureRows, FitFinder } from '../components/Explore';
import { enclosures, fittings, answers } from '../data/catalog';

const ROWS = [
  ['How it opens', (e) => e.operation],
  ['Best for', (e) => e.bestFor[0]],
  ['Glass', () => '8mm toughened Saint-Gobain · clear, frosted or fluted'],
  ['Fittings', (e) => e.fittings.map((f) => fittings[f]).join(', ')],
  ['Finishes', () => 'Chrome, Rose Gold, Matte Black or Gold'],
  ['Price', () => 'On quotation'],
];

export default function Collection() {
  return (
    <>
      <PageHeader crumbs={[['Shower Enclosures']]} kicker="The collection" no="01" title={<>Shower <em>enclosures</em></>} answer={answers.collection} />

      <EnclosureRows />

      <FitFinder paper />

      <section className="section on-ink" aria-labelledby="compare-title" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <SectionHead no="03" kicker="Side by side" title={<>Compare the <em>four.</em></>} id="compare-title" />
          {/* Phones: one card per enclosure; larger screens: the table */}
          <ul className="compare-cards">
            {enclosures.map((e) => (
              <li key={e.slug}>
                <h3 className="h3">{e.short}</h3>
                <dl className="spec-list">
                  {ROWS.map(([label, get]) => <div key={label}><dt>{label}</dt><dd>{get(e)}</dd></div>)}
                </dl>
              </li>
            ))}
          </ul>
          <div className="table-wrap compare-table" role="region" aria-label="Enclosure comparison" tabIndex={0} style={{ borderColor: 'var(--on-ink)' }}>
            <table className="table" style={{ color: 'var(--on-ink)' }}>
              <thead>
                <tr><th scope="col"><span className="sr-only">Feature</span></th>{enclosures.map((e) => <th scope="col" key={e.slug}>{e.short}</th>)}</tr>
              </thead>
              <tbody>
                {ROWS.map(([label, get]) => (
                  <tr key={label} style={{ borderColor: 'var(--line-ink)' }}>
                    <th scope="row" style={{ color: 'var(--on-ink-2)', borderColor: 'var(--line-ink)' }}>{label}</th>
                    {enclosures.map((e) => <td key={e.slug} style={{ borderColor: 'var(--line-ink)' }}>{get(e)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
