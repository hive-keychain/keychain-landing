const EXTENSION_SOURCE = 'https://github.com/hive-keychain/hive-keychain-extension';
const MOBILE_SOURCE = 'https://github.com/hive-keychain/hive-keychain-mobile';

const features = [
  {
    title: 'Local encryption. No recovery service.',
    body: 'Your keys are encrypted on your device. Keychain does not keep a server copy and cannot restore access if you lose your credentials.',
    icon: <><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  },
  {
    title: 'Ledger support for Hive and EVM',
    body: 'Use a compatible Ledger hardware wallet with Hive accounts and EVM accounts in the browser extension.',
    icon: <><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 10h4M7 14h2M17 12h.01" /></>,
  },
  {
    title: 'Review before you sign',
    body: 'Keychain shows the request for your approval before signing. Always check the account, network, site, and operation details.',
    icon: <><path d="M12 3l7 3v5c0 4.6-3 8.1-7 10-4-1.9-7-5.4-7-10V6l7-3z" /><path d="m9 12 2 2 4-4" /></>,
  },
  {
    title: 'Manage dApp connections',
    body: 'Review and remove sites connected to your EVM accounts from the extension permissions screen.',
    icon: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1" /><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1" /></>,
  },
  {
    title: 'Open-source software',
    body: <><a href={EXTENSION_SOURCE} target="_blank" rel="noopener noreferrer">Browser extension</a> and <a href={MOBILE_SOURCE} target="_blank" rel="noopener noreferrer">mobile app</a> source code are public for inspection and contribution.</>,
    icon: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
  },
  {
    title: 'Extra release-build safeguards',
    body: 'Extension release builds add controls that help limit what third-party dependencies can access.',
    icon: <><path d="M8 6a4 4 0 1 0 4 4" /><circle cx="8" cy="14" r="4.2" /><path d="M11.2 10.8 20 2M16.5 5.5l3 3" /></>,
  },
];

export default function Security() {
  return (
    <section className="block" id="security">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Your wallet. Your keys.</h2>
          <p>Keychain is self-custodial: you control the credentials that authorize every action.</p>
        </div>
        <div className="sec-grid reveal-group">
          {features.map((feature) => (
            <div className="feat" key={feature.title}>
              <div className="fico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {feature.icon}
                </svg>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
