'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { contactInfo } from '@/data/social'
import { useDictionary, useLocale } from '@/contexts/LocaleContext'
import { localePath, stripLocaleFromPath } from '@/lib/locale-path'
import { locales } from '@/i18n/config'

export function Footer() {
  const { locale } = useLocale()
  const dict = useDictionary()
  const pathname = usePathname()
  const funFactRef = useRef<HTMLParagraphElement>(null)

  const tail = stripLocaleFromPath(pathname, locales)

  useEffect(() => {
    if (funFactRef.current) {
      const facts = dict.footer.funFacts
      funFactRef.current.textContent = facts[Math.floor(Math.random() * facts.length)]
    }
  }, [dict.footer.funFacts])

  if (tail === '/' || tail === '/about' || tail === '/journey') return null

  const menuLinks = [
    { name: dict.nav.home, href: localePath(locale, '/') },
    { name: dict.nav.about, href: localePath(locale, '/about') },
    { name: dict.nav.journey, href: localePath(locale, '/journey') },
    { name: dict.nav.projects, href: localePath(locale, '/projects') },
  ]

  return (
    <footer className="border-t border-rule bg-felt-deep/40 py-12" aria-label="Site footer">
      <div className="mx-auto max-w-5xl px-6 sm:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/images/profile-pic.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-matte">Richard Pillaca</span>
                <p className="max-w-xs text-xs leading-relaxed text-muted">{dict.footer.tagline}</p>
              </div>
            </div>
            <div className="mt-1 flex items-start gap-2">
              <span className="mt-px shrink-0 text-[10px] font-bold uppercase tracking-widest text-muted">
                {dict.footer.funFact}
              </span>
              <p ref={funFactRef} className="text-xs italic leading-relaxed text-muted">
                {dict.footer.funFacts[0]}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-matte">{dict.footer.menu}</p>
            <ul className="flex flex-col gap-2.5">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold-bright"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-matte">{dict.footer.connect}</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted transition-colors hover:text-gold-bright"
                >
                  {dict.footer.email}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-gold-bright"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-gold-bright"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-rule pt-6 font-mono text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Richard Pillaca Burga.</p>
          <div className="flex items-center gap-2">
            <span>{dict.footer.builtWith}</span>
            <span className="h-1 w-1 rounded-full bg-rule-2" />
            <span>{dict.footer.deployedOn}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
