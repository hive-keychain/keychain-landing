import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const SectionNavigation = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const { language } = useLanguage();

  useEffect(() => {
    if (location.pathname !== "/" || window.location.hash.startsWith("#invoice/")) {
      return;
    }

    // HashRouter keeps this query inside the fragment: /#/?section=download.
    const sectionId = new URLSearchParams(location.search).get("section");
    if (!sectionId) return;

    const section = document.getElementById(sectionId);
    if (!section || section.tagName !== "SECTION") {
      console.warn(`Unknown landing section: ${sectionId}`);
      return;
    }

    const header = document.querySelector("header");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let interrupted = false;

    const scrollToSection = (behavior: ScrollBehavior) => {
      if (interrupted) return;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        (header?.getBoundingClientRect().height ?? 0);
      window.scrollTo({ top: Math.max(0, top), behavior });
    };

    // Keep the destination aligned while images and translated content settle.
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
      scrollToSection(
        navigationType === "POP" || reducedMotion.matches ? "instant" : "smooth",
      );
    });

    const interrupt = () => {
      interrupted = true;
      observer.disconnect();
    };
    const events = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    events.forEach((event) => {
      window.addEventListener(event, interrupt, { passive: true });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      events.forEach((event) => window.removeEventListener(event, interrupt));
    };
  }, [location.key, location.pathname, location.search, navigationType, language]);

  return null;
};

export default SectionNavigation;
