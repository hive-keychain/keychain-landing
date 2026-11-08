export default function PrivacyPage() {
  return (
    <article className="legal-article" aria-label="Privacy Policy">
      <a className="legal-back" href="#/">← Back to home</a>
      <h1>Privacy Policy</h1>
      <p className="legal-company">Hive Keychain Ltd.</p>
      <p className="legal-effective">Last updated: November 8, 2026</p>
        <p>This policy explains how Hive Keychain Ltd. (“Hive Keychain”, “we”, “us”, or “our”) handles information when you use the Keychain browser extension, mobile app, websites, and related services. We are incorporated in Hong Kong. Information processed depends on the features you use: EVM network functionality is currently available in the browser extension, not the mobile app. Because Keychain is a wallet, it is important to distinguish information kept on your device from information shared when you use a blockchain or an online service.</p>
        <h2>1. Private keys and information kept on your device</h2>
        <p>Keychain is designed so that you control your wallet credentials. Private keys, passwords, and recovery information you enter into the wallet are stored locally using the security and encryption measures available in the app and on your device. They are not sent to Hive Keychain to create a hosted wallet account. We cannot retrieve your password or recovery phrase for you.</p>
        <p>The software may also keep account names and public addresses, selected networks, token information, saved preferences, connected-site permissions, settings, and locally cached balances or transaction information. If you use a supported hardware wallet, Keychain may receive public account details and signatures, but not the signing secrets held by that device.</p>
        <p>On browser-extension versions with the legal-document acknowledgment feature, Keychain also stores the identifiers or cryptographic hashes of the Terms, Privacy Policy, and Fees page that you have reviewed, together with the time of confirmation. These records are kept locally to recognize when the published documents change and another prompt is needed. This feature is not currently available in the mobile app. The local record does not require you to disclose a private key, recovery phrase, or wallet address to us.</p>
        <p>Removing Keychain or clearing application data may remove locally stored information. Make sure you have a secure backup of anything needed to restore access before doing so.</p>
        <h2>2. Information used to provide online features</h2>
        <p>When you connect to a blockchain node, request a balance, obtain a quote, submit a transaction, load token metadata, or use another connected feature, information needed for that request is sent to the relevant service. Depending on the action, this can include public account names and wallet addresses, chain identifiers, token pairs, amounts, destination addresses, transaction hashes, contract details, and the status of a swap or bridge.</p>
        <p>Our swap and portfolio infrastructure may process quote requests, selected providers, execution records, and transaction history to display routes, track processing, handle errors, and respond to support or compliance issues. The browser extension generates a random client token and stores it locally for portfolio execution and history requests. That token helps the service retrieve records associated with the same installation; it is not your private key.</p>
        <p>Like other online services, our servers and service providers may receive technical connection information, such as an IP address, device or browser details, request times, and diagnostic information. A country inferred from a network connection or provided in a quote request may be used to apply provider availability and legal restrictions. We do not need your precise GPS position to create or use a wallet.</p>
        <h2>3. Public blockchain information</h2>
        <p>Public blockchains record account addresses, transactions, balances, and, on some networks, messages or content. This information can be viewed and analyzed by anyone, including services outside our control. An address may identify you when combined with other information. We cannot delete or change data already published to a blockchain.</p>
        <h2>4. Mobile analytics and crash reports</h2>
        <p>The mobile app uses Google Firebase Analytics and Firebase Crashlytics. Analytics may record app usage events, such as screens visited within the app, along with technical information and identifiers associated with an app installation. Crashlytics receives crash reports, error details, device and operating-system information, and installation identifiers to help us investigate failures. Google processes this information as a service provider under its own applicable terms and policies.</p>
        <p>These tools are used to understand app performance and fix problems, not to collect wallet private keys or recovery phrases. We do not intentionally include those secrets in analytics events or support reports. Some collection is performed automatically by the Firebase software; the exact data depends on the platform, app configuration, and use of the app.</p>
        <h2>5. Browser extension permissions and the in-app browser</h2>
        <p>The browser extension needs permissions to interact with supported websites, detect wallet requests, display approvals, save local settings, and communicate with blockchain services. We do not use those permissions to sell browsing profiles or run behavioral advertising.</p>
        <p>The mobile app includes an in-app browser. Websites opened there may use cookies, local storage, analytics, and other tracking technologies under their own policies, just as websites do in a regular browser. The app provides a way to clear website data, but clearing data within Keychain may not remove information already held by a website or third party.</p>
        <p>If you connect your wallet to a dApp or approve a request, the dApp can receive the public account details or transaction information needed for that interaction. Read the site's privacy terms before connecting.</p>
        <h2>6. Device permissions</h2>
        <p>Keychain may request camera access to scan QR codes, and it may use device authentication for local security. The embedded browser may support website requests for location or media access, subject to your operating system and browser permissions. You can manage permissions in your device settings, although disabling some permissions may prevent the related feature from working.</p>
        <h2>7. Providers and other recipients</h2>
        <p>We share or transmit information only as needed to operate the Services, respond to requests, protect the service, comply with law, or work with the providers involved in a transaction. Depending on what you use, recipients may include:</p>
        <ul>
          <li>Blockchain RPC and infrastructure providers, explorers, and market or token metadata services.</li>
          <li>Swap aggregators, exchanges, bridges, and settlement providers selected for a quote or transaction, which may include LI.FI, Uniswap, 0x, Socket, Changelly, LetsExchange, StealthEX, InstaSwap, and Keychain Swap infrastructure.</li>
          <li>Google, for mobile analytics and crash diagnostics.</li>
          <li>Hosting, network security, and technical service providers that help operate our infrastructure.</li>
          <li>Authorities or parties to whom disclosure is required by applicable law or necessary to address fraud, security incidents, or legal claims.</li>
        </ul>
        <p>A third-party exchange or bridge may request identity verification or information for anti-money-laundering or sanctions checks. That provider controls the information it collects through its own process and is responsible for explaining its use. Keychain may receive transaction status or compliance-review status to show you what is happening. Fiat purchase and sale providers are not currently enabled through Keychain.</p>
        <p>We do not sell wallet information or personal data to data brokers or advertisers.</p>
        <h2>8. Why we use information</h2>
        <p>We use the information described above to operate wallet-connected features, show balances and quotes, process and track requested transactions, apply service restrictions, investigate failed routes, maintain security, prevent abuse, answer support requests, and improve reliability. Mobile app analytics helps us understand how features are used and where the app fails.</p>
        <p>Where applicable data-protection law requires a legal basis, our processing is based on providing the Services you request, legitimate operational and security interests, legal obligations, or consent where required. You may choose not to use an optional third-party service, but doing so may limit the functions available to you.</p>
        <h2>9. Storage, retention, and security</h2>
        <p>Wallet credentials are stored on your device rather than in a Hive Keychain hosted account. Other information, including service logs, support messages, and swap execution records, may be held by us or service providers for as long as reasonably necessary to provide the relevant function, investigate problems, meet legal obligations, and protect the service. Retention depends on the type of record and the provider involved.</p>
        <p>We use technical and organizational measures intended to protect information under our control. No device, network, encryption system, or third-party provider can be guaranteed completely secure. Protect your device and recovery information, and never send a private key or recovery phrase to support.</p>
        <h2>10. International processing</h2>
        <p>We operate from Hong Kong and use service providers that may process information in other countries. Blockchain networks and their participants are distributed internationally. When data is sent to a provider or a public network, it may be accessed or processed outside your country and subject to different laws.</p>
        <h2>11. Your choices and rights</h2>
        <p>You can choose which accounts to import, which dApps to connect, which routes to request, and which optional device permissions to grant. You can clear browser site data or remove locally stored wallet information using the applicable controls, subject to the need to retain your own backup.</p>
        <p>You may contact us to request access to, correction of, or information about personal data we hold about you, and to request deletion where applicable law and our operational obligations permit it. We may need to verify your request. We cannot edit records held by an independent provider, recover secrets we never received, or remove transactions from a public blockchain. Additional rights may apply depending on your location.</p>
        <h2>12. Children</h2>
        <p>Keychain is not designed or marketed for children. If you are not legally able to consent to use of the Services in your jurisdiction, do not use them without any consent that the law requires.</p>
        <h2>13. Changes to this policy</h2>
        <p>We may revise this policy as Keychain's features, providers, or data practices change. The current version and its update date will be available through the Services or our website. You are responsible for reviewing it periodically. We will make reasonable efforts to notify users of updates, including by displaying a notice or asking for renewed acknowledgment in browser-extension versions that support this feature. We cannot guarantee that every user will receive an individual notification.</p>
        <p>Acknowledging or continuing to use Keychain after an update does not replace any separate consent required by applicable privacy law. Where consent is legally required for a new purpose or type of processing, we will seek it separately before relying on it.</p>
        <h2>14. Contact</h2>
        <p>For privacy questions or requests to access or correct information, email <a href="mailto:contact@hive-keychain.com">contact@hive-keychain.com</a>. Please do not include private keys, recovery phrases, or wallet passwords in your message.</p>
      <nav className="legal-crosslinks" aria-label="More legal pages">
        <span>Legal</span>
          <a className="btn btn-ghost btn-sm" href="#/terms">Terms of Service</a>
          <a className="btn btn-ghost btn-sm" href="#/fees">Fees</a>
        <a className="btn btn-ghost btn-sm" href="#/">← Back to home</a>
      </nav>
    </article>
  );
}
