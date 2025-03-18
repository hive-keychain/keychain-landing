import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import EcosystemSection from './components/Ecosystem/EcosystemSection';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsOfService from './components/Pages/TermsOfService';
import Fees from './components/Pages/Fees';
import Privacy from './components/Pages/Privacy';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // Marcar que la carga inicial se ha completado
    setInitialLoadComplete(true);

    // Detectar interacción del usuario con clics
    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    // Escuchar clics para detectar interacción del usuario
    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    // Solo ejecutar en la carga inicial y si no hay hash en la URL
    if (initialLoadComplete && !userInteracted && !window.location.hash) {
      let scrollTimeout: NodeJS.Timeout | null = null;
      let scrolled = false;

      const handleScroll = () => {
        // Evitar múltiples activaciones durante el scroll
        if (scrollTimeout || scrolled) return;

        scrollTimeout = setTimeout(() => {
          // Solo activar si el usuario ha hecho un pequeño scroll desde el inicio
          if (window.scrollY > 50 && window.scrollY < 300 && !scrolled) {
            scrolled = true;
            
            // Obtener la sección Features
            const featuresSection = document.querySelector('section#why');
            if (featuresSection) {
              const headerHeight = document.querySelector('header')?.clientHeight || 0;
              const topPosition = featuresSection.getBoundingClientRect().top + window.scrollY - headerHeight;
              
              window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
              });
            }
            
            // Eliminar el listener después de activar el scroll automático
            window.removeEventListener('scroll', handleScroll);
          }
          
          scrollTimeout = null;
        }, 100);
      };

      // Añadir el listener de scroll solo si estamos en la página principal
      if (window.location.pathname === '/') {
        window.addEventListener('scroll', handleScroll);
      }

      return () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [initialLoadComplete, userInteracted]);

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <Features />
                  <Download />
                  <EcosystemSection />
                  <Team />
                  <Testimonials />
                  <Contact />
                </main>
              }
            />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/fees" element={<Fees />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;