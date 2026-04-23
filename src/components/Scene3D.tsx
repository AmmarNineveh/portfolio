'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Torus } from '@react-three/drei';
import { motion, useScroll } from 'framer-motion';
import * as THREE from 'three';

// ── 3D Mesh ───────────────────────────────────────────────────────────────
function AIOrb({
  scrollProgressRef,
}: {
  scrollProgressRef: React.MutableRefObject<number>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !ringRef.current) return;
    const t = state.clock.elapsedTime;
    const s = scrollProgressRef.current;

    meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;
    meshRef.current.rotation.y = t * 0.2 + s * Math.PI * 2;
    ringRef.current.rotation.z = t * 0.15;
    ringRef.current.rotation.x = Math.PI / 3 + s * 0.5;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group>
        {/* Core distorted sphere */}
        <mesh ref={meshRef} castShadow>
          <icosahedronGeometry args={[1.2, 4]} />
          <MeshDistortMaterial
            color="#4A5561"
            metalness={0.85}
            roughness={0.1}
            distort={0.25}
            speed={1.5}
            emissive="#2a3540"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Orbit ring */}
        <mesh ref={ringRef} castShadow>
          <torusGeometry args={[2.0, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#4A5561"
            metalness={0.9}
            roughness={0.1}
            emissive="#4A5561"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Second ring */}
        <Torus args={[2.4, 0.025, 16, 100]} rotation={[Math.PI / 2, 0, 0.5]}>
          <meshStandardMaterial
            color="#6B7280"
            metalness={0.9}
            roughness={0.15}
            transparent
            opacity={0.5}
          />
        </Torus>
      </group>
    </Float>
  );
}

// ── R3F Scene ─────────────────────────────────────────────────────────────
function R3FScene({
  scrollProgressRef,
}: {
  scrollProgressRef: React.MutableRefObject<number>;
}) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#4A5561" />
      <Environment preset="city" />
      <Suspense fallback={null}>
        <AIOrb scrollProgressRef={scrollProgressRef} />
      </Suspense>
    </>
  );
}

// ── Main exported section ─────────────────────────────────────────────────
export default function Scene3D() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Keep plain ref in sync
  scrollYProgress.on('change', (v) => {
    scrollProgressRef.current = v;
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] bg-[#1a1e22] overflow-hidden"
    >
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(74,85,97,0.08) 1px, transparent 1px),linear-gradient(90deg, rgba(74,85,97,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        className="absolute inset-0 z-10"
        gl={{ antialias: true, alpha: true }}
      >
        <R3FScene scrollProgressRef={scrollProgressRef} />
      </Canvas>

      {/* Overlay text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[10px] font-bold tracking-[0.4em] text-[#4A5561] uppercase mb-3">
            Powered by Intelligence
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Built different.
          </h2>
          <p className="text-[#6B7280] mt-4 text-sm max-w-xs mx-auto">
            We engineer systems that think, adapt, and evolve.
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F0EB] to-transparent z-30 pointer-events-none" />
    </section>
  );
}
