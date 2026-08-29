import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { ogContentType, ogSize, portfolioOgImage } from '@/lib/og-image'

export const alt = 'Richard Pillaca — Full-Stack Engineer'
export const size = ogSize
export const contentType = ogContentType

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = isLocale(locale) ? getDictionary(locale) : getDictionary('en')
  return portfolioOgImage({
    kicker: dict.home.kicker,
    title: 'Richard Pillaca',
    subtitle: dict.meta.ogDescription,
  })
}
