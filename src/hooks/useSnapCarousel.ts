import { useCallback, useEffect, useRef, useState } from 'react';

// Mobile snap carousel behaviour, ported from the original mockup
// script for the Chains grid and the Reviews quotes (the dApp grid has
// its own instance of the same logic inside DappsSection, because its
// slides are rendered dynamically):
// - native scroll-snap track, dots under it;
// - autoplay every 4.5s, only on mobile (max-width 860px) and never
//   with prefers-reduced-motion;
// - autoplay pauses on touch / swipe / wheel / focus and resumes
//   after 6s;
// - dots are tappable and track the scroll position.
export function useSnapCarousel(slideCount: number) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const inViewRef = useRef(false);

  const slideStep = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children[0]) return track ? track.clientWidth * 0.85 : 0;
    return track.children[0].getBoundingClientRect().width + 14;
  }, []);

  const currentIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const step = slideStep();
    if (!step) return 0;
    return Math.max(
      0,
      Math.min(track.children.length - 1, Math.round(track.scrollLeft / step)),
    );
  }, [slideStep]);

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const n = track.children.length;
      if (!n) return;
      const idx = ((i % n) + n) % n;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({
        left: idx * slideStep(),
        behavior: reduced ? 'auto' : 'smooth',
      });
      window.setTimeout(() => setActive(currentIndex()), 90);
    },
    [currentIndex, slideStep],
  );

  const pause = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const resumeSoon = useCallback(() => {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, 6000);
  }, []);

  const dotClick = useCallback(
    (i: number) => {
      pause();
      goTo(i);
      resumeSoon();
    },
    [goTo, pause, resumeSoon],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const mobileMq = window.matchMedia('(max-width: 860px)');
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onScroll = () => setActive(currentIndex());
    const onInteract = () => {
      pause();
      resumeSoon();
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    ['pointerdown', 'touchstart', 'wheel'].forEach((ev) =>
      track.addEventListener(ev, onInteract, { passive: true }),
    );
    track.addEventListener('focusin', onInteract);

    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          inViewRef.current = entries[0].isIntersecting;
        },
        { threshold: 0.2 },
      );
      io.observe(track);
    } else {
      inViewRef.current = true;
    }

    const timer = window.setInterval(() => {
      if (pausedRef.current || document.hidden || !inViewRef.current) return;
      if (!mobileMq.matches || reducedMq.matches) return;
      if (track.hidden || track.offsetParent === null) return;
      const cur = currentIndex();
      goTo(cur + 1 >= track.children.length ? 0 : cur + 1);
    }, 4500);

    return () => {
      window.clearInterval(timer);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
      track.removeEventListener('scroll', onScroll);
      ['pointerdown', 'touchstart', 'wheel'].forEach((ev) =>
        track.removeEventListener(ev, onInteract),
      );
      track.removeEventListener('focusin', onInteract);
      if (io) io.disconnect();
    };
  }, [currentIndex, goTo, pause, resumeSoon]);

  // Keep the dots in sync when the slide count changes.
  useEffect(() => {
    setActive((a) => Math.min(a, Math.max(0, slideCount - 1)));
  }, [slideCount]);

  return { trackRef, active, dotClick };
}
