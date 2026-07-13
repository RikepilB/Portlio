'use client'

import { createContext, useContext, useEffect } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'

const LocaleContext = createContext<{ locale: Locale; dict: Dictionary } | null>(null)

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale
  dict: Dictionary
  children: React.ReactNode
}) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return <LocaleContext.Provider value={{ locale, dict }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function useDictionary() {
  return useLocale().dict
}
