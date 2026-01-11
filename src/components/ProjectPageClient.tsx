'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/data/projects';

export function ProjectPageClient({ project }: { project: Project }) {
    return (
        <main className="min-h-screen bg-black pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12"
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
                        <span className="text-6xl font-bold text-zinc-800">{project.num}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                project.status === 'In Development' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                    'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20'
                            }`}>
                            {project.status}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        {project.title}
                    </h1>
                    <p className="text-lg text-zinc-500 mb-2">{project.titleAr}</p>
                    <p className="text-xl text-indigo-400 font-medium">{project.tagline}</p>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-lg font-semibold text-white mb-4">Overview</h2>
                    <p className="text-zinc-400 leading-relaxed text-lg">
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
                    <h2 className="text-lg font-semibold text-white mb-6">Key Features</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-zinc-950 border border-zinc-900"
                            >
                                <span className="text-indigo-400 mt-0.5">▹</span>
                                <span className="text-zinc-300 text-sm">{feature}</span>
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
                    <h2 className="text-lg font-semibold text-white mb-6">Technology Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900 rounded-full border border-zinc-800"
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
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        View Source
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-300 rounded-full font-semibold text-sm hover:border-zinc-600 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                </motion.div>

            </div>
        </main>
    );
}
