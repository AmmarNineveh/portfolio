'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import Image from 'next/image'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

// ── Beautiful loading skeleton ──────────────────────────────────────────────
function SplineLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-transparent">
      {/* Animated orb rings */}
      <div className="relative w-28 h-28">
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full border border-[#4A5561]/20 animate-ping"
          style={{ animationDuration: '2s' }}
        />
        {/* Mid ring */}
        <div
          className="absolute inset-3 rounded-full border border-[#4A5561]/30 animate-ping"
          style={{ animationDuration: '2s', animationDelay: '0.4s' }}
        />
        {/* Inner ring */}
        <div
          className="absolute inset-6 rounded-full border border-[#4A5561]/50 animate-ping"
          style={{ animationDuration: '2s', animationDelay: '0.8s' }}
        />
        {/* Core dot */}
        <div className="absolute inset-10 rounded-full bg-[#4A5561]/60 animate-pulse" />
      </div>

      {/* Loading text */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold tracking-[0.3em] text-[#9CA3AF] uppercase">
          Loading 3D Scene
        </span>
        <span className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-[#9CA3AF] animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      </div>
    </div>
  )
}

// ── WebGL detection hook ────────────────────────────────────────────────────
function useWebGLSupport() {
  const [supported, setSupported] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      setSupported(!!gl)
    } catch {
      setSupported(false)
    }
  }, [])

  return supported
}

// ── WebGL fallback ──────────────────────────────────────────────────────────
function WebGLFallback({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <Image
        src="/3d-fallback.png"
        alt="Nineveh AI 3D Visual"
        fill
        className="object-contain opacity-80"
        priority
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#F0F0EB]/80 backdrop-blur-sm rounded-full border border-[#E5E5E0]">
        <span className="text-[9px] font-bold tracking-[0.2em] text-[#9CA3AF] uppercase">
          WebGL not supported
        </span>
      </div>
    </div>
  )
}

// ── Main component ──────────────────────────────────────────────────────────
export function SplineScene({ scene, className }: SplineSceneProps) {
  const webGLSupported = useWebGLSupport()

  // Still detecting
  if (webGLSupported === null) {
    return <SplineLoader />
  }

  // WebGL not available → static fallback
  if (webGLSupported === false) {
    return <WebGLFallback className={className} />
  }

  // WebGL available → load Spline
  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
