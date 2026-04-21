'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

export default function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["intelligently.", "with purpose.", "for Iraq.", "elegantly.", "with AI."],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
        }, 2200);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F0F0EB]">

            {/* Interactive spotlight */}
            <Spotlight size={400} />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(74,85,97,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,85,97,0.04) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

                    {/* ── Left: Text ──────────────────────────── */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex-1 lg:pr-12"
                    >
                        {/* Company Badge */}
                        <motion.div variants={item} className="flex items-center gap-3 mb-10">
                            <Image
                                src="/logo-light.png"
                                alt="Nineveh AI"
                                width={26}
                                height={26}
                                className="rounded-sm opacity-80"
                            />
                            <span className="text-[#6B7280] text-xs font-medium tracking-[0.2em] uppercase">Nineveh AI</span>
                        </motion.div>

                        {/* Main Heading with Animated Word */}
                        <motion.h1
                            variants={item}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8"
                        >
                            <span className="text-[#1a1a1a] block">Building the future</span>

                            {/* Animated rotating word */}
                            <span className="relative flex items-center h-[1.15em] overflow-hidden">
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute text-[#4A5561] font-bold"
                                        initial={{ opacity: 0, y: 60 }}
                                        transition={{ type: "spring", stiffness: 60, damping: 14 }}
                                        animate={
                                            titleNumber === index
                                                ? { y: 0, opacity: 1 }
                                                : { y: titleNumber > index ? -70 : 70, opacity: 0 }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={item}
                            className="text-lg text-[#6B7280] max-w-md leading-relaxed mb-12"
                        >
                            We create intelligent systems that merge cutting-edge AI
                            technology with elegant design. Based in Iraq, serving the world.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-16">
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
                                className="px-7 py-4 rounded-lg font-semibold text-sm tracking-wide text-[#4A5561] border border-[#D4D4CF] hover:border-[#4A5561] hover:bg-white transition-all duration-300"
                            >
                                Get in Touch
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={item} className="flex items-center gap-6">
                            {[
                                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/AmmarNineveh', label: 'GitHub' },
                                { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@nineveh.ai', label: 'Email' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -3 }}
                                    className="text-[#9CA3AF] hover:text-[#4A5561] transition-colors duration-300"
                                    title={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                            <div className="h-px flex-1 bg-[#E5E5E0] max-w-24" />
                            <span className="text-xs text-[#9CA3AF] tracking-widest uppercase">Iraq</span>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: 3D Spline ─────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 w-full lg:w-auto h-[400px] lg:h-[600px] relative"
                    >
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
