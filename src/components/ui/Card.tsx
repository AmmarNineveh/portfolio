'use client';

import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function Card({ className, children, hoverEffect = true }: CardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -2 } : undefined}
            className={cn(
                "relative overflow-hidden rounded-xl border border-[var(--border-dim)] bg-[var(--bg-card)] p-6",
                "transition-colors duration-300",
                hoverEffect && "hover:border-[var(--border-highlight)] hover:bg-[var(--bg-card-hover)]",
                className
            )}
        >
            {children}
        </motion.div>
    );
}

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
            "bg-zinc-800/50 text-zinc-300 border border-zinc-700/50",
            className
        )}>
            {children}
        </span>
    );
}
