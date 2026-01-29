'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-4 bg-[#F0F0EB]/90 backdrop-blur-xl border-b border-[#E5E5E0]'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo-light.png"
            alt="Nineveh AI"
            width={36}
            height={36}
            className="rounded-sm"
          />
          <span className="text-lg font-semibold text-[#4A5561] tracking-tight">Nineveh AI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ color: '#1a1a1a' }}
              className="text-sm font-medium text-[#6B7280] transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="mailto:contact@nineveh.ai"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2 bg-[#4A5561] text-white text-sm font-semibold rounded-lg"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#4A5561]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F0F0EB] border-b border-[#E5E5E0] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#4A5561]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:contact@nineveh.ai"
                className="w-full text-center py-3 bg-[#4A5561] text-white font-semibold rounded-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
