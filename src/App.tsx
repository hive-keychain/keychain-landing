import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import EcosystemSection from './components/Ecosystem/EcosystemSection';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsOfService from './components/Pages/TermsOfService';
import Fees from './components/Pages/Fees';
import Privacy from './components/Pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Download />
              <EcosystemSection />
              <Team />
              <Contact />
            </main>
          } />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/fees" element={<Fees />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;