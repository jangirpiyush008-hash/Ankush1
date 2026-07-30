import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

const rootEl = document.getElementById('root')

const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)

if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, tree)
} else {
  createRoot(rootEl).render(tree)
}
