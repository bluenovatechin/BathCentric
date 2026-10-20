import { faqs } from '../data/catalog';

// Native <details> accordion: keyboard accessible, and every answer is in the HTML for crawlers.
export default function Faq({ items = faqs, title = 'Frequently asked questions', intro }) {
  return (
    <section className="section section-white" aria-labelledby="faq-title">
      <div className="container container-narrow">
        <div className="section-header text-center">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="section-title">{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <div className="faq-list">
          {items.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                <h3 className="faq-q">{f.q}</h3>
              </summary>
              <p className="faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
