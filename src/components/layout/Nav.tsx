'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contactInfo } from '@/data/social'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/journey', label: 'Journey' },
    { href: '/about', label: 'About' },
]

export function Nav() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMobile = () => setMobileOpen(false)

    return (
        <>
            <nav
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-[#e6e8eb]' : 'border-b border-transparent'
                    }`}
                style={{
                    background: isScrolled ? 'rgba(248,249,250,0.92)' : 'rgba(248,249,250,0.62)',
                    backdropFilter: isScrolled ? 'saturate(180%) blur(12px)' : 'saturate(100%) blur(6px)',
                    WebkitBackdropFilter: isScrolled ? 'saturate(180%) blur(12px)' : 'saturate(100%) blur(6px)',
                }}
                aria-label="Main navigation"
            >
                <div className="shell flex items-center justify-between h-[60px]">
                    <Link
                        href="/"
                        className="font-sans font-semibold text-[17px] tracking-[-0.01em] inline-flex items-center gap-[10px] text-[#1A1A1A]"
                        aria-label="Home page"
                    >
                        <span className="pulse-dot" aria-hidden="true" />
                        Richard Pillaca
                    </Link>

                    <ul className="hidden md:flex gap-9 list-none m-0 p-0">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={closeMobile}
                                    className={`font-mono text-[11.5px] tracking-[0.05em] uppercase py-[6px] relative transition-colors duration-200 ${pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                                            ? 'text-[#1A1A1A]'
                                            : 'text-[#6e7481] hover:text-[#1A1A1A]'
                                        }`}
                                    aria-current={
                                        pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                                            ? 'page'
                                            : undefined
                                    }
                                >
                                    {item.label}
                                    {(pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))) && (
                                        <span className="absolute left-0 right-0 -bottom-[2px] h-[1.5px] bg-[#2bc08f] rounded-[1px]" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="hidden md:inline-flex items-center gap-2 px-[18px] py-[10px] bg-[#1A1A1A] text-white rounded-full text-[13.5px] font-medium transition-all duration-200 hover:bg-black hover:-translate-y-px"
                    >
                        Get in touch
                        <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            ↗
                        </span>
                    </a>

                    <button
                        type="button"
                        className="md:hidden w-[42px] h-[42px] rounded-full border border-[#e6e8eb] flex items-center justify-center"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="relative block w-4 h-[1.5px] bg-[#1A1A1A] before:content-[''] before:absolute before:left-0 before:w-4 before:h-[1.5px] before:bg-[#1A1A1A] before:-top-[5px] after:content-[''] after:absolute after:left-0 after:w-4 after:h-[1.5px] after:bg-[#1A1A1A] after:top-[5px]" />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-x-0 top-[60px] z-40 bg-[#f8f9fa] border-b border-[#e6e8eb] transition-all duration-200 md:hidden overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                aria-hidden={!mobileOpen}
            >
                <ul className="flex flex-col list-none m-0 p-0 px-[var(--gutter)]">
                    {navItems.map((item) => (
                        <li key={item.href} className="border-b border-[#e6e8eb] last:border-b-0">
                            <Link
                                href={item.href}
                                onClick={closeMobile}
                                className={`block py-[18px] font-mono text-[13px] tracking-[0.05em] uppercase ${pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                                        ? 'text-[#1A1A1A]'
                                        : 'text-[#6e7481]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="pt-4 pb-4">
                        <a
                            href={`mailto:${contactInfo.email}`}
                            onClick={closeMobile}
                            className="inline-flex items-center justify-center w-full py-3 px-6 bg-[#1A1A1A] text-white rounded-full text-[13.5px] font-medium"
                        >
                            Get in touch
                            <span className="ml-2">↗</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
