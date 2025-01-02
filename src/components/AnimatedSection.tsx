import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const baseClasses = 'transition-all duration-1000 opacity-0';
  const visibilityClasses = isVisible ? 'opacity-100 translate-x-0 translate-y-0' : '';
  
  const directionClasses = {
    up: 'translate-y-16',
    down: '-translate-y-16',
    left: 'translate-x-16',
    right: '-translate-x-16',
  };

  return (
    <div
      ref={elementRef}
      className={`${baseClasses} ${!isVisible ? directionClasses[direction] : ''} ${visibilityClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};