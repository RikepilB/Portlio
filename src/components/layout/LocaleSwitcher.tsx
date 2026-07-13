'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'
import { useLocale } from '@/contexts/LocaleContext'
import { switchLocalePath } from '@/lib/locale-path'
import { cn } from '@/lib/utils'

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, dict } = useLocale()
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'flex items-center gap-0.5 rounded-full border border-rule bg-felt-deep/35 p-0.5',
        className
      )}
      role="group"
      aria-label={dict.nav.languageSwitch}
    >
      {locales.map((code) => {
        const active = locale === code
        const href = switchLocalePath(pathname, code, locales)
        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors',
              active
                ? 'bg-matte text-felt-deep'
                : 'text-muted hover:text-matte'
            )}
          >
            {code}
          </Link>
        )
      })}
    </div>
  )
}
