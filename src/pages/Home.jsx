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
  { to: '/chess-for-brain-health', title: 'Chess & Brain Health', copy: 'What the peer-reviewed research actually shows about chess and cognitive longevity.', img: journalImg },
  { to: '/classic-grandmasters', title: 'Classic Grandmasters', copy: 'Capablanca, Smyslov, Karpov, Petrosian — the players we study slowly and return to.', img: gmImg },
  { to: '/chess-puzzles', title: 'Daily Puzzles', copy: 'A quiet 15-minute daily tactics routine that fits between morning coffee and the paper.', img: puzzlesImg },
  { to: '/tournament-guides', title: 'Tournament Guides', copy: 'Etiquette, pacing, and preparation for the first — or the fortieth — over-the-board event.', img: hallImg }
]

const testimonials = [
  {
    quote:
      'The London System guide reshaped how I approach study. In one weekend I understood why my games kept collapsing on move 12.',
    name: 'Robert L.',
    detail: 'Age 67 · Cleveland, OH'
  },
  {
    quote:
      'A quiet, adult publication. No flashing banners, no gimmicks — just careful writing about a game I have loved for fifty years.',
    name: 'Marianne P.',
    detail: 'Age 71 · Ann Arbor, MI'
  },
  {
    quote:
      "I used their retirement-community field guide to start a chess circle at Willow Ridge. We have fourteen members now.",
    name: 'Douglas H.',
    detail: 'Age 74 · Columbus, OH'
  }
]

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [subscribed, setSubscribed] = React.useState(false)

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
            <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <dt className="eyebrow">Articles</dt>
                <dd className="font-display text-3xl mt-1">120+</dd>
              </div>
              <div>
                <dt className="eyebrow">Subscribers</dt>
                <dd className="font-display text-3xl mt-1">9,400</dd>
              </div>
              <div>
                <dt className="eyebrow">Clubs featured</dt>
                <dd className="font-display text-3xl mt-1">38</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-ink/10 shadow-editorial">
              <img src={heroBoard} alt="A wooden chessboard with hand-carved pieces mid-game, warm lamp glow above" className="w-full h-auto" width="800" height="600" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -left-8 w-56 rounded-xl overflow-hidden border border-ink/15 shadow-card bg-ivory">
              <img src={heroStudy} alt="An open chess book and reading lamp on a walnut study desk" className="w-full h-auto" width="800" height="600" />
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
            <h2 className="font-display text-4xl sm:text-5xl">Six long, quiet reading rooms.</h2>
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
                <img src={cat.img} alt={cat.title} width="600" height="400" className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity" loading="lazy" />
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
              <h2 className="font-display text-4xl sm:text-5xl">Trending in the reading room.</h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-block link-underline text-sm">All articles →</Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map(a => (
              <article key={a.slug} className="card-editorial flex flex-col">
                <img src={journalImg} alt={a.title} className="rounded-lg mb-5 h-40 w-full object-cover border border-ink/10" width="600" height="400" loading="lazy" />
                <div className="eyebrow mb-2">{a.category} · {a.readingTime}</div>
                <h3 className="font-display text-xl mb-3">{a.title}</h3>
                <p className="text-graphite text-sm flex-1">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-graphite">
                  <span>By {a.author}</span>
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
          <img src={gmImg} alt="Silhouette portrait study, in the spirit of Capablanca" className="w-full rounded-2xl border border-ink/10 shadow-card" width="600" height="400" loading="lazy" />
        </div>
        <div className="lg:col-span-7">
          <div className="eyebrow mb-3">Grandmaster Spotlight</div>
          <h2 className="font-display text-4xl sm:text-5xl mb-6">Capablanca: the discipline of simplicity.</h2>
          <p className="text-graphite mb-4">
            José Raúl Capablanca played chess the way a good cabinetmaker builds a table: no wasted motion, no ornament, no
            bravado. In our current spotlight we walk through three of his most instructive endings and a middlegame from
            San Sebastian 1911, annotated for a thoughtful reader — not a computer.
          </p>
          <p className="text-graphite mb-8">
            Capablanca is the perfect model for adult students. His games teach you to prefer clarity over cleverness, patience
            over brilliance, and long-term structural thinking over calculation for its own sake.
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
              The brain-training routine we recommend — and follow ourselves — is fifteen minutes, done every morning, at the
              same board, with the same cup. Five minutes of visualization from a static position. Five minutes of tactical
              puzzles at your current level. Five minutes of endgame technique.
            </p>
            <p className="text-ivory/80 mb-8">
              Consistency compounds. A player who does fifteen minutes a day for one year will visibly outclass a player
              who does one hour twice a week. Ritual is the secret we underappreciate at every age — and especially past sixty.
            </p>
            <Link to="/chess-for-brain-health" className="btn-primary bg-ivory text-ink hover:bg-goldSoft">Read the full routine →</Link>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-3 gap-3">
            {[
              ['5 min', 'Visualization'],
              ['5 min', 'Tactics'],
              ['5 min', 'Endgame'],
              ['Daily', 'Consistency'],
              ['1 hr', 'Deep study, weekly'],
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

      {/* Community stories */}
      <section className="container-editorial py-20 sm:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="eyebrow mb-3">From the Community</div>
            <h2 className="font-display text-4xl sm:text-5xl max-w-2xl">Clubs, letters, and quiet Tuesday nights.</h2>
          </div>
          <Link to="/community" className="hidden sm:inline-block link-underline text-sm">Read all stories →</Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card-editorial">
            <div className="eyebrow mb-2">Meadowbrook, IL</div>
            <h3 className="font-display text-2xl mb-3">A five-person circle became forty in one calendar year.</h3>
            <p className="text-graphite">
              Douglas H. shares the "Tuesday Rule" that turned the Meadowbrook Chess Circle from a tiny gathering into a
              standing club: never cancel Tuesday, even for two players. Consistency, not scale, builds a chess club.
            </p>
            <img src={communityImg} alt="Silhouettes of players around a shared table" className="mt-6 rounded-lg border border-ink/10" width="600" height="400" loading="lazy" />
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-2">Letters to the Editor</div>
            <h3 className="font-display text-2xl mb-3">"After my wife passed, chess was the room I could still enter."</h3>
            <p className="text-graphite">
              A reader in New Hampshire writes about the role of a weekly library chess night in his first year of grief.
              We publish reader letters with permission, lightly edited, in the community section each month.
            </p>
            <Link to="/community" className="mt-6 inline-block link-underline text-sm">Read the archive →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-marble border-y border-ink/10">
        <div className="container-editorial py-20 sm:py-28">
          <div className="eyebrow mb-3 text-center">Reader Voices</div>
          <h2 className="font-display text-4xl sm:text-5xl text-center max-w-3xl mx-auto mb-16">
            Written slowly, read slowly, kept on the shelf.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(t => (
              <figure key={t.name} className="rounded-xl border border-ink/10 p-8 bg-ivory">
                <div className="text-4xl font-display text-gold leading-none mb-2" aria-hidden="true">"</div>
                <blockquote className="text-ink text-lg font-serif italic leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-ink/10 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-graphite">{t.detail}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-editorial py-20 sm:py-28">
        <div className="rounded-2xl bg-ink text-ivory p-10 sm:p-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="eyebrow text-ivory/60 mb-3">The Weekly Reading Letter</div>
            <h2 className="font-display text-3xl sm:text-4xl">One quiet email each Sunday.</h2>
            <p className="text-ivory/80 mt-4 max-w-md">
              One long article, one tactical puzzle, one grandmaster diagram. No advertising, no filler, no autoplay video.
              Unsubscribe from the footer of any issue.
            </p>
          </div>
          <form
            className="grid gap-3 sm:grid-cols-[1fr_auto]"
            onSubmit={(e) => {
              e.preventDefault()
              if (email.trim()) setSubscribed(true)
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-full px-6 py-3 bg-ivory text-ink placeholder:text-graphite/60 border border-ivory/20"
            />
            <button type="submit" className="rounded-full px-6 py-3 bg-goldSoft text-ink font-medium hover:bg-gold transition-colors">
              Subscribe
            </button>
            {subscribed && (
              <p className="text-sm text-goldSoft sm:col-span-2">Thank you. Your first letter arrives Sunday morning.</p>
            )}
            <p className="text-xs text-ivory/50 sm:col-span-2">
              We use your email only to send this letter. See our <Link to="/legal/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </form>
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
              by topic, not by strength.</p>
            </Accordion>
            <Accordion title="Do I need to know chess notation to read the articles?">
              <p>No, though it helps. Every diagram is captioned in plain language, and every move sequence is shown on a board
              image, not only in notation. Readers unfamiliar with algebraic notation will still follow every article; those who
              know it will move faster.</p>
            </Accordion>
            <Accordion title="Are these articles written by real people?">
              <p>Yes. Every article carries a byline. Our editors include a lifelong club player, a retired mathematics teacher,
              and a cognitive-health researcher. We do not publish AI-generated filler content, and we do not accept advertorial.</p>
            </Accordion>
            <Accordion title="Is there a paywall?">
              <p>No. Everything on Senior Chess Academy is free to read. We are supported by the weekly reading letter and a
              small number of ethical sponsors clearly disclosed at the bottom of any sponsored guide.</p>
            </Accordion>
            <Accordion title="Can I contribute a story or a club profile?">
              <p>We would be glad to hear from you. Please write to <a href="mailto:seniorchessacademy@gmail.com" className="link-underline">seniorchessacademy@gmail.com</a>{' '}
              with a short pitch — no draft required — and the editor will respond within a week.</p>
            </Accordion>
            <Accordion title="Do you cover online chess as well as over-the-board?">
              <p>Yes. Our tournament guides cover both. Many of our readers play online in the mornings and travel to weekend
              tournaments a few times a year. We take both formats seriously.</p>
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
