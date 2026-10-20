import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { asset, brand, telHref, mailHref, waHref } from '../config';
import { enclosures } from '../data/catalog';

// Same structure as BathCentric 3.0: a dark utility strip that scrolls away, a pinned white bar with
// dropdown panels on desktop, and a slide-in drawer on mobile.

const ENCLOSURE_LINKS = [
  { to: '/shower-enclosures', icon: 'layers', title: 'All shower enclosures', desc: 'Compare all four types side by side' },
  ...enclosures.map((e) => ({
    to: e.path,
    icon: { 'single-panel': 'panel', 'l-type': 'ruler', sliding: 'layers', swing: 'door' }[e.slug],
    title: e.short,
    desc: e.summary.split(',')[0].replace(/\.$/, ''),
  })),
];

const PRODUCT_LINKS = [
  { to: '/shower-glass', icon: 'panel', title: 'Shower glass', desc: 'Clear, frosted, fluted, low-iron and tinted' },
  { to: '/fittings-and-finishes', icon: 'tools', title: 'Fittings & finishes', desc: 'SS 304 fittings, seals and four finishes' },
  { to: '/add-ons', icon: 'droplet', title: 'Add-ons', desc: 'Frosting, nanocoating, tinted and more' },
  { to: '/bathroom-mirrors', icon: 'mirror', title: 'Mirrors', desc: 'Pill, arch, round and rectangular' },
  { to: '/linear-drains', icon: 'drain', title: 'Linear drains', desc: 'Tile-insert, slotted, anti-odour' },
  { to: '/bathroom-accessories', icon: 'hook', title: 'Accessories', desc: 'Towel bars, hooks, shelves, stops' },
  { to: '/buying-guide', icon: 'doc', title: 'Buying guide', desc: 'How to choose the right enclosure' },
];

const SERVICE_LINKS = [
  { to: '/services', icon: 'design', title: 'Design & Implementation', desc: 'Complete bathrooms, planned and built' },
  { to: '/services#renovation', icon: 'tools', title: 'Redesign & Renovation', desc: 'Upgrade an existing bathroom' },
  { to: '/services#maintenance', icon: 'sparkle', title: 'Maintenance & Care', desc: 'Descaling, resealing, alignment' },
  { to: '/how-it-works', icon: 'calendar', title: 'How it works', desc: 'Enquiry to installation in 5 steps' },
];

// Footer and other lists.
export const NAV = [
  { to: '/shower-enclosures', label: 'Shower Enclosures' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];
export const PRODUCTS_NAV = PRODUCT_LINKS.map((l) => ({ to: l.to, label: l.title }));
export const MORE = PRODUCTS_NAV;
export const SERVICES_NAV = SERVICE_LINKS.map((l) => ({ to: l.to, label: l.title }));

const pathOf = (to) => to.split('#')[0];
const isUnder = (pathname, links) =>
  links.some((l) => pathname === pathOf(l.to)) || (links === ENCLOSURE_LINKS && pathname.endsWith('-shower-enclosure'));
const navClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;

function MegaMenu({ id, label, links, footer, onPick }) {
  return (
    <div className="mega" id={id}>
      <ul className="mega-grid" aria-label={label}>
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="mega-item" onClick={onPick}>
              <span className="mega-icon" aria-hidden="true"><Icon name={l.icon} size={20} /></span>
              <span className="mega-text">
                <span className="mega-title">{l.title}</span>
                <span className="mega-desc">{l.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/quote" className="mega-footer" onClick={onPick}>
        <span>{footer}</span>
        <Icon name="arrow" size={16} stroke={2} />
      </Link>
    </div>
  );
}

// The panel opens on hover or keyboard focus. After a click it stays closed until the pointer
// leaves, and focus is released so it cannot stay open behind the new page.
function Dropdown({ to, label, links, footer, id, pathname }) {
  const [closed, setClosed] = useState(false);
  const pick = () => {
    setClosed(true);
    document.activeElement?.blur();
  };
  return (
    <div className={`nav-item ${closed ? 'is-closed' : ''}`} onMouseLeave={() => setClosed(false)}>
      <NavLink to={to} className={() => `nav-link ${isUnder(pathname, links) ? 'active' : ''}`} onClick={pick}>
        {label}
        <Icon name="chevron" size={14} stroke={2.2} className="nav-chevron" />
      </NavLink>
      <MegaMenu id={id} label={label} links={links} footer={footer} onPick={pick} />
    </div>
  );
}

const GROUPS = [
  { label: 'Shower enclosures', links: ENCLOSURE_LINKS },
  { label: 'Products', links: PRODUCT_LINKS },
  { label: 'Services', links: SERVICE_LINKS },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const inNav = () => document.activeElement?.closest?.('.nav-desktop');
    const onDown = (e) => { if (inNav() && !e.target.closest('.nav-desktop')) document.activeElement.blur(); };
    const onKey = (e) => { if (e.key === 'Escape' && inNav()) document.activeElement.blur(); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return undefined;
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1180 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="topbar">
          <div className="topbar-inner">
            <div className="topbar-group">
              <a href={telHref}><Icon name="phone" size={14} /> {brand.phone}</a>
              {brand.email && <a href={mailHref} className="topbar-email"><Icon name="mail" size={14} /> {brand.email}</a>}
            </div>
            <div className="topbar-group">
              <span className="topbar-note">8mm Saint-Gobain glass · SS 304 fittings · 7-year warranty</span>
              <a href={waHref('Hello BathCentric, I would like to know more about your shower enclosures.')} target="_blank" rel="noopener noreferrer" className="topbar-cta">
                <Icon name="chat" size={14} /> WhatsApp {brand.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="header-bar">
          <div className="header-inner">
            <Link to="/" className="brand-logo" aria-label={`${brand.name} home`}>
              <img src={asset('brand/logo.svg')} alt={brand.name} width="164" height="30" />
            </Link>

            <nav className="nav-desktop" aria-label="Main" onClick={(e) => e.target.closest('a') && document.activeElement?.blur()}>
              <NavLink to="/" className={navClass} end>Home</NavLink>
              <Dropdown to="/shower-enclosures" label="Shower Enclosures" links={ENCLOSURE_LINKS} id="mega-enclosures" footer="Not sure which fits? Get a quotation and we will advise" pathname={pathname} />
              <Dropdown to="/shower-glass" label="Products" links={PRODUCT_LINKS} id="mega-products" footer="Every project is priced on a written quotation" pathname={pathname} />
              <Dropdown to="/services" label="Services" links={SERVICE_LINKS} id="mega-services" footer="Plan your whole bathroom with us" pathname={pathname} />
              <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
              <NavLink to="/about" className={navClass}>About</NavLink>
              <NavLink to="/contact" className={navClass}>Contact</NavLink>
            </nav>

            <div className="header-actions">
              <Link to="/quote" className="btn btn-accent btn-sm header-quote">
                <span>Get a Quote</span>
                <Icon name="arrow" size={16} stroke={2} />
              </Link>
              <button
                ref={toggleRef}
                type="button"
                className={`nav-toggle-btn ${open ? 'active' : ''}`}
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-overlay ${open ? 'open' : ''}`} onClick={close} aria-hidden="true" />
      <div id="mobile-nav" className={`mobile-nav-drawer ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" inert={open ? undefined : ''}>
        <div className="mobile-nav-head">
          <Link to="/" className="brand-logo" onClick={() => setOpen(false)}>
            <img src={asset('brand/logo.svg')} alt={`${brand.name} home`} width="150" height="28" />
          </Link>
          <button ref={closeRef} type="button" className="mobile-nav-close" onClick={close} aria-label="Close menu">
            <Icon name="close" size={20} stroke={2} />
          </button>
        </div>

        <nav aria-label="Mobile">
          <Link to="/" className="mobile-nav-link" onClick={() => setOpen(false)}>Home</Link>
          {GROUPS.map((g) => (
            <div key={g.label}>
              <p className="mobile-nav-group">{g.label}</p>
              <ul className="mobile-nav-sublist">
                {g.links.map((l) => <li key={l.to}><Link to={l.to} className="mobile-nav-sublink" onClick={() => setOpen(false)}>{l.title}</Link></li>)}
              </ul>
            </div>
          ))}
          <Link to="/gallery" className="mobile-nav-link" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <div className="mobile-nav-cta">
          <Link to="/quote" className="btn btn-accent" onClick={() => setOpen(false)}>Get a Quote</Link>
          <a href={waHref('Hello BathCentric,')} className="btn btn-outline" target="_blank" rel="noopener noreferrer"><Icon name="chat" size={16} /> WhatsApp {brand.whatsappDisplay}</a>
          <a href={telHref} className="btn btn-outline"><Icon name="phone" size={16} /> Call {brand.phone}</a>
        </div>
      </div>
    </>
  );
}
