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
        blog: '',
        medium: 'https://medium.com/@mengseu2004',
        dev: 'https://dev.to/thoeng_mengseu',
        hashnode: '',
    },
    
    metadata: {
        description: `Hi, I'm Mengseu Thoeng, a Software Engineer, Microservices Architect, and Full Stack Developer from Phnom Penh, Cambodia. I specialize in building scalable Spring Boot microservices, event-driven systems, and modern web applications. Code is poetry written in logic.`,
        keywords: 'Mengseu Thoeng, Software Engineer, Microservices Architect, Full Stack Developer, Spring Boot, Java, React, Next.js, TypeScript, Event-Driven Architecture, Cambodia Developer',
        type: 'website',
    },
    
    // About section
    about: {
        title: "About Me",
        description: [
            "Hi! I'm Mengseu Thoeng, a passionate Software Engineer and Microservices Architect based in Phnom Penh, Cambodia. I specialize in building enterprise-grade Spring Boot microservices, event-driven architectures, and full-stack web applications.",
            "My expertise spans across the entire technology stack - from crafting intuitive user interfaces with React and Next.js to architecting scalable backend systems with Spring Boot, Apache Kafka, and microservices patterns. I'm also passionate about UI/UX design, bringing creative digital experiences to life.",
            "Currently, I'm diving deep into Spring Cloud Gateway, Apache Kafka streaming, BFF pattern implementation, and Kubernetes orchestration. I believe that 'Code is poetry written in logic' and I'm always excited to collaborate on innovative projects that push the boundaries of technology."
        ],
        image: '/seu.jpg',
    },
    
    // Education
    education: [
        {
            id: 1,
            institution: 'Institute of Science and Technology Advanced Development (ISTAD)',
            degree: 'Advanced Software Engineering',
            field: 'Computer Science & Software Engineering',
            startDate: '2023',
            endDate: '2024',
            description: 'Specialized in advanced software development, microservices architecture, cloud computing, and modern full-stack technologies. Focused on Spring Boot, React, and enterprise system design.',
        },
        {
            id: 2,
            institution: 'SETEC Institute',
            degree: 'Computer Science Foundation',
            field: 'Computer Science',
            startDate: '2020',
            endDate: '2023',
            description: 'Built strong foundation in programming fundamentals, algorithms, data structures, web development, and database management systems.',
        },
    ],
    
    // Work Experience
    experience: [
        {
            id: 1,
            company: 'Freelance / Open Source',
            position: 'Software Engineer & Microservices Architect',
            startDate: '2023',
            endDate: 'Present',
            description: [
                'Architected and developed enterprise-grade microservices using Spring Boot and Spring Cloud',
                'Implemented event-driven architectures with Apache Kafka for real-time data processing',
                'Built full-stack applications with React, Next.js, TypeScript, and modern UI frameworks',
                'Designed and developed RESTful APIs following clean architecture and domain-driven design principles',
                'Created scalable cloud-native solutions using Docker, Kubernetes, and AWS',
                'Collaborated on open-source projects and shared knowledge through technical blog posts'
            ],
            technologies: ['Spring Boot', 'Java', 'Apache Kafka', 'React', 'Next.js', 'TypeScript', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'],
        },
        {
            id: 2,
            company: 'ISTAD Projects',
            position: 'Full Stack Developer',
            startDate: '2023',
            endDate: '2024',
            description: [
                'Developed multiple full-stack web applications as part of academic projects',
                'Implemented responsive UIs with React, Material UI, and Tailwind CSS',
                'Built RESTful APIs with Spring Boot and integrated various databases',
                'Participated in agile development teams and code review sessions'
            ],
            technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Material UI', 'Git'],
        },
    ],
    
    // Projects
    projects: [
        {
            id: 1,
            title: 'Microservices E-Commerce Platform',
            description: 'Enterprise-grade e-commerce system built with Spring Boot microservices architecture, featuring event-driven communication with Kafka, API Gateway, and distributed transaction management.',
            image: '/projects/ecommerce.jpg',
            technologies: ['Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Spring Cloud Gateway'],
            github: 'https://github.com/MengseuThoeng/microservices-ecommerce',
            demo: 'https://mengseu-thoeng.vercel.app',
            featured: true,
        },
        {
            id: 2,
            title: 'Real-Time Task Management System',
            description: 'Collaborative task management application with real-time updates using WebSockets, Spring Boot backend, and React frontend. Features include team collaboration, notifications, and task tracking.',
            image: '/projects/task-app.jpg',
            technologies: ['React', 'Spring Boot', 'WebSocket', 'MongoDB', 'Material UI'],
            github: 'https://github.com/MengseuThoeng/task-management',
            demo: 'https://mengseu-thoeng.vercel.app',
            featured: true,
        },
        {
            id: 3,
            title: 'Event-Driven Notification Service',
            description: 'Scalable notification service using Apache Kafka for event streaming, supporting email, SMS, and push notifications with retry mechanisms and dead letter queues.',
            image: '/projects/notification.jpg',
            technologies: ['Spring Boot', 'Apache Kafka', 'Redis', 'Docker', 'PostgreSQL'],
            github: 'https://github.com/MengseuThoeng/notification-service',
            demo: '',
            featured: true,
        },
        {
            id: 4,
            title: 'Modern Portfolio Website',
            description: 'Personal portfolio website built with Next.js 14, featuring smooth animations with Framer Motion, shadcn UI components, and responsive design.',
            image: '/projects/portfolio.jpg',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn UI'],
            github: 'https://github.com/MengseuThoeng/portfolio-v2',
            demo: 'https://mengseu-thoeng.vercel.app',
            featured: false,
        },
        {
            id: 5,
            title: 'Spring Cloud API Gateway',
            description: 'Centralized API Gateway built with Spring Cloud Gateway, implementing routing, rate limiting, authentication, and load balancing for microservices.',
            image: '/projects/gateway.jpg',
            technologies: ['Spring Cloud Gateway', 'Spring Security', 'Redis', 'Docker'],
            github: 'https://github.com/MengseuThoeng/api-gateway',
            demo: '',
            featured: false,
        },
        {
            id: 6,
            title: 'Design Portfolio',
            description: 'Creative showcase of UI/UX design projects, brand identities, and graphic design work created with Figma and Adobe Creative Suite.',
            image: '/projects/design.jpg',
            technologies: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects'],
            github: '',
            demo: 'https://mengseu-thoeng.vercel.app',
            featured: false,
        },
    ],
    
    // Skills
    skills: {
        languages: [
            { name: 'Java', level: 90 },
            { name: 'TypeScript', level: 88 },
            { name: 'JavaScript', level: 92 },
            { name: 'Python', level: 75 },
            { name: 'SQL', level: 85 },
        ],
        frontend: [
            { name: 'React', level: 92 },
            { name: 'Next.js', level: 90 },
            { name: 'TypeScript', level: 88 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Material UI', level: 85 },
        ],
        backend: [
            { name: 'Spring Boot', level: 92 },
            { name: 'Spring Security', level: 85 },
            { name: 'Apache Kafka', level: 80 },
            { name: 'Node.js', level: 82 },
            { name: 'Hibernate/JPA', level: 88 },
        ],
        databases: [
            { name: 'PostgreSQL', level: 88 },
            { name: 'MongoDB', level: 85 },
            { name: 'Redis', level: 80 },
            { name: 'MySQL', level: 82 },
        ],
        tools: [
            { name: 'Docker', level: 85 },
            { name: 'Kubernetes', level: 75 },
            { name: 'Git', level: 95 },
            { name: 'AWS', level: 70 },
            { name: 'Jenkins', level: 72 },
            { name: 'Figma', level: 88 },
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
