import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';
import EvmConnectionDemo from './EvmConnectionDemo';
import HiveDemo from './HiveDemo';

type ConnectionType = 'evm' | 'hive';
type PreviewId = 'accounts' | 'portfolio' | 'swaps';

interface PreviewMedia {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  altKey: string;
  width: number;
  height: number;
}

interface PreviewConfig {
  id: PreviewId;
  tabKey: string;
  titleKey: string;
  bodyKey: string;
  featureKeys: [string, string, string];
  media?: PreviewMedia;
}

const PREVIEWS: PreviewConfig[] = [
  {
    id: 'accounts',
    tabKey: 'demo.preview.accounts.tab',
    titleKey: 'demo.preview.accounts.title',
    bodyKey: 'demo.preview.accounts.body',
    featureKeys: [
      'demo.preview.accounts.feature1',
      'demo.preview.accounts.feature2',
      'demo.preview.accounts.feature3',
    ],
  },
  {
    id: 'portfolio',
    tabKey: 'demo.preview.portfolio.tab',
    titleKey: 'demo.preview.portfolio.title',
    bodyKey: 'demo.preview.portfolio.body',
    featureKeys: [
      'demo.preview.portfolio.feature1',
      'demo.preview.portfolio.feature2',
      'demo.preview.portfolio.feature3',
    ],
  },
  {
    id: 'swaps',
    tabKey: 'demo.preview.swaps.tab',
    titleKey: 'demo.preview.swaps.title',
    bodyKey: 'demo.preview.swaps.body',
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

function PreviewVisual({ preview }: { preview: PreviewConfig }) {
  const { t } = useLanguage();
  if (preview.media?.type === 'image') {
    return <img className="preview-media" src={preview.media.src} alt={t(preview.media.altKey)} width={preview.media.width} height={preview.media.height} />;
  }
  if (preview.media?.type === 'video') {
    return (
      <video className="preview-media" controls muted playsInline preload="metadata" poster={preview.media.poster} width={preview.media.width} height={preview.media.height} aria-label={t(preview.media.altKey)}>
        <source src={preview.media.src} type="video/webm" />
      </video>
    );
  }
  return (
    <div className={`preview-fallback preview-${preview.id}`} aria-hidden="true">
      <div className="preview-orbit orbit-one" />
      <div className="preview-orbit orbit-two" />
      <span className="preview-mark"><img src="assets/keychain-logo.png" alt="" /></span>
      <div className="preview-pills">
        <span>{t(preview.featureKeys[0])}</span>
        <span>{t(preview.featureKeys[1])}</span>
        <span>{t(preview.featureKeys[2])}</span>
      </div>
    </div>
  );
}

export default function ProductDemo() {
  const { t } = useLanguage();
  const [connection, setConnection] = useState<ConnectionType>('evm');
  const [previewId, setPreviewId] = useState<PreviewId>('accounts');
  const connectionRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const previewRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const preview = PREVIEWS.find((item) => item.id === previewId) ?? PREVIEWS[0];

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

        <div className="preview-tabs" role="tablist" aria-label={t('demo.explore.selectorLabel')}>
          {PREVIEWS.map((item) => (
            <button
              key={item.id}
              ref={(element) => { previewRefs.current[item.id] = element; }}
              type="button"
              role="tab"
              id={`preview-tab-${item.id}`}
              aria-selected={previewId === item.id}
              aria-controls={`preview-panel-${item.id}`}
              tabIndex={previewId === item.id ? 0 : -1}
              onClick={() => setPreviewId(item.id)}
              onKeyDown={(event) => handleTabKeys(
                event,
                PREVIEWS.map(({ id }) => id),
                previewId,
                setPreviewId,
                (next) => previewRefs.current[next]?.focus(),
              )}
            >
              {t(item.tabKey)}
            </button>
          ))}
        </div>

        <div
          className="product-preview reveal"
          id={`preview-panel-${preview.id}`}
          role="tabpanel"
          aria-labelledby={`preview-tab-${preview.id}`}
        >
          <PreviewVisual preview={preview} />
          <div className="demo-copy preview-copy">
            <h3>{t(preview.titleKey)}</h3>
            <p>{t(preview.bodyKey)}</p>
            <ul>
              {preview.featureKeys.map((key) => <li key={key}><CheckIcon /> {t(key)}</li>)}
            </ul>
          </div>
        </div>

        <div className="demo-cta reveal">
          <a className="btn btn-red" href="/#download">{t('demo.cta')}</a>
        </div>
      </div>
    </section>
  );
}
