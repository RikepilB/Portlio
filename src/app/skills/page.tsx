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
        name: 'Languages & Data Layer',
        items: ['Java', 'Python', 'JavaScript/TypeScript', 'PHP', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
    },
    {
        name: 'Frameworks & Libraries',
        items: ['React', 'Next.js', 'Node.js', 'Django', 'FastAPI', 'Laravel Socialite', 'Spring Boot', 'Alpine.js', 'Tailwind CSS'],
    },
    {
        name: 'DevOps & Tools',
        items: ['Agile/Scrum', 'Git', 'CI/CD', 'AWS', 'Vercel', 'Docker', 'Cloudflare', 'REST APIs', 'GraphQL', 'Webhooks', 'Event-driven Architecture', 'Kafka', 'JUnit', 'PyTest', 'Playwright', 'Datadog', 'PostHog'],
    },
    {
        name: 'Analytics & AI',
        items: ['ETL', 'Data Modeling', 'Pandas', 'Excel', 'Power BI', 'LLM Integration', 'RAG', 'AI Agents', 'LangGraph', 'MCP', 'Vercel AI'],
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
                <p className="text-lg text-[#6e7481] max-w-xl leading-relaxed animate-fade-up stagger-1">
                    The languages, tools, and platforms I use to build automated pipelines, software systems, and data models.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-24 border-t border-[#e6e8eb] pt-16">

                {/* Core Expertise Areas */}
                <div className="grid md:grid-cols-3 gap-8 mb-24 animate-fade-up stagger-2">
                    {areas.map((area) => (
                        <div key={area.title} className="flex flex-col h-full bg-[#f8f9fa] p-8 rounded-2xl border border-[#e6e8eb] hover:bg-white transition-colors duration-300">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#e6e8eb] flex items-center justify-center text-[#0c5a40] mb-6">
                                {area.icon}
                            </div>
                            <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-3">{area.title}</h2>
                            <p className="text-sm text-[#6e7481] leading-relaxed mb-8 flex-1">{area.desc}</p>

                            <div className="border-t border-[#e6e8eb] pt-6 mt-auto">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-[#1A1A1A] mb-3">Core Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {area.tools.map((t) => (
                                        <span key={t} className="text-[11px] font-mono text-[#6e7481] bg-white border border-[#e6e8eb] rounded px-2 py-1">
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
                    <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-8">Complete Skills Stack</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {categories.map((cat, idx) => {
                            const accentColor = idx === 1 || idx === 3 ? '#8a6516' : '#0c5a40'
                            return (
                                <div key={cat.name} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 border-b pb-3" style={{ borderColor: '#e6e8eb' }}>
                                        <span
                                            className="text-xs font-bold w-6 h-6 flex items-center justify-center rounded"
                                            style={{ backgroundColor: accentColor, color: 'white' }}
                                            aria-hidden
                                        >
                                            {idx + 1}
                                        </span>
                                        <h4 className="text-xs font-bold tracking-widest uppercase text-[#1A1A1A]">
                                            {cat.name}
                                        </h4>
                                    </div>
                                    <ul className="flex flex-col gap-2">
                                        {cat.items.map((item) => (
                                            <li key={item} className="text-[13px] text-[#6e7481] flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-[#e6e8eb]" aria-hidden />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Certifications (Clean minimal strip) */}
                <div className="mt-24 pt-16 border-t border-[#e6e8eb] animate-fade-up stagger-4">
                    <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-8">Certifications</h3>
                    <div className="flex flex-wrap gap-4">
                        <div className="px-5 py-3 rounded-full border border-[#e6e8eb] bg-white text-sm font-medium text-[#1A1A1A] flex items-center gap-2 hover:border-[#2bc08f] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#2bc08f]" aria-hidden />
                            Microsoft Certified: Power BI Data Analyst (PL-300)
                        </div>
                        <div className="px-5 py-3 rounded-full border border-[#e6e8eb] bg-white text-sm font-medium text-[#1A1A1A] flex items-center gap-2 hover:border-[#c79a3a] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#c79a3a]" aria-hidden />
                            Certified Scrum Master (CSM)
                        </div>
                        <div className="px-5 py-3 rounded-full border border-[#e6e8eb] bg-white text-sm font-medium text-[#1A1A1A] flex items-center gap-2 hover:border-[#2bc08f] transition-colors">
                            <span className="w-2 h-2 rounded-full bg-[#2bc08f]" aria-hidden />
                            Python Institute: Certified Associate
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
