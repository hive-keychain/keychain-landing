import type { Eip1193Provider, Eip6963ProviderDetail } from '../types/evm-provider';

export const KEYCHAIN_RDNS = 'com.hive-keychain';

export function isKeychainAnnouncement(detail: Eip6963ProviderDetail | undefined) {
  return (
    detail?.info?.rdns === KEYCHAIN_RDNS &&
    typeof detail.provider?.request === 'function'
  );
}

export function getLegacyKeychainProvider() {
  const provider = window.hiveKeychainEthereum ?? window.hiveKeychain?.ethereum;
  return provider && typeof provider.request === 'function' ? provider : null;
}

export function normalizeChainId(value: unknown) {
  if (typeof value === 'number' && Number.isFinite(value)) return `0x${value.toString(16)}`;
  if (typeof value !== 'string') return '';
  const trimmed = value.trim().toLowerCase();
  if (/^0x[0-9a-f]+$/.test(trimmed)) return `0x${BigInt(trimmed).toString(16)}`;
  if (/^[0-9]+$/.test(trimmed)) return `0x${BigInt(trimmed).toString(16)}`;
  return '';
}

export async function requestEvmAccountConnection(provider: Eip1193Provider) {
  const result = await provider.request({ method: 'eth_requestAccounts' });
  const accounts = Array.isArray(result)
    ? result.filter((item): item is string => typeof item === 'string')
    : [];
  if (!accounts.length) throw new Error('No account returned');
  const chainId = normalizeChainId(await provider.request({ method: 'eth_chainId' }));
  return { address: accounts[0], chainId };
}
