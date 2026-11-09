import { applyLegacyRedirect, canonicalizeLegalPath } from "./route";

export const LANDING_SECTION_KEY = "keychain:landing-section";

/**
 * Section deep links, adapted from the current landing
 * (hive-keychain/keychain-landing, normalizeLegacyUrl.ts).
 *
 * External sites (a blog post, for example) link to a section with
 *   https://hive-keychain.com/?section=download
 * Before the app boots, the section id is stored in sessionStorage
 * and the parameter is stripped from the address bar;
 * SectionNavigation then consumes it once the home page has rendered
 * and scrolls to the section. The legacy hash form
 * (#/?section=download) is accepted too.
 *
 * Invoice hashes (#invoice/...) and the old hash pages (#/terms,
 * #/fees, #/privacy, #/) are rewritten to path routes. Section capture
 * runs before that rewrite so #/?section=download still scrolls.
 */
export function normalizeLegacyUrl() {
  const url = new URL(window.location.href);
  if (
    url.hash.startsWith("#invoice/") ||
    url.hash.startsWith("#/invoice/")
  ) {
    applyLegacyRedirect();
    return;
  }

  let section = url.searchParams.get("section");

  if (!section && url.hash.includes("?")) {
    const hashParams = new URLSearchParams(
      url.hash.slice(url.hash.indexOf("?") + 1),
    );
    section = hashParams.get("section");
  }

  if (section) {
    try {
      sessionStorage.setItem(LANDING_SECTION_KEY, section);
    } catch {
      // sessionStorage can be unavailable (privacy modes); the link
      // then simply lands on the home page, like a plain visit.
    }
    if (url.searchParams.has("section")) {
      url.searchParams.delete("section");
      window.history.replaceState(
        window.history.state,
        "",
        url.pathname + url.search + url.hash,
      );
    }
  }

  applyLegacyRedirect();
  canonicalizeLegalPath();
}

/** Keep accepting section links that arrive through hash changes too. */
export function installLegacyUrlNormalizer() {
  normalizeLegacyUrl();
  window.addEventListener("hashchange", () => {
    normalizeLegacyUrl();
  });
}

export function consumeLandingSection() {
  try {
    const section = sessionStorage.getItem(LANDING_SECTION_KEY);
    if (section) sessionStorage.removeItem(LANDING_SECTION_KEY);
    return section;
  } catch {
    return null;
  }
}

/** Peek without consuming, so the router does not fight the scroll. */
export function pendingLandingSection() {
  try {
    return sessionStorage.getItem(LANDING_SECTION_KEY);
  } catch {
    return null;
  }
}
