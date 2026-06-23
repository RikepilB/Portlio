'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
import { experiences } from '@/data/experience'

type ResumeMode = 'technical' | 'consulting'

export default function ResumePage() {
    const summary = "Software Engineer and Data Analyst combining Python/TypeScript full-stack development with rigorous data modeling. Proven ability to build scalable pipelines, automate CI/CD workflows, and architect React/Django systems. Known for turning complex requirements into resilient production code."
    const coreSkills = ['Python', 'TypeScript', 'SQL', 'React/Next.js', 'Django', 'Docker', 'PostgreSQL', 'GitHub Actions']

    return (
        <div className="bg-[#f8f9fa] min-h-screen py-16">
            <div className="max-w-[850px] mx-auto">

                {/* Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-6 mb-8 px-6 animate-fade-up">
                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#0c5a40] transition-colors"
                    >
                        <Download size={16} strokeWidth={2} />
                        Download PDF
                    </a>
                </div>

                {/* The Resume "Paper" */}
                <div className="bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:rounded-2xl border-y sm:border border-[#e6e8eb] px-8 sm:px-16 py-16 animate-fade-up stagger-1">
                    {/* Header */}
                    <header className="border-b border-[#e6e8eb] pb-8 mb-8 text-center sm:text-left">
                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-2">Richard Pillaca </h1>
                        <p className="text-[#0c5a40] font-mono text-sm tracking-wide mb-4">
                            SOFTWARE ENGINEER & DATA ANALYST
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2 text-xs font-mono text-[#6e7481]">
                            <span>Toronto, ON</span>
                            <span className="hidden sm:inline">|</span>
                            <span>ridi.pillaca@gmail.com</span>
                            <span className="hidden sm:inline">|</span>
                            <a href="https://linkedin.com/in/richardpillacaburga" rel="noopener noreferrer" className="hover:text-[#1A1A1A]">linkedin.com/in/richardpillacaburga</a>
                        </div>
                    </header>

                    {/* Professional Summary */}
                    <section className="mb-10">
                        <h2 className="text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#e6e8eb] pb-2 mb-4">
                            Summary
                        </h2>
                        <p className="text-sm text-[#6e7481] leading-relaxed">{summary}</p>
                    </section>

                    {/* Highlighted Skills */}
                    <section className="mb-10">
                        <h2 className="text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#e6e8eb] pb-2 mb-4">
                            Core Competencies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {coreSkills.map(skill => (
                                <span key={skill} className="text-xs font-mono text-[#1A1A1A] bg-[#f8f9fa] border border-[#e6e8eb] rounded px-2.5 py-1">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-10">
                        <h2 className="text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#e6e8eb] pb-2 mb-6">
                            Experience
                        </h2>
                        <div className="flex flex-col gap-8">
                            {experiences.slice(0, 4).map(exp => (
                                <div key={exp.id}>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                                        <h3 className="text-[15px] font-bold text-[#1A1A1A]">{exp.role}</h3>
                                        <span className="text-xs font-mono text-[#6e7481]">{exp.period}</span>
                                    </div>
                                    <p className="text-sm font-medium text-[#0c5a40] mb-3">{exp.org} <span className="text-[#6e7481] font-normal">— {exp.location}</span></p>
                                    <ul className="space-y-2">
                                        {exp.bullets.map((b, i) => (
                                            <li key={i} className="relative pl-4 text-xs text-[#6e7481] leading-relaxed">
                                                <span className="absolute left-0 top-1.5 w-[3px] h-[3px] rounded-full bg-[#1A1A1A]" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#e6e8eb] pb-2 mb-4">
                            Education
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
                            <h3 className="text-[15px] font-bold text-[#1A1A1A]">University of British Columbia</h3>
                            <span className="text-xs font-mono text-[#6e7481]">2021 – 2025</span>
                        </div>
                        <p className="text-sm text-[#0c5a40] font-medium mb-1">B.Sc. Computer Science <span className="text-[#6e7481] font-normal">— Minor in Economics</span></p>
                        <p className="text-xs text-[#6e7481]">Certifications: Microsoft PL-300 (Power BI), Certified Scrum Master (CSM), Python Institute Associate</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
