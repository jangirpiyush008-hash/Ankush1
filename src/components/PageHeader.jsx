import React from 'react'

export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <section className="border-b border-ink/10 bg-marble">
      <div className="container-editorial py-16 sm:py-24 grid gap-8 md:grid-cols-12 items-end">
        <div className="md:col-span-8">
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] text-ink">{title}</h1>
          {lead && <p className="mt-6 max-w-reading text-lg text-graphite">{lead}</p>}
          {children}
        </div>
        <div className="md:col-span-4 hidden md:flex justify-end">
          <div className="w-40 h-40 rounded-xl chess-pattern border border-ink/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center font-display text-6xl text-ink/70" aria-hidden="true">♞</div>
          </div>
        </div>
      </div>
    </section>
  )
}
