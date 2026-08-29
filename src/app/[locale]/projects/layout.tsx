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
    title: `${dict.projects.title} — Richard Pillaca`,
    description: dict.projects.subtitle,
  }
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
