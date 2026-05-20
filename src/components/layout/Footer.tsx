'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { contactInfo } from '@/data/social'

const footerLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Journey', href: '/journey' },
    { name: 'Skills', href: '/skills' },
    { name: 'Resume', href: '/resume' },
    { name: 'About', href: '/about' },
]

export function Footer() {
    const pathname = usePathname()
    if (pathname === '/' || pathname === '/journey' || pathname === '/about' || pathname === '/projects') return null

    return (
        <footer className="bg-white border-t border-[#F3F4F6] mt-24" aria-label="Site footer">
            <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Brand/Tagline */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        <Link href="/" className="font-display text-2xl font-bold text-[#1A1A1A] hover:opacity-70 transition-opacity">
                            Richard.
                        </Link>
                        <p className="text-sm text-[#6B7280] max-w-sm leading-relaxed">
                            Data Analyst & BI Developer based in Toronto. Building scalable pipelines, intelligent tools, and automated workflows.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]">Menu</p>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#6B7280] hover:text-[#0c5a40] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]">Connect</p>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-sm text-[#6B7280] hover:text-[#0c5a40] transition-colors"
                                >
                                    Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#6B7280] hover:text-[#0c5a40] transition-colors"
                                >
                                    LinkedIn ↗
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#6B7280] hover:text-[#0c5a40] transition-colors"
                                >
                                    GitHub ↗
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-[#F3F4F6] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#6B7280] font-mono">
                    <p>© {new Date().getFullYear()} Richard Pillaca Burga.</p>
                    <div className="flex items-center gap-2">
                        <span>Built with Next.js 16 & Tailwind CSS</span>
                        <span className="w-1 h-1 rounded-full bg-[#E5E7EB]" />
                        <span>Deployed on Vercel</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
