'use client'

import { useState } from 'react'
import Link from 'next/link'
import { reading } from '@/data/reading'
import { getEssays } from '@/data/locale'
import { useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'

export function LibraryShelf() {
  const { locale } = useLocale()
  const es = locale === 'es'
  const [filter, setFilter] = useState<'all' | 'writing' | 'book' | 'reference'>('all')
  const labels = es ? { all: 'Todo', writing: 'Mis artículos', book: 'Libros', reference: 'Referencias' } : { all: 'All', writing: 'My writing', book: 'Books', reference: 'References' }
  return <div>
    <div data-sound-zone="filter" className="mb-8 flex flex-wrap gap-x-6 gap-y-1 border-b border-rule" role="group" aria-label={es ? 'Filtrar biblioteca' : 'Filter library'}>
      {(['all', 'writing', 'book', 'reference'] as const).map((kind) => <button type="button" key={kind} aria-pressed={filter === kind} onClick={() => setFilter(kind)} className={`min-h-12 border-b-2 text-sm transition-colors ${kind === filter ? 'border-gold text-gold-bright' : 'border-transparent text-muted hover:text-matte'}`}>{labels[kind]}</button>)}
    </div>
    <div key={filter} className="index-enter" aria-live="polite">
      {(filter === 'all' || filter === 'writing') && <section className="mb-10" aria-label={labels.writing}>
        {getEssays(locale).map((essay) => <details key={essay.slug} className="quiet-disclosure border-b border-rule">
          <summary className="flex cursor-pointer items-center justify-between gap-5 py-5"><h2 className="max-w-2xl font-display text-2xl leading-tight text-matte md:text-3xl">{essay.title}</h2><span className="disclosure-mark text-gold-bright" aria-hidden="true">+</span></summary>
          <div className="disclosure-body max-w-2xl pb-5"><p className="text-sm leading-7 text-muted">{essay.excerpt}</p><Link href={localePath(locale, `/essays/${essay.slug}`)} className="mt-2 inline-flex min-h-11 items-center text-xs text-gold-bright">{es ? 'Leer artículo' : 'Read essay'} ↗</Link></div>
        </details>)}
      </section>}
      {(filter === 'all' || filter === 'book') && <section className="mb-10" aria-label={labels.book}>
        <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-muted">{es ? 'Lecturas recomendadas' : 'Suggested reading'}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {reading.filter((item) => item.kind === 'book').map((book) => <details key={book.href} className="quiet-disclosure group border-l-4 border-gold/70 bg-gold-soft">
            <summary className="flex min-h-44 cursor-pointer flex-col justify-between gap-6 p-6"><h2 className="max-w-[18ch] font-display text-3xl leading-tight text-matte transition-colors group-hover:text-gold-bright">{book.title}</h2><span className="flex w-full items-center justify-between gap-3 text-xs text-muted">{book.author}<span className="disclosure-mark text-gold-bright" aria-hidden="true">+</span></span></summary>
            <div className="disclosure-body px-6 pb-5"><p className="text-sm leading-7 text-muted">{book[locale]}</p><a href={book.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-xs text-gold-bright">{es ? 'Explorar libro' : 'Explore book'} ↗</a></div>
          </details>)}
        </div>
      </section>}
      {(filter === 'all' || filter === 'reference') && <section aria-label={labels.reference}>
        {reading.filter((item) => item.kind !== 'book').map((item) => <details key={item.href} className="quiet-disclosure border-b border-rule">
          <summary className="flex min-h-20 cursor-pointer items-center justify-between gap-5 py-4"><div><h2 className="font-display text-2xl text-matte">{item.title}</h2><p className="mt-1 text-[11px] text-muted">{item.author}</p></div><span className="disclosure-mark text-gold-bright" aria-hidden="true">+</span></summary>
          <div className="disclosure-body max-w-xl pb-5"><p className="text-sm leading-7 text-muted">{item[locale]}</p><a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-xs text-gold-bright">{es ? 'Abrir referencia' : 'Open reference'} ↗</a></div>
        </details>)}
      </section>}
    </div>
  </div>
}
