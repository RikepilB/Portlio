import type { Metadata } from 'next'
import { ActivityFeed } from '@/components/ui/ActivityFeed'
import { activityLabels } from '@/data/activity'
import { isLocale } from '@/i18n/config'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return { title: `${locale === 'es' ? 'Actividad' : 'Activity'} | Richard Pillaca`, description: locale === 'es' ? activityLabels.es.intro : activityLabels.en.intro, alternates: { canonical: `/${locale}/activity`, languages: { en: '/en/activity', es: '/es/activity' } } }
}

export default async function ActivityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const copy = activityLabels[locale]
  return <div className="shell min-h-screen pb-24 pt-32">
    <header className="mb-12 max-w-2xl"><h1 className="font-display text-5xl text-matte md:text-7xl">{copy.title}</h1><p className="mt-5 text-lg leading-relaxed text-ink-on-felt">{copy.intro}</p></header>
    <p className="mb-8 max-w-2xl text-sm leading-7 text-muted"><a href="https://github.com/RikepilB" target="_blank" rel="noopener noreferrer" className="text-gold-bright hover:underline">GitHub ↗</a>{locale === 'es' ? ' · 2.268 en el último año · sep. 2026' : ' · 2,268 in the past year · Sep 2026'}</p>
    <div className="max-w-4xl"><ActivityFeed /></div>
  </div>
}
