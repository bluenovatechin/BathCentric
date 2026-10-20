import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/outfit/wght.css';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import './styles.css';
import './stage.css';
import './sections.css';
import './theme.css';
import './explore.css';
import App from './App';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
const app = (
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const root = document.getElementById('root');
// Production pages are prerendered, so hydrate them; in dev the root starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
