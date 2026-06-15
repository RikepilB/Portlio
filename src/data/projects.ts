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
            'Graph theory and hierarchical clustering applied to 150K+ Mobi Vancouver trip records — identifying critical hubs and data-driven rebalancing opportunities across 264 stations.',
        duration: 'Sep 2024 – Dec 2024',
        readTime: '8 min read',
        overview:
            'A UBC COSC 421 (Network Science) group research project analyzing Mobi by Rogers — Vancouver\'s public bike-share system — using graph theory and network science. Working from Mobi\'s open ridership dataset (publicly published monthly trip data), we processed 150K+ September 2024 trip records, modeling 264 stations as nodes and trips as weighted directed edges. We then applied Ward\'s hierarchical clustering and four centrality metrics (betweenness, eigenvector, degree, closeness) to surface structural inefficiencies, critical hub stations, and rebalancing opportunities. I am now extending the original study with deeper predictive modeling and interactive Power BI dashboards to turn the network analysis into an operational decision tool.',
        problem:
            'Bike-share operators face persistent station imbalance — some stations overflow while others sit empty. Manual rebalancing is expensive and reactive. This project asks: can graph theory and hierarchical clustering reveal structural inefficiencies and pinpoint critical hub stations before they become operational problems?',
        questions: [
            'Which stations serve as major hubs, and how does their connectivity influence overall network efficiency?',
            'How can data-driven strategies optimize bike distribution and reduce station congestion?',
            'What is the impact of transit frequency variations on resource allocation across the network?',
            'How can clustering and predictive modelling enhance the system\'s scalability and operational performance?',
        ],
        methodology: [
            {
                phase: 'Phase 1',
                title: 'Data Collection & Filtering',
                detail:
                    'Extracted September 2024 ridership data from the Mobi by Rogers website. Standardized station identifiers to 4-digit codes, removed invalid entries (empty fields, placeholder "0000" values), and built a weighted directed edges dataset by counting trip frequency between each unique station pair — creating a clean graph of consistent nodes and edges.',
                tech: ['R', 'RStudio', 'CSV', 'igraph'],
            },
            {
                phase: 'Phase 2',
                title: 'Hierarchical Clustering',
                detail:
                    'Built a directed weighted graph using the igraph library in R. Generated an adjacency matrix converted to a distance matrix (inverse of edge weights, so higher-frequency trips = shorter distance). Applied Ward\'s method hierarchical clustering to minimize intra-cluster variance — yielding 4 clusters of 84, 80, 74, and 26 stations with distinct connectivity patterns. Generated dendrograms and network graphs per cluster.',
                tech: ['R', 'igraph', 'Ward\'s Method', 'RStudio'],
            },
            {
                phase: 'Phase 3',
                title: 'Centrality Analysis',
                detail:
                    'Computed four centrality metrics across the full network and each cluster: betweenness centrality (mean 239.2) identified bridge stations critical to network flow; eigenvector centrality (mean 0.0188) identified influential hubs connected to other high-traffic nodes; degree centrality revealed in/out imbalances via degree ratios; closeness centrality (mean 0.566, range 0.398–0.620) ranked overall station accessibility.',
                tech: ['R', 'igraph', 'RStudio'],
            },
            {
                phase: 'Phase 4',
                title: 'Predictive Modeling & Power BI (in progress)',
                detail:
                    'Current extension of the project: exporting cluster membership and centrality scores from R as a clean feature table, joining them to station latitude/longitude, and building an interactive Power BI dashboard — a geospatial map overlaying centrality as bubble size/color, a cluster filter, and a degree-ratio heatmap to flag rebalancing candidates at a glance. In parallel I am developing predictive demand models to forecast station imbalance before it happens, moving the analysis from descriptive to prescriptive.',
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
            'Network science gives bike-share operators a proactive lens on system health that operational dashboards alone cannot surface. The hierarchical clustering and centrality analysis directly support zone-based rebalancing — prioritizing high-betweenness stations for bike availability and directing redistribution toward peripheral, low-closeness nodes. The methodology is fully portable to any city that publishes open bike-share data. I am actively extending the project beyond the original coursework: interactive Power BI dashboards that overlay centrality scores on a live geospatial map of Vancouver, multi-month datasets to capture seasonal demand swings, predictive demand modeling to forecast imbalance before it occurs, and expanded eigenvector modeling for automated, prescriptive rebalancing recommendations.',
        github: 'https://github.com/Sumer26/COSC_421_Project_Newtork_Science',
        stack: ['R', 'RStudio', 'igraph', 'Ward\'s Clustering', 'Graph Theory', 'Power BI'],
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
