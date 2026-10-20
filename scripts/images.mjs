// Runs before `dev` and `build`.
// 1. Photos: every image in photos/ (jpg/png/webp, named as in IMAGE_PROMPTS.md) becomes
//    public/img/<name>-<w>.webp at several widths + a compressed public/img/<name>.jpg fallback,
//    and src/generated/images.json records sizes so <Photo> can set srcset/width/height.
// 2. Brand: favicon PNG, apple-touch / app icons, a raster logo for structured data and the
//    1200x630 social preview image, all from the logo SVGs in public/brand.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'photos');
const outDir = path.join(root, 'public', 'img');
const brandDir = path.join(root, 'public', 'brand');
const manifestFile = path.join(root, 'src', 'generated', 'images.json');
const WIDTHS = [480, 800, 1200, 1800];

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.dirname(manifestFile), { recursive: true });

// Each output records the size + modified time of its source, so replacing a photo always regenerates
// it (even if the new file carries an older date), and outputs of deleted photos are cleaned up.
// Generated images carry a ✦ mark ~60-165px in from the bottom-right corner. Trimming one 190px strip
// removes it cleanly: the bottom strip on portrait/square images, the right strip on landscape ones.
// Real project photos (project-*) are left whole.
const MARK_TRIM = 190;
function markFreeArea(name, { width, height }) {
  if (name.startsWith('project-')) return { left: 0, top: 0, width, height };
  return width > height
    ? { left: 0, top: 0, width: width - MARK_TRIM, height }
    : { left: 0, top: 0, width, height: height - MARK_TRIM };
}

const previous = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : {};
const manifest = {};
let made = 0;
const sources = fs.existsSync(srcDir) ? fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)) : [];

for (const file of sources.sort()) {
  const name = file.replace(/\.\w+$/, '').toLowerCase();
  const input = path.join(srcDir, file);
  const stat = fs.statSync(input);
  const meta = await sharp(input).metadata();
  const area = markFreeArea(name, meta);
  const sig = `${stat.size}-${Math.round(stat.mtimeMs)}-${area.width}x${area.height}`;
  const maxW = Math.min(area.width, WIDTHS.at(-1));
  const widths = [...new Set([...WIDTHS.filter((w) => w < maxW), maxW])];
  const fresh = (f) => previous[name]?.sig === sig && fs.existsSync(f);
  // camera photos may need EXIF rotation; generated images never do, and get trimmed instead
  const base = () => (area.height === meta.height && area.width === meta.width ? sharp(input).rotate() : sharp(input).extract(area));

  for (const w of widths) {
    const out = path.join(outDir, `${name}-${w}.webp`);
    if (fresh(out)) continue;
    await base().resize({ width: w }).webp({ quality: 74, effort: 5 }).toFile(out);
    made++;
  }
  const jpg = path.join(outDir, `${name}.jpg`);
  if (!fresh(jpg)) {
    await base().resize({ width: Math.min(maxW, 1400) }).flatten({ background: '#ffffff' }).jpeg({ quality: 76, mozjpeg: true, progressive: true }).toFile(jpg);
    made++;
  }
  manifest[name] = { w: maxW, h: Math.round((area.height / area.width) * maxW), widths, sig };
}
fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n');

// Remove outputs that no longer belong to a current photo or size.
const keep = new Set(Object.entries(manifest).flatMap(([n, m]) => [`${n}.jpg`, ...m.widths.map((w) => `${n}-${w}.webp`)]));
let removed = 0;
for (const f of fs.readdirSync(outDir)) {
  if (!keep.has(f)) {
    fs.unlinkSync(path.join(outDir, f));
    removed++;
  }
}
if (removed) console.log(`photos: removed ${removed} stale file(s)`);

// ---- Brand assets ----
const NAVY = '#133855';
const symbol = path.join(brandDir, 'logo-symbol.svg');
async function icon(file, size, pad, background) {
  const mark = await sharp(symbol, { density: 600 }).resize({ width: size - pad * 2, height: size - pad * 2, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background } }).composite([{ input: mark, gravity: 'center' }]).png().toFile(path.join(root, 'public', file));
}
await icon('favicon-48.png', 48, 3, { r: 0, g: 0, b: 0, alpha: 0 });
await icon('apple-touch-icon.png', 180, 26, '#ffffff');
await icon('icon-192.png', 192, 28, '#ffffff');
await icon('icon-512.png', 512, 72, '#ffffff');
await icon('icon-maskable.png', 512, 116, '#ffffff');

await sharp(path.join(brandDir, 'logo.svg'), { density: 300 }).resize({ width: 432 })
  .extend({ top: 40, bottom: 40, left: 40, right: 40, background: '#ffffff' }).flatten({ background: '#ffffff' })
  .png().toFile(path.join(brandDir, 'logo-512.png'));

// Social preview: white, logo, catalogue tagline, navy band with the catalogue quality points.
const card = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#F6F4F0"/>
  <rect x="0" y="0" width="1200" height="630" fill="url(#g)"/>
  <defs><radialGradient id="g" cx="0.92" cy="0" r="0.9"><stop offset="0" stop-color="#339CD3" stop-opacity=".16"/><stop offset="1" stop-color="#339CD3" stop-opacity="0"/></radialGradient></defs>
  <text x="80" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="72" fill="#0E1F2E">Reimagine Your</text>
  <text x="80" y="410" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-style="italic" fill="#133855">Shower Space</text>
  <text x="80" y="466" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#5C5D61">Single Panel · L-Type · Sliding · Swing shower enclosures</text>
  <rect x="0" y="540" width="1200" height="90" fill="#0E1F2E"/>
  <text x="80" y="595" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#ffffff">8mm toughened Saint-Gobain glass  ·  SS 304 fittings  ·  7 year fittings warranty</text>
</svg>`);
const logo = await sharp(path.join(brandDir, 'logo.svg'), { density: 300 }).resize({ width: 460 }).png().toBuffer();
await sharp(card).composite([{ input: logo, left: 80, top: 110 }]).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(brandDir, 'og-image.jpg'));

console.log(`photos: ${sources.length} source image(s), ${made} file(s) written · brand icons + og-image ready`);
