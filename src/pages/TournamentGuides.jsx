import React from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Accordion from '../components/Accordion.jsx'
import img from '../assets/images/tournaments/hall.svg'

export default function TournamentGuides() {
  return (
    <>
      <SEO
        title="Tournament Guides — Etiquette and Preparation for OTB Chess"
        description="A calm, adult guide to over-the-board tournament chess. Etiquette, time control, the tournament hall, and how to prepare in the week before an event."
        path="/tournament-guides"
      />
      <PageHeader
        eyebrow="Reading Room"
        title="The tournament hall."
        lead="A calm, adult guide to over-the-board tournament chess. Etiquette, preparation, and the small courtesies that mark you as a seasoned competitor from move one."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8 prose-editorial">
          <img src={img} alt="A silent tournament hall with tables, clocks, and warm lighting" className="rounded-2xl border border-ink/10 shadow-card w-full" width="600" height="400" loading="lazy" />

          <h2>Chess etiquette and tournament basics</h2>
          <p>
            Your first tournament is easier than you think. This guide covers the practical mechanics and the courtesies
            that a lifetime club player carries with them.
          </p>

          <h3>Before the round</h3>
          <ul>
            <li>Arrive twenty minutes early. Find the pairings on the wall — you are looking for your board number and colour.</li>
            <li>Set up your side of the board. White pieces closest to the White player. The queen goes on her colour.</li>
            <li>Prepare your scoresheet: name, date, event, and your colour at the top.</li>
            <li>Silence and switch off your phone completely. Every federation forfeits games for phone noise; this is not a warning, it is a rule.</li>
          </ul>

          <h3>The handshake</h3>
          <p>
            When your opponent arrives, stand, offer your hand, and introduce yourself briefly. This is not a formality
            invented by us; it is a genuine courtesy that quiets both players and marks the beginning of the game as
            distinct from everything around it.
          </p>

          <h3>During the game</h3>
          <ul>
            <li>Move first, press the clock second, record the move third — always in that order.</li>
            <li>Write your own move before your opponent's move, or immediately after, according to federation rule. Modern USCF and FIDE rules require the move to be written after the move is played, not before.</li>
            <li>Do not adjust pieces unless you say "I adjust" (or "j'adoube") first. This is not a superstition; it is a rule.</li>
            <li>If you touch a piece, you must move it. If you release a piece on a legal square, the move stands. Both rules are strict.</li>
            <li>Do not offer a draw when it is not your turn to move. Offers are made after your move, before pressing the clock.</li>
          </ul>

          <h3>Managing the clock</h3>
          <p>
            The clock is a tool, not an adversary. Two habits define good time management. First, after every ten moves,
            take a small breath and evaluate: am I on pace? Second, when your clock drops below ten minutes, switch modes:
            fewer candidate moves, faster decisions, more general reasoning, less concrete calculation.
          </p>

          <h3>After the game</h3>
          <p>
            Sign your scoresheet, sign your opponent's scoresheet, and shake hands. If your opponent wants to briefly analyze
            the game — a wonderful custom — join them if you have time. Do not gloat, do not sulk, do not make excuses. The
            game is over; the room is not.
          </p>

          <h2>Preparing in the week before a tournament</h2>

          <div className="not-prose grid gap-4 mt-6">
            <Accordion title="Seven days before">
              <p>Play three long games at the time control you will use in the tournament. Ideally with a friend, ideally with clocks. Do not experiment with new openings.</p>
            </Accordion>
            <Accordion title="Five days before">
              <p>Review your opening repertoire — main lines only, not sidelines. If you have not played a line in the last three months, spend twenty minutes on it. Do not add new openings.</p>
            </Accordion>
            <Accordion title="Three days before">
              <p>Twenty minutes of endgame reading. Review the Lucena and Philidor rook positions. Sleep well.</p>
            </Accordion>
            <Accordion title="One day before">
              <p>Do not study chess. Take a long walk. Eat a familiar dinner. Set out your clothes for the morning. Sleep early.</p>
            </Accordion>
            <Accordion title="The morning of the round">
              <p>Eat a breakfast you eat regularly. Coffee if you drink it, water always. Arrive early. Walk the tournament hall once. Sit down at your board five minutes before the round.</p>
            </Accordion>
          </div>

          <h2 className="mt-12">Common questions from first-time competitors</h2>

          <div className="not-prose grid gap-4 mt-6">
            <Accordion title="What if I make an illegal move?">
              <p>Modern federation rules treat the first illegal move as a warning or, in some events, an automatic time penalty. The second illegal move loses the game. Do not panic. Call the arbiter, do not attempt to fix it silently.</p>
            </Accordion>
            <Accordion title="Do I have to accept a draw offer?">
              <p>No. You are always free to decline. Decline politely: a small shake of the head is enough. Do not comment on the offer during the game.</p>
            </Accordion>
            <Accordion title="Can I leave the board mid-game?">
              <p>Yes — briefly. Bathroom breaks are allowed on your opponent's time. Do not take your phone. Do not consult anyone. Do not, under any circumstances, discuss the position with anyone.</p>
            </Accordion>
            <Accordion title="What is a 'bye'?">
              <p>A bye is a round in which you do not play — usually because of an odd number of players or a personal request. A full-point bye counts as a win; a half-point bye counts as a draw. Ask the tournament director if your event permits requested byes.</p>
            </Accordion>
            <Accordion title="What if the tournament director makes a decision I disagree with?">
              <p>You may appeal, but appeals are usually decided by a small committee at the event. Appeal only when a rule was clearly misapplied — not when you disagree with a judgment call. Grace under a bad ruling is a mark of a mature competitor.</p>
            </Accordion>
          </div>

          <blockquote>
            "There is a particular quiet in a tournament hall that you will not find anywhere else in modern life."
            <br/><span className="not-italic text-sm text-graphite">— from a reader letter, printed in the community section</span>
          </blockquote>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="card-editorial">
            <div className="eyebrow mb-3">In this room</div>
            <ul className="space-y-2 text-sm">
              <li>· The tournament hall</li>
              <li>· The handshake</li>
              <li>· Managing the clock</li>
              <li>· A seven-day preparation plan</li>
              <li>· First-timer questions</li>
              <li>· Etiquette, in full</li>
            </ul>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">Companion articles</div>
            <ul className="space-y-2 text-sm">
              <li>· Tournament Etiquette for First-Timers</li>
              <li>· Chess Etiquette and Tournament Basics</li>
              <li>· A Twelve-Week Endgame Reading Plan</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
