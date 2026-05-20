'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

const categories = ['All', 'DATA SCIENCE', 'RESEARCH', 'EXCEL AUTOMATION', 'FULL STACK']

export default function ProjectsPage() {
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

    return (
        <div className="bg-white min-h-screen">
            {/* ── Subdued Layout Header ── */}
            <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-16 pb-12">
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4 animate-fade-up">
                    Projects
                </h1>
                <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed animate-fade-up stagger-1">
                    Case studies in data science, research, automation, and full-stack engineering.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-24 border-t border-[#F3F4F6] pt-12">
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
                                    : 'text-[#6B7280] border-[#E5E7EB] bg-white hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8 animate-fade-up stagger-3" role="list">
                    {filtered.map((project) => (
                        <article key={project.id} role="listitem">
                            <Link
                                href={`/projects/${project.slug}`}
                                aria-label={`View case study: ${project.title}`}
                                className="group flex flex-col h-full bg-[#F9FAFB] p-8 rounded-2xl border border-[#F3F4F6] transition-all hover:bg-white hover:border-[#E5E7EB] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                            >
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white border border-[#E5E7EB] rounded-full"
                                        style={{ color: project.catColor }}
                                    >
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-[#6B7280] font-mono">{project.duration}</span>
                                </div>

                                {/* Title + tagline */}
                                <div className="flex flex-col gap-3 flex-1">
                                    <h2 className="font-display text-2xl font-bold text-[#1A1A1A] leading-snug group-hover:text-[#10B981] transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{project.tagline}</p>
                                </div>

                                {/* Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.slice(0, 4).map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-mono text-[#6B7280] bg-white border border-[#E5E7EB] rounded px-2.5 py-1"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.stack.length > 4 && (
                                        <span className="text-xs text-[#6B7280] font-medium px-1 flex items-center">+{project.stack.length - 4}</span>
                                    )}
                                </div>

                                {/* CTA */}
                                <div className="pt-6 border-t border-[#E5E7EB] mt-auto">
                                    <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#10B981] flex items-center gap-1 transition-colors">
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
