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
import Invoice from './components/Pages/Invoice';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    setInitialLoadComplete(true);

    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    document.addEventListener('click', handleUserInteraction);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (initialLoadComplete && !userInteracted && !window.location.hash) {
      let scrollTimeout: NodeJS.Timeout | null = null;
      let scrolled = false;

      const handleScroll = () => {
        if (scrollTimeout || scrolled) return;

        scrollTimeout = setTimeout(() => {
          if (window.scrollY > 50 && window.scrollY < 300 && !scrolled) {
            scrolled = true;
            
            const featuresSection = document.querySelector('section#why');
            if (featuresSection) {
              const headerHeight = document.querySelector('header')?.clientHeight || 0;
              const topPosition = featuresSection.getBoundingClientRect().top + window.scrollY - headerHeight;
              
              window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
              });
            }
            
            window.removeEventListener('scroll', handleScroll);
          }
          
          scrollTimeout = null;
        }, 100);
      };

      if (window.location.pathname === '/') {
        window.addEventListener('scroll', handleScroll);
      }

      return () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [initialLoadComplete, userInteracted]);

  // Check if the current URL is an invoice URL
  const isInvoicePage = currentHash.startsWith('#invoice/');

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          {isInvoicePage ? (
            <Invoice />
          ) : (
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
          )}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;