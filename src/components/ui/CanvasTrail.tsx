'use client';
import { useEffect } from 'react';
import { renderCanvas } from '@/components/ui/canvas';

export function CanvasTrail() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <canvas
      id="nineveh-canvas"
      className="pointer-events-none fixed inset-0 z-50 mix-blend-multiply"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
