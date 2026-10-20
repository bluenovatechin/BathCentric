import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import FloatingContact from './components/FloatingContact';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Enclosure from './pages/Enclosure';
import FinishesGlass from './pages/FinishesGlass';
import AddOns from './pages/AddOns';
import About from './pages/About';
import Quote from './pages/Quote';
import Process from './pages/Process';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import ShowerGlass from './pages/ShowerGlass';
import Services from './pages/Services';
import Mirrors from './pages/Mirrors';
import Drains from './pages/Drains';
import Accessories from './pages/Accessories';
import { useMotion } from './components/Showcase';
import { Privacy, Terms, NotFound } from './pages/Legal';
import { enclosures } from './data/catalog';
import { metaFor, applyHead } from './seo';
import { pageView, trackContactClicks } from './lib/analytics';

function useRouteChange() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    applyHead(path, metaFor(path));
    pageView();
  }, [pathname]);
  // Jump to #section links (e.g. /services#renovation), otherwise start at the top.
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  useEffect(() => trackContactClicks(), []);
}

export default function App() {
  useRouteChange();
  useMotion();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shower-enclosures" element={<Collection />} />
          {enclosures.map((e) => <Route key={e.slug} path={e.path} element={<Enclosure slug={e.slug} />} />)}
          <Route path="/fittings-and-finishes" element={<FinishesGlass />} />
          <Route path="/shower-glass" element={<ShowerGlass />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<Process />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buying-guide" element={<Guide />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bathroom-mirrors" element={<Mirrors />} />
          <Route path="/linear-drains" element={<Drains />} />
          <Route path="/bathroom-accessories" element={<Accessories />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
      <CookieBanner />
    </>
  );
}
