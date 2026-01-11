'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Mail, ArrowRight } from 'lucide-react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10"
            >
                {/* Status */}
                <motion.div variants={item} className="flex items-center gap-3 mb-10">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                    </span>
                    <span className="text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase">Available for Projects</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={item}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
                >
                    <span className="text-white">I craft digital</span>
                    <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        experiences.
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-12"
                >
                    Full Stack Developer & AI Engineer based in Iraq.
                    I build intelligent systems that merge performance with elegance.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-20">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-3 bg-white text-black px-7 py-4 rounded-full font-semibold text-sm tracking-wide"
                    >
                        View My Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02, borderColor: '#4f46e5' }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-4 rounded-full font-semibold text-sm tracking-wide text-zinc-300 border border-zinc-800 transition-colors duration-300"
                    >
                        Let's Talk
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={item} className="flex items-center gap-5">
                    {[
                        { icon: <Github className="w-5 h-5" />, href: 'https://github.com/AmmarNineveh' },
                        { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@ammar.dev' },
                        {
                            icon: (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 10C9 10 9 6 12 6C15 6 15 10 15 10" />
                                    <path d="M12 18V22" />
                                    <path d="M12 18C12 18 16 18 16 15C16 12 12 12 12 12C12 12 8 12 8 15C8 18 12 18 12 18Z" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            ),
                            href: '#',
                            label: '.1x7'
                        },
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            whileHover={{ y: -3, color: '#fff' }}
                            className="text-zinc-600 transition-colors duration-300 relative group"
                            title={social.label}
                        >
                            {social.icon}
                            {social.label && (
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {social.label}
                                </span>
                            )}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
}
