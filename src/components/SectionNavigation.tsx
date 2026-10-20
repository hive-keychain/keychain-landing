import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { consumeLandingSection } from "../normalizeLegacyUrl";
import { scrollToLandingSection } from "../scrollToLandingSection";

const SectionNavigation = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (location.pathname !== "/" || window.location.hash.startsWith("#invoice/")) {
      return;
    }

    const sectionId = consumeLandingSection();
    if (!sectionId) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    scrollToLandingSection(
      sectionId,
      navigationType === "POP" || reducedMotion.matches ? "instant" : "smooth",
    );
  }, [location.pathname, navigationType]);

  return null;
};

export default SectionNavigation;
