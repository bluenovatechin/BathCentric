import { Link } from 'react-router-dom';
import Icon from './Icon';
import { PRODUCTS_NAV, SERVICES_NAV } from './Header';
import { asset, brand, telHref, mailHref, waHref } from '../config';
import { enclosures, tagline } from '../data/catalog';

export default function Footer() {
  const reopenCookies = () => window.dispatchEvent(new Event('bc:cookies'));
  const hasContact = brand.phone || brand.email || brand.whatsapp || brand.address;

  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <img src={asset('brand/logo-white.svg')} alt={brand.name} width="184" height="34" loading="lazy" />
          <p>{tagline}.</p>
          <Link to="/quote" className="btn btn-light btn-sm">Request a Quote <Icon name="arrow" size={14} /></Link>
        </div>
        <div>
          <h2 className="footer-h">The collection</h2>
          <ul className="footer-list">
            <li><Link to="/shower-enclosures">All shower enclosures</Link></li>
            {enclosures.map((e) => <li key={e.slug}><Link to={e.path}>{e.name}</Link></li>)}
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Products</h2>
          <ul className="footer-list">
            {PRODUCTS_NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Services</h2>
          <ul className="footer-list">
            {SERVICES_NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Contact</h2>
          {hasContact ? (
            <ul className="footer-list footer-contact">
              <li><Link to="/about">About BathCentric</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              {brand.phone && <li><a href={telHref}><Icon name="phone" size={15} /> Call {brand.phone}</a></li>}
              {brand.whatsapp && <li><a href={waHref()} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={15} /> WhatsApp {brand.whatsappDisplay}</a></li>}
              {brand.email && <li><a href={mailHref}><Icon name="mail" size={15} /> {brand.email}</a></li>}
              {brand.address && <li>{brand.address}</li>}
            </ul>
          ) : (
            <ul className="footer-list"><li><Link to="/contact">Send us a message</Link></li></ul>
          )}
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 {brand.name}. Shower enclosures and bathrooms, made to measure.</p>
        <ul className="footer-legal">
          <li><Link to="/privacy-policy">Privacy</Link></li>
          <li><Link to="/terms">Terms</Link></li>
          <li><button type="button" className="linkish" onClick={reopenCookies}>Cookie settings</button></li>
        </ul>
      </div>
    </footer>
  );
}
