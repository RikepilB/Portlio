import { redirect } from 'next/navigation'
import { isLocale } from '@/i18n/config'

export default async function SkillsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) redirect('/en')
  redirect(`/${locale}`)
}
