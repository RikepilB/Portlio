import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@/i18n/config'
import { LibraryShelf } from '@/components/ui/LibraryShelf'
import Link from 'next/link'
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
  return <div className="shell min-h-screen pb-24 pt-32">
    <header className="mb-14 max-w-2xl">
      <h1 className="font-display text-5xl text-matte md:text-7xl">{es ? 'Biblioteca' : 'Library'}</h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-on-felt">{es ? 'Lo que escribo, las ideas que exploro y las referencias a las que volver.' : 'What I write, ideas I’m exploring, and references to return to.'}</p>
    </header>
    <div className="max-w-4xl"><LibraryShelf /></div>
    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
      {socialLinks.filter((link) => ['substack', 'twitter'].includes(link.platform)).map((link) => <a key={link.platform} className="section-link inline-flex min-h-11 items-center" href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}
      <Link className="section-link inline-flex min-h-11 items-center" href={localePath(locale, '/activity')}>{es ? 'Ideas y proyectos' : 'Ideas & projects'} ↗</Link>
    </div>
  </div>
}
