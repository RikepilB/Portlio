interface TechTagProps {
    label: string
}

export function TechTag({ label }: TechTagProps) {
    return (
        <span className="inline-block whitespace-nowrap rounded border border-rule bg-felt-deep/35 px-2 py-0.5 font-mono text-xs tracking-wide text-muted">
            {label}
        </span>
    )
}
