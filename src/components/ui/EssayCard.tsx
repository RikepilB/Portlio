import Link from 'next/link'
import type { Essay } from '@/data/essays'
import { formatDate } from '@/lib/utils'

interface EssayCardProps {
    essay: Essay
}

export function EssayCard({ essay }: EssayCardProps) {
    return (
        <Link
            href={`/essays/${essay.slug}`}
            aria-label={`Read essay: ${essay.title}`}
            className="group flex flex-col gap-2 py-5 border-b border-neutral-100 last:border-b-0 hover:bg-stone-50 -mx-3 px-3 rounded-lg transition-colors duration-150"
        >
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-neutral-900 leading-snug group-hover:text-amber-700 transition-colors duration-150">
                    {essay.title}
                </h3>
                <span className="text-xs text-neutral-400 shrink-0 mt-0.5 font-mono">{essay.readTime}</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">{essay.excerpt}</p>
            <div className="flex gap-2 items-center flex-wrap">
                <span className="text-xs text-neutral-400">{formatDate(essay.date)}</span>
                <span className="text-neutral-300">·</span>
                {essay.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-mono text-neutral-400 border border-neutral-200 rounded px-1.5 py-0.5"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    )
}
