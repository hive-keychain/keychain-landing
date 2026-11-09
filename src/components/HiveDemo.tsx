import { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type HiveView = 'idle' | 'detected' | 'pending' | 'signed' | 'unavailable';
type MessageKind = 'info' | 'error' | 'success';

function hasKeychain() {
  return typeof window !== 'undefined' && !!window.hive_keychain;
}

function normalizeUsername(value: string) {
  return value.trim().replace(/^@/, '').toLowerCase();
}

function isValidHiveUsername(value: string) {
  return /^[a-z0-9.-]{3,16}$/.test(value);
}

function uniqueNonce() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export default function HiveDemo() {
  const { t } = useLanguage();
  const [view, setView] = useState<HiveView>('idle');
  const [username, setUsername] = useState('');
  const [signedUsername, setSignedUsername] = useState('');
  const [messageKey, setMessageKey] = useState('');
  const [messageKind, setMessageKind] = useState<MessageKind>('info');
  const requestPendingRef = useRef(false);
  const usernameRef = useRef<HTMLInputElement>(null);

  const setMessage = (key: string, kind: MessageKind = 'info') => {
    setMessageKey(key);
    setMessageKind(kind);
  };

  const checkForKeychain = () => {
    if (requestPendingRef.current) {
      setMessage('demo.hive.error.pending', 'error');
      return;
    }
    if (!hasKeychain()) {
      setView('unavailable');
      setMessage('');
      return;
    }

    requestPendingRef.current = true;
    setMessage('demo.hive.detecting');
    try {
      window.hive_keychain!.requestHandshake(() => {
        requestPendingRef.current = false;
        setView('detected');
        setMessage('');
        window.setTimeout(() => usernameRef.current?.focus(), 0);
      });
    } catch {
      requestPendingRef.current = false;
      setView('unavailable');
      setMessage('');
    }
  };

  const signMessage = () => {
    const normalized = normalizeUsername(username);
    if (!isValidHiveUsername(normalized)) {
      setMessage('demo.hive.error.username', 'error');
      usernameRef.current?.focus();
      return;
    }
    if (requestPendingRef.current) {
      setMessage('demo.hive.error.pending', 'error');
      return;
    }
    if (!hasKeychain()) {
      setView('unavailable');
      setMessage('');
      return;
    }

    requestPendingRef.current = true;
    setView('pending');
    setMessage('demo.hive.pending');
    const signingMessage = t('demo.hive.sign.message', {
      origin: window.location.origin,
      timestamp: new Date().toISOString(),
      nonce: uniqueNonce(),
    });

    try {
      window.hive_keychain!.requestSignBuffer(normalized, signingMessage, 'Posting', (response) => {
        requestPendingRef.current = false;
        if (response?.success) {
          setSignedUsername(normalized);
          setView('signed');
          setMessage('demo.hive.success.title', 'success');
          return;
        }
        setView('detected');
        const providerText = `${response?.message ?? ''} ${response?.error ?? ''}`.toLowerCase();
        setMessage(
          /reject|cancel|declin/.test(providerText)
            ? 'demo.hive.error.cancelled'
            : 'demo.hive.error.failed',
          'error',
        );
      });
    } catch {
      requestPendingRef.current = false;
      setView('detected');
      setMessage('demo.hive.error.failed', 'error');
    }
  };

  const clearResult = () => {
    requestPendingRef.current = false;
    setUsername('');
    setSignedUsername('');
    setView('detected');
    setMessage('');
    window.setTimeout(() => usernameRef.current?.focus(), 0);
  };

  if (view === 'unavailable') {
    return (
      <div className="connection-body">
        <h4>{t('demo.hive.unavailable.title')}</h4>
        <p>{t('demo.hive.unavailable.body')}</p>
        <div className="connection-actions">
          <a className="op-btn link-btn" href="/#download">{t('demo.hive.get')}</a>
          <button className="op-btn ghost" type="button" onClick={checkForKeychain}>
            {t('demo.common.checkAgain')}
          </button>
        </div>
      </div>
    );
  }

  if (view === 'signed') {
    return (
      <div className="connection-body">
        <span className="connection-success">✓ {t('demo.hive.success.title')}</span>
        <div className="connection-data">
          <span>{t('demo.hive.success.account')}</span>
          <strong>@{signedUsername}</strong>
        </div>
        <p>{t('demo.hive.success.body')}</p>
        <button className="op-btn ghost" type="button" onClick={clearResult}>
          {t('demo.hive.success.clear')}
        </button>
      </div>
    );
  }

  return (
    <div className="connection-body">
      <h4>{view === 'idle' ? t('demo.hive.initial.title') : t('demo.hive.detected.title')}</h4>
      <p>{view === 'idle' ? t('demo.hive.initial.body') : t('demo.hive.detected.body')}</p>

      {view === 'idle' ? (
        <button className="op-btn connection-primary" type="button" onClick={checkForKeychain}>
          {t('demo.hive.initial.button')}
        </button>
      ) : (
        <>
          <label className="connection-label" htmlFor="hive-demo-username">
            {t('demo.hive.username.label')}
          </label>
          <input
            ref={usernameRef}
            className="op-input connection-input"
            id="hive-demo-username"
            value={username}
            placeholder={t('demo.hive.username.placeholder')}
            autoComplete="off"
            spellCheck={false}
            disabled={view === 'pending'}
            onChange={(event) => setUsername(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                signMessage();
              }
            }}
          />
          <button
            className="op-btn connection-primary"
            type="button"
            disabled={view === 'pending'}
            onClick={signMessage}
          >
            {view === 'pending' ? t('demo.common.checkKeychain') : t('demo.hive.sign.button')}
          </button>
          <p className="connection-help">{t('demo.hive.sign.help')}</p>
        </>
      )}

      <div
        className={`connection-message ${messageKind}`}
        role={messageKind === 'error' ? 'alert' : 'status'}
        aria-live="polite"
      >
        {messageKey ? t(messageKey) : ''}
      </div>
    </div>
  );
}
