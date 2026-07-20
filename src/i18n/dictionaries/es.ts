export const dictionaryEs = {
  meta: {
    siteDescription:
      'Portafolio de Richard Pillaca Burga — Ingeniero de Software y Datos en Toronto. Construyo productos escalables, pipelines de datos y sistemas robustos.',
    ogDescription:
      'Proyectos de software y datos, soluciones escalables y sistemas robustos — desde Toronto.',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    journey: 'Trayectoria',
    projects: 'Proyectos',
    getInTouch: 'Contacto',
    toggleMenu: 'Abrir menú de navegación',
    homeAria: 'Página de inicio',
    languageSwitch: 'Idioma',
    phrases: ['HEY!', 'HOLAAA!', 'SALUT!', 'QUE ONDA!', 'GOOOL!'],
  },
  footer: {
    tagline:
      'Ingeniero full-stack con foco en frontend, en Toronto. Construyo herramientas inteligentes, flujos automatizados e infraestructura de IA.',
    funFact: 'Dato curioso',
    menu: 'Menú',
    connect: 'Conectar',
    email: 'Correo',
    builtWith: 'Hecho con Next.js 16 y Tailwind CSS',
    deployedOn: 'Desplegado en Vercel',
    funFacts: [
      'Las nutrias se toman de las patas mientras duermen para no separarse en el agua.',
      'Los gemelos idénticos no tienen las mismas huellas dactilares.',
      'Los plátanos son curvos porque crecen hacia el sol.',
      'Los pulpos tienen tres corazones y sangre azul.',
      'Un día en Venus dura más que un año en Venus.',
      'Los humanos compartimos alrededor del 50% de nuestro ADN con los plátanos.',
    ],
  },
  home: {
    introAria: 'Introducción',
    heroAlt: 'Retrato lineal de Richard Pillaca',
    location: 'Toronto, ON',
    traits: 'Tenaz. · Analítico. · Carismático.',
    workTitle: 'Mi trabajo',
    workTitleEm: 'trabajo',
    viewAllProjects: 'Ver todos los proyectos',
    moreProjectsSuffix: 'más',
    whatIDo: 'Qué hago',
    skillsTitle: 'Habilidades y stack',
    skillsTitleEm: 'stack',
    skillsIntro1:
      'Ingeniero full-stack, actualmente enfocado en frontend, construyendo interfaces escalables con React, Next.js y Node.js. He lanzado apps con IA y diseñado sistemas de punta a punta.',
    skillsIntro2:
      'Ahora profundizo en infraestructura de IA e ingeniería de alto rendimiento. Tres disciplinas entre las que me muevo, a menudo en el mismo proyecto: ingeniería, IA y datos.',
    backToTop: 'Volver arriba',
    demo: 'Demo',
    details: 'Detalles',
    code: 'Código',
    areas: [
      {
        title: 'Ingeniería de software',
        desc: 'Full-stack con foco en frontend. Convierto diseños en interfaces responsivas y orientadas a eventos, con auth modular, componentes reutilizables y pipelines CI/CD.',
        tools: [
          'React',
          'Next.js',
          'Node.js',
          'TypeScript',
          'Django',
          'Laravel',
          'Tailwind CSS',
          'Docker',
          'CI/CD',
        ],
      },
      {
        title: 'IA y automatización',
        desc: 'Integro LLMs en productos reales — por ejemplo, IA que parsea CVs en datos estructurados — y automatizo el trabajo repetitivo con agentes, RAG y webhooks.',
        tools: [
          'Integración LLM',
          'RAG',
          'Agentes de IA',
          'LangGraph',
          'MCP',
          'Vercel AI',
          'Event-driven',
          'Webhooks',
        ],
      },
      {
        title: 'Datos y analítica',
        desc: 'Orientado a datos por defecto. Construyo pipelines ETL que procesan millones de registros y los convierto en dashboards de Power BI que reemplazan horas de trabajo manual.',
        tools: ['SQL', 'PostgreSQL', 'Power BI / DAX', 'ETL', 'Pandas', 'Excel'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Casos de estudio en ingeniería de software, IA y automatización, y datos y analítica.',
    filterAll: 'Todos',
    filterAria: 'Filtrar proyectos por disciplina',
    filterByPrefix: 'Filtrar por',
    viewCase: 'Ver caso de estudio',
    viewCaseAriaPrefix: 'Ver caso de estudio:',
    comingSoonTitle: 'Próximamente',
    comingSoonSubtitle: 'Conceptos y builds en progreso — aún sin demos en vivo ni capturas.',
    comingSoonCta: 'Próximamente →',
    comingSoonAriaPrefix: 'Próximamente:',
    disciplines: ['Ingeniería de software', 'IA y automatización', 'Datos y analítica'] as const,
  },
  caseStudy: {
    back: 'Todos los proyectos',
    backAria: 'Volver a todos los proyectos',
    overview: 'Resumen',
    problem: 'El problema',
    questions: 'Preguntas abordadas',
    methodology: 'Metodología',
    results: 'Resultados clave',
    findings: 'Hallazgos clave',
    conclusion: 'Conclusión',
    gallery: 'Galería',
    screenshotAltPrefix: 'captura de',
    github: 'Ver en GitHub →',
    githubAriaPrefix: 'Ver en GitHub:',
    watchDemo: 'Ver video demo',
    liveDemo: 'Ver demo en vivo →',
    codebaseMap: 'Mapa del codebase →',
    comingSoonBadge: 'Próximamente',
  },
  journey: {
    title: 'Trayectoria profesional',
    subtitle: 'La línea de tiempo de mi experiencia, junto al currículum de una página.',
    viewResume: 'Ver CV',
    viewResumeAria: 'Ver currículum en Google Drive (abre en nueva pestaña)',
    pathLabel: 'El camino',
    resumeLabel: 'Una página',
    viewPartner: 'Ver socio →',
    experienceTypes: {
      work: 'trabajo',
      education: 'educación',
      volunteer: 'voluntariado',
      research: 'investigación',
    } as Record<string, string>,
  },
  resume: {
    title: 'INGENIERO DE SOFTWARE Y ANALISTA DE DATOS',
    summary:
      'Ingeniero de software y analista de datos que combina desarrollo full-stack en Python/TypeScript con modelado riguroso de datos. Experiencia construyendo pipelines escalables, automatizando flujos CI/CD y arquitecturando sistemas React/Django. Conocido por convertir requisitos complejos en código resiliente en producción.',
    summaryHeading: 'Resumen',
    competenciesHeading: 'Competencias clave',
    experienceHeading: 'Experiencia',
    educationHeading: 'Educación',
    location: 'Toronto, ON',
    school: 'University of British Columbia',
    schoolPeriod: '2021 – 2025',
    degree: 'Lic. en Ciencias de la Computación',
    minor: 'Minor en Economía',
    certifications:
      'Certificaciones: Power BI Data Analyst (Microsoft), Scrum Master (Scrum.org), Claude Certified Architect (Anthropic)',
  },
  about: {
    label: 'Sobre mí',
    heading: '¿Quién eres?',
    boardHint: 'Arrastra las tarjetas · pulsa Leer',
    readMore: 'Leer más',
    showLess: 'Ver menos',
    imagePreview: 'Vista previa',
    closePreview: 'Cerrar vista previa',
    bio: [
      'Me llamo Richard PIllaca y soy ingeniero full-stack especializado en frontend e IA. Desarrollo productos escalables centrados en las personas utilizando JavaScript, TypeScript, React, Next.js, Node.js y Python, abarcando desde la experiencia de usuario (UX) y el manejo de datos hasta funcionalidades impulsadas por inteligencia artificial.',
      'Mi carrera se centra en crear tecnología que actúe como puente y no como barrera. Crecí en Perú, en una cultura vibrante y diversa marcada por el trabajo colectivo, los fuertes vínculos comunitarios y el respeto por la tierra. Ver cómo una infraestructura limitada puede frenar el potencial me impulsó a mudarme a Canadá para estudiar informática en la UBC.',
      'Desde el primer día, compaginé trabajos a tiempo parcial y el liderazgo comunitario con una intensa formación en ingeniería de software, aprendiendo a centrarme en los resultados mientras gestionaba prioridades contrapuestas. En la UBC, cofundé la Okanagan Tech Industry Night —un evento con más de 200 asistentes que conectaba startups estudiantiles con líderes del sector— y fui vicepresidente interno de la Asociación de Estudiantes Latinoamericanos.',
      'Como asistente de investigación, fui coautor de un estudio empírico sobre deuda técnica en IA nominado para la conferencia MSR 2025. Para mi proyecto final en la Facultad de Ciencias de la UBC, desarrollé un sistema de análisis de exámenes que automatizaba la calificación para grupos numerosos, reduciendo el tiempo de corrección de horas a minutos.',
      'Tras graduarme, fui aceptado en el programa de maestría en Comercio de Materias Primas (Commodity Trading) de la Universidad de Ginebra, pero pospuse el inicio para adquirir experiencia en el sector. Me mudé a Toronto, me uní a Hispanotech y comencé unas prácticas en remoto como desarrollador frontend en Karac, donde optimicé sistemas de autenticación y flujos de usuario.',
      'Desde entonces, mi trayectoria ha evolucionado a través de roles frontend y full-stack en Karac, proyectos freelance, hackathons e iniciativas comunitarias, abarcando desde la autenticación modular hasta el procesamiento de grandes volúmenes de datos. Estas experiencias me enseñaron a equilibrar la lógica analítica con las necesidades del usuario y a liderar ciclos de desarrollo como Scrum Master mediante metodologías ágiles.',
      'Actualmente trabajo como desarrollador full-stack en ReliablyME, creando infraestructura de confianza para la colaboración entre humanos e IA, y lidero las áreas de UI/UX y web en BrainTrainr, una organización sin fines de lucro dedicada a la educación en IA y liderada por comunidades indígenas y latinas. Me centro en los datos y la IA, transformando información desordenada en insights valiosos, al tiempo que obtengo certificaciones de AWS, trabajo en automatización con IA/ML y desarrollo proyectos personales de I+D.',
      'Fuera del trabajo, me mantengo activo jugando al fútbol, corriendo y explorando la naturaleza. Estoy aprendiendo francés, me mantengo al día mediante podcasts sobre IA y negocios, y me encuentro en las primeras etapas de creación de mi propia empresa, combinando el dominio técnico con la perspectiva de un fundador.',
    ],
    education: {
      degree: 'Lic. en Ciencias de la Computación',
      minor: 'Minor en Economía',
      school: 'University of British Columbia',
      period: 'Sep 2021 – Nov 2025',
      location: 'Kelowna, BC',
    },
    polaroids: {
      family: 'Familia ❤️',
      travelling: 'Viajando 🌍',
      toronto: 'Toronto 🏙️',
    },
    communities: [
      {
        title: 'LASO',
        org: 'Asociación de Estudiantes Latinoamericanos — UBCO',
        description:
          'VP Interno de un club estudiantil que celebra la cultura latinoamericana en UBC Okanagan. Gestioné logística, presupuestos y cumplimiento, impulsé marketing con reels y anuncios, y creé alianzas con otros clubes para coorganizar eventos y reducir costos.',
        labels: ['Noche de evento', 'Comunidad LASO 🌎'],
      },
      {
        title: 'Hispanotech',
        org: 'hispanotech.ca',
        description:
          'Red que conecta profesionales hispanohablantes en tecnología en Canadá. Soy miembro activo: amplío mi red, comparto aprendizajes y apoyo a otros latinos que ingresan a la industria tech canadiense.',
        labels: ['Comunidad Hispanotech', 'Evento de networking'],
      },
      {
        title: 'Wealthsimple Foundation',
        org: 'Wealthsimple Foundation',
        description:
          'Seleccionado para el programa de empoderamiento económico. Trabajo con pares motivados para desarrollar alfabetización financiera y habilidades emprendedoras en comunidades desatendidas.',
        labels: ['Encuentro comunitario', 'Inicio del programa'],
      },
      {
        title: 'OTIN',
        org: 'Okanagan Tech Industry Night',
        description:
          'Cofundé y coordiné OTIN — evento de networking de más de 200 personas que conecta estudiantes de Okanagan College y UBCO con profesionales de la industria. Conseguí patrocinios, coordiné invitados VIP y paneles de jueces, y llevé la logística de punta a punta.',
        labels: ['Noche OTIN 🎤'],
      },
      {
        title: 'BrainTrainr',
        org: 'BrainTrainr',
        description:
          'Líder de contenido web y UX en BrainTrainr — plataforma de impacto social con aprendizaje impulsado por IA. Ayudo a definir la voz del producto y la experiencia de usuario para cerrar la brecha educativa en comunidades desatendidas.',
        labels: ['Vista general', 'Dashboard'],
      },
      {
        title: 'Alianza Latina',
        org: 'Alianza Latina Canada',
        description:
          'Miembro de Alianza Latina Canada — red nacional que construye unidad y poder de datos para la comunidad latina en Canadá. Amplificamos voces latinas con datos, advocacy y programación comunitaria.',
        labels: ['Alianza Latina 🇨🇦', 'Evento comunitario'],
      },
      {
        title: 'Comunidad Cursor',
        org: 'Cursor AI Community',
        description:
          'Miembro activo de la comunidad Cursor AI — conecto con desarrolladores que empujan los límites de la programación asistida por IA. Comparto aprendizajes y buenas prácticas para flujos de desarrollo modernos.',
        labels: ['Evento comunitario', 'Meetup'],
      },
      {
        title: 'Canadian Cancer Society',
        org: 'Canadian Cancer Society',
        description:
          'Voluntariado en recaudación de fondos y programas de alcance comunitario, contribuyendo a campañas de concienciación e iniciativas de salud.',
        labels: ['CCS 🇨🇦'],
      },
      {
        title: 'Scale Without Borders',
        org: 'Scale Without Borders',
        description:
          'Plataforma para recién llegados en tech. Participo activamente para ayudar a otros inmigrantes a navegar el ecosistema tech canadiense y crear conexiones significativas.',
        labels: ['Meetup comunitario', 'Taller técnico'],
      },
    ],
    beyondWork: [
      {
        emoji: '⚽',
        title: 'Fútbol',
        description:
          'Juego fútbol hace más de 10 años. Empecé con pies planos y sin técnica — hoy me defiendo contra quien creció con un balón en los pies. Esa misma terquedad aparece cuando depuro código.',
      },
      {
        emoji: '🌍',
        title: 'Viajes',
        description:
          '14 países y contando. Mudarme entre continentes me enseñó a adaptarme rápido y comunicarme con claridad aunque las palabras no sean perfectas.',
      },
      {
        emoji: '💃',
        title: 'Baile',
        description:
          'Salsa, bachata y todo lo que me mantenga en movimiento. Viniendo del Perú, el ritmo viene en el paquete.',
      },
      {
        emoji: '🗣️',
        title: 'Idiomas',
        description:
          'Español (nativo), inglés (fluido), francés (aprendiendo — estudio intensivo de 4 h/día ahora). Creo que aprender un idioma y aprender un lenguaje de programación usan el mismo músculo: reconocimiento de patrones + práctica diaria.',
      },
    ],
  },
  essays: {
    title: 'Ensayos',
    subtitle: 'Notas extensas sobre datos, software y el oficio de construir cosas que perduran.',
    comingSoon: 'Más ensayos próximamente.',
    back: 'Todos los ensayos',
    backAria: 'Volver a todos los ensayos',
    placeholderTitle: 'Ensayo próximamente',
    placeholderBody:
      'Este ensayo está en progreso. Suscríbete para recibir aviso cuando se publique.',
    subscribe: 'Suscribirse en Substack →',
  },
} as const
