// Checks every internal link and asset referenced by the built HTML in dist/ resolves to a real file,
// the way GitHub Pages / Vercel (cleanUrls) serve it. Run after `npm run build`.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const base = (process.env.BASE_PATH || '/BathCentric/').replace(/\/?$/, '/');

const htmlFiles = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('.html')) htmlFiles.push(p);
  }
})(dist);

const resolves = (urlPath) => {
  if (urlPath === base.slice(0, -1)) return true; // host redirects /BathCentric -> /BathCentric/
  if (!urlPath.startsWith(base)) return false;
  const rel = decodeURIComponent(urlPath.slice(base.length)).replace(/[?#].*$/, '');
  const target = path.join(dist, rel);
  if (rel === '' || rel.endsWith('/')) return fs.existsSync(path.join(target, 'index.html'));
  return fs.existsSync(target) || fs.existsSync(`${target}.html`);
};

const broken = [];
let checked = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  const srcsets = [...html.matchAll(/\s(?:srcset|srcSet|imagesrcset)="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0]));
  for (const ref of [...refs, ...srcsets]) {
    if (/^(https?:|mailto:|tel:|data:|#)/.test(ref)) continue;
    checked++;
    if (!resolves(ref.replace(/&amp;/g, '&'))) broken.push(`${path.relative(dist, file)} -> ${ref}`);
  }
}

if (broken.length) {
  console.error(`✗ ${broken.length} broken internal links/assets (of ${checked} checked):`);
  console.error([...new Set(broken)].join('\n'));
  process.exit(1);
}
console.log(`✓ ${checked} internal links and assets across ${htmlFiles.length} pages all resolve`);
