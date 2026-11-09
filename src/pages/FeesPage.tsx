export default function FeesPage() {
  return (
    <article className="legal-article" aria-label="Fees">
      <a className="legal-back" href="#/">← Back to home</a>
      <h1>Fees</h1>
      <p className="legal-company">Hive Keychain Ltd.</p>
      <p className="legal-effective">Last updated: November 8, 2026</p>
      <p>Keychain offers wallet functions and access to exchange routes through Keychain Swap and independent providers. The costs of a transaction depend on the route you select. This page distinguishes fees charged by Hive Keychain from charges imposed by networks and third parties.</p>
      <h2>1. Wallet use</h2>
      <p>Hive Keychain charges no service fee to install the extension or mobile app, create or import a wallet locally, view supported assets, connect to dApps, or sign ordinary transactions. Blockchain network or resource fees may still apply. Optional third-party services, including account-creation services, may charge separately.</p>
      <h2>2. Keychain Swap</h2>
      <p><strong>Keychain Swap carries a Hive Keychain service fee of 0.75% of the swap output.</strong> The fee is reflected in the estimated output and displayed in the Keychain Swap interface before confirmation. The rate shown when you confirm a valid quote applies to that transaction.</p>
      <p>Actual proceeds may differ from the estimate because of liquidity, market movement, slippage, or execution conditions. Check the receiving asset, expected output, and fee before transferring assets to the processing account.</p>
      <h2>3. Other swaps and bridges</h2>
      <p><strong>Hive Keychain currently charges no additional service or integrator fee (0%) for routes operated by third-party swap and bridge providers.</strong> Those routes are not necessarily free: providers may charge their own fees, build a spread into the exchange rate, or pass on network costs.</p>
      <p>If we introduce a Hive Keychain fee for these routes, we will disclose it before you confirm an affected transaction.</p>
      <h2>4. Other costs</h2>
      <ul>
        <li><strong>Network and approval fees:</strong> Gas, resource charges, token approvals, and revocations may cost money, even if the subsequent transaction fails.</li>
        <li><strong>Provider and route charges:</strong> Exchanges, aggregators, bridges, liquidity pools, and settlement providers may charge directly or include a fee in the quoted rate.</li>
        <li><strong>Price impact and slippage:</strong> The execution amount may differ because of liquidity or market conditions. These are economic costs rather than necessarily separate fees.</li>
        <li><strong>Token deductions:</strong> Some assets impose transfer taxes or other deductions through their contracts.</li>
        <li><strong>Refund and recovery costs:</strong> Failed or interrupted routes may incur network, provider, conversion, or administrative deductions. Any refund may be worth less than the amount sent.</li>
      </ul>
      <h2>5. Quotes and final amounts</h2>
      <p>Where available, Keychain shows the expected output, estimated network costs, provider charges, and route details before confirmation. Some costs are included in the exchange rate or cannot be shown separately. An empty or “undisclosed” fee field does not mean there is no cost.</p>
      <p>Quotes can expire, and certain charges cannot be determined precisely in advance. Review the final confirmation details and the selected provider's instructions. If you complete a transaction outside Keychain, that provider's final fee and price disclosures apply.</p>
      <h2>6. Failed transactions and refunds</h2>
      <p>Network fees and some provider charges can be incurred even when a transaction fails or is cancelled. Providers may also pause settlement, request information, or review a transaction before issuing a refund. Refund eligibility, timing, and deductions depend on the route and provider; we cannot guarantee recovery of all fees or the original value.</p>
      <p>For fee questions, contact <a href="mailto:contact@hive-keychain.com">contact@hive-keychain.com</a> with the provider, network, transaction hash, and date. Never send a private key or recovery phrase.</p>
      <h2>7. Changes to fees</h2>
      <p>We may change the Keychain Swap rate or introduce fees for other services. Updated rates will appear on this page and in the relevant transaction flow. We will make reasonable efforts to notify users of material changes through Keychain or our website. Supported extension versions may request acknowledgment of an updated Fees page.</p>
      <p>You are responsible for checking the current fee information before transacting. The rate displayed when you confirm a valid quote governs that transaction. An expired or replaced quote may require new confirmation, and later fee changes do not apply retroactively to a transaction already confirmed.</p>
      <nav className="legal-crosslinks" aria-label="More legal pages">
        <span>Legal</span>
        <a className="btn btn-ghost btn-sm" href="#/terms">Terms of Service</a>
        <a className="btn btn-ghost btn-sm" href="#/privacy">Privacy Policy</a>
        <a className="btn btn-ghost btn-sm" href="#/">← Back to home</a>
      </nav>
    </article>
  );
}
