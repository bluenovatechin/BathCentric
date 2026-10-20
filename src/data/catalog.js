// Product data from Catalogue 2026. Pages, structured data and the quote form all read
// from here, so a price or spec change is made once.
// Prices are per square foot and exclude GST (charged at the prevailing rate on the invoice date).

export const GST_NOTE = '*Additional GST applies at the prevailing rate on the date of invoicing.';
export const PRICE_NOTE =
  'Rates are per sq ft. Your final quote depends on the measured size, configuration, glass and finish you choose.';

export const quality = [
  { icon: 'shield', title: 'SS 304 stainless steel fittings', text: 'Premium SS 304 grade stainless steel for every hinge, connector and rod.' },
  { icon: 'gem', title: 'Saint-Gobain glass', text: 'Glass sourced from Saint-Gobain for consistent clarity and quality.' },
  { icon: 'panel', title: '8mm toughened glass', text: 'Every panel is 8mm toughened safety glass, cut to your measurements.' },
];

export const warranty = {
  fittingsYears: 7,
  glassYears: 3,
  fittings: 'Our stainless steel fittings come with a 7-year warranty.',
  glass: 'Glass comes with a 3-year breakage warranty.',
};

export const finishes = [
  { id: 'chrome', name: 'Chrome', price: 697, swatch: 'chrome' },
  { id: 'gold', name: 'Gold', price: 797, swatch: 'gold' },
  { id: 'rose-gold', name: 'Rose Gold', price: 797, swatch: 'rose-gold' },
  { id: 'matte-black', name: 'Matte Black', price: 797, swatch: 'matte-black' },
];

export const START_PRICE = Math.min(...finishes.map((f) => f.price));
export const formatINR = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

export const glassTypes = [
  {
    id: 'clear',
    name: 'Clear Glass',
    image: 'images/glass-clear.jpg',
    privacy: 'Open',
    text: 'Fully transparent toughened glass. Keeps the bathroom bright and open, and shows off your tiles.',
    bestFor: 'Making a small bathroom look larger',
  },
  {
    id: 'frosted',
    name: 'Frosted Glass',
    image: 'images/glass-frosted.jpg',
    privacy: 'Full privacy',
    text: 'A soft, translucent surface that lets light through while hiding the view into the shower.',
    bestFor: 'Shared and family bathrooms',
  },
  {
    id: 'fluted',
    name: 'Fluted Glass',
    image: 'images/glass-fluted.jpg',
    privacy: 'Partial privacy',
    text: 'Vertical ribbed glass that blurs what is behind it while keeping a light, textured look.',
    bestFor: 'A designer look with some privacy',
  },
];

// The fittings named in the catalogue, with what each one does.
export const fittings = {
  'support-rod': { name: 'Support Rod', text: 'Runs from the wall to the glass to keep the panel rigid and steady.', image: 'images/hw-stabilizer-bar.jpg' },
  'rod-to-glass': { name: 'Rod-to-Glass Connector', text: 'Clamps the support rod securely to the glass panel.' },
  'wall-to-rod': { name: 'Wall-to-Rod Connector', text: 'Fixes the support rod to the wall.' },
  'l-connector': { name: 'L-Connector', text: 'Joins glass to the wall, or two panels at 90°, at a clean right angle.' },
  'u-connector': { name: 'U-Connector', text: 'Holds the glass edge to the wall or floor.' },
  'door-hinge': { name: 'Door Hinge', text: 'Lets a glass door swing open and closed smoothly.', image: 'images/hw-hinge.jpg' },
  'handle-towel-rod': { name: 'Door Handle / Towel Rod', text: 'A pull handle that doubles as a towel rod.', image: 'images/hw-towelbar.jpg' },
  'door-handle': { name: 'Door Handle', text: 'A round knob handle for the sliding door.', image: 'images/hw-handle.jpg' },
  'sliding-wheel': { name: 'Sliding Wheel', text: 'Rollers that carry the sliding door along its rail.', image: 'images/hw-sliding-track.jpg' },
  'floor-guide': { name: 'Floor Guide', text: 'Keeps the sliding door on track at the bottom.' },
};

export const enclosures = [
  {
    slug: 'single-panel',
    name: 'Single Panel Shower Enclosure',
    shortName: 'Single Panel',
    badge: 'Walk-in',
    image: 'images/fixed.jpg',
    diagram: 'images/fixed-diagram.svg',
    summary: 'One fixed glass panel that divides the wet and dry areas, with an open walk-in entry and no door.',
    description:
      'The simplest way to separate the wet and dry areas. A single fixed panel of 8mm toughened glass is held by a support rod and connectors, leaving an open, door-free entry into the shower.',
    bestFor: ['Bathrooms with room for an open walk-in entry', 'A minimal look with the least hardware', 'Easy cleaning with no door to maintain'],
    operation: 'Fixed panel, open entry (no door)',
    fittings: ['support-rod', 'rod-to-glass', 'l-connector', 'wall-to-rod', 'u-connector'],
  },
  {
    slug: 'swing',
    name: 'Swing Shower Enclosure',
    shortName: 'Swing',
    badge: 'Hinged door',
    image: 'images/swing.jpg',
    diagram: 'images/swing-diagram.svg',
    summary: 'A hinged glass door with fixed side panels that closes the shower fully.',
    description:
      'A glass door on SS 304 hinges, set between fixed glass panels and braced by a support rod. The door swings open for easy access and closes the shower completely.',
    bestFor: ['Bathrooms with space for the door to open', 'Fully enclosing the shower area', 'A classic frameless look'],
    operation: 'Hinged door that swings open',
    fittings: ['door-hinge', 'support-rod', 'wall-to-rod', 'handle-towel-rod', 'l-connector'],
  },
  {
    slug: 'sliding',
    name: 'Sliding Shower Enclosure',
    shortName: 'Sliding',
    badge: 'Space saving',
    image: 'images/sliding.jpg',
    diagram: 'images/sliding-diagram.svg',
    summary: 'A glass door that slides on wheels behind a fixed panel, so it needs no room to swing.',
    description:
      'The door glides on sliding wheels along a rail and is kept in line by a floor guide. Because nothing swings out, it suits compact bathrooms where a door would hit the basin, WC or entry door.',
    bestFor: ['Compact bathrooms', 'Layouts where a swinging door would clash with fixtures', 'Wide shower openings'],
    operation: 'Door slides along a rail',
    fittings: ['sliding-wheel', 'l-connector', 'door-handle', 'floor-guide'],
  },
  {
    slug: 'l-type',
    name: 'L-Type Shower Enclosure',
    shortName: 'L-Type',
    badge: 'Corner',
    image: 'images/l-shaped.jpg',
    diagram: 'images/l-shaped-diagram.svg',
    summary: 'Two glass sides meeting at 90° to turn a bathroom corner into a closed shower.',
    description:
      'Glass on two sides of a corner, joined at a right angle and braced by a support rod, with a door for entry. It turns an open corner into a fully enclosed shower.',
    bestFor: ['Showers in a corner of the bathroom', 'Square and rectangular layouts', 'Containing water on two open sides'],
    operation: 'Corner enclosure with an entry door',
    fittings: ['support-rod', 'wall-to-rod', 'rod-to-glass', 'handle-towel-rod', 'door-hinge', 'l-connector'],
  },
];

enclosures.forEach((e) => {
  e.path = `/${e.slug}-shower-enclosure`;
});

export const enclosureBySlug = Object.fromEntries(enclosures.map((e) => [e.slug, e]));

export const addOns = [
  { id: 'frosting', name: 'Frosting', price: 80, unit: 'sq ft', text: 'A frosted finish on the glass for privacy while still letting light through.' },
  { id: 'stickering', name: 'Stickering', price: 80, unit: 'sq ft', text: 'Decorative or privacy film applied to the glass, such as a frosted band at eye level.' },
  { id: 'nanocoating', name: 'Nano Coating', price: 60, unit: 'sq ft', text: 'A water-repellent coating that helps water run off the glass and makes cleaning easier.' },
  { id: 'tinted', name: 'Tinted Glass', price: 95, unit: 'sq ft', text: 'Tinted glass in place of clear for a warmer or moodier look.' },
  { id: 'granite-threshold', name: 'Granite Threshold', price: 3000, unit: 'bathroom', text: 'A granite strip at the shower entry that helps keep water inside the wet area.' },
];

export const benefits = [
  { icon: 'droplet', title: 'Separates wet and dry', text: 'Water stays inside the shower, so the rest of the bathroom stays dry.' },
  { icon: 'sparkle', title: 'Easier to clean', text: 'Less water on the floor and fixtures means less wiping and mopping.' },
  { icon: 'shield', title: 'More hygienic', text: 'A drier bathroom gives damp, mould and soap scum less chance to build up.' },
  { icon: 'hand', title: 'Lower risk of slipping', text: 'A dry floor outside the shower is safer for children, elders and guests.' },
];

export const processSteps = [
  { title: 'Enquiry', text: 'Send your requirements and bathroom photos through the quote form or WhatsApp.' },
  { title: 'Measurement', text: 'We take exact measurements of your shower area so every panel fits.' },
  { title: 'Quotation', text: 'You get a clear quote based on the size, enclosure type, glass, finish and any add-ons.' },
  { title: 'Manufacturing', text: 'Your 8mm toughened glass and SS 304 fittings are prepared to your measurements.' },
  { title: 'Installation', text: 'Our team installs, aligns and seals the enclosure, ready to use.' },
];

export const faqs = [
  {
    q: 'How much does a shower enclosure cost?',
    a: `BathCentric shower enclosures start at ${formatINR(697)} per sq ft in chrome and ${formatINR(797)} per sq ft in gold, rose gold or matte black. GST is extra. Your final price depends on the measured size, the enclosure type and any add-ons.`,
  },
  {
    q: 'What glass do you use?',
    a: 'We use 8mm toughened Saint-Gobain glass. You can choose clear, frosted or fluted glass, and tinted glass is available as an add-on.',
  },
  {
    q: 'What warranty do I get?',
    a: 'Stainless steel fittings carry a 7-year warranty and the glass carries a 3-year breakage warranty.',
  },
  {
    q: 'Which shower enclosure is best for a small bathroom?',
    a: 'A sliding enclosure is usually best for small bathrooms because the door slides instead of swinging out. If you have room for an open entry, a single panel enclosure is the most minimal option.',
  },
  {
    q: 'What finishes are the fittings available in?',
    a: 'All fittings are SS 304 stainless steel, available in chrome, gold, rose gold and matte black.',
  },
  {
    q: 'What add-ons can I choose?',
    a: `Frosting (${formatINR(80)}/sq ft), stickering (${formatINR(80)}/sq ft), nano coating (${formatINR(60)}/sq ft), tinted glass (${formatINR(95)}/sq ft) and a granite threshold (${formatINR(3000)} per bathroom). GST is extra.`,
  },
  {
    q: 'What is the difference between frosted and fluted glass?',
    a: 'Frosted glass has a smooth translucent surface that gives full privacy. Fluted glass has vertical ribs that blur the view for partial privacy with a textured, designer look.',
  },
  {
    q: 'Why should I install a shower enclosure?',
    a: 'A shower enclosure separates the wet and dry areas of your bathroom. Cleaning is easier, the space stays more hygienic, and a dry floor reduces the risk of slipping.',
  },
];
