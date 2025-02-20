import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { FloatingImage } from './FloatingImage';
import Threads from '../components/services/Threads';

const Hero = () => {
  const { t } = useLanguage();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToWhy = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const section = document.getElementById('why');
    const headerOffset = 65; // Ajusta este valor según la altura de tu header
    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-[#E5EDF5] relative h-auto md:h-screen">
      <div className='top-1/4' style={{ width: '100%', height: '400px', position: 'absolute' }}>
        <Threads
          amplitude={3}
          distance={0.3}
          enableMouseInteraction={true}
          color={[255,0,0]}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-12">
          <AnimatedSection direction="left" className="flex-1 md:text-left text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 !leading-tight">
              {t('hero.title')} {/* Traducción del título */}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-1">
              {t('hero.subtitle')} {/* Traducción del subtítulo */}
            </h2>
            <p className="text-gray-600">
              {t('hero.description')} {/* Traducción de la descripción */}
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" className="flex-1">
            <FloatingImage
              src="/heroimage.svg"
              alt={t('hero.title')} // Traducción para el atributo alt
              className="max-w-full mx-auto"
            />
          </AnimatedSection>
        </div>
      </div>
      {showScrollIndicator && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-red-600 pb-0 md:pb-20">
          <a href="#why" onClick={handleScrollToWhy}>
            <AnimatedSection direction="up" className="animate-float">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-20 h-20 mx-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </AnimatedSection>
          </a>
        </div>
      )}
      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;