import React from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Accordion from '../components/Accordion.jsx'
import communityImg from '../assets/images/community/gathering.jpg'

export default function Community() {
  return (
    <>
      <SEO
        title="Community — Chess clubs, libraries, and reader correspondence"
        description="Guidance for starting and sustaining an adult chess club at a library, community centre, or retirement community. Editorial resources and reader correspondence."
        path="/community"
      />
      <PageHeader
        eyebrow="Community"
        title="Clubs, libraries, Tuesday nights."
        lead="Editorial resources for the wider community of adult chess players — how to start a club, how to sustain one, and how to write to us."
      />

      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8 prose-editorial">
          <h2>How chess clubs form in adult communities</h2>
          <p>
            Almost every retirement community, library, and senior centre has three chess players who do not yet know
            about each other. The first job of a founder is not teaching chess — it is introducing those three people.
            Everything else follows.
          </p>
          <p>
            The pattern we consistently see when adult chess clubs succeed is not scale or funding but consistency: a
            recurring day of the week, held at the same time, in the same room, that never gets cancelled — even for
            two players. It is the recurrence that builds the habit that builds the club.
          </p>

          <h2>A field-guide summary — starting a club</h2>
          <p>
            The full six-month field guide is available in the <em>Community Stories</em> section of the journal. In
            summary:
          </p>
          <ul>
            <li><strong>Weeks 1–2.</strong> Post a plain-language interest flyer in the mailroom or community board of your library, community centre, or retirement community. Include a specific date, time, and location for the first meeting — not a survey.</li>
            <li><strong>Weeks 3–4.</strong> Hold the first meeting. Bring one board of your own; do not require attendees to bring theirs. Set the second meeting date before the first one ends.</li>
            <li><strong>Months 2–3.</strong> Establish a recurring day and time. Never cancel it, even for two players. Ask a local school or hobby shop about donating a small stock of extra boards.</li>
            <li><strong>Months 4–6.</strong> Introduce a light structure — a five-minute puzzle read at the start of each meeting, an optional casual ladder, or a monthly slow game with post-game analysis.</li>
          </ul>

          <h2>Suggested reading before you start</h2>
          <p>
            Two short articles in our journal are particularly practical for founders:
          </p>
          <ul>
            <li><em>How to Start a Chess Club in Your Retirement Community</em> — the full six-month field guide.</li>
            <li><em>Chess Etiquette and Tournament Basics</em> — a reference many new clubs share with members before their first internal event.</li>
          </ul>

          <h2>Reader correspondence</h2>
          <p>
            We invite letters from readers — questions about articles, corrections, and stories about the clubs you run
            or attend. Letters are read by the editor and answered by return email. If a letter contains a general
            question that other readers would benefit from, we may ask if we can quote from it, always with permission
            and anonymised at the writer's preference.
          </p>
          <p>
            Please write to us at{' '}
            <a href="mailto:seniorchessacademy@gmail.com" className="link-underline">seniorchessacademy@gmail.com</a> or by post
            to Senior Chess Academy, 390 Maple Grove Ln, Columbus, OH 43215, United States.
          </p>

          <div className="not-prose grid gap-4 mt-8">
            <Accordion title="Do you have a directory of chess clubs?">
              <p>Not at present. The most reliable directories in the United States are maintained by the US Chess
              Federation (uschess.org) and by many state chess associations. Public libraries also frequently list
              regular chess meetings in their community calendars.</p>
            </Accordion>
            <Accordion title="Can I submit a story about my club?">
              <p>Yes. Please write to the editor with a few sentences about how the club began, when it meets, and what
              makes it distinctive. We do not accept photographs of identifiable individuals without their written
              permission.</p>
            </Accordion>
            <Accordion title="Will you list my club on the site?">
              <p>We plan to introduce a small, carefully-vetted directory of adult chess clubs in the future. If you
              would like your club to be considered for that directory when it launches, please write in and we will
              contact you when it opens.</p>
            </Accordion>
            <Accordion title="Do you provide funding or grants for chess clubs?">
              <p>No. We are an editorial publication and do not provide funding. In the United States, US Chess and
              some state affiliates provide small grants to certain qualifying programmes; contact them directly.</p>
            </Accordion>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <img src={communityImg} alt="Chess pieces arranged on a shared board" className="rounded-2xl border border-ink/10 shadow-card w-full" width="1600" height="1067" loading="lazy" />
          <div className="card-editorial">
            <div className="eyebrow mb-3">Write to the editor</div>
            <p className="text-sm text-graphite mb-4">
              Questions, corrections, or a note about your club. We reply to every letter.
            </p>
            <a href="mailto:seniorchessacademy@gmail.com" className="btn-primary text-xs">Email the editor</a>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">Useful outside links</div>
            <ul className="space-y-2 text-sm text-graphite">
              <li>· US Chess Federation (uschess.org)</li>
              <li>· FIDE — International Chess Federation (fide.com)</li>
              <li>· Your local public library's community calendar</li>
            </ul>
            <p className="text-xs text-graphite mt-3">Links to external websites are provided for reference; Senior Chess Academy is not affiliated with these organisations.</p>
          </div>
        </aside>
      </section>
    </>
  )
}
