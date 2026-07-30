import React, { useState } from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const buildMailto = () => {
    const subject = encodeURIComponent(form.subject || 'Letter to Senior Chess Academy')
    const bodyLines = [
      `From: ${form.name || '[your name]'}`,
      `Reply-to: ${form.email || '[your email]'}`,
      '',
      form.message || ''
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    return `mailto:seniorchessacademy@gmail.com?subject=${subject}&body=${body}`
  }

  const onSubmit = (e) => {
    e.preventDefault()
    window.location.href = buildMailto()
  }

  return (
    <>
      <SEO
        title="Contact — Senior Chess Academy"
        description="Reach the editors of Senior Chess Academy by email, phone, or post. Editorial office in Columbus, Ohio. We reply to every letter."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Write to the editor."
        lead="Every letter is read by the editor. If it deserves a written response — most do — you will receive one."
      />
      <section className="container-editorial py-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <form onSubmit={onSubmit} className="grid gap-5" aria-label="Contact form">
            <p className="text-sm text-graphite border-l-2 border-gold pl-4 py-2 bg-marble/40 rounded-r">
              This form opens your email application with the message pre-filled and addressed to us. You can also email
              us directly at{' '}
              <a href="mailto:seniorchessacademy@gmail.com" className="link-underline text-ink">seniorchessacademy@gmail.com</a>.
            </p>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Your name</label>
              <input
                id="name" name="name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-ink/15 px-4 py-3 bg-marble focus:border-ink outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Your email</label>
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
              <button type="submit" className="btn-primary">Open in email app</button>
            </div>
            <p className="text-xs text-graphite">
              We do not process purchases or health data on this site. When you email us, we store your message on our
              email server only for the purpose of replying. See our{' '}
              <a href="/legal/privacy" className="link-underline">privacy policy</a> for details.
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
              <li>· Reader letters and questions about articles</li>
              <li>· Corrections</li>
              <li>· Article pitches from prospective contributors</li>
              <li>· Chess-club or community-programme enquiries</li>
              <li>· Press enquiries</li>
            </ul>
            <p className="text-xs text-graphite mt-4">We do not respond to unsolicited commercial pitches.</p>
          </div>
        </aside>
      </section>
    </>
  )
}
