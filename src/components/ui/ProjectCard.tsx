import Link from 'next/link'
import type { Project } from '@/data/projects'
import { TechTag } from './TechTag'

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const displayMetrics = project.results.slice(0, 2)
    const displayStack = project.stack.slice(0, 3)

    return (
        <Link
            href={`/projects/${project.slug}`}
            aria-label={`View case study: ${project.title}`}
            className="group flex flex-col gap-4 p-6 border border-neutral-200 rounded-xl bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200 ease-out"
        >
            {/* Category tag */}
            <span
                className="inline-block self-start text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                style={{ color: project.catColor, backgroundColor: `${project.catColor}15` }}
            >
                {project.category}
            </span>

            {/* Title + tagline */}
            <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold font-display text-neutral-900 leading-snug group-hover:text-amber-700 transition-colors duration-150">
                    {project.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">{project.tagline}</p>
            </div>

            {/* Key metrics */}
            <div className="flex gap-4 border-t border-neutral-100 pt-4">
                {displayMetrics.map((r) => (
                    <div key={r.label} className="flex flex-col gap-0.5">
                        <span className="text-lg font-bold text-neutral-900 font-display leading-none">
                            {r.metric}
                        </span>
                        <span className="text-xs text-neutral-400 leading-tight">{r.label}</span>
                    </div>
                ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
                {displayStack.map((tech) => (
                    <TechTag key={tech} label={tech} />
                ))}
                {project.stack.length > 3 && (
                    <span className="text-xs text-neutral-400 font-mono self-center">
                        +{project.stack.length - 3} more
                    </span>
                )}
            </div>
        </Link>
    )
}
