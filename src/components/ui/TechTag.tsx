interface TechTagProps {
    label: string
}

export function TechTag({ label }: TechTagProps) {
    return (
        <span className="inline-block font-mono text-xs tracking-wide text-neutral-500 border border-neutral-200 rounded px-2 py-0.5 bg-neutral-50 whitespace-nowrap">
            {label}
        </span>
    )
}
