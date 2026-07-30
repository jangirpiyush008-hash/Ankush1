import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found — Senior Chess Academy"
        description="The page you were looking for does not exist. Return to the main reading room."
        path="/404"
      />
      <section className="container-editorial py-24 text-center">
        <div className="mx-auto mb-8 w-24 h-24 rounded-xl bg-ink text-ivory flex items-center justify-center font-display text-5xl" aria-hidden="true">♟</div>
        <div className="eyebrow mb-4">Error · 404</div>
        <h1 className="font-display text-5xl sm:text-7xl mb-6">A quiet, empty square.</h1>
        <p className="text-graphite max-w-xl mx-auto mb-10">
          The page you were looking for could not be found. It may have been retired, renamed, or perhaps it never quite
          made it to publication. Please return to the main reading room.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">Return home</Link>
          <Link to="/blog" className="btn-ghost">Open the journal</Link>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto text-left">
          <Link to="/opening-strategies" className="card-editorial">
            <div className="eyebrow mb-2">Explore</div>
            <div className="font-display text-lg">Opening Strategies</div>
          </Link>
          <Link to="/endgame-techniques" className="card-editorial">
            <div className="eyebrow mb-2">Explore</div>
            <div className="font-display text-lg">Endgame Techniques</div>
          </Link>
          <Link to="/chess-for-brain-health" className="card-editorial">
            <div className="eyebrow mb-2">Explore</div>
            <div className="font-display text-lg">Chess & Brain Health</div>
          </Link>
        </div>
      </section>
    </>
  )
}
