export interface Essay {
    slug: string
    title: string
    date: string
    readTime: string
    tags: string[]
    excerpt: string
}

export const essaysEs: Essay[] = [
    {
        slug: 'why-sql-is-still-the-best-data-tool',
        title: 'Por qué SQL sigue siendo la mejor herramienta de datos en 2025',
        date: '2025-01-15',
        readTime: '6 min de lectura',
        tags: ['SQL', 'Análisis de datos', 'Herramientas'],
        excerpt:
            'A pesar de la proliferación de notebooks en Python, dbt y Spark, SQL sigue siendo la herramienta más productiva para la mayoría del trabajo analítico. Aquí explico por qué sigo recurriendo a ella primero.',
    },
    {
        slug: 'lessons-from-automating-an-accounting-workflow',
        title: 'Lecciones de automatizar un flujo contable que nadie tocó en 10 años',
        date: '2025-03-01',
        readTime: '8 min de lectura',
        tags: ['Excel', 'Power Query', 'Automatización', 'Procesos'],
        excerpt:
            'Cuando un proceso ha sobrevivido sin cambios durante una década, suele haber una razón. Navegar la política interna y la deuda técnica de reemplazarlo me enseñó más sobre gestión del cambio que cualquier curso.',
    },
    {
        slug: 'graph-theory-for-data-analysts',
        title: 'Teoría de grafos para analistas de datos: lo que realmente necesitas saber',
        date: '2025-06-10',
        readTime: '10 min de lectura',
        tags: ['Teoría de grafos', 'Python', 'Ciencia de redes', 'Ciencia de datos'],
        excerpt:
            'No necesitas una carrera en informática para usar análisis de redes. Tras aplicarlo a más de 2 millones de registros de bicicletas compartidas, estos son los tres conceptos que realmente importan en el trabajo analítico práctico.',
    },
]

export function getEssayBySlugEs(slug: string): Essay | undefined {
    return essaysEs.find((e) => e.slug === slug)
}
