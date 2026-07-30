import express from 'express'
import compression from 'compression'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000
const DIST = path.join(__dirname, 'dist')

app.disable('x-powered-by')
app.use(compression())

// Long-cache immutable assets, short-cache HTML
app.use(express.static(DIST, {
  maxAge: '1y',
  etag: true,
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
    } else if (/\.(js|css|svg|png|jpg|jpeg|webp|woff2?)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
    }
  }
}))

// Sitemap and robots served from dist as static files (fallback below just in case)
app.get('/robots.txt', (req, res) => {
  const p = path.join(DIST, 'robots.txt')
  if (fs.existsSync(p)) return res.type('text/plain').sendFile(p)
  res.type('text/plain').send('User-agent: *\nAllow: /\nSitemap: https://seniorchessacademy.com/sitemap.xml\n')
})

app.get('/sitemap.xml', (req, res) => {
  const p = path.join(DIST, 'sitemap.xml')
  if (fs.existsSync(p)) return res.type('application/xml').sendFile(p)
  res.type('application/xml').send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>')
})

// SPA fallback — serve pre-rendered HTML for known routes, or 200.html otherwise
app.get('*', (req, res) => {
  const clean = req.path.replace(/\/$/, '') || '/'
  const candidates = [
    path.join(DIST, clean === '/' ? 'index.html' : clean.slice(1) + '/index.html'),
    path.join(DIST, clean === '/' ? 'index.html' : clean.slice(1) + '.html'),
    path.join(DIST, '200.html'),
    path.join(DIST, 'index.html')
  ]
  for (const file of candidates) {
    if (fs.existsSync(file)) return res.sendFile(file)
  }
  res.status(404).sendFile(path.join(DIST, '404.html'))
})

app.listen(PORT, () => {
  console.log(`Senior Chess Academy is listening on http://localhost:${PORT}`)
})
