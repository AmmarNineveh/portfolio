'use client';

import { motion } from 'framer-motion';
import { Github, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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

            {/* Subtle Accent Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#4A5561]/10 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10"
            >
                {/* Company Badge */}
                <motion.div variants={item} className="flex items-center gap-3 mb-10">
                    <Image
                        src="/logo-light.png"
                        alt="Nineveh AI"
                        width={28}
                        height={28}
                        className="rounded-sm opacity-80"
                    />
                    <span className="text-[#6B7280] text-xs font-medium tracking-[0.2em] uppercase">Nineveh AI</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={item}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
                >
                    <span className="text-[#1a1a1a]">Building the future</span>
                    <br />
                    <span className="text-[#4A5561]">
                        with AI.
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-[#6B7280] max-w-xl leading-relaxed mb-12"
                >
                    We create intelligent systems that merge cutting-edge AI technology
                    with elegant design. Based in Iraq, serving the world.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-20">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-3 bg-[#4A5561] text-white px-7 py-4 rounded-lg font-semibold text-sm tracking-wide"
                    >
                        View Our Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-7 py-4 rounded-lg font-semibold text-sm tracking-wide text-[#4A5561] border border-[#D4D4CF] hover:border-[#4A5561] transition-colors duration-300"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={item} className="flex items-center gap-5">
                    {[
                        { icon: <Github className="w-5 h-5" />, href: 'https://github.com/AmmarNineveh', label: 'GitHub' },
                        { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@nineveh.ai', label: 'Email' },
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            whileHover={{ y: -3 }}
                            className="text-[#6B7280] hover:text-[#4A5561] transition-colors duration-300"
                            title={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
}
