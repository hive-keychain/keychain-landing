import { useEffect } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";
import { scrollToLandingSection } from "../scrollToLandingSection";

const SectionNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (location.pathname !== "/" || window.location.hash.startsWith("#invoice/")) {
      return;
    }

    // Old links used /#/?section=contact. Honor them, then drop the query so it does not stay in the address bar.
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section");
    if (!sectionId) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    scrollToLandingSection(
      sectionId,
      navigationType === "POP" || reducedMotion.matches ? "instant" : "smooth",
    );

    params.delete("section");
    const search = params.toString();
    navigate(
      { pathname: location.pathname, search: search ? `?${search}` : "" },
      { replace: true },
    );
  }, [location.pathname, location.search, navigate, navigationType]);

  return null;
};

export default SectionNavigation;
