import type { Metadata } from 'next'
import { Code2, Database, Network } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Skills — Richard Pillaca',
    description: 'Technical skills, tools, and certifications of Richard Pillaca Burga.',
}

const areas = [
    {
        icon: <Database size={24} strokeWidth={1.5} />,
        title: 'Data & Analytics',
        desc: 'Translating messy data into clean, automated reporting pipelines. I build solutions that replace hours of manual spreadsheet work with reliable refreshable reports.',
        tools: ['SQL', 'Power BI / DAX', 'Python (Pandas, Numpy)', 'Power Query / M', 'Excel (VBA)'],
    },
    {
        icon: <Code2 size={24} strokeWidth={1.5} />,
        title: 'Software Engineering',
        desc: 'Building full-stack applications with an emphasis on robust backends, continuous integration, and clean user interfaces.',
        tools: ['Python', 'TypeScript', 'Java', 'React / Next.js', 'Django'],
    },
    {
        icon: <Network size={24} strokeWidth={1.5} />,
        title: 'Modeling & Research',
        desc: 'Applying statistical methods and graph theory to uncover patterns. From analyzing 5,000+ codebases for technical debt to optimizing city-wide bike share networks.',
        tools: ['Graph Theory (NetworkX)', 'SciPy', 'Statistical Testing', 'Geopandas'],
    },
]

const categories = [
    {
        name: 'Core Languages',
        items: ['Python', 'SQL', 'TypeScript', 'Java', 'VBA', 'M Language', 'R', 'PHP'],
    },
    {
        name: 'Data & DevOps',
        items: ['Power BI', 'Excel Advanced', 'Docker', 'GitHub Actions', 'PostgreSQL', 'Firebase', 'Supabase'],
    },
    {
        name: 'Frameworks',
        items: ['React', 'Next.js', 'Django', 'Tailwind CSS', 'Android Studio'],
    },
    {
        name: 'Research & AI',
        items: ['Pandas / Numpy', 'NetworkX', 'SciPy', 'Claude MCP', 'Cursor / Windsurf'],
    },
]

export default function SkillsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* ── Header ── */}
            <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-16 pb-12">
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4 animate-fade-up">
                    Skills & Stack
                </h1>
                <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed animate-fade-up stagger-1">
                    The languages, tools, and platforms I use to build automated pipelines, software systems, and data models.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-24 border-t border-[#F3F4F6] pt-16">

                {/* Core Expertise Areas */}
                <div className="grid md:grid-cols-3 gap-8 mb-24 animate-fade-up stagger-2">
                    {areas.map((area) => (
                        <div key={area.title} className="flex flex-col h-full bg-[#F9FAFB] p-8 rounded-2xl border border-[#F3F4F6] hover:bg-white transition-colors duration-300">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#E5E7EB] flex items-center justify-center text-[#10B981] mb-6">
                                {area.icon}
                            </div>
                            <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-3">{area.title}</h2>
                            <p className="text-sm text-[#6B7280] leading-relaxed mb-8 flex-1">{area.desc}</p>

                            <div className="border-t border-[#E5E7EB] pt-6 mt-auto">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] mb-3">Core Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {area.tools.map((t) => (
                                        <span key={t} className="text-[11px] font-mono text-[#6B7280] bg-white border border-[#E5E7EB] rounded px-2 py-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Complete Tech Stack Grid */}
                <div className="animate-fade-up stagger-3">
                    <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-8">All Technologies</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {categories.map((cat) => (
                            <div key={cat.name} className="flex flex-col gap-4">
                                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A] border-b border-[#F3F4F6] pb-3">
                                    {cat.name}
                                </h4>
                                <ul className="flex flex-col gap-2">
                                    {cat.items.map((item) => (
                                        <li key={item} className="text-[13px] text-[#6B7280] flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[#E5E7EB]" aria-hidden />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications (Clean minimal strip) */}
                <div className="mt-24 pt-16 border-t border-[#F3F4F6] animate-fade-up stagger-4">
                    <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-8">Certifications</h3>
                    <div className="flex flex-wrap gap-4">
                        <div className="px-5 py-3 rounded-full border border-[#E5E7EB] bg-white text-sm font-medium text-[#1A1A1A] flex items-center gap-2 hover:border-[#10B981] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden />
                            Microsoft Certified: Power BI Data Analyst (PL-300)
                        </div>
                        <div className="px-5 py-3 rounded-full border border-[#E5E7EB] bg-white text-sm font-medium text-[#1A1A1A] flex items-center gap-2 hover:border-[#F59E0B] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" aria-hidden />
                            Certified Scrum Master (CSM)
                        </div>
                        <div className="px-5 py-3 rounded-full border border-[#E5E7EB] bg-white text-sm font-medium text-[#1A1A1A] flex items-center gap-2 hover:border-[#3B82F6] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#3B82F6]" aria-hidden />
                            Python Institute: Certified Associate
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
