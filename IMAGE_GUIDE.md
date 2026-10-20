# BathCentric image guide

Everything you need to generate the website's images and put them in the right place.

---

## 1. How to add an image (2 minutes)

1. Generate the image using the prompt for its slot (section 5).
2. Save it with the **exact file name** from the table, e.g. `hero-1.jpg` (`.jpg`, `.png` or `.webp` all work).
3. Put it in the **`photos/`** folder of the project (replace the old file if one exists).
4. Run `npm run dev` (to preview) or `npm run build`. The site compresses it automatically into fast WebP sizes.
5. Check the page. If the subject is cut off, add a focus point (section 6).

You do not need to resize or compress anything yourself. Bigger is fine.

---

## 2. Look & feel for every image

| | |
|---|---|
| **Mood** | Quiet luxury: bright, airy, calm, architectural. Like a high-end interiors magazine. |
| **Light** | Soft natural daylight from a window, gentle shadows, no harsh flash, no HDR. |
| **Palette** | White and warm porcelain walls (#F6F4F0), light stone or pale grey large-format tiles, brushed metal, crystal-clear glass with a faint blue edge. One deep navy (#0E1F2E) accent at most, e.g. a folded towel. |
| **Camera** | Full-frame, 24–35mm lens, eye level, straight vertical lines (no tilt), sharp focus on the glass and fittings. |
| **Fittings** | Must match the catalogue (see section 4). Same finish on every fitting in one picture. |
| **Never** | People, faces, hands, text, logos, watermarks or generator marks (✦), brand names, clutter, bathtubs, shower curtains, framed aluminium cubicles. |

### Style block: paste this at the start of every prompt
```
Photorealistic architectural interior photograph for a luxury bathroom brand, bright minimal bathroom,
warm white walls and large-format light stone porcelain tiles, soft natural daylight from a window,
frameless 8mm toughened clear glass with a faint blue edge tint, precise stainless steel fittings,
calm uncluttered styling, straight vertical lines, full-frame camera 28mm lens, eye level,
true-to-life colours, high-end interior design magazine quality
```

### Negative prompt: use on every image
```
people, person, face, hands, text, letters, numbers, logo, watermark, signature, sparkle icon, brand name,
bathtub, shower curtain, framed aluminium shower cabin, plastic, clutter, too many toiletries,
warped or melting glass, impossible reflections, floating parts, duplicated fittings, fisheye, tilted
horizon, dutch angle, HDR, oversaturated, cartoon, CGI look, low resolution, blurry
```

---

## 3. Every image slot at a glance

| File name | Where it appears | Shape | Minimum size | Keep the subject… |
|---|---|---|---|---|
| `hero-1` … `hero-5` | Home page full-screen slider (changes every 5 s) | **16:9 landscape** | 2560 × 1440 | in the **centre 40%** of the width; keep the **lower-left** calm (text sits there) |
| `enclosure-single-panel`, `enclosure-l-type`, `enclosure-sliding`, `enclosure-swing` | Cards, product pages, collection, "find your fit" | **4:5 portrait** | 1600 × 2000 | centred, with space around it |
| `glass-clear`, `glass-frosted`, `glass-fluted` | Glass comparison slider | **4:5 portrait** | 1400 × 1750 | identical framing in all three |
| `finish-chrome`, `finish-rose-gold`, `finish-matte-black`, `finish-gold` | Finish selector | **1:1 square** | 1600 × 1600 | identical framing in all four |
| `fitting-…` (10 files, section 5.6) | Product page anatomy + Materials page | **1:1 square** | 1000 × 1000 | centred on white |
| `addon-stickering`, `addon-nanocoating`, `addon-tinted`, `addon-frosting`, `addon-granite-threshold` | Add-ons page | **4:3 landscape** | 1600 × 1200 | centred |
| `process-enquiry`, `process-measurement`, `process-quotation`, `process-manufacturing`, `process-installation` | Process page (+ installation as a faint background on Home) | **4:3 landscape** | 1600 × 1200 | centred |
| `service-design`, `service-renovation`, `service-maintenance` | Services page + Home + About | **3:2 or 16:9 landscape** | 1800 × 1200 | centred |
| `mirror-pill`, `mirror-arch`, `mirror-round`, `mirror-rect` | Mirrors page | **3:2 or 16:9 landscape** | 1800 × 1200 | mirror in the centre |
| `drain-tile-insert`, `drain-slotted`, `drain-trap` | Linear Drains page | **3:2 or 16:9 landscape** | 1800 × 1200 | centred |
| `accessory-towel-bar`, `accessory-hook`, `accessory-shelf`, `accessory-door-stop` | Accessories page | **3:2 or 16:9 landscape** | 1800 × 1200 | centred |
| `about` | About page | **4:5 portrait** | 1600 × 2000 | centred |
| `cta` | "Let's design yours" banner (under a dark overlay) | **21:9 or 16:9** | 2560 × 1100 | on the **right third** |
| `gallery-…`, `project-1` … `project-12` | Gallery | **4:5 portrait** preferred | 1600 × 2000 | centred |

Images that already exist and are fine to keep: the four `finish-…`, ten `fitting-…`, three `glass-…` and five `addon-…` photos.

**✦ mark:** the build removes the generator's ✦ mark automatically by trimming a 190px strip (bottom edge on
portrait/square images, right edge on landscape ones). Keep important details away from that edge.
Real photos named `project-…` are never trimmed.

---

## 4. Fittings must match the catalogue

| Enclosure | Fittings that must be visible |
|---|---|
| **Single Panel** | Support rod · rod to glass connector · L-connector · wall to rod connector · U-connector |
| **L-Type** | Support rod · wall to rod connector · rod to glass connector · door handle / towel rod · L-connector · door hinge |
| **Sliding** | Sliding wheels · L-connector · round knob door handle · floor guide |
| **Swing** | Door hinges · support rod · wall to rod connector · door handle / towel rod · L-connector |

Finishes available: **Chrome · Rose Gold · Matte Black · Gold**. Glass: **Clear · Frosted · Fluted** (Tinted as an add-on).

---

## 5. Prompts for every image

Start each prompt with the **style block** and add the **negative prompt**. Set the aspect ratio in your tool
(e.g. `--ar 16:9` in Midjourney, or choose the size in ChatGPT / Gemini / Firefly).

### 5.1 Home slider: `hero-1` … `hero-5` (16:9)
Five different bathrooms so the slider feels varied. Composition for all five: enclosure in the **centre**, the
**lower-left quarter quiet and slightly darker** (the headline sits there), nothing important at the very edges
(phones show only the centre).

| File | Prompt (after the style block) |
|---|---|
| `hero-1` | `Wide view of a serene master bathroom with a frameless swing shower enclosure in clear glass, chrome door hinges and a chrome door handle that doubles as a towel rod, chrome support rod to the wall, rainfall shower head, pale stone walls, morning light from a tall window on the right, polished dry floor in front.` |
| `hero-2` | `Wide view of a modern bathroom with a sliding shower enclosure in fluted glass, matte black sliding wheels on a slim top rod, matte black round knob handle, matte black floor guide, warm grey large-format tiles, soft daylight, a folded navy towel on a floating vanity.` |
| `hero-3` | `Wide view of a luxurious corner shower: L-type frameless enclosure in clear glass meeting at 90 degrees, gold L-connector, gold door hinges and gold door handle / towel rod, gold support rod, warm white marble-look walls, golden-hour light.` |
| `hero-4` | `Wide view of a minimal walk-in shower: one single fixed clear glass panel with an open entry, chrome support rod from the top of the glass to the side wall, chrome U-connector at the floor, white stone walls, large window, very calm and airy.` |
| `hero-5` | `Wide view of an elegant bathroom with a swing shower enclosure in softly frosted glass, rose gold door hinges and rose gold handle / towel rod, blush-white stone walls, soft diffused light.` |

**Captions:** each slide shows a small caption (e.g. "Swing · Clear glass · Chrome"). If your image differs,
edit `heroSlides` in `src/data/catalog.js`.

### 5.2 Enclosures (4:5 portrait)
Same bathroom style for all four, enclosure centred, a little floor and ceiling visible.

| File | Prompt |
|---|---|
| `enclosure-single-panel` | `Single panel shower enclosure: one fixed clear glass panel from the back wall with an open walk-in entry, chrome support rod from the glass top to the side wall with rod to glass and wall to rod connectors, small chrome L-connectors on the wall, chrome U-connector at the floor.` |
| `enclosure-l-type` | `L-type corner shower enclosure: two clear glass sides meeting at 90 degrees in a corner, matte black L-connector at the corner, a hinged glass door with matte black door hinges and matte black door handle / towel rod, matte black support rod.` |
| `enclosure-sliding` | `Sliding shower enclosure across an alcove: a fixed clear glass panel and a sliding clear glass door hanging on two round chrome sliding wheels on a top rod, chrome round knob handle, chrome floor guide, chrome L-connectors to the wall.` |
| `enclosure-swing` | `Swing shower enclosure: a hinged clear glass door between fixed glass panels, gold door hinges, gold door handle that doubles as a towel rod, gold support rod to the back wall, door slightly open.` |

### 5.3 Glass (4:5 portrait), identical framing
`A small green potted plant in a terracotta pot on a white floating shelf, photographed straight on through a glass shower panel, white tiles behind.` Then add:
- `glass-clear`: `through clear glass, the plant is perfectly sharp.`
- `glass-frosted`: `through frosted glass, the plant is a soft even blur.`
- `glass-fluted`: `through vertical fluted (reeded) glass, the plant is broken into narrow vertical ribs.`

### 5.4 Finishes (1:1 square), identical framing
`Studio product photograph of a square glass-to-wall shower door hinge clamping clear 8mm glass, on a seamless warm white background, soft shadow, 3/4 view, centred.` Then add the finish:
`finish-chrome` polished chrome · `finish-rose-gold` rose gold · `finish-matte-black` matte black · `finish-gold` polished gold.

### 5.5 Add-ons (4:3)
| File | Prompt |
|---|---|
| `addon-stickering` | `Clear glass shower panel with an elegant frosted decorative band at eye level.` |
| `addon-nanocoating` | `Macro of clear glass with water forming perfect round droplets that run off.` |
| `addon-tinted` | `Shower enclosure in grey tinted glass in a bright white bathroom.` |
| `addon-frosting` | `Shower enclosure in fully frosted glass, soft and translucent.` |
| `addon-granite-threshold` | `Low close view of a polished dark granite threshold strip at the entry of a glass shower.` |

### 5.6 Fittings (1:1 square), studio, chrome, identical lighting
`Studio product photograph of a single stainless steel shower enclosure fitting in polished chrome, seamless white background, soft shadow, centred, 3/4 view:` then add one of
`fitting-support-rod` slim round support rod · `fitting-rod-to-glass` rod to glass connector clamp · `fitting-wall-to-rod` round wall plate connector for a rod · `fitting-l-connector` square 90° glass clamp · `fitting-u-connector` U-shaped glass clamp · `fitting-door-hinge` square glass-to-wall door hinge · `fitting-handle-towel-rod` long pull handle that doubles as a towel rod · `fitting-door-handle` round knob handle · `fitting-sliding-wheel` round sliding wheel with glass bracket · `fitting-floor-guide` small floor guide block.

### 5.7 Process (4:3), no faces
| File | Prompt |
|---|---|
| `process-enquiry` | `Over-the-shoulder view of someone holding a phone showing a photo of their bathroom, bright room, no face.` |
| `process-measurement` | `Hands holding a laser distance meter against the tiled wall of a shower area.` |
| `process-quotation` | `Elegant desk with a printed quotation (no readable text), small clear, frosted and fluted glass samples and four metal finish swatches.` |
| `process-manufacturing` | `Large sheet of clear toughened glass on a clean cutting table in a bright workshop, worker seen from behind with gloves.` |
| `process-installation` | `Two installers seen from behind fitting a clear glass shower panel with suction lifters, plain grey uniforms.` |

### 5.8 Studio and banner
- `about` (4:5): `Close view of a finished frameless shower: inside, water droplets on glass and tiles; outside, a perfectly dry floor and vanity with a folded navy towel.`
- `cta` (21:9): `Very wide, calm view of a white bathroom at dusk with a frameless glass shower enclosure on the right third, large plain wall on the left two thirds.`

### 5.9 Gallery
Use **real photos of completed BathCentric projects** (`project-1.jpg` …). Write a caption for each in
`src/data/catalog.js` → `gallery` (e.g. "Sliding · Fluted · Matte Black · Ahmedabad").

---

## 6. If a photo is cropped badly

Add a focus point in `src/data/catalog.js` → `photoFocus`, e.g.
```js
'hero-2': '60% 50%',   // first number moves left/right, second up/down
```
`50% 50%` is the centre. Higher first number shows more of the right side.
