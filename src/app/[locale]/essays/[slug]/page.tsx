import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { locales, isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getEssayBySlug, getEssays } from '@/data/locale'
import { localePath } from '@/lib/locale-path'
import { formatDate } from '@/lib/utils'

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getEssays(locale).map((e) => ({ locale, slug: e.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const essay = getEssayBySlug(slug, locale)
  if (!essay) return {}
  return {
    title: `${essay.title} — Richard Pillaca`,
    description: essay.excerpt,
  }
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)
  const essay = getEssayBySlug(slug, locale)
  if (!essay) notFound()

  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <Link
        href={localePath(locale, '/essays')}
        aria-label={dict.essays.backAria}
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-amber-700 transition-colors duration-150 mb-10"
      >
        ← {dict.essays.back}
      </Link>

      <header className="flex flex-col gap-4 mb-10">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm text-neutral-400 font-mono">{formatDate(essay.date)}</span>
          <span className="text-neutral-300">·</span>
          <span className="text-sm text-neutral-400 font-mono">{essay.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-display text-neutral-900 leading-tight">
          {essay.title}
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed">{essay.excerpt}</p>
        <div className="flex flex-wrap gap-1.5">
          {essay.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-neutral-500 border border-neutral-200 rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl text-center flex flex-col gap-3">
        <span className="text-3xl">✍️</span>
        <h2 className="text-lg font-bold font-display text-neutral-900">{dict.essays.placeholderTitle}</h2>
        <p className="text-sm text-neutral-500 max-w-sm mx-auto">{dict.essays.placeholderBody}</p>
        <Link
          href="https://substack.com/@richardpillaca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe on Substack (opens in new tab)"
          className="inline-flex self-center items-center gap-2 bg-amber-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors duration-150 mt-1"
        >
          {dict.essays.subscribe}
        </Link>
      </div>
    </article>
  )
}
