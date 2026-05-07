export interface Essay {
    slug: string
    title: string
    date: string
    readTime: string
    tags: string[]
    excerpt: string
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
    },
    {
        slug: 'lessons-from-automating-an-accounting-workflow',
        title: 'Lessons from Automating an Accounting Workflow Nobody Touched for 10 Years',
        date: '2025-03-01',
        readTime: '8 min read',
        tags: ['Excel', 'Power Query', 'Automation', 'Process'],
        excerpt:
            'When a process has survived unchanged for a decade, there\'s usually a reason. Navigating the politics and technical debt of replacing it taught me more about change management than any course.',
    },
    {
        slug: 'graph-theory-for-data-analysts',
        title: 'Graph Theory for Data Analysts: What You Actually Need to Know',
        date: '2025-06-10',
        readTime: '10 min read',
        tags: ['Graph Theory', 'Python', 'Network Science', 'Data Science'],
        excerpt:
            'You don\'t need a CS degree to use network analysis. After applying it to 2M+ bike share records, here are the three concepts that actually matter for practical analytical work.',
    },
]

export function getEssayBySlug(slug: string): Essay | undefined {
    return essays.find((e) => e.slug === slug)
}
