import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import Photo, { hasPhoto } from './Photo';
import EnclosureDiagram from './EnclosureDiagram';
import { FinishSwatch, GlassView } from './Swatches';
import { enclosures, enclosureBySlug, layouts, glasses, finishes, heroSlides, heroFallbackSlides } from '../data/catalog';

const pad = (n) => String(n).padStart(2, '0');
const DURATION = 5000;
const useIsoLayout = typeof window === 'undefined' ? useEffect : useLayoutEffect;

// ---------------------------------------------------------------------------
// Full-screen hero: photos crossfade every 5 s with a slow zoom. Pause / prev / next controls,
// pauses on hover, when the tab is hidden, and never autoplays for reduced-motion users.
// ---------------------------------------------------------------------------
export function HeroSlider({ children }) {
  const own = heroSlides.filter((s) => hasPhoto(s.photo));
  const slides = own.length ? own : heroFallbackSlides.filter((s) => hasPhoto(s.photo));
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(() => new Set([0, 1]));
  const [tick, setTick] = useState(0);
  const n = slides.length;

  const go = useCallback((i) => {
    const next = (i + n) % n;
    setMounted((m) => new Set([...m, next, (next + 1) % n]));
    setIdx(next);
  }, [n]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (n < 2 || paused || hover) return undefined;
    const t = setTimeout(() => {
      if (document.visibilityState === 'visible') go(idx + 1);
      else setTick((k) => k + 1); // tab hidden: wait another cycle
    }, DURATION);
    return () => clearTimeout(t);
  }, [idx, paused, hover, n, go, tick]);

  const cur = slides[idx];
  const enc = cur && enclosureBySlug[cur.to];

  return (
    <section className="stage" aria-roledescription="carousel" aria-label="Shower enclosures" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="stage-slides">
        {n === 0 && <div className="stage-slide is-active stage-empty" />}
        {slides.map((s, i) => (
          <div key={s.photo} className={`stage-slide ${i === idx ? 'is-active' : ''}`} aria-hidden={i !== idx} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${n}: ${s.caption}`}>
            {mounted.has(i) && <Photo name={s.photo} alt={i === idx ? `${s.caption} shower enclosure` : ''} sizes="(max-aspect-ratio: 1/1) 178vh, 100vw" priority={i === 0} />}
          </div>
        ))}
      </div>
      <div className="stage-shade" aria-hidden="true" />

      <div className="wrap stage-content">{children}</div>

      {n > 0 && (
        <div className="wrap stage-bar">
          <div className="stage-caption" aria-live={paused ? 'polite' : 'off'}>
            <span className="stage-count">{pad(idx + 1)} <i>/</i> {pad(n)}</span>
            {enc ? <Link to={enc.path}>{cur.caption}</Link> : <span>{cur.caption}</span>}
          </div>
          {n > 1 && (
            <div className="stage-controls">
              <button type="button" onClick={() => go(idx - 1)} aria-label="Previous slide"><Icon name="arrow" size={16} className="flip" /></button>
              <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>
                <Icon name={paused ? 'play' : 'pause'} size={14} />
              </button>
              <button type="button" onClick={() => go(idx + 1)} aria-label="Next slide"><Icon name="arrow" size={16} /></button>
            </div>
          )}
          <span className="stage-progress" aria-hidden="true">
            <span key={idx} className={paused || hover ? 'is-paused' : ''} style={{ animationDuration: `${DURATION}ms` }} />
          </span>
        </div>
      )}
    </section>
  );
}

export function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="marquee on-ink" aria-hidden="true">
      <div className="marquee-track">{row.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}

// Four enclosure cards (home).
export function CollectionCards() {
  return (
    <ul className="cards" data-reveal="stagger">
      {enclosures.map((e, i) => (
        <li key={e.slug}>
          <Link to={e.path} className="card">
            <span className="card-media" data-reveal="img">
              <Photo name={e.image} alt={e.name} sizes="(min-width: 1000px) 25vw, 50vw" fallback={<EnclosureDiagram enclosure={e} showNumbers={false} />} />
              <span className="card-no">{pad(i + 1)}</span>
            </span>
            <span className="card-body">
              <span className="card-title">{e.short}</span>
              <span className="card-sub">{e.badge}</span>
              <span className="card-price">View details</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Editorial numbered index with a sticky preview (collection page).
export function CollectionIndex() {
  const [on, setOn] = useState(enclosures[0].slug);
  const cur = enclosureBySlug[on];
  return (
    <div className="index">
      <ol className="index-list" data-reveal="stagger">
        {enclosures.map((e, i) => (
          <li key={e.slug} className={`index-row ${on === e.slug ? 'is-on' : ''}`} onMouseEnter={() => setOn(e.slug)} onFocus={() => setOn(e.slug)}>
            <span className="no">{pad(i + 1)}</span>
            <h3><Link to={e.path}>{e.short}</Link></h3>
            <span className="meta">{e.badge}<strong>On quotation</strong></span>
            <p>{e.summary}</p>
            <span className="index-thumb" aria-hidden="true">
              <Photo name={e.image} alt="" sizes="100vw" fallback={<EnclosureDiagram enclosure={e} showNumbers={false} />} />
            </span>
          </li>
        ))}
      </ol>
      <div className="index-preview" aria-hidden="true">
        <div className="figure-frame" key={cur.slug}>
          <Photo name={cur.image} alt="" sizes="35vw" fallback={<EnclosureDiagram enclosure={cur} showNumbers={false} />} />
        </div>
        <p className="figure-cap"><span>{cur.name}</span><span>{cur.operation}</span></p>
      </div>
    </div>
  );
}

export function Matcher() {
  const [id, setId] = useState(layouts[0].id);
  const l = layouts.find((x) => x.id === id);
  const e = enclosureBySlug[l.pick];
  return (
    <div className="matcher">
      <div className="matcher-tabs" role="group" aria-label="Your bathroom layout">
        {layouts.map((x, i) => (
          <button key={x.id} type="button" className={`matcher-tab ${id === x.id ? 'is-on' : ''}`} aria-pressed={id === x.id} onClick={() => setId(x.id)}>
            <span className="no">{pad(i + 1)}</span>
            <span><strong>{x.tab}</strong><span>{x.sub}</span></span>
            <Icon name="arrow" size={18} />
          </button>
        ))}
      </div>
      <div className="matcher-result" aria-live="polite">
        <div className="figure-frame">
          <Photo name={e.image} alt={e.name} sizes="(min-width: 1000px) 30vw, 100vw" fallback={<EnclosureDiagram enclosure={e} showNumbers={false} />} />
        </div>
        <div>
          <p className="ref">We recommend</p>
          <h3 className="h2" style={{ margin: '12px 0 16px' }}>{e.short}</h3>
          <p className="muted">{l.why}</p>
          {l.area && <p className="mat-cap"><strong>Typical size:</strong> {l.area.replace(/^Typically /, '')}</p>}
          <div className="actions" style={{ marginTop: 24 }}>
            <Link to={`/quote?enclosure=${e.slug}`} className="btn btn-ink btn-sm">Request a Quote</Link>
            <Link to={e.path} className="link">The {e.short}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Drag to compare clear glass with frosted or fluted on the same view.
export function GlassCompare() {
  const [other, setOther] = useState('fluted');
  const [split, setSplit] = useState(50);
  const otherGlass = glasses.find((g) => g.id === other);
  const layer = (g) => <Photo name={`glass-${g.id}`} alt="" sizes="(min-width: 1000px) 45vw, 100vw" fallback={<GlassView id={g.id} label={g.name} />} />;
  return (
    <div>
      <div className="seg" role="group" aria-label="Compare clear glass with">
        {glasses.filter((g) => g.id !== 'clear').map((g) => (
          <button key={g.id} type="button" aria-pressed={other === g.id} onClick={() => setOther(g.id)}>{g.name}</button>
        ))}
      </div>
      <div className="compare" style={{ '--split': `${split}%` }}>
        <div className="compare-layer">{layer(otherGlass)}</div>
        <div className="compare-layer compare-top">{layer(glasses[0])}</div>
        <input className="compare-range" type="range" min="0" max="100" value={split} onChange={(ev) => setSplit(Number(ev.target.value))} aria-label={`Drag to compare clear glass with ${otherGlass.name.toLowerCase()}`} />
        <span className="compare-handle" aria-hidden="true" />
        <span className="compare-tag l" aria-hidden="true">Clear</span>
        <span className="compare-tag r" aria-hidden="true">{otherGlass.name.replace(' Glass', '')}</span>
      </div>
    </div>
  );
}

export function FinishShowcase() {
  const [id, setId] = useState('gold');
  const f = finishes.find((x) => x.id === id);
  return (
    <div>
      <div className="finish-stage" key={f.id}>
        <Photo name={`finish-${f.id}`} alt={`${f.name} SS 304 shower door hinge`} sizes="(min-width: 1000px) 40vw, 100vw" fallback={<FinishSwatch id={f.id} size="lg" />} />
      </div>
      <div className="finish-pick" role="group" aria-label="Fitting finish">
        {finishes.map((x) => (
          <button key={x.id} type="button" aria-pressed={id === x.id} onClick={() => setId(x.id)}>
            <FinishSwatch id={x.id} size="sm" />
            {x.name}
          </button>
        ))}
      </div>
      <p className="finish-price"><span className="label">{f.name}</span><span className="muted">SS 304 · 7 year warranty</span></p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Scroll motion. Mark elements with data-reveal="up" | "title" | "img" | "stagger",
// numbers with data-count, and backgrounds with data-parallax="0.1".
// Content is fully visible without JavaScript or with reduced motion.
// ---------------------------------------------------------------------------
export function useMotion() {
  const { pathname } = useLocation();
  const raf = useRef(0);

  useIsoLayout(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      root.classList.remove('motion');
      return undefined;
    }
    // Measure everything first, then write, so the browser lays the page out only once.
    const els = [...document.querySelectorAll('main [data-reveal]')];
    const counters = [...document.querySelectorAll('main [data-count]')];
    const vh = window.innerHeight;
    const onScreen = els.map((el) => { const r = el.getBoundingClientRect(); return r.top < vh * 0.92 && r.bottom > 0; });
    const countersOnScreen = counters.map((el) => { const r = el.getBoundingClientRect(); return r.top < vh && r.bottom > 0; });
    els.forEach((el, n) => {
      if (el.dataset.reveal === 'stagger') [...el.children].forEach((c, i) => c.style.setProperty('--i', i));
      if (onScreen[n]) el.classList.add('in'); // already on screen: no flash
    });
    root.classList.add('motion');

    const countUp = (el) => {
      const to = Number(el.dataset.count);
      const start = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - start) / 1400);
        el.textContent = Math.round(to * (1 - (1 - p) ** 3));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        if (en.target.dataset.count) countUp(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    els.filter((el) => !el.classList.contains('in')).forEach((el) => io.observe(el));
    counters.forEach((el, n) => {
      if (countersOnScreen[n]) return; // on screen already: keep final value
      el.textContent = '0';
      io.observe(el);
    });

    // Gentle parallax on large screens.
    const layers = [...document.querySelectorAll('[data-parallax]')];
    const wide = window.matchMedia('(min-width: 900px)').matches;
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const h = window.innerHeight;
        const rects = layers.map((el) => el.parentElement.getBoundingClientRect());
        layers.forEach((el, n) => {
          const r = rects[n];
          if (r.bottom < 0 || r.top > h) return;
          const k = Number(el.dataset.parallax) || 0.1;
          el.style.transform = `translate3d(0, ${((r.top + r.height / 2 - h / 2) * -k).toFixed(1)}px, 0) scale(1.12)`;
        });
      });
    };
    if (wide && layers.length) {
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf.current);
      els.forEach((el) => el.classList.remove('in'));
    };
  }, [pathname]);
}
