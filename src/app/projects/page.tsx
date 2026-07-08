'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function ProjectsPage() {
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

    const sorted = [...filtered].sort((a, b) => {
        const getLatestYear = (d: string) => {
            const years = d.match(/\d{4}/g)
            return years ? parseInt(years[years.length - 1]) : 0
        }
        const yearDiff = getLatestYear(b.duration) - getLatestYear(a.duration)
        if (yearDiff !== 0) return yearDiff
        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
        const getLatestMonth = (d: string) => {
            const found = d.toLowerCase().match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/g)
            if (!found || found.length === 0) return 0
            return months.indexOf(found[found.length - 1]) + 1
        }
        return getLatestMonth(b.duration) - getLatestMonth(a.duration)
    })

    return (
        <div className="bg-white min-h-screen">
            {/* ── Subdued Layout Header ── */}
            <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-16 pb-12">
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4 animate-fade-up">
                    Projects
                </h1>
                <p className="text-lg text-[#6e7481] max-w-xl leading-relaxed animate-fade-up stagger-1">
                    Case studies in data science, research, automation, full-stack and AI engineering.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-24 border-t border-[#e6e8eb] pt-12">
                {/* Filter tabs */}
                <div
                    role="group"
                    aria-label="Filter projects by category"
                    className="flex flex-wrap gap-2 mb-12 animate-fade-up stagger-2"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            aria-pressed={active === cat}
                            aria-label={`Filter by ${cat}`}
                            onClick={() => setActive(cat)}
                            className={`text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 ${active === cat
                                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                                    : 'text-[#6e7481] border-[#e6e8eb] bg-white hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8 animate-fade-up stagger-3" role="list">
                    {sorted.map((project, i) => (
                        <article key={project.id} role="listitem">
                            <Link
                                href={`/projects/${project.slug}`}
                                aria-label={`View case study: ${project.title}`}
                                className="group flex flex-col h-full bg-[#f8f9fa] p-8 rounded-2xl border border-[#e6e8eb] transition-all duration-300 hover:bg-white hover:border-[#d4e3db] hover:shadow-[0_14px_40px_-18px_rgba(12,90,64,0.22)] hover:-translate-y-1"
                            >
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-[11px] tabular-nums text-[#b3bac2] group-hover:text-[#0c5a40] transition-colors">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span
                                            className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white border border-[#e6e8eb] rounded-full"
                                            style={{ color: project.catColor }}
                                        >
                                            {project.category}
                                        </span>
                                    </div>
                                    <span className="text-xs text-[#6e7481] font-mono">{project.duration}</span>
                                </div>

                                {/* Title + tagline */}
                                <div className="flex flex-col gap-3 flex-1">
                                    <h2 className="font-display text-2xl font-bold text-[#1A1A1A] leading-snug group-hover:text-[#0c5a40] transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-[#6e7481] leading-relaxed mb-6">{project.tagline}</p>
                                </div>

                                {/* Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.slice(0, 4).map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-mono text-[#6e7481] bg-white border border-[#e6e8eb] rounded px-2.5 py-1"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.stack.length > 4 && (
                                        <span className="text-xs text-[#6e7481] font-medium px-1 flex items-center">+{project.stack.length - 4}</span>
                                    )}
                                </div>

                                {/* CTA */}
                                <div className="pt-6 border-t border-[#e6e8eb] mt-auto">
                                    <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#0c5a40] flex items-center gap-1 transition-colors">
                                        Read case study →
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
