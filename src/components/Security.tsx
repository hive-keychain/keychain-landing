import { useLanguage } from '../context/LanguageContext';

const EXTENSION_SOURCE = 'https://github.com/hive-keychain/hive-keychain-extension';
const MOBILE_SOURCE = 'https://github.com/hive-keychain/hive-keychain-mobile';

const features = [
  {
    titleKey: 'security.encryption.title',
    bodyKey: 'security.encryption.body',
    icon: <><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  },
  {
    titleKey: 'security.ledger.title',
    bodyKey: 'security.ledger.body',
    icon: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h4M7 14h2M17 12h.01" /></>,
  },
  {
    titleKey: 'security.review.title',
    bodyKey: 'security.review.body',
    icon: <><path d="M12 3l7 3v5c0 4.6-3 8.1-7 10-4-1.9-7-5.4-7-10V6l7-3z" /><path d="m9 12 2 2 4-4" /></>,
  },
  {
    titleKey: 'security.permissions.title',
    bodyKey: 'security.permissions.body',
    icon: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1" /><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1" /></>,
  },
  {
    titleKey: 'security.opensource.title',
    bodyKey: 'security.opensource.body',
    sourceLinks: true,
    icon: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
  },
  {
    titleKey: 'security.dependencies.title',
    bodyKey: 'security.dependencies.body',
    icon: <><path d="M8 6a4 4 0 1 0 4 4" /><circle cx="8" cy="14" r="4.2" /><path d="M11.2 10.8 20 2M16.5 5.5l3 3" /></>,
  },
];

export default function Security() {
  const { t } = useLanguage();

  const renderOpenSourceBody = () =>
    t('security.opensource.body')
      .split(/(\{extension\}|\{mobile\})/g)
      .map((part, index) => {
        if (part === '{extension}') {
          return <a key={index} href={EXTENSION_SOURCE} target="_blank" rel="noopener noreferrer">{t('security.opensource.extension')}</a>;
        }
        if (part === '{mobile}') {
          return <a key={index} href={MOBILE_SOURCE} target="_blank" rel="noopener noreferrer">{t('security.opensource.mobile')}</a>;
        }
        return part;
      });

  return (
    <section className="block" id="security">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t('security.title')}</h2>
          <p>{t('security.subtitle')}</p>
        </div>
        <div className="sec-grid reveal-group">
          {features.map((feature) => (
            <div className="feat" key={feature.titleKey}>
              <div className="fico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <h3>{t(feature.titleKey)}</h3>
              <p>{feature.sourceLinks ? renderOpenSourceBody() : t(feature.bodyKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
