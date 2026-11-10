import { useLanguage } from '../context/LanguageContext';

export default function Download() {
  const { t } = useLanguage();
  return (
      <section className="block" id="download" style={{ paddingTop: '8px' }}>
        <div className="wrap">
          <div className="download reveal">
            <h2>{t('download.title')}</h2>
            <p>{t('download.subtitle')}</p>
            <figure className="download-phone" aria-label={t('media.mobile.previewLabel')}>
              <div className="phone-relocated"><img src="assets/mobile-wallet.jpg" alt={t('media.mobile.walletAlt')} width="640" height="1385" loading="lazy" /></div>
            </figure>
            <div className="dl-row">
              <div className="dl-group">
                <div className="dl-group-head">
                  <h3 className="dl-group-title">{t('download.browser.title')}</h3>
                  <span className="mc-pill">Hive + EVM</span>
                </div>
                <div className="dl-tiles"><a className="dl-tile" href="https://chromewebstore.google.com/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep" target="_blank" rel="noopener" aria-label={t('download.link.chrome')} title="Chrome · Chrome Web Store"><span className="dl-ico" aria-hidden="true"><svg width="34" height="34" viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 1 7.8 13.5l-4.5-2.6A3.8 3.8 0 0 0 12 8.2Z" fill="#ea4335" /><path d="M19.8 16.5A9 9 0 0 1 4.2 16.5l4.5-2.6a3.8 3.8 0 0 0 6.6 0Z" fill="#fbbc05" /><path d="M4.2 16.5A9 9 0 0 1 12 3v5.2a3.8 3.8 0 0 0-3.3 5.7Z" fill="#34a853" /><circle cx="12" cy="12" r="3.8" fill="#4285f4" stroke="#fff" strokeWidth="1.2" /></svg></span></a><a className="dl-tile" href="https://addons.mozilla.org/en-US/firefox/addon/hive-keychain/" target="_blank" rel="noopener" aria-label={t('download.link.firefox')} title="Firefox · Firefox Addons"><span className="dl-ico" aria-hidden="true"><img src="assets/browser-firefox.png" alt="" width="34" height="34" /></span></a><a className="dl-tile" href="https://chromewebstore.google.com/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep" target="_blank" rel="noopener" aria-label={t('download.link.brave')} title="Brave · Chrome Web Store"><span className="dl-ico" aria-hidden="true"><img src="assets/browser-brave.png" alt="" width="34" height="34" /></span></a><a className="dl-tile" href="https://chromewebstore.google.com/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep" target="_blank" rel="noopener" aria-label={t('download.link.edge')} title="Edge · Chrome Web Store"><span className="dl-ico" aria-hidden="true"><img src="assets/browser-edge.png" alt="" width="34" height="34" /></span></a><a className="dl-tile" href="https://chromewebstore.google.com/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep" target="_blank" rel="noopener" aria-label={t('download.link.opera')} title="Opera · Chrome Web Store"><span className="dl-ico" aria-hidden="true"><img src="assets/browser-opera.png" alt="" width="34" height="34" /></span></a></div>
                <p className="dl-note">{t('download.browser.note')}</p>
              </div>
              <div className="dl-divider" aria-hidden="true" />
              <div className="dl-group">
                <div className="dl-group-head">
                  <h3 className="dl-group-title">{t('download.mobile.title')}</h3>
                  <span className="mc-pill">Hive</span>
                </div>
                <div className="dl-tiles"><a className="dl-tile" href="https://apps.apple.com/us/app/hive-keychain/id1552190010" target="_blank" rel="noopener" aria-label={t('download.link.apple')} title="iPhone &amp; iPad · App Store"><span className="dl-ico" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M16.9 13.1c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-2-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.2-.9-1.7 0-3.2 1-4.1 2.5-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.5 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.5.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.6-1-2.6-3.5ZM14.4 6c.6-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1 .1 2.2-.6 2.9-1.4Z" /></svg></span></a><a className="dl-tile" href="https://play.google.com/store/apps/details?id=com.mobilekeychain" target="_blank" rel="noopener" aria-label={t('download.link.android')} title="Android · Google Play"><span className="dl-ico" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 24 24"><path d="M4 3.6v16.8c0 .6.7 1 1.2.6L14 12 5.2 3C4.7 2.6 4 3 4 3.6Z" fill="#00d2ff" /><path d="M5.2 3 14 12l3.4-3.2-8.1-5.1C7.9 2.9 6.3 2.7 5.2 3Z" fill="#00f076" /><path d="M5.2 21 14 12l3.4 3.2-8.1 5.1c-1.4.8-3 1-4.1.7Z" fill="#ff3a44" /><path d="M14 12l3.4-3.2 2.9 1.7c.9.5.9 2 0 2.5l-2.9 1.7L14 12Z" fill="#ffe900" /></svg></span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
