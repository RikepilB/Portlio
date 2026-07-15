interface MetricCardProps {
    metric: string
    label: string
}

export function MetricCard({ metric, label }: MetricCardProps) {
    return (
        <div className="flex flex-col gap-1 rounded-lg border border-rule bg-felt-deep/35 p-4">
            <span className="font-display text-3xl font-bold leading-none tracking-tight text-foil">
                {metric}
            </span>
            <span className="text-sm leading-snug text-muted">{label}</span>
        </div>
    )
}
