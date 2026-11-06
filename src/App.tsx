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
import { pendingLandingSection } from './normalizeLegacyUrl';
import { useReveal } from './hooks/useReveal';

// Internal hash router, ported from the original mockup: home by
// default, #/terms, #/fees and #/privacy render the legal pages inside
// the same page (the home markup stays mounted, only hidden, exactly
// like the original, so demo and dApps state survive the trip).
// Keychain Store invoice hashes (#invoice/...) take priority over
// everything and render the invoice page, like the current landing.
const LEGAL: Record<string, 'terms' | 'fees' | 'privacy'> = {
  '/terms': 'terms',
  '/fees': 'fees',
  '/privacy': 'privacy',
};
const TITLES: Record<string, string> = {
  '/terms': 'Hive Keychain Beta Terms',
  '/fees': 'Hive Keychain Beta Fees',
  '/privacy': 'Hive Keychain Beta Privacy Policy',
};
const HOME_TITLE = 'Keychain, the wallet for Hive and EVM';

function routeFromHash(): { legal: 'terms' | 'fees' | 'privacy' | null; key: string | null; invoice: boolean } {
  const hash = window.location.hash || '';
  // Invoice hashes (#invoice/...) take priority over every other
  // route and are never rewritten, exactly like the current landing:
  // its App special-cases them above its routes and its legacy URL
  // normalizer leaves them untouched.
  if (hash.startsWith('#invoice/')) {
    return { legal: null, key: null, invoice: true };
  }
  const key = hash.indexOf('#/') === 0 ? hash.slice(1) : null;
  return { legal: key && LEGAL[key] ? LEGAL[key] : null, key, invoice: false };
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash);
  useReveal();

  useEffect(() => {
    const onHash = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const hash = window.location.hash || '';
    if (route.invoice) {
      document.title = 'Keychain Store Invoice · Keychain';
      window.scrollTo(0, 0);
      return;
    }
    if (route.legal) {
      document.title = TITLES[route.key!] + ' · Keychain';
      window.scrollTo(0, 0);
      return;
    }
    document.title = HOME_TITLE;
    if (route.key === '/' || hash === '' || hash === '#') {
      // A pending ?section= deep link owns the scroll position;
      // SectionNavigation consumes it and scrolls to the section.
      if (!pendingLandingSection()) {
        window.scrollTo(0, 0);
      }
    } else if (hash.charAt(0) === '#') {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView();
    }
  }, [route]);

  const isLegal = route.legal !== null;
  const isInvoice = route.invoice;

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
          {route.legal === 'terms' && <TermsPage />}
          {route.legal === 'fees' && <FeesPage />}
          {route.legal === 'privacy' && <PrivacyPage />}
        </div>
      </main>
      {isInvoice && (
        <main id="invoiceMain">
          <InvoicePage />
        </main>
      )}
      <Footer />
    </LanguageProvider>
  );
}
