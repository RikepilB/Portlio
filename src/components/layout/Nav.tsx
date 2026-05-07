'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
    { href: '/projects', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/journey', label: 'Journey' },
    { href: '/skills', label: 'Skills' },
    { href: '/resume', label: 'Resume' },
]

export function Nav() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Scroll effect for subtle header shadow
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileMenuOpen(false)
    }, [pathname])

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md hover:shadow-md ${isScrolled ? 'border-b border-[#F3F4F6] shadow-[0_4px_30px_rgba(0,0,0,0.02)]' : 'border-b border-transparent'
                    }`}
            >
                <div className="max-w-5xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-display text-xl font-bold tracking-tight text-[#1A1A1A] hover:opacity-70 transition-opacity"
                        aria-label="Home page"
                    >
                        Richard Pillaca
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="nav-link font-medium uppercase tracking-wide text-xs"
                                aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* CTA */}
                        <a
                            href="mailto:ridi.pillaca@gmail.com"
                            className="text-[13px] font-bold text-white bg-[#1A1A1A] px-4 py-2 rounded-full hover:bg-[#10B981] transition-colors ml-4"
                        >
                            Get in touch
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        className="md:hidden p-2 text-[#1A1A1A]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            <div
                className={`fixed inset-x-0 top-20 z-40 bg-white border-b border-[#F3F4F6] transition-all duration-300 md:hidden overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0'
                    }`}
                aria-hidden={!mobileMenuOpen}
            >
                <nav className="flex flex-col px-6 py-6 gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-lg font-display font-medium ${pathname.startsWith(item.href) ? 'text-[#10B981]' : 'text-[#1A1A1A]'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="border-t border-[#F3F4F6] pt-6 mt-2">
                        <a
                            href="mailto:ridi.pillaca@gmail.com"
                            className="inline-flex items-center justify-center w-full text-sm font-bold text-white bg-[#1A1A1A] px-6 py-3 rounded-xl hover:bg-[#10B981] transition-colors"
                        >
                            Get in touch
                        </a>
                    </div>
                </nav>
            </div>
        </>
    )
}
