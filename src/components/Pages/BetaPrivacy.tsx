import React from 'react';

const BetaPrivacy = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Hive Keychain Beta Privacy Policy</h1>
        <div className="prose max-w-none px-60">
          <h2 className="text-xl font-semibold mt-6 mb-2 text-center">Hive Keychain Ltd.</h2>
          <p className="text-gray-700 mb-4 text-center font-semibold">Effective Date: June 15th, 2026</p>

          <p className="text-gray-700 mb-4">
            This Privacy Policy explains how information is handled when you use Hive Keychain Beta and the services made available through it (the "Services"). The Services are provided by Hive Keychain Ltd. ("Hive Keychain", "we", "us", or "our"), a company incorporated in Hong Kong.
          </p>
          <p className="text-gray-700 mb-4">
            The production version of Hive Keychain may be governed by a separate privacy policy. This Privacy Policy applies to the beta version only.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">1. Summary</h3>
          <p className="text-gray-700 mb-4">
            Hive Keychain is designed so that wallet credentials are controlled by you. We do not receive or store hardware-wallet private keys, seed phrases, recovery phrases, PINs, or signing credentials. If you create or import wallet credentials into the Services, those credentials are stored locally on your device in encrypted form where supported by the application.
          </p>
          <p className="text-gray-700 mb-4">
            We do not currently use analytics services, tracking cookies, or crash-reporting services in the Services. We also do not intentionally build user profiles or track users across websites.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">2. Local Device Storage</h3>
          <p className="text-gray-700 mb-4">
            The Services store information locally on your device to provide wallet functionality. This may include account names, public addresses, public keys, encrypted private keys or seed phrases, preferences, active chain state, custom chains, custom RPC endpoints, active RPCs, custom tokens, custom NFTs, dApp permissions, known domains, dApp logos, whitelisted addresses, ENS information, pending transactions, canceled transactions, local transaction history displayed by the app, light-node registration data, wallet settings, and other local application data.
          </p>
          <p className="text-gray-700 mb-4">
            We do not use cookies on the Site. The browser extension and any related apps necessarily use local storage or equivalent local device storage to operate wallet features, remember settings, and maintain wallet state.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">3. Hardware Wallets</h3>
          <p className="text-gray-700 mb-4">
            When you connect a hardware wallet such as Ledger, your private keys, seed phrase, recovery phrase, PIN, and signing credentials remain on or under the control of the hardware wallet and are not shared with Hive Keychain. The hardware wallet may share public account information with Hive Keychain, such as addresses, public keys, derivation paths, supported chains, and information needed to display accounts and request signatures.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">4. Public Blockchain and Technical Data</h3>
          <p className="text-gray-700 mb-4">
            To provide wallet functionality, Hive Keychain may process public blockchain account information and technical data, including Hive usernames, public wallet addresses, public keys, chain IDs, RPC URLs, transaction hashes, balances, token holdings, NFT holdings, token contract addresses, NFT contract addresses, dApp domains or origins, gas lookup inputs, price lookup inputs, security-check inputs, swap quote parameters, and route information.
          </p>
          <p className="text-gray-700 mb-4">
            This information is used to display balances, transaction history, token and NFT information, chain metadata, gas estimates, price data, dApp connection requests, security notices, swap quotes, and other wallet features. Although this information is generally public or technical in nature, public blockchain addresses and transaction history may reveal information about your activity when associated with you by you or by others.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">5. Extension Permissions and Webpage Interaction</h3>
          <p className="text-gray-700 mb-4">
            The browser extension may request permissions that allow it to store local data, communicate with webpages, detect dApp requests, inject wallet provider interfaces, display transaction or signing prompts, use notifications, and support extension features such as side panel or background processing.
          </p>
          <p className="text-gray-700 mb-4">
            The extension may run content scripts on webpages and frames to enable dApp communication. This is necessary for wallet functionality and does not mean that Hive Keychain intends to collect browsing profiles, analytics, cookies, or user-tracking data.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">6. Backend APIs and Infrastructure</h3>
          <p className="text-gray-700 mb-4">
            Some Services rely on Hive Keychain backend APIs or light-node infrastructure to provide chain data, token and NFT discovery, transaction history, contract metadata, ABI data, price data, gas data, risk notices, chain metadata, and security-related information. These services are designed to process the chain data and technical lookup parameters needed to provide those features, not to build user profiles or track users.
          </p>
          <p className="text-gray-700 mb-4">
            We do not intentionally store IP addresses, wallet identifiers, analytics identifiers, crash reports, or user-tracking profiles in connection with these backend services. However, ordinary internet communications may involve temporary processing of technical connection information by hosting providers, security providers, network infrastructure, app stores, browser stores, email providers, or other infrastructure providers under their own systems and policies.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">7. Third-Party Services</h3>
          <p className="text-gray-700 mb-4">
            Some features require interaction with third-party services, including public RPC providers, custom RPC providers selected by you, LI.FI and its route providers, decentralized exchanges, bridges, liquidity providers, block explorers, price and metadata providers, security or risk data providers, Transak, app stores, browser stores, and dApps you choose to use.
          </p>
          <p className="text-gray-700 mb-4">
            Public or technical data may be sent to these third parties when you use features that depend on them. Third-party services process information under their own privacy policies and terms. Hive Keychain does not control how third-party services process data.
          </p>
          <p className="text-gray-700 mb-4">
            If you use a custom RPC endpoint, dApp, bridge, swap provider, or other third-party service, that third party may receive your public address, IP address, transaction data, request metadata, and other information according to its own systems and policies.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">8. Analytics, Cookies, and Crash Reporting</h3>
          <p className="text-gray-700 mb-4">
            Hive Keychain does not currently use analytics services, tracking cookies, or crash-reporting services in the Services. If we introduce analytics, tracking cookies, or crash-reporting services in the future, we will update this Privacy Policy and, where required by applicable law, request consent or provide appropriate controls.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">9. Blockchain Immutability</h3>
          <p className="text-gray-700 mb-4">
            Data broadcast to a blockchain or public network may be public, permanent, irreversible, and immutable. This may include account names, wallet addresses, public keys, transaction hashes, token transfers, NFT transfers, smart-contract interactions, approvals, messages, signatures, and other on-chain data. Hive Keychain cannot delete, modify, hide, or remove data written to a blockchain or public network.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">10. Voluntary Communications</h3>
          <p className="text-gray-700 mb-4">
            If you contact us by email, support channels, app stores, browser stores, social media, or other communication channels, we may receive the information you choose to provide, such as your name, email address, account name, wallet address, transaction hash, screenshots, logs, support description, or other information included in your message. We use this information to respond to you, provide support, investigate issues, improve the Services, and protect users and the Services.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">11. Data Retention</h3>
          <p className="text-gray-700 mb-4">
            Local wallet data remains on your device until you delete it, uninstall the Services, clear local storage, reset the application, or otherwise remove it. Public blockchain data remains available according to the rules and behavior of the relevant blockchain or network. Support communications may be retained for as long as reasonably necessary to respond to your request, maintain records, resolve disputes, enforce our terms, comply with legal obligations, and protect users and the Services.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">12. Your Choices</h3>
          <p className="text-gray-700 mb-4">
            You can limit some data processing by choosing which features to use, changing RPC endpoints, adding or removing custom RPCs or chains, disconnecting dApps, clearing local app or extension data, deleting local wallets, or choosing not to use features that require Hive Keychain infrastructure, swap providers, third-party data providers, or public blockchain broadcasts.
          </p>
          <p className="text-gray-700 mb-4">
            You may contact us to request access, correction, deletion, or other action regarding personal information we may hold about you. We may not be able to delete information stored locally on your own device, information controlled by third parties, or information written to public blockchains or public networks.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">13. International Users</h3>
          <p className="text-gray-700 mb-4">
            The Services may be used by users in different jurisdictions, and service providers or infrastructure may process information in different countries. By using the Services, you understand that information may be processed in jurisdictions that may have data protection laws different from those in your jurisdiction.
          </p>
          <p className="text-gray-700 mb-4">
            Nothing in this Privacy Policy limits rights you may have under mandatory privacy or data protection laws that apply to you.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">14. Changes to This Privacy Policy</h3>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time by posting the updated version through the Services or on our website. Changes are effective when posted unless stated otherwise. You should review this Privacy Policy periodically.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">15. Contact Us</h3>
          <p className="text-gray-700 mb-4">
            If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@hive-keychain.com" className="text-red-700">privacy@hive-keychain.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetaPrivacy;
