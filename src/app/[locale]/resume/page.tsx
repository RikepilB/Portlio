import { redirect } from 'next/navigation'
import { isLocale } from '@/i18n/config'

export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) redirect('/en/journey')
  redirect(`/${locale}/journey`)
}
