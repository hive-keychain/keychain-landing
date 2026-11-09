// Path routes for the legal pages and Keychain Store invoices.
// Older hash URLs (#/terms, #/fees, #/privacy, #/, #invoice/...) are
// rewritten onto these paths so existing links keep working.
//
// Invoice payloads are the remainder of a hive://sign/op/ URI and may
// contain "?" (callback query). They are percent-encoded into one path
// segment so the browser does not treat that "?" as the page query.

export type LegalPage = 'terms' | 'fees' | 'privacy';

export type AppRoute =
  | { kind: 'home' }
  | { kind: 'legal'; page: LegalPage }
  | { kind: 'invoice'; payload: string | null };

export const LEGAL_TITLES: Record<LegalPage, string> = {
  terms: 'Hive Keychain Beta Terms',
  fees: 'Hive Keychain Beta Fees',
  privacy: 'Hive Keychain Beta Privacy Policy',
};

const LEGAL_PAGES: readonly LegalPage[] = ['terms', 'fees', 'privacy'];

function isLegalPage(value: string): value is LegalPage {
  return (LEGAL_PAGES as readonly string[]).includes(value);
}

export function routeFromLocation(loc: Location = window.location): AppRoute {
  const fromPath = routeFromPath(loc.pathname);
  if (fromPath.kind !== 'home') return fromPath;
  return routeFromLegacyHash(loc.hash) ?? { kind: 'home' };
}

export function routeFromPath(pathname: string): AppRoute {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 1 && isLegalPage(segments[0])) {
    return { kind: 'legal', page: segments[0] };
  }
  if (segments[0] === 'invoice') {
    const encoded = segments.slice(1).join('/');
    if (!encoded) return { kind: 'invoice', payload: null };
    try {
      return { kind: 'invoice', payload: decodeURIComponent(encoded) };
    } catch {
      return { kind: 'invoice', payload: encoded };
    }
  }
  return { kind: 'home' };
}

/** Hash routes used before path routing. Null when the hash is not one of them. */
export function routeFromLegacyHash(hash: string): AppRoute | null {
  const invoicePayload = legacyInvoicePayload(hash);
  if (invoicePayload !== null) {
    return { kind: 'invoice', payload: invoicePayload || null };
  }
  const page = legalPageFromHash(hash);
  if (page) return { kind: 'legal', page };
  return null;
}

function legacyInvoicePayload(hash: string): string | null {
  if (hash.startsWith('#invoice/')) return hash.slice('#invoice/'.length);
  if (hash.startsWith('#/invoice/')) return hash.slice('#/invoice/'.length);
  return null;
}

function legalPageFromHash(hash: string): LegalPage | null {
  const match = hash.split('?')[0].match(/^#\/(terms|fees|privacy)\/?$/);
  return match && isLegalPage(match[1]) ? match[1] : null;
}

/**
 * Replace a legacy hash URL with its path, keeping the current history entry.
 * Returns true when the address bar changed.
 */
export function applyLegacyRedirect(loc: Location = window.location): boolean {
  const target = legacyRedirectTarget(loc.hash, loc.search);
  if (!target) return false;
  const current = loc.pathname + loc.search + loc.hash;
  if (current === target) return false;
  window.history.replaceState(window.history.state, '', target);
  return true;
}

export function legacyRedirectTarget(hash: string, search: string): string | null {
  const invoicePayload = legacyInvoicePayload(hash);
  if (invoicePayload !== null) {
    return `/invoice/${encodeURIComponent(invoicePayload)}`;
  }
  const page = legalPageFromHash(hash);
  if (page) return `/${page}`;
  // Old home URL (#/ and #/?section=...). Section capture runs first.
  if (hash.split('?')[0] === '#/') return `/${search}`;
  return null;
}

/** Drop the trailing slash on /terms, /privacy, and /fees. */
export function canonicalizeLegalPath(loc: Location = window.location) {
  const path = loc.pathname;
  if (path.length <= 1 || !path.endsWith('/')) return;
  const trimmed = path.replace(/\/+$/, '');
  if (trimmed !== '/terms' && trimmed !== '/privacy' && trimmed !== '/fees') return;
  window.history.replaceState(window.history.state, '', trimmed + loc.search + loc.hash);
}

function isAppPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return true;
  if (segments[0] === 'invoice') return true;
  return segments.length === 1 && isLegalPage(segments[0]);
}

/**
 * Keep legal, invoice, and home navigations inside the page so the home
 * markup stays mounted. Hash-only changes on the current path (section
 * links) are left to the browser.
 */
export function installAppLinkInterceptor() {
  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest('a');
    if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
    const href = anchor.getAttribute('href');
    if (!href || /^(mailto:|hive:|javascript:|tel:)/i.test(href)) return;

    let url: URL;
    try {
      url = new URL(anchor.href);
    } catch {
      return;
    }
    if (url.origin !== window.location.origin || !isAppPath(url.pathname)) return;

    const samePath = url.pathname === window.location.pathname && url.search === window.location.search;
    if (samePath) {
      // Logo and "back to home" use href="/". On the home page that should
      // clear a section hash and return to the top.
      if (url.pathname === '/' && url.hash === '') {
        event.preventDefault();
        if (window.location.hash) {
          window.history.pushState(null, '', `/${window.location.search}`);
          window.dispatchEvent(new PopStateEvent('popstate'));
        } else {
          window.scrollTo(0, 0);
        }
      }
      return;
    }

    event.preventDefault();
    window.history.pushState(null, '', url.pathname + url.search + url.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  document.addEventListener('click', onClick);
  return () => document.removeEventListener('click', onClick);
}
