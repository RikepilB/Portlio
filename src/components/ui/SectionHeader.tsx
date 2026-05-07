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
                <span className="text-xs font-semibold tracking-widest uppercase text-amber-700 font-sans">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 font-display leading-tight">
                {heading}
            </h2>
            {subtext && (
                <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">{subtext}</p>
            )}
        </div>
    )
}
