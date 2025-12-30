export const siteConfig = {
    baseUrl: 'https://mengseu-thoeng.vercel.app/',
    author: 'Thoeng Mengseu',
    author_surname: 'Mengseu',
    titlePrefix: 'Thoeng Mengseu',
    profile_image: '/seu.jpg',
    form_id: 'https://formspree.io/f/myzynpbr',
    
    social: {
        email: 'mengseu2004@gmail.com',
        twitter: 'https://x.com/Mengseu_Thoeng',
        github: 'MengseuThoeng',
        linkedin: 'https://www.linkedin.com/in/thoeng-mengseu-273b9b312/',
        facebook: 'https://facebook.com/MengseuThoeng',
        instagram: 'https://instagram.com/reki.fr',
        telegram: 'https://t.me/RekiDevil',
        blog: '',
        medium: 'https://medium.com/@mengseu2004',
        dev: 'https://dev.to/thoeng_mengseu',
        hashnode: '',
    },
    
    metadata: {
        description: `Hi, I'm Mengseu Thoeng, a Software Engineer from Phnom Penh, Cambodia. Currently working at ACLEDA Bank Plc. Specialized in Spring Boot, Microservices Architecture, Full Stack Development with React & Next.js. Passionate about building scalable enterprise applications.`,
        keywords: 'Mengseu Thoeng, Software Engineer, Cambodia Developer, Spring Boot, Microservices, Full Stack Developer, Java, React, Next.js, ACLEDA Bank, ISTAD Graduate, PostgreSQL, Oracle SQL',
        type: 'website',
    },
    
    // About section
    about: {
        title: "About Me",
        description: [
            "Hi! I'm Mengseu Thoeng, a passionate Software Engineer based in Phnom Penh, Cambodia. I specialize in building enterprise-grade Spring Boot applications, microservices architectures, and modern full-stack web applications.",
            "I'm a flexible person with a passion for team leadership and collaboration. Strong in communication and organization, I love exploring new technologies. Currently working at ACLEDA Bank Plc as a Data Management Staff (preparing to transition to backend development and microservices), where I work with Oracle SQL and large-scale financial databases.",
            "I completed intensive software engineering training at ISTAD (1,670 hours total), mastering Spring Boot, Microservices, React, Next.js, Apache Kafka, and Docker. I'm committed to being a valuable person who can help advance Cambodia's technology economy. Code is poetry written in logic."
        ],
        image: '/seu.jpg',
    },
    
    // Education
    education: [
        {
            id: 1,
            institution: 'Center of Science and Technology Advanced Development (CSTAD/ISTAD)',
            degree: 'Software Expert Training',
            field: 'Advanced Software Engineering & Microservices',
            startDate: 'Feb 2024',
            endDate: 'Jan 2025',
            description: 'Completed intensive 1,670-hour program (Basic: 900hrs + Advanced: 770hrs). Mastered Spring Boot, Spring Advanced (HATEOAS, Data JPA, MongoDB, OAuth2, Keycloak, WebFlux), Microservices Architecture (decomposition patterns, API Gateway, service discovery, Kafka, observability), Docker, and cloud deployment.',
        },
        {
            id: 2,
            institution: 'SECTEC Institute',
            degree: 'Bachelor of MIS (Management Information System)',
            field: 'Computer Science',
            startDate: '2020',
            endDate: '2025',
            description: 'Currently Junior year. Strong foundation in C, C++, Java, VB.NET, Database Management Systems (SQL Server, MySQL, Oracle), Data Structures & Algorithms, Web Development (ASP.NET, Java), and Management Information Systems.',
        },
        {
            id: 3,
            institution: 'Sisowath High School',
            degree: 'BacII National Certificate',
            field: 'Secondary Education',
            startDate: '2017',
            endDate: '2020',
            description: 'Completed high school education with national certificate.',
        },
    ],
    
    // Work Experience
    experience: [
        {
            id: 1,
            company: 'ACLEDA Bank Plc.',
            position: 'Staff of Data Management',
            startDate: 'Apr 2025',
            endDate: 'Present',
            description: [
                'Performed data-related tasks using Oracle SQL in a high-security enterprise environment',
                'Assisted in maintaining and querying large-scale financial databases',
                'Gained experience with data governance and legacy banking systems',
                'Currently in probation period and preparing to transition to backend development and microservices role',
                'Working with enterprise-grade database systems in Cambodia\'s leading financial institution'
            ],
            technologies: ['Oracle SQL', 'Database Management', 'Data Governance', 'Enterprise Systems'],
        },
        {
            id: 2,
            company: 'PKT Cambodia',
            position: 'Assistant (Social Media Management)',
            startDate: 'Dec 2021',
            endDate: 'Jan 2024',
            description: [
                'Managed and curated content for TikTok and Facebook platforms to increase audience engagement',
                'Scheduled posts, monitored analytics, and responded to user comments to boost community interaction',
                'Assisted in developing social media campaigns aligned with brand goals',
                'Enhanced brand visibility and community engagement through strategic content planning'
            ],
            technologies: ['TikTok', 'Facebook', 'Social Media Marketing', 'Content Management', 'Analytics'],
        },
    ],
    
    // Projects
    projects: [
        {
            id: 1,
            title: 'GradesBot',
            description: 'Innovative educational platform created to streamline classroom management and enrich the teaching and learning experience by offering autograding functionality. Built with modern tech stack for scalability and reliability.',
            image: '/projects/gradesbot.jpg',
            technologies: ['Spring Boot', 'React', 'PostgreSQL', 'REST API', 'Docker'],
            github: 'https://github.com/MengseuThoeng',
            demo: '',
            featured: true,
        },
        {
            id: 2,
            title: 'CodeAdvisors',
            description: 'A great initiative by ISTAD that extends learning experience to public students by fostering a community of shared knowledge and growth. Comprehensive platform for code learning and mentorship.',
            image: '/projects/codeadvisors.jpg',
            technologies: ['React', 'Next.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
            github: 'https://github.com/MengseuThoeng',
            demo: '',
            featured: true,
        },
        {
            id: 3,
            title: 'Microservices Architecture Projects',
            description: 'Enterprise-grade microservices implementations featuring decomposition patterns, database management, API communication with Apache Kafka, service discovery, API Gateway, and observability patterns learned from advanced CSTAD training.',
            image: '/projects/microservices.jpg',
            technologies: ['Spring Boot', 'Apache Kafka', 'Spring Cloud', 'Docker', 'PostgreSQL', 'MongoDB', 'Keycloak'],
            github: 'https://github.com/MengseuThoeng',
            demo: '',
            featured: true,
        },
        {
            id: 4,
            title: 'Portfolio Website V2',
            description: 'Modern personal portfolio website built with Next.js 14, featuring smooth animations, responsive design, and showcasing my software engineering journey and projects.',
            image: '/projects/portfolio.jpg',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI'],
            github: 'https://github.com/MengseuThoeng/portfolio-v2',
            demo: 'https://mengseu-thoeng.vercel.app',
            featured: false,
        },
        {
            id: 5,
            title: 'Spring Boot Advanced Projects',
            description: 'Collection of advanced Spring Boot applications implementing Spring HATEOAS, Data JPA, Data MongoDB, OAuth2 with Spring Authorization Server, Keycloak, Reactive Programming with WebFlux, and Spring Boot Actuators.',
            image: '/projects/spring-advanced.jpg',
            technologies: ['Spring Boot', 'Spring WebFlux', 'OAuth2', 'Keycloak', 'MongoDB', 'WebClient'],
            github: 'https://github.com/MengseuThoeng',
            demo: '',
            featured: false,
        },
    ],
    
    // Skills
    skills: {
        languages: [
            { name: 'Java', level: 92 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript', level: 88 },
            { name: 'C/C++', level: 70 },
            { name: 'SQL', level: 88 },
        ],
        frontend: [
            { name: 'React.js', level: 90 },
            { name: 'Next.js', level: 88 },
            { name: 'Tailwind CSS', level: 92 },
            { name: 'Bootstrap 5', level: 85 },
            { name: 'HTML/CSS', level: 95 },
        ],
        backend: [
            { name: 'Spring Boot', level: 92 },
            { name: 'Microservices', level: 85 },
            { name: 'OAuth2', level: 85 },
            { name: 'Apache Kafka', level: 82 },
        ],
        databases: [
            { name: 'PostgreSQL', level: 90 },
            { name: 'Oracle', level: 85 },
            { name: 'MongoDB', level: 83 },
            { name: 'MySQL', level: 88 },
            { name: 'SQL Server', level: 80 },
        ],
        tools: [
            { name: 'Git', level: 92 },
            { name: 'Docker', level: 87 },
            { name: 'Docker Compose', level: 85 },
            { name: 'Linux', level: 83 },
            { name: 'NGINX', level: 78 },
            { name: 'Figma', level: 85 },
        ],
    },
    
    // Services you offer
    services: [
        {
            id: 1,
            title: 'Microservices Architecture',
            description: 'Design and development of scalable Spring Boot microservices with event-driven architecture and API Gateway patterns.',
            icon: '🏗️',
        },
        {
            id: 2,
            title: 'Full Stack Development',
            description: 'End-to-end development of modern web applications using React, Next.js, TypeScript, and Spring Boot.',
            icon: '⚡',
        },
        {
            id: 3,
            title: 'Event-Driven Systems',
            description: 'Building real-time, scalable systems using Apache Kafka, WebSockets, and message-driven architectures.',
            icon: '🔌',
        },
        {
            id: 4,
            title: 'UI/UX Design',
            description: 'Creating beautiful, intuitive user interfaces and brand identities with Figma and Adobe Creative Suite.',
            icon: '🎨',
        },
        {
            id: 5,
            title: 'Cloud Native Solutions',
            description: 'Deploying and managing containerized applications with Docker, Kubernetes, and AWS cloud services.',
            icon: '☁️',
        },
        {
            id: 6,
            title: 'Technical Consulting',
            description: 'Architecture design, code reviews, and technical guidance for building scalable enterprise applications.',
            icon: '💡',
        },
    ],
    
    // Testimonials (optional)
    testimonials: [
        {
            id: 1,
            name: 'Client Name',
            position: 'CEO at Company',
            content: 'Working with Mengseu was a great experience. He delivered high-quality work on time and exceeded our expectations.',
            avatar: '/testimonials/client1.jpg',
        },
        // Add more testimonials here
    ],
} as const;

export type SiteConfig = typeof siteConfig;
