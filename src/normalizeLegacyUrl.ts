const PAGE_PATHS = new Set([
  "terms",
  "privacy",
  "fees",
  "terms-beta",
  "privacy-beta",
  "fees-beta",
]);

const LANDING_SECTION_KEY = "keychain:landing-section";

/**
 * Rewrite old HashRouter URLs before the app boots.
 * /#/fees -> /fees, /#/?section=contact -> / (scroll happens after render).
 * Invoice hashes (#invoice/...) stay untouched.
 */
export function normalizeLegacyUrl() {
  const url = new URL(window.location.href);
  if (url.hash.startsWith("#invoice/")) return;

  const sectionFromSearch = url.searchParams.get("section");
  let section = sectionFromSearch;
  let nextPath: string | null = null;

  if (url.hash === "#" || url.hash.startsWith("#/")) {
    const raw = url.hash.startsWith("#/") ? url.hash.slice(2) : "";
    const queryIndex = raw.indexOf("?");
    const path = (queryIndex === -1 ? raw : raw.slice(0, queryIndex)).replace(/\/+$/, "");
    const hashParams = new URLSearchParams(queryIndex === -1 ? "" : raw.slice(queryIndex + 1));
    section = section || hashParams.get("section");
    nextPath = path && PAGE_PATHS.has(path) ? `/${path}` : "/";
  } else if (sectionFromSearch && url.pathname === "/") {
    nextPath = "/";
  }

  if (section && (nextPath ?? url.pathname) === "/") {
    sessionStorage.setItem(LANDING_SECTION_KEY, section);
  }

  if (nextPath !== null && `${url.pathname}${url.search}${url.hash}` !== nextPath) {
    window.history.replaceState(window.history.state, "", nextPath);
  }
}

/** Hash-only visits (already on the site, then /#/fees) do not reload, so rewrite those too. */
export function installLegacyUrlNormalizer() {
  normalizeLegacyUrl();
  window.addEventListener("hashchange", () => {
    const before = window.location.href;
    normalizeLegacyUrl();
    if (window.location.href !== before) {
      window.location.replace(window.location.pathname + window.location.search);
    }
  });
}

export function consumeLandingSection() {
  const section = sessionStorage.getItem(LANDING_SECTION_KEY);
  if (section) sessionStorage.removeItem(LANDING_SECTION_KEY);
  return section;
}
