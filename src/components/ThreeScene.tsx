'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

// ── Particle Cloud ──────────────────────────────────────────────────────────
function Particles({ count = 120 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const scroll = useScroll();

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 10,
      );
    }
    return new Float32Array(pos);
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    const s = scroll.offset;
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      dummy.position.set(
        positions[i * 3] + Math.sin(t * 0.3 + i) * 0.15,
        positions[i * 3 + 1] + Math.cos(t * 0.2 + i) * 0.15 - s * 4,
        positions[i * 3 + 2],
      );
      dummy.scale.setScalar(0.06 + Math.sin(t + i) * 0.02);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial color="#4A5561" transparent opacity={0.5} />
    </instancedMesh>
  );
}

// ── Central Torus Knot ──────────────────────────────────────────────────────
function CentralKnot() {
  const mesh = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    const s = scroll.offset;
    mesh.current.rotation.x = t * 0.12 + s * Math.PI;
    mesh.current.rotation.y = t * 0.18 + s * Math.PI * 0.5;
    mesh.current.scale.setScalar(1 + s * 0.3);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.4, 0.38, 160, 20, 2, 3]} />
        <MeshDistortMaterial
          color="#4A5561"
          wireframe={false}
          distort={0.25}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

// ── Orbiting Spheres ────────────────────────────────────────────────────────
function OrbitingSphere({ angle, radius = 3.2, size = 0.28 }: { angle: number; radius?: number; size?: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime() * 0.4 + angle;
    const s = scroll.offset;
    mesh.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.7) * (radius * 0.4),
      Math.sin(t) * (radius * 0.6),
    );
    mesh.current.rotation.x = t * 0.8 + s * 2;
    mesh.current.rotation.z = t * 0.5;
  });

  return (
    <mesh ref={mesh}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color="#6B7685"
        roughness={0.2}
        metalness={0.9}
        transparent
        opacity={0.75}
      />
    </mesh>
  );
}

// ── Floating Ring ───────────────────────────────────────────────────────────
function Ring() {
  const mesh = useRef<THREE.Mesh>(null);
  const scroll = useScroll();

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime() * 0.15;
    const s = scroll.offset;
    mesh.current.rotation.x = Math.PI / 2.5 + t + s * 1.5;
    mesh.current.rotation.y = t * 0.5;
    mesh.current.scale.setScalar(1 + s * 0.5);
    const mat = mesh.current.material as THREE.MeshStandardMaterial;
    mat.opacity = 0.15 + s * 0.25;
  });

  return (
    <Torus args={[2.8, 0.04, 16, 100]} ref={mesh as React.RefObject<any>}>
      <meshStandardMaterial color="#4A5561" transparent opacity={0.15} />
    </Torus>
  );
}

// ── Scene Graph ─────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#aab4c0" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#4A5561" distance={8} />

      <CentralKnot />
      <Ring />

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <OrbitingSphere key={i} angle={(i / 6) * Math.PI * 2} radius={3.2} />
      ))}

      <Particles count={100} />
    </>
  );
}

// ── Main Export ─────────────────────────────────────────────────────────────
export default function ThreeScene() {
  return (
    <section className="relative w-full" style={{ height: '100vh' }}>
      {/* Gradient overlays for blending */}
      <div className="absolute inset-x-0 top-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #F0F0EB, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #F0F0EB, transparent)' }} />

      {/* Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none select-none">
        <p className="text-[10px] font-bold tracking-[0.4em] text-[#9CA3AF] uppercase mb-3">
          Intelligence in Motion
        </p>
        <p className="text-[#C4C4BF] text-xs max-w-[200px] mx-auto leading-relaxed">
          Scroll to explore
        </p>
      </div>

      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </section>
  );
}
