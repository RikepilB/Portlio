interface SectionHeaderProps {
    eyebrow?: string
    heading: string
    subtext?: string
    className?: string
}

export function SectionHeader({ eyebrow, heading, subtext, className = '' }: SectionHeaderProps) {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {eyebrow && (
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-gold">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-matte md:text-4xl">
                {heading}
            </h2>
            {subtext && (
                <p className="max-w-2xl text-lg leading-relaxed text-ink-on-felt">{subtext}</p>
            )}
        </div>
    )
}
