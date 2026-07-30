import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Community from './pages/Community.jsx'
import Contact from './pages/Contact.jsx'
import OpeningStrategies from './pages/OpeningStrategies.jsx'
import EndgameTechniques from './pages/EndgameTechniques.jsx'
import BrainHealth from './pages/BrainHealth.jsx'
import ClassicGrandmasters from './pages/ClassicGrandmasters.jsx'
import ChessPuzzles from './pages/ChessPuzzles.jsx'
import TournamentGuides from './pages/TournamentGuides.jsx'
import Privacy from './pages/legal/Privacy.jsx'
import Terms from './pages/legal/Terms.jsx'
import Refund from './pages/legal/Refund.jsx'
import NotFound from './pages/NotFound.jsx'
import { trackPageView } from './utils/analytics.js'

export default function App() {
  const location = useLocation()

  React.useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-ivory focus:px-4 focus:py-2 focus:rounded">Skip to content</a>
      <Navbar />
      <ScrollToTop />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/opening-strategies" element={<OpeningStrategies />} />
          <Route path="/endgame-techniques" element={<EndgameTechniques />} />
          <Route path="/chess-for-brain-health" element={<BrainHealth />} />
          <Route path="/classic-grandmasters" element={<ClassicGrandmasters />} />
          <Route path="/chess-puzzles" element={<ChessPuzzles />} />
          <Route path="/tournament-guides" element={<TournamentGuides />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
