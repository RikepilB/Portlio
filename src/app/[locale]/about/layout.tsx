import type { Metadata } from 'next'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: `${dict.about.label} — Richard Pillaca`,
    description: dict.about.heading,
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
