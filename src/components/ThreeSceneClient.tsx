'use client';

import dynamic from 'next/dynamic';

// Three.js cannot run on the server — must be client-only
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-[#4A5561]/40 animate-ping" />
    </div>
  ),
});

export default function ThreeSceneClient() {
  return <ThreeScene />;
}
