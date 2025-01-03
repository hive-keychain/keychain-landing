import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import EcosystemSection from './components/Ecosystem/EcosystemSection';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
        <EcosystemSection />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;