let cancelActiveScroll: (() => void) | null = null;

/** Scroll a landing <section> into view under the fixed header, then keep it aligned while layout settles. */
export function scrollToLandingSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  cancelActiveScroll?.();
  cancelActiveScroll = null;

  const section = document.getElementById(sectionId);
  if (!section || section.tagName !== "SECTION") {
    console.warn(`Unknown landing section: ${sectionId}`);
    return;
  }

  const header = document.querySelector("header");
  let interrupted = false;

  const scrollToSection = (nextBehavior: ScrollBehavior) => {
    if (interrupted) return;
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      (header?.getBoundingClientRect().height ?? 0);
    window.scrollTo({ top: Math.max(0, top), behavior: nextBehavior });
  };

  // The first observation is the current size; later ones are images and translated copy settling.
  let initialResize = true;
  const observer = new ResizeObserver(() => {
    if (initialResize) {
      initialResize = false;
      return;
    }
    scrollToSection("instant");
  });
  document.querySelectorAll("main section").forEach((element) => {
    observer.observe(element);
  });
  if (header) observer.observe(header);

  const frame = requestAnimationFrame(() => {
    scrollToSection(behavior);
  });

  const interrupt = () => {
    interrupted = true;
    observer.disconnect();
    cancelActiveScroll = null;
  };
  const events = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
  events.forEach((event) => {
    window.addEventListener(event, interrupt, { passive: true });
  });

  cancelActiveScroll = () => {
    interrupted = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    events.forEach((event) => window.removeEventListener(event, interrupt));
  };
}
