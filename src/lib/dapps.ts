// Works with your dApps: live data from the Keychain ecosystem API.
// GET https://api.hive-keychain.com/{chain}/ecosystem/dapps
// The response is an array of { category, dapps: [{ name, description,
// icon, url, mobileUrl, categories }] }.
//
// The "No dApps listed" empty state is shown only when the API answers
// 200 with an empty list (the EVM chains today). A failed request is
// never shown as an empty chain: it is retried silently in the
// background, and if every attempt fails, Hive falls back to the
// embedded snapshot in src/data/fallbackHive.ts (captured from the live
// API on 2026-11-04) so the section is never blank. No retry button,
// no warning. hideOniOS is an in-app flag and is ignored on the web.

import { FALLBACK_HIVE } from '../data/fallbackHive';

export interface Dapp {
  name: string;
  description?: string;
  icon?: string;
  url?: string;
  mobileUrl?: string;
  categories?: string[];
}

export interface DappGroup {
  category: string;
  dapps: Dapp[];
}

export const DAPP_API = 'https://api.hive-keychain.com/';

export const CAT_LABELS: Record<string, string> = {
  social: 'Social',
  gaming: 'Gaming',
  finance: 'Finance',
  nft: 'NFT',
  tool: 'Tools',
};

export function catLabel(key: string): string {
  if (CAT_LABELS[key]) return CAT_LABELS[key];
  return key ? key.charAt(0).toUpperCase() + key.slice(1) : key;
}

export interface DappNetwork {
  chain: string;
  label: string;
}

export const DAPP_NETWORKS: DappNetwork[] = [
  { chain: 'hive', label: 'Hive' },
  { chain: '0x1', label: 'Ethereum' },
  { chain: '0x38', label: 'BNB Chain' },
  { chain: '0x89', label: 'Polygon' },
  { chain: '0xa86a', label: 'Avalanche' },
  { chain: '0xa4b1', label: 'Arbitrum' },
  { chain: '0xa', label: 'Optimism' },
  { chain: '0x2105', label: 'Base' },
];

// Silent retries: delays before attempts 2, 3 and 4. Each attempt gets
// a generous 30s timeout so a slow connection is not mistaken for a
// failure.
export const RETRY_DELAYS = [800, 2000, 4000];
export const FETCH_TIMEOUT = 30000;
export const RECHECK_DELAY = 10000;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchOnce(chain: string): Promise<DappGroup[]> {
  const controller = 'AbortController' in window ? new AbortController() : null;
  const timer = controller
    ? setTimeout(() => controller.abort(), FETCH_TIMEOUT)
    : null;
  try {
    const res = await fetch(DAPP_API + encodeURIComponent(chain) + '/ecosystem/dapps', {
      headers: { Accept: 'application/json' },
      signal: controller ? controller.signal : undefined,
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error('Unexpected response');
    return data as DappGroup[];
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/**
 * Check a chain once for selector availability. A failed request is returned
 * as unknown so callers never treat a temporary API outage as an empty chain.
 */
export async function probeChainDapps(
  chain: string,
): Promise<DappGroup[] | null> {
  try {
    return await fetchOnce(chain);
  } catch {
    return null;
  }
}

/**
 * Load the dApp groups for a chain, following the original mockup's
 * silent-retry policy:
 * - up to 4 attempts (delays 0.8s / 2s / 4s, 30s timeout each);
 * - a 200 response resolves as-is, including an empty array (the only
 *   case where the caller may show the "No dApps listed" state);
 * - if every attempt fails on Hive, resolves with the embedded
 *   FALLBACK_HIVE snapshot (the caller must NOT cache it as live data);
 * - if every attempt fails on any other chain, waits 10s and starts
 *   over, for as long as `isCurrent()` keeps returning true.
 *
 * Resolves with null when `isCurrent()` goes false (a newer request
 * superseded this one) so the caller can drop the result.
 */
export async function loadChainDapps(
  chain: string,
  isCurrent: () => boolean,
): Promise<DappGroup[] | null> {
  for (;;) {
    for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
      if (attempt > 0) {
        await delay(RETRY_DELAYS[attempt - 1]);
        if (!isCurrent()) return null;
      }
      try {
        const data = await fetchOnce(chain);
        if (!isCurrent()) return null;
        return data;
      } catch {
        if (!isCurrent()) return null;
        // fall through to the next silent retry
      }
    }
    if (chain === 'hive') {
      // Every attempt failed: hand back the embedded Hive snapshot.
      return FALLBACK_HIVE;
    }
    // No snapshot for this chain: keep the loading state and try again
    // quietly later instead of claiming the chain is empty.
    await delay(RECHECK_DELAY);
    if (!isCurrent()) return null;
  }
}
