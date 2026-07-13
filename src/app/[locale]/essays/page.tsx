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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <header className="flex flex-col gap-3 mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-amber-700">
          {dict.essays.title}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-neutral-900">{dict.essays.title}</h1>
        <p className="text-lg text-neutral-500 max-w-xl">{dict.essays.subtitle}</p>
      </header>

      <div className="flex flex-col" aria-label="Essay list">
        {essays.map((essay) => (
          <EssayCard key={essay.slug} essay={essay} />
        ))}
      </div>

      <div className="mt-14 p-6 bg-amber-50 border border-amber-200 rounded-xl flex flex-col gap-3">
        <h2 className="text-lg font-bold font-display text-neutral-900">{dict.essays.comingSoon}</h2>
        <Link
          href="https://substack.com/@richardpillaca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Subscribe on Substack (opens in new tab)"
          className="inline-flex self-start items-center gap-2 bg-amber-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors duration-150"
        >
          Substack →
        </Link>
      </div>
    </div>
  )
}
