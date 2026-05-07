interface MetricCardProps {
    metric: string
    label: string
}

export function MetricCard({ metric, label }: MetricCardProps) {
    return (
        <div className="flex flex-col gap-1 p-4 border border-neutral-100 rounded-lg bg-stone-50">
            <span className="text-3xl font-bold tracking-tight text-neutral-900 font-display leading-none">
                {metric}
            </span>
            <span className="text-sm text-neutral-500 leading-snug">{label}</span>
        </div>
    )
}
