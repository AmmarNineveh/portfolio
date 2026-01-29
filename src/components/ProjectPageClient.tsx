'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/data/projects';

export function ProjectPageClient({ project }: { project: Project }) {
    return (
        <main className="min-h-screen bg-[#F0F0EB] pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#4A5561] transition-colors mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-6xl font-bold text-[#E5E5E0]">{project.num}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Active' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                            project.status === 'In Development' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                                'bg-gray-100 text-gray-600 border border-gray-200'
                            }`}>
                            {project.status}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3">
                        {project.title}
                    </h1>
                    <p className="text-lg text-[#6B7280] mb-2">{project.titleAr}</p>
                    <p className="text-xl text-[#4A5561] font-medium">{project.tagline}</p>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">Overview</h2>
                    <p className="text-[#6B7280] leading-relaxed text-lg">
                        {project.description}
                    </p>
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="text-lg font-semibold text-[#1a1a1a] mb-6">Key Features</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E5E0]"
                            >
                                <span className="text-[#4A5561] mt-0.5">▹</span>
                                <span className="text-[#4A5561] text-sm">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-lg font-semibold text-[#1a1a1a] mb-6">Technology Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-4 py-2 text-sm font-medium text-[#4A5561] bg-white rounded-full border border-[#E5E5E0]"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#"
                        className="flex items-center gap-2 px-6 py-3 bg-[#4A5561] text-white rounded-lg font-semibold text-sm hover:bg-[#5A6575] transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        View Source
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 px-6 py-3 border border-[#D4D4CF] text-[#4A5561] rounded-lg font-semibold text-sm hover:border-[#4A5561] transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                </motion.div>

            </div>
        </main>
    );
}
