export const dictionaryEn = {
  meta: {
    siteDescription:
      'Portfolio of Richard Pillaca Burga — Software & Data Engineer based in Toronto. Building scalable products, data pipelines, and robust software systems.',
    ogDescription:
      'Software & Data projects, scalable solutions, and robust systems — built in Toronto.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    journey: 'Journey',
    projects: 'Projects',
    getInTouch: 'Get in touch',
    toggleMenu: 'Toggle navigation menu',
    homeAria: 'Home page',
    languageSwitch: 'Language',
    phrases: ['HEY!', 'HOLAAA!', 'SALUT!', 'QUE ONDA!', 'GOOOL!'],
  },
  footer: {
    tagline:
      'Full-stack engineer specializing in frontend, based in Toronto. Building intelligent tools, automated workflows, and AI infrastructure.',
    funFact: 'Fun Fact',
    menu: 'Menu',
    connect: 'Connect',
    email: 'Email',
    builtWith: 'Built with Next.js 16 & Tailwind CSS',
    deployedOn: 'Deployed on Vercel',
    funFacts: [
      "Otters hold hands while they sleep so they don't drift away from each other in the water.",
      "Identical twins don't have the same fingerprints.",
      'Bananas are curved because they grow towards the sun.',
      'Octopuses have three hearts and blue blood.',
      'A day on Venus is longer than a year on Venus.',
      'Humans share about 50% of their DNA with bananas.',
    ],
  },
  home: {
    introAria: 'Introduction',
    heroAlt: 'Line-art portrait of Richard Pillaca',
    location: 'Toronto, ON',
    traits: 'Tenacious. · Analytical. · Charismatic.',
    workTitle: 'My work',
    workTitleEm: 'work',
    viewAllProjects: 'View all projects',
    moreProjectsSuffix: 'more',
    whatIDo: 'What I do',
    skillsTitle: 'Skills & Stack',
    skillsTitleEm: 'Stack',
    skillsIntro1:
      'Full-stack engineer, currently focused on the frontend, building scalable interfaces with React, Next.js, and Node.js. I\'ve shipped AI-driven apps and engineered systems end to end.',
    skillsIntro2:
      'Now going deeper into AI infrastructure and high-performance engineering. Three disciplines I move between, usually on the same project: engineering, AI, and data.',
    backToTop: 'Back to top',
    demo: 'Demo',
    details: 'Details',
    code: 'Code',
    areas: [
      {
        title: 'Software Engineering',
        desc: 'Full-stack with a frontend focus. I turn designs into responsive, event-driven interfaces and back them with modular auth, reusable components, and CI/CD pipelines.',
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
        title: 'AI & Automation',
        desc: 'I wire LLMs into real products, like AI that parses resumes into structured, filterable data, and automate the busywork around them with agents, RAG, and webhooks.',
        tools: [
          'LLM Integration',
          'RAG',
          'AI Agents',
          'LangGraph',
          'MCP',
          'Vercel AI',
          'Event-driven',
          'Webhooks',
        ],
      },
      {
        title: 'Data & Analytics',
        desc: 'Data-driven by default. I build ETL pipelines that process millions of records and turn them into Power BI dashboards and reporting that replace hours of manual work.',
        tools: ['SQL', 'PostgreSQL', 'Power BI / DAX', 'ETL', 'Pandas', 'Excel'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Case studies across software engineering, AI & automation, and data & analytics.',
    filterAll: 'All',
    filterAria: 'Filter projects by discipline',
    filterByPrefix: 'Filter by',
    viewCase: 'View case analysis',
    viewCaseAriaPrefix: 'View case analysis:',
    disciplines: ['Software Engineering', 'AI & Automation', 'Data & Analytics'] as const,
  },
  caseStudy: {
    back: 'All Projects',
    backAria: 'Back to all projects',
    overview: 'Overview',
    problem: 'The Problem',
    questions: 'Questions Addressed',
    methodology: 'Methodology',
    results: 'Key Results',
    findings: 'Key Findings',
    conclusion: 'Conclusion',
    gallery: 'Gallery',
    screenshotAltPrefix: 'screenshot',
    github: 'View on GitHub →',
    githubAriaPrefix: 'View on GitHub:',
    watchDemo: 'Watch Demo Video',
    liveDemo: 'View Live Demo →',
  },
  journey: {
    title: 'Career Journey',
    subtitle: 'The timeline of my professional experience, side by side with the one-page résumé.',
    viewResume: 'View Résumé',
    viewResumeAria: 'View résumé on Google Drive (opens in new tab)',
    pathLabel: 'The path',
    resumeLabel: 'The one-pager',
    viewPartner: 'View Partner →',
    experienceTypes: {
      work: 'work',
      education: 'education',
      volunteer: 'volunteer',
      research: 'research',
    } as Record<string, string>,
  },
  resume: {
    title: 'SOFTWARE ENGINEER & DATA ANALYST',
    summary:
      'Software Engineer and Data Analyst combining Python/TypeScript full-stack development with rigorous data modeling. Proven ability to build scalable pipelines, automate CI/CD workflows, and architect React/Django systems. Known for turning complex requirements into resilient production code.',
    summaryHeading: 'Summary',
    competenciesHeading: 'Core Competencies',
    experienceHeading: 'Experience',
    educationHeading: 'Education',
    location: 'Toronto, ON',
    school: 'University of British Columbia',
    schoolPeriod: '2021 – 2025',
    degree: 'B.Sc. Computer Science',
    minor: 'Minor in Economics',
    certifications:
      'Certifications: Power BI Data Analyst (Microsoft), Scrum Master (Scrum.org), Claude Certified Architect (Anthropic)',
  },
  about: {
    label: 'About',
    heading: 'Who are you?',
    boardHint: 'Drag the cards · press Read',
    readMore: 'Read more',
    showLess: 'Show less',
    imagePreview: 'Image Preview',
    closePreview: 'Close image preview',
    bio: [
      'I am a full-stack engineer with a frontend focus, building scalable interfaces using React, Next.js, and Node.js. I have launched AI-powered products and designed end-to-end systems, taking them from concept to production.',
      'My experience includes improving platform onboarding to streamline registration, leading a five-person team to build a student management system, and developing a recruitment app featuring AI-driven automation.',
      'My strengths lie in strong communication, self-directed learning, and a product-centric mindset. When facing a challenge, I prefer to launch a lean version, measure results, and iterate rather than over-engineering the solution. My background in economics drives me to always consider costs and returns, and I am currently deepening my expertise in AI infrastructure and performance optimization to continue my professional growth.',
    ],
    education: {
      degree: 'B.Sc. Computer Science',
      minor: 'Minor in Economics',
      school: 'University of British Columbia',
      period: 'Sep 2021 – Nov 2025',
      location: 'Kelowna, BC',
    },
    polaroids: {
      family: 'Family ❤️',
      travelling: 'Travelling 🌍',
      toronto: 'Toronto 🏙️',
    },
    communities: [
      {
        title: 'LASO',
        org: 'Latin American Student Association — UBCO',
        description:
          'VP Internal of a student-led club celebrating Latin American culture at UBC Okanagan. I managed logistics, budgets, and compliance, drove marketing through reels and targeted ads, and built partnerships with other clubs to co-host events and cut costs.',
        labels: ['Event night', 'LASO community 🌎'],
      },
      {
        title: 'Hispanotech',
        org: 'hispanotech.ca',
        description:
          "A network connecting Spanish-speaking professionals in tech across Canada. I'm an active member, using this community to grow my network, share insights, and support other Latinos breaking into the Canadian tech industry.",
        labels: ['Hispanotech community', 'Networking event'],
      },
      {
        title: 'Wealthsimple Foundation',
        org: 'Wealthsimple Foundation',
        description:
          'Selected as a member of the Wealthsimple Foundation program focused on economic empowerment. Working alongside driven peers to build financial literacy and entrepreneurial skills in underserved communities.',
        labels: ['Community meetup', 'Program kickoff'],
      },
      {
        title: 'OTIN',
        org: 'Okanagan Tech Industry Night',
        description:
          'Co-founded and coordinated OTIN — a 200+ person networking event connecting Okanagan College and UBCO students with industry professionals. I secured sponsorships, coordinated VIP guests and judging panels, and ran end-to-end event logistics.',
        labels: ['OTIN event night 🎤'],
      },
      {
        title: 'BrainTrainr',
        org: 'BrainTrainr',
        description:
          "Web content and UX lead at BrainTrainr — a platform empowering social impact through AI-powered learning. I help shape the product's voice and user experience to close the education gap across underserved communities.",
        labels: ['Platform overview', 'Dashboard'],
      },
      {
        title: 'Alianza Latina',
        org: 'Alianza Latina Canada',
        description:
          'Member of Alianza Latina Canada — a national network building unity and data power for the Latino community across Canada. We work to amplify Latino voices through data, advocacy, and community programming.',
        labels: ['Alianza Latina 🇨🇦', 'Community event'],
      },
      {
        title: 'Cursor Community',
        org: 'Cursor AI Community',
        description:
          'Active member of the Cursor AI community — connecting with developers who are pushing the boundaries of AI-assisted coding. Sharing insights and collaborating on best practices for modern development workflows.',
        labels: ['Community event', 'Meetup'],
      },
      {
        title: 'Canadian Cancer Society',
        org: 'Canadian Cancer Society',
        description:
          'Volunteered with the Canadian Cancer Society to support fundraising and community outreach programs, contributing to awareness campaigns and community health initiatives.',
        labels: ['CCS 🇨🇦'],
      },
      {
        title: 'Scale Without Borders',
        org: 'Scale Without Borders',
        description:
          'Scale Without Borders is a platform for newcomers in tech. I actively participate in this community to help other immigrants navigate the Canadian tech landscape and build meaningful connections.',
        labels: ['Community Meetup', 'Tech Workshop'],
      },
    ],
    beyondWork: [
      {
        emoji: '⚽',
        title: 'Football',
        description:
          "I've been playing football for 10+ years. Started with flat feet and no technique — now I hold my own against people who grew up with a ball at their feet. That same stubbornness shows up in my debugging.",
      },
      {
        emoji: '🌍',
        title: 'Travel',
        description:
          "14 countries and counting. Moving across continents taught me to adapt quickly and communicate clearly even when the words aren't perfect.",
      },
      {
        emoji: '💃',
        title: 'Dance',
        description:
          'Salsa, bachata, and anything that keeps me moving. Coming from Peru, rhythm is part of the package.',
      },
      {
        emoji: '🗣️',
        title: 'Languages',
        description:
          'Spanish (native), English (fluent), French (learning — intensive 4hr/day study right now). I believe learning a language and learning a programming language require the same muscle: pattern recognition + daily practice.',
      },
    ],
  },
  essays: {
    title: 'Essays',
    subtitle: 'Long-form notes on data, software, and the craft of building things that last.',
    comingSoon: 'More essays coming soon.',
    back: 'All Essays',
    backAria: 'Back to all essays',
    placeholderTitle: 'Essay coming soon',
    placeholderBody:
      'This essay is in progress. Subscribe to get notified when it\'s published.',
    subscribe: 'Subscribe on Substack →',
  },
} as const
