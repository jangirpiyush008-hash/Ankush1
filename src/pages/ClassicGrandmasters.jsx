import React from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Accordion from '../components/Accordion.jsx'
import img from '../assets/images/grandmasters/portrait.svg'

const masters = [
  {
    name: 'José Raúl Capablanca',
    years: '1888 – 1942',
    style: 'Clarity, positional inevitability, endgame simplicity.',
    body:
      'The Cuban world champion played chess the way a good cabinetmaker builds a table: no wasted motion, no ornament, no bravado. His games are the model text for adult students. Read one Capablanca game a week, slowly, for a year, and your understanding will be measurably deeper.'
  },
  {
    name: 'Anatoly Karpov',
    years: '1951 – present',
    style: 'Prophylaxis, quiet pressure, small advantages compounded.',
    body:
      'Karpov teaches the art of restricting the opponent. His middlegames are famously calm. Adult students often prefer him to Kasparov not because he is easier — he is not — but because his lessons are more useful at a club level. Learn his method against the isolated queen pawn first.'
  },
  {
    name: 'Vasily Smyslov',
    years: '1921 – 2010',
    style: 'Harmony of pieces, exquisite endgame technique.',
    body:
      'Smyslov played chess the way a musician plays a fugue. His games have a distinctive balance: no piece is out of place, no plan is rushed. His rook endings are among the most instructive in the tournament literature.'
  },
  {
    name: 'Tigran Petrosian',
    years: '1929 – 1984',
    style: 'Prophylactic thinking taken to its extreme.',
    body:
      'Petrosian is the patron saint of adult study. He thought about his opponent\'s ideas before his own, and made moves that quietly closed doors. His games are difficult to appreciate on first reading and reward the tenth.'
  },
  {
    name: 'Emanuel Lasker',
    years: '1868 – 1941',
    style: 'Practical psychology, defensive resource, endless resilience.',
    body:
      'Lasker held the world title for twenty-seven years, longer than any other champion. His games are less admired for beauty than for practical strength. Adult students returning to chess after a long absence will find him deeply sympathetic.'
  },
  {
    name: 'Ulf Andersson',
    years: '1951 – present',
    style: 'The modern endgame virtuoso.',
    body:
      'Andersson is the endgame master of the last fifty years. His games teach the true modern method of slowly, patiently squeezing dry positions. If you want to raise your endgame ceiling, spend a month with his collected games.'
  }
]

export default function ClassicGrandmasters() {
  return (
    <>
      <SEO
        title="Classic Grandmasters — Capablanca, Karpov, Smyslov, Petrosian"
        description="A quiet reading room on the classic grandmasters whose games most reward adult study: Capablanca, Karpov, Smyslov, Petrosian, Lasker, and Andersson."
        path="/classic-grandmasters"
      />
      <PageHeader
        eyebrow="Reading Room"
        title="The players we return to."
        lead="A quiet reading room on the classical grandmasters whose games reward slow, adult study. Portraits, playing styles, and a recommended reading order."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8 prose-editorial">
          <img src={img} alt="Silhouette portrait study in the style of an old grandmaster book" className="rounded-2xl border border-ink/10 shadow-card w-full" width="600" height="400" loading="lazy" />

          <h2>Classic grandmasters and their styles</h2>
          <p>
            Studying a grandmaster's games is not hero worship. It is a way of borrowing another person's judgment on real
            positions for a few evenings each week. Six grandmasters, in particular, we return to again and again — because
            their games teach clearly, and because their styles remain applicable to adult club play in a way many modern
            games do not.
          </p>

          <div className="not-prose grid gap-4 mt-6">
            {masters.map(m => (
              <Accordion key={m.name} title={`${m.name} (${m.years})`} cta="View study">
                <p className="italic text-graphite">{m.style}</p>
                <p>{m.body}</p>
              </Accordion>
            ))}
          </div>

          <h2 className="mt-14">A recommended reading order</h2>
          <p>
            Do not begin with Kasparov or Fischer, however tempting. Their games are too sharp for a first slow reading. Our
            recommended order for adult students:
          </p>
          <ol className="list-decimal pl-6 text-graphite space-y-2">
            <li>Capablanca — the clarity of intent.</li>
            <li>Smyslov — piece harmony and rook endings.</li>
            <li>Karpov — prophylaxis and small advantages.</li>
            <li>Petrosian — prophylactic thinking at its extreme.</li>
            <li>Lasker — psychological practicality.</li>
            <li>Andersson — the modern endgame method.</li>
          </ol>
          <p>
            Do not rush. One player, at the pace of one game per week, is a year's study. That year will change your chess.
          </p>

          <h2>How to study a grandmaster game</h2>
          <p>
            Set up a real board. Read the game once through, unaided, playing every move on the board. Read it a second time
            with the annotations. Set the book down and play the entire game from memory. Write, in one paragraph, the plan
            that both sides pursued. Only then, if you are curious, run an engine check — but not before you have formed your
            own understanding.
          </p>

          <blockquote>
            "The greatest teacher is a well-annotated game played through slowly at a real board. Not a video. Not a database.
            A board, a book, a quiet room."
            <br/><span className="not-italic text-sm text-graphite">— from the introduction to our Capablanca reading list</span>
          </blockquote>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="card-editorial">
            <div className="eyebrow mb-3">In this room</div>
            <ul className="space-y-2 text-sm">
              <li>· Capablanca and clarity</li>
              <li>· Karpov and restriction</li>
              <li>· Smyslov and harmony</li>
              <li>· Petrosian and prophylaxis</li>
              <li>· Lasker's psychology</li>
              <li>· Andersson's endgames</li>
              <li>· A slow reading order</li>
            </ul>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">Companion articles</div>
            <ul className="space-y-2 text-sm">
              <li>· Capablanca and the Discipline of Simplicity</li>
              <li>· How to Read a Classic Chess Book</li>
              <li>· Positional Play for Improvers</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
