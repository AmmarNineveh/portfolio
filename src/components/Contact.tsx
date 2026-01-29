'use client';

import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('contact@nineveh.ai');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 max-w-3xl mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
                    Let's build something
                    <span className="block text-[#4A5561]">
                        extraordinary.
                    </span>
                </h2>
                <p className="text-[#6B7280] text-lg mb-12 max-w-md mx-auto">
                    We're open for new projects, partnerships, and collaborations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <motion.a
                        href="mailto:contact@nineveh.ai"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-3 bg-[#4A5561] text-white px-8 py-4 rounded-lg font-semibold text-sm w-full sm:w-auto justify-center"
                    >
                        <Mail className="w-4 h-4" />
                        Send Email
                    </motion.a>

                    <motion.a
                        href="https://github.com/AmmarNineveh"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-sm text-[#4A5561] border border-[#D4D4CF] hover:border-[#4A5561] transition-colors w-full sm:w-auto justify-center"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </motion.a>
                </div>

                <motion.button
                    onClick={copyEmail}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#F5F5F0] rounded-lg text-sm text-[#6B7280] hover:bg-[#E8E8E3] transition-colors"
                >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy Email Address'}
                </motion.button>
            </motion.div>
        </section>
    );
}
