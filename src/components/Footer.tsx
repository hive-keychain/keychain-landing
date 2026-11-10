import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
      <footer className="site">
        <div className="wrap foot">
          <div className="foot-brand-block">
            <a className="foot-brand-head" href="/"><img src="assets/keychain-logo.png" alt={t('brand.logoAlt')} width="40" height="40" /><span><span className="fname">Keychain</span><span className="fby">powered by Hive</span></span></a>
            <nav className="foot-socials" aria-label={t('footer.socials')}><a href="https://peakd.com/@keychain" target="_blank" rel="noopener" aria-label={t('footer.social.hive')} title="Hive"><svg width="18" height="16" viewBox="0 0 220 190" fill="currentColor" aria-hidden="true"><path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" /><path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" /></svg></a><a href="https://x.com/hivekeychain" target="_blank" rel="noopener" aria-label={t('footer.social.x')} title="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" /></svg></a><a href="https://discord.gg/M3xsZXSVQK" target="_blank" rel="noopener" aria-label={t('footer.social.discord')} title="Discord"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg></a><a href="https://github.com/hive-keychain" target="_blank" rel="noopener" aria-label={t('footer.social.github')} title="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a></nav>
            <p className="foot-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z" /><path d="m9 11.5 2 2 4-4.5" /></svg><span>{t('footer.badge')}</span></p>
            <p className="foot-copy">{t('footer.copyright')}</p>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>{t('footer.product')}</h4>
              <nav aria-label={t('footer.product')}><a href="/#chains">{t('nav.chains')}</a><a href="/#security">{t('nav.security')}</a><a href="/#dapps">{t('nav.dapps')}</a><a href="/#faq">{t('nav.faq')}</a></nav>
            </div>
            <div className="foot-col">
              <h4>{t('footer.resources')}</h4>
              <nav aria-label={t('footer.resources')}><a href="https://www.npmjs.com/package/keychain-sdk" target="_blank" rel="noopener">Keychain SDK</a><a href="https://play.hive-keychain.com/" target="_blank" rel="noopener">Keychain Playground</a><a href="https://multisig-doc.hive-keychain.com/" target="_blank" rel="noopener">Hive Multisig</a><a href="https://qr.hive-keychain.com/" target="_blank" rel="noopener">Hive QR Code Generator</a><a href="https://stores.hive-keychain.com/" target="_blank" rel="noopener">Keychain Store Map</a></nav>
            </div>
            <div className="foot-col">
              <h4>{t('footer.legal')}</h4>
              <nav aria-label={t('footer.legal')}><a href="/privacy">{t('footer.privacy')}</a><a href="/terms">{t('footer.terms')}</a><a href="/fees">{t('footer.fees')}</a></nav>
            </div>
          </div>
        </div>
      </footer>
  );
}
