import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  return (
      <section className="block" style={{ paddingTop: '8px' }}>
        <div className="wrap">
          <div className="stats-band reveal">
            <div className="stats-grid">
              <div className="stat">
                <div className="num">{t('stats.users.value')}</div>
                <div className="lbl">{t('stats.users.label')}</div>
              </div>
              <div className="stat">
                <div className="num">{t('stats.dapps.value')}</div>
                <div className="lbl">{t('stats.dapps.label')}</div>
              </div>
              <div className="stat">
                <div className="num">{t('stats.since.value')}</div>
                <div className="lbl">{t('stats.since.label')}</div>
              </div>
              <div className="stat">
                <div className="num">{t('stats.opensource.value')}</div>
                <div className="lbl">{t('stats.opensource.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
