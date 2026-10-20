# BathCentric website

React + Vite site for BathCentric shower enclosures. Product facts come from **Catalogue 2026**
(`src/data/catalog.js`). Every page is prerendered to static HTML for speed and SEO.

| Command | |
|---|---|
| `npm run dev` | Local site at http://localhost:5173 |
| `npm run build` | Optimise photos → build → prerender pages, sitemap, robots.txt, llms.txt, 404 |
| `npm run check:links` | Checks every internal link and file in `dist/` |

**Images:** **`update_image.md`** has a ready-to-copy prompt for every image the site uses (start here).
`IMAGE_GUIDE.md` explains file names and sizes. Put photos in `photos/`.

## Forms → WhatsApp
The Quote and Contact forms check the details, then open WhatsApp with a ready-to-send message to
`VITE_WHATSAPP`. Nothing is stored by the website and no keys are needed. Visitors attach bathroom photos in the chat.

## Settings (GitHub → Settings → Secrets and variables → Actions → Variables)
| Variable | Example | Needed |
|---|---|---|
| `VITE_WHATSAPP` | `919876543210` (country code + number) | **Yes**, the forms need it |
| `VITE_PHONE`, `VITE_EMAIL` | `+91 98765 43210`, `hello@…` | Recommended |
| `VITE_ADDRESS`, `VITE_SERVICE_AREA`, `VITE_HOURS` | | Optional |
| `VITE_GA_ID` | `G-XXXXXXXXXX` | When ready (loads only after cookie consent) |
| `VITE_GOOGLE_SITE_VERIFICATION` | the `content` value of Search Console's HTML tag | When ready |

For local builds, copy `.env.example` to `.env`.

## Before launch
1. Add the variables above.
2. GitHub → Settings → Pages: Source **GitHub Actions**, tick **Enforce HTTPS**.
3. After deploying with the verification value, verify in Search Console and submit `sitemap.xml`.
4. Have the Privacy Policy and Terms (`src/pages/Legal.jsx`) reviewed.

## Moving to Vercel and your own domain
Import the repo in Vercel (`vercel.json` adds HTTPS/HSTS and security headers), set `BASE_PATH=/` and
`VITE_SITE_URL=https://your-domain`, add the variables above, then resubmit the sitemap in Search Console.
