'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const getDirectionOffset = (direction: string) => {
  switch (direction) {
    case 'up':
      return { y: 30 };
    case 'down':
      return { y: -30 };
    case 'left':
      return { x: 30 };
    case 'right':
      return { x: -30 };
    default:
      return { y: 30 };
  }
};

export default function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
}: RevealOnScrollProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const offset = getDirectionOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

