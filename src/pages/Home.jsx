import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Accordion from '../components/Accordion.jsx'
import heroBoard from '../assets/images/hero/board.jpg'
import heroStudy from '../assets/images/hero/study.jpg'
import openingsImg from '../assets/images/openings/pieces.jpg'
import puzzlesImg from '../assets/images/puzzles/puzzle.jpg'
import communityImg from '../assets/images/community/gathering.jpg'
import journalImg from '../assets/images/blog/journal.jpg'
import hallImg from '../assets/images/tournaments/hall.jpg'
import gmImg from '../assets/images/grandmasters/portrait.jpg'
import mindImg from '../assets/images/braintraining/mind.jpg'
import { articles } from '../data/articles.js'

const categories = [
  { to: '/opening-strategies', title: 'Opening Strategies', copy: 'Solid, low-theory openings for adult study — the London, Colle, Caro-Kann, and Petroff.', img: openingsImg },
  { to: '/endgame-techniques', title: 'Endgame Techniques', copy: 'King and pawn foundations, rook endings, and the technique that decides tournaments.', img: mindImg },
  { to: '/chess-for-brain-health', title: 'Chess & Brain Health', copy: 'A careful reading of the research on chess, working memory, and cognitive engagement.', img: journalImg },
  { to: '/classic-grandmasters', title: 'Classic Grandmasters', copy: 'Capablanca, Smyslov, Karpov, Petrosian — the players we study slowly and return to.', img: gmImg },
  { to: '/chess-puzzles', title: 'Daily Puzzles', copy: 'A quiet 15-minute daily tactics routine that fits between morning coffee and the paper.', img: puzzlesImg },
  { to: '/tournament-guides', title: 'Tournament Guides', copy: 'Etiquette, pacing, and preparation for the first — or the fortieth — over-the-board event.', img: hallImg }
]

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Senior Chess Academy',
    url: 'https://seniorchessacademy.com',
    publisher: {
      '@type': 'Organization',
      name: 'Senior Chess Academy'
    }
  }

  return (
    <>
      <SEO
        title="Senior Chess Academy — Strategy, Endgames & Brain Training for Adults 50+"
        description="A calm, editorial chess publication for adults 50+. Long-form articles on strategy, endgames, brain training, and classic grandmasters."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative border-b border-ink/10 overflow-hidden">
        <div className="container-editorial pt-16 sm:pt-24 pb-16 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-6">A Chess Publication for Adults 50+</div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-ink">
              Strategy, study,<br/>
              <em className="not-italic text-walnut">and the long game.</em>
            </h1>
            <p className="mt-8 text-lg text-graphite max-w-reading">
              Senior Chess Academy is a slow-reading publication for chess players who value depth over noise. We write long-form
              guides on openings, endgames, positional play, brain-training routines, and the great grandmasters — designed for
              adults who have the patience the game rewards.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/blog" className="btn-primary">Read the Journal</Link>
              <Link to="/chess-for-brain-health" className="btn-ghost">Chess & Brain Health</Link>
            </div>
            <div className="mt-12 max-w-md text-sm text-graphite border-l-2 border-gold pl-4">
              <span className="eyebrow block mb-2">About this site</span>
              An independent educational publication about chess for older adults. Every article is written by the editors
              and reviewed before publication. Read our <Link to="/about" className="link-underline text-ink">editorial standards</Link>.
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-ink/10 shadow-editorial">
              <img src={heroBoard} alt="A close-up of chess pieces on a wooden board" className="w-full h-auto" width="1600" height="1067" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-56 rounded-xl overflow-hidden border border-ink/15 shadow-card bg-ivory">
              <img src={heroStudy} alt="An assembled wooden chess set" className="w-full h-auto" width="1600" height="1067" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 chess-pattern opacity-40 pointer-events-none" aria-hidden="true"></div>
      </section>

      {/* Categories */}
      <section className="container-editorial py-20 sm:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-3">Study Areas</div>
            <h2 className="font-display text-4xl sm:text-5xl">Six quiet reading rooms.</h2>
          </div>
          <p className="max-w-md text-graphite">
            Each section is a small library of long-form guides written for the reader who wants substance. Nothing is behind
            a paywall; everything is intended to be read slowly, at a real board.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(cat => (
            <Link key={cat.to} to={cat.to} className="group card-editorial block">
              <div className="rounded-lg overflow-hidden border border-ink/10 mb-5">
                <img src={cat.img} alt={cat.title} width="1600" height="1067" className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity" loading="lazy" />
              </div>
              <div className="eyebrow mb-2">Reading Room</div>
              <h3 className="font-display text-2xl group-hover:text-walnut transition-colors">{cat.title}</h3>
              <p className="text-graphite text-sm mt-2">{cat.copy}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-widest text-ink">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending articles */}
      <section className="bg-marble border-y border-ink/10">
        <div className="container-editorial py-20 sm:py-28">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="eyebrow mb-3">The Journal</div>
              <h2 className="font-display text-4xl sm:text-5xl">From the reading room.</h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-block link-underline text-sm">All articles →</Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map(a => (
              <article key={a.slug} className="card-editorial flex flex-col">
                <img src={journalImg} alt={a.title} className="rounded-lg mb-5 h-40 w-full object-cover border border-ink/10" width="1600" height="1067" loading="lazy" />
                <div className="eyebrow mb-2">{a.category}</div>
                <h3 className="font-display text-xl mb-3">{a.title}</h3>
                <p className="text-graphite text-sm flex-1">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-end text-xs text-graphite">
                  <Link to={`/blog#${a.slug}`} className="uppercase tracking-widest text-ink link-underline">Read →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grandmaster spotlight */}
      <section className="container-editorial py-20 sm:py-28 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <img src={gmImg} alt="A close-up portrait of a chess piece" className="w-full rounded-2xl border border-ink/10 shadow-card" width="1600" height="1067" loading="lazy" />
        </div>
        <div className="lg:col-span-7">
          <div className="eyebrow mb-3">Grandmaster Spotlight</div>
          <h2 className="font-display text-4xl sm:text-5xl mb-6">Capablanca: the discipline of simplicity.</h2>
          <p className="text-graphite mb-4">
            José Raúl Capablanca played chess the way a good cabinetmaker builds a table: no wasted motion, no ornament, no
            bravado. Our current spotlight walks through three of his most instructive endings and a middlegame from
            San Sebastian 1911, annotated for a thoughtful reader.
          </p>
          <p className="text-graphite mb-8">
            Capablanca is a useful model for adult students. His games teach the preference for clarity over cleverness,
            patience over brilliance, and long-term structural thinking over calculation for its own sake.
          </p>
          <Link to="/classic-grandmasters" className="btn-ghost">Enter the grandmaster room →</Link>
        </div>
      </section>

      {/* Brain training */}
      <section className="bg-ink text-ivory">
        <div className="container-editorial py-20 sm:py-28 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="eyebrow text-ivory/60 mb-3">Cognitive Training</div>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">Fifteen minutes. Same chair. Same coffee.</h2>
            <p className="text-ivory/80 mb-4">
              The brain-training routine we describe is fifteen minutes, done every morning, at the same board, with the
              same cup: five minutes of visualization from a static position, five minutes of tactical puzzles at your
              current level, and five minutes of endgame technique.
            </p>
            <p className="text-ivory/80 mb-8">
              Consistency is what compounds. This publication does not make medical claims; chess is a demanding intellectual
              hobby, and we discuss the cognitive-science literature carefully, with citations, on the Brain Health page.
            </p>
            <Link to="/chess-for-brain-health" className="btn-primary bg-ivory text-ink hover:bg-goldSoft">Read the full routine →</Link>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-3 gap-3">
            {[
              ['5 min', 'Visualization'],
              ['5 min', 'Tactics'],
              ['5 min', 'Endgame'],
              ['Daily', 'Consistency'],
              ['1 hr', 'Weekly deep study'],
              ['1 game', 'Analyzed slowly']
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl border border-ivory/15 p-5 bg-ivory/5">
                <div className="font-display text-2xl">{n}</div>
                <div className="eyebrow text-ivory/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community — invitation, no fabricated stories */}
      <section className="container-editorial py-20 sm:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-3">Community</div>
            <h2 className="font-display text-4xl sm:text-5xl max-w-2xl">Chess clubs, libraries, quiet Tuesday nights.</h2>
          </div>
          <Link to="/community" className="hidden sm:inline-block link-underline text-sm">Community page →</Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card-editorial">
            <div className="eyebrow mb-2">Field Guide</div>
            <h3 className="font-display text-2xl mb-3">How to start a chess club in a retirement community.</h3>
            <p className="text-graphite">
              A step-by-step guide covering the first six months: the interest flyer, the shared table, borrowed boards,
              a recurring meeting time, and — most important — the discipline of never cancelling the first weeknight of
              the schedule.
            </p>
            <img src={communityImg} alt="Chess pieces arranged on a shared board" className="mt-6 rounded-lg border border-ink/10 w-full h-52 object-cover" width="1600" height="1067" loading="lazy" />
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-2">Write to Us</div>
            <h3 className="font-display text-2xl mb-3">Stories, corrections, questions.</h3>
            <p className="text-graphite">
              If you run a chess club at a library, community centre, or retirement community, we would be glad to hear
              from you. Written correspondence with the editor is welcome at any time; we reply to every letter.
            </p>
            <div className="mt-6 text-sm text-graphite">
              Email · <a href="mailto:seniorchessacademy@gmail.com" className="link-underline text-ink">seniorchessacademy@gmail.com</a><br/>
              Phone · <a href="tel:+16144287619" className="link-underline text-ink">(614) 428-7619</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter — real mailto, no fake subscribe state */}
      <section className="container-editorial pb-20">
        <div className="rounded-2xl bg-ink text-ivory p-10 sm:p-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="eyebrow text-ivory/60 mb-3">The Reading Letter</div>
            <h2 className="font-display text-3xl sm:text-4xl">A quiet weekly note.</h2>
            <p className="text-ivory/80 mt-4 max-w-md">
              A short note from the editor with one article, one tactical puzzle, and one grandmaster diagram. No advertising,
              no filler. To subscribe or unsubscribe, email us directly.
            </p>
          </div>
          <div className="grid gap-3">
            <a href="mailto:seniorchessacademy@gmail.com?subject=Subscribe%20to%20the%20reading%20letter" className="btn-primary bg-ivory text-ink hover:bg-goldSoft justify-center">
              Email to subscribe →
            </a>
            <p className="text-xs text-ivory/60">
              We use your email only to send this letter. See our <Link to="/legal/privacy" className="underline">Privacy Policy</Link>.
              You may unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-editorial pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">Questions, Answered</div>
            <h2 className="font-display text-4xl">Slowly, and in full.</h2>
            <p className="text-graphite mt-4">
              A few of the questions we most often receive from readers, students, and retirement-community organizers.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion title="Is Senior Chess Academy for beginners or experienced players?">
              <p>Both. We write in a tone that respects experienced players (no condescension, no beginner puns) while introducing
              foundational concepts carefully enough that a returning player can follow along. Our reading rooms are organized
              by topic, not by playing strength.</p>
            </Accordion>
            <Accordion title="Do I need to know chess notation to read the articles?">
              <p>No, though it helps. Every diagram is captioned in plain language, and every move sequence is described in text
              as well as notation. Readers unfamiliar with algebraic notation will still follow every article; those who know it
              will move faster.</p>
            </Accordion>
            <Accordion title="Who writes the articles?">
              <p>Articles are written and reviewed by the editors of Senior Chess Academy. We do not publish AI-generated
              filler content, and we do not accept advertorial. This is an independent educational publication.</p>
            </Accordion>
            <Accordion title="Is there a paywall?">
              <p>No. Everything on Senior Chess Academy is free to read.</p>
            </Accordion>
            <Accordion title="Can I contribute a story or a club profile?">
              <p>We would be glad to hear from you. Please write to <a href="mailto:seniorchessacademy@gmail.com" className="link-underline">seniorchessacademy@gmail.com</a>{' '}
              with a short pitch — no draft required — and the editor will respond.</p>
            </Accordion>
            <Accordion title="Do you cover online chess as well as over-the-board?">
              <p>Yes. Our tournament guides cover both. Many readers play online in the mornings and travel to weekend
              tournaments a few times a year. We take both formats seriously.</p>
            </Accordion>
            <Accordion title="Do you provide medical or health advice?">
              <p>No. Our articles about chess and cognitive engagement are educational and reference published research;
              they are not medical advice and should not replace consultation with a qualified healthcare professional.</p>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-parchment border-y border-ink/10">
        <div className="container-editorial py-16 grid gap-10 md:grid-cols-3 items-center">
          <div>
            <div className="eyebrow mb-2">Write to Us</div>
            <a href="mailto:seniorchessacademy@gmail.com" className="font-display text-2xl link-underline">seniorchessacademy@gmail.com</a>
          </div>
          <div>
            <div className="eyebrow mb-2">Call</div>
            <a href="tel:+16144287619" className="font-display text-2xl link-underline">(614) 428-7619</a>
          </div>
          <div>
            <div className="eyebrow mb-2">Visit</div>
            <address className="not-italic font-display text-xl leading-snug">
              390 Maple Grove Ln<br/>Columbus, OH 43215
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
