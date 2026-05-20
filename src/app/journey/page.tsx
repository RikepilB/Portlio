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
                {/* Minimal Timeline */}
                <div className="relative border-l-2 border-[#F3F4F6] ml-3 sm:ml-0 md:pl-8 space-y-16">
                    {experiences.map((exp) => {
                        const isOpen = openId === exp.id
                        return (
                            <article
                                key={exp.id}
                                className="relative pl-8 md:pl-0 cursor-pointer group"
                                onClick={() => toggle(exp.id)}
                            >
                                {/* Timeline Marker (Circle) */}
                                <div
                                    className="absolute -left-[41px] md:-left-[41px] w-6 h-6 bg-white border-4 border-[#F3F4F6] rounded-full flex items-center justify-center top-1 group-hover:border-[#10B981] transition-colors"
                                    aria-hidden
                                >
                                    <div className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-[#10B981]' : 'bg-[#1A1A1A]'}`} />
                                </div>

                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                                    <div className="md:w-48 shrink-0">
                                        <p className="text-sm font-mono text-[#6B7280]">{exp.period}</p>
                                        {exp.type && (
                                            <p className="text-[10px] font-bold tracking-widest uppercase text-[#10B981] mt-1">{exp.type}</p>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#10B981] transition-colors">
                                            {exp.role}
                                        </h2>
                                        <p className="text-lg font-medium text-[#10B981]">
                                            {exp.org} <span className="text-[#6B7280] text-sm md:text-base font-normal">— {exp.location}</span>
                                        </p>
                                    </div>
                                    <span className={`text-xs text-[#6B7280] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </div>

                                {/* Expandable details */}
                                <div
                                    className="overflow-hidden transition-all duration-300 ease-out md:pl-56"
                                    style={{
                                        maxHeight: isOpen ? '800px' : '0px',
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div className="pb-2">
                                        {exp.description && (
                                            <p className="text-sm text-[#474747] leading-relaxed mb-4">
                                                {exp.description}
                                            </p>
                                        )}

                                        <ul className="mb-6 space-y-3">
                                            {exp.bullets.map((bullet, i) => (
                                                <li key={i} className="relative pl-4 text-sm text-[#6B7280] leading-relaxed">
                                                    <span className="absolute left-0 top-2.5 w-1 h-1 rounded-full bg-[#d1d5db]" aria-hidden />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills?.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="text-[11px] font-mono text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] rounded px-2.5 py-1"
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
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] hover:underline mt-2"
                                                onClick={(e) => e.stopPropagation()}
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
    )
}
