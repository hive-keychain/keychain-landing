export default function PrivacyPage() {
  return (
    <article className="legal-article" aria-label="Privacy Policy">
      <a className="legal-back" href="#/">← Back to home</a>
      <h1>Privacy Policy</h1>
      <p className="legal-company">Hive Keychain Ltd.</p>
      <p className="legal-effective">Last updated: November 8, 2026</p>
      <p>This Privacy Policy describes how Hive Keychain Ltd. (“Hive Keychain”, “we”, “us”, or “our”), a company incorporated in Hong Kong, handles information through the Keychain browser extension, mobile app, websites, and related services. The information involved depends on the features you use.</p>
      <p>Keychain is a self-custody wallet. Some information stays on your device; other information is sent to networks or service providers when you use connected features.</p>
      <h2>1. Information stored on your device</h2>
      <p>Private keys, passwords, and recovery information entered into Keychain are stored locally using the security and encryption protections available in the application and on your device. They are not sent to us to establish a hosted wallet account. We cannot retrieve a lost password or recovery phrase.</p>
      <p>Keychain may also store account names, public addresses, network and token selections, preferences, connected-site permissions, and cached balances or transactions. When you use a supported hardware wallet, Keychain may receive public account details and signatures, not the device's signing secrets.</p>
      <p>Removing the app or clearing its data may delete locally stored information. Secure your recovery information before doing so.</p>
      <h2>2. Information sent when you use online features</h2>
      <p>Keychain communicates with blockchain networks and external services to provide the features you request. Each request contains information relevant to that operation. For example, retrieving a balance requires a public account name or wallet address; obtaining a swap quote requires the selected networks, assets, and amounts; and tracking a transaction may require its hash or other transaction details. Using one feature does not mean that your wallet information is sent to every provider integrated into Keychain.</p>
      <p>Our portfolio and swap infrastructure processes the information needed to provide quotes, select routes, process and track requested transactions, display transaction history, and resolve technical issues. For portfolio execution and history requests, the extension uses a randomly generated client token stored on the device. This token helps associate requests with an installation; it is not a private key or wallet credential.</p>
      <p>As with other online services, the servers handling a request may receive technical information such as your IP address, request time, and browser or device details. Network-derived country information may be used to determine which routes are available. Keychain does not need access to your precise GPS location to create or use a wallet.</p>
      <h2>3. Public blockchain data</h2>
      <p>Public blockchains may expose wallet addresses, balances, transactions, and, on some networks, messages or other content. Anyone can view or analyze that information. A public address may be linked to your identity using information from other sources. We cannot alter or remove information already recorded on a blockchain.</p>
      <h2>4. Mobile analytics and crash diagnostics</h2>
      <p>The mobile app uses Google Firebase Analytics and Firebase Crashlytics. Analytics may collect in-app usage events, technical details, and installation identifiers. Crashlytics may process crash reports, error information, installation identifiers, and device and operating-system details to help diagnose problems. Google processes information under its applicable service terms and policies.</p>
      <p>We use these tools to understand performance and investigate failures, not to collect wallet secrets. We do not intentionally put private keys or recovery phrases in analytics events or support reports. Some data is collected automatically by the Firebase software, and the precise fields depend on the platform and configuration.</p>
      <h2>5. Extension permissions and in-app browsing</h2>
      <p>The extension uses browser permissions to communicate with supported websites, receive wallet requests, present approvals, save local settings, and connect to blockchain services. We do not use these permissions to sell browsing profiles or serve behaviorally targeted advertising.</p>
      <p>The mobile app's in-app browser opens third-party websites that may use cookies, local storage, analytics, or tracking technologies under their own policies. Keychain provides a way to clear website data, but this cannot delete records already held by those sites.</p>
      <p>When you connect to a dApp, it may receive your public account details or transaction information needed for the interaction. Check the dApp's privacy disclosures before connecting.</p>
      <h2>6. Device permissions</h2>
      <p>Keychain may request camera access for QR scanning and use device authentication to protect local wallet access. Websites opened in the in-app browser may request access to location, camera, or microphone features, subject to device and browser permissions. You can change permissions in your device settings, although some features may stop working as a result.</p>
      <h2>7. Service providers and other recipients</h2>
      <p>Information is sent to the service involved in a feature you choose to use, rather than to all Keychain integrations. Depending on that feature, recipients may include:</p>
      <ul>
        <li>Blockchain RPC operators and explorers, which receive the public addresses or transaction details needed to answer requests or broadcast transactions.</li>
        <li>Pricing and token-data services, which receive the asset or market-data queries needed to return information.</li>
        <li>Swap and bridge providers, aggregators, exchanges, and settlement services, which receive the route, asset, amount, address, or transaction details needed for a quote or transaction. Depending on availability, these may include LI.FI, Uniswap, 0x, Socket, Changelly, LetsExchange, StealthEX, and InstaSwap.</li>
        <li>Google, which processes mobile-app analytics and crash diagnostics through Firebase Analytics and Crashlytics.</li>
        <li>Hosting, network-security, and other infrastructure providers that handle requests or support our services.</li>
      </ul>
      <p>Independent swap and bridge providers may request identity documents or other verification details directly from you under their own privacy notices. They may provide Keychain with a transaction reference or review status needed to follow the route, but this does not mean Keychain receives the documents submitted to the provider.</p>
      <p>We may disclose information we actually hold where required by applicable law or binding legal process, such as a valid order from a competent authority. We may also provide relevant records to professional advisers when reasonably necessary to address a legal claim, subject to appropriate confidentiality safeguards. These disclosures are not part of ordinary wallet operation. We cannot disclose private keys or recovery phrases that we do not possess.</p>
      <p>We do not sell personal information or wallet data to advertisers or data brokers.</p>
      <h2>8. How we use information</h2>
      <p>We use information processed through Keychain to provide the features you request, communicate with blockchain networks and service providers, display account and transaction information, process and track swaps, respond to support requests, protect our infrastructure against abuse, and maintain service reliability.</p>
      <p>The mobile app also uses analytics and crash reports to understand app performance and investigate technical problems. We do not use wallet information for advertising. Where applicable law requires a separate notice or consent for a particular activity, we will provide or seek it as required.</p>
      <h2>9. Retention and security</h2>
      <p>Wallet credentials are stored on your device, not in a hosted Keychain account. Our systems may retain technical logs, support messages, and records related to swap requests or transactions where needed to operate the Services, investigate problems, protect our infrastructure, or meet legal obligations. We retain information under our control only for as long as reasonably needed for those purposes, subject to applicable legal requirements. We do not retain every category of information described in this policy for every user.</p>
      <p>Independent providers determine the retention of information they receive under their own policies. We cannot delete records held by those providers or data already recorded on a public blockchain.</p>
      <p>We take technical and organizational measures to protect information under our control, but no system can be guaranteed secure. Keep your device and recovery information safe. Support will never need your private key or recovery phrase.</p>
      <h2>10. Processing across borders</h2>
      <p>We operate from Hong Kong, and our service providers may process information in other jurisdictions. Blockchain networks are also global. Information sent to providers or public networks may therefore be accessible outside your country and subject to different laws.</p>
      <h2>11. Your choices and rights</h2>
      <p>You choose which accounts to import, dApps to connect, routes to use, and optional device permissions to grant. You may clear website data or locally stored wallet information through the available controls, provided you retain the backups needed to recover your wallet.</p>
      <p>You may ask us about personal data we hold and request access, correction, or deletion where applicable law allows. We may need to verify your identity before responding. We cannot edit data held by independent providers, recover credentials we never received, or erase blockchain transactions. Your jurisdiction may provide additional rights.</p>
      <h2>12. Children</h2>
      <p>Keychain is not intended for children. Anyone who cannot legally consent to use of the Services must obtain any consent required under applicable law.</p>
      <h2>13. Updates to this policy</h2>
      <p>We may update this policy when our services, providers, or data practices change. The current version and its date will be available on our website or through Keychain. Please review it periodically. We will make reasonable efforts to notify users of changes, including through notices or renewed acknowledgment prompts in supported extension versions, but cannot guarantee individual delivery.</p>
      <p>Acknowledging the policy or continuing to use Keychain does not replace separate consent where privacy law requires it. We will seek that consent before relying on it for a new processing purpose.</p>
      <h2>14. Contact</h2>
      <p>For privacy questions or requests concerning your data, email <a href="mailto:contact@hive-keychain.com">contact@hive-keychain.com</a>. Do not include private keys, recovery phrases, or wallet passwords.</p>
      <nav className="legal-crosslinks" aria-label="More legal pages">
        <span>Legal</span>
        <a className="btn btn-ghost btn-sm" href="#/terms">Terms of Service</a>
        <a className="btn btn-ghost btn-sm" href="#/fees">Fees</a>
        <a className="btn btn-ghost btn-sm" href="#/">← Back to home</a>
      </nav>
    </article>
  );
}
