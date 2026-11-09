import { useEffect, useState } from 'react';
import { LanguageSelector, useLanguage } from '../context/LanguageContext';

const NAV_SECTIONS: { id: string; key: string }[] = [
  { id: 'chains', key: 'nav.chains' },
  { id: 'demo', key: 'nav.demo' },
  { id: 'security', key: 'nav.security' },
  { id: 'dapps', key: 'nav.dapps' },
  { id: 'voices', key: 'nav.reviews' },
  { id: 'faq', key: 'nav.faq' },
];

export default function Header({ showAnnounce = true }: { showAnnounce?: boolean }) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scrollspy: mark the nav item of the section currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    for (const { id } of NAV_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site">
        <div className="wrap nav">
          <a className="brand" href="/"><img className="mark" src="assets/keychain-logo.png" alt="Hive Keychain logo" width="38" height="38" /><span><span className="name">Keychain</span><span className="by">powered by Hive</span></span></a>
          <nav aria-label="Main">
            {NAV_SECTIONS.map(({ id, key }) => (
              <a
                key={id}
                href={`/#${id}`}
                className={activeSection === id ? 'active' : undefined}
                aria-current={activeSection === id ? 'true' : undefined}
                onClick={() => setActiveSection(id)}
              >
                {t(key)}
              </a>
            ))}
          </nav>
          <LanguageSelector />
          <a className="btn btn-red btn-sm" href="/#download">{t('nav.download')}</a>
        </div>
      </header>
      <div className="announce" id="announceBar" hidden={!showAnnounce}>
        <div className="wrap"><span className="pill">{t('announce.pill')}</span><span>{t('announce.text')}</span><a href="/#chains">{t('announce.link')}</a></div>
      </div>
    </>
  );
}
