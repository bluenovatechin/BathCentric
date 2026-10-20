// Product detail carried over from the earlier BathCentric site (glass range, sizes, seals,
// bathroom sizes). Where it disagreed with Catalogue 2026 (glass thickness, warranty, brass
// hardware, test-cycle claims) the catalogue facts are used. Items marked "on request" are not in
// the catalogue's standard range. No prices: every project is quoted.

// ---------------------------------------------------------------------------
// Bathroom sizes ("Which enclosure suits your bathroom?")
// ---------------------------------------------------------------------------
export const bathroomSizes = [
  {
    id: 'compact',
    tab: 'Compact bathroom',
    sub: 'Under 45 sq ft · small ensuite',
    area: 'Under 45 sq ft, e.g. 5 × 7 ft or 4 × 8 ft',
    challenge: 'Water splashes over the WC and basin, so the whole floor stays wet and slippery.',
    pick: 'sliding',
    alt: 'single-panel',
    solution: 'A sliding enclosure, or a single fixed walk-in panel',
    points: ['The door slides, so no swing space is needed', 'The WC and vanity stay dry', 'Keeps a small room feeling open'],
    photo: 'bathroom-compact',
  },
  {
    id: 'standard',
    tab: 'Master ensuite',
    sub: '45–85 sq ft · family bathroom',
    area: '45 to 85 sq ft, e.g. 6 × 10 ft or 7 × 9 ft',
    challenge: 'The shower, vanity and WC need a clear divide without the room feeling cramped.',
    pick: 'swing',
    alt: 'single-panel',
    solution: 'A swing door with fixed glass panels',
    points: ['A hinged door that closes the shower fully', 'Magnetic seals help keep water in', 'Clear glass keeps the room bright'],
    photo: 'bathroom-standard',
  },
  {
    id: 'spacious',
    tab: 'Large or villa bathroom',
    sub: '85+ sq ft · spacious master',
    area: 'Over 85 sq ft, e.g. 8 × 12 ft or open wet rooms',
    challenge: 'A large bathroom needs a shower that matches its scale and a clearly defined, private wet area.',
    pick: 'l-type',
    alt: 'swing',
    solution: 'An L-Type corner enclosure, in clear or fluted glass',
    points: ['Glass on two sides of a corner', 'Fluted glass adds privacy', 'Pair with a linear drain for a seamless floor'],
    photo: 'bathroom-spacious',
  },
];

// ---------------------------------------------------------------------------
// Sizes, options and what is included, per enclosure
// ---------------------------------------------------------------------------
const HEIGHTS = '1950, 2000 or 2100 mm as standard, up to 2400 mm full height';
export const enclosureSpecs = {
  'single-panel': {
    height: HEIGHTS,
    width: 'One panel, 600 to 1400 mm wide',
    configurations: ['One fixed panel with an open walk-in entry'],
    space: 'Leave an open entry of about 550 to 700 mm to walk in. Nothing opens, so no space is needed in front.',
    sealing: 'Sealed to the wall and floor with mould-resistant silicone',
    included: ['Measurement of your shower area', 'Glass panel cut to size with polished edges', 'Support rod and connectors in your finish', 'Silicone sealing, installation and alignment'],
  },
  'l-type': {
    height: '1950, 2000 or 2100 mm as standard',
    width: 'Corners from 800 × 800 mm up to 1500 × 1200 mm, equal or offset',
    configurations: ['Hinged front door with a fixed panel and a 90° return panel', 'Corner entry with two sliding doors (on request)'],
    space: 'The door swings out, so leave clear space in front of the corner for it to open.',
    sealing: 'Magnetic seals at the corner and door; a bottom sweep on the door',
    included: ['Measurement and a check that the corner is square', 'Front and return panels cut to size', 'Hinges, connectors, support rod and handle in your finish', 'Seals, silicone, installation and a water test'],
  },
  sliding: {
    height: '1950, 2000 or 2100 mm as standard',
    width: '1000 to 2000 mm wide; up to 2800 mm with two sliding doors (on request)',
    configurations: ['One fixed panel and one sliding door', 'Two sliding doors for wide openings (on request)'],
    space: 'No space is needed in front: the door slides behind the fixed panel.',
    sealing: 'A magnetic closing seal and a vertical splash seal',
    included: ['Measurement of the opening and wall plumb', 'Fixed panel and sliding door cut to size', 'Top rod, sliding wheels, floor guide and handle in your finish', 'Seals, installation and door levelling'],
  },
  swing: {
    height: HEIGHTS,
    width: 'Doors 600 to 900 mm wide; up to 1800 mm with fixed side panels',
    configurations: ['Single swing door', 'Door with fixed side panels', 'Double doors (on request)'],
    space: 'The door swings open, so leave clear space in front of it, about the width of the door.',
    sealing: 'A magnetic door seal and a bottom sweep with drip edge',
    included: ['Measurement, allowing for walls that are out of plumb', 'Glass cut to size with cut-outs for hinges and handle', 'Hinges, support rod and handle in your finish', 'Seals, silicone, installation and a water test'],
  },
};

// ---------------------------------------------------------------------------
// The glass range (/shower-glass)
// ---------------------------------------------------------------------------
export const glassRange = [
  { id: 'clear', name: 'Clear Glass', photo: 'glass-room-clear', availability: 'Standard', privacy: 'Open', privacyLevel: 0, light: 4, text: 'Fully transparent toughened glass. It keeps the bathroom bright and open and shows off your tiles.', bestFor: 'Small bathrooms and showing off tiles' },
  { id: 'frosted', name: 'Frosted Glass', photo: 'glass-room-frosted', availability: 'Standard', privacy: 'Full privacy', privacyLevel: 3, light: 3, text: 'A smooth, translucent finish that lets light through but hides the view into the shower. Easy to wipe clean.', bestFor: 'Shared and family bathrooms' },
  { id: 'fluted', name: 'Fluted Glass', photo: 'glass-room-fluted', availability: 'Standard', privacy: 'Partial privacy', privacyLevel: 2, light: 3, text: 'Vertical ribs that blur what is behind them while keeping a light, textured, designer look.', bestFor: 'A designer look with some privacy' },
  { id: 'low-iron', name: 'Extra-Clear (Low-Iron) Glass', photo: 'glass-room-low-iron', availability: 'On request', privacy: 'Open', privacyLevel: 0, light: 4, text: 'Glass without the faint green edge of ordinary glass, so marble and coloured tiles look true to life.', bestFor: 'Marble, onyx and bright white bathrooms' },
  { id: 'grey', name: 'Grey Tinted Glass', photo: 'glass-room-grey', availability: 'Tinted add-on', privacy: 'Partial privacy', privacyLevel: 1, light: 2, text: 'A smoky grey tint for a bold, moody look. Pairs well with matte black fittings and dark tiles.', bestFor: 'Dark tiles and matte black fittings' },
  { id: 'bronze', name: 'Bronze Tinted Glass', photo: 'glass-room-bronze', availability: 'Tinted add-on', privacy: 'Partial privacy', privacyLevel: 1, light: 2, text: 'Warm amber tones that work beautifully with gold or rose gold fittings and warm stone tiles.', bestFor: 'Warm stone and gold or rose gold fittings' },
];

export const glassUses = [
  { icon: 'droplet', title: 'Shower enclosures', text: 'Walk-in panels, swing doors and sliding doors that keep water in while the bathroom stays open and bright.' },
  { icon: 'layers', title: 'Wet & dry dividers', text: 'Full-height glass partitions that separate the shower from the vanity, so moisture does not spread.' },
  { icon: 'lock', title: 'WC privacy screens', text: 'Fluted or frosted glass screens that give the WC privacy while still letting daylight through.' },
  { icon: 'sparkle', title: 'Shelves & mirrors', text: 'Toughened glass shelves and copper-free mirrors that match the rest of the bathroom.' },
];

export const glassSafety = [
  ['Toughened safety glass', 'Heat-treated for strength. In the rare event it breaks, it crumbles into small blunt pieces instead of sharp shards.'],
  ['Saint-Gobain, 8mm', 'Every standard panel is 8mm toughened Saint-Gobain glass, with a 3 year breakage warranty.'],
  ['Polished edges', 'Every edge is ground and polished smooth, so it is safe to touch and looks finished.'],
  ['Easy-clean option', 'Add Nanocoating and water beads up and runs off the glass, so soap scum and water marks are easier to wipe away.'],
];

export const glassFaqs = [
  { q: 'Which shower glass is best for privacy?', a: 'Frosted glass gives full privacy. Fluted glass blurs the view for partial privacy with a textured look. Grey or bronze tinted glass gives some privacy with a bolder look.' },
  { q: 'What is low-iron glass?', a: 'Extra-clear glass without the faint green tint of ordinary glass, so tiles and stone behind it look true to colour. It is available on request.' },
  { q: 'How thick is the glass?', a: 'Standard BathCentric enclosures use 8mm toughened Saint-Gobain glass, with a 3 year breakage warranty.' },
  { q: 'Is toughened glass safe?', a: 'Yes. Toughened glass is much stronger than ordinary glass, and if it ever breaks it crumbles into small blunt pieces rather than sharp shards.' },
];

// ---------------------------------------------------------------------------
// Seals, handles and water control (/fittings-and-finishes)
// ---------------------------------------------------------------------------
export const hardwareOptions = [
  { id: 'seal', photo: 'hardware-seal', name: 'Seals & water control', text: 'Clear magnetic seals where the door closes, a bottom sweep with a drip edge, and an optional low water-dam threshold keep the floor outside the shower dry.', points: ['Magnetic door seals (90° and 180°)', 'Bottom sweep with drip edge', 'Low water-dam threshold, or a Granite Threshold add-on'] },
  { id: 'wall-channel', photo: 'hardware-wall-channel', name: 'Wall channels', text: 'A slim channel along the wall as an alternative to individual connectors, which also takes up small out-of-plumb differences in the wall.', points: ['Slim visible profile', 'Absorbs uneven walls', 'Finished to match your fittings'] },
  { id: 'handles', photo: 'hardware-handles', name: 'Handle styles', text: 'Choose the handle that suits your door, all in the same finish as your other fittings.', points: ['Long pull handle that doubles as a towel rod', 'Compact D-handle', 'Round knob, ideal for sliding doors'] },
];
