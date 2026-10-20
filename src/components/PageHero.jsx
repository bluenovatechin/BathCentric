import { Link } from 'react-router-dom';

// Light page header with a breadcrumb trail. `crumbs` is [[label, href?], ...] after Home.
export default function PageHero({ crumbs = [], eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            {crumbs.map(([label, href]) => (
              <li key={label}>
                {href ? <Link to={href}>{label}</Link> : <span aria-current="page">{label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {children && <p className="page-hero-lead">{children}</p>}
      </div>
    </section>
  );
}
