import React from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Accordion from '../components/Accordion.jsx'
import img from '../assets/images/braintraining/mind.jpg'

export default function EndgameTechniques() {
  return (
    <>
      <SEO
        title="Endgame Techniques — King, Pawn, and Rook Fundamentals"
        description="The endgame patterns every adult club player should know: king and pawn, rook endings, opposition, the rule of the square, and the technique that decides tournaments."
        path="/endgame-techniques"
      />
      <PageHeader
        eyebrow="Reading Room"
        title="The classroom of chess."
        lead="If you understand endgames, you understand chess. If you do not, no opening study will ever compensate. This reading room is our slow, patient course in the fundamentals."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8 prose-editorial">
          <img src={img} alt="Illustration of a knight motif and study desk" className="rounded-2xl border border-ink/10 shadow-card w-full" width="600" height="400" loading="lazy" />

          <h2>Why endgames come first</h2>
          <p>
            Capablanca is famous for advising students to study endgames before openings. The reason is not tradition. It is
            that endgames are the only phase of the game with a small number of pieces and clear, provable answers. When you
            understand a king-and-pawn endgame, you understand it in the way you understand a multiplication table. There is
            no fog. That clarity teaches the mind what to look for in the more crowded phases.
          </p>

          <h2>Improving endgame thinking: the three foundational patterns</h2>

          <h3>1. The rule of the square</h3>
          <p>
            The rule of the square answers a single question: can a lone king catch a passed pawn? Draw a square from the
            pawn to the queening square. If the defending king can enter the square on its move, it catches the pawn. If not,
            the pawn queens. This is the first pattern to learn, and the pattern most often forgotten under time pressure.
          </p>

          <h3>2. The opposition</h3>
          <p>
            The opposition is the rule that decides most king-and-pawn endings. Two kings stand on the same file, rank, or
            diagonal, with an odd number of squares between them. The player whose move it is loses ground. Direct
            opposition, distant opposition, and diagonal opposition are all versions of the same idea. Study the direct
            opposition first, until you can never forget it.
          </p>

          <h3>3. The trebuchet</h3>
          <p>
            The trebuchet is a mutual zugzwang position with kings and a single pawn each. It decides more games than any
            other endgame motif because it lies at the heart of every king-and-pawn race. Once you can set it up from memory
            and calculate both sides to a win, you have crossed a small but real chess threshold.
          </p>

          <h2>Rook endings: the largest and most important family</h2>
          <p>
            More than half of all endgames in serious tournament play are rook endings. Rook endings are famously drawish
            because rooks defend so actively, but the drawishness is technical: it depends on knowing the exact defensive
            method. If you do not know it, rook endings become quietly hopeless.
          </p>
          <p>
            Our recommended rook-ending curriculum, in order:
          </p>
          <ul>
            <li>The Lucena position (winning technique: building a bridge)</li>
            <li>The Philidor position (drawing technique: the third-rank defense)</li>
            <li>The short-side / long-side defense</li>
            <li>Rook against two connected pawns on the sixth rank</li>
            <li>Rook and knight-pawn endings</li>
            <li>Rook and rook-pawn endings (the famously drawn one)</li>
          </ul>

          <h2>How to practice endgames without losing an evening</h2>
          <p>
            Endgame study has a reputation for tedium. It should not. Fifteen minutes at a set-up board, twice a week, is
            enough to change your tournament results within a year. The trick is to practice specific positions to a firm
            result, not to browse.
          </p>

          <div className="not-prose grid gap-4 mt-6">
            <Accordion title="A twelve-week endgame reading plan">
              <p><strong>Weeks 1–2.</strong> Rule of the square. Direct opposition. Drill both to reflex.</p>
              <p><strong>Weeks 3–4.</strong> Distant and diagonal opposition. The trebuchet, from memory.</p>
              <p><strong>Weeks 5–6.</strong> Passed pawns: outside passed pawn, protected passed pawn, connected passed pawns.</p>
              <p><strong>Weeks 7–8.</strong> The Lucena position. The Philidor position. Repeat until permanent.</p>
              <p><strong>Weeks 9–10.</strong> Rook and knight-pawn. Rook and rook-pawn. The short-side defense.</p>
              <p><strong>Weeks 11–12.</strong> Bishop endings: the wrong-coloured bishop, opposite-colour bishops, same-colour bishops. Introduction only.</p>
            </Accordion>
            <Accordion title="Books we recommend, in reading order">
              <p>1. <em>Silman's Complete Endgame Course</em> (Jeremy Silman) — a rating-appropriate, kind first book.</p>
              <p>2. <em>Endgame Manual</em> (Mark Dvoretsky) — the definitive reference. Read one section per week for a year.</p>
              <p>3. <em>100 Endgames You Must Know</em> (Jesús de la Villa) — the most practical of the three, and a wonderful revision after Dvoretsky.</p>
            </Accordion>
            <Accordion title="Common endgame mistakes we see in club play">
              <p>· Trading queens without checking whether the resulting pawn endgame is actually winning.</p>
              <p>· Advancing the king before centralizing it.</p>
              <p>· Passive rook placement in a rook ending (rooks belong on the seventh rank when defending, on the eighth when attacking).</p>
              <p>· Playing for a "small edge" when the position is objectively drawn — squeezing dry positions costs more games than it wins.</p>
              <p>· Time-trouble panic on move 40. Endgame study is time-management training.</p>
            </Accordion>
          </div>

          <h2>Endgame etiquette</h2>
          <p>
            Two courtesies mark the experienced player in an endgame. First, when your opponent is calculating a critical
            position, sit still. Do not adjust pieces, do not sigh, do not offer a draw. Second, if the position is dead
            drawn and both players know it, offer the draw. Do not squeeze another twenty moves out of a colleague. Chess
            is a long game with the same people; treat them as you would like to be treated.
          </p>
        </div>
        <aside className="lg:col-span-4 space-y-6">
          <div className="card-editorial">
            <div className="eyebrow mb-3">In this room</div>
            <ul className="space-y-2 text-sm">
              <li>· Why endgames come first</li>
              <li>· The rule of the square</li>
              <li>· Opposition, opposition, opposition</li>
              <li>· The trebuchet, in your bones</li>
              <li>· Rook endings — the big family</li>
              <li>· A twelve-week reading plan</li>
              <li>· Common club mistakes</li>
              <li>· Etiquette in a long ending</li>
            </ul>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">Companion articles</div>
            <ul className="space-y-2 text-sm">
              <li>· Endgame Fundamentals: King & Pawn</li>
              <li>· Positional Play for Improvers</li>
              <li>· A Fifteen-Minute Daily Routine</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
