import { useEffect } from "react";
import { consumeLandingSection } from "../normalizeLegacyUrl";
import { scrollToLandingSection } from "../scrollToLandingSection";

/**
 * Consumes a stored ?section= target once the home page is shown and
 * scrolls to it. Adapted from the current landing's SectionNavigation
 * (which reads the router location; this app routes by hash, so the
 * parent passes whether the home page is active).
 */
export default function SectionNavigation({ active }: { active: boolean }) {
  useEffect(() => {
    if (!active || window.location.hash.startsWith("#invoice/")) {
      return;
    }

    const sectionId = consumeLandingSection();
    if (!sectionId) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    scrollToLandingSection(
      sectionId,
      reducedMotion.matches ? "instant" : "smooth",
    );
  }, [active]);

  return null;
}
