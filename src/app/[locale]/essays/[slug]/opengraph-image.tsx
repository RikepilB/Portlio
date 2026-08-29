import { isLocale } from '@/i18n/config'
import { getEssayBySlug } from '@/data/locale'
import { ogContentType, ogSize, portfolioOgImage } from '@/lib/og-image'

export const alt = 'Essay — Richard Pillaca'
export const size = ogSize
export const contentType = ogContentType

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const essay = isLocale(locale) ? getEssayBySlug(slug, locale) : undefined
  return portfolioOgImage({
    kicker: 'Essay',
    title: essay?.title ?? 'Richard Pillaca',
    subtitle: essay?.excerpt,
  })
}
