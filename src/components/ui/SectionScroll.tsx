"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const SectionScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div
      ref={containerRef}
      className="w-full relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          rotateX: rotate,
          scale: scale,
          y: translateY,
          transformOrigin: "top center",
        }}
        className="w-full h-auto"
      >
        {children}
      </motion.div>
    </div>
  );
};
