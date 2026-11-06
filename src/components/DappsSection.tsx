import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dapp, DappGroup } from '../lib/dapps';
import { DAPP_NETWORKS, catLabel, loadChainDapps } from '../lib/dapps';
import { FALLBACK_HIVE } from '../data/fallbackHive';
import CarouselDots from './CarouselDots';

// Works with your dApps, ported from the original mockup script.
// Behaviour notes (identical to the original):
// - one category visible at a time, chips generated from the response;
// - cards link to the dApp url, or to mobileUrl on small screens when
//   the dApp provides one;
// - a broken icon removes itself, leaving the initial-letter tile;
// - the empty state appears ONLY when the API returns 200 with [];
// - Hive falls back silently to the embedded snapshot when every fetch
//   attempt fails (not cached, so a later visit retries the live API);
// - other chains stay in the loading state and re-check every 10s.
type ViewState = 'loading' | 'content' | 'empty';

export default function DappsSection() {
  const [chain, setChain] = useState('hive');
  const [label, setLabel] = useState('Hive');
  const [groups, setGroups] = useState<DappGroup[] | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [view, setView] = useState<ViewState>('loading');
  const [isSmall, setIsSmall] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 860px)').matches,
  );
  const [activeDot, setActiveDot] = useState(0);

  const cacheRef = useRef<Record<string, DappGroup[]>>({});
  const requestIdRef = useRef(0);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const inViewRef = useRef(false);

  const validGroups = useMemo(
    () => (groups ? groups.filter((g) => g && g.dapps && g.dapps.length) : []),
    [groups],
  );
  const currentGroup = useMemo(() => {
    if (!validGroups.length) return null;
    return validGroups.find((g) => g.category === category) || validGroups[0];
  }, [validGroups, category]);
  const cardCount = currentGroup ? currentGroup.dapps.length : 0;

  const renderGroups = useCallback((data: DappGroup[]) => {
    setGroups(data);
    const valid = data.filter((g) => g && g.dapps && g.dapps.length);
    if (!valid.length) {
      setCategory(null);
      setView('empty');
      return;
    }
    setCategory((prev) =>
      prev && valid.some((g) => g.category === prev) ? prev : valid[0].category,
    );
    setView('content');
  }, []);

  const load = useCallback(
    (nextChain: string, nextLabel: string, force: boolean) => {
      setChain(nextChain);
      setLabel(nextLabel);
      setCategory(null);
      const id = ++requestIdRef.current;
      if (!force && cacheRef.current[nextChain]) {
        renderGroups(cacheRef.current[nextChain]);
        return;
      }
      setView('loading');
      setActiveDot(0);
      loadChainDapps(nextChain, () => id === requestIdRef.current).then((data) => {
        if (data === null || id !== requestIdRef.current) return;
        // The embedded fallback is handed back for Hive only; the
        // original does not cache it, so picking Hive again later
        // tries the live API first. Live data (including a real empty
        // array) is cached.
        const isFallback = data === FALLBACK_HIVE;
        if (!isFallback) cacheRef.current[nextChain] = data;
        renderGroups(data);
      });
    },
    [renderGroups],
  );

  // Initial load (Hive), exactly like the original script. Unmounting
  // invalidates the in-flight request id so a stale result is dropped.
  useEffect(() => {
    load('hive', 'Hive', false);
    return () => {
      requestIdRef.current++;
    };
  }, [load]);

  // Track the small-screen media query for mobileUrl hrefs.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const onChange = () => setIsSmall(mq.matches);
    setIsSmall(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else if (mq.removeListener) mq.removeListener(onChange);
    };
  }, []);

  // ---- mobile carousel for the dApp grid (same logic as the other
  // sections; slides are dynamic, so dots rebuild with the card count)
  const slideStep = useCallback(() => {
    const grid = gridRef.current;
    if (!grid || !grid.children[0]) return grid ? grid.clientWidth * 0.85 : 0;
    return grid.children[0].getBoundingClientRect().width + 14;
  }, []);
  const currentIndex = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return 0;
    const step = slideStep();
    if (!step) return 0;
    return Math.max(
      0,
      Math.min(grid.children.length - 1, Math.round(grid.scrollLeft / step)),
    );
  }, [slideStep]);
  const goTo = useCallback(
    (i: number) => {
      const grid = gridRef.current;
      if (!grid) return;
      const n = grid.children.length;
      if (!n) return;
      const idx = ((i % n) + n) % n;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      grid.scrollTo({ left: idx * slideStep(), behavior: reduced ? 'auto' : 'smooth' });
      window.setTimeout(() => setActiveDot(currentIndex()), 90);
    },
    [currentIndex, slideStep],
  );
  const pauseAuto = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 6000);
  }, []);

  // Reset scroll/dots whenever the rendered cards change.
  useEffect(() => {
    const grid = gridRef.current;
    if (grid) grid.scrollLeft = 0;
    setActiveDot(0);
  }, [currentGroup, view]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const smallMq = window.matchMedia('(max-width: 860px)');
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onScroll = () => setActiveDot(currentIndex());
    grid.addEventListener('scroll', onScroll, { passive: true });
    ['pointerdown', 'touchstart', 'wheel'].forEach((ev) =>
      grid.addEventListener(ev, pauseAuto, { passive: true }),
    );
    grid.addEventListener('focusin', pauseAuto);
    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          inViewRef.current = entries[0].isIntersecting;
        },
        { threshold: 0.2 },
      );
      io.observe(grid);
    } else {
      inViewRef.current = true;
    }
    const timer = window.setInterval(() => {
      if (pausedRef.current || document.hidden || !inViewRef.current) return;
      if (!smallMq.matches || reducedMq.matches) return;
      if (grid.hidden || grid.children.length < 2) return;
      const cur = currentIndex();
      goTo(cur + 1 >= grid.children.length ? 0 : cur + 1);
    }, 4500);
    return () => {
      window.clearInterval(timer);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      grid.removeEventListener('scroll', onScroll);
      ['pointerdown', 'touchstart', 'wheel'].forEach((ev) =>
        grid.removeEventListener(ev, pauseAuto),
      );
      grid.removeEventListener('focusin', pauseAuto);
      if (io) io.disconnect();
    };
  }, [currentIndex, goTo, pauseAuto]);

  const onNetClick = (nextChain: string, nextLabel: string) => {
    if (nextChain === chain && groups) return;
    load(nextChain, nextLabel, false);
  };

  const hrefFor = (d: Dapp) =>
    isSmall && d.mobileUrl ? d.mobileUrl : d.url || '#';

  return (
    <section className="block alt" id="dapps">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Works with your dApps</h2>
          <p>Connect once and keep using the apps you already use. Hive dApps and EVM dApps, all from the same wallet.</p>
        </div>
        <div className="tabs dapp-nets" role="tablist" aria-label="Network" id="dappNets">
          {DAPP_NETWORKS.map((n) => (
            <button
              key={n.chain}
              type="button"
              role="tab"
              aria-selected={chain === n.chain}
              data-chain={n.chain}
              data-label={n.label}
              onClick={() => onNetClick(n.chain, n.label)}
            >
              {n.label}
            </button>
          ))}
        </div>

        <div className="cat-chips" id="dappCats" role="tablist" aria-label="dApp categories" hidden={view !== 'content'}>
          {validGroups.map((g) => (
            <button
              key={g.category}
              type="button"
              role="tab"
              className="cat-chip"
              data-cat={g.category}
              aria-selected={g.category === (currentGroup ? currentGroup.category : category)}
              onClick={() => setCategory(g.category)}
            >
              {catLabel(g.category)}
              <span className="count">{g.dapps.length}</span>
            </button>
          ))}
        </div>

        <p className="dapp-status" id="dappStatus" aria-live="polite" hidden={view !== 'loading'}>
          Loading dApps
        </p>

        <div className="dapp-grid reveal-group" id="dappGrid" ref={gridRef}>
          {view === 'loading' &&
            Array.from({ length: 6 }, (_, i) => (
              <div className="dapp-skel" aria-hidden="true" key={i}>
                <span className="sk-ico" />
                <span className="sk-lines">
                  <span className="sk-line short" />
                  <span className="sk-line" />
                  <span className="sk-line" />
                </span>
              </div>
            ))}
          {view === 'content' &&
            currentGroup &&
            currentGroup.dapps.map((d, i) => {
              const name = d.name || '';
              const initial = name ? name.charAt(0).toUpperCase() : '?';
              return (
                <a
                  className="dapp"
                  key={name + '-' + i}
                  href={hrefFor(d)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-url={d.url || ''}
                  data-mobile-url={d.mobileUrl || ''}
                >
                  <span className="dico">
                    <span className="dico-initial" aria-hidden="true">
                      {initial}
                    </span>
                    {d.icon ? (
                      <img
                        src={d.icon}
                        alt=""
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.remove();
                        }}
                      />
                    ) : null}
                  </span>
                  <span>
                    <h3>{name}</h3>
                    <p>{d.description || ''}</p>
                  </span>
                </a>
              );
            })}
        </div>
        <CarouselDots
          count={view === 'content' ? cardCount : 0}
          active={activeDot}
          onDotClick={(i) => {
            pauseAuto();
            goTo(i);
          }}
          hidden={view !== 'content' || cardCount < 2}
        />

        <div className="dapp-state" id="dappEmpty" hidden={view !== 'empty'}>
          <h3 id="dappEmptyTitle">
            {groups && validGroups.length === 0
              ? 'No dApps listed on ' + label + ' yet'
              : 'No dApps listed yet'}
          </h3>
          <p id="dappEmptyText">
            {groups && validGroups.length === 0
              ? 'Keychain already works on ' +
                label +
                '. Listings will appear here on their own as soon as they are added to the Keychain ecosystem.'
              : 'Listings will appear here as soon as they are added to the Keychain ecosystem.'}
          </p>
        </div>
      </div>
    </section>
  );
}
