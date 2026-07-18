import type { Project } from '@/data/projects'

type ProjectOverlay = Pick<
    Project,
    | 'category'
    | 'title'
    | 'tagline'
    | 'readTime'
    | 'overview'
    | 'problem'
    | 'questions'
    | 'methodology'
    | 'results'
    | 'keyFindings'
    | 'conclusion'
>

export const projectOverlaysEs: Record<string, ProjectOverlay> = {
    'bike-share-optimization': {
        category: 'CIENCIA DE DATOS',
        title: 'Optimización de la red de bicicletas compartidas',
        tagline:
            '¿Dónde falla realmente la red de bicicletas de una ciudad? Mapeé más de 150K viajes de Mobi Vancouver como un grafo vivo para encontrar los hubs que la sostienen — y los vacíos que le cuestan en silencio.',
        readTime: '8 min de lectura',
        overview:
            'Un proyecto de ciencia de redes que modela el sistema Mobi de Vancouver como un grafo — 264 estaciones como nodos, viajes como aristas ponderadas — para descubrir dónde se rompe la red. Construí un pipeline ETL en R que limpió más de 150K viajes de septiembre de 2024, y luego usé clustering jerárquico de Ward y cuatro métricas de centralidad para identificar los hubs críticos, las zonas muertas y las oportunidades de rebalanceo. Actualmente lo estoy extendiendo con dashboards en Power BI y modelos predictivos para anticipar el desbalance de estaciones antes de que ocurra.',
        problem:
            'Todo usuario de bicicletas compartidas lo ha vivido: la estación está llena y no puedes devolver la bici, o está vacía y no puedes tomar una. Detrás de esa frustración hay un problema operativo difícil: los operadores rebalancean bicicletas con camiones, de forma manual y reactiva, gastando dinero persiguiendo un objetivo móvil. Los dashboards habituales muestran dónde están las bicis, pero nunca por qué la red se comporta así. La apuesta de este proyecto: tratar el sistema como un grafo, y la estructura misma te dirá qué estaciones son estructurales, cuáles son peso muerto y dónde actuar antes de que el desbalance se convierta en problema.',
        questions: [
            '¿Qué estaciones funcionan como hubs principales y cómo influye su conectividad en la eficiencia global de la red?',
            '¿Cómo pueden las estrategias basadas en datos optimizar la distribución de bicicletas y reducir la congestión en estaciones?',
            '¿Qué impacto tienen las variaciones de frecuencia de tránsito en la asignación de recursos a lo largo de la red?',
            '¿Cómo pueden el clustering y el modelado predictivo mejorar la escalabilidad y el rendimiento operativo del sistema?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'De viajes crudos a un grafo limpio',
                detail:
                    'Los datos del mundo real nunca están listos para análisis. Construí un pipeline ETL en R sobre el dataset abierto de ridership de Mobi de septiembre de 2024 — estandarizando IDs de estación a códigos de 4 dígitos, eliminando entradas inválidas y placeholders ("0000") con regex, y colapsando más de 150K viajes individuales en una lista de aristas dirigidas ponderadas por cada par origen→destino único. El resultado: un grafo único y confiable de nodos y aristas consistentes en el que cada métrica posterior podía apoyarse.',
                tech: ['R', 'RStudio', 'CSV', 'igraph'],
            },
            {
                phase: 'Fase 2',
                title: 'Dejar que la red se agrupe sola',
                detail:
                    'Con igraph, convertí el grafo de viajes en una matriz de adyacencia y luego en una matriz de distancias — invirtiendo los pesos de las aristas para que las rutas de alta frecuencia se lean como "cercanas". El clustering jerárquico de Ward minimizó entonces la varianza intra-cluster para que la red revelara sus propias comunidades: cuatro clusters naturales de 84, 80, 74 y 26 estaciones, cada uno con una firma de conectividad distinta. Dendrogramas y grafos de red por cluster hicieron visible la estructura de un vistazo.',
                tech: ['R', 'igraph', 'Ward\'s Method', 'RStudio'],
            },
            {
                phase: 'Fase 3',
                title: 'Encontrar las estaciones que importan',
                detail:
                    'Cuatro lentes de centralidad, cada una respondiendo una pregunta operativa distinta. Betweenness (media 239.2) expuso las estaciones puente por las que debe fluir el tráfico. Eigenvector (media 0.0188) reveló los hubs influyentes conectados a otros nodos de alto tráfico. Los ratios de grado mostraron qué estaciones absorben silenciosamente más bicis de las que liberan. Closeness (media 0.566, rango 0.398–0.620) clasificó qué tan alcanzable es cada estación desde cualquier otro punto. Juntos convierten un mapa plano de puntos en una lista de prioridades ordenada.',
                tech: ['R', 'igraph', 'RStudio'],
            },
            {
                phase: 'Fase 4',
                title: 'Hacerlo operativo — Power BI y predicción (en progreso)',
                detail:
                    'El análisis solo importa si un operador puede actuar sobre él. Estoy exportando membresía de clusters y puntajes de centralidad desde R hacia una tabla de features limpia, uniendo latitud/longitud de estaciones, y construyendo un dashboard interactivo en Power BI: un mapa geoespacial que dimensiona y colorea cada estación por centralidad, un filtro por cluster y un heatmap de ratio de grado que marca candidatos de rebalanceo al instante. En paralelo desarrollo modelos predictivos de demanda para anticipar el desbalance antes de que ocurra — moviendo el proyecto de "así se ve la red" a "aquí hay que enviar el camión mañana".',
                tech: ['Power BI', 'DAX', 'R', 'Predictive Modeling'],
            },
        ],
        results: [
            { metric: '150K+', label: 'Registros de ridership procesados (sep 2024)' },
            { metric: '264', label: 'Estaciones analizadas (Mobi Vancouver)' },
            { metric: '4', label: 'Clusters de red identificados' },
            { metric: '239.2', label: 'Centralidad de betweenness promedio' },
            { metric: '0.566', label: 'Centralidad de closeness media' },
            { metric: '0', label: 'Nodos sumidero — todas las estaciones activas' },
        ],
        keyFindings: [
            'El clustering jerárquico particionó limpiamente la red de 264 estaciones en cuatro comunidades (84, 80, 74 y 26 estaciones). El Cluster 1 mostró la mayor cohesión interna (altura promedio 0.529) mientras el Cluster 3 fue el más débil (0.201) — una señal clara de nodos subutilizados donde la inversión en infraestructura o rebalanceo rinde más.',
            'Un pequeño conjunto de estaciones carga la red: las estaciones 222, 76 y 223 dominan la centralidad de betweenness (promedio 239.2), actuando como nodos puente críticos. Si alguna se satura o vacía, el flujo de viajes en todo el sistema se degrada — convirtiéndolas en los objetivos de mayor prioridad para rebalanceo proactivo.',
            'El análisis de eigenvector identificó las estaciones 209, 105 y 103 como los hubs más influyentes — densamente conectados a otros nodos de alto tráfico y esenciales para la eficiencia global de la red. Son las estaciones cuya confiabilidad define desproporcionadamente la experiencia del usuario.',
            'No se encontraron nodos sumidero: las 264 estaciones contribuyen activamente tanto al tráfico entrante como saliente. Sin embargo, los ratios de grado exponen un desbalance significativo — el Nodo 982 (ratio 3.5) absorbe muchos más viajes de los que despacha, un candidato textbook para redistribución programada de bicicletas.',
            'La centralidad de closeness marcó las estaciones 176, 81 y 198 como las más accesibles en toda la red, mientras las periféricas 988, 994 y 982 dependen de rutas más largas — cuantificando exactamente dónde la red tiene brechas de conectividad y dónde nuevas estaciones mejorarían más la cobertura.',
        ],
        conclusion:
            'La ciencia de redes le da a los operadores de bike-share algo que un dashboard de estado en vivo nunca puede: un diagnóstico estructural de por qué el sistema se comporta como lo hace. Al clasificar estaciones según cómo funcionan realmente en la red — puentes, hubs, sumideros, callejones sin salida — el análisis convierte la intuición en un plan concreto de rebalanceo por zonas: mantener abastecidos los puentes de alto betweenness, alimentar los nodos periféricos de baja closeness, y vigilar los absorbedores desbalanceados como el Nodo 982. Lo mejor: nada de esto es específico de Vancouver — el mismo pipeline corre en cualquier ciudad que publique datos abiertos de bike-share. Ahora lo llevo más lejos: dashboards interactivos en Power BI que ponen la centralidad en un mapa en vivo, datos multi-mes para capturar estacionalidad de demanda, y modelos predictivos que anticipan el desbalance antes de que deje varado a un solo rider — convirtiendo el análisis en una herramienta operativa real.',
    },
    'ai-technical-debt-research': {
        category: 'INVESTIGACIÓN',
        title: 'Deuda técnica de IA en repositorios de software',
        tagline:
            '¿El código generado por IA acumula más deuda técnica? Analizamos más de 5.000 repositorios de GitHub para averiguarlo.',
        readTime: '10 min de lectura',
        overview:
            'A medida que los asistentes de codificación con IA se vuelven ubicuos, surge una pregunta crítica para la ingeniería de software: ¿el código generado por IA acumula deuda técnica más rápido que el escrito por humanos? Este estudio empírico extrajo datos de más de 5.000 repositorios públicos de GitHub, clasificó commits asistidos por IA vs. escritos por humanos, y ejecutó análisis estático para comparar métricas de calidad de código a escala.',
        problem:
            'Herramientas de codificación con IA como GitHub Copilot están ampliamente adoptadas, pero su impacto a largo plazo en la mantenibilidad del código es desconocido. La evidencia anecdótica sugiere que el código de IA puede pasar tests mientras introduce smells sutiles — lógica duplicada, métodos excesivamente complejos, documentación faltante. Este estudio proporciona la primera medición empírica a gran escala.',
        questions: [
            '¿Los repositorios con altas tasas de commits asistidos por IA están asociados con mayor densidad de deuda técnica (issues por KLOC)?',
            '¿Las categorías específicas de code smells (complejidad, duplicación, documentación) difieren significativamente entre código asistido por IA y escrito por humanos?',
            '¿Existe un umbral de uso de IA más allá del cual las métricas de calidad se deterioran de forma medible?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Recolección de datos',
                detail:
                    'Usé la API de GitHub para identificar más de 5.000 repositorios con huellas de herramientas de IA en mensajes de commit y descripciones de PR (keywords: "Copilot", "ChatGPT", "AI-generated"). Emparejé cada uno con un repositorio control de tamaño, lenguaje y actividad similares. Extraje historiales de commits, conteos de contribuidores e issue trackers.',
                tech: ['Python', 'GitHub API', 'Pandas'],
            },
            {
                phase: 'Fase 2',
                title: 'Análisis estático',
                detail:
                    'Ejecuté análisis con SonarQube en todos los repositorios para medir: complejidad ciclomática, porcentaje de duplicación de código, cobertura de documentación y densidad de bugs. Clasifiqué hallazgos por severidad (blocker, critical, major, minor) y normalicé por KLOC para comparación justa entre tamaños de proyecto.',
                tech: ['SonarQube', 'Python', 'Bash'],
            },
            {
                phase: 'Fase 3',
                title: 'Análisis estadístico y hallazgos',
                detail:
                    'Apliqué pruebas Mann-Whitney U (no paramétricas, apropiadas para distribuciones no normales) para comparar métricas de deuda entre grupos asistidos por IA y control. Calculé tamaños de efecto con Cohen\'s d. Construí modelos de regresión para identificar qué niveles de uso de IA correlacionan con degradación de calidad.',
                tech: ['SciPy', 'Pandas', 'Mann-Whitney U', 'statsmodels'],
            },
        ],
        results: [
            { metric: '5,000+', label: 'Repositorios analizados' },
            { metric: '3', label: 'Preguntas de investigación respondidas' },
            { metric: '#1', label: 'Premio a la Mejor Presentación' },
            { metric: 'MSR', label: 'Nominación a Mining Software Repositories' },
        ],
        keyFindings: [
            'Los repositorios con >40% de commits asistidos por IA muestran tasas de duplicación estadísticamente significativamente más altas (p < 0.01, Cohen\'s d = 0.42) — un tamaño de efecto medio.',
            'La cobertura de documentación es 23% menor en promedio en repositorios con alto uso de IA, sugiriendo que las herramientas de IA generan código funcional pero omiten docstrings y comentarios.',
            'No se encontró diferencia significativa en densidad de bugs entre grupos, desafiando la suposición de que el código de IA es inherentemente más propenso a bugs.',
            'La relación entre uso de IA y deuda técnica es no lineal: el uso moderado de IA (20–40%) no muestra degradación; solo el uso intensivo (>60%) dispara caídas medibles de calidad.',
        ],
        conclusion:
            'Los asistentes de codificación con IA no son inherentemente dañinos para la calidad del código — pero un uso intensivo y sin control correlaciona con mayor duplicación y documentación reducida. Los equipos deberían integrar herramientas de IA con políticas de code review que verifiquen específicamente smells de documentación y duplicación. El dataset completo y los scripts de análisis están disponibles para replicación.',
    },
    'accounting-automation': {
        category: 'AUTOMATIZACIÓN EXCEL',
        title: 'Automatización de asientos contables',
        tagline:
            'Reemplazando más de 4 horas de copiar y pegar manual con un refresh de Power Query de 12 minutos — construido para equipos contables reales.',
        readTime: '6 min de lectura',
        overview:
            'Una firma contable canadiense procesaba asientos mensuales copiando manualmente datos de exportaciones SAP a Excel, aplicando fórmulas y reformateando para envío. Esta tarea mensual de 4 horas era propensa a errores y consumía tiempo de contadores senior. Este proyecto reemplazó todo el flujo manual con un pipeline de Power Query que se refresca en 12 minutos sin copiar ni pegar.',
        problem:
            'El proceso manual involucraba 7 pasos separados de copiar y pegar entre 3 libros de Excel, sin validación — lo que significa que los errores solo aparecían durante la revisión de auditoría, a menudo semanas después. El objetivo era eliminar los pasos manuales por completo, añadiendo validación automatizada que marca discrepancias antes del envío.',
        questions: [
            '¿Se puede reemplazar todo el proceso manual de 7 pasos con un solo clic en "Refresh All"?',
            '¿Cómo implementar validación automática de balance débito/crédito sin cambiar el formato de salida existente del contador?',
            '¿Cuál es la intervención mínima requerida del personal contable no técnico para mantener el sistema?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Mapeo de procesos y diseño ETL',
                detail:
                    'Acompañé al equipo contable en dos sesiones para documentar cada paso manual, fórmula y fuente de datos. Mapeé el flujo completo desde exportación SAP → transformación Excel → formato de envío. Identifiqué 7 consultas de Power Query necesarias para replicar la lógica sin dependencias de VBA.',
                tech: ['Excel', 'Power Query', 'M Language'],
            },
            {
                phase: 'Fase 2',
                title: 'Pipeline de Power Query',
                detail:
                    'Construí 7 consultas M Language encadenadas para: importar exportaciones CSV de SAP, normalizar códigos de cuenta, aplicar tablas de mapeo para etiquetas de centros de costo, calcular balances acumulados y generar el formato de envío exacto. Añadí una consulta de validación que devuelve una celda de estado rojo/verde — verde solo si débitos igualan créditos al centavo.',
                tech: ['Power Query', 'M Language', 'Excel'],
            },
            {
                phase: 'Fase 3',
                title: 'Wrapper VBA y documentación',
                detail:
                    'Añadí una macro VBA de un botón que dispara "Refresh All", espera la finalización y luego copia la salida validada a una carpeta de archivo con fecha. Escribí una guía de usuario de una página con capturas para que cualquier miembro del staff pueda operar el sistema sin capacitación.',
                tech: ['VBA', 'Excel', 'SAP'],
            },
        ],
        results: [
            { metric: '12 min', label: 'Antes más de 4 horas' },
            { metric: '95%', label: 'Tiempo ahorrado por mes' },
            { metric: '0', label: 'Errores de copiar y pegar' },
            { metric: '48 hrs', label: 'Ahorradas por año' },
            { metric: '7', label: 'Consultas de Power Query' },
            { metric: '100%', label: 'Asientos auto-validados' },
        ],
        keyFindings: [
            'Los 7 pasos manuales se reemplazaron exitosamente por una sola acción Refresh All — cero copiar y pegar requerido post-implementación.',
            'La validación automática débito/crédito detectó 3 desbalances en el primer mes de uso que previamente habrían requerido revisión manual de auditoría para encontrarse.',
            'El personal no técnico pudo operar el sistema de forma independiente tras una walkthrough de 20 minutos — sin soporte continuo requerido.',
            'El enfoque M Language es más mantenible que VBA para transformación de datos: cambios en mapeo de cuentas requieren editar una tabla de lookup, no buscar entre fórmulas.',
        ],
        conclusion:
            'Power Query está subutilizado en flujos contables. Este proyecto demuestra que incluso procesos complejos de reconciliación multi-fuente pueden automatizarse por completo sin software personalizado — solo consultas M Language bien diseñadas y documentación clara. Los ahorros de tiempo solos justifican la inversión en el primer mes de uso.',
    },
    'exam-analysis-system': {
        category: 'FULL STACK',
        title: 'ExamVault — Generación y análisis automatizado de exámenes',
        tagline:
            'Plataforma full-stack: generación automatizada de exámenes, panel de analítica y pipeline de calificación procesando más de 100.000 registros estudiantiles.',
        readTime: '9 min de lectura',
        overview:
            'ExamVault lleva a instructores de la página en blanco a insights calificados — genera exámenes de opción múltiple aleatorizados en segundos, califica sesiones completas automáticamente y lee el rendimiento de la clase desde un panel de analítica en vivo, todo en un solo lugar. Sin hojas de cálculo, sin calificación manual, sin esperar días por resultados. Construido en cuatro meses para un cliente real, reemplaza un flujo lento y propenso a errores con un pipeline rápido y defendible. Construí el motor backend de generación de exámenes y el panel de analítica, y lideré el proyecto como Scrum Master — manteniendo a un equipo de dos desarrolladores entregando bajo un plazo ajustado de semestre.',
        problem:
            'La calificación manual y los informes para más de 100.000 registros estudiantiles en múltiples sesiones de examen creaban un cuello de botella de procesamiento de 3 días cada semestre. La facultad no tenía visibilidad del rendimiento de la clase hasta que los informes se compilaban manualmente, y las banderas de integridad eran enteramente subjetivas. El sistema debía estar operativo en un semestre.',
        questions: [
            '¿Se puede automatizar el pipeline de calificación de punta a punta, desde hojas de respuestas crudas hasta informes finales de calificaciones?',
            '¿Qué métodos estadísticos pueden marcar confiablemente posibles problemas de integridad sin generar excesivos falsos positivos?',
            '¿Cómo debe diseñarse el panel de facultad para mostrar insights accionables sin requerir experiencia en análisis de datos?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Backend — Django + PostgreSQL',
                detail:
                    'Construí una API Django REST Framework con modelos para: Exam, Student, Answer, Grade e IntegrityFlag. Implementé lógica de calificación automatizada usando comparación con clave de respuestas con soporte de crédito parcial. Añadí un módulo de integridad estadística usando análisis z-score para marcar respuestas que se desvían significativamente de las distribuciones de pares.',
                tech: ['Python', 'Django', 'PostgreSQL', 'REST API'],
            },
            {
                phase: 'Fase 2',
                title: 'Frontend — Panel React',
                detail:
                    'Construí una SPA en React.js con vistas basadas en roles (facultad vs. admin). La vista de facultad muestra: distribución de puntajes de clase, análisis de dificultad por pregunta, mejores/peores rendimientos e cola de banderas de integridad. La vista admin añade importación masiva, configuración de exámenes y exportación a PDF/CSV. Usé Recharts para todas las visualizaciones de datos.',
                tech: ['React.js', 'Recharts', 'Axios', 'CSS Modules'],
            },
            {
                phase: 'Fase 3',
                title: 'DevOps — Docker + despliegue',
                detail:
                    'Containericé ambos servicios usando Docker Compose. Configuré Nginx como reverse proxy. Escribí pipeline CI (GitHub Actions) para ejecutar tests en cada PR. Desplegué en un servidor Linux gestionado por la universidad con backups automatizados a almacenamiento compatible con S3.',
                tech: ['Docker', 'Nginx', 'GitHub Actions', 'Linux'],
            },
        ],
        results: [
            { metric: '100K+', label: 'Registros estudiantiles procesados' },
            { metric: '3 días → 2 hrs', label: 'Tiempo de calificación reducido' },
            { metric: '94%', label: 'Precisión de marcado (precision)' },
            { metric: '12', label: 'Métricas en el panel de facultad' },
        ],
        keyFindings: [
            'La calificación automatizada redujo la ventana de procesamiento de 3 días a menos de 2 horas de punta a punta, incluyendo generación de informes PDF.',
            'El sistema de banderas de integridad z-score alcanzó 94% de precisión con 5% de tasa de falsos positivos — significativamente mejor que la revisión manual que no tenía umbral consistente.',
            'La facultad reportó el desglose de dificultad por pregunta como el insight más accionable: reveló 3 preguntas por examen en promedio que eran estadísticamente demasiado fáciles o difíciles.',
            'La containerización con Docker redujo el tiempo de configuración de entorno para nuevos miembros del equipo de 2 días a menos de 30 minutos.',
        ],
        conclusion:
            'La automatización full-stack de flujos académicos es viable en un solo semestre con un equipo enfocado de dos personas. El módulo de banderas de integridad demostró ser la funcionalidad más impactante — no porque atrapara trampas, sino porque le dio a la facultad un estándar defendible y consistente para investigación en lugar de intuición. El sistema está actualmente en uso en producción.',
    },
    'sublime-event-ticketing': {
        category: 'FULL STACK',
        title: 'Sublime — Plataforma de e-ticketing',
        tagline:
            'Plataforma de venta de entradas con procesamiento seguro de pagos y gestión de cuentas de usuario — construida con Django y Docker.',
        readTime: '6 min de lectura',
        overview:
            'Sublime es una plataforma integral de venta de entradas diseñada para usabilidad, seguridad y escalabilidad. Incluye descubrimiento de eventos, procesamiento seguro de pagos y gestión de cuentas de usuario. Construida como parte de un Associate con The University of British Columbia, usando una metodología híbrida Waterfall–Agile que combinó planificación estructurada con sprints iterativos.',
        problem:
            'Las plataformas de ticketing existentes cobran comisiones altas y ofrecen poca personalización para eventos organizados por estudiantes. Los organizadores de eventos universitarios necesitaban una solución full-stack auto-hospedada con procesamiento real de pagos, gestión de eventos y una interfaz de admin adecuada — sin pagar comisiones de Eventbrite.',
        questions: [
            '¿Cómo implementar procesamiento seguro de pagos que cumpla estándares PCI sin un equipo de seguridad dedicado?',
            '¿Cómo diseñar el flujo de descubrimiento de eventos para que visitantes casuales se conviertan en compradores de entradas en menos de 3 clics?',
            '¿Cuál es la interfaz de admin mínima viable que permite a organizadores de eventos no técnicos gestionar sus eventos de forma independiente?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Arquitectura del sistema — Django + Docker',
                detail:
                    'Diseñé e implementé el sistema con el framework Django y gestioné la containerización con Docker para un entorno consistente entre desarrollo y despliegue. Seguí la metodología híbrida de Ingeniería de Software de Ian Sommerville: Waterfall para decisiones de arquitectura, Agile para ciclos de desarrollo de features.',
                tech: ['Python', 'Django', 'Docker', 'PostgreSQL'],
            },
            {
                phase: 'Fase 2',
                title: 'Desarrollo de features e integración de pagos',
                detail:
                    'Lideré desarrollo de features, corrección de bugs y mejoras, asegurando calidad de código y adherencia a estándares del proyecto. Integré Stripe para procesamiento de pagos con manejo de webhooks para confirmación de compra. Construí autenticación segura de usuarios con acceso basado en roles (asistente, organizador, admin).',
                tech: ['Stripe', 'Django Auth', 'HTML', 'CSS', 'JavaScript'],
            },
            {
                phase: 'Fase 3',
                title: 'Testing y CI/CD',
                detail:
                    'Implementé tests unitarios e de integración para asegurar confiabilidad y mínimo downtime durante periodos pico de eventos. Configuré pipeline CI/CD para tests automatizados en cada commit. Alcanzé más del 90% de cobertura de tests en flujos críticos de pago y autenticación.',
                tech: ['Pytest', 'GitHub Actions', 'CI/CD', 'Docker'],
            },
        ],
        results: [
            { metric: '3 clicks', label: 'Máximo para comprar una entrada' },
            { metric: '90%+', label: 'Cobertura de tests en flujos críticos' },
            { metric: '0', label: 'Errores de procesamiento de pagos en QA' },
            { metric: 'Hybrid', label: 'Metodología Waterfall + Agile' },
        ],
        keyFindings: [
            'La containerización con Docker eliminó el clásico problema de "funciona en mi máquina" — incorporar nuevos miembros del equipo tomó 20 minutos en lugar de un día completo.',
            'Los webhooks de Stripe fueron más confiables que la confirmación basada en redirect para manejar usuarios que cierran el navegador después del pago.',
            'La metodología híbrida Waterfall–Agile funcionó bien: las decisiones de arquitectura se beneficiaron de planificación anticipada, mientras el desarrollo de features se benefició de ciclos de iteración semanales.',
        ],
        conclusion:
            'Sublime demostró que un equipo estudiantil puede construir y desplegar una aplicación e-commerce de grado producción con procesamiento real de pagos en un solo semestre. El proyecto enfatizó la importancia del testing — cada bug en flujos de pago fue detectado antes del demo day por el pipeline CI/CD, no por testing manual.',
    },
    'bookstore-app': {
        category: 'FULL STACK',
        title: 'Bookstore',
        tagline: 'App móvil de seguimiento de inventario con UI intuitiva y backend Firebase.',
        readTime: '4 min de lectura',
        overview:
            'Una aplicación móvil de seguimiento de inventario desarrollada como proyecto grupal para optimizar la gestión de la librería y las compras de clientes.',
        problem:
            'Los sistemas de gestión de inventario de librerías suelen ser aplicaciones de escritorio toscas que dificultan al staff verificar stock en el piso, y carecen de interfaces modernas e intuitivas tanto para staff como para clientes.',
        questions: [
            '¿Cómo diseñar un sistema de seguimiento de inventario que el staff realmente disfrute usar?',
            '¿Cuál es la forma más robusta de sincronizar el estado de inventario en vivo con clientes móviles?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Diseño de prototipo',
                detail:
                    'Diseñé un prototipo en Figma enfocado en una experiencia de usuario intuitiva, logrando una tasa de aprobación del 95% entre usuarios.',
                tech: ['Figma'],
            },
            {
                phase: 'Fase 2',
                title: 'Desarrollo y refinamiento',
                detail:
                    'Implementé la app funcional usando Android Studio y Java, integrando Firebase para seguimiento en tiempo real.',
                tech: ['Android Studio', 'Java', 'Firebase', 'Stripe'],
            },
        ],
        results: [
            { metric: '95%', label: 'Aprobación de usuarios' },
            { metric: '30%', label: 'Menos incidencias' },
        ],
        keyFindings: [
            'Invertir fuertemente en prototipos de alta fidelidad en Figma ahorró más de 20 horas de retrabajo de desarrollo.',
            'La sincronización en tiempo real con Firebase simplificó dramáticamente la arquitectura frente a un patrón REST tradicional.',
        ],
        conclusion:
            'El proceso iterativo de diseño y desarrollo resultó en un producto final altamente usable, evidenciado por la caída significativa de incidencias reportadas por usuarios tras el refinamiento.',
    },
    'empenalo-fintech': {
        category: 'FULL STACK 2026',
        title: 'Empeñalo — Marketplace fintech',
        tagline:
            'Un marketplace fintech peruano donde los usuarios empeñan/garantizan artículos y reciben múltiples ofertas reales de negocios.',
        readTime: '7 min de lectura',
        overview:
            'Un marketplace fintech peruano donde los usuarios "empeñan" artículos y reciben múltiples ofertas reales de negocios. Estética tech oscura y premium con lados de cliente y negocio — publicación de artículos, gestión de propuestas y una hoja de ruta de escalamiento multi-etapa.',
        problem:
            'Las casas de empeño tradicionales ofrecen precios opacos y requieren visitas presenciales. Empeñalo digitaliza el proceso, permitiendo a usuarios listar artículos y recibir ofertas competitivas de múltiples negocios de forma transparente.',
        questions: [
            '¿Cómo construir un marketplace de dos lados que escale de local a nacional?',
            '¿Qué features en tiempo real se necesitan para un flujo fluido de negociación de ofertas?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Marketplace para clientes',
                detail:
                    'Construí el lado del cliente: listado de artículos con carga de imágenes, bandeja de ofertas con actualizaciones en tiempo real vía suscripciones de Supabase, y mensajería segura entre las partes.',
                tech: ['Next.js', 'React', 'Tailwind', 'Supabase'],
            },
            {
                phase: 'Fase 2',
                title: 'Panel de negocios',
                detail:
                    'Construí el lado de negocios: feed de descubrimiento de artículos, creación de propuestas con términos configurables, gestión de pipeline y panel de analítica para tasas de conversión de ofertas.',
                tech: ['Next.js', 'React', 'Supabase', 'Vercel'],
            },
            {
                phase: 'Fase 3',
                title: 'Rendimiento y escalamiento',
                detail:
                    'Implementé Upstash Redis para rate limiting y caché. Optimicé suscripciones en tiempo real para baja latencia. Preparé hoja de ruta de escalamiento multi-etapa para expansión nacional.',
                tech: ['Upstash Redis', 'Vercel', 'Next.js'],
            },
        ],
        results: [
            { metric: '2-sided', label: 'Marketplace cliente + negocio' },
            { metric: 'Real-time', label: 'Sistema de gestión de ofertas' },
        ],
        keyFindings: [
            'Las notificaciones de ofertas en tiempo real vía suscripciones de Supabase aumentaron el engagement manteniendo a ambas partes sincronizadas sin polling.',
            'La estética premium oscura diferenció la plataforma de sitios de clasificados tradicionales.',
            'El rate limiting vía Upstash Redis previno abusos manteniendo tiempos de respuesta sub-100ms.',
        ],
        conclusion:
            'Empeñalo demuestra cómo las tecnologías web modernas pueden modernizar servicios financieros tradicionales. La arquitectura de marketplace de dos lados con features en tiempo real proporciona un blueprint para plataformas similares de préstamos y ofertas.',
    },
    'scoutlane-recruitment': {
        category: 'FULL STACK 2026',
        title: 'ScoutLane — Plataforma de reclutamiento',
        tagline:
            'Plataforma de reclutamiento con IA: páginas públicas de vacantes, parseo de currículums, pipelines drag-and-drop, admin por roles, y la infraestructura de email/storage/webhooks que un equipo real de contratación necesita.',
        readTime: '7 min de lectura',
        overview:
            'ScoutLane es una plataforma de reclutamiento que combina parseo de currículums con IA y gestión completa de pipeline: páginas públicas de carrera con formularios de postulación personalizados, un panel admin Kanban drag-and-drop, control de acceso por roles, y la infraestructura de producción — workers de trabajos async, email transaccional, storage cloud de archivos, webhooks salientes — que un equipo real de contratación opera día a día.',
        problem:
            'Los equipos de reclutamiento pasan horas revisando currículums manualmente y rastreando candidatos en hojas de cálculo. ScoutLane automatiza el parseo de currículums y proporciona gestión estructurada de pipeline para reducir el time-to-hire, sin dejar los huecos operativos — auth, permisos, notificaciones, integraciones — que convierten un demo en software no lanzable.',
        questions: [
            '¿Cómo puede la IA extraer de forma confiable datos estructurados de currículums no estructurados?',
            '¿Qué vistas de pipeline dan a los reclutadores la mejor visibilidad del progreso de candidatos?',
            '¿Qué necesita un pipeline de parseo de currículums más allá del happy path para correr sin supervisión — reintentos, workers async, separación de roles?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Motor de parseo de currículums',
                detail:
                    'Construí un parser de currículums con IA (OpenRouter, modelo configurable) que extrae historial educativo, experiencia laboral, habilidades e información de contacto de PDFs y DOCX subidos, normalizado en perfiles estructurados de candidatos y procesado asíncronamente vía workers pg-boss para que un parseo lento nunca bloquee el flujo de postulación.',
                tech: ['OpenRouter', 'pg-boss', 'Prisma', 'PostgreSQL'],
            },
            {
                phase: 'Fase 2',
                title: 'Portal de vacantes y postulaciones',
                detail:
                    'Construí páginas públicas de carrera con filtros de departamento/ubicación y formularios de postulación personalizados por template de vacante. Los candidatos suben currículums que se parsean automáticamente y enrutan a la etapa correcta del pipeline; Resend maneja las confirmaciones de email transaccional.',
                tech: ['Next.js 16', 'React', 'Resend', 'Google Cloud Storage'],
            },
            {
                phase: 'Fase 3',
                title: 'Panel admin, RBAC e integraciones',
                detail:
                    'Construí un panel admin por roles (Admin / Recruiter / Hiring Manager vía sesiones JWT de Auth.js) con pipelines Kanban drag-and-drop (dnd-kit), analítica Recharts, gestión de templates de vacante, gestión de equipo, e integraciones de webhooks salientes para sistemas externos — más una suite completa de tests Vitest + Playwright (236 tests, 36 archivos) y CI (lint → typecheck → test → build).',
                tech: ['Auth.js', 'dnd-kit', 'Recharts', 'Vitest', 'Playwright'],
            },
        ],
        results: [
            { metric: '236', label: 'tests pasando en 36 archivos (Vitest + Playwright)' },
            { metric: '3', label: 'niveles de acceso por rol — Admin, Recruiter, Hiring Manager' },
            { metric: 'Async', label: 'workers de parseo de currículums y email vía pg-boss' },
        ],
        keyFindings: [
            'El parseo de currículums con IA redujo la entrada manual de datos en ~80%, permitiendo a reclutadores enfocarse en evaluación de candidatos.',
            'Las vistas kanban de pipeline mejoraron la visibilidad del equipo sobre cuellos de botella — candidatos estancados se volvieron inmediatamente visibles.',
            'Mover el parseo de currículums a workers async pg-boss mantuvo el flujo de postulación rápido sin importar la latencia de respuesta de la IA — una lección que el diseño síncrono anterior no sobrevivió bajo carga real.',
            'El control de acceso por rol (Admin/Recruiter/Hiring Manager) importó más que cualquier feature individual — equipos reales de contratación necesitan límites de permisos antes de confiarle a una herramienta los datos de candidatos.',
        ],
        conclusion:
            'ScoutLane cierra la brecha entre automatización con IA y criterio humano en reclutamiento. Lo que empezó como un pipeline de parseo de currículums creció hasta ser infraestructura completa de reclutamiento — páginas públicas de carrera, RBAC, workers async, email, storage, webhooks, y una suite de tests real — porque eso es lo que requiere lanzar software para un equipo real de contratación, no solo lo que necesita un demo. En vivo en scoutlane.vercel.app.',
    },
    'vans-voice-navigation': {
        category: 'INVESTIGACIÓN IHC',
        title: 'VANS — Sistema de navegación activado por voz',
        tagline:
            'Extensión de Chrome manos libres que traduce voz en acciones del navegador — evaluada empíricamente frente a teclado/ratón.',
        readTime: '6 min de lectura',
        overview:
            'Extensión de Chrome manos libres que traduce voz en acciones del navegador — scroll, zoom, búsqueda. Evaluada empíricamente frente a teclado/ratón en un estudio within-subjects de 10 tareas midiendo tiempo de completado, tasa de error y satisfacción.',
        problem:
            'Usuarios con discapacidades motoras o situacionales (conduciendo, cocinando) no pueden navegar la web eficientemente. Las soluciones de voz existentes se limitan a dictado — VANS mapea comandos de voz a acciones del navegador.',
        questions: [
            '¿Pueden los comandos de voz igualar la eficiencia de teclado/ratón en tareas comunes del navegador?',
            '¿Cuál es la tasa de error del reconocimiento de Web Speech API en condiciones del mundo real?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Desarrollo de extensión Chrome',
                detail:
                    'Construí una extensión Chrome usando Web Speech API para reconocer comandos de voz y traducirlos en acciones del navegador: scroll arriba/abajo, zoom in/out, búsqueda, navegar atrás/adelante y clic en enlaces por número.',
                tech: ['JavaScript', 'Web Speech API', 'Chrome Extension', 'HTML5'],
            },
            {
                phase: 'Fase 2',
                title: 'Estudio empírico con usuarios',
                detail:
                    'Diseñé un estudio within-subjects de 10 tareas comparando comandos de voz VANS contra teclado/ratón tradicional. Medí tiempo de completado de tareas, tasa de error y satisfacción del usuario (escala SUS). Recluté más de 20 participantes.',
                tech: ['UX Research', 'Statistical Analysis'],
            },
            {
                phase: 'Fase 3',
                title: 'Análisis y hallazgos',
                detail:
                    'Analicé resultados usando t-tests pareados. Encontré que los comandos de voz fueron 15% más lentos en promedio pero redujeron significativamente el esfuerzo físico. La tasa de error fue comparable en tareas simples pero mayor en navegación compleja.',
                tech: ['Python', 'Statistical Testing'],
            },
        ],
        results: [
            { metric: '10 tasks', label: 'Diseño de estudio within-subjects' },
            { metric: '3 metrics', label: 'Tiempo, tasa de error, satisfacción' },
        ],
        keyFindings: [
            'Los comandos de voz fueron 15% más lentos que teclado/ratón en promedio pero calificados significativamente más altos en satisfacción para casos de uso de accesibilidad.',
            'Web Speech API alcanzó 92% de precisión de reconocimiento en entornos silenciosos pero cayó a 78% con ruido de fondo.',
            'Los participantes prefirieron voz para comandos simples (scroll, búsqueda) pero teclado para acciones precisas (clics en enlaces pequeños).',
        ],
        conclusion:
            'VANS demuestra que la navegación del navegador basada en voz es viable como herramienta de accesibilidad hoy. Aunque aún no es más rápida que la entrada tradicional, llena un vacío crítico para usuarios que no pueden usar teclado o ratón. Una actualización v2 de siguiente nivel está en progreso — esta ficha permanece en Próximamente hasta que la nueva versión se publique con capturas reales del proyecto.',
    },
    'el-umbral': {
        category: 'FULL STACK',
        title: 'El Umbral — Hub de proyectos de ayuda',
        tagline:
            'Un hub bilingüe de "busca antes de construir" para la ayuda tras el terremoto en Venezuela — encuentra un esfuerzo existente y únete, o publica el tuyo con el stack y la ayuda que necesita.',
        readTime: '7 min de lectura',
        overview:
            'El Umbral es el hub de descubrimiento de proyectos Build4Venezuela para ayuda post-terremoto: una plataforma de "busca antes de construir" para que los voluntarios dejen de duplicar esfuerzos. Busca una idea — si ya existe un esfuerzo similar, únete a ese repo y contribuye; si no, publica el tuyo con su stack tecnológico y la ayuda que necesita (contribuidores, créditos de API, patrocinadores). Un directorio de Builders importado del roster del hackathon muestra quién está disponible para ayudar. Se lanza bilingüe (español por defecto /es con /en), funciona sin base de datos para el MVP, y expone una API pública de solo lectura para que otras herramientas de ayuda construyan sobre el mismo catálogo.',
        problem:
            'Tras el terremoto, los voluntarios de ayuda seguían reconstruyendo las mismas herramientas en paralelo — quemando el recurso más escaso en una crisis: el tiempo. No había un solo lugar para verificar si una idea ya tenía equipo antes de empezar desde cero, ni un catálogo compartido y legible por máquina de quién construía qué. El Umbral hace que "¿esto ya existe?" sea el primer paso en lugar de una ocurrencia tardía.',
        questions: [
            '¿Cómo evitas que los voluntarios dupliquen herramientas de ayuda sin añadir fricción a publicar una nueva?',
            '¿Cómo puede una verificación difusa de "¿ya existe?" advertir fuerte sobre casi-duplicados mientras deja pasar ideas genuinamente nuevas?',
            '¿Cómo lanzas un MVP bilingüe sin base de datos hoy que pueda cambiar a una base de datos real después sin reescribir cada caller?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Datos local-first detrás de un seam de repositorio',
                detail:
                    'Todos los datos viven en archivos JSON versionados detrás de un repositorio tipado único en src/lib/repository — componentes y rutas nunca leen JSON directamente. Ese seam es el punto de intercambio: P1 migra a Supabase (Postgres) sin tocar ningún caller. Los schemas Zod en src/lib/schemas.ts son la única fuente de verdad (los tipos se infieren de ellos) y validan toda entrada externa — formulario, sheet, scrape, API — en el límite.',
                tech: ['Next.js 16', 'TypeScript', 'Zod', 'Repository Pattern'],
            },
            {
                phase: 'Fase 2',
                title: 'Búsqueda difusa + i18n bilingüe',
                detail:
                    'Un motor Fuse.js impulsa el flujo central de "busca antes de construir": coincidencias fuertes advierten fuerte en la página de búsqueda, y el mismo motor impulsa un empujón pre-publicación para que casi-duplicados aparezcan antes de crear un proyecto nuevo. Toda la app es bilingüe mediante diccionarios hechos a mano en src/lib/i18n (sin librería i18n de terceros) — español por defecto con paridad en inglés, cada string en ambos idiomas.',
                tech: ['Fuse.js', 'React 19', 'i18n', 'App Router'],
            },
            {
                phase: 'Fase 3',
                title: 'Board, publicar y Builders — Server Actions',
                detail:
                    'El board filtra proyectos por categoría, stack, idioma, estado y necesidad, todo impulsado por URL searchParams para que cualquier vista sea compartible. Publicar es una Server Action validada con Zod que añade al seed set. Un directorio de Builders importado del Google Sheet del hackathon lista talento disponible. El estado es un ciclo de vida (planning a wip a testing a mvp a live) y los conteos de votos son autoritativos del servidor para evitar doble conteo.',
                tech: ['Server Actions', 'Zod', 'React Server Components'],
            },
            {
                phase: 'Fase 4',
                title: 'API pública de solo lectura + despliegue Vercel',
                detail:
                    'Una superficie REST versionada y solo GET en /api/v1 expone todo el catálogo como JSON para otras herramientas de ayuda — un envelope ({ success, data, error, meta }), CORS abierto, catálogo cacheado en CDN con /stats y /votes en vivo. Diez endpoints en total. Cada color y radio es un token de diseño CSS, así toda la app se re-tematica editando solo valores de tokens. Se auto-despliega desde main a elumbralvzla.org en Vercel.',
                tech: ['REST API', 'Vercel', 'Design Tokens', 'CDN Caching'],
            },
        ],
        results: [
            { metric: 'Live', label: 'Desplegado en elumbralvzla.org' },
            { metric: '2', label: 'Idiomas — ES + EN, paridad completa' },
            { metric: '10', label: 'Endpoints de API pública de solo lectura' },
            { metric: 'MIT', label: 'Código abierto en GitHub' },
            { metric: '0', label: 'Bases de datos — seam JSON local-first' },
            { metric: 'Next 16', label: 'App Router + React 19 RSC' },
        ],
        keyFindings: [
            'Un solo seam de repositorio (src/lib/repository) permite que el MVP corra en JSON local hoy y cambie a Postgres en P1 sin cambiar un solo componente o ruta — la fuente de datos es un detalle de implementación, no un compromiso arquitectónico.',
            'Definir schemas Zod una vez e inferir tipos TypeScript de ellos mantiene validación y tipos siempre alineados, y hace que "validar en el límite" sea el default para toda entrada externa.',
            'Reutilizar un motor Fuse.js para la página de búsqueda y el empujón pre-publicación mantiene la verificación de duplicados consistente en todas partes — la misma coincidencia que advierte a un buscador también advierte a un publicador.',
            'Impulsar el board enteramente desde URL searchParams hace que cada vista filtrada sea compartible y guardable, y mantiene la lógica de filtrado en el servidor con cero estado cliente.',
            'Poner todo color y radio en tokens de diseño CSS convierte un re-skin completo en una edición solo de valores — ningún componente hardcodea un color, así re-tematizar nunca toca código de componentes.',
        ],
        conclusion:
            'El Umbral muestra que el software de respuesta a crisis puede ser tanto rápido de lanzar como construido para durar: un MVP sin base de datos que está en vivo y bilingüe hoy, arquitectado para que la migración a base de datos real, búsqueda semántica y auth (P1 a P2) nunca fuerce un rewrite. La disciplina que lo hace durable — un seam de repositorio, Zod como única fuente de verdad, tokens para theming, una API pública sobre la que otros construyen — es la misma que permitió lanzarlo. Es código abierto (MIT) y está en vivo en elumbralvzla.org.',
    },
    'aquatwin-water-metering': {
        category: 'FULL STACK 2026',
        title: 'AquaTwin — Medición virtual de agua para centros de datos',
        tagline:
            'Los centros de datos conocen su consumo eléctrico al vatio — y casi nada sobre su agua. AquaTwin convierte la telemetría que los tenants ya tienen en facturas de agua auditadas por tenant e informes de cumplimiento.',
        readTime: '3 min de lectura',
        overview:
            'AquaTwin es un concepto de medición virtual de agua para colocation en centros de datos: estimar el uso de agua de cada tenant a partir de la telemetría de potencia que los operadores ya recopilan, para poder facturar e informar el agua con la misma claridad que la electricidad — sin instalar medidores nuevos.',
        problem:
            'Los centros de datos suelen medir solo el agua de enfriamiento directo y rara vez atribuyen el consumo a tenants individuales. Con divulgación de agua e informes de sostenibilidad cada vez más estrictos, los operadores necesitan convertir las señales de potencia existentes en cifras creíbles por tenant.',
        questions: [],
        methodology: [],
        results: [],
        keyFindings: [],
        conclusion:
            'Etapa de concepto — la superficie del producto y el caso de estudio público saldrán cuando el build esté listo para mostrarse.',
    },
    'findleads': {
        category: 'FULL STACK 2026',
        title: 'FindLeads — Generación de leads con CRM integrado',
        tagline:
            'Un negocio sin sitio web es el mejor prospecto de un desarrollador web. FindLeads los busca en Google Places, marca los sin web como leads tier-1, y envuelve un mini CRM alrededor de los resultados.',
        readTime: '5 min de lectura',
        overview:
            'FindLeads es una herramienta personal de generación de leads: busca en la API oficial de Google Places (Text Search New) negocios por categoría y ubicación, marca negocios sin sitio web como prospectos tier-1 para outreach de diseño web, y añade un CRM ligero encima — notas por negocio, toggle de contactado, exportación CSV. Next.js 16 App Router con React 19, Neon Postgres vía Drizzle ORM, validación Zod en cada límite, y un diseño de job async deliberadamente sin cola: una fila de job en la base de datos, trabajo en background vía Next.js after(), y polling del lado cliente.',
        problem:
            'Prospectar para trabajo freelance web significa horas de scroll manual en mapas para responder una pregunta: ¿qué negocios reales y operativos cerca mío no tienen sitio web? Los datos existen en Google Places, pero los resultados crudos de API son inutilizables para seguimiento — sin memoria de quién ya contactaste, sin notas, sin export. La restricción de ingeniería interesante fue disciplina de scope: un usuario, sin auth, sin infraestructura de cola — ¿cuánta durabilidad puede entregar una fila de base de datos y diseño cuidadoso de concurrencia?',
        questions: [
            '¿Puede un job en background reanudable sobrevivir crashes y workers duplicados usando solo Postgres y updates atómicos?',
            '¿Cómo debe coexistir estado CRM durable con snapshots de búsqueda re-ejecutables para que un re-scrape nunca borre tus notas?',
            '¿Hasta dónde llega una disciplina test-first en un MVP de una semana y una persona?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Búsqueda Places y marcado tier-1',
                detail:
                    'Los jobs de búsqueda llaman Google Places Text Search (New) por categoría + ubicación en texto libre. Cada respuesta se valida con Zod antes de tocar la base de datos, y negocios sin campo website se convierten en leads tier-1. Los resultados se almacenan como snapshots por job para que cada corrida de búsqueda sea reproducible.',
                tech: ['Next.js 16', 'Google Places API', 'Zod'],
            },
            {
                phase: 'Fase 2',
                title: 'Worker de jobs reanudable sin cola',
                detail:
                    'En lugar de Redis o un servicio de cola, los jobs son filas de base de datos procesadas vía Next.js after() con polling cliente sobre SWR. El worker hace checkpoint de progreso y reclama trabajo mediante claims atómicos single-UPDATE, así un worker crasheado o duplicado nunca procesa dos veces — comportamiento fijado por tests de integración contra una base de datos de test Neon real.',
                tech: ['Neon Postgres', 'Drizzle ORM', 'SWR'],
            },
            {
                phase: 'Fase 3',
                title: 'Capa CRM y split durable/snapshot',
                detail:
                    'El estado CRM durable (notas, status contactado) vive en una tabla businesses keyed por place_id, deliberadamente separado de snapshots de leads por job — re-scrapear una ciudad nunca resetea lo que sabes de un negocio. Exportación CSV cierra el loop para outreach real. 123 tests (unit + integración con DB real) cubren el pipeline; el código de test supera al de producto aproximadamente 1.35:1.',
                tech: ['TypeScript', 'Vitest', 'Tailwind 4'],
            },
        ],
        results: [
            { metric: '123', label: 'tests en verde en 24 archivos — unit más integración contra base Neon real' },
            { metric: '27/27', label: 'requisitos MVP entregados y verificados en 5 fases planificadas' },
            { metric: '1.35:1', label: 'ratio código test/producto (≈2.000 vs ≈1.490 líneas)' },
        ],
        keyFindings: [
            'Postgres es una cola de jobs perfectamente válida a escala de un solo usuario: un claim atómico single-UPDATE te da crash-safety y duplicate-worker safety con cero infraestructura nueva.',
            'Separar identidad durable (keyed por place_id) de snapshots de corrida es lo que hace un scraper re-ejecutable — el estado que te importa nunca debe vivir en estado que regeneras.',
            'En builds asistidos por IA, la suite de tests es el contrato: 123 tests escritos junto a la implementación es lo que hizo "feature-complete" una afirmación verificable en lugar de una sensación.',
        ],
        conclusion:
            'FindLeads es un MVP completo y funcional construido en aproximadamente una semana — y honestamente scoped: single-user por diseño, localhost-only hasta ahora, con su propia auditoría de brechas de 15 ítems ordenados por severidad commiteada al repo. Es el ejemplo pequeño más claro del workflow detrás de los proyectos más grandes: planificar en fases, validar en límites, testear contra infraestructura real, y escribir lo que aún es débil.',
    },
    'peru-tech-map': {
        category: 'CÓDIGO ABIERTO',
        title: 'Peru Grid — Mapeando el ecosistema tech peruano',
        tagline:
            'Toronto tiene un mapa tech open-source querido. Perú no. Peru Grid mapea 53 startups, consultoras, incubadoras y fondos investigados en Lima y Arequipa — en un solo archivo HTML sin dependencias.',
        readTime: '4 min de lectura',
        overview:
            'Peru Grid es un mapa interactivo con estilo terminal de los ecosistemas tech de Lima y Arequipa, renderizado con MapLibre GL JS sobre tiles vectoriales de OpenFreeMap — sin API keys, sin build step, sin framework, cero dependencias npm. Toda la aplicación es un archivo HTML de 766 líneas más dos datasets JSON cargados en runtime. Los visitantes vuelan entre las dos ciudades, clickean marcadores para detalles de empresas y navegan un ticker de titulares en vivo. La estructura está adaptada, con crédito, del toronto-tech-map de BUILD416, extendida con un selector de ciudad y validación de coordenadas por ciudad.',
        problem:
            'La escena tech peruana es real pero ilegible — startups, consultoras, incubadoras y fondos existen en Lima y Arequipa, pero no hay un solo lugar abierto para verlos. Cada entrada aquí fue investigada y verificada (registros SUNAT/RUC, Crunchbase, directorios YC) en lugar de scrapeada; candidatos no verificables o extintos se descartaron en lugar de rellenar.',
        questions: [
            '¿Cuánto mapa interactivo puedes lanzar con literalmente cero dependencias y sin pipeline de build?',
            '¿Cómo mantienes honesto un dataset comunitario — entradas verificadas adentro, hype afuera?',
            '¿Puede CI proteger de forma significativa un proyecto de datos sin código de aplicación?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Arquitectura de un solo archivo',
                detail:
                    'MapLibre GL JS sobre tiles OpenFreeMap (schema OpenMapTiles) no necesita API key, así toda la app es un solo archivo HTML estático con JS/CSS inline — desplegable en cualquier host estático, forkable por cualquiera para otra ciudad. Los datos viven en dos archivos JSON (empresas, titulares del ticker) cargados en runtime.',
                tech: ['MapLibre GL JS', 'OpenFreeMap', 'Vanilla JS'],
            },
            {
                phase: 'Fase 2',
                title: 'Dataset verificado, no un scrape',
                detail:
                    '53 organizaciones — 38 Lima, 15 Arequipa: 25 startups, 9 consultoras, 8 incubadoras, 4 coworkings, 4 fondos, 2 adquiridas, 1 nonprofit — cada una verificada contra registros oficiales (SUNAT/RUC) y fuentes públicas (Crunchbase, YC) antes de inclusión. Seis candidatos se descartaron como no verificables o extintos. El código se lanza MIT; los datasets CC BY 4.0.',
                tech: ['JSON', 'CC BY 4.0', 'MIT'],
            },
            {
                phase: 'Fase 3',
                title: 'Guardrails en CI y en runtime',
                detail:
                    'GitHub Actions valida en cada push que ambos JSON parsean y cada entrada lleva name, city, coordinates y funding type. Al cargar, entradas fuera del bounding box de su ciudad se omiten con warning en consola — una coordenada mala nunca puede renderizar silenciosamente un marcador en el océano.',
                tech: ['GitHub Actions', 'CI Validation'],
            },
        ],
        results: [
            { metric: '53', label: 'organizaciones tech de Lima y Arequipa investigadas y mapeadas' },
            { metric: '0', label: 'dependencias — un HTML, dos JSON, sin build step' },
            { metric: '766', label: 'líneas — toda la aplicación en un solo archivo' },
        ],
        keyFindings: [
            'Zero-dependency es una feature para proyectos cívicos: cualquiera puede forkear un HTML y dos JSON para su propia ciudad sin tocar npm.',
            'Para datasets abiertos, la regla de curación importa más que el conteo — descartar seis entradas no verificables es lo que hace confiables las otras 53.',
            'CI tiene trabajo incluso sin código de aplicación: validar schema de datos en cada push mantiene contribuciones comunitarias sin romper el mapa.',
        ],
        conclusion:
            'Peru Grid está en vivo en perugrid.com — open source de punta a punta (código MIT, datos CC BY 4.0) y diseñado para forkearse. El pitch honesto es un punto de partida verificado para hacer visible el ecosistema tech peruano, no un atlas terminado; los envíos de la comunidad siguen creciendo el mapa.',
    },
    'read-video': {
        category: 'INGENIERÍA IA',
        title: 'read-video — Enseñando a agentes IA a ver video',
        tagline:
            'Un agente de codificación con IA puede leer imágenes y PDFs — no video. read-video descompone cualquier video en frames más transcripción, y cotiza todo el trabajo antes de gastar un centavo o un token.',
        readTime: '6 min de lectura',
        overview:
            'read-video es una skill open-source (MIT) de Claude Code / Codex que da a agentes IA comprensión genuina de video: apúntala a un archivo local o URL (YouTube, Loom, Vimeo…) y extrae frames para la pista visual y transcripción para la pista de audio — las dos cosas que un agente puede consumir realmente. Su feature definitoria es la puerta de costo: un pipeline probe → estimate → run que cotiza todo el trabajo (dólares de transcripción y costo de tokens del agente) por adelantado, usa transcripción local gratuita por defecto con faster-whisper, y solo toca backends cloud de pago tras aprobación explícita. El motor es un CLI Python de 1,300 líneas construido sobre la stdlib, con un protocolo opcional legible por máquina (`manifest`, `--envelope`, códigos de salida determinísticos) añadido para agentes que lo llaman. La landing page pública — en vivo en https://rikepilb.github.io/read-video/ — presenta la herramienta bajo el nombre de trabajo "Voidscape", su puerta de entrada consumer-facing sobre el mismo motor.',
        problem:
            'Los agentes fingen comprensión de video leyendo títulos y comentarios. Ver de verdad cuesta dinero real — los frames dominan el gasto en tokens del agente, y la transcripción cloud factura por minuto — así una implementación naive sorprende a usuarios con la factura después. El problema de diseño fue hacer la comprensión de video real y pre-aprobada: nunca gastar antes de mostrar el precio, y nunca dejar que el audio salga de la máquina sin consentimiento explícito.',
        questions: [
            '¿Cuál es el camino más barato y honesto a una transcripción — y qué tan seguido es gratis?',
            '¿Puede una skill servir múltiples harnesses de agente (Claude Code, Codex, Gemini CLI, Copilot CLI) desde una sola instalación?',
            '¿La skill supera mediblemente a un agente improvisando con ffmpeg por su cuenta?',
            '¿Qué pasa cuando un agente de codificación extiende el mismo codebase meses después — el diseño original resiste una revisión adversarial real?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Probe → Estimate → Run, con puerta de costo',
                detail:
                    'probe inspecciona la entrada (duración, resolución, audio, subtítulos existentes); estimate computa el costo completo — dólares de transcripción por backend y gasto proyectado de tokens del agente por conteo de frames — antes de cualquier trabajo; run solo ejecuta tras aprobación del usuario (o umbral cero dólares). Nueve paths de transcripción ordenados más barato-y-privado primero: subtítulos sidecar, captions de URL, faster-whisper y trx local (todos gratis) antes de Groq, OpenAI, OpenRouter y Gemini.',
                tech: ['Python', 'ffmpeg', 'yt-dlp', 'faster-whisper'],
            },
            {
                phase: 'Fase 2',
                title: 'Un motor solo stdlib',
                detail:
                    'Los paths de API de pago usan requests multipart hechos a mano sobre urllib — sin SDKs — así los paths gratuitos nunca pagan costo de import y una dependencia opcional faltante nunca puede romper probe o estimate. 110 casos pytest en 17 archivos fijan chunking, deduplicación, estimación de costo, extracción de frames y hardening (incluyendo un fix anchor contra spoofing de dominios parecidos y una suite de tests a nivel subprocess para el contrato del CLI de agente).',
                tech: ['Python stdlib', 'pytest'],
            },
            {
                phase: 'Fase 3',
                title: 'Diseño de skill driven por evals',
                detail:
                    'La skill se benchmarkó con un loop de eval contra baseline sin skill: con la skill cargada, el agente pasó 14 de 15 assertions (93.3%) en escenarios de resumen visual, comprensión de audio y puerta de costo, versus 66.7% baseline. Un script de instalación la conecta a cuatro harnesses: Claude Code, Codex, Gemini CLI y Copilot CLI.',
                tech: ['LLM Evals', 'Claude Code', 'PowerShell', 'Bash'],
            },
            {
                phase: 'Fase 4',
                title: 'Build Week: protocolos de agente, revisión adversarial, seguridad honesta',
                detail:
                    'Extendida para OpenAI Build Week 2026 con Codex + GPT-5.6: tiers de transcripción local adaptativos, contabilidad de costo nativa GPT-5.6 por patches de 32×32, y un protocolo CLI opcional orientado a agentes (`manifest`, `--envelope`/`--compact`, una taxonomía determinística de códigos de salida con metadata de reintentabilidad). Una revisión de código adversarial contra la nueva puerta de costo/consentimiento reveló 9 hallazgos; los 6 defectos reales se corrigieron con tests de regresión antes de lanzar — incluyendo uno detectado solo al correr de verdad los comandos documentados, no por unit tests. Un escáner de seguridad estático marcó el flujo de datos intencional env-key-a-API-cloud como CRITICAL; en vez de ocultarlo, el hallazgo se divulga y explica en un `SECURITY.md` que el propio reporte del escáner verifica.',
                tech: ['Codex', 'GPT-5.6', 'Revisión de Código Adversarial', 'Protocolos de Agente', 'GitHub Pages'],
            },
        ],
        results: [
            { metric: '93.3%', label: 'assertions de eval pasadas con la skill, vs 66.7% baseline sin ella' },
            { metric: '9', label: 'backends de transcripción, ordenados gratis-y-local primero' },
            { metric: '110', label: 'tests sobre un motor de 1,300 líneas solo stdlib' },
            { metric: '6', label: 'bugs reales encontrados por revisión adversarial y corregidos antes de lanzar' },
        ],
        keyFindings: [
            'La transparencia de costo es una feature UX para agentes: mostrar el precio antes del trabajo convierte "la IA me subió la factura" en un sí/no informado.',
            'El orden local-first (captions → Whisper on-device → APIs de pago) hace del path gratuito el default — la mayoría de videos nunca cuestan un centavo leer.',
            'Los evals superan las vibes para diseño de skills: un gap medido 93.3%-vs-66.7% es lo que separa "la skill ayuda" de esperar que lo haga.',
            'La revisión adversarial más correr de verdad los comandos documentados detectó una regresión real que los unit tests pasaron por alto: un fix en otra parte del mismo diff cambió silenciosamente lo que demostraba el propio ejemplo de prueba-de-privacidad del README.',
        ],
        conclusion:
            'read-video es la pieza open-source más completa de este portfolio: licencia MIT con docs de contribución, plantillas de issues, GIF demo, una landing page en vivo en GitHub Pages (https://rikepilb.github.io/read-video/), 60+ commits de iteración real, y una mejora de eval medida. También es honesto sobre escala — el set de eval es pequeño e itera — pero la forma es lo que se parece a tooling de agente en producción: cotizado, testeado, local-first, multi-harness, y revisado como software real en vez de lanzado por vibes. Enviado a OpenAI Build Week 2026 (track Developer Tools).',
    },
    'resume-scorer': {
        category: 'INGENIERÍA IA',
        title: 'ResumeScorer — Ingeniería inversa del filtro de currículums',
        tagline:
            'Si un bot va a puntuar tu currículum, puntúalo tú primero. ResumeScorer corre mis currículums por un pipeline open-source de hiring-agent en tres backends LLM — y convierte los números en planes de edición.',
        readTime: '4 min de lectura',
        overview:
            'ResumeScorer es un laboratorio local de puntuación de currículums construido alrededor del pipeline open-source interviewstreet/hiring-agent de HackerRank (PDF → extracción de secciones LLM → verificación GitHub → rúbrica de 120 puntos). Wrappers delgados en PowerShell (219 líneas total) impulsan el pipeline en tres backends LLM — GPT-4o-mini vía OpenRouter como scorer canónico, DeepSeek, y un fallback local Ollama gemma3 para privacidad — más un job-finder Python pequeño que extrae vacantes de HN, READMEs de GitHub y boards ATS. Una skill companion de Claude Code y un subagent convierten reportes de puntaje en planes de edición priorizados y estrictamente honestos: proponen cambios de redacción y estructura, nunca contenido inventado.',
        problem:
            'Los filtros automatizados gatean cada vez más la primera ronda de contratación, y su lógica de puntuación es opaca para candidatos. En lugar de adivinar, el movimiento es empírico: correr el mismo screener open-source que reclutadores podrían correr, descomponer su rúbrica (35 puntos open source, 30 self projects, 25 production signals, 10 technical skills, más bonus), benchmark currículums reales contra ella, y dejar que los números dirijan las ediciones.',
        questions: [
            '¿Qué recompensa realmente un screener LLM, en puntos, sección por sección?',
            '¿Qué tan estables son los puntajes entre backends LLM distintos — ¿la rúbrica o el modelo hace el trabajo?',
            '¿Dónde pierden puntos verificablemente mis propios currículums, y qué ediciones los recuperan honestamente?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Envolver, no reconstruir',
                detail:
                    'El pipeline de puntuación es código OSS de HackerRank, en su propio clone; este repo añade orquestación deliberadamente delgada — cuatro scripts PowerShell totalizando 219 líneas — más configuración para tres backends: OpenRouter GPT-4o-mini (canónico), DeepSeek chat, y gemma3 local forzado a CPU vía Ollama para puntuar offline cualquier cosa sensible.',
                tech: ['PowerShell', 'Python', 'OpenRouter', 'Ollama'],
            },
            {
                phase: 'Fase 2',
                title: 'Benchmark y descomponer la rúbrica',
                detail:
                    'Un benchmark de 18 currículums (17 puntuados, un fallo determinístico del parser — documentado, no oculto) estableció el baseline: mis propios currículums puntaron 44–59/100, con Open Source en 0/35 en todos — la brecha verificada más grande, y la motivación directa del trabajo open-source ahora en este portfolio. La rúbrica de 120 puntos está completamente descompuesta en los docs del repo.',
                tech: ['GPT-4o-mini', 'DeepSeek', 'gemma3'],
            },
            {
                phase: 'Fase 3',
                title: 'Puntaje → plan de edición honesto',
                detail:
                    'Una skill score-resume de Claude Code más un subagent resume-optimizer leen el reporte de puntaje y producen un plan de edición rankeado y consciente de pesos bajo restricción dura de honestidad: solo reformular y reestructurar, nunca fabricar experiencia. Una auto-auditoría de 18 ítems ordenados por severidad documenta exactamente dónde el lab mismo es débil.',
                tech: ['Claude Code', 'LLM Agents'],
            },
        ],
        results: [
            { metric: '18', label: 'currículums benchmarked contra la rúbrica de 120 puntos del screener' },
            { metric: '3', label: 'backends LLM comparados — cloud canónico, cloud alt, totalmente local' },
            { metric: '0/35', label: 'el puntaje open-source que motivó lanzar open source de verdad' },
        ],
        keyFindings: [
            'Las rúbricas de screener son legibles una vez las corres: las contribuciones open-source cargaron el mayor peso individual (35/120) — más que habilidades técnicas — lo que pocos candidatos adivinarían.',
            'El fallback de modelo local importa: puntuar currículums de otras personas por APIs cloud es una decisión de privacidad, no solo de costo.',
            'El loop solo funciona con restricción de honestidad — un optimizador que inventa contenido maximizaría el puntaje y destruiría el propósito del artefacto.',
        ],
        conclusion:
            'ResumeScorer es un lab, no un producto — sin UI, wrappers delgados por diseño alrededor de OSS externo acreditado, resultados privados. Su valor es el loop de feedback que creó: un puntaje open-source medido de 0/35 es por qué read-video, Peru Grid y el trabajo de skills abajo existen en público. A veces lo más útil que te dice una herramienta es qué construir después.',
    },
    'agentic-skills-lab': {
        category: 'INGENIERÍA IA',
        title: 'Agentic Skills Lab — Control de versiones para capacidades IA',
        tagline:
            'Los agentes de codificación con IA son tan buenos como las instrucciones que cargan — y la mayoría vive en dotfiles sin versionar. Las mías son una librería con git: 33 skills con historial, gates de seguridad y pipeline de publicación.',
        readTime: '5 min de lectura',
        overview:
            'El Agentic Skills Lab es el sistema detrás de cada proyecto asistido por IA en este portfolio: una librería versionada de 33 skills de Claude Code escritas personalmente — handoff trees de continuidad de sesión, scaffolding de repos, comprensión de video, búsqueda second-brain, puntuación de currículums — cuyas copias en vivo se despliegan a cuatro harnesses de agente distintos. Alrededor hay disciplina real de supply chain: cada skill externa se escanea estáticamente antes de instalar, las flagged reciben rewrites clean-room en lugar de copias, y un pipeline sync con confirmación separa editar de desplegar. Dos skills están publicadas open source hasta ahora (project-scaffold y handoff-to-issues), con más graduando conforme se sanitizan.',
        problem:
            'Las skills de agente son instrucciones ejecutables con privilegios reales — y el ecosistema las trata como wallpaper: archivos sin versionar en home directory, instalados desde repos de desconocidos sin revisar. Dos problemas se combinan: tus propias skills evolucionan con cero historial (una edición que degrada una skill es permanentemente silenciosa), y skills de terceros son riesgo de supply chain (varias populares fallan análisis estático con hallazgos HIGH). El lab trata ambos como problemas de ingeniería.',
        questions: [
            '¿Cómo se ve el control de versiones para capacidades IA que viven fuera de cualquier repo por diseño?',
            '¿Cómo consumes las buenas ideas del ecosistema sin heredar su riesgo de supply chain?',
            '¿Se puede comparar calidad de skills empíricamente en lugar de por sensación?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Un mirror con git y deploys deliberados',
                detail:
                    'La fuente de verdad de cada skill vive en un repo git; las copias en vivo en ubicaciones de harness de agente son targets de deploy, no superficies de edición. Un pipeline sync dual (PowerShell + bash) trae drift en vivo y empuja ediciones tras confirmación explícita — desplegar una skill sobrescribe lo que cargan cuatro herramientas IA distintas, así es una decisión, no un save.',
                tech: ['Git', 'PowerShell', 'Bash', 'Markdown'],
            },
            {
                phase: 'Fase 2',
                title: 'Escanear antes de instalar, clean-room al fallar',
                detail:
                    'Cada skill, plugin o servidor MCP externo recibe un escaneo de seguridad estático antes de habilitarse; hallazgos HIGH/CRITICAL son hard stop. Ideas flagged-pero-buenas reciben rewrites clean-room — re-implementadas desde cero con el comportamiento flagged excluido, provenance y veredictos de scan registrados por skill. Siete skills actuales existen así, incluyendo una familia second-brain de cinco skills reescrita de un repo escaneado en lugar de instalada desde él.',
                tech: ['SkillSpector', 'Static Analysis'],
            },
            {
                phase: 'Fase 3',
                title: 'Battle tests y publicación',
                detail:
                    'Skills competidoras se comparan en tareas idénticas contra una rúbrica puntuada — injerta lo que gana. Skills gradúan a open source una vez generalizadas y limpiadas de contexto personal: el repo público claude-skills actualmente lanza project-scaffold (un bootstrapper idempotente de repo AI-native: README, rulebooks de agente, guardrails, handoff tree, CI en un pase) y handoff-to-issues (convierte handoff trees de sesión en issues de GitHub deduplicados).',
                tech: ['Claude Code', 'GitHub', 'LLM Evals'],
            },
        ],
        results: [
            { metric: '33', label: 'skills escritas personalmente bajo control de versiones, desplegadas a 4 harnesses' },
            { metric: '7', label: 'rewrites clean-room de skills externas flagged por seguridad' },
            { metric: '2', label: 'skills publicadas open source hasta ahora (project-scaffold, handoff-to-issues)' },
        ],
        keyFindings: [
            'Las skills son código y merecen la disciplina del código: historial, review, deploys deliberados — una skill en vivo sin versionar es un sistema en producción sin rollback.',
            'La puerta scan-before-install se paga sola: múltiples skills comunitarias populares fallaron análisis estático, y el patrón clean-room captura sus ideas sin su riesgo.',
            'Editar donde versionas y desplegar a propósito (push con confirmación) es la diferencia entre una librería y un montón de dotfiles.',
        ],
        conclusion:
            'Esto es infraestructura para una forma de trabajar: cada otro proyecto en esta página se construyó con estas skills cargadas — los handoff trees que sobreviven pérdida de contexto, los scaffolds que hacen un repo legible por agente, las auditorías que mantienen las afirmaciones honestas. La librería misma permanece privada (codifica contexto personal por diseño); lo que generaliza se publica, dos skills a la vez.',
    },
    'skillvault': {
        category: 'INGENIERÍA IA',
        title: 'SkillVault — Packs curados de skills para agentes de codificación IA',
        tagline:
            'La comunidad ha escrito cientos de skills de agente; la mayoría de proyectos necesita unas cinco en cualquier momento. SkillVault es la curación: 25 skills de terceros vetadas, organizadas por ciclo de vida de proyecto.',
        readTime: '3 min de lectura',
        overview:
            'SkillVault es un starter-pack curado de 25 skills de Claude Code de terceros — 289 archivos de trabajo comunitario, seleccionados a mano y organizados en cinco etapas de ciclo de vida de proyecto (design, security, debug, backend, process) para que un proyecto nuevo copie exactamente lo que su etapa actual necesita en lugar de todo. Un índice legible por agente mapea cada skill a keywords trigger y casos de uso. La curación es el trabajo aquí, y el repo lo dice: ningún contenido de skill es mío; la selección, staging, vetting de seguridad e indexado sí.',
        problem:
            'El descubrimiento de skills de agente es un cañón de agua: awesome-lists con cientos de entradas, sin señal de calidad, sin sentido de cuándo en la vida de un proyecto importa cada skill. Instalar todo hincha el contexto del agente y la superficie de ataque; instalar nada desperdicia el mejor trabajo de la comunidad. La capa faltante es curación con opinión con un mapa de ciclo de vida — y una puerta de seguridad delante de la puerta.',
        questions: [
            '¿Qué skills comunitarias realmente ganan un lugar en un stack de trabajo, etapa por etapa?',
            '¿Cómo se mantiene consumible un set curado por agentes, no solo humanos?',
        ],
        methodology: [
            {
                phase: 'Fase 1',
                title: 'Seleccionar y organizar por ciclo de vida',
                detail:
                    '25 skills organizadas en cinco etapas — 11 design (auditoría UI, design tokens, sistemas Tailwind), 2 security, 2 debugging, 4 backend, 6 process (TDD, code review, verification loops) — para que un proyecto en etapa design copie el pack design, no el mundo. Todo pasa la misma puerta scan-before-install que el resto del toolchain.',
                tech: ['Claude Code', 'Markdown'],
            },
            {
                phase: 'Fase 2',
                title: 'Indexar para agentes',
                detail:
                    'Un índice AGENTS.md da a cada skill keywords trigger y un caso de uso de una línea, haciendo el vault navegable por los agentes que lo consumen. Varios proyectos en vivo — incluyendo este portfolio — corren sets de skills sourced de él.',
                tech: ['Git', 'AGENTS.md'],
            },
        ],
        results: [
            { metric: '25', label: 'skills de terceros vetadas y curadas (289 archivos)' },
            { metric: '5', label: 'etapas de ciclo de vida: design, security, debug, backend, process' },
        ],
        keyFindings: [
            'La curación es una contribución real en un ecosistema ahogado en opciones — el valor es lo excluido y cuándo aplica lo incluido.',
            'La no-autoría explícita es el marco honesto: organizar el mejor trabajo de otros es útil precisamente porque lo dice.',
        ],
        conclusion:
            'SkillVault es un estante, no un producto — joven, de un solo propósito, y ya consumido por los otros proyectos de esta página. Junto con el Skills Lab divide el problema limpiamente: el lab desarrolla lo que yo escribo; el vault organiza lo mejor de lo que todos los demás hicieron.',
    },
}
