export interface Methodology {
    phase: string
    title: string
    detail: string
    tech: string[]
}

export interface Result {
    metric: string
    label: string
}

export interface Project {
    id: string
    slug: string
    category: string
    catColor: string
    title: string
    tagline: string
    duration: string
    readTime: string
    overview: string
    problem: string
    questions: string[]
    methodology: Methodology[]
    results: Result[]
    keyFindings: string[]
    conclusion: string
    github: string
    stack: string[]
    image?: string // thumbnail for the card
    images?: string[] // gallery for case study page
    demoVideo?: string // Google Drive or external link for video demos
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'bike-share-optimization',
        category: 'DATA SCIENCE',
        catColor: '#0D9488',
        image: '/images/bike network/bike_network.png',
        images: ['/images/bike network/bike_network.png'],
        demoVideo: 'https://drive.google.com/file/d/1oUZ5A63UTlHPDytAo2pQ5On9Y-geD37a/view?usp=sharing',
        title: 'Bike Share Network Optimization',
        tagline:
            'Graph theory meets urban mobility — processing 2M+ ridership records to optimize station placement across two Canadian cities.',
        duration: 'Sep 2024 – Dec 2024',
        readTime: '8 min read',
        overview:
            'This project applies network science and graph theory to analyze bike share systems in Vancouver and Toronto. By modeling stations as nodes and trips as weighted edges, we identified inefficiencies in station placement, over-saturated hubs, and underserved neighborhoods. The analysis culminated in data-driven recommendations for rebalancing and expansion.',
        problem:
            'Bike share operators struggle with station imbalance — some stations overflow while others sit empty. Manual rebalancing is expensive and reactive. This project asks: can graph theory and clustering reveal structural inefficiencies before they become operational problems?',
        questions: [
            'Which stations act as critical hubs, and what happens to network flow if they are removed?',
            'Are there distinct geographic clusters of ridership that suggest natural zone boundaries?',
            'How do seasonal patterns affect network topology, and where should new stations be placed?',
            'What structural differences exist between the Vancouver and Toronto networks?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Data Engineering',
                detail:
                    'Ingested 2M+ raw ridership records from Mobi (Vancouver) and Bike Share Toronto open data APIs. Cleaned and normalized station coordinates, trip durations, and timestamps using Power Query and Python. Built a repeatable ETL pipeline that reduces manual refresh time from 4 hours to under 15 minutes.',
                tech: ['Python', 'Power Query', 'Excel', 'SQL'],
            },
            {
                phase: 'Phase 2',
                title: 'Network Analysis',
                detail:
                    'Constructed directed weighted graphs using NetworkX. Computed centrality metrics (degree, betweenness, PageRank) to identify critical nodes. Applied DBSCAN clustering to detect spatial station groupings and flag 15% of stations as noise — indicating poorly connected outliers.',
                tech: ['Python', 'NetworkX', 'SciPy', 'DBSCAN'],
            },
            {
                phase: 'Phase 3',
                title: 'Visualization & BI',
                detail:
                    'Built interactive Power BI dashboards with custom DAX measures to track station utilization, trip volume by time-of-day, and cluster membership. Geospatial maps overlay network centrality scores on actual city maps for operator use.',
                tech: ['Power BI', 'DAX', 'R', 'ggplot2'],
            },
            {
                phase: 'Phase 4',
                title: 'SQL Analysis',
                detail:
                    'Wrote analytical SQL queries to answer operational questions: top 10 origin-destination pairs, average trip duration by cluster, seasonal demand shifts. Results fed directly into the final presentation and recommendation deck.',
                tech: ['SQL', 'PostgreSQL', 'Excel'],
            },
        ],
        results: [
            { metric: '2M+', label: 'Ridership records processed' },
            { metric: '264', label: 'Stations analyzed' },
            { metric: '4', label: 'Network clusters identified' },
            { metric: '15%', label: 'Noise stations flagged' },
            { metric: '#1', label: 'Best Presentation Award' },
            { metric: '2', label: 'Cities compared (Vancouver + Toronto)' },
        ],
        keyFindings: [
            'Three stations in downtown Vancouver account for 28% of all outbound trips — removing any one causes measurable cascade failures in network flow.',
            'DBSCAN identified 4 stable geographic clusters that align closely with existing city neighborhood boundaries, validating the approach for zone-based rebalancing.',
            'Toronto and Vancouver networks have fundamentally different hub structures: Toronto is polycentric (multiple hubs), Vancouver is monocentric (one dominant hub).',
            'Seasonal analysis shows 40% drop in peripheral station usage in winter, suggesting temporary station deactivation as a cost-saving strategy.',
        ],
        conclusion:
            'Network science provides operators with a proactive lens on system health that operational dashboards alone cannot surface. The clustering and centrality analysis in this project directly supports a zone-based rebalancing strategy that could reduce truck dispatch costs by an estimated 20–30%. The methodology is portable to any city with open bike share data.',
        github: 'https://github.com/Sumer26/COSC_421_Project_Newtork_Science',
        stack: ['Python', 'R', 'SQL', 'Power Query', 'Excel', 'Power BI', 'NetworkX', 'DAX'],
    },
    {
        id: '2',
        slug: 'ai-technical-debt-research',
        category: 'RESEARCH',
        catColor: '#EF4444',
        image: '/images/research/ai_research.png',
        images: ['/images/research/ai_research.png'],
        demoVideo: 'https://drive.google.com/file/d/1RF6mrfuhbUm_0FGq9fypZz-XhGxX7DZq/view?usp=sharing',
        title: 'AI Technical Debt in Software Repositories',
        tagline:
            'Does AI-generated code create more technical debt? We analyzed 5,000+ GitHub repositories to find out.',
        duration: 'Jan 2025 – May 2025',
        readTime: '10 min read',
        overview:
            'As AI coding assistants become ubiquitous, a critical question emerges for software engineering: does code generated by AI accumulate technical debt faster than human-written code? This empirical study mined 5,000+ public GitHub repositories, classified AI-assisted vs. human-written commits, and ran static analysis to compare code quality metrics at scale.',
        problem:
            'AI coding tools like GitHub Copilot are widely adopted, but their long-term impact on codebase maintainability is unknown. Anecdotal evidence suggests AI code may pass tests while introducing subtle smells — duplicated logic, overly complex methods, missing documentation. This study provides the first large-scale empirical measurement.',
        questions: [
            'Are repositories with high AI-assisted commit rates associated with higher technical debt density (issues per KLOC)?',
            'Do specific code smell categories (complexity, duplication, documentation) differ significantly between AI-assisted and human-written code?',
            'Is there a threshold of AI usage beyond which code quality metrics deteriorate measurably?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Data Collection',
                detail:
                    'Used the GitHub API to identify 5,000+ repositories with AI tool fingerprints in commit messages and PR descriptions (keywords: "Copilot", "ChatGPT", "AI-generated"). Matched each with a control repository of similar size, language, and activity. Extracted commit histories, contributor counts, and issue trackers.',
                tech: ['Python', 'GitHub API', 'Pandas'],
            },
            {
                phase: 'Phase 2',
                title: 'Static Analysis',
                detail:
                    'Ran SonarQube analysis across all repositories to measure: cyclomatic complexity, code duplication %, documentation coverage, and bug density. Classified findings by severity (blocker, critical, major, minor) and normalized by KLOC for fair comparison across project sizes.',
                tech: ['SonarQube', 'Python', 'Bash'],
            },
            {
                phase: 'Phase 3',
                title: 'Statistical Analysis & Findings',
                detail:
                    'Applied Mann-Whitney U tests (non-parametric, appropriate for non-normal distributions) to compare debt metrics between AI-assisted and control groups. Computed effect sizes using Cohen\'s d. Built regression models to identify which AI usage levels correlate with quality degradation.',
                tech: ['SciPy', 'Pandas', 'Mann-Whitney U', 'statsmodels'],
            },
        ],
        results: [
            { metric: '5,000+', label: 'Repositories analyzed' },
            { metric: '3', label: 'Research questions answered' },
            { metric: '#1', label: 'Best Presentation Award' },
            { metric: 'MSR', label: 'Mining Software Repositories nomination' },
        ],
        keyFindings: [
            'Repositories with >40% AI-assisted commits show statistically significant higher duplication rates (p < 0.01, Cohen\'s d = 0.42) — a medium effect size.',
            'Documentation coverage is 23% lower on average in AI-heavy repositories, suggesting AI tools generate functional code but skip docstrings and comments.',
            'No significant difference was found in bug density between groups, challenging the assumption that AI code is inherently more bug-prone.',
            'The relationship between AI usage and technical debt is non-linear: moderate AI use (20–40%) shows no degradation; only heavy use (>60%) triggers measurable quality drops.',
        ],
        conclusion:
            'AI coding assistants are not inherently harmful to code quality — but unchecked, high-volume AI usage correlates with increased duplication and reduced documentation. Teams should integrate AI tools with code review policies that specifically check for documentation and duplication smells. The full dataset and analysis scripts are available for replication.',
        github: 'https://github.com/mariyaputwa/COSC-419O-Mining-Software-Repositories/tree/main',
        stack: ['Python', 'GitHub API', 'SonarQube', 'SciPy', 'Mann-Whitney U', 'Pandas'],
    },
    {
        id: '3',
        slug: 'accounting-automation',
        category: 'EXCEL AUTOMATION',
        catColor: '#F59E0B',
        image: '/images/scale/WhatsApp Image 2025-10-16 at 23.17.46_2a277869.jpg',
        title: 'Accounting Journal Entry Automation',
        tagline:
            'Replacing 4+ hours of manual copy-paste work with a 12-minute Power Query refresh — built for real accounting teams.',
        duration: 'Feb 2026',
        readTime: '6 min read',
        overview:
            'A Canadian accounting firm processed monthly journal entries by manually copying data from SAP exports into Excel, applying formulas, and reformatting for submission. This 4-hour monthly task was error-prone and consumed senior accountant time. This project replaced the entire manual workflow with a Power Query pipeline that refreshes in 12 minutes with zero copy-paste.',
        problem:
            'The manual process involved 7 separate copy-paste steps across 3 Excel workbooks, with no validation — meaning errors only surfaced during audit review, often weeks later. The goal was to eliminate the manual steps entirely, adding automated validation that flags mismatches before submission.',
        questions: [
            'Can the entire 7-step manual process be replaced by a single "Refresh All" click?',
            'How can we implement automatic debit/credit balance validation without changing the accountant\'s existing output format?',
            'What is the minimum intervention required from non-technical accounting staff to maintain the system?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Process Mapping & ETL Design',
                detail:
                    'Shadowed the accounting team for two sessions to document every manual step, formula, and data source. Mapped the full data flow from SAP export → Excel transformation → submission format. Identified 7 Power Query queries needed to replicate the logic without VBA dependencies.',
                tech: ['Excel', 'Power Query', 'M Language'],
            },
            {
                phase: 'Phase 2',
                title: 'Power Query Pipeline',
                detail:
                    'Built 7 chained M Language queries to: import SAP CSV exports, normalize account codes, apply mapping tables for cost center labels, compute running balances, and output to the exact submission format. Added a validation query that returns a red/green status cell — green only if debits equal credits to the penny.',
                tech: ['Power Query', 'M Language', 'Excel'],
            },
            {
                phase: 'Phase 3',
                title: 'VBA Wrapper & Documentation',
                detail:
                    'Added a one-button VBA macro that triggers "Refresh All", waits for completion, then copies the validated output to a dated archive folder. Wrote a one-page user guide with screenshots so any staff member can operate the system without training.',
                tech: ['VBA', 'Excel', 'SAP'],
            },
        ],
        results: [
            { metric: '12 min', label: 'Down from 4+ hours' },
            { metric: '95%', label: 'Time saved per month' },
            { metric: '0', label: 'Copy-paste errors' },
            { metric: '48 hrs', label: 'Saved per year' },
            { metric: '7', label: 'Power Query queries' },
            { metric: '100%', label: 'Auto-validated entries' },
        ],
        keyFindings: [
            'All 7 manual steps were successfully replaced by a single Refresh All action — zero copy-paste required post-implementation.',
            'The automatic debit/credit validation caught 3 balance mismatches in the first month of use that previously would have required manual audit review to find.',
            'Non-technical staff were able to operate the system independently after a 20-minute walkthrough — no ongoing support required.',
            'The M Language approach is more maintainable than VBA for data transformation: changes to account mapping require editing one lookup table, not hunting through formulas.',
        ],
        conclusion:
            'Power Query is underutilized in accounting workflows. This project demonstrates that even complex multi-source reconciliation processes can be fully automated without custom software — just well-designed M Language queries and clear documentation. The time savings alone justify the investment within the first month of use.',
        github: 'https://github.com/rikepilb',
        stack: ['Excel', 'Power Query', 'M Language', 'VBA', 'Accounting', 'SAP'],
    },
    {
        id: '4',
        slug: 'exam-analysis-system',
        category: 'FULL STACK',
        catColor: '#7C3AED',
        image: '/images/ExamVault/Screenshot 2026-01-28 231019.png',
        images: ['/images/ExamVault/Screenshot 2026-01-28 231019.png', '/images/ExamVault/Screenshot 2026-01-28 231230.png', '/images/ExamVault/Screenshot 2026-01-28 231258.png', '/images/ExamVault/Screenshot 2026-01-28 231310.png', '/images/ExamVault/Screenshot 2026-01-28 231356.png', '/images/ExamVault/Screenshot 2026-01-28 231412.png', '/images/ExamVault/Screenshot 2026-01-28 231420.png'],
        demoVideo: 'https://drive.google.com/file/d/1AWiisSM_dNwResQA2f_v2S19GIcfIIHv/view?usp=drive_link',
        title: 'ExamVault — Automated Exam Generation & Analysis',
        tagline:
            'Full-stack capstone platform: automated exam generation, analytics dashboard, and grading pipeline processing 100,000+ student records.',
        duration: 'May 2025 – Aug 2025',
        readTime: '9 min read',
        overview:
            'I worked with a client to design and build ExamVault, a full-stack platform that helps instructors create, manage, and analyze multiple-choice exams. Over four months, my team and I built the system from the ground up, balancing design, development, testing, and client feedback. My main contributions included building the backend logic for randomized exam generation, creating an analytics dashboard to visualize exam results and trends, and coordinating sprints as Scrum Master to keep the project on track. This project pushed me to manage deadlines, debug under pressure, and communicate clearly with both teammates and stakeholders.',
        problem:
            'Manual grading and reporting for 100,000+ student records across multiple exam sessions created a 3-day processing bottleneck each semester. Faculty had no visibility into class performance until reports were manually compiled, and integrity flags were entirely subjective. The system needed to be operational within one semester.',
        questions: [
            'Can the grading pipeline be automated end-to-end, from raw answer sheets to final grade reports?',
            'What statistical methods can reliably flag potential integrity issues without generating excessive false positives?',
            'How should the faculty dashboard be designed to surface actionable insights without requiring data analysis expertise?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Backend — Django + PostgreSQL',
                detail:
                    'Built a Django REST Framework API with models for: Exam, Student, Answer, Grade, and IntegrityFlag. Implemented automated grading logic using answer key comparison with partial credit support. Added a statistical integrity module using z-score analysis to flag responses that deviate significantly from peer distributions.',
                tech: ['Python', 'Django', 'PostgreSQL', 'REST API'],
            },
            {
                phase: 'Phase 2',
                title: 'Frontend — React Dashboard',
                detail:
                    'Built a React.js SPA with role-based views (faculty vs. admin). Faculty view shows: class score distribution, question-level difficulty analysis, top/bottom performers, and integrity flag queue. Admin view adds bulk import, exam configuration, and export to PDF/CSV. Used Recharts for all data visualizations.',
                tech: ['React.js', 'Recharts', 'Axios', 'CSS Modules'],
            },
            {
                phase: 'Phase 3',
                title: 'DevOps — Docker + Deployment',
                detail:
                    'Containerized both services using Docker Compose. Configured Nginx as reverse proxy. Wrote CI pipeline (GitHub Actions) to run tests on every PR. Deployed to a university-managed Linux server with automated backups to S3-compatible storage.',
                tech: ['Docker', 'Nginx', 'GitHub Actions', 'Linux'],
            },
        ],
        results: [
            { metric: '100K+', label: 'Student records processed' },
            { metric: '3 days → 2 hrs', label: 'Grading time reduced' },
            { metric: '94%', label: 'Flagging accuracy (precision)' },
            { metric: '12', label: 'Faculty dashboard metrics' },
        ],
        keyFindings: [
            'Automated grading reduced the 3-day processing window to under 2 hours end-to-end, including PDF report generation.',
            'The z-score integrity flagging system achieved 94% precision with a 5% false positive rate — significantly better than manual review which had no consistent threshold.',
            'Faculty reported the question-difficulty breakdown as the most actionable insight: it revealed 3 questions per exam on average that were statistically too easy or too hard.',
            'Docker containerization reduced environment setup time for new team members from 2 days to under 30 minutes.',
        ],
        conclusion:
            'Full-stack automation of academic workflows is feasible within a single semester with a focused two-person team. The integrity flagging module proved the most impactful feature — not because it caught cheating, but because it gave faculty a defensible, consistent standard for investigation rather than gut feel. The system is currently in production use.',
        github: 'https://github.com/RikepilB/ExamVault',
        stack: ['Python', 'Django', 'PostgreSQL', 'React.js', 'Tailwind CSS', 'REST API', 'Docker', 'GitHub Actions'],
    },
    {
        id: '5',
        slug: 'sublime-event-ticketing',
        category: 'FULL STACK',
        catColor: '#0EA5E9',
        image: '/images/ticketing platform/Ticket_platform.png',
        images: ['/images/ticketing platform/Ticket_platform.png'],
        demoVideo: 'https://drive.google.com/file/d/1X5GBxp30XEZ2iUuaPgqxwpNB1FxD7Nei/view?usp=sharing',
        title: 'Sublime — E-Ticketing Platform',
        tagline:
            'Event ticketing platform with secure payment processing and user account management — built with Django and Docker.',
        duration: 'Jan 2024 – Apr 2024',
        readTime: '6 min read',
        overview:
            'Sublime is a comprehensive event ticketing platform designed for usability, security, and scalability. It features event discovery, secure payment processing, and user account management. Built as part of a UBC Associate with The University of British Columbia, using a hybrid Waterfall–Agile methodology that combined structured planning with iterative sprints.',
        problem:
            'Existing ticketing platforms charge high fees and offer poor customization for student-run events. Campus event organizers needed a self-hosted, full-stack solution with real payment processing, event management, and a proper admin interface — without paying Eventbrite commissions.',
        questions: [
            'How do we implement secure payment processing that meets PCI compliance standards without a dedicated security team?',
            'How do we design the event discovery flow so casual browsers convert to ticket buyers in fewer than 3 clicks?',
            'What is the minimum viable admin interface that lets non-technical event organizers manage their events independently?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'System Architecture — Django + Docker',
                detail:
                    'Designed and implemented the system with Django framework and managed Docker containerization for consistent environment across development and deployment. Followed Ian Sommerville\'s Software Engineering hybrid methodology: Waterfall for architecture decisions, Agile for feature development cycles.',
                tech: ['Python', 'Django', 'Docker', 'PostgreSQL'],
            },
            {
                phase: 'Phase 2',
                title: 'Feature Development & Payment Integration',
                detail:
                    'Led feature development, bug fixes, and enhancements, ensuring code quality and adherence to project standards. Integrated Stripe for payment processing with webhook handling for purchase confirmation. Built secure user authentication with role-based access (attendee, organizer, admin).',
                tech: ['Stripe', 'Django Auth', 'HTML', 'CSS', 'JavaScript'],
            },
            {
                phase: 'Phase 3',
                title: 'Testing & CI/CD',
                detail:
                    'Implemented unit and integration testing to ensure reliability and minimal downtime during peak event periods. Configured CI/CD pipeline for automated testing on every commit. Achieved 90%+ test coverage on critical payment and authentication flows.',
                tech: ['Pytest', 'GitHub Actions', 'CI/CD', 'Docker'],
            },
        ],
        results: [
            { metric: '3 clicks', label: 'Max to purchase a ticket' },
            { metric: '90%+', label: 'Test coverage on critical flows' },
            { metric: '0', label: 'Payment processing errors in QA' },
            { metric: 'Hybrid', label: 'Waterfall + Agile methodology' },
        ],
        keyFindings: [
            'Docker containerization eliminated the classic "works on my machine" problem — onboarding new team members took 20 minutes instead of a full day.',
            'Stripe webhooks were more reliable than redirect-based confirmation for handling users who close the browser after payment.',
            'The hybrid Waterfall–Agile methodology worked well: architecture decisions benefited from upfront planning, while feature development benefited from weekly iteration cycles.',
        ],
        conclusion:
            'Sublime demonstrated that a student team can build and deploy a production-grade e-commerce application with real payment processing within a single semester. The project emphasized the importance of testing — every payment flow bug was caught before demo day by the CI/CD pipeline, not by manual testing.',
        github: 'https://github.com/RikepilB/SublimeApp',
        stack: ['Python', 'Django', 'Docker', 'PostgreSQL', 'Stripe', 'GitHub Actions', 'CI/CD'],
    },
    {
        id: '6',
        slug: 'bookstore-app',
        title: 'Bookstore',
        tagline: 'Mobile inventory tracking app with intuitive UI and Firebase backend.',
        category: 'FULL STACK',
        catColor: '#10B981', // Emerald accent for the new minimalist theme
        duration: 'Sep 2023 – Nov 2023',
        readTime: '4 min read',
        image: '/images/Bookstore/Screenshot 2026-01-29 000328.png',
        images: ['/images/Bookstore/Screenshot 2026-01-29 000328.png'],
        demoVideo: 'https://drive.google.com/file/d/1qTaqXYH_z5wPcoHTiP4LYfTu9-Ghx5x7/view?usp=sharing',
        stack: ['Android Studio', 'Java', 'Figma', 'Firebase', 'Stripe', 'Git'],
        results: [
            { metric: '95%', label: 'User approval' },
            { metric: '30%', label: 'Fewer issues' },
        ],
        overview: 'A mobile inventory tracking application developed as a group project to streamline bookstore management and customer purchases.',
        problem: 'Bookstore inventory management systems are often clunky desktop applications that make it difficult for staff to check stock on the floor, and lack modern, intuitive interfaces for both staff and customers.',
        questions: [
            'How can we design an inventory tracking system that staff actually enjoy using?',
            'What is the most robust way to sync live inventory state to mobile clients?'
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Prototype Design',
                detail: 'Designed a Figma prototype focusing on an intuitive user experience, achieving a 95% user approval rate.',
                tech: ['Figma']
            },
            {
                phase: 'Phase 2',
                title: 'Development & Refinement',
                detail: 'Implemented the functional app using Android Studio and Java, integrating Firebase for real-time tracking.',
                tech: ['Android Studio', 'Java', 'Firebase', 'Stripe']
            }
        ],
        keyFindings: [
            'Investing heavily in high-fidelity Figma prototypes saved over 20 hours of development rework.',
            'Firebase real-time sync dramatically simplified the architecture vs a traditional REST pattern.'
        ],
        conclusion: 'The iterative design and development process resulted in a highly usable final product, evidenced by the significant drop in user-reported issues post-refinement.',
        github: 'https://github.com/RikepilB/BookstoreApp'
    },
    {
        id: '7',
        slug: 'empenalo-fintech',
        title: 'Empeñalo — Fintech Marketplace',
        tagline:
            'A Peruvian fintech marketplace where users pawn/secure items and receive multiple real offers from businesses.',
        category: 'FULL STACK 2026',
        catColor: '#F59E0B',
        duration: 'Apr – May 2026',
        readTime: '7 min read',
        image: '/images/empenalo.png',
        images: ['/images/empenalo.png'],
        demoVideo: 'https://empenalo.netlify.app/',
        stack: ['Next.js', 'React', 'Tailwind', 'Supabase', 'Vercel', 'Upstash Redis'],
        results: [
            { metric: '2-sided', label: 'Customer + Business marketplace' },
            { metric: 'Real-time', label: 'Offer management system' },
        ],
        overview:
            'A Peruvian fintech marketplace where users "empeñar" (pawn/secure) items and receive multiple real offers from businesses. Dark, premium tech aesthetic with both customer and business sides — item publishing, proposal management, and a multi-stage scaling roadmap.',
        problem:
            'Traditional pawn shops offer opaque pricing and require in-person visits. Empeñalo digitizes the process, letting users list items and receive competitive offers from multiple businesses transparently.',
        questions: [
            'How can we build a two-sided marketplace that scales from local to national?',
            'What real-time features are needed for a smooth offer negotiation flow?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Customer Marketplace',
                detail:
                    'Built the customer-facing side: item listing with image uploads, offer inbox with real-time updates via Supabase subscriptions, and secure messaging between parties.',
                tech: ['Next.js', 'React', 'Tailwind', 'Supabase'],
            },
            {
                phase: 'Phase 2',
                title: 'Business Dashboard',
                detail:
                    'Built the business side: item discovery feed, proposal creation with configurable terms, pipeline management, and analytics dashboard for offer conversion rates.',
                tech: ['Next.js', 'React', 'Supabase', 'Vercel'],
            },
            {
                phase: 'Phase 3',
                title: 'Performance & Scaling',
                detail:
                    'Implemented Upstash Redis for rate limiting and caching. Optimized real-time subscriptions for low latency. Prepared multi-stage scaling roadmap for national expansion.',
                tech: ['Upstash Redis', 'Vercel', 'Next.js'],
            },
        ],
        keyFindings: [
            'Real-time offer notifications via Supabase subscriptions increased engagement by keeping both parties in sync without polling.',
            'Dark premium aesthetic differentiated the platform from traditional classifieds sites.',
            'Rate limiting via Upstash Redis prevented abuse while maintaining sub-100ms response times.',
        ],
        conclusion:
            'Empeñalo demonstrates how modern web technologies can modernize traditional financial services. The two-sided marketplace architecture with real-time features provides a blueprint for similar lending and offer-based platforms.',
        github: 'https://github.com/RikepilB/empeno-quick-cash',
    },
    {
        id: '8',
        slug: 'scoutlane-recruitment',
        title: 'ScoutLane — Recruitment Platform',
        tagline:
            'AI-powered recruitment pipeline for parsing resumes, tracking candidates, and managing hiring workflows',
        category: 'FULL STACK 2026',
        catColor: '#2563EB',
        duration: 'Apr – May 2026',
        readTime: '7 min read',
        image: '/images/scoutlane.png',
        images: ['/images/scoutlane.png'],
        demoVideo: 'https://scoutlane.vercel.app',
        stack: ['React', 'Next.js', 'Node.js', 'Postgres', 'AI Resume Parser'],
        results: [
            { metric: 'AI-powered', label: 'Resume parsing engine' },
            { metric: 'Kanban', label: 'Pipeline management views' },
        ],
        overview:
            'ScoutLane is a recruitment platform that combines AI-powered resume parsing with pipeline management, helping teams publish jobs, process applications, manage candidates, and analyze hiring performance per role.',
        problem:
            'Recruitment teams spend hours manually reviewing resumes and tracking candidates across spreadsheets. ScoutLane automates resume parsing and provides structured pipeline management to reduce time-to-hire.',
        questions: [
            'How can AI reliably extract structured data from unstructured resumes?',
            'What pipeline views give recruiters the best visibility into candidate progress?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Resume Parsing Engine',
                detail:
                    'Built AI-powered resume parser that extracts education history, work experience, skills, and contact information from uploaded PDFs and DOCX files. Normalized output into structured candidate profiles.',
                tech: ['Node.js', 'AI Resume Parser', 'Postgres'],
            },
            {
                phase: 'Phase 2',
                title: 'Job Portal & Applications',
                detail:
                    'Built public-facing job listing pages with application forms. Candidates upload resumes which are automatically parsed and routed to the correct pipeline stage.',
                tech: ['React', 'Next.js', 'Postgres'],
            },
            {
                phase: 'Phase 3',
                title: 'Admin Dashboard & Pipelines',
                detail:
                    'Created internal admin dashboard with job CRUD, kanban and list pipeline views, stage-based automations, and per-role analytics. Recruiters can drag candidates between stages and trigger automated emails.',
                tech: ['React', 'Next.js', 'Node.js'],
            },
        ],
        keyFindings: [
            'AI resume parsing reduced manual data entry by ~80%, letting recruiters focus on candidate evaluation.',
            'Kanban pipeline views improved team visibility into bottlenecks — stuck candidates became immediately visible.',
            'Per-role analytics revealed which sourcing channels produced the highest-quality candidates.',
        ],
        conclusion:
            'ScoutLane bridges the gap between AI automation and human recruitment judgment. The structured pipeline approach turns chaotic hiring processes into measurable, improvable workflows.',
        github: 'https://github.com/RikepilB/ScoutLane',
    },
    {
        id: '9',
        slug: 'vans-voice-navigation',
        title: 'VANS — Voice-Activated Navigation System',
        tagline:
            'Hands-free Chrome extension translating speech into browser actions — empirically benchmarked against keyboard/mouse.',
        category: 'HCI RESEARCH',
        catColor: '#0891B2',
        duration: 'Sep — Dec 2024',
        readTime: '6 min read',
        image: '/images/mainpage.jpg',
        stack: ['JavaScript', 'Web Speech API', 'Chrome Extension', 'HTML5', 'UX Research'],
        results: [
            { metric: '10 tasks', label: 'Within-subjects study design' },
            { metric: '3 metrics', label: 'Time, error rate, satisfaction' },
        ],
        overview:
            'Hands-free Chrome extension translating speech into browser actions — scroll, zoom, search. Empirically benchmarked against keyboard/mouse in a 10-task within-subjects study measuring completion time, error rate, and satisfaction.',
        problem:
            'Users with motor impairments or situational disabilities (driving, cooking) cannot efficiently navigate the web. Existing voice solutions are limited to dictation — VANS maps speech commands to browser actions.',
        questions: [
            'Can voice commands match keyboard/mouse efficiency for common browser tasks?',
            'What is the error rate of Web Speech API recognition in real-world conditions?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Chrome Extension Development',
                detail:
                    'Built a Chrome extension using the Web Speech API to recognize voice commands and translate them into browser actions: scroll up/down, zoom in/out, search, navigate back/forward, and click links by number.',
                tech: ['JavaScript', 'Web Speech API', 'Chrome Extension', 'HTML5'],
            },
            {
                phase: 'Phase 2',
                title: 'Empirical User Study',
                detail:
                    'Designed a 10-task within-subjects study comparing VANS voice commands against traditional keyboard/mouse. Measured task completion time, error rate, and user satisfaction (SUS scale). Recruited 20+ participants.',
                tech: ['UX Research', 'Statistical Analysis'],
            },
            {
                phase: 'Phase 3',
                title: 'Analysis & Findings',
                detail:
                    'Analyzed results using paired t-tests. Found voice commands were 15% slower on average but reduced physical effort significantly. Error rate was comparable for simple tasks but higher for complex navigation.',
                tech: ['Python', 'Statistical Testing'],
            },
        ],
        keyFindings: [
            'Voice commands were 15% slower than keyboard/mouse on average but rated significantly higher on satisfaction for accessibility use cases.',
            'The Web Speech API achieved 92% recognition accuracy in quiet environments but dropped to 78% with background noise.',
            'Participants preferred voice for simple commands (scroll, search) but keyboard for precise actions (small link clicks).',
        ],
        conclusion:
            'VANS demonstrates that voice-based browser navigation is viable as an accessibility tool today. While not yet faster than traditional input, it fills a critical gap for users who cannot use a keyboard or mouse.',
        github: 'https://github.com/RikepilB/COSC441-ChromeExtension',
    },
]
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}
