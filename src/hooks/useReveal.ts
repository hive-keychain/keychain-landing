import { useEffect } from 'react';

// Reveal on scroll, ported from the original mockup script:
// IntersectionObserver, transform/opacity only, threshold 0.12 with a
// -36px bottom root margin. Elements with .reveal or .reveal-group get
// .in when they enter. With reduced motion (or no IntersectionObserver)
// everything is revealed at once.
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-group');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
