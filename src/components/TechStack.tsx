'use client';

import { motion } from 'framer-motion';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const technologies = [
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/4A5561' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/4A5561' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/4A5561' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/4A5561' },
  { name: 'Rust', icon: 'https://cdn.simpleicons.org/rust/4A5561' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/4A5561' },
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/4A5561' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4A5561' },
  { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/4A5561' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/4A5561' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/4A5561' },
  { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/4A5561' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/4A5561' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/4A5561' },
];

export default function TechStack() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <p className="text-xs font-bold tracking-[0.3em] text-[#9CA3AF] uppercase mb-2">Tech Stack</p>
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Technologies We Use</h2>
      </motion.div>

      <div className="relative h-20 w-full">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={35}
          durationOnHover={70}
          gap={56}
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-2 group cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-8 w-8 opacity-40 group-hover:opacity-90 transition-opacity duration-300"
              />
              <span className="text-[9px] font-semibold tracking-wider text-[#9CA3AF] group-hover:text-[#4A5561] uppercase transition-colors duration-300 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>

        {/* Progressive blur edges */}
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[150px]"
          direction="left"
          blurIntensity={0.8}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[150px]"
          direction="right"
          blurIntensity={0.8}
        />
      </div>
    </section>
  );
}
