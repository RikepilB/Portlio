'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { contactInfo } from '@/data/social'

const funFacts = [
    "Otters hold hands while they sleep so they don't drift away from each other in the water.",
    "Identical twins don't have the same fingerprints.",
    'Bananas are curved because they grow towards the sun.',
    'Octopuses have three hearts and blue blood.',
    'A day on Venus is longer than a year on Venus.',
    'Humans share about 50% of their DNA with bananas.',
]

const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Journey', href: '/journey' },
    { name: 'Projects', href: '/projects' },
]

export function Footer() {
    const pathname = usePathname()
    const [funFact] = useState(() => funFacts[Math.floor(Math.random() * funFacts.length)])

    if (pathname === '/' || pathname === '/about' || pathname === '/journey') return null

    return (
        <footer className="border-t border-[#E5E7EB] py-12" aria-label="Site footer">
            <div className="max-w-5xl mx-auto px-6 sm:px-12">

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16">
                    {/* Left: Brand + Fun Fact */}
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
                                <span className="font-display font-bold text-[#1A1A1A]">Richard Pillaca</span>
                                <p className="text-xs text-[#6B7280] leading-relaxed max-w-xs">
                                    Data Analyst &amp; BI Developer based in Toronto. Building scalable pipelines, intelligent tools, and automated workflows.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 mt-1">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-[#6B7280] shrink-0 mt-px">Fun Fact</span>
                            <p className="text-xs text-[#6B7280] leading-relaxed italic">
                                {funFact}
                            </p>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]">Menu</p>
                        <ul className="flex flex-col gap-2.5">
                            {menuLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A]">Connect</p>
                        <ul className="flex flex-col gap-2.5">
                            <li>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
                                >
                                    Email
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
                                >
                                    LinkedIn ↗
                                </a>
                            </li>
                            <li>
                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
                                >
                                    GitHub ↗
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6B7280] font-mono">
                    <p>© {new Date().getFullYear()} Richard Pillaca Burga.</p>
                    <div className="flex items-center gap-2">
                        <span>Built with Next.js 16 &amp; Tailwind CSS</span>
                        <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
                        <span>Deployed on Vercel</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
