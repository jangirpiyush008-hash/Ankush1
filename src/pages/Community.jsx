import React from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Accordion from '../components/Accordion.jsx'
import communityImg from '../assets/images/community/gathering.svg'

const clubs = [
  {
    name: 'Meadowbrook Chess Circle',
    place: 'Meadowbrook Village · Illinois',
    story:
      'Founded by five residents in 2021 with a single donated board. Today the circle has forty active members, a rated monthly ladder, and a Wednesday teaching night for beginners. Their founding rule — never cancel Tuesday, even for two players — became a phrase we use often on this site.'
  },
  {
    name: 'Willow Ridge Sunday Study',
    place: 'Columbus · Ohio',
    story:
      'A quieter club, capped at eight members by design. They meet each Sunday afternoon in the community library room, study one classical game slowly over ninety minutes, and then play two casual games. The waitlist has been closed since 2022.'
  },
  {
    name: 'Silver Rooks of Portland',
    place: 'Portland · Oregon',
    story:
      'A public library chess night that grew into a formal club with USCF affiliation. Runs a small four-round tournament every quarter, open to residents 60+ from anywhere in the greater Portland area. Their post-tournament dinner is legendary.'
  }
]

const letters = [
  {
    from: 'Rachel W., 68 · New Hampshire',
    body:
      'After my husband passed, chess was the room I could still enter. The Tuesday library night became the first evening of the week where I looked forward to going somewhere. I do not want to overstate what a small chess club can do for a person, but I also do not want to understate it.'
  },
  {
    from: 'Peter M., 74 · Ontario',
    body:
      'I re-learned the game after a forty-year absence. Your article on how to read a classic chess book at sixty was exactly what I needed. I bought a used copy of My System from a bookshop in Kingston and I am reading one chapter each week, at a set-up board, at seven in the morning. Thank you.'
  },
  {
    from: 'Elena S., 61 · Barcelona',
    body:
      'I am a retired physician who never played chess as a child. Your beginner-senior opening guide gave me the courage to enter my first Sunday tournament last month. I did not win any games, but I understood every position. That is enough for now.'
  }
]

export default function Community() {
  return (
    <>
      <SEO
        title="Community — Chess clubs and reader letters"
        description="Retirement chess clubs, library chess nights, and letters from readers. Real stories from the wider community of adult chess players."
        path="/community"
      />
      <PageHeader
        eyebrow="Community"
        title="Clubs, letters, Tuesday nights."
        lead="The living community around Senior Chess Academy — retirement clubs, library chess circles, and the letters our readers send in each week."
      />

      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8 prose-editorial">
          <h2>Featured Clubs</h2>
          <p>
            Each month we profile a chess club that welcomes adult members. If you organize or attend a club you would like
            to see profiled, please write to us at{' '}
            <a href="mailto:seniorchessacademy@gmail.com" className="link-underline">seniorchessacademy@gmail.com</a> with a few
            sentences about how it began.
          </p>

          <div className="not-prose grid gap-6 mt-6">
            {clubs.map(club => (
              <Accordion key={club.name} title={`${club.name} — ${club.place}`}>
                <p>{club.story}</p>
              </Accordion>
            ))}
          </div>

          <h2 className="mt-14">Reader Letters</h2>
          <p>
            We publish a short selection of reader letters each month, lightly edited and with permission. If a letter would
            help another reader, we ask if we may reproduce it here.
          </p>
          <div className="not-prose grid gap-6 mt-6">
            {letters.map(l => (
              <figure key={l.from} className="border-l-2 border-gold pl-5 py-2">
                <blockquote className="font-serif italic text-lg text-ink">{l.body}</blockquote>
                <figcaption className="mt-3 text-sm text-graphite">— {l.from}</figcaption>
              </figure>
            ))}
          </div>

          <h2 className="mt-14">Start a Club Where You Are</h2>
          <p>
            Almost every retirement community, library, and senior center has three chess players who do not yet know about
            each other. The first job of a founder is not teaching chess — it is introducing those three people.
          </p>
          <p>
            Our field guide on <em>How to Start a Chess Club in Your Retirement Community</em> walks through the first six
            months in step-by-step detail: the interest flyer, the community-board notice, the donated boards, the meeting
            cadence, the first tournament, and the point at which you should apply for USCF club affiliation.
          </p>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <img src={communityImg} alt="Silhouettes of players around a shared table" className="rounded-2xl border border-ink/10 shadow-card w-full" width="600" height="400" loading="lazy" />
          <div className="card-editorial">
            <div className="eyebrow mb-3">Submit a story</div>
            <p className="text-sm text-graphite mb-4">
              Runs a club? Attend a library night? Have a chess story worth telling? We publish community stories every month.
            </p>
            <a href="mailto:seniorchessacademy@gmail.com" className="btn-primary text-xs">Write to the editor</a>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">Field guide</div>
            <p className="text-sm text-graphite">
              Download-friendly PDF of our six-month plan for starting a chess club in a retirement community. Free, no email
              required. See the article in <em>Community Stories</em>.
            </p>
          </div>
        </aside>
      </section>
    </>
  )
}
