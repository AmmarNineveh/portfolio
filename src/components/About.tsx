'use client';

const skills = [
    { name: 'TypeScript', icon: '📘' },
    { name: 'Next.js', icon: '▲' },
    { name: 'React', icon: '⚛️' },
    { name: 'Flutter', icon: '🦋' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Rust', icon: '🦀' },
    { name: 'Python', icon: '🐍' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'Gemini API', icon: '✨' },
    { name: 'Claude API', icon: '🧠' },
    { name: 'SQLite', icon: '🗄️' },
];

const stats = [
    { number: '4+', label: 'Major Projects' },
    { number: '12+', label: 'Technologies' },
    { number: '2+', label: 'Years Experience' },
];

export default function About() {
    return (
        <section id="about" className="relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="section-title">
                    About <span className="gradient-text">Me</span>
                </h2>
                <p className="section-subtitle">
                    A passionate developer from Iraq, building innovative solutions with
                    cutting-edge technologies
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Bio */}
                    <div className="space-y-6">
                        <div className="glass rounded-2xl p-6">
                            <h3 className="text-xl font-semibold mb-4 gradient-text">
                                Who Am I?
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                I&apos;m a full-stack developer with a passion for AI and
                                innovative technologies. I love creating projects that push
                                boundaries — from intelligent Discord bots that build
                                relationships with users, to AI-powered operating systems and
                                comprehensive educational apps.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
                                My focus is on building solutions that are not just functional,
                                but intelligent and user-friendly. I believe in the power of AI
                                to transform how we interact with technology.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs md:text-sm text-[var(--text-muted)]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Skills */}
                    <div className="glass rounded-2xl p-6">
                        <h3 className="text-xl font-semibold mb-6 gradient-text">
                            Technologies I Work With
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span key={skill.name} className="tech-badge">
                                    <span>{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
