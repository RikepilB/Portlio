export type ExperienceType = 'work' | 'education' | 'volunteer' | 'research'

export interface Experience {
    id: string
    type: ExperienceType
    role: string
    org: string
    location: string
    period: string
    startDate: string // ISO YYYY-MM for sorting
    endDate: string | 'present'
    description: string
    bullets: string[]
    skills?: string[]
    highlight?: string
    logo?: string // path relative to /images/
    partnerLink?: string // optional external partner URL
}

export const experiencesEs: Experience[] = [
    {
        id: 'braintrainr',
        type: 'work',
        role: 'Líder de contenido web y UX',
        org: 'BrainTrainr',
        location: 'Toronto, ON · Remoto',
        period: 'Ene 2026 – May 2026',
        startDate: '2026-01',
        endDate: '2026-05',
        description:
            'Lideré el análisis UI/UX y la implementación de diseño para el lanzamiento de la plataforma Universal Voice AI (BrainTrainr 1800), convirtiendo diseños de Figma en un sitio WordPress accesible y en producción.',
        bullets: [
            'Lideré el análisis UI/UX y la implementación de diseño en Figma, y colaboré con el equipo para construir y lanzar interfaces accesibles para el lanzamiento de la plataforma Universal Voice AI (BrainTrainr 1800)',
            'Convertí diseños aprobados en Figma en un sitio WordPress responsive, eliminando la fricción entre diseño y desarrollo para mantener la entrega en plazo',
        ],
        skills: ['Figma', 'UX Design', 'WordPress', 'Accessibility'],
        highlight: 'Lanzamiento de la plataforma Universal Voice AI',
    },
    {
        id: 'karac',
        type: 'work',
        role: 'Desarrollador frontend',
        org: 'Karac',
        location: 'Site Pully, Suiza · Remoto',
        period: 'Oct 2025 – Feb 2026',
        startDate: '2025-10',
        endDate: '2026-02',
        description:
            'Desarrollo frontend para una startup suiza: rediseñé el onboarding, construí herramientas internas de QA y entregué un sistema de autenticación modular.',
        bullets: [
            'Reduje el tiempo promedio de registro de 2 min a 45 s (63 % más rápido) rediseñando el flujo de onboarding: los campos de código de verificación avanzan con lógica basada en eventos mientras escribes, y los errores del formulario aparecen al instante, sin recargar la página',
            'Reduje la configuración del entorno de pruebas de QA de 15 min a 30 s con una herramienta de un clic que llena la base de datos con datos de prueba realistas, permitiendo a los ingenieros depurar persistencia de sesión y manejo seguro de datos de inmediato',
            'Diseñé un sistema de autenticación modular con componentes reutilizables usando PHP y Laravel Socialite para abstraer la lógica de proveedores, ahorrando 5–10 horas de mantenimiento mensual y soportando inicio de sesión con Google y Facebook',
        ],
        skills: ['PHP', 'Laravel Socialite', 'JavaScript', 'Event-Driven UX'],
        highlight: 'Registro: 2 min → 45 s (63 % más rápido)',
    },
    {
        id: 'examvault-dev',
        type: 'work',
        role: 'Desarrollador full-stack (proyecto de cierre)',
        org: 'UBC Faculty of Science',
        location: 'Kelowna, BC',
        period: 'May 2025 – Ago 2025',
        startDate: '2025-05',
        endDate: '2025-08',
        description:
            'Construí ExamVault, una plataforma full-stack que ayuda a instructores a crear, gestionar y analizar exámenes de opción múltiple. Actué como Scrum Master durante un ciclo de sprints de 4 meses.',
        bullets: [
            'Construí la lógica backend para generación aleatoria de exámenes y algoritmos estadísticos de calificación',
            'Creé un panel de analítica para visualizar resultados de exámenes y tendencias a lo largo del tiempo',
            'Coordiné sprints como Scrum Master, gestionando feedback del cliente y entrega entre equipos',
            'Reduje los tiempos de carga de informes de 4 minutos a 60 segundos mediante optimizaciones SQL',
        ],
        skills: ['React.js', 'Tailwind CSS', 'Django', 'PostgreSQL', 'Docker', 'GitHub Actions'],
        highlight: 'Más de 100K registros estudiantiles automatizados',
    },
    {
        id: 'ubc-research',
        type: 'research',
        role: 'Asistente de investigación',
        org: 'University of British Columbia',
        location: 'Kelowna, BC',
        period: 'Ene 2025 – May 2025',
        startDate: '2025-01',
        endDate: '2025-05',
        description:
            'Participé en investigación empírica sobre el impacto de la IA generativa en la calidad del software y la deuda técnica. El equipo ganó la Mejor Presentación entre 10 cohortes de investigación.',
        bullets: [
            'Analicé más de 5.000 repositorios de GitHub usando SonarQube y pipelines de datos en Python',
            'Apliqué pruebas estadísticas Mann-Whitney U para comparar calidad de código generado por IA vs. humano',
            'Gané el premio a la Mejor Presentación entre 10 cohortes de investigación competidoras',
            'Obtuve nominación a la conferencia MSR (Mining Software Repositories)',
        ],
        skills: ['Python', 'SonarQube', 'GitHub API', 'SciPy', 'Data Mining'],
        highlight: 'Mejor Presentación — 10 cohortes',
    },
    {
        id: 'lasa',
        type: 'volunteer',
        role: 'Vicepresidente interno',
        org: 'Latin American Student Association',
        location: 'Kelowna, BC',
        period: 'Sep 2024 – Abr 2025',
        startDate: '2024-09',
        endDate: '2025-04',
        description:
            'Lideré las operaciones internas de una asociación estudiantil que representa a la comunidad latinoamericana en UBC Okanagan. Gestioné redes sociales, colaboraciones entre clubes y presupuestos de eventos.',
        bullets: [
            'Gestioné redes sociales y colaboré con clubes estudiantiles para aumentar el engagement y la participación en eventos',
            'Optimicé la planificación de eventos bajo regulaciones sindicales y simplifiqué presupuestos mediante reuniones tipo sprint, reduciendo costos',
        ],
        skills: ['Event Planning', 'Budget Management', 'Social Media', 'Leadership'],
        highlight: 'VP Interno',
    },
    {
        id: 'ubc-bdr',
        type: 'work',
        role: 'Representante de desarrollo de negocios',
        org: 'UBC Okanagan Campus',
        location: 'Kelowna, BC · Presencial',
        period: 'Ago 2023 – Sep 2025',
        startDate: '2023-08',
        endDate: '2025-09',
        description:
            'Apoyé operaciones de front y back of house en Admin y Bookstore de UBC Okanagan. Atendí más de 80 consultas semanales, gestioné periodos pico y brindé soporte IT de primera línea.',
        bullets: [
            'Atendí más de 80 consultas semanales y transacciones POS, gestionando periodos pico para reducir tiempos de espera',
            'Procesé pedidos en línea con entregas de inventario precisas',
            'Brindé soporte IT de primera línea para configuración de cuentas, resolución de problemas y diagnósticos básicos',
            'Fortalecí comunicación, organización y resolución de problemas en un entorno dinámico orientado a estudiantes',
        ],
        skills: ['Customer Service', 'IT Support', 'POS Systems', 'Inventory Management'],
        highlight: 'Más de 80 consultas semanales atendidas',
    },
    {
        id: 'football-club',
        type: 'volunteer',
        role: 'Fundador y presidente',
        org: 'Football Enthusiast Student Club',
        location: 'Kelowna, BC',
        period: 'Ago 2023 – Abr 2025',
        startDate: '2023-08',
        endDate: '2025-04',
        description:
            'Fundé y lideré un club de fútbol universitario desde cero, gestionando un presupuesto de $2,500 y haciendo crecer la comunidad mediante planificación estratégica de eventos.',
        bullets: [
            'Gestioné un presupuesto de $2,500 y coordiné la logística de eventos para torneos universitarios',
            'Aumenté la asistencia a eventos mediante estrategias en redes sociales y outreach en el campus',
            'Construí y mantuve una comunidad creciente de entusiastas del fútbol en UBC',
        ],
        skills: ['Leadership', 'Event Planning', 'Budget Management', 'Community Building'],
        highlight: 'Presupuesto de $2,500 gestionado',
        partnerLink: 'https://shorturl.at/2HhZc',
    },
    {
        id: 'tech-ambassador',
        type: 'volunteer',
        role: 'Cofundador y coordinador de proyecto',
        org: 'Okanagan Tech Industry Night',
        location: 'Kelowna, BC',
        period: 'Nov 2023 – Feb 2024',
        startDate: '2023-11',
        endDate: '2024-02',
        description:
            'Organicé un evento de networking de la industria tecnológica con más de 200 asistentes, gestionando invitaciones, patrocinadores y logística de punta a punta.',
        bullets: [
            'Organicé un evento tech para más de 200 asistentes, gestionando invitaciones, patrocinadores y logística',
            'Conecté estudiantes con profesionales de la industria del ecosistema tech de Okanagan',
        ],
        skills: ['Event Management', 'Networking', 'Sponsorship'],
        highlight: 'Más de 200 asistentes organizados',
    },
]

export function getExperienceByTypeEs(type: ExperienceType): Experience[] {
    return experiencesEs.filter((e) => e.type === type)
}
