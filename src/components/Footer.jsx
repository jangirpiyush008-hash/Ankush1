import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-ivory mt-24">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-md bg-ivory text-ink flex items-center justify-center font-display text-xl" aria-hidden="true">♞</span>
            <div>
              <div className="font-display text-xl">Senior Chess Academy</div>
              <div className="eyebrow text-ivory/60">Strategy · Study · Longevity</div>
            </div>
          </div>
          <p className="text-ivory/70 max-w-md text-sm">
            An editorial chess publication for adults 50+. Long-form guides on strategy, endgames, cognitive training,
            and the great grandmasters — written slowly, read slowly.
          </p>
          <address className="not-italic mt-6 text-sm text-ivory/70 space-y-1">
            <div>Senior Chess Academy</div>
            <div>390 Maple Grove Ln, Columbus, OH 43215</div>
            <div>Email: <a className="link-underline text-ivory" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a></div>
            <div>Phone: <a className="link-underline text-ivory" href="tel:+16144287619">(614) 428-7619</a></div>
          </address>
        </div>

        <div>
          <div className="eyebrow text-ivory/60 mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-goldSoft" to="/opening-strategies">Opening Strategies</Link></li>
            <li><Link className="hover:text-goldSoft" to="/endgame-techniques">Endgame Techniques</Link></li>
            <li><Link className="hover:text-goldSoft" to="/chess-for-brain-health">Chess & Brain Health</Link></li>
            <li><Link className="hover:text-goldSoft" to="/classic-grandmasters">Classic Grandmasters</Link></li>
            <li><Link className="hover:text-goldSoft" to="/chess-puzzles">Chess Puzzles</Link></li>
            <li><Link className="hover:text-goldSoft" to="/tournament-guides">Tournament Guides</Link></li>
            <li><Link className="hover:text-goldSoft" to="/blog">Journal</Link></li>
            <li><Link className="hover:text-goldSoft" to="/community">Community</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-ivory/60 mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-goldSoft" to="/about">About</Link></li>
            <li><Link className="hover:text-goldSoft" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-goldSoft" to="/legal/privacy">Privacy</Link></li>
            <li><Link className="hover:text-goldSoft" to="/legal/terms">Terms</Link></li>
            <li><Link className="hover:text-goldSoft" to="/legal/refund">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ivory/60">
          <div>© {year} Senior Chess Academy. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/legal/privacy" className="hover:text-goldSoft">Privacy</Link>
            <Link to="/legal/terms" className="hover:text-goldSoft">Terms</Link>
            <Link to="/legal/refund" className="hover:text-goldSoft">Refund</Link>
            <Link to="/about" className="hover:text-goldSoft">About</Link>
            <Link to="/contact" className="hover:text-goldSoft">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
