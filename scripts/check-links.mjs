// After `npm run build`: checks every internal link and asset in dist/*.html resolves to a real file
// (served the way GitHub Pages / Vercel clean URLs serve it). Exits 1 if anything is broken.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const base = (process.env.BASE_PATH || '/BathCentric/').replace(/\/?$/, '/');
const pages = fs.readdirSync(dist).filter((f) => f.endsWith('.html'));

const ok = (ref) => {
  if (ref === base.slice(0, -1)) return true; // host redirects /BathCentric -> /BathCentric/
  if (!ref.startsWith(base)) return false;
  const rel = decodeURIComponent(ref.slice(base.length).split(/[?#]/)[0]);
  const p = path.join(dist, rel);
  return rel === '' ? fs.existsSync(path.join(dist, 'index.html')) : fs.existsSync(p) || fs.existsSync(`${p}.html`);
};

const bad = [];
let n = 0;
for (const f of pages) {
  const html = fs.readFileSync(path.join(dist, f), 'utf8');
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  const sets = [...html.matchAll(/\s(?:srcset|imagesrcset)="([^"]+)"/gi)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0]));
  for (const r of [...refs, ...sets]) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(r)) continue;
    n++;
    if (!ok(r.replace(/&amp;/g, '&'))) bad.push(`${f} -> ${r}`);
  }
}
if (bad.length) {
  console.error(`✗ ${bad.length} broken (of ${n}):\n${[...new Set(bad)].join('\n')}`);
  process.exit(1);
}
console.log(`✓ ${n} internal links/assets across ${pages.length} pages resolve`);
