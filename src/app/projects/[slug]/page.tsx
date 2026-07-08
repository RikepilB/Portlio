import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projects, getProjectBySlug } from '@/data/projects'
import { TechTag } from '@/components/ui/TechTag'
import { MetricCard } from '@/components/ui/MetricCard'

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = getProjectBySlug(slug)
    if (!project) return {}
    return {
        title: `${project.title} — Richard Pillaca`,
        description: project.tagline,
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = getProjectBySlug(slug)
    if (!project) notFound()

    return (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
            {/* Back link */}
            <Link
                href="/projects"
                aria-label="Back to all projects"
                className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-amber-700 transition-colors duration-150 mb-10"
            >
                ← All Projects
            </Link>

            {/* Header */}
            <header className="flex flex-col gap-4 mb-12">
                <div className="flex items-center gap-3 flex-wrap">
                    <span
                        className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ color: project.catColor, backgroundColor: `${project.catColor}15` }}
                    >
                        {project.category}
                    </span>
                    <span className="text-sm text-neutral-400 font-mono">{project.duration}</span>
                    <span className="text-sm text-neutral-400 font-mono">{project.readTime}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold font-display text-neutral-900 leading-tight">
                    {project.title}
                </h1>
                <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tech) => (
                        <TechTag key={tech} label={tech} />
                    ))}
                </div>
            </header>

            {/* Overview */}
            <section className="mb-10" aria-label="Project overview">
                <h2 className="text-xl font-bold font-display text-neutral-900 mb-3">Overview</h2>
                <p className="text-neutral-600 leading-relaxed">{project.overview}</p>
            </section>

            {/* Problem */}
            <section className="mb-10" aria-label="Problem statement">
                <div className="bg-amber-50 border-l-4 border-amber-700 p-5 rounded-r-lg">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-2">
                        The Problem
                    </h2>
                    <p className="text-neutral-700 leading-relaxed">{project.problem}</p>
                </div>
            </section>

            {/* Questions */}
            <section className="mb-10" aria-label="Research questions">
                <h2 className="text-xl font-bold font-display text-neutral-900 mb-4">
                    Questions Addressed
                </h2>
                <ol className="flex flex-col gap-3 list-none">
                    {project.questions.map((q, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="text-sm font-bold text-amber-700 font-mono shrink-0 mt-0.5">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-neutral-600 leading-relaxed">{q}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Methodology */}
            <section className="mb-10" aria-label="Methodology">
                <h2 className="text-xl font-bold font-display text-neutral-900 mb-6">Methodology</h2>
                <div className="flex flex-col gap-6">
                    {project.methodology.map((m, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-4">
                            <div className="shrink-0 w-full sm:w-28">
                                <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 font-mono">
                                    {m.phase}
                                </span>
                                <p className="text-sm font-semibold text-neutral-900 mt-0.5 font-display">
                                    {m.title}
                                </p>
                            </div>
                            <div className="flex-1 border-l border-neutral-100 pl-4 sm:pl-6">
                                <p className="text-sm text-neutral-600 leading-relaxed mb-3">{m.detail}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {m.tech.map((t) => (
                                        <TechTag key={t} label={t} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Results */}
            <section className="mb-10" aria-label="Key results">
                <h2 className="text-xl font-bold font-display text-neutral-900 mb-4">Key Results</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.results.map((r) => (
                        <MetricCard key={r.label} metric={r.metric} label={r.label} />
                    ))}
                </div>
            </section>

            {/* Key Findings */}
            <section className="mb-10" aria-label="Key findings">
                <h2 className="text-xl font-bold font-display text-neutral-900 mb-4">Key Findings</h2>
                <div className="flex flex-col gap-4">
                    {project.keyFindings.map((finding, i) => (
                        <div key={i} className="flex gap-3 bg-neutral-50 border border-neutral-100 rounded-lg p-4">
                            <span className="text-sm font-bold text-amber-700 font-mono shrink-0 mt-0.5">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm text-neutral-700 leading-relaxed">{finding}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion */}
            <section className="mb-10" aria-label="Conclusion">
                <h2 className="text-xl font-bold font-display text-neutral-900 mb-3">Conclusion</h2>
                <p className="text-neutral-600 leading-relaxed">{project.conclusion}</p>
            </section>

            {/* Photo Gallery */}
            {project.images && project.images.length > 0 && (
                <section className="mb-10" aria-label="Project screenshots">
                    <h2 className="text-xl font-bold font-display text-neutral-900 mb-4">Gallery</h2>
                    <div className={`grid gap-4 ${project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                        {project.images.map((src, i) => (
                            <div key={i} className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-100 bg-neutral-50">
                                <Image
                                    src={src}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Links */}
            <div className="border-t border-neutral-100 pt-8 mt-8 flex flex-wrap gap-3">
                {project.github && (
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                        className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-neutral-700 transition-colors duration-150"
                    >
                        View on GitHub →
                    </Link>
                )}
                {project.demoVideo && !project.demoVideo.startsWith('PLACEHOLDER') && (
                    <a
                        href={project.demoVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0c5a40] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0a4a34] transition-colors duration-150"
                    >
                        {project.demoVideo.includes('drive.google.com') ? (
                            <>
                                <span className="text-lg">▶️</span> Watch Demo Video
                            </>
                        ) : (
                            <>View Live Demo →</>
                        )}
                    </a>
                )}
            </div>
        </article>
    )
}
