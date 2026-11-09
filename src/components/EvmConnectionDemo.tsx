import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type {
  Eip1193Provider,
  Eip6963AnnounceProviderEvent,
} from '../types/evm-provider';
import {
  getLegacyKeychainProvider,
  isKeychainAnnouncement,
  normalizeChainId,
  requestEvmAccountConnection,
} from '../lib/keychainDemo';

const NETWORKS: Record<string, string> = {
  '0x1': 'Ethereum',
  '0x38': 'BNB Chain',
  '0x89': 'Polygon PoS',
  '0xa86a': 'Avalanche C-Chain',
  '0x2105': 'Base',
  '0xa4b1': 'Arbitrum One',
  '0xa': 'Optimism',
};

type EvmView = 'idle' | 'pending' | 'connected' | 'unavailable' | 'error';
type UnavailableReason = 'missing' | 'unsupported';

function getErrorCode(error: unknown) {
  if (!error || typeof error !== 'object' || !('code' in error)) return undefined;
  const code = Number((error as { code?: unknown }).code);
  return Number.isFinite(code) ? code : undefined;
}

function isRequestPendingError(error: unknown) {
  if (getErrorCode(error) === -32002) return true;
  if (!error || typeof error !== 'object' || !('message' in error)) return false;
  return /already.*pending|request.*pending|already.*open/i.test(
    String((error as { message?: unknown }).message ?? ''),
  );
}

function abbreviateAddress(address: string) {
  return address.length > 10 ? `${address.slice(0, 6)}…${address.slice(-4)}` : address;
}

export default function EvmConnectionDemo() {
  const { t } = useLanguage();
  const [provider, setProvider] = useState<Eip1193Provider | null>(null);
  const providerRef = useRef<Eip1193Provider | null>(null);
  const [view, setView] = useState<EvmView>('idle');
  const [address, setAddress] = useState('');
  const [chainId, setChainId] = useState('');
  const [messageKey, setMessageKey] = useState('');
  const [copied, setCopied] = useState(false);
  const [unavailableReason, setUnavailableReason] = useState<UnavailableReason>('missing');
  const requestPendingRef = useRef(false);

  const acceptProvider = useCallback((nextProvider: Eip1193Provider) => {
    providerRef.current = nextProvider;
    setProvider(nextProvider);
    setView((current) => current === 'unavailable' ? 'idle' : current);
  }, []);

  const requestDiscovery = useCallback(() => {
    const legacyProvider = getLegacyKeychainProvider();
    if (legacyProvider) acceptProvider(legacyProvider);
    window.dispatchEvent(new Event('eip6963:requestProvider'));
  }, [acceptProvider]);

  useEffect(() => {
    const onAnnouncement = (event: Event) => {
      const detail = (event as Eip6963AnnounceProviderEvent).detail;
      if (isKeychainAnnouncement(detail)) acceptProvider(detail.provider);
    };
    window.addEventListener('eip6963:announceProvider', onAnnouncement);
    requestDiscovery();
    return () => window.removeEventListener('eip6963:announceProvider', onAnnouncement);
  }, [acceptProvider, requestDiscovery]);

  useEffect(() => {
    if (!provider || view !== 'connected' || !provider.on) return;

    const onAccountsChanged = (...args: unknown[]) => {
      const accounts = Array.isArray(args[0]) ? args[0].filter((item): item is string => typeof item === 'string') : [];
      if (!accounts.length) {
        setAddress('');
        setChainId('');
        setView('idle');
        setMessageKey('');
        return;
      }
      setAddress(accounts[0]);
      setCopied(false);
    };
    const onChainChanged = (...args: unknown[]) => setChainId(normalizeChainId(args[0]));
    const onDisconnect = () => {
      setAddress('');
      setChainId('');
      setView('error');
      setMessageKey('demo.evm.error.disconnected');
    };

    provider.on('accountsChanged', onAccountsChanged);
    provider.on('chainChanged', onChainChanged);
    provider.on('disconnect', onDisconnect);
    return () => {
      provider.removeListener?.('accountsChanged', onAccountsChanged);
      provider.removeListener?.('chainChanged', onChainChanged);
      provider.removeListener?.('disconnect', onDisconnect);
    };
  }, [provider, view]);

  const findProvider = async () => {
    for (let attempt = 0; attempt < 10; attempt += 1) {
      requestDiscovery();
      if (providerRef.current) return providerRef.current;
      await new Promise((resolve) => window.setTimeout(resolve, 100));
    }
    return providerRef.current ?? getLegacyKeychainProvider();
  };

  const connect = async () => {
    if (requestPendingRef.current) {
      setView('error');
      setMessageKey('demo.evm.error.pending');
      return;
    }
    requestPendingRef.current = true;
    const selectedProvider = providerRef.current ?? (await findProvider());
    if (!selectedProvider) {
      requestPendingRef.current = false;
      setUnavailableReason(window.hive_keychain ? 'unsupported' : 'missing');
      setView('unavailable');
      setMessageKey('');
      return;
    }

    acceptProvider(selectedProvider);
    setView('pending');
    setMessageKey('demo.evm.pending');
    try {
      const connection = await requestEvmAccountConnection(selectedProvider);
      setAddress(connection.address);
      setChainId(connection.chainId);
      setCopied(false);
      setView('connected');
      setMessageKey('');
    } catch (error) {
      const code = getErrorCode(error);
      setView('error');
      if (code === 4001) setMessageKey('demo.evm.error.cancelled');
      else if (isRequestPendingError(error)) setMessageKey('demo.evm.error.pending');
      else if (code === 4900 || code === 4901) setMessageKey('demo.evm.error.disconnected');
      else setMessageKey('demo.evm.error.unexpected');
    } finally {
      requestPendingRef.current = false;
    }
  };

  const checkAgain = async () => {
    const discovered = await findProvider();
    if (discovered) {
      acceptProvider(discovered);
      setView('idle');
      setMessageKey('');
    } else {
      setUnavailableReason(window.hive_keychain ? 'unsupported' : 'missing');
      setView('unavailable');
    }
  };

  const clearView = () => {
    requestPendingRef.current = false;
    setAddress('');
    setChainId('');
    setCopied(false);
    setMessageKey('');
    setView('idle');
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const networkName = NETWORKS[chainId];
  const networkLabel = networkName || t('demo.evm.customNetwork', { chainId: chainId || '—' });

  if (view === 'unavailable') {
    const isUnsupported = unavailableReason === 'unsupported';
    return (
      <div className="connection-body">
        <h4>{t(isUnsupported ? 'demo.evm.unsupported.title' : 'demo.evm.unavailable.title')}</h4>
        <p>{t(isUnsupported ? 'demo.evm.unsupported.body' : 'demo.evm.unavailable.body')}</p>
        <div className="connection-actions">
          <a className="op-btn link-btn" href="/#download">{t('demo.evm.get')}</a>
          <button className="op-btn ghost" type="button" onClick={checkAgain}>
            {t('demo.common.checkAgain')}
          </button>
        </div>
      </div>
    );
  }

  if (view === 'connected') {
    return (
      <div className="connection-body">
        <span className="connection-success">✓ {t('demo.evm.success.title')}</span>
        <div className="connection-data">
          <span>{t('demo.evm.success.account')}</span>
          <div className="wallet-address-row">
            <strong title={address}>{abbreviateAddress(address)}</strong>
            <button type="button" className="copy-button" onClick={copyAddress} aria-label={t('demo.evm.copyLabel')}>
              {copied ? t('demo.evm.copied') : t('demo.evm.copy')}
            </button>
          </div>
        </div>
        <div className="connection-data">
          <span>{t('demo.evm.success.network')}</span>
          <strong>{networkLabel}</strong>
        </div>
        <p>{t('demo.evm.success.body')}</p>
        <button className="op-btn ghost" type="button" onClick={clearView}>
          {t('demo.evm.success.clear')}
        </button>
        <p className="connection-help">{t('demo.evm.success.revoke')}</p>
      </div>
    );
  }

  return (
    <div className="connection-body">
      <h4>{t('demo.evm.initial.title')}</h4>
      <p>{t('demo.evm.initial.body')}</p>
      <button
        className="op-btn connection-primary"
        type="button"
        disabled={view === 'pending'}
        onClick={connect}
      >
        {view === 'pending' ? t('demo.common.checkKeychain') : t('demo.evm.initial.button')}
      </button>
      <p className="connection-help">{t('demo.evm.initial.help')}</p>
      <div
        className={`connection-message ${view === 'error' ? 'error' : 'info'}`}
        role={view === 'error' ? 'alert' : 'status'}
        aria-live="polite"
      >
        {messageKey ? t(messageKey) : ''}
      </div>
    </div>
  );
}
