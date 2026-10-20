// Services, quality assurance, mirrors, linear drains and accessories, carried over from the
// previous BathCentric website. Wherever the old wording disagreed with Catalogue 2026 (glass
// thickness, warranty, finishes) the catalogue facts are used. These items are not priced in the
// catalogue, so they are quoted to your bathroom.
import { finishes } from './catalog';

const finishNames = finishes.map((f) => f.name).join(', ').replace(/, ([^,]*)$/, ' or $1');

// ---------------------------------------------------------------------------
// Services (/services)
// ---------------------------------------------------------------------------
export const services = [
  {
    id: 'design',
    photo: 'service-design',
    kicker: 'From plan to handover',
    title: 'Bathroom Design & Implementation',
    short: 'Design & implementation',
    text: 'Every home is different. We plan and build bathrooms around your space, your plumbing and the way you live, then deliver the finished room.',
    points: [
      ['Space & layout', 'Measured zones for the shower, vanity and WC, so doors and fixtures never clash.'],
      ['Budget tailoring', 'Clear choices from compact essentials to a full designer suite.'],
      ['Matching selection', 'Shower enclosure, mirrors, drains and accessories chosen together, in one finish.'],
      ['Turnkey handover', 'One team responsible from measurement to a sealed, ready-to-use bathroom.'],
    ],
  },
  {
    id: 'renovation',
    photo: 'service-renovation',
    kicker: 'Upgrade an existing bathroom',
    title: 'Bathroom Redesign & Renovation',
    short: 'Redesign & renovation',
    text: 'Slippery wet floors, stained grout, shower curtains or an outdated layout? We turn older bathrooms into calm, modern spaces with a clean wet and dry divide.',
    points: [
      ['Out with the old', 'Shower curtains, worn acrylic doors and corroded frames replaced with frameless glass.'],
      ['Wet & dry retrofit', 'Recessed linear drains and a re-sloped floor so water stays in the shower.'],
      ['New surfaces', 'Retiling and vanity updates to complete the new look.'],
      ['Tidy execution', 'Planned, dust-controlled work that keeps disruption at home to a minimum.'],
    ],
  },
  {
    id: 'maintenance',
    photo: 'service-maintenance',
    kicker: 'Protect your investment',
    title: 'Maintenance & Care',
    short: 'Maintenance & care',
    text: 'Hard water, soap film and humidity take their toll. Our care visits keep the glass clear and the hardware working like the day it was installed.',
    points: [
      ['Limescale removal', 'Gentle descaling that clears hard-water clouding from glass and fittings.'],
      ['Nanocoating refresh', 'Re-applying the water-repellent coating so water runs straight off the glass.'],
      ['Silicone resealing', 'Old sealant removed and fresh anti-fungal silicone applied.'],
      ['Hardware alignment', 'Hinges, sliding wheels and floor guides checked, tightened and realigned.'],
    ],
  },
];

// ---------------------------------------------------------------------------
// Wet & dry division (home page and /services)
// ---------------------------------------------------------------------------
export const wetDry = {
  intro: 'Without a glass partition, one shower wets the whole bathroom: the WC, the vanity and the floor. A shower enclosure solves this for good.',
  without: [
    'Wet, slippery tiles across the whole room',
    'Water splashing on the WC and vanity counter',
    'Humidity that encourages mould and soap scum',
    'Wiping and mopping after every shower',
  ],
  with: [
    'Shower spray stays inside the wet zone',
    'Vanity, mirror and WC stay dry and clean',
    'Safer for children, elders and guests',
    'A calm, hotel-like bathroom every day',
  ],
};

// ---------------------------------------------------------------------------
// Quality assurance (home page and /about)
// ---------------------------------------------------------------------------
export const commitments = [
  { title: 'Measured on site', text: 'We measure your shower area precisely and check the walls and floor, so every panel is made to fit your bathroom.' },
  { title: 'Saint-Gobain glass', text: '8mm toughened Saint-Gobain glass in clear, frosted or fluted, with a 3 year breakage warranty.' },
  { title: 'SS 304 fittings', text: `SS 304 grade premium stainless steel fittings in ${finishNames}, with a 7 year warranty.` },
  { title: 'Made to your size', text: 'Your glass is cut to your measurements and your fittings are prepared in the finish you chose.' },
  { title: 'Our own installers', text: 'Our team installs, aligns and seals your enclosure, and hands it over ready to use.' },
  { title: 'Easy-clean option', text: 'Nanocoating makes water bead up and run off the glass, so soap scum and water marks are easier to clean.' },
];

// What is checked before an enclosure is handed over.
export const qualityChecks = [
  ['Measurement', 'Wall plumb, floor slope and plumbing clearances checked before anything is made.'],
  ['Glass', '8mm toughened Saint-Gobain glass, cut to the measured size.'],
  ['Fittings', 'SS 304 fittings in one finish throughout the enclosure.'],
  ['Alignment', 'Panels set straight and level; doors swing or slide smoothly and close properly.'],
  ['Sealing', 'Joints sealed with silicone so water stays inside the shower.'],
  ['Handover', 'Area cleaned and the enclosure explained to you, ready to use.'],
];

// ---------------------------------------------------------------------------
// Mirrors (/bathroom-mirrors)
// ---------------------------------------------------------------------------
export const mirrors = [
  {
    id: 'pill',
    name: 'Pill Mirror',
    badge: 'Bestseller for vanities',
    text: 'An elongated capsule with soft rounded ends. It softens straight tile lines and sits beautifully above single and double floating vanities.',
    sizes: '450 × 900, 500 × 1000, 600 × 1200 mm or made to size',
  },
  {
    id: 'arch',
    name: 'Arch Mirror',
    badge: 'Designer statement',
    text: 'A tall architectural arch with a flat base that sits flush on a vanity backsplash or shelf, crowned by a generous curve.',
    sizes: '500 × 800, 600 × 900, 750 × 1050 mm or made to size',
  },
  {
    id: 'round',
    name: 'Round Mirror',
    badge: 'Minimal icon',
    text: 'Timeless circular geometry that brings balance to powder rooms and compact bathrooms alike.',
    sizes: '600, 750, 900 or 1050 mm diameter',
  },
  {
    id: 'rect',
    name: 'Rectangular Mirror',
    badge: 'Classic',
    text: 'A crisp rectangle that can hang in portrait or landscape, wide enough to span a double-basin vanity.',
    sizes: '600 × 800, 900 × 750, 1200 × 800, 1500 × 900 mm or made to size',
  },
];

export const mirrorFeatures = [
  { icon: 'layers', title: '5mm copper-free glass', text: 'Ordinary mirrors can develop black spots at the edges in humid bathrooms. Copper-free silvering resists moisture.' },
  { icon: 'ruler', title: 'Sized to your vanity', text: 'Made to the width of your vanity and the lines of your tiles, in a standard size or exactly to measure.' },
  { icon: 'sparkle', title: 'Polished edges', text: 'Diamond-polished edges with a safety chamfer for a clean, finished look.' },
  { icon: 'tools', title: 'Concealed mounting', text: 'A hidden wall bracket holds the mirror firmly so it appears to float on the wall.' },
];

export const mirrorSpecs = [
  ['Glass', '5mm copper-free, lead-free silver mirror glass'],
  ['Edges', 'Diamond-polished with a safety chamfer'],
  ['Shapes', 'Pill, Arch, Round and Rectangular'],
  ['Sizes', 'Standard sizes or made to your vanity'],
  ['Mounting', 'Concealed wall bracket'],
  ['Price', 'Quoted to your size and shape'],
];

// ---------------------------------------------------------------------------
// Linear drains (/linear-drains)
// ---------------------------------------------------------------------------
export const drains = [
  {
    id: 'tile-insert',
    photo: 'drain-tile-insert',
    name: 'Tile-Insert Linear Drain',
    badge: 'Most popular',
    text: 'Your floor tile is cut and set into the top of the channel, so the drain all but disappears. Water runs away through a slim gap along its edges, leaving one continuous floor.',
    specs: [
      'Lengths of 600, 750, 900 or 1200 mm, or made wall to wall',
      'SS 304 stainless steel channel',
      'Removable hair strainer for easy cleaning',
      'Suits standard floor outlets',
    ],
  },
  {
    id: 'slotted',
    photo: 'drain-slotted',
    name: 'Slotted Linear Drain',
    badge: 'Matching finishes',
    text: 'A precise slotted grate in a finish that matches your shower fittings, for a crisp architectural line across the floor.',
    specs: [
      `Grate in ${finishNames}`,
      'SS 304 stainless steel channel',
      'Handles the flow of large rain showers',
      'Adjustable feet for exact levelling while tiling',
    ],
  },
  {
    id: 'trap',
    photo: 'drain-trap',
    name: 'Anti-Cockroach & Anti-Odour Trap',
    badge: 'Pest & odour barrier',
    text: 'A gravity flap that stays sealed when the drain is dry and opens as water flows. It keeps out cockroaches, drain flies and sewer smells.',
    specs: [
      'Stops sewer smells escaping into the bathroom',
      'Seals out cockroaches, silverfish and drain flies',
      'Twists out for cleaning in seconds, no tools needed',
      'Fits BathCentric linear drain channels',
    ],
  },
];

export const drainFeatures = [
  { icon: 'layers', title: 'Almost invisible', text: 'With a tile insert, the floor tile runs right across the drain, leaving only a slim gap.' },
  { icon: 'lock', title: 'Keeps pests out', text: 'The gravity trap closes when water stops, blocking cockroaches, drain flies and odours.' },
  { icon: 'droplet', title: 'Single-slope floor', text: 'The floor slopes one way only, so large tiles stay whole with no diagonal cuts.' },
  { icon: 'quality', title: 'SS 304 stainless steel', text: 'Stands up to hard water, cleaning chemicals and daily use.' },
];

export const drainZoning = [
  ['Single slope', 'A round centre drain forces tiles to be cut on four diagonals. A linear drain lets the floor fall in one direction, so large tiles stay clean and unbroken.'],
  ['No overflow', 'Placed along the shower entry, a linear drain catches the water before it can reach the dry WC and vanity area.'],
  ['Pest-free', 'Cockroaches and drain pests enter through open floor traps. A gravity flap keeps the drain sealed day and night.'],
];

// ---------------------------------------------------------------------------
// Accessories (/bathroom-accessories)
// ---------------------------------------------------------------------------
export const accessories = [
  {
    id: 'towel-bar',
    name: 'Towel Bars',
    text: 'Single, double and combined designs, including a towel bar outside the door with a pull handle inside.',
    specs: ['450, 600 or 750 mm, or made to size', 'Glass-mounted or wall-mounted', 'Protective gaskets where it meets the glass'],
  },
  {
    id: 'hook',
    name: 'Robe & Towel Hooks',
    text: 'Minimal single and double hooks, in smooth or finely knurled styles.',
    specs: ['Wall-mounted single and double hooks', 'Over-glass hooks that need no drilling', 'Matched to your taps and fittings'],
  },
  {
    id: 'shelf',
    name: 'Glass Shelves',
    text: 'Floating toughened glass shelves that keep shampoos and soaps neatly organised.',
    specs: ['Corner or straight shelves', 'Polished edges', 'Firm wall clamps; easy to lift off and clean'],
  },
  {
    id: 'door-stop',
    name: 'Door Stops',
    text: 'Floor or wall door stops with a magnetic catch and a soft buffer, so the glass door never swings too far.',
    specs: ['Floor or wall mounted', 'Silent silicone buffer', 'Concealed fixing screws'],
  },
];

export const accessoriesIntro = `Never mix chrome with gold. Every accessory comes in ${finishNames}, the same finishes as your enclosure fittings, so the whole bathroom matches.`;

// ---------------------------------------------------------------------------
// Answer-engine summaries and FAQs for the new pages
// ---------------------------------------------------------------------------
export const serviceAnswers = {
  services: 'BathCentric offers three services beyond shower enclosures: complete bathroom design and implementation, redesign and renovation of existing bathrooms, and maintenance and care for glass and fittings.',
  mirrors: 'BathCentric bathroom mirrors come in four shapes (Pill, Arch, Round and Rectangular) in 5mm copper-free mirror glass with polished edges, in standard sizes or made to your vanity.',
  drains: 'BathCentric linear drains are SS 304 stainless steel channels with a tile insert or a slotted grate, plus an anti-cockroach and anti-odour trap, in lengths from 600 to 1200 mm or made to size.',
  accessories: `BathCentric bathroom accessories (towel bars, hooks, glass shelves and door stops) come in ${finishNames} to match your shower enclosure fittings.`,
};

export const serviceFaqs = [
  { q: 'Do you design complete bathrooms?', a: 'Yes. We plan the layout around your space, plumbing and budget, and deliver the finished bathroom, including the shower enclosure, mirrors, drains and accessories.' },
  { q: 'Can you renovate my existing bathroom?', a: 'Yes. We replace shower curtains and old doors with frameless glass, add linear drains with a re-sloped floor for a proper wet and dry divide, and update tiles and vanities.' },
  { q: 'Do you maintain shower enclosures?', a: 'Yes. Care visits include limescale removal, a nanocoating refresh, silicone resealing and checking and realigning hinges, sliding wheels and floor guides.' },
  { q: 'How do I get a quote for these services?', a: 'Use the quote form and choose the services you need. Your request opens in WhatsApp, ready to send to us with photos of your bathroom.' },
];

export const mirrorFaqs = [
  { q: 'Which mirror shapes are available?', a: 'Pill, Arch, Round and Rectangular, in standard sizes or made to your vanity.' },
  { q: 'Why copper-free mirror glass?', a: 'Ordinary mirrors can develop black spots at the edges in humid bathrooms. Copper-free silvering resists moisture, so the mirror stays clear for longer.' },
  { q: 'How much does a bathroom mirror cost?', a: 'Mirrors are quoted to your chosen shape and size. Choose Mirrors in the quote form to get a price.' },
];

export const drainFaqs = [
  { q: 'What is a tile-insert linear drain?', a: 'A stainless steel channel whose top holds a piece of your floor tile, so the drain almost disappears and only a slim gap along its edges is visible.' },
  { q: 'How does the anti-cockroach trap work?', a: 'A gravity flap stays sealed while the drain is dry and opens when water flows, blocking cockroaches, drain flies and sewer smells.' },
  { q: 'Which lengths are available?', a: '600, 750, 900 and 1200 mm, or made to the full width of your shower.' },
  { q: 'Why choose a linear drain over a round drain?', a: 'The floor slopes in one direction only, so large tiles do not need diagonal cuts, and a drain along the shower entry stops water reaching the dry area.' },
];
