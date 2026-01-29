'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Database, Cpu } from 'lucide-react';

const skills = [
    { name: 'Frontend', icon: <Code2 className="w-5 h-5" />, items: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
    { name: 'Backend', icon: <Server className="w-5 h-5" />, items: ['Node.js', 'Rust', 'Python', 'APIs'] },
    { name: 'Data', icon: <Database className="w-5 h-5" />, items: ['PostgreSQL', 'Firebase', 'SQLite', 'Redis'] },
    { name: 'AI/ML', icon: <Cpu className="w-5 h-5" />, items: ['Gemini API', 'Claude API', 'Whisper', 'LLMs'] },
];

export default function About() {
    return (
        <section id="about" className="py-24 max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">

                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">About Us</h2>
                    <div className="space-y-5 text-[#6B7280] leading-relaxed">
                        <p>
                            At Nineveh AI, we don't just write code—we engineer intelligent systems.
                            With deep expertise in
                            <span className="text-[#4A5561] font-medium"> AI integration</span> and
                            <span className="text-[#4A5561] font-medium"> scalable architecture</span>,
                            we create solutions that are both powerful and refined.
                        </p>
                        <p>
                            Currently building intelligent operating systems and educational platforms
                            that push the boundaries of what's possible with generative AI.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column - Skills */}
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-5 rounded-xl border border-[#E5E5E0] bg-white hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4 text-[#1a1a1a]">
                                <div className="p-2 rounded-lg bg-[#F5F5F0] text-[#4A5561]">
                                    {skill.icon}
                                </div>
                                <span className="font-semibold">{skill.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span key={item} className="text-xs text-[#6B7280] px-2 py-1 bg-[#F5F5F0] rounded">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
