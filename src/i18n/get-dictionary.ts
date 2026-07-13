import type { Locale } from './config'
import { dictionaryEn } from './dictionaries/en'
import { dictionaryEs } from './dictionaries/es'

const dictionaries = {
  en: dictionaryEn,
  es: dictionaryEs,
} as const

export type Dictionary = typeof dictionaryEn

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary
}
