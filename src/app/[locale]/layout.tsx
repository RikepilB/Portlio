import { notFound } from 'next/navigation'
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
