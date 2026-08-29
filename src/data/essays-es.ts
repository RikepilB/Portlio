import type { Essay } from '@/data/essays'

export const essaysEs: Essay[] = [
    {
        slug: 'why-sql-is-still-the-best-data-tool',
        title: 'Por qué SQL sigue siendo la mejor herramienta de datos en 2025',
        date: '2025-01-15',
        readTime: '6 min de lectura',
        tags: ['SQL', 'Análisis de datos', 'Herramientas'],
        excerpt:
            'A pesar de la proliferación de notebooks en Python, dbt y Spark, SQL sigue siendo la herramienta más productiva para la mayoría del trabajo analítico. Aquí explico por qué sigo recurriendo a ella primero.',
        body: [
            'La mayoría de las preguntas analíticas que recibo siguen siendo joins, filtros y agregaciones sobre tablas que alguien ya modeló. Los notebooks de Python, dbt y Spark son las herramientas correctas cuando el trabajo es pipelines, experimentos o cómputo de verdad grande. Para la mayoría de "qué pasó, a quién, y con qué frecuencia", SQL se escribe más rápido, se revisa más fácil y está más cerca del warehouse que el resto del equipo ya confía.',
            'La ventaja no es nostalgia. SQL es el idioma compartido entre analistas, ingenieros y la base de datos. Una consulta se pega en un PR, un dashboard o un notebook sin traducir la lógica de negocio a idiomas de pandas que solo una persona recuerda. Cuando usé grafos en R para la red de bicicletas Mobi, fue porque la pregunta era estructural — centralidad, clustering, un grafo vivo — no porque SQL hubiera fallado al contar viajes.',
            'Recurro a SQL primero cuando el grano de los datos ya es tabular y la pregunta cabe en un SELECT. Me salgo cuando el trabajo son archivos sucios, feature engineering iterativo o una red que no es una tabla. El error es tratar el stack más nuevo como personalidad por defecto en lugar de un conjunto de herramientas con un trabajo más estrecho.',
            'Por eso SQL sigue siendo lo primero que abro en 2025. No porque Spark sea falso, ni porque los notebooks sean descuidados: porque la mayor parte del trabajo sigue siendo hacerle una pregunta precisa a una tabla bien modelada, y SQL es el camino más corto y honesto a la respuesta.',
        ],
    },
    {
        slug: 'lessons-from-automating-an-accounting-workflow',
        title: 'Lecciones de automatizar un flujo contable que nadie tocó en 10 años',
        date: '2025-03-01',
        readTime: '8 min de lectura',
        tags: ['Excel', 'Power Query', 'Automatización', 'Procesos'],
        excerpt:
            'Cuando un proceso ha sobrevivido sin cambios durante una década, suele haber una razón. Navegar la política interna y la deuda técnica de reemplazarlo me enseñó más sobre gestión del cambio que cualquier curso.',
        body: [
            'El flujo de asientos contables que automaticé duró porque funcionaba lo suficiente, vivía en archivos que la gente ya conocía, y fallar en público hubiera sido peor que perder una mañana. Un despacho canadiense copiaba exportaciones de SAP en siete pasos manuales a través de tres libros. Los errores aparecían en la revisión de auditoría, a menudo semanas después. El trabajo técnico fue un pipeline de Power Query que refresca en 12 minutos. El trabajo real fue no asustar a quienes cierran el mes.',
            'Acompañé al equipo dos sesiones antes de escribir una query. Cada fórmula, cada tabla de mapeo, cada "siempre lo pegamos aquí" era conocimiento social de carga. Reemplazar siete copy-paste por Refresh All solo se lanzó porque el formato de salida no cambió y una query de validación se pone verde solo si débitos igualan créditos al céntimo. El primer mes ese chequeo pescó tres descuadres que antes esperaban a auditoría.',
            'El personal no técnico lo operó después de una explicación de 20 minutos. Una guía de una página y un wrapper VBA de un botón importaron más que un patrón M ingenioso. La mantenibilidad está en una tabla de lookup para el mapeo de cuentas, no en cazar fórmulas. Es lo contrario de reescribir por reescribir: conservar el rito, quitar el riesgo.',
            'Un proceso que sobrevive una década rara vez es solo pereza. Es una coalición de hábito, miedo y un formato que la siguiente persona de la cadena ya espera. Automatizarlo es gestión del cambio disfrazada de ETL. Si los números siguen cayendo en las mismas celdas, te dejan quitar el portapapeles.',
        ],
    },
    {
        slug: 'graph-theory-for-data-analysts',
        title: 'Teoría de grafos para analistas de datos: lo que realmente necesitas saber',
        date: '2025-06-10',
        readTime: '10 min de lectura',
        tags: ['Teoría de grafos', 'Python', 'Ciencia de redes', 'Ciencia de datos'],
        excerpt:
            'No necesitas una carrera en informática para usar análisis de redes. Tras aplicarlo a más de 2 millones de registros de bicicletas compartidas, estos son los tres conceptos que realmente importan en el trabajo analítico práctico.',
        body: [
            'No necesitas una carrera en informática para usar análisis de redes sobre datos operativos. En el trabajo de Mobi Vancouver modelé 264 estaciones como nodos y los viajes como aristas ponderadas, y pregunté cuáles estaciones sostienen la red y cuáles salen caras en silencio. El caso de estudio publicado usa el extracto de septiembre 2024 — más de 150 mil viajes a través de un ETL en R hacia igraph. Las tres ideas que de verdad cambiaron la recomendación no fueron teoría de grafos de libro. Fueron clustering, centralidad y el ratio de grado.',
            'Clustering primero: invertir pesos de arista para que las rutas frecuentes se lean como cercanas, y dejar que el método de Ward parta la red. Salieron cuatro comunidades (84, 80, 74 y 26 estaciones). Eso es un mapa de operaciones — dónde la cohesión es alta, dónde es débil — no un dendrograma bonito por sí mismo.',
            'Centralidad segundo, y con más de un lente. Betweenness (media 239.2) nombró los puentes por los que el tráfico tiene que pasar — estaciones 222, 76 y 223 en este extracto. Eigenvector señaló hubs cableados a otros nodos ocupados (209, 105, 103). Closeness (media 0.566) ordenó la alcanzabilidad. Juntas son una lista de prioridad: mantener los puentes abastecidos, no tratar cada punto del mapa como igual.',
            'Ratio de grado tercero. No hubo nodos sumidero — cada estación envió y recibió — pero el nodo 982 absorbió mucho más de lo que despachó (ratio 3.5). Esa es la estación a la que mandas el camión antes de que el dock se llene. Los dashboards que solo muestran conteos actuales nunca dicen por qué. El grafo sí.',
            'Esos tres bastan para pasar de "la red se siente desigual" a un plan de rebalanceo por zona. El resto de la teoría puede esperar hasta que el operador haga una pregunta que el grafo no haya contestado ya.',
        ],
    },
]

export function getEssayBySlugEs(slug: string): Essay | undefined {
    return essaysEs.find((e) => e.slug === slug)
}
