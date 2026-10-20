// Builds the per-page <head> tags. Used as an HTML string by the prerender step and
// applied to the live document on client-side navigation by usePageMeta.
import { site, absoluteUrl, integrations } from '../config/site';
import { buildSchema } from './schema';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function headTags(path, meta) {
  const canonical = absoluteUrl(path);
  const image = absoluteUrl(`/${meta.image || 'images/og-image.jpg'}`);
  return {
    title: meta.title,
    canonical,
    metas: [
      ['name', 'description', meta.description],
      ['name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'],
      ['property', 'og:type', 'website'],
      ['property', 'og:site_name', site.name],
      ['property', 'og:locale', 'en_IN'],
      ['property', 'og:title', meta.title],
      ['property', 'og:description', meta.description],
      ['property', 'og:url', canonical],
      ['property', 'og:image', image],
      ['property', 'og:image:alt', `${site.name}: ${meta.title}`],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', meta.title],
      ['name', 'twitter:description', meta.description],
      ['name', 'twitter:image', image],
    ],
    schema: meta.noindex ? null : buildSchema(path, meta),
  };
}

export function headHtml(path, meta) {
  const t = headTags(path, meta);
  const lines = [
    `<title>${esc(t.title)}</title>`,
    ...t.metas.map(([attr, key, value]) => `<meta ${attr}="${key}" content="${esc(value)}" data-page-meta>`),
    meta.noindex ? '' : `<link rel="canonical" href="${esc(t.canonical)}" data-page-meta>`,
    integrations.googleSiteVerification
      ? `<meta name="google-site-verification" content="${esc(integrations.googleSiteVerification)}">`
      : '',
    t.schema
      ? `<script type="application/ld+json" data-page-meta>${JSON.stringify(t.schema).replace(/</g, '\\u003c')}</script>`
      : '',
  ];
  return lines.filter(Boolean).join('\n    ');
}

// Client-side: swap the page-specific head tags when the route changes.
export function applyHead(path, meta) {
  const t = headTags(path, meta);
  document.title = t.title;
  document.head.querySelectorAll('[data-page-meta]').forEach((n) => n.remove());
  const frag = document.createDocumentFragment();
  t.metas.forEach(([attr, key, value]) => {
    const m = document.createElement('meta');
    m.setAttribute(attr, key);
    m.setAttribute('content', value);
    m.setAttribute('data-page-meta', '');
    frag.appendChild(m);
  });
  if (!meta.noindex) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = t.canonical;
    link.setAttribute('data-page-meta', '');
    frag.appendChild(link);
  }
  if (t.schema) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-page-meta', '');
    s.textContent = JSON.stringify(t.schema);
    frag.appendChild(s);
  }
  document.head.appendChild(frag);
}
