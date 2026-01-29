'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <section id="projects" className="py-32 max-w-5xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Our Work</h2>
                <p className="text-[#6B7280] max-w-lg">Projects that demonstrate technical depth and thoughtful design.</p>
            </motion.div>

            {/* Clean 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group relative p-8 rounded-xl border border-[#E5E5E0] bg-white hover:border-[#D4D4CF] hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                        >
                            {/* Header: Number + Arrow */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-5xl font-bold text-[#E5E5E0] group-hover:text-[#D4D4CF] transition-colors">
                                    {project.num}
                                </span>
                                <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                                    <ArrowUpRight className="w-5 h-5 text-[#C4C4BF] group-hover:text-[#4A5561] transition-colors" />
                                </motion.div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#4A5561] transition-colors">
                                {project.title}
                            </h3>

                            {/* Tagline */}
                            <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                                {project.tagline}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.slice(0, 3).map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 text-xs font-medium text-[#4A5561] bg-[#F5F5F0] rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
