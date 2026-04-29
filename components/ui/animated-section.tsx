"use client";

import { ReactNode, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  className?: string;
  threshold?: number;
}

const animations = {
  fadeIn: 'opacity-0 animate-fade-in',
  slideUp: 'opacity-0 translate-y-8 animate-slide-up',
  slideDown: 'opacity-0 -translate-y-8 animate-slide-down',
  slideLeft: 'opacity-0 translate-x-8 animate-slide-in-left',
  slideRight: 'opacity-0 -translate-x-8 animate-slide-in-right',
  scaleIn: 'opacity-0 scale-90 animate-scale-in',
  rotateIn: 'opacity-0 rotate-6 animate-fade-in',
};

export function AnimatedSection({ 
  children, 
  animation = 'fadeIn', 
  delay = 0,
  className,
  threshold = 0.1 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0' : animations[animation],
        className
      )}
      style={{ 
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
}