import React, { useState, useId } from 'react'

export default function Accordion({ title, children, defaultOpen = false, cta = 'Read more' }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`acc-${id}`}
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 text-left group"
      >
        <span className="font-display text-lg sm:text-xl text-ink">{title}</span>
        <span className="text-xs uppercase tracking-widest text-graphite group-hover:text-ink transition-colors flex items-center gap-2">
          {open ? 'Collapse' : cta}
          <span aria-hidden="true" className={`inline-block transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
        </span>
      </button>
      <div id={`acc-${id}`} className={`accordion-content ${open ? 'open' : ''}`}>
        <div>
          <div className="pt-4 text-graphite prose-editorial">{children}</div>
        </div>
      </div>
    </div>
  )
}
