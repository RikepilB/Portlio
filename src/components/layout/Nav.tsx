'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contactInfo } from '@/data/social'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { localePath } from '@/lib/locale-path'
import { LocaleSwitcher } from '@/components/layout/LocaleSwitcher'
import { cn } from '@/lib/utils'

export function Nav() {
  const { locale } = useLocale()
  const dict = useDictionary()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const phraseRef = useRef<HTMLSpanElement>(null)

  const navItems = [
    { href: localePath(locale, '/'), label: dict.nav.home },
    { href: localePath(locale, '/about'), label: dict.nav.about },
    { href: localePath(locale, '/journey'), label: dict.nav.journey },
    { href: localePath(locale, '/projects'), label: dict.nav.projects },
  ]

  useEffect(() => {
    if (phraseRef.current) {
      const phrases = dict.nav.phrases
      phraseRef.current.textContent = phrases[Math.floor(Math.random() * phrases.length)]
    }
  }, [dict.nav.phrases])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const isActive = (href: string) => {
    if (href === localePath(locale, '/')) return pathname === href
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          isScrolled
            ? 'border-rule bg-felt/92 backdrop-blur-md'
            : 'border-transparent bg-felt/62 backdrop-blur-sm'
        )}
        aria-label="Main navigation"
      >
        <div className="shell flex h-[60px] items-center justify-between gap-3">
          <Link
            href={localePath(locale, '/')}
            className="inline-flex shrink-0 items-center gap-2"
            aria-label={dict.nav.homeAria}
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={32}
              height={32}
              className="rounded-full"
              priority
            />
            <span
              ref={phraseRef}
              className="font-sans text-[16px] font-bold tracking-[-0.01em] text-gold"
            >
              {dict.nav.phrases[0]}
            </span>
          </Link>

          <ul className="hidden list-none gap-7 p-0 m-0 md:flex lg:gap-9">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={cn(
                      'relative py-[6px] font-mono text-[11.5px] uppercase tracking-[0.05em] transition-colors duration-200',
                      active ? 'text-matte' : 'text-muted hover:text-matte'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                    {active ? (
                      <span className="absolute inset-x-0 -bottom-[2px] h-[1.5px] rounded-[1px] bg-gold" />
                    ) : null}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <LocaleSwitcher />
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-matte px-[18px] py-[10px] text-[13.5px] font-medium text-felt-deep transition-all duration-200 hover:-translate-y-px hover:bg-gold"
            >
              {dict.nav.getInTouch}
              <span className="text-xs">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LocaleSwitcher />
            <button
              type="button"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-rule"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={dict.nav.toggleMenu}
            >
              <span className="relative block h-[1.5px] w-4 bg-matte before:absolute before:left-0 before:top-[-5px] before:h-[1.5px] before:w-4 before:bg-matte before:content-[''] after:absolute after:left-0 after:top-[5px] after:h-[1.5px] after:w-4 after:bg-matte after:content-['']" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          'fixed inset-x-0 top-[60px] z-40 overflow-hidden border-b border-rule bg-felt transition-all duration-200 md:hidden',
          mobileOpen
            ? 'max-h-96 opacity-100 pointer-events-auto'
            : 'max-h-0 opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        <ul className="m-0 flex list-none flex-col p-0 px-[var(--spacing-gutter)]">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className={cn(
                    'block py-[18px] font-mono text-[13px] uppercase tracking-[0.05em]',
                    active ? 'text-matte' : 'text-muted'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
          <li className="pb-4 pt-4">
            <a
              href={`mailto:${contactInfo.email}`}
              onClick={closeMobile}
              className="inline-flex w-full items-center justify-center rounded-full bg-matte px-6 py-3 text-[13.5px] font-medium text-felt-deep"
            >
              {dict.nav.getInTouch}
              <span className="ml-2">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
