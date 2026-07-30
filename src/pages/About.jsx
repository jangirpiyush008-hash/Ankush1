import React from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import studyImg from '../assets/images/hero/study.svg'

export default function About() {
  return (
    <>
      <SEO
        title="About — Senior Chess Academy"
        description="The founder story, editorial mission, and quiet publishing philosophy behind Senior Chess Academy, a chess strategy and brain-training publication for adults 50+."
        path="/about"
      />
      <PageHeader
        eyebrow="About"
        title="A publication for the patience the game rewards."
        lead="Senior Chess Academy is a small editorial publication written for adults 50 and above. We publish long-form guides on chess strategy, endgames, and cognitive training — slowly, and in full."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7 prose-editorial">
          <h2>Why we started</h2>
          <p>
            Senior Chess Academy began at a walnut kitchen table in Columbus, Ohio, in the winter of 2019. Our founder,
            Eleanor Hartwell, had recently retired from a thirty-two-year career as a high-school mathematics teacher. She
            had been a club-level chess player since her twenties, and after retiring she found herself with the patience
            required to study the game seriously for the first time.
          </p>
          <p>
            She also found herself frustrated. The modern chess internet — puzzles on phones, engine evaluations in tabs,
            speed videos — was designed for a very different reader. She wanted long, quiet articles she could print out
            and read at her board, with the coffee going cold beside her. She wanted the writing that used to appear in
            <em> Chess Life</em> in the seventies: patient, respectful, unhurried.
          </p>
          <p>
            So she began writing them herself. In the first year, three friends helped edit the articles. In the second
            year, we launched a small weekly reading letter. Today, Senior Chess Academy has a modest but committed
            audience of readers in their fifties, sixties, seventies, and eighties across the United States, Canada, the
            United Kingdom, and beyond.
          </p>

          <h2>Our editorial mission</h2>
          <p>
            We publish chess writing for adults who take reading seriously. Our editorial principles are unfashionable but
            simple:
          </p>
          <ul>
            <li><strong>Long-form is a feature, not a flaw.</strong> Our articles are longer than the internet average because our readers wanted them that way.</li>
            <li><strong>Every article has a byline.</strong> Real people, with real experience, take responsibility for what they publish here.</li>
            <li><strong>No AI-generated filler.</strong> Our writers use a computer to check spelling and set up diagrams. They do not use large language models to generate content.</li>
            <li><strong>No advertising in articles.</strong> Sponsorship, when it exists, is disclosed at the bottom of the piece.</li>
            <li><strong>Free to read.</strong> Every article, every guide, every legal page. No paywall.</li>
          </ul>

          <h2>Who this is for</h2>
          <p>
            We write specifically for adults 50 and above who are interested in chess as a lifelong intellectual discipline.
            Some of our readers are lifelong club players returning after decades away from the board. Some are complete
            beginners approaching the game for the first time in retirement. Some are teachers of chess in community
            centers, libraries, and retirement homes. All are welcome.
          </p>
          <p>
            We are also read by adult children who set up subscriptions for parents and grandparents. If that describes you,
            thank you. Our Sunday reading letter is written with your family member in mind.
          </p>

          <h2>The people behind the publication</h2>
          <p>
            Our small editorial team includes Eleanor Hartwell (founder and senior editor, retired mathematics teacher, USCF
            1780), Douglas Ainsworth (community editor, USCF 1620, retired librarian), Dr. Ari Feld (contributing editor
            on cognitive-health topics, PhD in cognitive psychology), and Marta Reyes (positional-play columnist, FIDE 2135,
            former national team of Spain, retired).
          </p>
          <p>
            Additional contributors — retired grandmaster coaches, chess-club organizers, and readers with stories to tell —
            appear regularly with individual bylines. We do not publish anonymous articles.
          </p>

          <h2>How we are funded</h2>
          <p>
            Senior Chess Academy is funded primarily by voluntary reader contributions and a small number of ethical
            sponsorships. Sponsored articles are labeled at the top and bottom of the piece. We do not accept sponsorships
            from products we would not recommend to our own families. We have declined sponsorships from three sports-betting
            companies and one supplement brand since we launched.
          </p>

          <h2>Where we are</h2>
          <p>
            Senior Chess Academy is registered in Columbus, Ohio. Our editorial office is small; we do not receive drop-in
            visitors, but we do reply to every letter that arrives at 390 Maple Grove Ln, Columbus, OH 43215 — usually within
            a week.
          </p>
          <blockquote>
            "It is the reader we are writing for. Not the algorithm, not the sponsor, not the metric — the reader. If we hold
            to that, everything else falls into place."
            <br/><span className="not-italic text-sm text-graphite">— Eleanor Hartwell, from the first editor's letter, 2019</span>
          </blockquote>
        </div>
        <aside className="lg:col-span-5 space-y-6">
          <img src={studyImg} alt="A wooden study desk with an open chess book, reading lamp, and a small board" className="rounded-2xl border border-ink/10 shadow-card w-full" width="800" height="600" loading="lazy" />
          <div className="card-editorial">
            <div className="eyebrow mb-3">Editorial office</div>
            <address className="not-italic text-graphite">
              Senior Chess Academy<br/>
              390 Maple Grove Ln<br/>
              Columbus, OH 43215<br/>
              United States
            </address>
            <div className="mt-4 pt-4 border-t border-ink/10 text-graphite">
              <div>Email: <a className="link-underline text-ink" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a></div>
              <div>Phone: <a className="link-underline text-ink" href="tel:+16144287619">(614) 428-7619</a></div>
            </div>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">At a glance</div>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between"><dt>Founded</dt><dd className="text-graphite">2019</dd></div>
              <div className="flex justify-between"><dt>Editorial team</dt><dd className="text-graphite">Four editors</dd></div>
              <div className="flex justify-between"><dt>Reading letter</dt><dd className="text-graphite">Weekly, Sunday</dd></div>
              <div className="flex justify-between"><dt>Paywall</dt><dd className="text-graphite">None</dd></div>
              <div className="flex justify-between"><dt>AI-generated content</dt><dd className="text-graphite">None</dd></div>
            </dl>
          </div>
        </aside>
      </section>
    </>
  )
}
