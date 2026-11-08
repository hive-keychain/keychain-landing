import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Chains from './components/Chains';
import ProductDemo from './components/ProductDemo';
import Security from './components/Security';
import Stats from './components/Stats';
import DappsSection from './components/DappsSection';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Download from './components/Download';
import Footer from './components/Footer';
import TermsPage from './pages/TermsPage';
import FeesPage from './pages/FeesPage';
import PrivacyPage from './pages/PrivacyPage';
import InvoicePage from './pages/InvoicePage';
import SectionNavigation from './components/SectionNavigation';
import { LanguageProvider } from './context/LanguageContext';
import { normalizeLegacyUrl, pendingLandingSection } from './normalizeLegacyUrl';
import { useReveal } from './hooks/useReveal';
import { installAppLinkInterceptor, LEGAL_TITLES, routeFromLocation } from './route';

// Home, /terms, /fees, /privacy, and /invoice/<payload> render inside
// the same page. The home markup stays mounted (only hidden) so demo
// and dApps state survive a trip to a legal page or an invoice.
// Legacy hash URLs are rewritten in normalizeLegacyUrl before paint.
const HOME_TITLE = 'Keychain, the wallet for Hive and EVM';

export default function App() {
  const [route, setRoute] = useState(routeFromLocation);
  useReveal();

  useEffect(() => {
    const sync = () => {
      normalizeLegacyUrl();
      setRoute(routeFromLocation());
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  useEffect(() => installAppLinkInterceptor(), []);

  useEffect(() => {
    const hash = window.location.hash || '';
    if (route.kind === 'invoice') {
      document.title = 'Keychain Store Invoice · Keychain';
      window.scrollTo(0, 0);
      return;
    }
    if (route.kind === 'legal') {
      document.title = LEGAL_TITLES[route.page] + ' · Keychain';
      window.scrollTo(0, 0);
      return;
    }
    document.title = HOME_TITLE;
    const sectionId = hash.startsWith('#') ? hash.slice(1).split('?')[0] : '';
    if (sectionId && !sectionId.startsWith('/')) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    // A pending ?section= deep link owns the scroll position;
    // SectionNavigation consumes it and scrolls to the section.
    if (!pendingLandingSection()) {
      window.scrollTo(0, 0);
    }
  }, [route]);

  const isLegal = route.kind === 'legal';
  const isInvoice = route.kind === 'invoice';

  return (
    <LanguageProvider>
      <SectionNavigation active={!isLegal && !isInvoice} />
      <Header showAnnounce={!isLegal && !isInvoice} />
      <main id="homeMain" hidden={isLegal || isInvoice}>
        <Hero />
        <Chains />
        <ProductDemo />
        <Security />
        <Stats />
        <DappsSection />
        <Reviews />
        <Faq />
        <Download />
      </main>
      <main className="legal-main" id="legalMain" hidden={!isLegal}>
        <div className="wrap">
          {route.kind === 'legal' && route.page === 'terms' && <TermsPage />}
          {route.kind === 'legal' && route.page === 'fees' && <FeesPage />}
          {route.kind === 'legal' && route.page === 'privacy' && <PrivacyPage />}
        </div>
      </main>
      {route.kind === 'invoice' && (
        <main id="invoiceMain">
          <InvoicePage payload={route.payload} />
        </main>
      )}
      <Footer />
    </LanguageProvider>
  );
}
