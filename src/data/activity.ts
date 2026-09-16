import type { Locale } from '@/i18n/config'

type Text = Record<Locale, string>

export const activityProjectSlugs = ['voidscape', 'findleads', 'peru-tech-map', 'scoutlane-recruitment', 'empenalo-fintech', 'el-umbral']

export const additionalActivityProjects: { title: string; href: string; description: Text }[] = [
  {
    title: 'Canada Research Path PE',
    href: 'https://canada-research-path-pe.ridi-pillaca.chatgpt.site',
    description: {
      en: 'An editable guide to technology research opportunities between Peru and Canada, with official sources and dates to verify.',
      es: 'Guía editable de oportunidades de investigación tecnológica entre Perú y Canadá, con fuentes oficiales y fechas por verificar.',
    },
  },
]

export interface Activity {
  id: string
  kind: 'release' | 'contribution' | 'idea'
  date?: string
  title: Text
  description: Text
  href: string
}

export const activity: Activity[] = [
  {
    id: 'normal-groups', kind: 'contribution',
    title: { en: 'Normal: read named groups directly', es: 'Normal: leer grupos por nombre' },
    description: { en: 'Contributed the observed conversation handle to MCP group results, preserving message permissions and account boundaries. Merged upstream in PR #179.', es: 'Contribuí el identificador de conversación a los resultados de grupos MCP, preservando permisos y límites de cuenta. Integrado en el PR #179 del proyecto original.' },
    href: 'https://github.com/cuevaio/normal/pull/179',
  },
  {
    id: 'normal-guide', kind: 'contribution',
    title: { en: 'Normal: a more honest chat-reading workflow', es: 'Normal: un flujo de lectura de chats más preciso' },
    description: { en: 'Contributed guidance that distinguishes connection state, chat availability and history coverage. Merged upstream in PR #180.', es: 'Contribuí una guía que distingue el estado de conexión, la disponibilidad de chats y la cobertura del historial. Integrada en el PR #180.' },
    href: 'https://github.com/cuevaio/normal/pull/180',
  },
  {
    id: 'scoutlane-match', kind: 'release', date: '2026-09-11',
    title: { en: 'ScoutLane: public Resume Match', es: 'ScoutLane: Resume Match público' },
    description: { en: 'Released evidence-based resume comparison with validated excerpts, bounded uploads and server-enforced usage budgets.', es: 'Publiqué la comparación de CV basada en evidencia, con fragmentos validados, archivos acotados y límites de uso controlados por el servidor.' },
    href: 'https://scoutlane.net/resume-match',
  },
  {
    id: 'perugrid-scout', kind: 'release', date: '2026-09-11',
    title: { en: 'PeruGrid: find a place to work', es: 'PeruGrid: encontrar dónde trabajar' },
    description: { en: 'Integrated Coworking Scout into the public map, with coworkings, cafés and libraries from an approved public catalogue.', es: 'Integré Coworking Scout en el mapa público, con coworkings, cafés y bibliotecas de un catálogo público aprobado.' },
    href: 'https://perugrid.com/scout/',
  },
  {
    id: 'voice-navigation', kind: 'contribution',
    title: { en: 'Voice navigation: scrolling and search', es: 'Navegación por voz: desplazamiento y búsqueda' },
    description: { en: 'Contributed voice-command improvements to a shared Chrome extension: percentage scrolling, search highlighting and a scroll indicator.', es: 'Contribuí mejoras de comandos de voz a una extensión de Chrome en equipo: desplazamiento porcentual, resaltado de búsqueda e indicador de progreso.' },
    href: 'https://github.com/Liamtt7/COSC441-ChromeExtension/pull/3',
  },
  {
    id: 'evidence-first', kind: 'idea',
    title: { en: 'Make the evidence reviewable before expanding the interface', es: 'Hacer revisable la evidencia antes de ampliar la interfaz' },
    description: { en: 'A direction for Voidscape: strengthen the installed CLI and recovery workflow first, then explore richer review interfaces. This is a roadmap, not a released feature.', es: 'Una dirección para Voidscape: reforzar primero la CLI instalada y la recuperación, y luego explorar interfaces de revisión más completas. Es una hoja de ruta, no una función publicada.' },
    href: 'https://github.com/RikepilB/void-scape/issues/144',
  },
]

export const activityLabels = {
  en: { title: 'Activity', intro: 'Releases, open-source contributions, and ideas taking shape.', all: 'All', release: 'Releases', contribution: 'Contributions', idea: 'Ideas', undated: 'Public record', open: 'View source', more: 'All activity' },
  es: { title: 'Actividad', intro: 'Lanzamientos, contribuciones de código abierto e ideas en desarrollo.', all: 'Todo', release: 'Lanzamientos', contribution: 'Contribuciones', idea: 'Ideas', undated: 'Registro público', open: 'Ver fuente', more: 'Toda la actividad' },
}
