export interface Essay {
    slug: string
    title: string
    date: string
    readTime: string
    tags: string[]
    excerpt: string
    /** Paragraphs of the essay body. Empty means the page still shows the placeholder. */
    body: string[]
}

export const essays: Essay[] = [
    {
        slug: 'why-sql-is-still-the-best-data-tool',
        title: 'Why SQL Is Still the Best Data Tool in 2025',
        date: '2025-01-15',
        readTime: '6 min read',
        tags: ['SQL', 'Data Analysis', 'Tools'],
        excerpt:
            'Despite the proliferation of Python notebooks, dbt, and Spark, SQL remains the most productive tool for the majority of analytical work. Here\'s why I still reach for it first.',
        body: [
            'Most analytical questions I get are still joins, filters, and aggregations over tables someone already modeled. Python notebooks, dbt, and Spark are the right tools when the job is pipelines, experiments, or truly large compute. For the majority of "what happened, to whom, and how often?" work, SQL is faster to write, easier to review, and closer to the warehouse the rest of the team already trusts.',
            'The advantage is not nostalgia. SQL is the shared language between analysts, engineers, and the database. A query can be pasted into a PR, a dashboard, or a notebook without translating the business logic into pandas idioms that only one person remembers. When I have used graph tooling in R for the Mobi bike-share network, that was because the question was structural — centrality, clustering, a living graph — not because SQL had failed at counting trips.',
            'I reach for SQL first when the grain of the data is already tabular and the question fits a SELECT. I move off it when the work is messy files, iterative feature engineering, or a network that is not a table. The mistake is treating the newer stack as a default personality rather than a set of tools with a narrower job.',
            'That is why SQL is still the first tool I open in 2025. Not because Spark is fake, and not because notebooks are sloppy — because most of the work is still asking a well-modeled table a precise question, and SQL is the shortest honest path to the answer.',
        ],
    },
    {
        slug: 'lessons-from-automating-an-accounting-workflow',
        title: 'Lessons from Automating an Accounting Workflow Nobody Touched for 10 Years',
        date: '2025-03-01',
        readTime: '8 min read',
        tags: ['Excel', 'Power Query', 'Automation', 'Process'],
        excerpt:
            'When a process has survived unchanged for a decade, there\'s usually a reason. Navigating the politics and technical debt of replacing it taught me more about change management than any course.',
        body: [
            'The accounting journal-entry workflow I automated had lasted because it worked well enough, lived in files people already knew, and failing it in public would have been worse than wasting a morning. A Canadian firm was copying SAP exports through seven manual steps across three workbooks. Errors showed up in audit review, often weeks later. The technical job was a Power Query pipeline that refreshes in 12 minutes. The real job was not scaring the people who owned the close.',
            'I shadowed the team for two sessions before writing a query. Every formula, every mapping table, every "we always paste it here" was load-bearing social knowledge. Replacing seven copy-paste steps with Refresh All only shipped because the output format did not change and a validation query turned green only when debits equaled credits to the penny. The first month that check caught three mismatches that used to wait for audit.',
            'Non-technical staff ran it after a 20-minute walkthrough. A one-page guide and a one-button VBA wrapper mattered more than a clever M pattern. Maintainability sat in a lookup table for account mapping, not in hunting through formulas. That is the opposite of a rewrite-for-rewrite\'s-sake: keep the ritual, remove the risk.',
            'A process that survives a decade is rarely just lazy. It is a coalition of habit, fear, and a format the next person in the chain already expects. Automating it is change management with an ETL costume. If the numbers still land in the same cells, people will let you take the paste buffer away.',
        ],
    },
    {
        slug: 'graph-theory-for-data-analysts',
        title: 'Graph Theory for Data Analysts: What You Actually Need to Know',
        date: '2025-06-10',
        readTime: '10 min read',
        tags: ['Graph Theory', 'Python', 'Network Science', 'Data Science'],
        excerpt:
            'You don\'t need a CS degree to use network analysis. After applying it to 2M+ bike share records, here are the three concepts that actually matter for practical analytical work.',
        body: [
            'You do not need a CS degree to use network analysis on operational data. For the Mobi Vancouver bike-share work I modeled 264 stations as nodes and trips as weighted edges, then asked which stations are load-bearing and which are quietly expensive. The published case study uses the September 2024 extract — 150K+ trips through an R ETL into igraph. The three ideas that actually changed the recommendation were not textbook-complete graph theory. They were clustering, centrality, and degree ratio.',
            'Clustering first: invert edge weights so frequent routes read as close, then let Ward\'s method partition the network. Four communities fell out (84, 80, 74, and 26 stations). That is an operations map — where cohesion is high, where it is weak — not a pretty dendrogram for its own sake.',
            'Centrality second, and more than one lens. Betweenness (mean 239.2) named the bridges traffic must flow through — stations 222, 76, and 223 in this extract. Eigenvector pointed at hubs wired to other busy nodes (209, 105, 103). Closeness (mean 0.566) ranked reachability. Together they are a priority list: keep the bridges stocked, do not treat every dot on the map as equal.',
            'Degree ratio third. No sink nodes — every station sent and received — but Node 982 absorbed far more than it dispatched (ratio 3.5). That is the station you send the truck to before the dock fills. Dashboards that only show current bike counts never say why. The graph does.',
            'Those three are enough to go from "the network feels uneven" to a zone-based rebalancing plan. The rest of the theory can wait until the operator asks a question the graph has not already answered.',
        ],
    },
]

export function getEssayBySlug(slug: string): Essay | undefined {
    return essays.find((e) => e.slug === slug)
}
