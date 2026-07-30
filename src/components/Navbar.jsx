import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/opening-strategies', label: 'Openings' },
  { to: '/endgame-techniques', label: 'Endgames' },
  { to: '/chess-for-brain-health', label: 'Brain Health' },
  { to: '/classic-grandmasters', label: 'Grandmasters' },
  { to: '/chess-puzzles', label: 'Puzzles' },
  { to: '/tournament-guides', label: 'Tournaments' },
  { to: '/blog', label: 'Journal' },
  { to: '/community', label: 'Community' },
  { to: '/about', label: 'About' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-ivory/85 backdrop-blur border-b border-ink/10">
      <div className="container-editorial flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="Senior Chess Academy home">
          <span className="w-9 h-9 rounded-md bg-ink text-ivory flex items-center justify-center font-display text-xl leading-none" aria-hidden="true">♞</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg sm:text-xl font-semibold">Senior Chess Academy</span>
            <span className="eyebrow hidden sm:block">Strategy · Study · Longevity</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {navItems.slice(0, 7).map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${isActive ? 'text-ink font-medium' : 'text-graphite hover:text-ink'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary text-xs px-4 py-2">Contact</Link>
        </nav>
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-ink/15"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span aria-hidden="true">{open ? '×' : '≡'}</span>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-ivory">
          <div className="container-editorial py-4 grid gap-2">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-base ${isActive ? 'text-ink font-medium' : 'text-graphite'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">Contact us</Link>
          </div>
        </div>
      )}
    </header>
  )
}
