import React, { useState } from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <>
      <SEO
        title="Contact — Senior Chess Academy"
        description="Reach the editors of Senior Chess Academy by email, phone, or post. Editorial office in Columbus, Ohio. We reply to every letter."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="We reply to every letter."
        lead="If you write to us, a real person will read it. If it deserves a written response — most do — you will receive one within a week."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
            className="grid gap-5"
            aria-label="Contact form"
          >
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Your name</label>
              <input
                id="name" name="name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-4 py-3 bg-marble focus:border-ink outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email address</label>
              <input
                id="email" name="email" type="email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-4 py-3 bg-marble focus:border-ink outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-4 py-3 bg-marble focus:border-ink outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Your message</label>
              <textarea
                id="message" name="message" required rows={7} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-4 py-3 bg-marble focus:border-ink outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="btn-primary">Send letter</button>
              {sent && <span className="text-sm text-walnutDark">Thank you. The editor will read your letter this week.</span>}
            </div>
            <p className="text-xs text-graphite">
              This form does not process purchases or health data. We store your message on our email server only for the
              purpose of replying. See our privacy policy for details.
            </p>
          </form>
        </div>

        <aside className="lg:col-span-6 space-y-6">
          <div className="card-editorial">
            <div className="eyebrow mb-3">Editorial office</div>
            <address className="not-italic text-lg font-display leading-snug">
              Senior Chess Academy<br/>
              390 Maple Grove Ln<br/>
              Columbus, OH 43215<br/>
              United States
            </address>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">Direct contact</div>
            <ul className="space-y-3 text-graphite">
              <li>Email · <a className="link-underline text-ink" href="mailto:seniorchessacademy@gmail.com">seniorchessacademy@gmail.com</a></li>
              <li>Phone · <a className="link-underline text-ink" href="tel:+16144287619">(614) 428-7619</a></li>
              <li>Hours · Monday to Friday, 9:00 – 17:00 Eastern</li>
            </ul>
          </div>
          <div className="card-editorial">
            <div className="eyebrow mb-3">What we reply to</div>
            <ul className="space-y-2 text-graphite text-sm">
              <li>· Reader letters (always)</li>
              <li>· Club-profile submissions (always)</li>
              <li>· Article pitches (always, within one week)</li>
              <li>· Corrections (immediately)</li>
              <li>· Sponsorship enquiries (with disclosure requirements)</li>
              <li>· Press enquiries (within two business days)</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  )
}
