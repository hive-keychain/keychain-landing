import React, { useEffect } from 'react';
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
  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        // Detectar si el usuario ha comenzado a hacer scroll
        if (window.scrollY > 50) {
          // Obtener la siguiente sección después del Hero
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            const offset = 0; // Ajusta este valor si tienes un header fijo
            const topPosition = nextSection.getBoundingClientRect().top + window.scrollY - offset;

            // Desplazar automáticamente a la siguiente sección
            window.scrollTo({
              top: topPosition,
              behavior: 'smooth',
            });

            // Remover el evento de scroll para evitar conflictos
            window.removeEventListener('scroll', handleScroll);
          }
        }

        // Resetear el estado de scroll después de un tiempo
        setTimeout(() => {
          isScrolling = false;
        }, 200);
      }
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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