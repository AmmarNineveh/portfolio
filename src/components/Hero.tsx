'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />

            {/* Content */}
            <div
                className={`relative z-10 text-center max-w-4xl mx-auto px-4 ${mounted ? 'animate-slide-up' : 'opacity-0'
                    }`}
            >
                {/* Greeting */}
                <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-4">
                    👋 Hello, I&apos;m
                </p>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                    <span className="gradient-text animate-gradient">Ammar</span>
                </h1>

                {/* Title */}
                <p className="text-xl md:text-2xl lg:text-3xl text-[var(--text-secondary)] mb-4">
                    Full Stack Developer & AI Enthusiast
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10">
                    Building intelligent solutions with modern technologies. From Discord
                    bots to AI-powered operating systems and educational apps.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="btn-primary">
                        View My Projects
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Get In Touch
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
                    <svg
                        className="w-6 h-10 text-[var(--text-muted)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 40"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="22"
                            height="38"
                            rx="11"
                            strokeWidth="2"
                        />
                        <circle className="animate-pulse" cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
