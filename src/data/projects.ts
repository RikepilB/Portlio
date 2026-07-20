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

export type ProjectStatus = 'shipped' | 'coming-soon'

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
    /** Defaults to shipped when omitted. */
    status?: ProjectStatus
    /** Small "in progress" tag on the card — project is shipped but still actively being iterated on. */
    inProgress?: boolean
    image?: string // thumbnail for the card
    images?: string[] // gallery for case study page
    demoVideo?: string // Google Drive or external link for video demos
    codebaseMapUrl?: string // Foglamp AI-generated architecture scan link
}

export function isComingSoon(project: Project): boolean {
    return project.status === 'coming-soon'
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'bike-share-optimization',
        category: 'DATA SCIENCE',
        catColor: '#0c5a40',
        image: '/images/bike network/bike_network.png',
        images: ['/images/bike network/bike_network.png'],
        demoVideo: 'https://drive.google.com/file/d/1oUZ5A63UTlHPDytAo2pQ5On9Y-geD37a/view?usp=sharing',
        title: 'Bike Share Network Optimization',
        tagline:
            'Where does a city\'s bike-share network actually break? I mapped 150K+ Mobi Vancouver trips as a living graph to find the hubs that hold it together — and the gaps that quietly cost it.',
        duration: 'Sep 2024 – Dec 2024',
        readTime: '8 min read',
        overview:
            'A network science project that models Vancouver\'s Mobi bike-share system as a graph — 264 stations as nodes, trips as weighted edges — to find where the network breaks. I built an R ETL pipeline that cleaned 150K+ September 2024 trips, then used Ward\'s hierarchical clustering and four centrality metrics to pinpoint the critical hubs, dead zones, and rebalancing opportunities. I\'m now extending it with Power BI dashboards and predictive modeling to forecast station imbalance before it happens.',
        problem:
            'Every bike-share rider has hit it: the station is full so you can\'t dock, or empty so you can\'t ride. Behind that frustration is a hard operations problem — operators rebalance bikes by truck, manually and reactively, burning money to chase a moving target. The usual dashboards show where bikes are, but never why the network behaves the way it does. The bet of this project: treat the system as a graph, and the structure itself will tell you which stations are load-bearing, which are dead weight, and where to act before the imbalance becomes a problem.',
        questions: [
            'Which stations serve as major hubs, and how does their connectivity influence overall network efficiency?',
            'How can data-driven strategies optimize bike distribution and reduce station congestion?',
            'What is the impact of transit frequency variations on resource allocation across the network?',
            'How can clustering and predictive modelling enhance the system\'s scalability and operational performance?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'From Raw Trips to a Clean Graph',
                detail:
                    'Real-world data is never analysis-ready. I built an ETL pipeline in R against Mobi\'s open September 2024 ridership dataset — standardizing station IDs to 4-digit codes, stripping invalid and placeholder ("0000") entries with regex, and collapsing 150K+ individual trips into a weighted directed edge list keyed on each unique origin→destination pair. The output: a single, trustworthy graph of consistent nodes and edges that every downstream metric could rely on.',
                tech: ['R', 'RStudio', 'CSV', 'igraph'],
            },
            {
                phase: 'Phase 2',
                title: 'Letting the Network Cluster Itself',
                detail:
                    'Using igraph, I turned the trip graph into an adjacency matrix and then a distance matrix — inverting edge weights so that high-frequency routes read as "close." Ward\'s hierarchical clustering then minimized intra-cluster variance to let the network reveal its own communities: four natural clusters of 84, 80, 74, and 26 stations, each with a distinct connectivity signature. Dendrograms and per-cluster network graphs made the structure visible at a glance.',
                tech: ['R', 'igraph', 'Ward\'s Method', 'RStudio'],
            },
            {
                phase: 'Phase 3',
                title: 'Finding the Stations That Matter',
                detail:
                    'Four centrality lenses, each answering a different operational question. Betweenness (mean 239.2) exposed the bridge stations that traffic must flow through. Eigenvector (mean 0.0188) surfaced the influential hubs wired to other high-traffic nodes. Degree ratios revealed which stations quietly absorb more bikes than they release. Closeness (mean 0.566, range 0.398–0.620) ranked how reachable each station is from everywhere else. Together they turn a flat map of dots into a ranked priority list.',
                tech: ['R', 'igraph', 'RStudio'],
            },
            {
                phase: 'Phase 4',
                title: 'Making It Operational — Power BI & Prediction (in progress)',
                detail:
                    'Analysis only matters if an operator can act on it. I\'m exporting cluster membership and centrality scores from R into a clean feature table, joining station latitude/longitude, and building an interactive Power BI dashboard: a geospatial map sizing and coloring each station by centrality, a cluster filter, and a degree-ratio heatmap that flags rebalancing candidates instantly. In parallel I\'m developing predictive demand models to forecast imbalance before it happens — moving the project from "here\'s what the network looks like" to "here\'s where to send the truck tomorrow."',
                tech: ['Power BI', 'DAX', 'R', 'Predictive Modeling'],
            },
        ],
        results: [
            { metric: '150K+', label: 'Ridership records processed (Sep 2024)' },
            { metric: '264', label: 'Stations analyzed (Mobi Vancouver)' },
            { metric: '4', label: 'Network clusters identified' },
            { metric: '239.2', label: 'Avg betweenness centrality' },
            { metric: '0.566', label: 'Mean closeness centrality' },
            { metric: '0', label: 'Sink nodes — all stations active' },
        ],
        keyFindings: [
            'Hierarchical clustering cleanly partitioned the 264-station network into four communities (84, 80, 74, and 26 stations). Cluster 1 showed the highest internal cohesion (avg height 0.529) while Cluster 3 was the weakest (0.201) — a clear signal of underutilized nodes where infrastructure or rebalancing investment yields the most return.',
            'A small set of stations carries the network: stations 222, 76, and 223 dominate betweenness centrality (avg 239.2), acting as critical bridge nodes. If any of these saturates or empties, trip flow across the whole system degrades — making them the highest-priority targets for proactive rebalancing.',
            'Eigenvector analysis identified stations 209, 105, and 103 as the most influential hubs — densely connected to other high-traffic nodes and essential to global network efficiency. These are the stations whose reliability disproportionately defines rider experience.',
            'No sink nodes were found: all 264 stations actively contribute to both inbound and outbound traffic. Yet degree ratios expose significant imbalance — Node 982 (ratio 3.5) absorbs far more trips than it dispatches, a textbook candidate for scheduled bike redistribution.',
            'Closeness centrality flagged stations 176, 81, and 198 as the most accessible network-wide, while peripheral stations 988, 994, and 982 depend on longer paths — quantifying exactly where the network has connectivity gaps and where new stations would most improve coverage.',
        ],
        conclusion:
            'Network science gives bike-share operators something a live status dashboard never can: a structural diagnosis of why the system behaves the way it does. By ranking stations on how they actually function in the network — bridges, hubs, sinks, dead ends — the analysis turns guesswork into a concrete, zone-based rebalancing plan: keep the high-betweenness bridges stocked, feed the peripheral low-closeness nodes, and watch the imbalanced absorbers like Node 982. Best of all, none of it is Vancouver-specific — the same pipeline runs on any city that publishes open bike-share data. I\'m now pushing it further: interactive Power BI dashboards that put centrality on a live map, multi-month data to capture seasonal demand swings, and predictive models that forecast imbalance before it strands a single rider — turning the analysis into a genuine operations tool.',
        github: 'https://github.com/Sumer26/COSC_421_Project_Newtork_Science',
        stack: ['R', 'RStudio', 'igraph', 'Ward\'s Clustering', 'Graph Theory', 'Power BI'],
    },
    {
        id: '2',
        slug: 'ai-technical-debt-research',
        category: 'RESEARCH',
        catColor: '#8a6516',
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
        catColor: '#8a6516',
        image: '/images/scale_withoutborders/WhatsApp Image 2025-10-16 at 23.17.46_2a277869.jpg',
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
        catColor: '#0c5a40',
        inProgress: true,
        image: '/images/ExamVault/Screenshot 2026-01-28 231019.png',
        images: ['/images/ExamVault/Screenshot 2026-01-28 231019.png', '/images/ExamVault/Screenshot 2026-01-28 231230.png', '/images/ExamVault/Screenshot 2026-01-28 231258.png', '/images/ExamVault/Screenshot 2026-01-28 231310.png', '/images/ExamVault/Screenshot 2026-01-28 231356.png', '/images/ExamVault/Screenshot 2026-01-28 231412.png', '/images/ExamVault/Screenshot 2026-01-28 231420.png', '/images/foglamp/examvault.png'],
        demoVideo: 'https://drive.google.com/file/d/1AWiisSM_dNwResQA2f_v2S19GIcfIIHv/view?usp=drive_link',
        codebaseMapUrl: 'https://foglamp.dev/scan/examvault-if3mpl',
        title: 'ExamVault — Automated Exam Generation & Analysis',
        tagline:
            'Full-stack platform: automated exam generation, analytics dashboard, and grading pipeline processing 100,000+ student records.',
        duration: 'May 2025 – Aug 2025',
        readTime: '9 min read',
        overview:
            'ExamVault takes instructors from blank page to graded insight — generate randomized multiple-choice exams in seconds, auto-grade whole sessions, and read class performance from a live analytics dashboard, all in one place. No spreadsheets, no manual marking, no waiting days for results. Built over four months for a real client, it replaces a slow, error-prone workflow with one fast, defensible pipeline. I built the backend exam-generation engine and the analytics dashboard, and ran the project as Scrum Master — keeping a two-developer team shipping on a tight semester deadline.',
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
        catColor: '#0c5a40',
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
        catColor: '#0c5a40',
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
        catColor: '#0c5a40',
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
        inProgress: true,
        title: 'ScoutLane — Recruitment Platform',
        tagline:
            'AI-powered recruitment platform: public career pages, resume parsing, drag-and-drop pipelines, role-based admin, and the email/storage/webhook infrastructure a real hiring team needs.',
        category: 'FULL STACK 2026',
        catColor: '#0c5a40',
        duration: 'Apr – Jul 2026',
        readTime: '7 min read',
        image: '/images/scoutlane.png',
        images: ['/images/scoutlane.png', '/images/foglamp/scoutlane.png'],
        demoVideo: 'https://scoutlane.vercel.app',
        codebaseMapUrl: 'https://foglamp.dev/scan/scoutlane-shqt4o',
        stack: ['Next.js 16', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js', 'OpenRouter', 'Tailwind CSS 4'],
        results: [
            { metric: '236', label: 'tests passing across 36 files (Vitest + Playwright)' },
            { metric: '3', label: 'role-based access tiers — Admin, Recruiter, Hiring Manager' },
            { metric: 'Async', label: 'resume-parsing & email workers via pg-boss' },
        ],
        overview:
            'ScoutLane is a recruitment platform that combines AI-powered resume parsing with full pipeline management: public career pages with custom application forms, a drag-and-drop Kanban admin dashboard, role-based access control, and the production infrastructure — async job workers, transactional email, cloud file storage, outbound webhooks — a real hiring team runs on day to day.',
        problem:
            'Recruitment teams spend hours manually reviewing resumes and tracking candidates across spreadsheets. ScoutLane automates resume parsing and provides structured pipeline management to reduce time-to-hire, without leaving the operational gaps — auth, permissions, notifications, integrations — that turn a demo into unshippable software.',
        questions: [
            'How can AI reliably extract structured data from unstructured resumes?',
            'What pipeline views give recruiters the best visibility into candidate progress?',
            'What does a resume-parsing pipeline need beyond the happy path to run unattended — retries, async workers, role separation?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Resume Parsing Engine',
                detail:
                    'Built an AI-powered resume parser (OpenRouter, model-configurable) that extracts education history, work experience, skills, and contact information from uploaded PDFs and DOCX files, normalized into structured candidate profiles and processed asynchronously via pg-boss workers so a slow parse never blocks the application flow.',
                tech: ['OpenRouter', 'pg-boss', 'Prisma', 'PostgreSQL'],
            },
            {
                phase: 'Phase 2',
                title: 'Job Portal & Applications',
                detail:
                    'Built public-facing career pages with department/location filters and custom application forms per job template. Candidates upload resumes which are automatically parsed and routed to the correct pipeline stage; Resend handles transactional email confirmations.',
                tech: ['Next.js 16', 'React', 'Resend', 'Google Cloud Storage'],
            },
            {
                phase: 'Phase 3',
                title: 'Admin Dashboard, RBAC & Integrations',
                detail:
                    'Built a role-based admin dashboard (Admin / Recruiter / Hiring Manager via Auth.js JWT sessions) with drag-and-drop Kanban pipelines (dnd-kit), Recharts analytics, job template management, team management, and outbound webhook integrations for external systems — plus a full Vitest + Playwright test suite (236 tests, 36 files) and CI (lint → typecheck → test → build).',
                tech: ['Auth.js', 'dnd-kit', 'Recharts', 'Vitest', 'Playwright'],
            },
        ],
        keyFindings: [
            'AI resume parsing reduced manual data entry by ~80%, letting recruiters focus on candidate evaluation.',
            'Kanban pipeline views improved team visibility into bottlenecks — stuck candidates became immediately visible.',
            'Moving resume parsing to async pg-boss workers kept the application flow fast regardless of AI response latency — a lesson the earlier synchronous design didn\'t survive under real load.',
            'Role-based access (Admin/Recruiter/Hiring Manager) turned out to matter more than any single feature — real hiring teams need permission boundaries before they\'ll trust a tool with candidate data.',
        ],
        conclusion:
            'ScoutLane bridges the gap between AI automation and human recruitment judgment. What started as a resume-parsing pipeline grew into full recruitment infrastructure — public career pages, RBAC, async workers, email, storage, webhooks, and a real test suite — because that\'s what shipping software for an actual hiring team requires, not just what a demo needs. Live at scoutlane.vercel.app.',
        github: 'https://github.com/RikepilB/ScoutLane',
    },
    {
        id: '9',
        slug: 'vans-voice-navigation',
        title: 'VANS — Voice-Activated Navigation System',
        tagline:
            'Hands-free Chrome extension translating speech into browser actions — empirically benchmarked against keyboard/mouse.',
        category: 'HCI RESEARCH',
        catColor: '#8a6516',
        status: 'coming-soon',
        duration: 'Sep — Dec 2024',
        readTime: '6 min read',
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
            'VANS demonstrates that voice-based browser navigation is viable as an accessibility tool today. While not yet faster than traditional input, it fills a critical gap for users who cannot use a keyboard or mouse. A next-level v2 update is in progress — this entry stays in Coming soon until the new version ships with accurate project visuals.',
        github: 'https://github.com/RikepilB/COSC441-ChromeExtension',
    },
    {
        id: '10',
        slug: 'el-umbral',
        title: 'El Umbral — Relief Project Hub',
        tagline:
            'A bilingual "search before you build" hub for Venezuela earthquake relief — find an existing effort and join it, or publish yours with the stack and the help it needs.',
        category: 'FULL STACK',
        catColor: '#0c5a40',
        duration: 'Jun 2026',
        readTime: '7 min read',
        image: '/images/elumbral.png',
        images: ['/images/elumbral.png'],
        demoVideo: 'https://elumbralvzla.org',
        github: 'https://github.com/RikepilB/build4venezuela-projecthub',
        stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Zod', 'Fuse.js', 'Vercel'],
        results: [
            { metric: 'Live', label: 'Shipped to elumbralvzla.org' },
            { metric: '2', label: 'Languages — ES + EN, full parity' },
            { metric: '10', label: 'Public read-only API endpoints' },
            { metric: 'MIT', label: 'Open source on GitHub' },
            { metric: '0', label: 'Databases — local-first JSON seam' },
            { metric: 'Next 16', label: 'App Router + React 19 RSC' },
        ],
        overview:
            'El Umbral is the Build4Venezuela project-discovery hub for post-earthquake relief: a "search before you build" platform so volunteers stop duplicating effort. Search an idea — if a matching effort already exists, join that repo and contribute; if not, publish yours with its tech stack and the help it needs (contributors, API credits, sponsors). A Builders directory imported from the hackathon roster shows who is available to help. It ships bilingual (Spanish-default /es with /en), runs with no database for the MVP, and exposes a public read-only API so other relief tools can build on the same catalog.',
        problem:
            'After the earthquake, relief volunteers kept rebuilding the same tools in parallel — burning the scarcest resource in a crisis: time. There was no single place to check whether an idea already had a team before starting from scratch, and no shared, machine-readable catalog of who was building what. El Umbral makes "does this already exist?" the first step instead of an afterthought.',
        questions: [
            'How do you stop volunteers from duplicating relief tools without adding friction to publishing a new one?',
            'How can a fuzzy "already exists?" check warn loudly on near-duplicates while still letting genuinely new ideas through?',
            'How do you ship a bilingual, no-database MVP today that can swap to a real database later without rewriting every caller?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Local-First Data Behind a Repository Seam',
                detail:
                    'All data lives in versioned JSON files behind a single typed repository in src/lib/repository — components and routes never read JSON directly. That one seam is the swap point: P1 moves to Supabase (Postgres) without touching any caller. Zod schemas in src/lib/schemas.ts are the single source of truth (types are inferred from them) and validate every external input — form, sheet, scrape, API — at the boundary.',
                tech: ['Next.js 16', 'TypeScript', 'Zod', 'Repository Pattern'],
            },
            {
                phase: 'Phase 2',
                title: 'Fuzzy Search + Bilingual i18n',
                detail:
                    'A Fuse.js engine powers the core "search before you build" flow: strong matches warn loudly on the search page, and the same engine drives a pre-publish nudge so near-duplicates surface before a new project is created. The whole app is bilingual through hand-rolled dictionaries in src/lib/i18n (no third-party i18n library) — Spanish-default with English parity, every string shipped in both.',
                tech: ['Fuse.js', 'React 19', 'i18n', 'App Router'],
            },
            {
                phase: 'Phase 3',
                title: 'Board, Publish & Builders — Server Actions',
                detail:
                    'The board filters projects by category, stack, language, status, and need, all driven by URL searchParams so any view is shareable. Publishing is a Zod-validated Server Action that appends to the seed set. A Builders directory imported from the hackathon Google Sheet lists available talent. Status is a lifecycle (planning to wip to testing to mvp to live) and vote counts are server-authoritative to avoid double-counting.',
                tech: ['Server Actions', 'Zod', 'React Server Components'],
            },
            {
                phase: 'Phase 4',
                title: 'Public Read-Only API + Vercel Deploy',
                detail:
                    'A versioned, GET-only REST surface at /api/v1 exposes the whole catalog as JSON for other relief tools — one envelope ({ success, data, error, meta }), open CORS, a CDN-cached catalog with live /stats and /votes. Ten endpoints in all. Every color and radius is a CSS design token, so the whole app re-themes by editing token values only. It auto-deploys from main to elumbralvzla.org on Vercel.',
                tech: ['REST API', 'Vercel', 'Design Tokens', 'CDN Caching'],
            },
        ],
        keyFindings: [
            'A single repository seam (src/lib/repository) lets the MVP run on local JSON today and swap to Postgres in P1 without changing a single component or route — the data source is an implementation detail, not an architectural commitment.',
            'Defining Zod schemas once and inferring TypeScript types from them keeps validation and types from ever drifting apart, and makes "validate at the boundary" the default for every external input.',
            'Reusing one Fuse.js engine for both the search page and the pre-publish nudge keeps the duplicate-check consistent everywhere — the same match that warns a searcher also warns a publisher.',
            'Driving the board entirely from URL searchParams makes every filtered view shareable and bookmarkable, and keeps the filtering logic on the server with zero client state.',
            'Putting all color and radius in CSS design tokens turns a full re-skin into a values-only edit — no component hardcodes a color, so re-theming never touches component code.',
        ],
        conclusion:
            'El Umbral shows that crisis-response software can be both shipped-fast and built-to-last: a no-database MVP that is live and bilingual today, architected so the move to a real database, semantic search, and auth (P1 to P2) never forces a rewrite. The discipline that makes it durable — one repository seam, Zod as the single source of truth, tokens for theming, a public API others can build on — is the same discipline that let it ship in the first place. It is open source (MIT) and live at elumbralvzla.org.',
    },
    {
        id: '11',
        slug: 'aquatwin-water-metering',
        category: 'FULL STACK 2026',
        catColor: '#0c5a40',
        status: 'coming-soon',
        title: 'AquaTwin — Virtual Water Metering for Data Centers',
        tagline:
            'Data centers know their power draw to the watt — and almost nothing about their water. AquaTwin turns the telemetry tenants already have into audited, per-tenant water bills and compliance reports.',
        duration: 'Mar 2026 – Jul 2026',
        readTime: '3 min read',
        overview:
            'AquaTwin is a concept for virtual water metering in data-center colocation: estimate each tenant\'s water use from the power telemetry operators already collect, so water can be billed and reported with the same clarity as electricity — without installing new meters.',
        problem:
            'Data centers usually measure only direct cooling water and rarely attribute consumption to individual tenants. As water disclosure and sustainability reporting get stricter, operators need a way to turn existing power signals into credible, per-tenant water figures.',
        questions: [],
        methodology: [],
        results: [],
        keyFindings: [],
        conclusion:
            'Concept stage — shipping the product surface and public case study once the build is ready to show.',
        github: '',
        stack: [],
    },
    {
        id: '12',
        slug: 'findleads',
        category: 'FULL STACK 2026',
        catColor: '#8a6516',
        status: 'shipped',
        inProgress: true,
        image: '/images/findleads.png',
        images: ['/images/findleads.png'],
        title: 'FindLeads — Lead Generation with a Built-in CRM',
        tagline:
            'A business with no website is a web developer\'s best prospect. FindLeads searches Google Places for them, flags the website-less as tier-1 leads, and wraps a tiny CRM around the results.',
        duration: 'Jul 2026',
        readTime: '5 min read',
        overview:
            'FindLeads is a personal lead-generation tool: it searches the official Google Places API (Text Search New) for businesses by category and location, flags businesses without a website as tier-1 prospects for web-design outreach, and layers a lightweight CRM on top — per-business notes, a contacted toggle, CSV export. Next.js 16 App Router with React 19, Neon Postgres via Drizzle ORM, Zod validation at every boundary, and a deliberately queue-less async job design: a job row in the database, background work via Next.js after(), and client-side polling.',
        problem:
            'Prospecting for freelance web work means hours of manual map-scrolling to answer one question: which real, operating businesses near me have no website? The data exists in Google Places, but raw API results are unusable for follow-up — no memory of who was already contacted, no notes, no export. The interesting engineering constraint was scope discipline: one user, no auth, no queue infrastructure — how much durability can a plain database row and careful concurrency design deliver?',
        questions: [
            'Can a resumable background job survive crashes and duplicate workers using nothing but Postgres and atomic updates?',
            'How should durable CRM state coexist with re-runnable search snapshots so a re-scrape never wipes your notes?',
            'How far does a test-first discipline go on a one-week, one-person MVP?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Places Search & Tier-1 Flagging',
                detail:
                    'Search jobs call Google Places Text Search (New) by category + free-text location. Every response is validated with Zod before anything touches the database, and businesses with no website field become tier-1 leads. Results are stored as per-job snapshots so each search run is reproducible.',
                tech: ['Next.js 16', 'Google Places API', 'Zod'],
            },
            {
                phase: 'Phase 2',
                title: 'A Queue-less, Resumable Job Worker',
                detail:
                    'Instead of Redis or a queue service, jobs are database rows processed via Next.js after() with client polling over SWR. The worker checkpoints progress and reclaims work through single-UPDATE atomic claims, so a crashed or duplicated worker never double-processes — behavior pinned down by integration tests against a real Neon test database.',
                tech: ['Neon Postgres', 'Drizzle ORM', 'SWR'],
            },
            {
                phase: 'Phase 3',
                title: 'CRM Layer & the Durable/Snapshot Split',
                detail:
                    'Durable CRM state (notes, contacted status) lives in a businesses table keyed by place_id, deliberately separated from per-job lead snapshots — re-scraping a city never resets what you know about a business. CSV export closes the loop for actual outreach. 123 tests (unit + real-DB integration) cover the pipeline; test code outweighs product code roughly 1.35:1.',
                tech: ['TypeScript', 'Vitest', 'Tailwind 4'],
            },
        ],
        results: [
            { metric: '123', label: 'tests green across 24 files — unit plus integration against a real Neon database' },
            { metric: '27/27', label: 'MVP requirements shipped and verified across 5 planned phases' },
            { metric: '1.35:1', label: 'test-to-product code ratio (≈2,000 vs ≈1,490 lines)' },
        ],
        keyFindings: [
            'Postgres is a perfectly good job queue at single-user scale: an atomic single-UPDATE claim gives you crash-safety and duplicate-worker safety with zero new infrastructure.',
            'Splitting durable identity (keyed by place_id) from run snapshots is what makes a scraper re-runnable — state you care about should never live in state you regenerate.',
            'On AI-assisted builds, the test suite is the contract: 123 tests written alongside the implementation is what made "feature-complete" a verifiable claim instead of a feeling.',
        ],
        conclusion:
            'FindLeads is a complete, working MVP built in about a week — and honestly scoped: single-user by design, localhost-only so far, with its own 15-item severity-ordered gap audit committed to the repo. It\'s the clearest small example of the workflow behind the bigger projects: plan in phases, validate at boundaries, test against real infrastructure, and write down what\'s still weak.',
        github: 'https://github.com/RikepilB/findleads',
        stack: ['Next.js 16', 'React 19', 'TypeScript', 'Neon Postgres', 'Drizzle ORM', 'Zod', 'SWR', 'Tailwind 4', 'Vitest'],
    },
    {
        id: '13',
        slug: 'peru-tech-map',
        category: 'OPEN SOURCE',
        catColor: '#b45309',
        inProgress: true,
        title: 'Peru Grid — Mapping the Peruvian Tech Ecosystem',
        tagline:
            'Toronto has a beloved open-source tech map. Peru didn\'t. Peru Grid maps 53 researched startups, consultancies, incubators and funds across Lima and Arequipa — in one dependency-free HTML file.',
        duration: 'Jul 2026',
        readTime: '4 min read',
        image: '/images/peru-grid.png',
        images: ['/images/peru-grid.png', '/images/foglamp/peru-tech-map.png'],
        demoVideo: 'https://www.perugrid.com/',
        codebaseMapUrl: 'https://foglamp.dev/scan/peru-grid-cnhzyw',
        overview:
            'Peru Grid is an interactive, terminal-styled map of the Lima and Arequipa tech ecosystems, rendered with MapLibre GL JS on OpenFreeMap vector tiles — no API keys, no build step, no framework, zero npm dependencies. The whole application is one 766-line HTML file plus two JSON datasets fetched at runtime. Visitors fly between the two cities, click markers for company details, and browse a live headline ticker. The structure is adapted, with credit, from BUILD416\'s toronto-tech-map, extended with a city switcher and per-city coordinate validation.',
        problem:
            'Peru\'s tech scene is real but illegible — startups, consultancies, incubators and funds exist across Lima and Arequipa, yet there\'s no single open place to see them. Every entry here was researched and verified (SUNAT/RUC registries, Crunchbase, YC directories) rather than scraped; unverifiable or defunct candidates were dropped instead of padded in.',
        questions: [
            'How much interactive map can you ship with literally zero dependencies and no build pipeline?',
            'How do you keep a community dataset honest — verified entries in, hype out?',
            'Can CI meaningfully guard a data project with no application code?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'One-File Architecture',
                detail:
                    'MapLibre GL JS over OpenFreeMap tiles (OpenMapTiles schema) needs no API key, so the entire app is a single static HTML file with inline JS/CSS — deployable on any static host, forkable by anyone for any other city. Data lives in two JSON files (companies, ticker headlines) fetched at runtime.',
                tech: ['MapLibre GL JS', 'OpenFreeMap', 'Vanilla JS'],
            },
            {
                phase: 'Phase 2',
                title: 'Verified Dataset, Not a Scrape',
                detail:
                    '53 organizations — 38 Lima, 15 Arequipa: 25 startups, 9 consultancies, 8 incubators, 4 coworking spaces, 4 funds, 2 acquired, 1 nonprofit — each cross-checked against official registries (SUNAT/RUC) and public sources (Crunchbase, YC) before inclusion. Six candidates were dropped as unverifiable or defunct. Code ships MIT; the datasets ship CC BY 4.0.',
                tech: ['JSON', 'CC BY 4.0', 'MIT'],
            },
            {
                phase: 'Phase 3',
                title: 'Guardrails in CI and at Runtime',
                detail:
                    'GitHub Actions validates on every push that both JSON files parse and every entry carries name, city, coordinates and funding type. At load time, entries outside their city\'s bounding box are skipped with a console warning — a bad coordinate can never silently render a marker in the ocean.',
                tech: ['GitHub Actions', 'CI Validation'],
            },
        ],
        results: [
            { metric: '53', label: 'researched Lima & Arequipa tech organizations mapped' },
            { metric: '0', label: 'dependencies — one HTML file, two JSON datasets, no build step' },
            { metric: '766', label: 'lines — the entire application in a single file' },
        ],
        keyFindings: [
            'Zero-dependency is a feature for civic projects: anyone can fork one HTML file and two JSON files for their own city without touching npm.',
            'For open datasets, the curation rule matters more than the count — dropping six unverifiable entries is what makes the other 53 worth trusting.',
            'CI has a job even with no application code: schema-validating the data on every push keeps community contributions from breaking the map.',
        ],
        conclusion:
            'Peru Grid is live at perugrid.com — open source end to end (MIT code, CC BY 4.0 data) and designed to be forked. The honest pitch is a verified starting point for making Peru\'s tech ecosystem visible, not a finished atlas; community submissions continue to grow the map.',
        github: 'https://github.com/RikepilB/peru-tech-map',
        stack: ['MapLibre GL JS', 'OpenFreeMap', 'Vanilla JS', 'GitHub Actions'],
    },
    {
        id: '14',
        slug: 'voidscape',
        category: 'AI ENGINEERING',
        catColor: '#1d4ed8',
        status: 'shipped',
        inProgress: true,
        image: '/images/read-video.gif',
        images: ['/images/read-video.gif', '/images/foglamp/voidscape.png'],
        demoVideo: 'https://rikepilb.github.io/void-scape/',
        codebaseMapUrl: 'https://foglamp.dev/scan/voidscape-8fd1nx',
        title: 'Voidscape — Teaching AI Agents to Watch Video',
        tagline:
            'An AI coding agent can read images and PDFs — not video. Voidscape decomposes any video into frames plus a transcript, and prices the whole job before spending a cent or a token.',
        duration: 'Jun 2026 – Jul 2026',
        readTime: '6 min read',
        overview:
            'Voidscape is an open-source (MIT) Claude Code / Codex skill that gives AI agents genuine video comprehension: point it at a local file or a URL (YouTube, Loom, Vimeo…) and it extracts frames for the visual track and a transcript for the audio track — the two things an agent can actually consume. Its defining feature is the cost gate: a probe → estimate → run pipeline that prices the entire job (transcription dollars and agent-token cost) up front, defaults to free local transcription with faster-whisper, and only touches paid cloud backends after explicit approval. The engine is a single 1,300-line Python CLI built on the standard library, with an opt-in machine-readable protocol (`manifest`, `--envelope`, deterministic exit codes) added for agent callers. The public landing page is live at https://rikepilb.github.io/void-scape/.',
        problem:
            'Agents fake video understanding by reading titles and comments. Actually watching costs real money — frames dominate agent-token spend, and cloud transcription bills by the minute — so a naive implementation surprises users with the bill after the fact. The design problem was making video comprehension both real and pre-approved: never spend before showing the price, and never let audio leave the machine without explicit consent.',
        questions: [
            'What\'s the cheapest honest path to a transcript — and how often is it free?',
            'Can one skill serve multiple agent harnesses (Claude Code, Codex, Gemini CLI, Copilot CLI) from a single install?',
            'Does the skill measurably beat an agent improvising with ffmpeg on its own?',
            'What happens when a coding agent extends the same codebase months later — does the original design hold up under real adversarial review?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Probe → Estimate → Run, with a Cost Gate',
                detail:
                    'probe inspects the input (duration, resolution, audio, existing captions); estimate computes the full cost — transcription dollars per backend and projected agent-token spend from frame count — before any work; run only executes after the user (or a zero-dollar threshold) approves. Nine transcription paths are ordered cheapest-and-most-private first: sidecar subtitles, URL captions, local faster-whisper and trx (all free) before Groq, OpenAI, OpenRouter and Gemini.',
                tech: ['Python', 'ffmpeg', 'yt-dlp', 'faster-whisper'],
            },
            {
                phase: 'Phase 2',
                title: 'A Stdlib-Only Engine',
                detail:
                    'The paid-API paths use hand-built multipart requests over urllib — no SDKs — so the free paths never pay an import cost and a missing optional dependency can never break probe or estimate. 110 pytest cases across 17 files pin down chunking, deduplication, cost estimation, frame extraction, and hardening (including an anchor fix against lookalike-domain spoofing and a subprocess-level test suite for the agent CLI contract).',
                tech: ['Python stdlib', 'pytest'],
            },
            {
                phase: 'Phase 3',
                title: 'Eval-Driven Skill Design',
                detail:
                    'The skill was benchmarked with an eval loop against a no-skill baseline: with the skill loaded, the agent passed 14 of 15 assertions (93.3%) across visual-summary, audio-comprehension and cost-gate scenarios, versus 66.7% baseline. One install script wires it into four harnesses: Claude Code, Codex, Gemini CLI and Copilot CLI.',
                tech: ['LLM Evals', 'Claude Code', 'PowerShell', 'Bash'],
            },
            {
                phase: 'Phase 4',
                title: 'Build Week: Agent Protocols, Adversarial Review, Honest Security',
                detail:
                    'Extended for OpenAI Build Week 2026 with Codex + GPT-5.6: adaptive local transcription tiers, GPT-5.6-native 32×32 patch cost accounting, and an opt-in agent-facing CLI protocol (`manifest`, `--envelope`/`--compact`, a deterministic exit-code taxonomy with retryability metadata). An adversarial code-review pass against the new cost/consent gate surfaced 9 findings; the 6 real defects were fixed with regression tests before shipping — including one caught only by actually running the documented commands, not by unit tests alone. A static security scanner flagged the intentional env-key-to-cloud-API data flow as CRITICAL; rather than hide it, the finding is disclosed and explained in a `SECURITY.md` the scanner\'s own report cross-checks against.',
                tech: ['Codex', 'GPT-5.6', 'Adversarial Code Review', 'Agent Protocols', 'GitHub Pages'],
            },
        ],
        results: [
            { metric: '93.3%', label: 'eval assertions passed with the skill, vs 66.7% baseline without it' },
            { metric: '9', label: 'transcription backends, ordered free-and-local first' },
            { metric: '110', label: 'tests over a 1,300-line stdlib-only engine' },
            { metric: '6', label: 'real bugs found by adversarial review and fixed before shipping' },
        ],
        keyFindings: [
            'Cost transparency is a UX feature for agents: showing the price before the work turns "the AI ran up my bill" into an informed yes/no.',
            'Local-first ordering (captions → Whisper on-device → paid APIs) makes the free path the default path — most videos never cost a cent to read.',
            'Evals beat vibes for skill design: a measured 93.3%-vs-66.7% gap is what separates "the skill helps" from hoping it does.',
            'Adversarial review plus actually running the documented commands caught a real regression unit tests missed entirely: a bug fix elsewhere in the same diff silently changed what the README\'s own privacy-proof example demonstrated.',
        ],
        conclusion:
            'Voidscape is the most complete open-source piece in this portfolio: MIT-licensed with contribution docs, issue templates, a demo GIF, a live GitHub Pages landing page (https://rikepilb.github.io/void-scape/), 60+ commits of real iteration, and a measured eval improvement. It\'s also honest about scale — the eval set is small and iteration continues — but the shape is what production agent-tooling looks like: priced, tested, local-first, multi-harness, and reviewed like real software rather than shipped on vibes. Submitted to OpenAI Build Week 2026 (Developer Tools track).',
        github: 'https://github.com/RikepilB/void-scape',
        stack: ['Python', 'ffmpeg', 'yt-dlp', 'faster-whisper', 'pytest', 'Claude Code', 'Codex', 'GPT-5.6'],
    },
    {
        id: '15',
        slug: 'resume-scorer',
        category: 'AI ENGINEERING',
        catColor: '#1d4ed8',
        status: 'coming-soon',
        title: 'ResumeScorer — Reverse-Engineering the Resume Screener',
        tagline:
            'If a bot is going to score your resume, score it yourself first. ResumeScorer runs my resumes through an open-source hiring-agent pipeline across three LLM backends — and turns the numbers into edit plans.',
        duration: 'Jun 2026',
        readTime: '4 min read',
        overview:
            'ResumeScorer is a local resume-scoring lab built around HackerRank\'s open-source interviewstreet/hiring-agent pipeline (PDF → LLM section extraction → GitHub verification → a 120-point rubric). Thin PowerShell wrappers (219 lines total) drive the pipeline across three LLM backends — GPT-4o-mini via OpenRouter as the canonical scorer, DeepSeek, and a fully local Ollama gemma3 fallback for privacy — plus a small Python job-finder that pulls postings from HN, GitHub READMEs and ATS boards. A companion Claude Code skill and subagent convert raw score reports into prioritized, strictly honest edit plans: they propose wording and structure changes, never invented content.',
        problem:
            'Automated screeners increasingly gate the first round of hiring, and their scoring logic is opaque to candidates. Rather than guess, the move is empirical: run the same open-source screener recruiters could run, decompose its rubric (35 points open source, 30 self projects, 25 production signals, 10 technical skills, plus bonus), benchmark real resumes against it, and let the numbers direct the edits.',
        questions: [
            'What does an LLM screener actually reward, in points, section by section?',
            'How stable are scores across different LLM backends — is the rubric or the model doing the work?',
            'Where do my own resumes verifiably lose points, and which edits recover them honestly?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Wrap, Don\'t Rebuild',
                detail:
                    'The scoring pipeline is HackerRank\'s OSS code, kept in its own clone; this repo adds deliberately thin orchestration — four PowerShell scripts totaling 219 lines — plus configuration for three backends: OpenRouter GPT-4o-mini (canonical), DeepSeek chat, and CPU-forced local gemma3 via Ollama for scoring anything sensitive offline.',
                tech: ['PowerShell', 'Python', 'OpenRouter', 'Ollama'],
            },
            {
                phase: 'Phase 2',
                title: 'Benchmark & Decompose the Rubric',
                detail:
                    'An 18-resume benchmark (17 scored, one deterministic parser failure — documented, not hidden) established the baseline: my own resumes scored 44–59/100, with Open Source at 0/35 across the board — the single biggest verified gap, and the direct motivation for the open-source work now in this portfolio. The 120-point rubric is fully decomposed in the repo\'s docs.',
                tech: ['GPT-4o-mini', 'DeepSeek', 'gemma3'],
            },
            {
                phase: 'Phase 3',
                title: 'Score → Honest Edit Plan',
                detail:
                    'A score-resume Claude Code skill plus a resume-optimizer subagent read the score report and produce a ranked, weight-aware edit plan under a hard honesty constraint: rephrase and restructure only, never fabricate experience. An 18-item severity-ordered self-audit documents exactly where the lab itself is weak.',
                tech: ['Claude Code', 'LLM Agents'],
            },
        ],
        results: [
            { metric: '18', label: 'resumes benchmarked against the 120-point screener rubric' },
            { metric: '3', label: 'LLM backends compared — cloud canonical, cloud alt, fully local' },
            { metric: '0/35', label: 'the open-source score that motivated actually shipping open source' },
        ],
        keyFindings: [
            'Screener rubrics are legible once you run them: open-source contributions carried the largest single weight (35/120) — more than technical skills — which few candidates would guess.',
            'The local-model fallback matters: scoring other people\'s resumes through cloud APIs is a privacy decision, not just a cost one.',
            'The loop only works with an honesty constraint — an optimizer that invents content would maximize the score and destroy the artifact\'s purpose.',
        ],
        conclusion:
            'ResumeScorer is a lab, not a product — no UI, thin-by-design wrappers around credited external OSS, results kept private. Its value is the feedback loop it created: a measured 0/35 open-source score is why Voidscape, Peru Grid and the skills work below exist in public. Sometimes the most useful thing a tool tells you is what to go build next.',
        github: 'https://github.com/RikepilB/ResumeScorer',
        stack: ['Python', 'PowerShell', 'OpenRouter', 'Ollama', 'Claude Code'],
    },
    {
        id: '16',
        slug: 'agentic-skills-lab',
        category: 'AI ENGINEERING',
        catColor: '#1d4ed8',
        status: 'coming-soon',
        title: 'Agentic Skills Lab — Version Control for AI Capabilities',
        tagline:
            'AI coding agents are only as good as the instructions they load — and most people\'s live in unversioned dotfiles. Mine are a git-tracked library: 33 skills with history, security gates, and a publish pipeline.',
        duration: 'Jun 2026 – ongoing',
        readTime: '5 min read',
        overview:
            'The Agentic Skills Lab is the system behind every AI-assisted project in this portfolio: a version-controlled library of 33 personally-authored Claude Code skills — session-continuity handoff trees, repo scaffolding, video comprehension, second-brain search, resume scoring — whose live copies deploy to four different agent harnesses. Around it sits real supply-chain discipline: every external skill is statically scanned before install, flagged ones get clean-room rewrites instead of copies, and a confirm-gated sync pipeline separates editing from deploying. Two skills are published open source so far (project-scaffold and handoff-to-issues), with more graduating as they\'re sanitized.',
        problem:
            'Agent skills are executable instructions with real privileges — and the ecosystem treats them like wallpaper: unversioned home-directory files, installed from strangers\' repos unreviewed. Two problems compound: your own skills evolve with zero history (an edit that degrades a skill is silently permanent), and third-party skills are a supply-chain risk (several popular ones fail static analysis with HIGH findings). The lab treats both as engineering problems.',
        questions: [
            'What does version control look like for AI capabilities that live outside any repo by design?',
            'How do you consume the ecosystem\'s good ideas without inheriting its supply-chain risk?',
            'Can skill quality be compared empirically instead of by feel?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'A Git-Tracked Mirror with Deliberate Deploys',
                detail:
                    'Every skill\'s source of truth lives in a git repo; live copies at the agent-harness locations are deploy targets, not editing surfaces. A dual sync pipeline (PowerShell + bash) pulls live drift in and pushes edits out behind an explicit confirmation — deploying a skill overwrites what four different AI tools load, so it\'s a decision, not a save.',
                tech: ['Git', 'PowerShell', 'Bash', 'Markdown'],
            },
            {
                phase: 'Phase 2',
                title: 'Scan-Before-Install, Clean-Room on Failure',
                detail:
                    'Every external skill, plugin or MCP server gets a static security scan before it\'s enabled; HIGH/CRITICAL findings are a hard stop. Flagged-but-good ideas get clean-room rewrites — re-implemented from scratch with the flagged behavior excluded, provenance and scan verdicts recorded per skill. Seven current skills exist this way, including a five-skill second-brain family rewritten from a scanned repo rather than installed from it.',
                tech: ['SkillSpector', 'Static Analysis'],
            },
            {
                phase: 'Phase 3',
                title: 'Battle Tests & Publishing',
                detail:
                    'Competing skills are compared on identical tasks against a scored rubric — graft what wins back in. Skills graduate to open source once generalized and scrubbed of personal context: the public claude-skills repo currently ships project-scaffold (an idempotent AI-native repo bootstrapper: README, agent rulebooks, guardrails, handoff tree, CI in one pass) and handoff-to-issues (turns session handoff trees into deduped GitHub issues).',
                tech: ['Claude Code', 'GitHub', 'LLM Evals'],
            },
        ],
        results: [
            { metric: '33', label: 'personally-authored skills under version control, deployed to 4 harnesses' },
            { metric: '7', label: 'clean-room rewrites of security-flagged external skills' },
            { metric: '2', label: 'skills published open source so far (project-scaffold, handoff-to-issues)' },
        ],
        keyFindings: [
            'Skills are code and deserve code\'s discipline: history, review, deliberate deploys — an unversioned live skill is a production system with no rollback.',
            'The scan-before-install gate pays for itself: multiple popular community skills failed static analysis, and the clean-room pattern captures their ideas without their risk.',
            'Editing where you version and deploying on purpose (confirm-gated push) is the difference between a library and a pile of dotfiles.',
        ],
        conclusion:
            'This is infrastructure for a way of working: every other project on this page was built with these skills loaded — the handoff trees that survive context loss, the scaffolds that make a repo agent-readable, the audits that keep claims honest. The library itself stays private (it encodes personal context by design); what generalizes gets published, two skills at a time.',
        github: 'https://github.com/RikepilB/claude-skills',
        stack: ['Claude Code', 'Markdown', 'PowerShell', 'Bash', 'Git', 'Node.js'],
    },
    {
        id: '17',
        slug: 'skillvault',
        category: 'AI ENGINEERING',
        catColor: '#1d4ed8',
        status: 'coming-soon',
        title: 'SkillVault — Curated Skill Packs for AI Coding Agents',
        tagline:
            'The community has written hundreds of agent skills; most projects need about five of them at any given moment. SkillVault is the curation: 25 vetted third-party skills, staged by project lifecycle.',
        duration: 'Jul 2026 – ongoing',
        readTime: '3 min read',
        overview:
            'SkillVault is a curated starter-pack of 25 third-party Claude Code skills — 289 files of community work, hand-picked and organized into five project-lifecycle stages (design, security, debug, backend, process) so a new project copies in exactly what its current stage needs instead of everything. An agent-readable index maps each skill to trigger keywords and use cases. The curation is the work here, and the repo says so: none of the skill content is mine; the selection, staging, security-vetting and indexing are.',
        problem:
            'Agent-skill discovery is a firehose: awesome-lists with hundreds of entries, no quality signal, no sense of when in a project\'s life each skill matters. Installing everything bloats the agent\'s context and the attack surface; installing nothing wastes the community\'s best work. The missing layer is opinionated curation with a lifecycle map — and a security gate in front of the door.',
        questions: [
            'Which community skills actually earn a place in a working stack, stage by stage?',
            'How does a curated set stay consumable by agents, not just humans?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Select & Stage by Lifecycle',
                detail:
                    '25 skills organized into five stages — 11 design (UI auditing, design tokens, Tailwind systems), 2 security, 2 debugging, 4 backend, 6 process (TDD, code review, verification loops) — so a project at the design stage copies the design pack, not the world. Everything passes the same scan-before-install gate as the rest of the toolchain.',
                tech: ['Claude Code', 'Markdown'],
            },
            {
                phase: 'Phase 2',
                title: 'Index for Agents',
                detail:
                    'An AGENTS.md index gives every skill trigger keywords and a one-line use case, making the vault navigable by the agents that consume it. Several live projects — including this portfolio site — run skill sets sourced from it.',
                tech: ['Git', 'AGENTS.md'],
            },
        ],
        results: [
            { metric: '25', label: 'vetted third-party skills curated (289 files)' },
            { metric: '5', label: 'lifecycle stages: design, security, debug, backend, process' },
        ],
        keyFindings: [
            'Curation is a real contribution in an ecosystem drowning in options — the value is what\'s excluded and when what\'s included applies.',
            'Explicit non-authorship is the honest frame: organizing other people\'s best work is useful precisely because it says so.',
        ],
        conclusion:
            'SkillVault is a shelf, not a product — young, single-purpose, and already consumed by the other projects on this page. Together with the Skills Lab it splits the problem cleanly: the lab develops what I author; the vault stages the best of what everyone else did.',
        github: 'https://github.com/RikepilB/SkillVault',
        stack: ['Claude Code', 'Markdown', 'Git'],
    },
]
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}
