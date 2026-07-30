import React, { useState } from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { articles } from '../data/articles.js'
import journalImg from '../assets/images/blog/journal.svg'

export default function Blog() {
  const [openId, setOpenId] = useState(null)
  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))]
  const [filter, setFilter] = useState('All')

  const shown = filter === 'All' ? articles : articles.filter(a => a.category === filter)

  return (
    <>
      <SEO
        title="Journal — Long-form chess articles for adults 50+"
        description="A slow-reading journal of chess articles: openings, endgames, positional play, cognitive training, and community stories. Every article written by named editors, no AI filler."
        path="/blog"
      />
      <PageHeader
        eyebrow="The Journal"
        title="Read at a real board, slowly."
        lead="A curated archive of long-form chess writing for adults 50 and above. Filter by topic, or read straight through."
      />

      <section className="container-editorial py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                filter === cat ? 'bg-ink text-ivory border-ink' : 'border-ink/15 text-graphite hover:border-ink hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {shown.map(a => (
            <article key={a.slug} id={a.slug} className="card-editorial flex flex-col">
              <img src={journalImg} alt={a.title} className="rounded-lg mb-5 h-40 w-full object-cover border border-ink/10" width="600" height="400" loading="lazy" />
              <div className="eyebrow mb-2">{a.category} · {a.readingTime}</div>
              <h2 className="font-display text-xl mb-3">{a.title}</h2>
              <p className="text-graphite text-sm flex-1">{a.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-graphite">
                <span>By {a.author}</span>
                <button
                  type="button"
                  aria-expanded={openId === a.slug}
                  aria-controls={`body-${a.slug}`}
                  onClick={() => setOpenId(openId === a.slug ? null : a.slug)}
                  className="uppercase tracking-widest text-ink link-underline"
                >
                  {openId === a.slug ? 'Collapse' : 'Read more'}
                </button>
              </div>
              <div id={`body-${a.slug}`} className={`accordion-content mt-4 ${openId === a.slug ? 'open' : ''}`}>
                <div>
                  <div className="pt-4 border-t border-ink/10 prose-editorial text-graphite whitespace-pre-line">
                    {a.body}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
