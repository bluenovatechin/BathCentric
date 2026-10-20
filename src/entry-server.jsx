// Server entry used only at build time by scripts/prerender.mjs to render each route to static HTML.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { pages, notFoundMeta, redirects } from './seo/pages';
import { headHtml } from './seo/head';
import { SITE_URL } from './config/site';

export { pages, notFoundMeta, redirects, SITE_URL };
export { enclosures, finishes, addOns, glassTypes, warranty, faqs, GST_NOTE } from './data/catalog';

export function render(path) {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
  const url = basename === '/' ? path : `${basename}${path === '/' ? '' : path}`;
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url} basename={basename}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
  const meta = pages[path] || notFoundMeta;
  return { html, head: headHtml(path, meta) };
}
