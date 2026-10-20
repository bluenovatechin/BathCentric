// Generates responsive WebP variants of every photo in public/images and a manifest
// (src/data/image-manifest.json) with intrinsic sizes, used by <Img> for srcset + width/height (no layout shift).
// Also generates the favicon PNGs, web-app icons, the raster logo and the social preview image.
// Runs automatically before `dev` and `build`. Outputs are regenerated, so they are git-ignored.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = path.join(root, 'public', 'images');
const outDir = path.join(imgDir, 'w');
const manifestPath = path.join(root, 'src', 'data', 'image-manifest.json');
const WIDTHS = [480, 960, 1600];

fs.mkdirSync(outDir, { recursive: true });
const manifest = {};
let made = 0;

for (const file of fs.readdirSync(imgDir).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort()) {
  if (/^(og-image|logo|apple-touch|icon-)/.test(file)) continue;
  const src = path.join(imgDir, file);
  const base = file.replace(/\.\w+$/, '');
  const { width, height } = await sharp(src).metadata();
  const srcMtime = fs.statSync(src).mtimeMs;
  const widths = WIDTHS.filter((w) => w < width).concat(width > WIDTHS.at(-1) ? [] : [width]);
  const variants = [...new Set(widths.map((w) => Math.min(w, WIDTHS.at(-1))))];
  for (const w of variants) {
    const out = path.join(outDir, `${base}-${w}.webp`);
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= srcMtime) continue;
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: 72, effort: 5 }).toFile(out);
    made++;
  }
  manifest[`images/${file}`] = { w: width, h: height, v: variants };
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 0) + '\n');

// Icons, raster logo and social card, from the brand SVGs.
const pub = path.join(root, 'public');
const symbol = fs.readFileSync(path.join(imgDir, 'logo-symbol.svg'));
const logoWhite = fs.readFileSync(path.join(imgDir, 'logo-white.svg'));
const NAVY = '#133855';

const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };
async function squareIcon(file, size, pad, bg) {
  const mark = await sharp(symbol, { density: 600 })
    .resize({ width: size - pad * 2, height: size - pad * 2, fit: 'contain', background: CLEAR })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: mark, gravity: 'center' }])
    .png()
    .toFile(path.join(pub, file));
}

await squareIcon('apple-touch-icon.png', 180, 22, '#FFFFFF');
await squareIcon('icon-192.png', 192, 24, '#FFFFFF');
await squareIcon('icon-512.png', 512, 64, '#FFFFFF');
await squareIcon('icon-maskable-512.png', 512, 110, '#FFFFFF');
await squareIcon('favicon-48.png', 48, 4, CLEAR);

// Raster logo for structured data (Google wants a bitmap of at least 112px).
await sharp(path.join(imgDir, 'logo.svg'), { density: 300 }).resize({ width: 600 }).flatten({ background: '#FFFFFF' })
  .extend({ top: 40, bottom: 40, left: 40, right: 40, background: '#FFFFFF' }).png().toFile(path.join(imgDir, 'logo.png'));

// 1200x630 social preview card: hero photo, navy overlay, white logo and tagline.
const og = path.join(imgDir, 'og-image.jpg');
const heroSrc = path.join(imgDir, 'hero.jpg');
if (!fs.existsSync(og) || fs.statSync(og).mtimeMs < fs.statSync(heroSrc).mtimeMs || process.argv.includes('--force')) {
  const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="${NAVY}" stop-opacity=".96"/><stop offset=".55" stop-color="${NAVY}" stop-opacity=".82"/><stop offset="1" stop-color="${NAVY}" stop-opacity=".15"/></linearGradient></defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="72" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="60" font-weight="700" fill="#FFFFFF">Custom Shower Enclosures</text>
    <text x="72" y="400" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#D6ECF8">8mm toughened glass · SS 304 fittings · 7-year warranty</text>
    <rect x="72" y="452" width="330" height="64" rx="32" fill="#339CD3"/>
    <text x="237" y="494" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="27" font-weight="700" fill="#FFFFFF">From ₹697 / sq ft</text>
  </svg>`);
  const logo = await sharp(logoWhite, { density: 300 }).resize({ width: 420 }).png().toBuffer();
  await sharp(heroSrc).resize(1200, 630, { fit: 'cover', position: 'right' })
    .composite([{ input: overlay }, { input: logo, top: 120, left: 72 }])
    .jpeg({ quality: 82, mozjpeg: true }).toFile(og);
}

console.log(`images: ${Object.keys(manifest).length} photos, ${made} new webp variants; icons + og-image ready`);
