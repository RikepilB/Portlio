import type { Locale } from '@/i18n/config'

type Text = Record<Locale, string>
export interface ProjectHealth {
  stage: Text
  availability: Text
  summary: Text
  checked: string
  url?: string
}

// Dates describe the evidence checkpoint, not a promise of continuous uptime.
export const projectHealth: Record<string, ProjectHealth> = {
  'bike-share-optimization': {
    stage: { en: 'Research · case study', es: 'Investigación · caso de estudio' },
    availability: { en: 'Recorded demo', es: 'Demo grabada' },
    summary: { en: 'Network analysis is documented. Dashboard and forecasting extensions remain in progress; no hosted product is claimed.', es: 'El análisis de redes está documentado. El panel y los modelos predictivos siguen en desarrollo; no se presenta como producto alojado.' }, checked: '2026-09-14',
  },
  'ai-technical-debt-research': {
    stage: { en: 'Team research', es: 'Investigación en equipo' },
    availability: { en: 'Research repository', es: 'Repositorio de investigación' },
    summary: { en: 'A collaborative study of AI-generated code and maintainability, presented as research rather than a commercial product.', es: 'Un estudio colaborativo sobre código generado por IA y mantenibilidad, presentado como investigación.' }, checked: '2026-09-14',
  },
  'accounting-automation': {
    stage: { en: 'Internal workflow', es: 'Flujo interno' },
    availability: { en: 'Case study', es: 'Caso de estudio' },
    summary: { en: 'An accounting automation case study. No public application or source repository is listed.', es: 'Un caso de automatización contable. No se ofrece una aplicación ni un repositorio público.' }, checked: '2026-09-14',
  },
  'sublime-event-ticketing': {
    stage: { en: 'Earlier project', es: 'Proyecto anterior' },
    availability: { en: 'Recorded demo', es: 'Demo grabada' },
    summary: { en: 'Event ticketing work preserved as a case study and recording. Current service availability has not been verified.', es: 'Trabajo de venta de entradas conservado como caso de estudio y grabación. La disponibilidad actual del servicio no está verificada.' }, checked: '2026-09-14',
  },
  'bookstore-app': {
    stage: { en: 'Academic project', es: 'Proyecto académico' },
    availability: { en: 'Recorded demo', es: 'Demo grabada' },
    summary: { en: 'A bookstore application with code and a recorded demonstration. No current public service is claimed.', es: 'Una aplicación de librería con código y demostración grabada. No se afirma que exista un servicio público actual.' }, checked: '2026-09-14',
  },
  'empenalo-fintech': {
    stage: { en: 'Public demo · migration planned', es: 'Demo pública · migración prevista' },
    availability: { en: 'Visit demo', es: 'Visitar demo' },
    summary: { en: 'The original marketplace demo is reachable. The separate 2.0 migration is still in progress; live transaction readiness is not established by the demo.', es: 'La demo original del marketplace está accesible. La migración 2.0 sigue en desarrollo; la demo no acredita transacciones reales.' }, checked: '2026-09-14', url: 'https://empenalo.netlify.app/',
  },
  'vans-voice-navigation': {
    stage: { en: 'Team prototype', es: 'Prototipo en equipo' },
    availability: { en: 'Source contribution', es: 'Contribución de código' },
    summary: { en: 'Voice-navigation work has an upstream contribution record. The expanded case study remains in preparation.', es: 'El trabajo de navegación por voz tiene una contribución registrada en el proyecto original. El caso de estudio ampliado sigue en preparación.' }, checked: '2026-09-14',
  },
  'aquatwin-water-metering': {
    stage: { en: 'Concept', es: 'Concepto' },
    availability: { en: 'Concept notes', es: 'Notas del concepto' },
    summary: { en: 'A water-metering concept. No working AquaTwin deployment or validated outcomes are claimed.', es: 'Un concepto de medición de agua. No se afirma que AquaTwin tenga un despliegue funcional ni resultados validados.' }, checked: '2026-09-14',
  },
  'resume-scorer': {
    stage: { en: 'Local research tool', es: 'Herramienta de investigación local' },
    availability: { en: 'Case study in preparation', es: 'Caso de estudio en preparación' },
    summary: { en: 'A local resume-scoring and optimization lab. Separate from ScoutLane’s public Resume Match experience.', es: 'Un laboratorio local de evaluación y optimización de CV. Es independiente del Resume Match público de ScoutLane.' }, checked: '2026-09-14',
  },
  'agentic-skills-lab': {
    stage: { en: 'Active developer tooling', es: 'Herramientas de desarrollo activas' },
    availability: { en: 'Case study in preparation', es: 'Caso de estudio en preparación' },
    summary: { en: 'Versioned personal agent skills and workflow maintenance. Runtime compatibility and review matter more than the number of installed skills.', es: 'Skills personales versionadas y mantenimiento de flujos de agentes. La compatibilidad y la revisión importan más que la cantidad instalada.' }, checked: '2026-09-14',
  },
  skillvault: {
    stage: { en: 'Curated resource library', es: 'Biblioteca de recursos seleccionados' },
    availability: { en: 'Public repository', es: 'Repositorio público' },
    summary: { en: 'A curated collection of third-party skills. Credit belongs to the original authors; this is curation, not authorship of the collection’s contents.', es: 'Una colección seleccionada de skills de terceros. El crédito corresponde a sus autores; es curación, no autoría del contenido.' }, checked: '2026-09-14',
  },
  'scoutlane-recruitment': {
    stage: { en: 'Public release', es: 'Versión pública' },
    availability: { en: 'Try Resume Match', es: 'Probar Resume Match' },
    summary: { en: 'Compare a resume with a job description. The public tool checks source excerpts and keeps resume matching separate from hiring records.', es: 'Compara un CV con una oferta. La herramienta verifica los fragmentos de origen y mantiene la comparación separada de los registros de contratación.' },
    checked: '2026-09-11', url: 'https://scoutlane.net/resume-match',
  },
  'peru-tech-map': {
    stage: { en: 'Public release', es: 'Versión pública' },
    availability: { en: 'Explore PeruGrid + Scout', es: 'Explorar PeruGrid + Scout' },
    summary: { en: 'The technology ecosystem map now includes Coworking Scout: a public explorer for coworkings, cafés and libraries.', es: 'El mapa del ecosistema tecnológico ahora incluye Coworking Scout: un explorador público de coworkings, cafés y bibliotecas.' },
    checked: '2026-09-11', url: 'https://perugrid.com/scout/',
  },
  voidscape: {
    stage: { en: 'Public CLI · evolving', es: 'CLI pública · en evolución' },
    availability: { en: 'Explore the CLI', es: 'Explorar la CLI' },
    summary: { en: 'Turn media into ordered evidence with an inspect → preview → read workflow. Portable packs are experimental; broader release validation is still in progress.', es: 'Convierte contenido en evidencia ordenada con el flujo inspect → preview → read. Los paquetes portables son experimentales; la validación ampliada sigue en curso.' },
    checked: '2026-09-14', url: 'https://voidscape.club/',
  },
  findleads: {
    stage: { en: 'Deployed · pilot', es: 'Desplegado · piloto' },
    availability: { en: 'Case study', es: 'Caso de estudio' },
    summary: { en: 'A lead work queue and acquisition monitor. Broader public access awaits verification of endpoint protection and usage limits.', es: 'Una cola de prospectos y un monitor de adquisición. La apertura al público depende de verificar la protección de endpoints y los límites de uso.' },
    checked: '2026-09-11',
  },
  'el-umbral': {
    stage: { en: 'Deployed civic project', es: 'Proyecto cívico desplegado' },
    availability: { en: 'Visit El Umbral', es: 'Visitar El Umbral' },
    summary: { en: 'A bilingual project hub for Venezuela earthquake relief. Community work, with the project hub presented separately from contributions to other repositories.', es: 'Un centro bilingüe de proyectos de ayuda tras el terremoto en Venezuela. El hub se presenta por separado de las contribuciones a otros repositorios.' },
    checked: '2026-09-11', url: 'https://elumbralvzla.org',
  },
  'exam-analysis-system': {
    stage: { en: 'Team capstone · protected demo', es: 'Proyecto en equipo · demo protegida' },
    availability: { en: 'Recorded demo', es: 'Demo grabada' },
    summary: { en: 'A UBC team project for exam analysis, now redesigned around a graded-paper identity. The hosted demo requires Vercel authentication; a recorded demo remains available.', es: 'Un proyecto en equipo de UBC para análisis de exámenes, rediseñado con una identidad de examen corregido. La demo alojada requiere autenticación de Vercel; sigue disponible una grabación.' },
    checked: '2026-09-14',
  },
}
