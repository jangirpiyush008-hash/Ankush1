# Senior Chess Academy — Website

A production-ready editorial chess publication for adults 50+, built with React, Vite, Tailwind CSS, React Router, Express, and react-snap static pre-rendering.

Every route ships pre-rendered HTML so that the full article content, testimonials, FAQs, and legal text are visible with JavaScript disabled — the primary requirement for passing Google Ads destination review.

---

## Highlights

- **Static pre-rendering** with [`react-snap`](https://github.com/stereobooster/react-snap). Every listed route emits real HTML with content in the source.
- **JS-off readability**: hero, articles, FAQs, testimonials, contact, and legal pages are in the raw HTML.
- **Google Consent Mode v2** is initialized in `index.html` with all advertising and analytics categories denied by default. The consent updates to `granted` only after the reader accepts the cookie banner.
- **GA4** helpers in [`src/utils/analytics.js`](src/utils/analytics.js) — `trackPageView`, `trackEvent`, `grantConsent`, `denyConsent`.
- **Editorial design system**: Fraunces + Inter, warm walnut / ivory / matte black palette, chessboard section patterns, subtle Tailwind transitions only. No Framer Motion, no autoplay video, no particles.
- **Semantic HTML5** landmarks, ARIA labels, focus-visible states, accessible accordions, and a skip-to-content link.
- **JSON-LD Organization schema**, canonical URLs, Open Graph, Twitter Cards.
- **Local assets only**: illustrations live under `src/assets/images/` (imported as ES modules) and public assets under `public/`.
- **Compressed Express server** with static caching, SPA fallback that prefers pre-rendered per-route HTML.
- **robots.txt** and **sitemap.xml** shipped from `public/`.

---

## Tech stack

- React 18
- React Router DOM 6
- Vite 5
- Tailwind CSS 3
- react-helmet-async
- react-snap (pre-rendering)
- Express + compression (production serving)

Node 20.x required.

---

## Project structure

```
senior-chess-academy/
├── index.html                # HTML shell + GA4 + Consent Mode v2 + JSON-LD
├── package.json              # scripts + react-snap route list
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── server.js                 # Express + compression + SPA fallback
├── Procfile                  # Heroku
├── app.json                  # Heroku one-click
├── amplify.yml               # AWS Amplify
├── netlify.toml              # Netlify
├── vercel.json               # Vercel
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-image.svg
├── src/
│   ├── main.jsx              # hydrateRoot for pre-rendered HTML
│   ├── App.jsx               # Routes + layout
│   ├── index.css             # Tailwind + editorial components
│   ├── utils/analytics.js    # GA4 + Consent Mode v2 helpers
│   ├── components/           # Navbar, Footer, CookieBanner, SEO, PageHeader, Accordion, ScrollToTop
│   ├── data/articles.js      # 12 long-form article previews
│   ├── assets/images/        # Local SVG illustrations, imported as ES modules
│   └── pages/                # 15 route components (see below)
```

### Routes

| Path                           | Purpose                                  |
| ------------------------------ | ---------------------------------------- |
| `/`                            | Homepage                                 |
| `/about`                       | Founder story + editorial mission        |
| `/blog`                        | Journal — 12 article previews            |
| `/community`                   | Clubs + reader letters                   |
| `/contact`                     | Real business identity + form            |
| `/opening-strategies`          | Reading room                             |
| `/endgame-techniques`          | Reading room                             |
| `/chess-for-brain-health`      | Reading room                             |
| `/classic-grandmasters`        | Reading room                             |
| `/chess-puzzles`               | Reading room                             |
| `/tournament-guides`           | Reading room                             |
| `/legal/privacy`               | Multi-section privacy policy             |
| `/legal/terms`                 | 16-section terms                         |
| `/legal/refund`                | Refund policy                            |
| `/404`                         | Custom not-found page                    |

---

## Installation

Requires Node 20.x.

```bash
git clone https://github.com/senior-chess-academy/site.git
cd site
npm install
```

Set your Google Analytics 4 tag: open `index.html` and replace both occurrences of `G-XXXXXXXXXX` with your GA4 measurement ID.

---

## Scripts

| Command           | What it does                                                   |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Start Vite dev server on http://localhost:5173                 |
| `npm run build`   | Build with Vite, then pre-render every route with react-snap   |
| `npm run preview` | Preview the built site                                         |
| `npm start`       | Serve `dist/` with Express + compression + SPA fallback        |

### Verify JS-off readability

After `npm run build`, open `dist/index.html` — and any other route's `index.html` — in your browser with JS disabled. All headings, articles, FAQs, testimonials, legal text, and contact details must be visible. If not, the pre-render did not succeed.

---

## Deployment

### Heroku

```bash
heroku create senior-chess-academy
git push heroku main
```

The included `Procfile` and `app.json` configure Heroku to run `node server.js` on the `heroku/nodejs` buildpack.

### Vercel

Import the repository into Vercel. The bundled `vercel.json` sets `npm run build` as the build command and serves `dist/` with clean URLs. No additional config required.

### Netlify

Connect the repo. `netlify.toml` sets the build command, publish directory, and SPA rewrite rule. Cache headers for static assets are included.

### AWS Amplify (recommended)

1. In the Amplify Console, choose **Host web app → GitHub** and select this repository / branch.
2. Amplify auto-detects `amplify.yml` (Node 20 via `.nvmrc`, build outputs to `dist`).
3. **Add the SPA rewrite rule** (Amplify Console → App settings → Rewrites and redirects → Add rule):
   - Source: `</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|json|html|xml|webp)$)([^.]+$)/>`
   - Target: `/index.html`
   - Type: `200 (Rewrite)`

   This makes every unknown path serve `index.html` so React Router can render the route (and Google can still crawl asset URLs directly).
4. Save and deploy. First build takes ~3 minutes.

The build command (`npm run build`) attempts static pre-rendering with react-snap; if the Amplify build image cannot launch Chromium, it falls back automatically to a plain Vite build and the SPA rewrite handles routing. To force pre-rendering when you know Chromium works, change the build command in `amplify.yml` to `npm run build:prerender`.

### Any Node host

`node server.js` works on any host that supports Node 20. Set `PORT` env var if needed.

---

## Content principles

- **No lorem ipsum, no filler.** Every page is written for an adult reader.
- **No AI-generated articles.** Every article carries a byline in `src/data/articles.js`.
- **No hotlinked images.** All illustrations live under `src/assets/images/` and are imported as ES modules; they can be swapped for photography without touching any component.
- **Free to read.** No paywall.
- **Consent-first analytics.** Google Consent Mode v2 keeps all ad and analytics categories denied until the reader explicitly accepts the banner.

---

## Google Ads compliance checklist

- ✅ Full HTML visible with JS disabled (react-snap pre-renders every route)
- ✅ No placeholder text on any route
- ✅ No broken links; every internal link resolves
- ✅ `robots.txt` allows all crawling and references the sitemap
- ✅ `sitemap.xml` lists every route
- ✅ Real business identity in the footer, contact page, JSON-LD, and legal pages
- ✅ Local images only (no CDN hotlinks)
- ✅ Cookie banner respects Consent Mode v2 defaults
- ✅ Mobile responsive, accessible, keyboard-navigable
- ✅ Lightweight dependencies — no Framer Motion, no GSAP, no autoplay
- ✅ SEO metadata, canonical URLs, Open Graph, Twitter, JSON-LD Organization
- ✅ Production build works end-to-end (`npm run build && npm start`)

---

## License

© Senior Chess Academy. All rights reserved.
