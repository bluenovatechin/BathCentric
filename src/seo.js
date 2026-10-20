// Titles, descriptions and schema.org data for every page. Used at build time (prerender writes
// them into each HTML file) and in the browser (updated on client-side navigation).
import { brand, SITE_URL, absUrl, integrations } from './config';
import { enclosures, finishes, glasses, faqs, homeFaqs, productFaqs, guideFaqs, processSteps, tagline } from './data/catalog';
import { services, serviceFaqs, mirrorFaqs, drainFaqs } from './data/services';
import { glassFaqs } from './data/products';
import photos from './generated/images.json';

const finishList = finishes.map((f) => f.name).join(', ');
const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const pages = {
  '/': {
    title: 'BathCentric | Made-to-Measure Shower Enclosures',
    description: 'Made-to-measure Single Panel, L-Type, Sliding and Swing shower enclosures in 8mm Saint-Gobain glass with SS 304 fittings. Get a free quotation on WhatsApp.',
    faqItems: homeFaqs,
  },
  '/shower-enclosures': {
    title: 'Shower Enclosures: Single Panel, L-Type, Sliding, Swing',
    description: 'Compare the four BathCentric shower enclosures, their SS 304 fittings and which bathroom each suits. Made to measure in 8mm Saint-Gobain glass.',
    crumbs: [['Shower Enclosures']],
    itemList: true,
  },
  ...Object.fromEntries(
    enclosures.map((e) => [
      e.path,
      {
        title: `${e.name} | BathCentric`,
        description: `Made-to-measure ${e.short} shower enclosure in 8mm toughened Saint-Gobain glass with SS 304 fittings in four finishes. 7 year fittings warranty.`,
        crumbs: [['Collection', '/shower-enclosures'], [e.short]],
        enclosure: e,
        faqItems: productFaqs(e),
      },
    ])
  ),
  '/shower-glass': {
    title: 'Shower Glass Types: Clear, Frosted, Fluted | BathCentric',
    description: 'Compare clear, frosted, fluted, low-iron, grey and bronze shower glass by privacy and light. 8mm toughened Saint-Gobain glass, 3 year breakage warranty.',
    crumbs: [['Shower Glass']],
    faqItems: glassFaqs,
  },
  '/fittings-and-finishes': {
    title: 'Shower Fittings & Finishes: SS 304 | BathCentric',
    description: 'SS 304 shower enclosure fittings in Chrome, Rose Gold, Matte Black and Gold with a 7 year warranty, plus seals, wall channels and handle styles.',
    crumbs: [['Fittings & Finishes']],
  },
  '/add-ons': {
    title: 'Shower Glass Add-ons: Nanocoating, Frosting & More',
    description: 'Add-ons for your BathCentric shower enclosure: Stickering, water-repellent Nanocoating, Tinted glass, Frosting and a Granite Threshold at the entry.',
    crumbs: [['Add-ons']],
  },
  '/services': {
    title: 'Bathroom Design, Renovation & Care | BathCentric',
    description: 'Complete bathroom design and implementation, redesign and renovation with a proper wet and dry divide, and maintenance and care for glass and fittings.',
    crumbs: [['Services']],
    faqItems: serviceFaqs,
    service: true,
  },
  '/bathroom-mirrors': {
    title: 'Bathroom Mirrors: Pill, Arch, Round | BathCentric',
    description: 'Bathroom mirrors in 5mm copper-free mirror glass with polished edges and concealed mounting, in standard sizes or made to your vanity.',
    crumbs: [['Mirrors']],
    faqItems: mirrorFaqs,
  },
  '/linear-drains': {
    title: 'Linear Shower Drains & Odour Traps | BathCentric',
    description: 'SS 304 linear shower drains with a tile insert or slotted grate and an anti-cockroach, anti-odour trap. 600 to 1200 mm long or made to size.',
    crumbs: [['Linear Drains']],
    faqItems: drainFaqs,
  },
  '/bathroom-accessories': {
    title: 'Bathroom Accessories in Matching Finishes | BathCentric',
    description: `Towel bars, robe hooks, glass shelves and door stops in ${finishList}, to match your shower enclosure fittings.`,
    crumbs: [['Accessories']],
  },
  '/about': {
    title: 'About BathCentric | New Bathroom Brand, Est. 2026',
    description: 'BathCentric is a new bathroom brand, launched in 2026: made-to-measure shower enclosures, quality checks before handover, and a 7 year fittings warranty.',
    crumbs: [['About']],
    faqItems: faqs,
  },
  '/how-it-works': {
    title: 'How It Works: Enquiry to Installation | BathCentric',
    description: 'How a BathCentric shower enclosure is made: enquiry, on-site measurement, written quotation, manufacturing to size and installation by our team.',
    crumbs: [['Process']],
    howTo: true,
  },
  '/buying-guide': {
    title: 'How to Choose a Shower Enclosure (2026 Guide)',
    description: 'Choose the right shower enclosure in four steps: the type for your layout, clear, frosted or fluted glass, the fitting finish, and useful add-ons.',
    crumbs: [['Buying Guide']],
    article: true,
    faqItems: guideFaqs,
  },
  '/gallery': {
    title: 'Shower Enclosure Gallery | BathCentric',
    description: 'Single Panel, L-Type, Sliding and Swing shower enclosures in clear, frosted and fluted glass with chrome, rose gold, matte black and gold fittings.',
    crumbs: [['Gallery']],
  },
  '/contact': {
    title: 'Contact BathCentric | Shower Enclosures',
    description: `Contact BathCentric on WhatsApp or phone ${brand.whatsappDisplay} about shower enclosures, bathroom design, mirrors, drains and accessories.`,
    crumbs: [['Contact']],
  },
  '/quote': {
    title: 'Get a Free Quotation | BathCentric',
    description: `Choose your enclosure, glass, finish, add-ons, mirrors, drains, accessories or services. Your request opens in WhatsApp to ${brand.whatsappDisplay}.`,
    crumbs: [['Get a Quote']],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | BathCentric',
    description: 'How BathCentric collects, uses and protects the information you share on this website.',
    crumbs: [['Privacy Policy']],
  },
  '/terms': {
    title: 'Terms & Conditions | BathCentric',
    description: 'Terms for using the BathCentric website, and how quotations, measurements, manufacturing and installation work when you order from us.',
    crumbs: [['Terms & Conditions']],
  },
};

export const notFound = {
  title: 'Page Not Found | BathCentric',
  description: 'This page does not exist. Explore BathCentric shower enclosures or get a quote.',
  noindex: true,
};

export const metaFor = (path) => pages[path] || notFound;

function schema(path, meta) {
  const org = `${SITE_URL}/#organization`;
  const url = absUrl(path);
  const graph = [
    {
      '@type': 'Organization',
      '@id': org,
      name: brand.name,
      url: `${SITE_URL}/`,
      logo: absUrl('/brand/logo-512.png'),
      slogan: tagline,
      description: 'BathCentric is a bathroom brand launched in 2026 that designs, makes and installs made-to-measure frameless shower enclosures, and offers bathroom design, renovation, mirrors, linear drains, accessories and maintenance.',
      foundingDate: '2026',
      areaServed: { '@type': 'Country', name: 'India' },
      knowsAbout: ['Shower enclosures', 'Frameless glass shower doors', 'Toughened glass', 'Bathroom design', 'Bathroom renovation', 'Linear shower drains', 'Bathroom mirrors', 'Wet and dry bathroom zoning'],
      ...(brand.phone ? { telephone: brand.phone } : {}),
      ...(brand.whatsapp ? { contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', telephone: brand.whatsappDisplay, availableLanguage: ['en', 'hi'] } } : {}),
      ...(brand.email ? { email: brand.email } : {}),
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: brand.name, publisher: { '@id': org }, inLanguage: 'en-IN' },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': org },
      inLanguage: 'en-IN',
      dateModified: BUILD_DATE,
      // Tells voice assistants which text answers the page: the heading and the "In short" summary.
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.answer'] },
    },
  ];
  if (meta.crumbs) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [['Home', '/'], ...meta.crumbs].map(([name, href], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: absUrl(href || path),
      })),
    });
  }
  if (meta.enclosure) {
    const e = meta.enclosure;
    graph.push({
      '@type': 'Product',
      name: e.name,
      ...(photos[e.image] ? { image: absUrl(`/img/${e.image}.jpg`) } : {}),
      category: 'Shower Enclosures',
      brand: { '@type': 'Brand', name: brand.name },
      description: meta.description,
      material: 'SS 304 grade stainless steel fittings, 8mm toughened Saint-Gobain glass',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Glass', value: glasses.map((g) => g.name).join(', ') },
        { '@type': 'PropertyValue', name: 'Finishes', value: finishList },
        { '@type': 'PropertyValue', name: 'Fittings warranty', value: '7 years' },
        { '@type': 'PropertyValue', name: 'Glass breakage warranty', value: '3 years' },
      ]
    });
  }
  if (meta.service) {
    graph.push(
      ...services.map((sv) => ({ '@type': 'Service', name: sv.title, description: sv.text, provider: { '@id': org }, url: `${url}#${sv.id}` }))
    );
  }
  if (meta.faqItems) {
    graph.push({ '@type': 'FAQPage', mainEntity: meta.faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
  }
  if (meta.itemList) {
    graph.push({
      '@type': 'ItemList',
      name: 'BathCentric shower enclosures',
      itemListElement: enclosures.map((e, i) => ({ '@type': 'ListItem', position: i + 1, name: e.name, url: absUrl(e.path) })),
    });
  }
  if (meta.howTo) {
    graph.push({
      '@type': 'HowTo',
      name: 'How a BathCentric shower enclosure is made and installed',
      step: processSteps.map((st, i) => ({ '@type': 'HowToStep', position: i + 1, name: st.title, text: st.detail })),
    });
  }
  if (meta.article) {
    graph.push({
      '@type': 'Article',
      headline: meta.title,
      description: meta.description,
      author: { '@id': org },
      publisher: { '@id': org },
      datePublished: '2026-10-19',
      dateModified: BUILD_DATE,
      mainEntityOfPage: url,
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

function tags(path, meta) {
  const canonical = absUrl(path);
  const image = absUrl('/brand/og-image.jpg');
  return {
    title: meta.title,
    canonical,
    metas: [
      ['name', 'description', meta.description],
      ['name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'],
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', brand.name],
      ['property', 'og:locale', 'en_IN'],
      ['property', 'og:title', meta.title],
      ['property', 'og:description', meta.description],
      ['property', 'og:url', canonical],
      ['property', 'og:image', image],
      ['property', 'og:image:width', '1200'],
      ['property', 'og:image:height', '630'],
      ['property', 'og:image:alt', `${brand.name}: ${tagline}`],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', meta.title],
      ['name', 'twitter:description', meta.description],
      ['name', 'twitter:image', image],
    ],
    schema: meta.noindex ? null : schema(path, meta),
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function headHtml(path, meta) {
  const t = tags(path, meta);
  return [
    `<title>${esc(t.title)}</title>`,
    ...t.metas.map(([a, k, v]) => `<meta ${a}="${k}" content="${esc(v)}" data-seo>`),
    meta.noindex ? '' : `<link rel="canonical" href="${esc(t.canonical)}" data-seo>`,
    integrations.googleVerification ? `<meta name="google-site-verification" content="${esc(integrations.googleVerification)}">` : '',
    t.schema ? `<script type="application/ld+json" data-seo>${JSON.stringify(t.schema).replace(/</g, '\\u003c')}</script>` : '',
  ]
    .filter(Boolean)
    .join('\n    ');
}

export function applyHead(path, meta) {
  const t = tags(path, meta);
  document.title = t.title;
  document.head.querySelectorAll('[data-seo]').forEach((n) => n.remove());
  const add = (el) => {
    el.setAttribute('data-seo', '');
    document.head.appendChild(el);
  };
  t.metas.forEach(([a, k, v]) => {
    const m = document.createElement('meta');
    m.setAttribute(a, k);
    m.setAttribute('content', v);
    add(m);
  });
  if (!meta.noindex) {
    const l = document.createElement('link');
    l.rel = 'canonical';
    l.href = t.canonical;
    add(l);
  }
  if (t.schema) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(t.schema);
    add(s);
  }
}
