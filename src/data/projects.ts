export interface Project {
    slug: string;
    num: string;
    title: string;
    titleAr: string;
    tagline: string;
    description: string;
    features: string[];
    tech: string[];
    year: string;
    status: 'Active' | 'In Development' | 'Completed';
}

export const projects: Project[] = [
    {
        slug: 'alawi-bot',
        num: '01',
        title: 'Alawi Bot',
        titleAr: 'علاوي بوت',
        tagline: 'Discord AI Agent with Iraqi Personality',
        description: `A sophisticated Discord selfbot powered by Google's Gemini AI. Alawi speaks in authentic Iraqi Baghdad dialect, remembers users across conversations, and builds genuine relationships through a unique 8-level relationship system. The bot learns user preferences, maintains persistent memory, and can even request new features from its developer autonomously.`,
        features: [
            '8-level relationship system (Enemy to Soulmate)',
            'Persistent memory across conversations',
            'Iraqi Baghdad dialect personality',
            'Self-improvement feature requests',
            'Real-time status updates',
            'Multi-channel awareness',
        ],
        tech: ['Node.js', 'Discord.js', 'Gemini AI', 'SQLite', 'better-sqlite3'],
        year: '2024',
        status: 'Active',
    },
    {
        slug: 'nineveh-os',
        num: '02',
        title: 'Nineveh OS',
        titleAr: 'نظام نينوى',
        tagline: 'AI-First Operating System',
        description: `An ambitious project to build the first operating system where AI is not just an assistant, but the primary interface. Built on Ubuntu Server with a Next.js frontend and Rust backend, connected via Tauri. The AI agent (powered by Claude API) can control files, manage processes, and automate system tasks through natural conversation.`,
        features: [
            'AI controls entire system through natural language',
            'Modern glassmorphism desktop interface',
            'Intelligent file management and search',
            'System automation and scheduling',
            'Custom widget system',
            'Cross-platform via Tauri',
        ],
        tech: ['Next.js', 'TypeScript', 'Rust', 'Tauri', 'Claude API', 'Ubuntu'],
        year: '2024',
        status: 'In Development',
    },
    {
        slug: 'iraqi-edu-app',
        num: '03',
        title: 'Iraqi Education App',
        titleAr: 'تطبيق التعليم العراقي',
        tagline: 'AI-Powered Learning Platform',
        description: `A comprehensive educational application designed specifically for Iraqi students. Features an AI study assistant that understands the Iraqi curriculum, a revolutionary voice recitation system using OpenAI Whisper, and a unique Focus Mode that locks the phone during study sessions to eliminate distractions.`,
        features: [
            'AI tutor aligned with Iraqi curriculum',
            'Voice recitation with Whisper AI',
            'Focus Mode (phone lock during study)',
            'CEFR English level testing',
            'Ministerial exam question bank',
            'Real-time progress tracking',
        ],
        tech: ['Flutter', 'Dart', 'Firebase', 'Gemini AI', 'Whisper API', 'Firestore'],
        year: '2025',
        status: 'In Development',
    },
    {
        slug: 'school-manager',
        num: '04',
        title: 'School Management System',
        titleAr: 'نظام إدارة المدرسة',
        tagline: 'Complete Educational Institution Platform',
        description: `A full-featured school management system serving students, teachers, parents, and administrators. Real-time grade updates, instant push notifications, parent-teacher messaging, and comprehensive analytics. Designed with Arabic-first UI and complete RTL support.`,
        features: [
            '4 user types (Student, Teacher, Parent, Admin)',
            'Real-time grade notifications via FCM',
            'Parent-teacher direct messaging',
            'Attendance and schedule management',
            'Performance analytics dashboard',
            'Arabic-first, RTL interface',
        ],
        tech: ['Flutter', 'Firebase Auth', 'Firestore', 'FCM', 'Cloud Functions'],
        year: '2024',
        status: 'Completed',
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
