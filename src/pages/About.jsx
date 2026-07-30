import React from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import studyImg from '../assets/images/hero/study.jpg'

export default function About() {
  return (
    <>
      <SEO
        title="About — Senior Chess Academy"
        description="Senior Chess Academy is an independent educational publication about chess for adults 50+. Editorial mission, standards, ownership, and how to reach the editors."
        path="/about"
      />
      <PageHeader
        eyebrow="About"
        title="An independent chess publication."
        lead="Senior Chess Academy is a small, independent editorial publication that writes about chess for adults 50 and above. We publish long-form guides on strategy, endgames, and cognitive engagement."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7 prose-editorial">
          <h2>What this site is</h2>
          <p>
            Senior Chess Academy is an independent educational website. Our articles are written for adult readers who
            take chess seriously as a lifelong intellectual discipline. Every article is written and reviewed by the
            editors of the publication before it is published.
          </p>
          <p>
            The site is registered and operated from Columbus, Ohio, United States. Correspondence — including editorial
            enquiries, corrections, and questions from readers — is welcome by email or by post; contact details appear on
            every page.
          </p>

          <h2>What this site is not</h2>
          <ul>
            <li>It is not a chess platform. We do not host games, tournaments, or ratings.</li>
            <li>It is not a chess store. We do not sell products or gear.</li>
            <li>It is not a health or medical service. Our articles about chess and cognitive engagement discuss published research and are educational only. They are not medical advice.</li>
            <li>It is not affiliated with any national or international chess federation.</li>
          </ul>

          <h2>Editorial standards</h2>
          <p>The principles that guide what we publish:</p>
          <ul>
            <li><strong>Original writing.</strong> Every article is written by the editors specifically for this publication. We do not repost content from other sources and we do not publish AI-generated filler content.</li>
            <li><strong>Long form is a feature.</strong> Our articles are longer than the internet average because our readers wanted them that way. We do not pad; we do not shorten to hit a length either.</li>
            <li><strong>Careful with claims.</strong> We are especially careful with claims about chess and cognitive health. We reference published research where it exists and we say so plainly when it does not.</li>
            <li><strong>Corrections.</strong> Corrections are made promptly, dated, and noted on the affected article.</li>
            <li><strong>No paywall.</strong> Every article, every guide, and every legal page is free to read.</li>
          </ul>

          <h2>Who this is for</h2>
          <p>
            We write for adults 50 and above who are interested in chess as a lifelong intellectual discipline. Some of
            our readers are lifelong club players returning after decades away from the board. Some are complete
            beginners approaching the game for the first time in retirement. Some are teachers of chess in community
            centres, libraries, and retirement communities. All are welcome.
          </p>

          <h2>Ownership and transparency</h2>
          <p>
            Senior Chess Academy is an independent publication operated by its editors. It is not owned by, funded by,
            or affiliated with any chess federation, publisher, or commercial retailer. The site does not currently sell
            products or subscriptions; it is supported by the editors' own time.
          </p>
          <p>
            If we ever accept sponsorship or introduce a paid item, sponsored articles will be labelled clearly at the
            top and bottom of the piece and the refund policy for the paid item will be published in advance on our
            <a className="link-underline" href="/legal/refund"> Refund Policy</a> page.
          </p>

          <h2>Contact and correspondence</h2>
          <p>
            The best way to reach us is by email at{' '}
            <a className="link-underline" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a>. Written
            correspondence may also be sent to Senior Chess Academy, 390 Maple Grove Ln, Columbus, OH 43215, United States.
            We reply to every letter, usually within one to two weeks.
          </p>
          <blockquote>
            "It is the reader we are writing for. Not the algorithm, not the sponsor, not the metric — the reader."
          </blockquote>
        </div>
        <aside className="lg:col-span-5 space-y-6">
          <img src={studyImg} alt="A wooden chess set arranged on a table" className="rounded-2xl border border-ink/10 shadow-card w-full" width="1600" height="1067" loading="lazy" />
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
              <div className="flex justify-between"><dt>Type</dt><dd className="text-graphite">Editorial website</dd></div>
              <div className="flex justify-between"><dt>Audience</dt><dd className="text-graphite">Adults 50+</dd></div>
              <div className="flex justify-between"><dt>Paywall</dt><dd className="text-graphite">None</dd></div>
              <div className="flex justify-between"><dt>Advertising</dt><dd className="text-graphite">None</dd></div>
              <div className="flex justify-between"><dt>AI-generated content</dt><dd className="text-graphite">None</dd></div>
              <div className="flex justify-between"><dt>Medical advice</dt><dd className="text-graphite">None</dd></div>
            </dl>
          </div>
        </aside>
      </section>
    </>
  )
}
