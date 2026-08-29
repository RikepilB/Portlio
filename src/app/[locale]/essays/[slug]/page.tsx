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
    <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
      <Link
        href={localePath(locale, '/essays')}
        aria-label={dict.essays.backAria}
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 hover:text-gold-bright"
      >
        ← {dict.essays.back}
      </Link>

      <header className="mb-10 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm text-muted">{formatDate(essay.date)}</span>
          <span className="text-muted-2">·</span>
          <span className="font-mono text-sm text-muted">{essay.readTime}</span>
        </div>
        <h1 className="font-display text-3xl font-semibold leading-tight text-matte sm:text-4xl">
          {essay.title}
        </h1>
        <p className="text-lg leading-relaxed text-ink-on-felt">{essay.excerpt}</p>
        <div className="flex flex-wrap gap-1.5">
          {essay.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-rule bg-felt-deep/35 px-2 py-0.5 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="flex flex-col gap-3 rounded-xl border border-rule bg-felt-deep/35 p-8 text-center">
        <span className="text-3xl">✍️</span>
        <h2 className="font-display text-lg font-semibold text-matte">{dict.essays.placeholderTitle}</h2>
        <p className="mx-auto max-w-sm text-sm text-muted">{dict.essays.placeholderBody}</p>
        <Link
          href="https://substack.com/@richardpillaca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe on Substack (opens in new tab)"
          className="mt-1 inline-flex self-center items-center gap-2 rounded-lg bg-matte px-4 py-2 text-sm font-semibold text-felt-deep transition-colors duration-150 hover:bg-gold"
        >
          {dict.essays.subscribe}
        </Link>
      </div>
    </article>
  )
}
