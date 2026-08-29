import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { getEssays } from '@/data/locale'
import { EssayCard } from '@/components/ui/EssayCard'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: `${dict.essays.title} — Richard Pillaca`,
    description: dict.essays.subtitle,
  }
}

export default async function EssaysPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)
  const essays = getEssays(locale)

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="mb-12 flex flex-col gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          {dict.essays.title}
        </span>
        <h1 className="font-display text-4xl font-semibold text-matte sm:text-5xl">{dict.essays.title}</h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-on-felt">{dict.essays.subtitle}</p>
      </header>

      <div className="flex flex-col" aria-label="Essay list">
        {essays.map((essay) => (
          <EssayCard key={essay.slug} essay={essay} />
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-3 rounded-xl border border-rule bg-felt-deep/35 p-6">
        <h2 className="font-display text-lg font-semibold text-matte">{dict.essays.comingSoon}</h2>
        <Link
          href="https://substack.com/@richardpillaca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe on Substack (opens in new tab)"
          className="inline-flex self-start items-center gap-2 rounded-lg bg-matte px-4 py-2 text-sm font-semibold text-felt-deep transition-colors duration-150 hover:bg-gold"
        >
          Substack →
        </Link>
      </div>
    </div>
  )
}
