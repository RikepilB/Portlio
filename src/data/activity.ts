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
  kind: 'release' | 'contribution' | 'idea' | 'post'
  date?: string
  title: Text
  description: Text
  /** Optional: LinkedIn posts have no publicly reachable permalink. */
  href?: string
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
    id: 'scoutlane-hardening', kind: 'release', date: '2026-09-11',
    title: { en: 'ScoutLane: hardening the public matcher', es: 'ScoutLane: endurecer el comparador público' },
    description: { en: 'Put the open resume matcher on transactional Postgres rate limits with authenticated daily cleanup, added DOCX decompression preflight, bounded public model attempts, and kept advisory resume evidence separate from operational applicant scoring.', es: 'Puse el comparador abierto de CV sobre límites de uso transaccionales en Postgres con limpieza diaria autenticada, añadí preverificación de descompresión DOCX, acoté los intentos públicos de modelo y mantuve la evidencia orientativa separada de la puntuación operativa de candidatos.' },
    href: 'https://github.com/RikepilB/ScoutLane/pull/213',
  },
  {
    id: 'findleads-queue', kind: 'release', date: '2026-09-11',
    title: { en: 'FindLeads: an actionable lead queue', es: 'FindLeads: una cola de prospectos accionable' },
    description: { en: 'Turned raw Places results into a working queue with ready-to-call prioritisation, filters, sorting, search and responsive pagination, and moved CRM timestamps onto the database clock. This is a pilot, not a self-service product.', es: 'Convertí resultados crudos de Places en una cola de trabajo con priorización de listos para llamar, filtros, orden, búsqueda y paginación responsive, y llevé las marcas de tiempo del CRM al reloj de la base de datos. Es un piloto, no un producto de autoservicio.' },
    href: 'https://github.com/RikepilB/findleads/pull/4',
  },
  {
    id: 'perugrid-mobile', kind: 'release', date: '2026-09-11',
    title: { en: 'PeruGrid: a mobile sheet you can actually drag', es: 'PeruGrid: una hoja móvil que sí se arrastra' },
    description: { en: 'The mobile sidebar set touch-action to none but only listened for clicks, so every drag gesture was dead. Rebuilt it as a real bottom sheet with peek, mid and expanded anchor points, where flick momentum projects the landing anchor.', es: 'La barra lateral móvil fijaba touch-action en none pero solo escuchaba clics, así que todo gesto de arrastre estaba muerto. La rehíce como una hoja inferior real con anclajes de asomo, intermedio y abierta, donde el impulso proyecta el anclaje de aterrizaje.' },
    href: 'https://github.com/RikepilB/peru-tech-map/pull/57',
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
  {
    id: 'ai-governance-latam', kind: 'post',
    title: { en: 'Who gets to shape the model', es: 'Quién moldea el modelo' },
    description: { en: 'From a talk on AI governance at Trajectory Labs in Toronto. Spanish and Portuguese make up barely three percent of the datasets behind top frontier models, and when a model ignores your culture the software misses local legal rules, regional dialects and everyday context. That is why regional models like LatamGPT matter, and why education work like BrainTrainr makes a direct impact across Latin America and other underrepresented groups. Governance is not abstract theory: it decides who receives compute access, who sets safety rules, and who holds a seat at the table.', es: 'De una charla sobre gobernanza de IA en Trajectory Labs, Toronto. El español y el portugués apenas llegan al tres por ciento de los datos con los que se entrenan los modelos frontera, y cuando un modelo ignora tu cultura el software se pierde normas legales locales, dialectos regionales y contexto cotidiano. Por eso importan modelos regionales como LatamGPT, y por eso el trabajo educativo como BrainTrainr tiene impacto directo en Latinoamérica y otros grupos subrepresentados. La gobernanza no es teoría abstracta: decide quién accede a cómputo, quién fija las reglas de seguridad y quién tiene asiento en la mesa.' },
  },
  {
    id: 'agent-boundaries', kind: 'post',
    title: { en: 'Once an agent can act, the question changes', es: 'Cuando un agente puede actuar, la pregunta cambia' },
    description: { en: 'Across Startupfest and conversations with founders building in the agent space, the same challenge kept showing up from different angles. Once an agent can take action, the question is no longer whether it generates good code, but whether anyone designed clear boundaries around what it is allowed to do. Kastra.ai reviews risky actions before they execute. Jetty replaces open-ended prompts with runbooks that define the task and what done looks like. Upivia treats agent access like a controlled wallet, a policy-checked gateway with logs and budget limits. Same shift: permissions, workflow constraints and memory get designed on purpose, rather than added after something breaks.', es: 'Entre Startupfest y conversaciones con fundadores que construyen agentes, el mismo reto apareció desde ángulos distintos. Cuando un agente puede ejecutar acciones, la pregunta deja de ser si genera buen código y pasa a ser si alguien diseñó límites claros sobre lo que puede hacer. Kastra.ai revisa las acciones riesgosas antes de ejecutarlas. Jetty cambia los prompts abiertos por runbooks que definen la tarea y qué significa terminado. Upivia trata el acceso del agente como una billetera controlada: una puerta con políticas, registros y límites de gasto. El mismo cambio de fondo: permisos, restricciones y memoria se diseñan a propósito, no se añaden después de que algo se rompe.' },
  },
  {
    id: 'setup-not-chatbots', kind: 'post',
    title: { en: 'Take away the setup, not the interface', es: 'Quitar la configuración, no la interfaz' },
    description: { en: 'The best AI tools make setup easy so you can start right away. MigmaAI can begin from a website, a prompt, a Figma frame or an existing email and build something editable that matches the brand. What is interesting is not the speed: email is tricky, and a design that looks fine in an editor can break in Outlook, Gmail, dark mode or on mobile, so the product still has to let people review, edit and test what lands in the inbox. I do not think good AI products should remove interfaces entirely. People need control, context and a way to fix things. I am more interested in AI that takes away setup steps than in AI that adds another chatbot to a workflow.', es: 'Las mejores herramientas de IA hacen fácil la puesta en marcha para que puedas empezar de inmediato. MigmaAI puede partir de un sitio, un prompt, un frame de Figma o un correo existente y construir algo editable acorde a la marca. Lo interesante no es la velocidad: el correo es complicado, y un diseño que se ve bien en el editor puede romperse en Outlook, Gmail, modo oscuro o en móvil, así que el producto todavía tiene que dejar revisar, editar y probar lo que llega a la bandeja. No creo que un buen producto de IA deba eliminar las interfaces. La gente necesita control, contexto y una forma de corregir. Me interesa más la IA que quita pasos de configuración que la que añade otro chatbot al flujo.' },
  },
  {
    id: 'networking-test', kind: 'post',
    title: { en: 'The best part of networking is when nobody is networking', es: 'Lo mejor de hacer contactos es cuando ya nadie los hace' },
    description: { en: 'At an event a few weeks ago, two people sat down and led with their company name, then their school. That was the whole pitch, no questions back, no curiosity about anyone else at the table, and they left before anything real got said. The ones who stayed asked what you were building, what you were stuck on, what you cared about outside work. Same room, same free drinks, completely different night. So my test is not how many connections I can collect. It is how many people I would still grab a coffee with if neither of us could do anything for the other.', es: 'En un evento hace unas semanas, dos personas se sentaron y empezaron por el nombre de su empresa y luego su universidad. Ese era todo el discurso: ninguna pregunta de vuelta, ninguna curiosidad por el resto de la mesa, y se fueron antes de que se dijera algo real. Los que se quedaron preguntaban qué estabas construyendo, dónde estabas atascado, qué te importaba fuera del trabajo. Misma sala, mismas bebidas, una noche completamente distinta. Así que mi prueba no es cuántos contactos junto, sino con cuánta gente seguiría tomando un café si ninguno de los dos pudiera hacer nada por el otro.' },
  },
  {
    id: 'environment-is-a-variable', kind: 'post',
    title: { en: 'Environment is an underrated productivity variable', es: 'El entorno es una variable de productividad subestimada' },
    description: { en: 'Working from coworking spaces, I shipped more, stayed sharper and felt less isolated. The social layer of building is not a distraction, it is fuel. I still like the convenience of working from my room, but sometimes the time you optimize comes at a cost: it gets dull, there is no stimulus, and doomscrolling gets easier. I was not replenishing energy, I was compressing and getting drained. This is the itch behind Coworking Scout on PeruGrid.', es: 'Trabajando desde espacios de coworking publiqué más, me mantuve más agudo y me sentí menos aislado. La capa social de construir no es una distracción, es combustible. Me sigue gustando la comodidad de trabajar desde mi cuarto, pero a veces el tiempo que optimizas tiene un costo: se vuelve monótono, no hay estímulo y es más fácil caer en el doomscrolling. No estaba reponiendo energía, estaba comprimiendo y desgastándome. De ahí sale Coworking Scout en PeruGrid.' },
  },
]

export const activityLabels = {
  en: { title: 'Activity', intro: 'Releases, open-source contributions, and ideas taking shape.', all: 'All', release: 'Releases', contribution: 'Contributions', idea: 'Ideas', post: 'Posts', undated: 'Public record', open: 'View source', more: 'All activity' },
  es: { title: 'Actividad', intro: 'Lanzamientos, contribuciones de código abierto e ideas en desarrollo.', all: 'Todo', release: 'Lanzamientos', contribution: 'Contribuciones', idea: 'Ideas', post: 'Publicaciones', undated: 'Registro público', open: 'Ver fuente', more: 'Toda la actividad' },
}
