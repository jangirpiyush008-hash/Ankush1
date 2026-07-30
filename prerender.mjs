/**
 * Prerender every SPA route into static HTML so crawlers see full content
 * even without executing JavaScript. Uses React's own SSR — no Chromium
 * required, works on every CI environment (Amplify, Netlify, Vercel).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const serverDist = path.join(__dirname, 'dist-server')

const routes = [
  '/',
  '/about',
  '/blog',
  '/community',
  '/contact',
  '/opening-strategies',
  '/endgame-techniques',
  '/chess-for-brain-health',
  '/classic-grandmasters',
  '/chess-puzzles',
  '/tournament-guides',
  '/legal/privacy',
  '/legal/terms',
  '/legal/refund',
  '/404'
]

async function main() {
  const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
  const entryUrl = pathToFileURL(path.join(serverDist, 'entry-server.js')).href
  const { render } = await import(entryUrl)

  for (const route of routes) {
    try {
      const { html, head } = render(route)

      let out = template
      // Inject SSR HTML into the #root div
      out = out.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

      // Inject Helmet head (title + meta) inside <head>, after existing tags
      if (head && head.trim()) {
        out = out.replace('</head>', `${head}\n</head>`)
      }

      const outPath =
        route === '/'
          ? path.join(dist, 'index.html')
          : path.join(dist, route.slice(1), 'index.html')

      fs.mkdirSync(path.dirname(outPath), { recursive: true })
      fs.writeFileSync(outPath, out)
      console.log('  ✓', route, '→', path.relative(process.cwd(), outPath))
    } catch (err) {
      console.warn('  ✗', route, '—', err.message)
    }
  }
  console.log('Prerender complete.')
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
