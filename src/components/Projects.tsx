'use client';

interface Project {
    title: string;
    titleAr: string;
    description: string;
    icon: string;
    tech: string[];
    color: string;
    features: string[];
}

const projects: Project[] = [
    {
        title: 'Alawi Bot',
        titleAr: 'علاوي بوت',
        description:
            'An intelligent Discord selfbot with Iraqi dialect personality. Features relationship building, memory system, and AI-powered conversations using Gemini API.',
        icon: '🤖',
        tech: ['Node.js', 'Discord.js', 'Gemini AI', 'SQLite'],
        color: 'from-indigo-500 to-purple-600',
        features: [
            'Relationship system with 8 levels',
            'Persistent memory for users',
            'Self-improvement requests',
            'Iraqi Baghdad dialect',
        ],
    },
    {
        title: 'Nineveh OS',
        titleAr: 'نظام نينوى',
        description:
            'An AI-powered operating system built on Ubuntu. Features a complete desktop environment with an AI agent that can control system functions.',
        icon: '💻',
        tech: ['Next.js', 'Rust', 'Tauri', 'Claude API'],
        color: 'from-cyan-500 to-blue-600',
        features: [
            'AI controls the entire system',
            'Modern desktop interface',
            'File management with AI',
            'System automation',
        ],
    },
    {
        title: 'Iraqi Education App',
        titleAr: 'تطبيق التعليم العراقي',
        description:
            'A comprehensive educational app for Iraqi students. Features AI tutoring, voice recitation testing, and a focus mode to prevent distractions.',
        icon: '📚',
        tech: ['Flutter', 'Firebase', 'Gemini AI', 'Whisper'],
        color: 'from-emerald-500 to-teal-600',
        features: [
            'AI study assistant',
            'Voice recitation system',
            'Focus mode (locks phone)',
            'English level testing (CEFR)',
        ],
    },
    {
        title: 'School Management',
        titleAr: 'إدارة المدرسة',
        description:
            'A complete school management system for students, teachers, and parents. Features grade tracking, messaging, and real-time notifications.',
        icon: '🏫',
        tech: ['Flutter', 'Firebase', 'FCM', 'Firestore'],
        color: 'from-orange-500 to-red-600',
        features: [
            '4 user types supported',
            'Real-time grade updates',
            'Parent-teacher messaging',
            'Push notifications',
        ],
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="project-card group">
            {/* Icon */}
            <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
                {project.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-[var(--accent-1)] mb-4 font-medium">
                {project.titleAr}
            </p>

            {/* Description */}
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                {project.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
                {project.features.map((feature) => (
                    <li
                        key={feature}
                        className="text-sm text-[var(--text-muted)] flex items-center gap-2"
                    >
                        <span className="text-[var(--accent-3)]">▹</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="relative">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-1)]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <h2 className="section-title">
                    My <span className="gradient-text">Projects</span>
                </h2>
                <p className="section-subtitle">
                    Here are some of the projects I&apos;ve built — from intelligent bots to
                    full operating systems
                </p>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
