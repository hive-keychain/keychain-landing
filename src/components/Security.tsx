export default function Security() {
  return (
      <section className="block" id="security">
        <div className="wrap">
          <div className="sec-head reveal">
            <h2>Your keys, on every chain</h2>
            <p>Security works the same on every chain. Your keys are created and stored on your device. They are never kept on a server and never shared.</p>
          </div>
          <div className="sec-grid reveal-group">
            <div className="feat">
              <div className="fico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg></div>
              <h3>Keys stay on your device</h3>
              <p>Private keys are encrypted locally and never leave your phone or browser. Keychain cannot move your funds. Only you can.</p>
            </div>
            <div className="feat">
              <div className="fico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.6-3 8.1-7 10-4-1.9-7-5.4-7-10V6l7-3z" /><path d="m9 12 2 2 4-4" /></svg></div>
              <h3>You approve every signature</h3>
              <p>Every transaction and login request is shown to you in plain language before you confirm, whether it is a Hive operation or an EVM signature.</p>
            </div>
            <div className="feat">
              <div className="fico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6a4 4 0 1 0 4 4" /><circle cx="8" cy="14" r="4.2" /><path d="M11.2 10.8 20 2M16.5 5.5l3 3" /></svg></div>
              <h3>One recovery, all chains</h3>
              <p>Back up once. Your master password and recovery keys protect your Hive accounts and your EVM wallets together.</p>
            </div>
          </div>
        </div>
      </section>
  );
}
