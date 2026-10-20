// Per-page SEO metadata. Read by usePageMeta (in the browser) and by scripts/prerender.mjs
// (at build time) so every URL ships real HTML with its own title, description and schema.
import { enclosures, formatINR, START_PRICE } from '../data/catalog';

const enclosurePages = Object.fromEntries(
  enclosures.map((e) => [
    e.path,
    {
      title: `${e.name} | Price from ${formatINR(START_PRICE)}/sq ft`,
      description: `${e.summary} 8mm toughened Saint-Gobain glass, SS 304 fittings in 4 finishes. From ${formatINR(START_PRICE)}/sq ft + GST.`,
      image: e.image,
      crumbs: [['Shower Enclosures', '/shower-enclosures'], [e.shortName]],
      enclosure: e.slug,
      priority: 0.9,
    },
  ])
);

export const pages = {
  '/': {
    title: 'BathCentric | Custom Frameless Shower Enclosures & Glass Partitions',
    description: `Made-to-measure shower enclosures: single panel, swing, sliding and L-type. 8mm toughened Saint-Gobain glass, SS 304 fittings, 7-year warranty. From ${formatINR(START_PRICE)}/sq ft.`,
    image: 'images/og-image.jpg',
    priority: 1.0,
    faq: true,
  },
  '/shower-enclosures': {
    title: 'Shower Enclosures: Single Panel, Swing, Sliding & L-Type | BathCentric',
    description: 'Compare our four shower enclosure types side by side: how each opens, where it fits best, its fittings and its price per sq ft.',
    image: 'images/sliding.jpg',
    crumbs: [['Shower Enclosures']],
    priority: 0.9,
  },
  ...enclosurePages,
  '/glass': {
    title: 'Shower Glass: Clear, Frosted & Fluted 8mm Toughened Glass | BathCentric',
    description: 'Choose clear, frosted or fluted 8mm toughened Saint-Gobain glass for your shower enclosure. Tinted glass, frosting and nano coating available as add-ons.',
    image: 'images/glass-fluted.jpg',
    crumbs: [['Glass']],
    priority: 0.8,
  },
  '/fittings-finishes': {
    title: 'Shower Fittings & Finishes: Chrome, Gold, Rose Gold, Matte Black | BathCentric',
    description: 'SS 304 stainless steel hinges, support rods, connectors, sliding wheels and handles in chrome, gold, rose gold and matte black. 7-year warranty on fittings.',
    image: 'images/hardware.jpg',
    crumbs: [['Fittings & Finishes']],
    priority: 0.8,
  },
  '/pricing': {
    title: `Shower Enclosure Price List 2026: From ${formatINR(START_PRICE)}/sq ft | BathCentric`,
    description: `Shower enclosure rates per sq ft by finish (chrome ${formatINR(697)}, gold, rose gold and matte black ${formatINR(797)}) plus add-on prices for frosting, nano coating, tinted glass and granite threshold.`,
    image: 'images/og-image.jpg',
    crumbs: [['Price List']],
    priority: 0.9,
    faq: true,
  },
  '/how-it-works': {
    title: 'How It Works: Enquiry to Installation | BathCentric',
    description: 'Our five-step process: enquiry, measurement, quotation, manufacturing and installation of your custom shower enclosure.',
    image: 'images/process-installation.jpg',
    crumbs: [['How It Works']],
    priority: 0.7,
  },
  '/gallery': {
    title: 'Shower Enclosure Design Gallery | BathCentric',
    description: 'Design ideas for single panel, swing, sliding and L-type shower enclosures in clear, frosted and fluted glass with chrome, gold, rose gold and matte black fittings.',
    image: 'images/project-1.jpg',
    crumbs: [['Gallery']],
    priority: 0.7,
  },
  '/about': {
    title: 'About BathCentric | Custom Shower Enclosure Specialists',
    description: 'BathCentric designs and installs made-to-measure shower enclosures with 8mm toughened Saint-Gobain glass and SS 304 fittings.',
    image: 'images/about.jpg',
    crumbs: [['About']],
    priority: 0.6,
  },
  '/contact': {
    title: 'Contact BathCentric | Call, WhatsApp or Email',
    description: 'Talk to BathCentric about a shower enclosure for your bathroom. Call, WhatsApp, email or send us a message.',
    image: 'images/og-image.jpg',
    crumbs: [['Contact']],
    priority: 0.7,
  },
  '/quote': {
    title: 'Get a Shower Enclosure Quote | BathCentric',
    description: 'Send your bathroom details and photos to get a quote for a custom shower enclosure. Choose your enclosure type, glass, finish and add-ons.',
    image: 'images/og-image.jpg',
    crumbs: [['Get a Quote']],
    priority: 0.9,
  },
  '/privacy-policy': {
    title: 'Privacy Policy | BathCentric',
    description: 'How BathCentric collects, uses and protects the personal information you share through this website.',
    crumbs: [['Privacy Policy']],
    priority: 0.3,
  },
  '/terms': {
    title: 'Terms & Conditions | BathCentric',
    description: 'Terms for using the BathCentric website and for quotations, orders, installation and warranty.',
    crumbs: [['Terms & Conditions']],
    priority: 0.3,
  },
};

export const notFoundMeta = {
  title: 'Page Not Found | BathCentric',
  description: 'The page you are looking for does not exist. Explore our shower enclosures or get a quote.',
  noindex: true,
};

// Old URLs (and old #/ hash URLs) that should land on their new home.
export const redirects = {
  '/enclosures': '/shower-enclosures',
  '/fixed': '/single-panel-shower-enclosure',
  '/swing': '/swing-shower-enclosure',
  '/sliding': '/sliding-shower-enclosure',
  '/l-shaped': '/l-type-shower-enclosure',
  '/hardware': '/fittings-finishes',
  '/process': '/how-it-works',
  '/projects': '/gallery',
  '/mirrors': '/',
  '/drains': '/',
  '/admin': '/',
};

export const getPageMeta = (path) => pages[path] || notFoundMeta;
