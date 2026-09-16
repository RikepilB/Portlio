import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@/i18n/config'
import { reading } from '@/data/reading'
import Link from 'next/link'
import { getEssays } from '@/data/locale'
import { socialLinks } from '@/data/social'
import { localePath } from '@/lib/locale-path'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: `${locale === 'es' ? 'Biblioteca' : 'Library'} | Richard Pillaca`, description: locale === 'es' ? 'Mis artículos, libros y referencias para construir software útil.' : 'My writing, books, and references for building useful software.', alternates: { canonical: `/${locale}/reading`, languages: { en: '/en/reading', es: '/es/reading' } } }
}

export default async function ReadingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const es = locale === 'es'
  const kinds = es ? { book: 'Libro', article: 'Artículo', reference: 'Referencia' } : { book: 'Book', article: 'Article', reference: 'Reference' }
  return <div className="shell min-h-screen pb-24 pt-32">
    <header className="mb-14 max-w-2xl">
      <h1 className="font-display text-5xl text-matte md:text-7xl">{es ? 'Biblioteca' : 'Library'}</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-on-felt">{es ? 'Lo que escribo, las ideas que exploro y las referencias a las que volver.' : 'What I write, ideas I’m exploring, and references to return to.'}</p>
    </header>
    <section className="mb-14 max-w-4xl" aria-labelledby="my-writing">
      <h2 id="my-writing" className="font-display text-3xl text-matte">{es ? 'Mis artículos' : 'My writing'}</h2>
      <div className="mt-5 divide-y divide-rule border-y border-rule">{getEssays(locale).map((essay) => <article key={essay.slug} className="py-6"><h3 className="font-display text-2xl text-matte"><Link className="hover:text-gold-bright" href={localePath(locale, `/essays/${essay.slug}`)}>{essay.title} →</Link></h3><p className="mt-3 max-w-[65ch] text-sm leading-7 text-ink-on-felt">{essay.excerpt}</p></article>)}</div>
      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">{socialLinks.filter((link) => ['substack', 'twitter'].includes(link.platform)).map((link) => <a key={link.platform} className="section-link inline-flex min-h-11 items-center" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}<Link className="section-link inline-flex min-h-11 items-center" href={localePath(locale, '/activity')}>{es ? 'Ideas y proyectos' : 'Ideas & projects'} →</Link></div>
    </section>
    <h2 className="font-display text-3xl text-matte">{es ? 'Libros y referencias' : 'Books & references'}</h2>
    <p className="mb-6 mt-3 max-w-2xl text-sm leading-7 text-muted">{es ? 'Una selección para explorar. Estas recomendaciones no son un historial de lecturas terminadas.' : 'A suggested shelf to explore, rather than a record of books I’ve finished.'}</p>
    <div className="max-w-4xl divide-y divide-rule border-y border-rule">
      {reading.map((item) => <article key={item.href} className="grid gap-4 py-8 md:grid-cols-[150px_1fr] md:gap-8">
        <span className="font-mono text-xs text-gold-bright">{kinds[item.kind]}</span>
        <div><h3 className="font-display text-2xl text-matte"><a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-bright focus-visible:outline-2 focus-visible:outline-gold">{item.title} ↗</a></h3><p className="mt-2 text-xs text-muted">{item.author}</p><p className="mt-3 max-w-[62ch] text-sm leading-7 text-ink-on-felt">{item[locale]}</p></div>
      </article>)}
    </div>
  </div>
}
