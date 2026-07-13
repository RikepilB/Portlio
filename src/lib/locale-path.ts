import type { Locale } from '@/i18n/config'

/** Prefix an internal path with the active locale segment. */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return `/${locale}`
  return `/${locale}${normalized}`
}

/** Strip locale prefix from pathname, e.g. `/es/projects` → `/projects`. */
export function stripLocaleFromPath(pathname: string, locales: readonly string[]): string {
  const segments = pathname.split('/')
  const maybeLocale = segments[1]
  if (maybeLocale && locales.includes(maybeLocale)) {
    const rest = segments.slice(2).join('/')
    return rest ? `/${rest}` : '/'
  }
  return pathname
}

/** Swap locale in current pathname while preserving the route tail. */
export function switchLocalePath(pathname: string, nextLocale: Locale, locales: readonly string[]): string {
  const tail = stripLocaleFromPath(pathname, locales)
  return localePath(nextLocale, tail)
}
