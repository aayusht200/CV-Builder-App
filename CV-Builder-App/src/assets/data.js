export const data = {
    GeneralInfoData: {
        firstName: 'Aayush',
        lastName: 'Trivedi',
        email: 'aayush.t200@gmail.com',
        contactNumber: '+91 8879073846',
        linkedin: 'https://www.linkedin.com/in/aayush-tri/',
        github: 'https://github.com/aayusht200',
        summary:
            'Front-End Developer skilled in building responsive, scalable web applications using HTML5, CSS3, and JavaScript (ES6+). Strong experience in modular architecture, state-driven UI rendering, API integration, and test-driven development with Jest, with a focus on building maintainable and user-focused applications. Proven ability to solve complex technical problems and deliver measurable business impact through both software engineering and operational leadership experience.',
    },
    EducationData: [
        {
            id: 1,
            universityName: 'Pace University',
            degreeName: 'M.S.in Software Engineering and Development',
            graduationDate: 'May 2023',
            notableCourses: 'Requirements Engineering, Project Management, Component Architectures',
        },
        {
            id: 2,
            universityName: 'Shah and Anchor Kuttchi Engineering College',
            degreeName: 'B.E.in Information Technology',
            graduationDate: 'May 2021',
            notableCourses: 'Database Management Systems, Python Programing, Data Mining & Business Intelligence',
        },
        {
            id: 3,
            universityName: 'Sardar Vallabhai Patel Engineering College',
            degreeName: 'Diploma in Computer Technology',
            graduationDate: 'May 2018',
            notableCourses: 'Data Structures & Algorithm with Java, RDBMS, HTML programing',
        },
    ],
    ExperienceData: [
        {
            id: 1,
            company: 'Elite Jewelry House / Frostrox LLC',
            positionTitle: 'Systems Manager',
            startDate: 'Sep 2024',
            endDate: 'Present',
            responsibilities: [
                {
                    id: 1,
                    text: 'Drove revenue growth: Increased sales by 25% in four months after taking charge, and achieved 200%+ year-over-year growth.',
                },
                {
                    id: 2,
                    text: 'Record performance: Achieved the highest monthly sales in company history, surpassing previous records.',
                },
                {
                    id: 3,
                    text: 'Multi-channel expansion: Built and managed operations across Etsy, Amazon, Shopify, and eBay, boosting brand visibility by 40%+.',
                },
                {
                    id: 4,
                    text: 'Operational efficiency: Streamlined catalog management and optimized product listings/pricing, improving conversion rates.',
                },
                {
                    id: 5,
                    text: 'Automation & reporting: Implemented Excel/SQL automation, reducing manual workload and increasing team efficiency.',
                },
            ],
        },
        {
            id: 2,
            company: 'PSI Technology',
            positionTitle: 'Intern Data Analyst',
            startDate: 'Jul 2024',
            endDate: 'Mar 2024',
            responsibilities: [
                {
                    id: 1,
                    text: 'Applied statistical methods (regression, hypothesis testing, ANOVA) to build predictive models, boosting forecast accuracy by 25%.',
                },
                {
                    id: 2,
                    text: 'Cleaned and preprocessed datasets, improving accuracy by 30% and reducing errors by 20%.',
                },
                {
                    id: 3,
                    text: 'Developed Tableau dashboards and optimized SQL queries, enhancing data comprehension by 40% and cutting ETL time by 25%.',
                },
            ],
        },
        {
            id: 3,
            company: 'CodersData',
            positionTitle: 'Data Analyst',
            startDate: 'Sep 2023',
            endDate: 'Jul 2024',
            responsibilities: [
                {
                    id: 1,
                    text: 'Conducted statistical analysis and data modeling, improving decision-making accuracy by 25%.',
                },
                {
                    id: 2,
                    text: 'Managed end-to-end data cleaning and preprocessing, boosting accuracy by 30% and reducing errors by 20%.',
                },
                {
                    id: 3,
                    text: 'Built Tableau dashboards and SQL-driven reports, enhancing data comprehension by 40% and cutting processing time by 25%.',
                },
            ],
        },
    ],
    ProjectData: [
        {
            id: 1,
            projectTitle: 'Battleship Game',
            domain: 'Browser-Based Web Application',
            startDate: 'Apr 2026',
            endDate: 'Apr 2026',
            projectDesc: `Built a modular browser-based implementation of the classic
Battleship game using JavaScript ES Modules, Vite, and Jest. Applied test-driven development to validate ship placement, hit
detection, turn handling, and win conditions. Designed a controller-driven state architecture with strict separation between UI rendering
and game logic to improve maintainability. Implemented randomized ship placement, computer auto-turn logic, event delegation, reset
functionality, and state-driven UI updates. Resolved complex shared object reference bugs, strengthening debugging and object lifecycle
management.`,
            projectLinks: {
                live: 'https://aayusht200.github.io/battleship/',
                code: 'https://github.com/aayusht200/battleship',
            },
        },
        {
            id: 2,
            projectTitle: 'ToDo App',
            domain: 'Task Management Web Application',
            startDate: 'Apr 2026',
            endDate: 'Apr 2026',
            projectDesc: `Developed a feature-rich task and project management application
using HTML, CSS, and JavaScript (ES6 Modules). Built centralized state management, CRUD workflows, priority and status tracking,
and dynamic DOM rendering. Implemented responsive Grid and Flexbox layouts, localStorage persistence, and modular Webpack-based
architecture.`,
            projectLinks: {
                live: 'https://aayusht200.github.io/Todo-Project/',
                code: 'https://github.com/aayusht200/Todo-Project',
            },
        },
        ,
        {
            id: 3,
            projectTitle: 'WeatherApp',
            domain: 'API-Based Dashboard ',
            startDate: 'Apr 2026',
            endDate: 'Apr 2026',
            projectDesc: `Built a front-end weather dashboard integrating Visual Crossing Weather API
and OpenCage geolocation API for real-time weather and location-based updates. Implemented async/await workflows, localStorage
caching, manual and auto refresh logic, and dynamic UI updates with responsive Grid/Flexbox layouts.`,
            projectLinks: {
                live: 'https://aayusht200.github.io/WeatherApp-API-Practice/',
                code: 'https://github.com/aayusht200/WeatherApp-API-Practice',
            },
        },
    ],
};
