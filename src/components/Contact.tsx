'use client';

import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('contact@ammar.dev');
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
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's build something
                    <span className="block text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                        extraordinary.
                    </span>
                </h2>
                <p className="text-zinc-500 text-lg mb-12 max-w-md mx-auto">
                    I'm currently open for freelance projects and full-time opportunities.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <motion.a
                        href="mailto:contact@ammar.dev"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-sm w-full sm:w-auto justify-center"
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
                        className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm text-zinc-300 border border-zinc-800 hover:border-zinc-600 transition-colors w-full sm:w-auto justify-center"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </motion.a>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="text-zinc-500 text-sm">Or find me on Discord</p>
                    <div className="flex items-center gap-3 px-6 py-3 bg-zinc-950 border border-zinc-900 rounded-2xl">
                        <span className="text-indigo-400 font-bold">@</span>
                        <span className="text-white font-mono">.1x7</span>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText('.1x7');
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                            }}
                            className="ml-2 p-2 hover:bg-zinc-900 rounded-lg transition-colors"
                        >
                            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-3 h-3 text-zinc-500" />}
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
