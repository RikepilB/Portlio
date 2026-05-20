'use client'

import { useState } from 'react'
import { experiences } from '@/data/experience'

export default function JourneyPage() {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <div className="bg-white min-h-screen">
            {/* ── Header ── */}
            <div className="max-w-4xl mx-auto px-6 sm:px-12 pt-16 pb-12">
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4 animate-fade-up">
                    Career Journey
                </h1>
                <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed animate-fade-up stagger-1">
                    The timeline of my professional experience across engineering, data, and consulting.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 sm:px-12 pb-24 border-t border-[#F3F4F6] pt-12">
                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] bg-[#F3F4F6]" aria-hidden="true" />

                    <div className="space-y-6">
                        {experiences.map((exp) => {
                            const isOpen = openId === exp.id
                            return (
                                <article key={exp.id} className="relative pl-10 md:pl-14">
                                    {/* Dot */}
                                    <button
                                        type="button"
                                        onClick={() => toggle(exp.id)}
                                        className="absolute left-0 md:left-[4px] top-3 w-6 h-6 bg-white border-[3px] border-[#e6e8eb] rounded-full flex items-center justify-center transition-all hover:border-[#2bc08f] z-10"
                                        aria-expanded={isOpen}
                                        aria-label={`Toggle details for ${exp.role}`}
                                    >
                                        <div className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-[#2bc08f]' : 'bg-[#1A1A1A]'}`} />
                                    </button>

                                    {/* Compact header — always visible */}
                                    <button
                                        type="button"
                                        onClick={() => toggle(exp.id)}
                                        className="w-full text-left group"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 pb-3">
                                            <span className="font-mono text-[11px] text-[#6e7481] uppercase tracking-[0.06em] shrink-0">
                                                {exp.period}
                                            </span>
                                            <div className="flex-1">
                                                <h2 className="font-display text-xl font-bold text-[#1A1A1A] group-hover:text-[#0c5a40] transition-colors">
                                                    {exp.role}
                                                </h2>
                                                <p className="text-sm font-medium text-[#6e7481] mt-0.5">
                                                    {exp.org} <span className="text-[#8a909b] font-normal">— {exp.location}</span>
                                                </p>
                                            </div>
                                            <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        </div>
                                    </button>

                                    {/* Expandable content */}
                                    <div
                                        className="overflow-hidden transition-all duration-300 ease-out"
                                        style={{
                                            maxHeight: isOpen ? '600px' : '0px',
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                    >
                                        <div className="pb-6 pt-2 border-t border-[#F3F4F6]">
                                            {exp.description && (
                                                <p className="text-sm text-[#474747] leading-relaxed mb-4">
                                                    {exp.description}
                                                </p>
                                            )}

                                            <ul className="mb-4 space-y-2">
                                                {exp.bullets.map((bullet, i) => (
                                                    <li key={i} className="relative pl-4 text-sm text-[#6e7481] leading-relaxed">
                                                        <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[#d1d2d8]" aria-hidden />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills?.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="text-[11px] font-mono text-[#6e7481] bg-[#f8f9fa] border border-[#e6e8eb] rounded px-2.5 py-1"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {exp.partnerLink && (
                                                <a
                                                    href={exp.partnerLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c5a40] hover:text-[#2bc08f] mt-4 transition-colors"
                                                >
                                                    🔗 View Partner →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
