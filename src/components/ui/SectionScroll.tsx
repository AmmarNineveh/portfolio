"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const SectionScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "start 0.25"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <div ref={containerRef} className="w-full relative" style={{ perspective: "1200px" }}>
      <motion.div
        style={{
          rotateX: rotate,
          scale,
          y: translateY,
          transformOrigin: "top center",
          willChange: "transform",
          translateZ: 0,
        }}
        className="w-full h-auto"
      >
        {children}
      </motion.div>
    </div>
  );
};
