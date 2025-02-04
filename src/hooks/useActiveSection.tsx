import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px', // Considera la sección activa cuando está a la mitad de la pantalla
      threshold: 0.1 // Ajusta el umbral para mejorar la detección
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Sección activa detectada: ${entry.target.id}`);
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observar todas las secciones
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      console.log(`Observando sección: ${section.id}`);
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};