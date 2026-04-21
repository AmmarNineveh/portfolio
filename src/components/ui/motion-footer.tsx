"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Github, Mail, ArrowUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.nineveh-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  --pill-bg-1: rgba(74,85,97,0.06);
  --pill-bg-2: rgba(74,85,97,0.02);
  --pill-shadow: rgba(240,240,235,0.5);
  --pill-highlight: rgba(74,85,97,0.12);
  --pill-inset-shadow: rgba(240,240,235,0.8);
  --pill-border: rgba(74,85,97,0.12);
  --pill-bg-1-hover: rgba(74,85,97,0.12);
  --pill-bg-2-hover: rgba(74,85,97,0.04);
  --pill-border-hover: rgba(74,85,97,0.28);
  --pill-shadow-hover: rgba(240,240,235,0.7);
  --pill-highlight-hover: rgba(74,85,97,0.22);
}

@keyframes nv-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
}

@keyframes nv-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-nv-breathe { animation: nv-breathe 9s ease-in-out infinite alternate; }
.animate-nv-marquee { animation: nv-marquee 45s linear infinite; }

.nv-footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(74,85,97,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(74,85,97,0.05) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.nv-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(74,85,97,0.12) 0%,
    rgba(107,114,128,0.08) 40%,
    transparent 70%
  );
}

.nv-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 0 10px 30px -10px var(--pill-shadow), inset 0 1px 1px var(--pill-highlight), inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nv-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 0 20px 40px -10px var(--pill-shadow-hover), inset 0 1px 1px var(--pill-highlight-hover);
}

.nv-giant-text {
  font-size: 22vw;
  line-height: 0.8;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(74,85,97,0.07);
  background: linear-gradient(180deg, rgba(74,85,97,0.1) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.nv-text-glow {
  background: linear-gradient(180deg, #1a1a1a 0%, rgba(74,85,97,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px rgba(74,85,97,0.2));
}
`;

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(element, { x: x * 0.35, y: y * 0.35, scale: 1.05, ease: "power2.out", duration: 0.4 });
        };
        const handleMouseLeave = () => {
          gsap.to(element, { x: 0, y: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2 });
        };
        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-10 px-6 text-[#4A5561]/60 font-semibold tracking-[0.25em] uppercase text-xs">
    <span>Nineveh AI</span> <span className="text-[#4A5561]/30">✦</span>
    <span>Built in Iraq</span> <span className="text-[#4A5561]/30">✦</span>
    <span>Full Stack AI</span> <span className="text-[#4A5561]/30">✦</span>
    <span>Serving the World</span> <span className="text-[#4A5561]/30">✦</span>
    <span>Elegant Systems</span> <span className="text-[#4A5561]/30">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.85, opacity: 0 },
        { y: "0vh", scale: 1, opacity: 1, ease: "power1.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 80%", end: "bottom bottom", scrub: 1 } }
      );
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 45%", end: "bottom bottom", scrub: 1 } }
      );
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#F0F0EB] nineveh-footer-wrapper">

          {/* Ambient glow */}
          <div className="nv-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-nv-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="nv-footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant BG text */}
          <div ref={giantTextRef} className="nv-giant-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none">
            NINEVEH
          </div>

          {/* Marquee */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-[#4A5561]/10 bg-[#F0F0EB]/60 backdrop-blur-md py-4 z-10 -rotate-1 scale-105">
            <div className="flex w-max animate-nv-marquee">
              <MarqueeItem /><MarqueeItem />
            </div>
          </div>

          {/* Main CTA Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2 ref={headingRef} className="text-5xl md:text-8xl font-black nv-text-glow tracking-tighter mb-4 text-center">
              Ready to build?
            </h2>
            <p className="text-[#6B7280] text-lg mb-12">Let's create something extraordinary together.</p>

            <div ref={linksRef} className="flex flex-col items-center gap-5 w-full">
              {/* Primary CTA */}
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton
                  as="a"
                  href="mailto:contact@nineveh.ai"
                  className="nv-glass-pill px-10 py-5 rounded-full text-[#1a1a1a] font-bold text-sm flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 text-[#4A5561]" />
                  contact@nineveh.ai
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://github.com/AmmarNineveh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nv-glass-pill px-10 py-5 rounded-full text-[#1a1a1a] font-bold text-sm flex items-center gap-3"
                >
                  <Github className="w-5 h-5 text-[#4A5561]" />
                  GitHub
                </MagneticButton>
              </div>

              {/* Secondary links */}
              <div className="flex flex-wrap justify-center gap-3">
                {["About", "Projects", "Contact"].map((link) => (
                  <MagneticButton
                    key={link}
                    as="a"
                    href={`#${link.toLowerCase()}`}
                    className="nv-glass-pill px-6 py-2.5 rounded-full text-[#6B7280] text-xs font-semibold hover:text-[#4A5561]"
                  >
                    {link}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 order-2 md:order-1">
              <Image src="/logo-light.png" alt="Nineveh AI" width={18} height={18} className="opacity-60" />
              <span className="text-[#9CA3AF] text-[10px] font-bold tracking-widest uppercase">
                © {new Date().getFullYear()} Nineveh AI. All rights reserved.
              </span>
            </div>

            <div className="nv-glass-pill px-5 py-2.5 rounded-full flex items-center gap-2 order-1 md:order-2">
              <span className="text-[#9CA3AF] text-[10px] font-bold tracking-widest uppercase">Built in</span>
              <span className="text-[#4A5561] font-black text-xs">Iraq</span>
              <span className="text-[#9CA3AF] text-[10px] font-bold tracking-widest uppercase">for the world</span>
            </div>

            <MagneticButton
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-11 h-11 rounded-full nv-glass-pill flex items-center justify-center text-[#6B7280] hover:text-[#4A5561] group order-3"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </MagneticButton>
          </div>

        </footer>
      </div>
    </>
  );
}
