import React from 'react';
import { useEffect, useState } from 'react';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  className = '',
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Create a smooth floating effect using sine
      const newOffset = Math.sin(progress / 1000) * 10;
      setOffset(newOffset);
      
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="object-contain transform transition-transform"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      />
    </div>
  );
};