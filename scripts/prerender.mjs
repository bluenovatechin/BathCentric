// Last build step: renders every page to static HTML (full content for search engines and AI
// crawlers), then writes 404.html, sitemap.xml, robots.txt and llms.txt.
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssr = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const { render, pages, SITE_URL, brand, enclosures, finishes, glasses, addOns, fittings, faqs, about, tagline, services, mirrors, drains, accessories, serviceAnswers, glassRange, enclosureSpecs } = ssr;

// dist/index.html is overwritten below, so keep the untouched template for re-runs.
const tplCopy = path.join(root, 'dist-ssr', 'template.html');
const built = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (built.includes('<!--app-->')) fs.writeFileSync(tplCopy, built);
const template = fs.readFileSync(tplCopy, 'utf8');
const base = new URL(`${SITE_URL}/`).pathname;

// GitHub Pages cannot send headers, so the Content-Security-Policy ships as a meta tag.
const csp = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

// Preload the two Latin font files so text renders in the right font immediately.
const fonts = fs.readdirSync(path.join(dist, 'assets')).filter((f) => /(outfit|plus-jakarta-sans)-latin-wght-normal.*\.woff2$/.test(f));
const fontPreload = fonts.map((f) => `<link rel="preload" href="${base}assets/${f}" as="font" type="font/woff2" crossorigin>`).join('\n    ');

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src', 'generated', 'images.json'), 'utf8'));
const preloadPhoto = (name, sizes) =>
  manifest[name]
    ? `<link rel="preload" as="image" type="image/webp" fetchpriority="high" imagesrcset="${manifest[name].widths.map((w) => `${base}img/${name}-${w}.webp ${w}w`).join(', ')}" imagesizes="${sizes}">`
    : '';

const fileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);
const write = (file, body) => fs.writeFileSync(path.join(dist, file), body);

function page(route) {
  const { html, head } = render(route);
  const enc = enclosures.find((e) => e.path === route);
  const firstSlide = ['hero-1', 'enclosure-swing'].find((n) => manifest[n]);
  const lcp = route === '/' ? preloadPhoto(firstSlide, '(max-aspect-ratio: 1/1) 178vh, 100vw') : enc ? preloadPhoto(enc.image, '(min-width: 1000px) 55vw, 100vw') : '';
  return template
    .replace('<!--csp-->', `<meta http-equiv="Content-Security-Policy" content="${csp}">`)
    .replace('<!--head-->', [fontPreload, lcp, head].filter(Boolean).join('\n    '))
    .replace('<!--app-->', html);
}

const routes = Object.keys(pages);
routes.forEach((r) => write(fileFor(r), page(r)));
write('404.html', page('/404'));

const today = new Date().toISOString().slice(0, 10);
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod><priority>${r === '/' ? '1.0' : r.includes('enclosure') || r === '/quote' ? '0.9' : r.includes('privacy') || r.includes('terms') ? '0.3' : '0.7'}</priority></url>`)
    .join('\n')}\n</urlset>\n`
);

const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'];
write('robots.txt', ['User-agent: *', 'Allow: /', '', ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']), `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n'));

// llms.txt: plain-language summary for AI assistants (https://llmstxt.org).
const url = (r) => `${SITE_URL}${r === '/' ? '/' : r}`;
write(
  'llms.txt',
  [
    `# BathCentric: ${tagline}`,
    '',
    `> ${about}`,
    '',
    'BathCentric is a new bathroom brand, launched in 2026.',
    '',
    '## Shower enclosures',
    ...enclosures.map((e) => `- [${e.name}](${url(e.path)}): ${e.summary} Width: ${enclosureSpecs[e.slug].width}. Height: ${enclosureSpecs[e.slug].height}. Space in front: ${enclosureSpecs[e.slug].space} Fittings: ${e.fittings.map((f) => fittings[f]).join(', ')}.`),
    '',
    '## Prices',
    '- Prices are not published. Every enclosure and service is priced on a written quotation after measurement; request one with the quote form or on WhatsApp.',
    `- Fitting finishes: ${finishes.map((f) => f.name).join(', ')}`,
    '',
    '## Glass',
    '- 8mm toughened Saint-Gobain glass, 3 year breakage warranty.',
    ...glassRange.map((g) => `- [${g.name}](${url('/shower-glass')}) (${g.availability}, ${g.privacy}): ${g.text}`),
    '',
    '## Add ons',
    ...addOns.map((a) => `- ${a.name}: ${a.text}`),
    '',
    '## Quality and warranty',
    '- SS 304 grade premium stainless steel fittings',
    '- Stainless steel fittings: 7 year warranty; glass: 3 year breakage warranty',
    '',
    '## Services',
    ...services.map((sv) => `- [${sv.title}](${url('/services')}#${sv.id}): ${sv.text}`),
    '',
    '## Mirrors, drains and accessories',
    `- [Mirrors](${url('/bathroom-mirrors')}): ${serviceAnswers.mirrors} Shapes: ${mirrors.map((m) => m.name).join(', ')}.`,
    `- [Linear drains](${url('/linear-drains')}): ${serviceAnswers.drains} Types: ${drains.map((d) => d.name).join(', ')}.`,
    `- [Accessories](${url('/bathroom-accessories')}): ${accessories.map((a) => a.name).join(', ')}.`,
    '',
    '## Contact',
    `- WhatsApp and phone: ${brand.whatsappDisplay}`,
    `- [Request a quote](${url('/quote')}): the form opens WhatsApp with the request, addressed to ${brand.whatsappDisplay}.`,
    '',
    '## Pages',
    ...routes.filter((r) => !/privacy|terms/.test(r)).map((r) => `- [${pages[r].title}](${url(r)})`),
    '',
    '## FAQ',
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, '']),
  ].join('\n')
);

write('.nojekyll', '');
console.log(`prerendered ${routes.length} pages + 404 · sitemap · robots.txt · llms.txt`);
