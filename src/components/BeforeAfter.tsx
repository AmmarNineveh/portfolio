'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageComparison } from '@/components/ui/image-comparison-slider';

const caseStudies = [
  {
    id: 1,
    project: 'SaaS Platform',
    category: 'Web Design',
    description: 'Replaced a cluttered, outdated corporate website with a modern dark-mode SaaS product page.',
    before: '/before-1.png',
    after: '/after-1.png',
    stat: '+68% conversion rate',
  },
  {
    id: 2,
    project: 'E-Commerce Store',
    category: 'E-Commerce',
    description: 'Transformed a bare-bones product table into a premium, Apple-inspired shopping experience.',
    before: '/before-2.png',
    after: '/after-2.png',
    stat: '3× more sales',
  },
  {
    id: 3,
    project: 'Portfolio & Branding',
    category: 'Branding',
    description: 'Turned a basic personal page into a polished AI company portfolio with a full rebrand.',
    before: '/before-3.png',
    after: '/after-3.png',
    stat: 'Full identity overhaul',
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-bold tracking-[0.3em] text-[#9CA3AF] uppercase mb-3">Our Impact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Before & After</h2>
        <p className="text-[#6B7280] max-w-lg">
          Drag the slider to see the transformation. Every project we touch gets a complete upgrade — not just visually.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Project Tabs */}
        <div className="flex flex-row lg:flex-col gap-3 flex-shrink-0">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActive(idx)}
              className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                active === idx
                  ? 'bg-[#4A5561] text-white border-[#4A5561] shadow-lg'
                  : 'bg-white text-[#6B7280] border-[#E5E5E0] hover:border-[#4A5561]/30'
              }`}
            >
              <span className={`text-[10px] font-bold tracking-widest uppercase block mb-1 ${active === idx ? 'text-white/60' : 'text-[#9CA3AF]'}`}>
                {cs.category}
              </span>
              <span className="font-semibold text-sm">{cs.project}</span>
            </button>
          ))}
        </div>

        {/* Slider Area */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <ImageComparison
                beforeImage={caseStudies[active].before}
                afterImage={caseStudies[active].after}
                altBefore={`${caseStudies[active].project} - Before`}
                altAfter={`${caseStudies[active].project} - After`}
              />

              {/* Description */}
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
                  {caseStudies[active].description}
                </p>
                <div className="flex-shrink-0 px-5 py-2.5 bg-[#4A5561]/8 border border-[#4A5561]/15 rounded-full">
                  <span className="text-[#4A5561] font-bold text-sm">{caseStudies[active].stat}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
