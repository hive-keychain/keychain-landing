import { useEffect, useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Download from "./components/Download";
import EcosystemSection from "./components/Ecosystem/EcosystemSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Fees from "./components/Pages/Fees";
import Invoice from "./components/Pages/Invoice";
import Privacy from "./components/Pages/Privacy";
import TermsOfService from "./components/Pages/TermsOfService";
import SecuritySection from "./components/SecuritySection";
import SocialProofSection from "./components/SocialProofSection";
import SupportedNetworksSection from "./components/SupportedNetworksSection";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import UseCasesSection from "./components/UseCasesSection";

import BetaFees from "./components/Pages/BetaFees";
import BetaPrivacy from "./components/Pages/BetaPrivacy";
import BetaTermsOfService from "./components/Pages/BetaTermsOfService";
import { LanguageProvider } from "./context/LanguageContext";

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

    document.addEventListener("click", handleUserInteraction);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("hashchange", handleHashChange);
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

            const featuresSection = document.querySelector("section#why");
            if (featuresSection) {
              const headerHeight =
                document.querySelector("header")?.clientHeight || 0;
              const topPosition =
                featuresSection.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

              window.scrollTo({
                top: topPosition,
                behavior: "smooth",
              });
            }

            window.removeEventListener("scroll", handleScroll);
          }

          scrollTimeout = null;
        }, 100);
      };

      if (window.location.pathname === "/") {
        window.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [initialLoadComplete, userInteracted]);

  // Check if the current URL is an invoice URL
  const isInvoicePage = currentHash.startsWith("#invoice/");

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
                    <SecuritySection />
                    <SupportedNetworksSection />
                    <UseCasesSection />
                    <SocialProofSection />
                    <Download />
                    <EcosystemSection />
                    <Team />
                    <Testimonials />
                    <FaqSection />
                    <Contact />
                  </main>
                }
              />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/terms-beta" element={<BetaTermsOfService />} />
              <Route path="/privacy-beta" element={<BetaPrivacy />} />
              <Route path="/fees-beta" element={<BetaFees />} />
            </Routes>
          )}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
