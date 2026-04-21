'use client';
import React, { useState, useRef, useCallback, useEffect } from 'react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  label?: string;
}

export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = 'Before',
  altAfter = 'After',
  label,
}: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    },
    [isDragging]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  return (
    <div className="w-full">
      {label && (
        <p className="text-center text-xs font-bold tracking-[0.2em] text-[#9CA3AF] uppercase mb-4">
          {label}
        </p>
      )}
      <div
        ref={containerRef}
        className="relative w-full select-none rounded-2xl overflow-hidden shadow-xl border border-[#E5E5E0] cursor-ew-resize"
        style={{ aspectRatio: '16 / 9' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Labels */}
        <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-[#4A5561]/80 backdrop-blur-sm rounded-full text-white text-[10px] font-bold tracking-widest uppercase">
          After
        </div>
        <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-[10px] font-bold tracking-widest uppercase">
          Before
        </div>

        {/* After Image - clipped to slider position */}
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={afterImage}
            alt={altAfter}
            className="h-full w-full object-cover object-left"
            draggable="false"
          />
        </div>

        {/* Before Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={altBefore}
          className="block h-full w-full object-cover object-left"
          draggable="false"
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/90 z-10"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
          style={{ left: `calc(${sliderPosition}% - 1.375rem)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div
            className={`bg-white rounded-full h-11 w-11 flex items-center justify-center shadow-lg border border-[#E5E5E0] transition-transform duration-150 ${
              isDragging ? 'scale-110' : 'scale-100'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4A5561"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" transform="translate(6,0)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
