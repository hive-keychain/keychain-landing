import React from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
}) => {
  const offset = useParallax(speed);

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform"
        style={{
          transform: `translateY(${offset}px)`,
          marginTop: -offset,
        }}
      />
    </div>
  );
};