import { isLocale } from '@/i18n/config'
import { getProjectBySlug } from '@/data/locale'
import { ogContentType, ogSize, portfolioOgImage } from '@/lib/og-image'

export const alt = 'Project — Richard Pillaca'
export const size = ogSize
export const contentType = ogContentType

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = isLocale(locale) ? getProjectBySlug(slug, locale) : undefined
  return portfolioOgImage({
    kicker: project?.category ?? 'Work',
    title: project?.title ?? 'Richard Pillaca',
    subtitle: project?.tagline,
  })
}
