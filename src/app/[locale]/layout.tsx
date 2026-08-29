import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { locales, type Locale, isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { LocaleProvider } from '@/contexts/LocaleContext'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { BackToTop } from '@/components/layout/BackToTop'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: {
      default: 'Richard Pillaca',
      template: '%s',
    },
    description: dict.meta.siteDescription,
    openGraph: {
      siteName: 'Richard Pillaca',
      locale: locale === 'es' ? 'es_ES' : 'en_CA',
      type: 'website',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)

  return (
    <LocaleProvider locale={locale as Locale} dict={dict}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-matte focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-felt-deep"
      >
        {dict.nav.skipToContent}
      </a>
      <ScrollProgress />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </LocaleProvider>
  )
}
