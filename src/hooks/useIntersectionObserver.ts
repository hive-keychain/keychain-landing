import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(`Observando elemento: ${entry.target.id}, Intersectando: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      console.log(`Iniciando observación para: ${elementRef.current.id}`);
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        console.log(`Deteniendo observación para: ${elementRef.current.id}`);
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
};