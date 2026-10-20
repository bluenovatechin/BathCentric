// Build step 3 of 3 (after the client and SSR builds): render every route to static HTML so search
// engines and AI crawlers get full content, then write sitemap.xml, robots.txt, llms.txt, 404.html
// and redirect pages for old URLs.
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const {
  render, pages, redirects, SITE_URL, enclosures, finishes, addOns, glassTypes, warranty, faqs, GST_NOTE,
} = await import(pathToFileURL(ssrEntry).href);

// dist/index.html is overwritten below, so keep the untouched Vite template for re-runs.
const templateCopy = path.join(root, 'dist-ssr', 'template.html');
const built = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (built.includes('<!--app-html-->')) fs.writeFileSync(templateCopy, built);
const template = fs.readFileSync(templateCopy, 'utf8');
const base = new URL(SITE_URL + '/').pathname; // e.g. /BathCentric/

// Content-Security-Policy, delivered as a <meta> tag because GitHub Pages cannot set headers.
// (vercel.json sets the same policy as a real header once the site moves to Vercel.)
const csp = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://api.web3forms.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  'frame-src https://challenges.cloudflare.com',
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const fileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);
const write = (file, content) => {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
};

function page(route, extraHead = '') {
  const { html, head } = render(route);
  return template
    .replace('<!--app-csp-->', `<meta http-equiv="Content-Security-Policy" content="${csp}" />`)
    .replace('<!--app-head-->', `${head}\n    ${extraHead}`)
    .replace('<!--app-html-->', html);
}

// Preload the hero image on the home page (it is the Largest Contentful Paint element).
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src', 'data', 'image-manifest.json'), 'utf8'));
const heroSet = manifest['images/hero.jpg'].v.map((w) => `${base}images/w/hero-${w}.webp ${w}w`).join(', ');
const heroPreload = `<link rel="preload" as="image" type="image/webp" fetchpriority="high" imagesrcset="${heroSet}" imagesizes="(orientation: portrait) 180vh, 100vw" />`;

let count = 0;
for (const route of Object.keys(pages)) {
  write(fileFor(route), page(route, route === '/' ? heroPreload : ''));
  count++;
}

// 404 page: GitHub Pages and Vercel both serve dist/404.html for unknown URLs.
write('404.html', page('/__not-found__'));

// Redirect stubs for old URLs (static hosts cannot send 301s; Vercel uses vercel.json instead).
for (const [from, to] of Object.entries(redirects)) {
  const target = SITE_URL + to;
  write(
    fileFor(from),
    `<!DOCTYPE html><html lang="en-IN"><head><meta charset="utf-8"><title>Redirecting…</title>` +
      `<meta name="robots" content="noindex"><link rel="canonical" href="${target}">` +
      `<meta http-equiv="refresh" content="0; url=${target}"></head>` +
      `<body><p>This page has moved to <a href="${target}">${target}</a>.</p></body></html>`
  );
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = Object.entries(pages)
  .filter(([, m]) => !m.noindex)
  .map(([route, m]) => {
    const loc = SITE_URL + (route === '/' ? '/' : route);
    const img = m.image ? `\n    <image:image><image:loc>${SITE_URL}/${m.image}</image:loc></image:image>` : '';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${(m.priority ?? 0.5).toFixed(1)}</priority>${img}\n  </url>`;
  });
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`
);

// robots.txt: open to search engines and AI answer engines alike.
const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];
write(
  'robots.txt',
  [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiBots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
  ].join('\n')
);

// llms.txt: a plain-language summary for AI assistants (https://llmstxt.org).
const fmt = (n) => `₹${Number(n).toLocaleString('en-IN')}`;
const link = (route, label) => `- [${label}](${SITE_URL}${route === '/' ? '/' : route})`;
write(
  'llms.txt',
  [
    '# BathCentric',
    '',
    '> BathCentric makes and installs custom frameless shower enclosures in India: single panel, swing, sliding and L-type, in 8mm toughened Saint-Gobain glass with SS 304 stainless steel fittings.',
    '',
    '## Key facts',
    `- Enclosure types: ${enclosures.map((e) => e.shortName).join(', ')}`,
    `- Glass: 8mm toughened Saint-Gobain glass; ${glassTypes.map((g) => g.name.toLowerCase()).join(', ')}`,
    `- Fittings: SS 304 stainless steel in ${finishes.map((f) => f.name.toLowerCase()).join(', ')}`,
    `- Price per sq ft: ${finishes.map((f) => `${f.name} ${fmt(f.price)}`).join('; ')}`,
    `- Add-ons: ${addOns.map((a) => `${a.name} ${fmt(a.price)}/${a.unit}`).join('; ')}`,
    `- Warranty: ${warranty.fittingsYears} years on stainless steel fittings; ${warranty.glassYears}-year glass breakage warranty`,
    `- ${GST_NOTE.replace(/^\*/, '')}`,
    '- Process: enquiry, measurement, quotation, manufacturing, installation',
    '',
    '## Pages',
    link('/', 'Home'),
    link('/shower-enclosures', 'Shower enclosures: compare all types'),
    ...enclosures.map((e) => link(e.path, e.name)),
    link('/glass', 'Glass options'),
    link('/fittings-finishes', 'Fittings and finishes'),
    link('/pricing', 'Price list'),
    link('/how-it-works', 'How it works'),
    link('/quote', 'Get a quote'),
    link('/contact', 'Contact'),
    '',
    '## FAQ',
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, '']),
  ].join('\n')
);

// GitHub Pages must not run Jekyll over the output (it would hide files starting with _).
write('.nojekyll', '');

console.log(`prerendered ${count} pages + 404, ${Object.keys(redirects).length} redirects, sitemap (${urls.length} urls), robots.txt, llms.txt`);
