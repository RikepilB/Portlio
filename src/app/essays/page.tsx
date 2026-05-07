import Link from 'next/link'
import type { Metadata } from 'next'
import { essays } from '@/data/essays'
import { EssayCard } from '@/components/ui/EssayCard'

export const metadata: Metadata = {
    title: 'Essays — Richard Pillaca',
    description: 'Writing on data, automation, and the craft of analytical work.',
}

export default function EssaysPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
            {/* Header */}
            <header className="flex flex-col gap-3 mb-12">
                <span className="text-xs font-semibold tracking-widest uppercase text-amber-700">
                    Writing
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold font-display text-neutral-900">Essays</h1>
                <p className="text-lg text-neutral-500 max-w-xl">
                    Practical writing on data analysis, automation, and the craft of working with messy
                    real-world data.
                </p>
            </header>

            {/* Essay list */}
            <div className="flex flex-col" aria-label="Essay list">
                {essays.map((essay) => (
                    <EssayCard key={essay.slug} essay={essay} />
                ))}
            </div>

            {/* Substack CTA */}
            <div className="mt-14 p-6 bg-amber-50 border border-amber-200 rounded-xl flex flex-col gap-3">
                <h2 className="text-lg font-bold font-display text-neutral-900">
                    Get new essays by email
                </h2>
                <p className="text-sm text-neutral-600">
                    I publish irregularly — when I have something worth saying. No spam, no newsletter
                    cadence.
                </p>
                <Link
                    href="https://substack.com/@richardpillaca"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Subscribe to Richard Pillaca on Substack (opens in new tab)"
                    className="inline-flex self-start items-center gap-2 bg-amber-700 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors duration-150"
                >
                    Subscribe on Substack →
                </Link>
            </div>
        </div>
    )
}
