const BetaTermsOfService = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Hive Keychain Beta Terms
        </h1>
        <div className="prose max-w-none px-60">
          <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
            Hive Keychain Ltd.
          </h2>
          <p className="text-gray-700 mb-4 text-center font-semibold">
            Effective Date: July 8th, 2026
          </p>

          <p className="text-gray-700 mb-4">
            These Terms apply to your access to and use of Hive Keychain Beta
            and any features, interfaces, APIs, integrations, or services made
            available through that beta version (the "Services"). The Services
            are provided by Hive Keychain Ltd. ("Hive Keychain", "we", "us", or
            "our"), a company incorporated in Hong Kong.
          </p>
          <p className="text-gray-700 mb-4">
            By using the Services, you agree to these Terms. If you do not
            agree, do not use the Services. If you use the Services on behalf of
            a company or other entity, you represent that you have authority to
            bind that entity to these Terms.
          </p>
          <p className="text-gray-700 mb-4">
            These Terms are intended to apply to the beta version only. The
            production version of Hive Keychain may be governed by separate
            terms, policies, and fee disclosures.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">1. Beta Notice</h3>
          <p className="text-gray-700 mb-4">
            The Services are experimental. They may be incomplete, unstable,
            unavailable, inaccurate, or changed without notice. They may contain
            bugs, incomplete transaction previews, incomplete risk warnings,
            incomplete metadata, failed broadcasts, inaccurate balances,
            unsupported routes, or other issues that may not exist in the
            production version of Hive Keychain.
          </p>
          <p className="text-gray-700 mb-4">
            You should use the Services only if you understand the heightened
            risks of beta software and blockchain transactions. You should test
            with small amounts first and should not use the Services for assets,
            accounts, or transactions that you are not prepared to lose or
            recover manually.
          </p>
          <p className="text-gray-700 mb-4">
            We may add, modify, suspend, disable, deprecate, or remove any beta
            feature, integration, chain, route, provider, or functionality at
            any time, with or without notice.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">2. Services</h3>
          <p className="text-gray-700 mb-4">
            The Services allow you to manage supported wallets and accounts,
            connect to dApps, review and approve signing requests, broadcast
            transactions, use supported chains and RPC endpoints, view token and
            NFT information, access risk notices, and use swap-related features
            where available.
          </p>
          <p className="text-gray-700 mb-4">
            Certain information displayed through the Services, including
            balances, transaction history, token data, NFT data, gas estimates,
            route quotes, price data, contract metadata, risk notices, and
            domain information, may be provided by blockchains, RPC endpoints,
            Hive Keychain infrastructure, or third-party providers. This
            information may be incomplete, delayed, inaccurate, unavailable, or
            rate limited.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            3. Extension Permissions and Webpage Interaction
          </h3>
          <p className="text-gray-700 mb-4">
            The browser extension may request permissions that allow it to store
            local data, communicate with webpages, detect dApp requests, inject
            wallet provider interfaces, display transaction or signing prompts,
            use notifications, and support extension features such as side panel
            or background processing.
          </p>
          <p className="text-gray-700 mb-4">
            These permissions are required for wallet functionality. They do not
            mean that Hive Keychain intends to collect analytics, browsing
            profiles, cookies, or user-tracking data. However, websites, dApps,
            RPC endpoints, swap providers, bridges, and other third parties you
            interact with may process data according to their own terms and
            policies.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            4. Eligibility and Compliance
          </h3>
          <p className="text-gray-700 mb-4">
            You may use the Services only if you are legally able to enter into
            these Terms and are not prohibited from using the Services under
            applicable law. You are responsible for complying with all laws and
            regulations that apply to your use of the Services, including laws
            relating to digital assets, taxes, sanctions, export controls,
            anti-money laundering, and counter-terrorist financing.
          </p>
          <p className="text-gray-700 mb-4">
            You may not use the Services if you are located in, ordinarily
            resident in, organized under the laws of, or acting on behalf of any
            person or entity located in a jurisdiction subject to applicable
            sanctions, embargoes, or restrictions, or if you are listed on,
            owned by, controlled by, or acting on behalf of a person or entity
            listed on any applicable sanctions list, including lists maintained
            by the United Nations, Hong Kong authorities, the United States, the
            European Union, the United Kingdom, or other relevant authorities.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            5. Non-Custodial Wallet; Limited Swap Processing
          </h3>
          <p className="text-gray-700 mb-4">
            Hive Keychain is a non-custodial wallet. For ordinary wallet use,
            Hive Keychain does not own, control, hold, or custody your Digital
            Assets, private keys, seed phrases, passwords, recovery phrases,
            master keys, PINs, or wallet credentials. You are responsible for
            securing, backing up, and maintaining access to your wallet
            credentials and devices.
          </p>
          <p className="text-gray-700 mb-4">
            Some swap flows may require you to send a specific amount of Digital
            Assets to a Hive Keychain-controlled or service-provider-controlled
            address solely for the purpose of processing the swap you requested
            and returning the resulting output asset to an address you provide
            or control. This limited transaction processing does not give Hive
            Keychain access to your private keys, seed phrases, passwords,
            recovery phrases, wallet credentials, or other assets in your
            wallet.
          </p>
          <p className="text-gray-700 mb-4">
            Hive Keychain does not offer deposit accounts, hosted wallet
            balances, discretionary asset management, lending, staking custody,
            brokerage, exchange, fiduciary, or general custody services. Any
            asset handling in connection with a swap is limited to the specific
            transaction you initiate and is subject to route availability,
            liquidity, network conditions, and applicable third-party provider
            behavior.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            6. Wallet Credentials and Hardware Wallets
          </h3>
          <p className="text-gray-700 mb-4">
            If you create or import wallet credentials into the Services, those
            credentials are stored locally on your device in encrypted form
            where supported by the application. Hive Keychain cannot recover
            your private keys, passwords, seed phrases, recovery phrases, master
            keys, Digital Assets, accounts, transactions, approvals, or
            authorizations if they are lost, forgotten, compromised,
            transferred, approved, signed, or broadcast.
          </p>
          <p className="text-gray-700 mb-4">
            If you connect a hardware wallet such as Ledger, your private keys,
            seed phrase, recovery phrase, PIN, and signing credentials remain on
            or under the control of the hardware wallet and are not shared with
            Hive Keychain. The hardware wallet may share public account
            information with Hive Keychain, such as addresses, public keys,
            derivation paths, supported chains, and information needed to
            display accounts and request signatures.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            7. User-Approved and Pre-Approved Operations
          </h3>
          <p className="text-gray-700 mb-4">
            Blockchain transactions, messages, signatures, approvals,
            permissions, and broadcasts may be irreversible. You are responsible
            for reviewing all transaction details, addresses, permissions,
            approvals, networks, chain IDs, tokens, amounts, fees, messages, and
            contract interactions before approving or signing them.
          </p>
          <p className="text-gray-700 mb-4">
            Some Services may allow you to enable pre-approved or recurring Hive
            or Hive-Engine operations, such as claiming rewards, claiming
            accounts, claiming savings, or automatically staking Hive-Engine
            assets. These operations are performed only after you enable or
            approve the relevant feature and are limited to routine
            account-management actions supported by that feature. They do not
            authorize Hive Keychain to transfer ownership of your account,
            transfer your Digital Assets to Hive Keychain, or initiate arbitrary
            transactions on your behalf.
          </p>
          <p className="text-gray-700 mb-4">
            You are responsible for reviewing and disabling any pre-approved or
            recurring feature you no longer wish to use. Hive Keychain may
            suspend, modify, or discontinue such automation features at any time
            for security, technical, legal, or operational reasons.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            8. dApps, Permissions, and Third-Party Services
          </h3>
          <p className="text-gray-700 mb-4">
            The Services may allow you to connect to dApps, websites, RPC
            endpoints, bridges, swap providers, block explorers, token metadata
            providers, price data providers, security data providers, and other
            third-party services. Hive Keychain provides access to these
            third-party services as a convenience and does not control, endorse,
            or guarantee them.
          </p>
          <p className="text-gray-700 mb-4">
            You are solely responsible for all permissions, approvals,
            authorizations, allowances, signatures, orders, messages, and
            transactions you grant to or execute through third-party services.
            Disconnecting a dApp or removing a site permission in the Services
            may not revoke on-chain approvals, token allowances, smart-contract
            permissions, session keys, delegated permissions, bridge actions,
            pending transactions, or other authorizations already submitted to a
            network or third-party provider.
          </p>
          <p className="text-gray-700 mb-4">
            You are responsible for reviewing, limiting, and revoking those
            permissions where the relevant network, contract, dApp, or provider
            makes revocation possible.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            9. Custom Chains, RPCs, Tokens, and NFTs
          </h3>
          <p className="text-gray-700 mb-4">
            If you add or use a custom chain, custom RPC endpoint, custom token,
            custom NFT, or custom metadata, you are responsible for verifying
            that the chain ID, RPC URL, contract address, explorer, metadata,
            token standard, and related information are accurate and safe.
          </p>
          <p className="text-gray-700 mb-4">
            RPC endpoints, explorers, metadata providers, APIs, and light-node
            services may be unavailable, delayed, inaccurate, compromised, or
            rate limited. Hive Keychain is not responsible for losses, failed
            transactions, incorrect displays, missed opportunities, or other
            damages caused by unavailable, delayed, inaccurate, or compromised
            RPC, API, explorer, bridge, swap, or data-provider services.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            10. Risk Notices and Transaction Previews
          </h3>
          <p className="text-gray-700 mb-4">
            Security notices, risk indicators, transaction previews, token
            labels, NFT labels, contract labels, domain warnings, route quotes,
            gas estimates, price data, and similar information are provided for
            convenience only. They are not professional advice, security advice,
            legal advice, financial advice, investment advice, tax advice,
            audits, guarantees, endorsements, or recommendations.
          </p>
          <p className="text-gray-700 mb-4">
            Hive Keychain does not guarantee full transaction simulation and
            does not guarantee that notices or previews will detect every
            malicious, fraudulent, mistaken, unsafe, or undesirable transaction,
            contract, token, dApp, approval, or signature request. The absence
            of a warning does not mean that an action, asset, counterparty,
            dApp, contract, RPC, route, or provider is safe, legitimate,
            current, or suitable for you.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">11. Swaps</h3>
          <p className="text-gray-700 mb-4">
            Swap features may allow you to request swaps involving supported
            Digital Assets and routes. Available routes, providers, assets,
            chains, estimated output amounts, fees, and completion times may
            change at any time.
          </p>
          <p className="text-gray-700 mb-4">
            Hive Keychain is not your broker, investment adviser, exchange,
            custodian, bridge operator, liquidity provider, or execution venue
            for swap transactions, except for the limited transaction processing
            described in these Terms where a specific swap flow requires you to
            send assets for immediate processing. You remain responsible for
            reviewing the route, token, chain, receiving address, spender or
            approval address, quoted amount, gas estimate, slippage, and all
            other transaction details before approving or signing any
            transaction.
          </p>
          <p className="text-gray-700 mb-4">
            If a swap route fails, is delayed, is partially completed, or cannot
            be completed as originally requested, you may receive the original
            input asset, an intermediate asset, a refund asset, a replacement
            asset, or another recovery amount, depending on the route,
            liquidity, network conditions, and operational feasibility. The
            value of any returned or recovered asset may differ from the value
            expected when you initiated the swap.
          </p>
          <p className="text-gray-700 mb-4">
            Routes provided by third-party providers, including LI.FI and any
            underlying bridges, decentralized exchanges, or liquidity providers,
            are subject to the applicable third-party provider's own systems,
            contracts, rules, and terms.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">12. Fees</h3>
          <p className="text-gray-700 mb-4">
            Hive Keychain may charge fees for certain Services. Fees charged by
            Hive Keychain are described on the applicable fees page and, where
            applicable, displayed before you confirm the relevant transaction or
            purchase. Network fees, gas fees, bridge fees, liquidity provider
            fees, decentralized exchange fees, payment processor fees, token
            transfer taxes, and third-party provider fees may also apply and are
            not Hive Keychain fees unless expressly identified as such.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            13. User Content and Blockchain Broadcasts
          </h3>
          <p className="text-gray-700 mb-4">
            The Services may help you broadcast content, transaction data,
            messages, signatures, or other information to blockchains or
            supported networks. You represent that you have the right and
            authority to submit any content or data you submit through the
            Services and that it does not infringe, misappropriate, or otherwise
            violate the rights of any person.
          </p>
          <p className="text-gray-700 mb-4">
            You understand that content, transaction data, messages, signatures,
            approvals, and other information broadcast through the Services may
            be publicly available, permanent, irreversible, and immutable on the
            relevant blockchain or network.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            14. Rights Granted by Hive Keychain
          </h3>
          <p className="text-gray-700 mb-4">
            Hive Keychain grants you a limited, non-exclusive, non-transferable,
            non-sublicensable, revocable right to use the Services strictly in
            accordance with these Terms.
          </p>
          <p className="text-gray-700 mb-4">
            Except as expressly permitted, you may not modify, distribute,
            alter, tamper with, repair, reverse engineer, disassemble,
            decompile, or create derivative works of the Services, except to the
            extent such restriction is prohibited by applicable law or the
            relevant component is made available under an open-source license
            that expressly permits such activity. You may not use the Services
            to avoid fees, exceed usage limits, interfere with the Services, or
            misrepresent your relationship with Hive Keychain.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">15. User Conduct</h3>
          <p className="text-gray-700 mb-4">
            You agree not to use the Services in ways that violate applicable
            law; infringe the rights of others; interfere with the Services;
            bypass security measures; transmit malware; abuse infrastructure;
            defraud Hive Keychain, users, or others; or facilitate criminal,
            fraudulent, sanctioned, or unlawful activity.
          </p>
          <p className="text-gray-700 mb-4">
            You represent that any Digital Assets you use in connection with the
            Services are legally obtained, owned by you, or used by you with
            valid authorization.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            16. Warranty Disclaimers
          </h3>
          <p className="text-gray-700 mb-4">
            THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO
            THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HIVE KEYCHAIN
            DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
            INCLUDING WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, NON-INFRINGEMENT, QUIET ENJOYMENT, ACCURACY,
            AVAILABILITY, SECURITY, AND RELIABILITY.
          </p>
          <p className="text-gray-700 mb-4">
            HIVE KEYCHAIN DOES NOT WARRANT THAT THE SERVICES, ANY DEVICE,
            BROWSER, EXTENSION, APP, THIRD-PARTY SERVICE, RPC, API, SMART
            CONTRACT, BRIDGE, ROUTE, OR NETWORK WILL BE SECURE, UNINTERRUPTED,
            ERROR-FREE, FREE FROM VULNERABILITIES, FREE FROM MALWARE, FREE FROM
            UNAUTHORIZED ACCESS, OR FREE FROM COMPROMISE.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            17. No Professional Advice or Fiduciary Duties
          </h3>
          <p className="text-gray-700 mb-4">
            Information provided through the Services is for convenience only
            and should not be construed as financial, investment, trading, tax,
            legal, security, or other professional advice. You are responsible
            for making your own decisions and should seek independent
            professional advice where appropriate.
          </p>
          <p className="text-gray-700 mb-4">
            These Terms do not create or impose any fiduciary duties on Hive
            Keychain. The only duties and obligations we have are those
            expressly set out in these Terms and applicable policies.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">18. Indemnity</h3>
          <p className="text-gray-700 mb-4">
            You will indemnify, defend, and hold harmless Hive Keychain and its
            affiliates, officers, directors, employees, agents, and
            representatives from and against claims, disputes, demands,
            liabilities, damages, losses, and expenses, including reasonable
            legal and accounting fees, arising out of or relating to your access
            to or use of the Services, your User Content, your use of
            third-party services, your violation of these Terms, or your
            approved transactions, signatures, authorizations, permissions, or
            interactions.
          </p>
          <p className="text-gray-700 mb-4">
            Your indemnification obligations do not apply to the extent a claim
            is finally determined to have resulted from Hive Keychain's fraud,
            willful misconduct, or liability that cannot be excluded under
            applicable law.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            19. Limitation of Liability
          </h3>
          <p className="text-gray-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE HIVE KEYCHAIN
            PARTIES SHALL NOT BE LIABLE FOR ANY LOST PROFITS, LOST REVENUE, LOSS
            OF GOODWILL, LOSS OF DATA, LOSS OF DIGITAL ASSETS, DIMINUTION IN
            VALUE, BUSINESS INTERRUPTION, OR ANY SPECIAL, INCIDENTAL, INDIRECT,
            EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN
            CONNECTION WITH THESE TERMS, THE SERVICES, DIGITAL ASSETS,
            BLOCKCHAIN NETWORKS, DAPPS, THIRD-PARTY SERVICES, OR ANY
            TRANSACTION, SIGNATURE, APPROVAL, AUTHORIZATION, MESSAGE, OR
            BROADCAST.
          </p>
          <p className="text-gray-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE HIVE KEYCHAIN
            PARTIES SHALL NOT BE LIABLE FOR LOSSES ARISING FROM PHISHING,
            SPOOFING, SOCIAL ENGINEERING, FAKE SUPPORT, MALWARE, COMPROMISED
            DEVICES, COMPROMISED BROWSERS, COMPROMISED EXTENSIONS, COMPROMISED
            OPERATING SYSTEMS, COMPROMISED CLOUD BACKUPS, COMPROMISED PASSWORD
            MANAGERS, COMPROMISED HARDWARE WALLETS, COMPROMISED RPCS,
            COMPROMISED APIS, COMPROMISED THIRD-PARTY PROVIDERS, MALICIOUS
            DAPPS, MALICIOUS TOKENS, MALICIOUS NFTS, MALICIOUS SMART CONTRACTS,
            FRAUDULENT APPROVAL REQUESTS, USER-APPROVED TRANSACTIONS,
            USER-APPROVED SIGNATURES, WRONG ADDRESSES, WRONG NETWORKS, WRONG
            CHAIN IDS, INACCURATE DISPLAYS, INACCURATE QUOTES, INACCURATE
            WARNINGS, INACCURATE TRANSACTION PREVIEWS, FAILED OR DELAYED
            BROADCASTS, FAILED SWAPS, FAILED BRIDGES, ROUTE FAILURES, OR YOUR
            FAILURE TO SECURE OR BACK UP YOUR WALLET CREDENTIALS.
          </p>
          <p className="text-gray-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            THE HIVE KEYCHAIN PARTIES' TOTAL LIABILITY TO YOU FOR ALL CLAIMS
            ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES EXCEED THE
            GREATER OF: (I) ONE HUNDRED U.S. DOLLARS (USD $100); OR (II) THE
            AMOUNT OF FEES, IF ANY, PAID BY YOU TO HIVE KEYCHAIN FOR THE
            RELEVANT SERVICES DURING THE TWELVE (12) MONTHS BEFORE THE EVENT
            GIVING RISE TO THE CLAIM.
          </p>
          <p className="text-gray-700 mb-4">
            NOTHING IN THESE TERMS EXCLUDES OR LIMITS LIABILITY TO THE EXTENT
            SUCH LIABILITY CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW,
            INCLUDING LIABILITY ARISING FROM FRAUD, WILLFUL MISCONDUCT, OR ANY
            OTHER LIABILITY THAT MAY NOT BE EXCLUDED OR LIMITED BY LAW.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            20. Governing Law and Dispute Resolution
          </h3>
          <p className="text-gray-700 mb-4">
            These Terms and any dispute arising out of or relating to them or
            the Services shall be governed by the laws of Hong Kong, without
            regard to conflict of law rules.
          </p>
          <p className="text-gray-700 mb-4">
            Before commencing formal proceedings, you agree to first contact
            Hive Keychain at{" "}
            <a href="mailto:contact@hive-keychain.com" className="text-red-700">
              contact@hive-keychain.com
            </a>{" "}
            and provide a reasonably detailed description of the dispute,
            including relevant account names, wallet addresses, transaction
            hashes, dApps, networks, dates, and facts where applicable. The
            parties shall use reasonable efforts to resolve the dispute
            informally within thirty (30) days after receipt of the notice.
          </p>
          <p className="text-gray-700 mb-4">
            Any dispute, controversy, difference, or claim arising out of or
            relating to these Terms, including the existence, validity,
            interpretation, performance, breach, or termination thereof, or any
            dispute regarding non-contractual obligations arising out of or
            relating to them, shall be referred to and finally resolved by
            arbitration administered by the Hong Kong International Arbitration
            Centre (HKIAC) under the HKIAC Administered Arbitration Rules in
            force when the Notice of Arbitration is submitted. The law of this
            arbitration clause shall be Hong Kong law. The seat of arbitration
            shall be Hong Kong. The number of arbitrators shall be one. The
            arbitration proceedings shall be conducted in English.
          </p>
          <p className="text-gray-700 mb-4">
            To the maximum extent permitted by applicable law, you and Hive
            Keychain agree that any dispute resolution proceedings shall be
            conducted only on an individual basis and not in a class,
            collective, consolidated, representative, or private attorney
            general action. If applicable law does not permit waiver of claims
            for public injunctive relief or other non-waivable consumer
            remedies, this paragraph does not require waiver of such claims or
            remedies.
          </p>
          <p className="text-gray-700 mb-4">
            Nothing in these Terms prevents either party from seeking interim,
            injunctive, conservatory, or equitable relief from any court of
            competent jurisdiction where necessary to protect intellectual
            property, confidential information, security, infrastructure, users,
            the Services, or to prevent fraud, abuse, phishing, impersonation,
            unauthorized access, or misuse of the Services. Nothing in this
            section limits rights that cannot be waived under applicable
            consumer protection laws or other mandatory laws of your
            jurisdiction.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            21. Changes to These Terms
          </h3>
          <p className="text-gray-700 mb-4">
            We may update these Terms from time to time by posting the updated
            version through the Services or on our website. Changes are
            effective when posted unless stated otherwise. Your continued use of
            the Services after changes become effective means that you accept
            the updated Terms.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            22. Contact Information
          </h3>
          <p className="text-gray-700 mb-4">
            If you have questions about these Terms or the Services, please
            contact us at{" "}
            <a href="mailto:contact@hive-keychain.com" className="text-red-700">
              contact@hive-keychain.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetaTermsOfService;
