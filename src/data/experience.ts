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

export const experiences: Experience[] = [
    {
        id: 'braintrainr',
        type: 'work',
        role: 'Web Content & UX Lead',
        org: 'BrainTrainr',
        location: 'Toronto, ON · Remote',
        period: 'Jan 2026 – May 2026',
        startDate: '2026-01',
        endDate: '2026-05',
        description:
            'Led UI/UX analysis and design implementation for the Universal Voice AI Platform launch (BrainTrainr 1800), turning Figma designs into a shipped, accessible WordPress site.',
        bullets: [
            'Led UI/UX analysis and design implementation in Figma, then collaborated with the team to build and ship accessible interfaces for the Universal Voice AI Platform launch (BrainTrainr 1800)',
            'Turned approved Figma designs into a responsive WordPress site, removing design-to-development friction to keep delivery on schedule',
        ],
        skills: ['Figma', 'UX Design', 'WordPress', 'Accessibility'],
        highlight: 'Universal Voice AI Platform launch',
    },
    {
        id: 'karac',
        type: 'work',
        role: 'Frontend Developer',
        org: 'Karac',
        location: 'Site Pully, Switzerland · Remote',
        period: 'Oct 2025 – Feb 2026',
        startDate: '2025-10',
        endDate: '2026-02',
        description:
            'Frontend development for a Swiss startup — redesigned onboarding, built internal QA tooling, and shipped a modular authentication system.',
        bullets: [
            'Cut average user signup time from 2 min to 45 seconds (63% faster) by redesigning the onboarding flow: verification code fields advance via event-driven logic as you type, and form errors appear instantly, no page reload required',
            'Reduced QA test environment setup from 15 min to 30 seconds by building a one-click tool that fills the database with realistic test data, letting engineers troubleshoot session persistence and secure data handling immediately',
            'Designed a modular authentication system with reusable components using PHP and Laravel Socialite to abstract provider logic, saving 5–10 hours of monthly maintenance while supporting Google and Facebook sign-in',
        ],
        skills: ['PHP', 'Laravel Socialite', 'JavaScript', 'Event-Driven UX'],
        highlight: 'Signup time: 2 min → 45s (63% faster)',
    },
    {
        id: 'examvault-dev',
        type: 'work',
        role: 'Full-Stack Developer (Capstone)',
        org: 'UBC Faculty of Science',
        location: 'Kelowna, BC',
        period: 'May 2025 – Aug 2025',
        startDate: '2025-05',
        endDate: '2025-08',
        description:
            'Built ExamVault, a full-stack platform helping instructors create, manage, and analyze multiple-choice exams. Served as Scrum Master throughout a 4-month sprint cycle.',
        bullets: [
            'Built backend logic for randomized exam generation and statistical grading algorithms',
            'Created analytics dashboard to visualize exam results and trends over time',
            'Coordinated sprints as Scrum Master, managing client feedback and cross-team delivery',
            'Reduced report load times from 4 minutes to 60 seconds via SQL optimizations',
        ],
        skills: ['React.js', 'Tailwind CSS', 'Django', 'PostgreSQL', 'Docker', 'GitHub Actions'],
        highlight: '100K+ student records automated',
    },
    {
        id: 'ubc-research',
        type: 'research',
        role: 'Research Assistant',
        org: 'University of British Columbia',
        location: 'Kelowna, BC',
        period: 'Jan 2025 – May 2025',
        startDate: '2025-01',
        endDate: '2025-05',
        description:
            'Participated in empirical research examining generative AI\'s impact on software quality and technical debt. The team won Best Presentation out of 10 research cohorts.',
        bullets: [
            'Analyzed 5,000+ GitHub repositories using SonarQube and Python data pipelines',
            'Applied Mann-Whitney U statistical tests to compare AI vs. human code quality',
            'Won Best Presentation award out of 10 competing research cohorts',
            'Earned MSR (Mining Software Repositories) conference nomination',
        ],
        skills: ['Python', 'SonarQube', 'GitHub API', 'SciPy', 'Data Mining'],
        highlight: 'Best Presentation — 10 cohorts',
    },
    {
        id: 'lasa',
        type: 'volunteer',
        role: 'Vice-President Internal',
        org: 'Latin American Student Association',
        location: 'Kelowna, BC',
        period: 'Sep 2024 – Apr 2025',
        startDate: '2024-09',
        endDate: '2025-04',
        description:
            'Led internal operations for a student association representing the Latin American community at UBC Okanagan. Managed social media, cross-club collaborations, and event budgets.',
        bullets: [
            'Managed social media and collaborated with student clubs to boost engagement and event participation',
            'Optimized event planning under union regulations and streamlined budgets via sprint meetings, reducing costs',
        ],
        skills: ['Event Planning', 'Budget Management', 'Social Media', 'Leadership'],
        highlight: 'VP Internal',
    },
    {
        id: 'ubc-bdr',
        type: 'work',
        role: 'Business Development Representative',
        org: 'UBC Okanagan Campus',
        location: 'Kelowna, BC · On-site',
        period: 'Aug 2023 – Sep 2025',
        startDate: '2023-08',
        endDate: '2025-09',
        description:
            'Supported front and back of house operations across UBC Okanagan Admin and Bookstore. Handled 80+ weekly inquiries, managed peak periods, and provided front-line IT support.',
        bullets: [
            'Handled 80+ weekly inquiries and POS transactions, managed peak periods to cut wait times',
            'Processed online orders with accurate inventory handoffs',
            'Provided front-line IT support for account setup, troubleshooting, and basic diagnostics',
            'Strengthened communication, organization, and problem-solving in a fast-paced student-facing environment',
        ],
        skills: ['Customer Service', 'IT Support', 'POS Systems', 'Inventory Management'],
        highlight: '80+ weekly inquiries handled',
    },
    {
        id: 'football-club',
        type: 'volunteer',
        role: 'Founder & President',
        org: 'Football Enthusiast Student Club',
        location: 'Kelowna, BC',
        period: 'Aug 2023 – Apr 2025',
        startDate: '2023-08',
        endDate: '2025-04',
        description:
            'Founded and led a campus football club from scratch, managing a $2,500 budget and growing the community through strategic event planning.',
        bullets: [
            'Managed $2,500 budget and coordinated event logistics for campus tournaments',
            'Increased event attendance through strategic social media and campus outreach',
            'Built and maintained a growing community of football enthusiasts at UBC',
        ],
        skills: ['Leadership', 'Event Planning', 'Budget Management', 'Community Building'],
        highlight: '$2,500 budget managed',
        partnerLink: 'https://shorturl.at/2HhZc',
    },
    {
        id: 'tech-ambassador',
        type: 'volunteer',
        role: 'Cofounder & Project coordinator',
        org: 'Okanagan Tech Industry Night',
        location: 'Kelowna, BC',
        period: 'Nov 2023 – Feb 2024',
        startDate: '2023-11',
        endDate: '2024-02',
        description:
            'Organized a technology industry networking event with 200+ attendees, managing invitations, sponsors, and logistics end-to-end.',
        bullets: [
            'Organized tech event for 200+ attendees, managing invites, sponsors, and logistics',
            'Connected students with industry professionals from the Okanagan tech ecosystem',
        ],
        skills: ['Event Management', 'Networking', 'Sponsorship'],
        highlight: '200+ attendees organized',
    },
]

export function getExperienceByType(type: ExperienceType): Experience[] {
    return experiences.filter((e) => e.type === type)
}
