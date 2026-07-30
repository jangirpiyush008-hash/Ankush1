import React, { useState } from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Accordion from '../components/Accordion.jsx'
import img from '../assets/images/puzzles/puzzle.jpg'

const puzzles = [
  {
    id: 'p1',
    theme: 'Knight Fork',
    prompt: 'White to move. The knight on f5 sees three critical squares. Which move wins material immediately?',
    solution:
      '1.Nxg7! is not the move — it wins a pawn only. The correct move is 1.Ne7+, forking king on g8 and queen on c8. After 1...Kh8 2.Nxc8 White is up a full queen for a knight. This is the classic royal fork; always look for it when a knight can reach a square that touches both king and queen.'
  },
  {
    id: 'p2',
    theme: 'Back-Rank Mate',
    prompt: 'Black has just played …h6 to create luft, but they were too slow. Find the mate in two.',
    solution:
      '1.Qe8+! Rxe8 2.Rxe8#. The queen sacrifice deflects the defender, and the rook delivers back-rank mate. Whenever your opponent has no luft and their king is pinned to the back rank, always ask: is there a heavy-piece sacrifice that clears the defender?'
  },
  {
    id: 'p3',
    theme: 'The Trebuchet',
    prompt: 'White pawn on d4, White king on d5. Black pawn on d6, Black king on d7. Whose move is it — and does that player win or draw?',
    solution:
      'This is the model trebuchet: a mutual zugzwang. Whoever moves loses. If White is to move, 1.Kxd6 stalemate is the only try, and it fails — actually the correct answer is that both sides can only lose by moving. Study the exact geometry: the position is a draw with best play only if it is White to move (loses a pawn) but White cannot avoid losing the pawn. This is the endgame that decides more tournament games than any other pawn ending.'
  },
  {
    id: 'p4',
    theme: 'Windmill',
    prompt: 'From Torre – Lasker, Moscow 1925. White to move. The famous windmill combination — find the first move.',
    solution:
      '1.Bf6! begins the windmill. After 1…Qxh5 2.Rxg7+ Kh8 3.Rxf7+ Kg8 4.Rg7+ Kh8 5.Rxb7+ ... White collects a barrel of material. This is not a puzzle to memorize; it is a pattern to internalize. Once you see the windmill mechanism — discovered check, capture, discovered check, capture — you will spot the seeds of it in your own games.'
  },
  {
    id: 'p5',
    theme: 'Deflection',
    prompt: 'White has an isolated queen pawn and a well-placed knight. Black defends a critical square with the queen. Find the deflection.',
    solution:
      '1.Rc8! deflects the queen off the defense of e5, after which 2.Nxe5 wins a decisive pawn. The tactical family of deflection — attacking a defender to remove it from its defensive duty — appears in nearly every middlegame position we study.'
  }
]

export default function ChessPuzzles() {
  const [reveal, setReveal] = useState({})
  const toggle = (id) => setReveal(r => ({ ...r, [id]: !r[id] }))

  return (
    <>
      <SEO
        title="Chess Puzzles — Daily Tactics for Adult Study"
        description="A quiet, structured page of daily chess puzzles with detailed solutions. Knight forks, back-rank mates, trebuchets, windmills, deflections."
        path="/chess-puzzles"
      />
      <PageHeader
        eyebrow="Reading Room"
        title="Puzzles at a real board."
        lead="A slow, structured page of daily chess puzzles with full solutions. Set them up on a board. Solve them with your hand on your chin. Move on when confident."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8 prose-editorial">
          <img src={img} alt="A tactical puzzle diagram with a knight fork motif" className="rounded-2xl border border-ink/10 shadow-card w-full" width="600" height="400" loading="lazy" />

          <h2>How to solve puzzles well</h2>
          <p>
            Almost every improving adult solves puzzles badly. They click through positions quickly, guess, click again.
            That is not tactical training; it is a click habit. Puzzle-solving that actually raises your tactical strength
            follows five rules:
          </p>
          <ol className="list-decimal pl-6 text-graphite space-y-2">
            <li>Set up the position on a real board when possible.</li>
            <li>Identify all checks, captures, and threats — for both sides — before calculating.</li>
            <li>State the candidate moves aloud, or write them down. Aim for two or three, not one.</li>
            <li>Calculate one candidate to a firm conclusion before considering the next.</li>
            <li>If you solve it in under twenty seconds and are not certain why the solution works, treat it as unsolved.</li>
          </ol>

          <div className="not-prose grid gap-4 mt-8">
            {puzzles.map(p => (
              <div key={p.id} className="rounded-xl border border-ink/10 bg-marble p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <div className="eyebrow">{p.theme}</div>
                  <button
                    type="button"
                    onClick={() => toggle(p.id)}
                    className="text-xs uppercase tracking-widest text-ink link-underline"
                    aria-expanded={!!reveal[p.id]}
                    aria-controls={`sol-${p.id}`}
                  >
                    {reveal[p.id] ? 'Hide solution' : 'Show solution'}
                  </button>
                </div>
                <p className="text-ink font-serif italic">{p.prompt}</p>
                <div id={`sol-${p.id}`} className={`accordion-content mt-3 ${reveal[p.id] ? 'open' : ''}`}>
                  <div>
                    <div className="pt-3 border-t border-ink/10 text-graphite">
                      {p.solution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-14">A tactics reading plan</h2>
          <p>
            Solve five puzzles a day at your current level. Not fifty. Not fifteen. Five, with the discipline described
            above. In one calendar year — 1,825 well-solved puzzles — you will play like a different tactician.
          </p>

          <div className="not-prose mt-8">
            <Accordion title="Which puzzle books do you recommend?">
              <p>· <em>Chess Tactics for Champions</em> (Susan Polgar) — the correct first book.</p>
              <p>· <em>1001 Winning Chess Sacrifices and Combinations</em> (Fred Reinfeld) — an old classic, still worth its weight.</p>
              <p>· <em>The Woodpecker Method</em> (Axel Smith) — advanced. Buy it in your second year, not your first.</p>
            </Accordion>
            <Accordion title="Should I use a puzzle app?">
              <p>Yes, in moderation. Use an app for daily reps and a physical book for weekend deep work. Do not use only an app; the interaction habits it builds are the wrong ones for tournament chess.</p>
            </Accordion>
          </div>
        </div>
        <aside className="lg:col-span-4 space-y-6">
          <div className="card-editorial">
            <div className="eyebrow mb-3">In this room</div>
            <ul className="space-y-2 text-sm">
              <li>· Five daily puzzles with solutions</li>
              <li>· How to solve well</li>
              <li>· A one-year tactics plan</li>
              <li>· Recommended books</li>
              <li>· When to use apps</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
