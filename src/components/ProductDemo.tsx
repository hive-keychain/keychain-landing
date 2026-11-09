import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import EvmConnectionDemo from './EvmConnectionDemo';
import HiveDemo from './HiveDemo';

type ConnectionType = 'evm' | 'hive';
type ShowcaseId = 'portfolio' | 'swaps';

interface ShowcaseMedia {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  mimeType?: 'video/mp4' | 'video/webm';
  altKey: string;
  width: number;
  height: number;
}

interface ShowcaseConfig {
  id: ShowcaseId;
  labelKey: string;
  titleKey: string;
  descriptionKey: string;
  featureKeys: [string, string, string];
  media?: ShowcaseMedia;
}

const SHOWCASES: ShowcaseConfig[] = [
  {
    id: 'portfolio',
    labelKey: 'demo.preview.portfolio.label',
    titleKey: 'demo.preview.portfolio.title',
    descriptionKey: 'demo.preview.portfolio.description',
    featureKeys: [
      'demo.preview.portfolio.feature1',
      'demo.preview.portfolio.feature2',
      'demo.preview.portfolio.feature3',
    ],
  },
  {
    id: 'swaps',
    labelKey: 'demo.preview.swaps.label',
    titleKey: 'demo.preview.swaps.title',
    descriptionKey: 'demo.preview.swaps.description',
    featureKeys: [
      'demo.preview.swaps.feature1',
      'demo.preview.swaps.feature2',
      'demo.preview.swaps.feature3',
    ],
  },
];

function CheckIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>;
}

function HiveMark({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 220 190" fill="currentColor" aria-hidden="true">
      <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
      <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
    </svg>
  );
}

function EvmMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="m12 2-7 10 7 4 7-4-7-10Z" /><path d="m5 13 7 9 7-9-7 4-7-4Z" />
    </svg>
  );
}

function DemoHeader({ children, status }: { children: ReactNode; status: string }) {
  return <div className="d-head"><span className="d-net">{children}</span><span className="d-live"><span aria-hidden="true">●</span> {status}</span></div>;
}

function handleTabKeys<T extends string>(
  event: KeyboardEvent<HTMLButtonElement>,
  ids: readonly T[],
  active: T,
  select: (id: T) => void,
  focusButton: (id: T) => void,
) {
  const current = ids.indexOf(active);
  let next = current;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % ids.length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current - 1 + ids.length) % ids.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = ids.length - 1;
  else return;
  event.preventDefault();
  select(ids[next]);
  focusButton(ids[next]);
}

function ShowcaseVisual({ showcase }: { showcase: ShowcaseConfig }) {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pauseForReducedMotion = () => {
      if (reducedMotion.matches) video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    });

    pauseForReducedMotion();
    reducedMotion.addEventListener('change', pauseForReducedMotion);
    observer.observe(video);
    return () => {
      reducedMotion.removeEventListener('change', pauseForReducedMotion);
      observer.disconnect();
    };
  }, []);

  if (showcase.media?.type === 'image') {
    return <img className="preview-media" src={showcase.media.src} alt={t(showcase.media.altKey)} width={showcase.media.width} height={showcase.media.height} />;
  }
  if (showcase.media?.type === 'video') {
    return (
      <video ref={videoRef} className="preview-media" controls muted playsInline preload="metadata" poster={showcase.media.poster} width={showcase.media.width} height={showcase.media.height} aria-label={t(showcase.media.altKey)}>
        <source src={showcase.media.src} type={showcase.media.mimeType ?? 'video/mp4'} />
      </video>
    );
  }
  return (
    <div className={`preview-fallback preview-${showcase.id}`} aria-hidden="true">
      <div className="preview-orbit orbit-one" />
      <div className="preview-orbit orbit-two" />
      <span className="preview-mark"><img src="assets/keychain-logo.png" alt="" /></span>
    </div>
  );
}

function ProductShowcase({ showcase }: { showcase: ShowcaseConfig }) {
  const { t } = useLanguage();

  return (
    <article className={`product-showcase showcase-${showcase.id} reveal`}>
      <div className="showcase-media-wrap">
        <ShowcaseVisual showcase={showcase} />
      </div>
      <div className="demo-copy showcase-copy">
        <p className="showcase-eyebrow">{t(showcase.labelKey)}</p>
        <h3>{t(showcase.titleKey)}</h3>
        <p>{t(showcase.descriptionKey)}</p>
        <ul>
          {showcase.featureKeys.map((key) => <li key={key}><CheckIcon /> {t(key)}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function ProductDemo() {
  const { t } = useLanguage();
  const [connection, setConnection] = useState<ConnectionType>('evm');
  const connectionRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  return (
    <section className="block" id="demo">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t('demo.title')}</h2>
          <p>{t('demo.subtitle')}</p>
        </div>

        <div className="demo-shell connection-shell reveal">
          <div className="demo-card connection-card">
            <div className="connection-tabs" role="tablist" aria-label={t('demo.connect.selectorLabel')}>
              {(['evm', 'hive'] as ConnectionType[]).map((id) => (
                <button
                  key={id}
                  ref={(element) => { connectionRefs.current[id] = element; }}
                  type="button"
                  role="tab"
                  id={`connection-tab-${id}`}
                  aria-selected={connection === id}
                  aria-controls={`connection-panel-${id}`}
                  tabIndex={connection === id ? 0 : -1}
                  onClick={() => setConnection(id)}
                  onKeyDown={(event) => handleTabKeys(
                    event,
                    ['evm', 'hive'],
                    connection,
                    setConnection,
                    (next) => connectionRefs.current[next]?.focus(),
                  )}
                >
                  {t(`demo.connect.${id}`)}
                </button>
              ))}
            </div>
            <div className="connection-card-head">
              <DemoHeader status={t('demo.connect.live')}>
                <span className={`connection-icon ${connection}`}>
                  {connection === 'evm' ? <EvmMark /> : <HiveMark size={14} />}
                </span>
                {t(`demo.${connection}.header`)}
              </DemoHeader>
            </div>
            <div
              id={`connection-panel-${connection}`}
              role="tabpanel"
              aria-labelledby={`connection-tab-${connection}`}
            >
              {connection === 'evm' ? <EvmConnectionDemo /> : <HiveDemo />}
            </div>
          </div>

          <div className="demo-copy connection-copy">
            <h3>{t('demo.connect.title')}</h3>
            <p>{t('demo.connect.subtitle')}</p>
            <ul>
              <li><CheckIcon /> {t('demo.connect.benefit1')}</li>
              <li><CheckIcon /> {t('demo.connect.benefit2')}</li>
              <li><CheckIcon /> {t('demo.connect.benefit3')}</li>
            </ul>
            <p className="download-note">
              {t('demo.connect.downloadBefore')} <a href="/#download">{t('demo.connect.downloadLink')}</a>
            </p>
          </div>
        </div>

        <div className="explore-head reveal">
          <h3>{t('demo.explore.title')}</h3>
          <p>{t('demo.explore.subtitle')}</p>
        </div>

        <div className="explore-showcases">
          {SHOWCASES.map((showcase) => <ProductShowcase key={showcase.id} showcase={showcase} />)}
        </div>

        <div className="demo-cta reveal">
          <a className="btn btn-red" href="/#download">{t('demo.explore.cta')}</a>
        </div>
      </div>
    </section>
  );
}
