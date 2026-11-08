import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1>{t('hero.title.before')} <span className="accent">Hive</span> {t('hero.title.after')}</h1>
              <p className="sub">{t('hero.subtitle')}</p>
              <div className="hero-ctas"><a className="btn btn-red" href="/#download">{t('hero.cta.download')}</a><a className="btn btn-ghost" href="/#demo">{t('hero.cta.demo')}</a></div>
              <div className="hero-ratings" aria-label="App store ratings"><span className="stars" aria-hidden="true">★★★★★</span><span>4.8 · Chrome Web Store</span><span className="sep">·</span><span>4.7 · App Store & Google Play</span></div>
              <div className="hero-meta"><span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg> You hold your keys</span><span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg> Hive plus 7 networks ready to use</span><span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg> Free and open source</span></div>
            </div>
            <div className="ext-stage reveal">
              <div className="hero-visual">
                <div className="ext">
                  <div className="browser-bar"><span className="b-dots"><i /><i /><i /></span><span className="b-url"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>peakd.com</span><span className="b-tool"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L14 13l-3-3 3.7-3.7z" /></svg></span><span className="b-tool active"><img src="assets/keychain-logo.png" alt="" width="22" height="22" /></span></div>
                  <figure className="ext-shot"><img src="assets/extension-accounts.jpg" alt="Hive Keychain browser extension with the Accounts panel open: the current account in the header, HIVE and EVM filters, and the list of Hive and EVM accounts with add account and export" width="866" height="1198" /></figure>
                </div>
                <figure className="phone-shot"><img src="assets/mobile-wallet.jpg" alt="Hive Keychain mobile app on the @keychain account: voting mana and resource credits at 100%, estimated account value $29,843, with HIVE, HBD and Hive Power balances" width="640" height="1385" loading="lazy" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
