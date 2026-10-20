import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { enclosures } from '../data/catalog';

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container container-narrow text-center">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1>We can&apos;t find that page</h1>
        <p className="lead-text">
          The link may be old or mistyped. Here are some good places to start.
        </p>
        <div className="btn-row center">
          <Link to="/" className="btn btn-primary">Go to the home page</Link>
          <Link to="/quote" className="btn btn-outline">Get a Quote</Link>
        </div>
        <ul className="not-found-links">
          {enclosures.map((e) => (
            <li key={e.slug}>
              <Link to={e.path} className="link-arrow">
                {e.name} <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </li>
          ))}
          <li><Link to="/pricing" className="link-arrow">Price list <Icon name="arrow" size={16} strokeWidth={2} /></Link></li>
        </ul>
      </div>
    </section>
  );
}
