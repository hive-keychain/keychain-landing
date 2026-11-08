export default function FeesPage() {
  return (
    <article className="legal-article" aria-label="Fees">
      <a className="legal-back" href="#/">← Back to home</a>
      <h1>Fees</h1>
      <p className="legal-company">Hive Keychain Ltd.</p>
      <p className="legal-effective">Last updated: November 8, 2026</p>
        <p>Keychain brings together wallet functions and exchange routes offered by Keychain Swap and independent providers. The fees you see depend on the service and the route you choose. The important distinction is between a fee we charge and a cost charged by a network or another provider.</p>
        <h2>1. Wallet use</h2>
        <p>Hive Keychain does not charge a service fee to install the browser extension or mobile app, create or import an existing wallet locally, view supported assets, connect to dApps, or approve and sign ordinary transactions. A blockchain may still charge its own network or resource costs to process an operation. Other independent services, including optional account-creation services, may charge their own fees.</p>
        <h2>2. Keychain Swap</h2>
        <p><strong>Keychain Swap is the swap service for which Hive Keychain charges a fee.</strong> The current Keychain Swap service fee is 0.75%. The fee is shown in the Keychain Swap interface before you submit a transaction. If the published rate changes, the rate displayed for your transaction at confirmation will apply.</p>
        <p>The fee is calculated on the swap output under the Keychain Swap route and is reflected in the estimated amount you receive. The final amount may still differ because of price changes, liquidity, slippage, or other execution conditions. Review the amount, destination asset, and displayed fee before sending funds to the processing account.</p>
        <h2>3. Other swaps and bridges</h2>
        <p><strong>Hive Keychain currently charges 0% additional service or integrator fee on swap and bridge routes operated by third-party providers.</strong> This includes third-party routes shown in the portfolio or swap interface; it does not make those routes free.</p>
        <p>An independent provider may charge a fee or include costs in its quoted rate, and the network or smart contracts involved may charge separately. Those charges belong to the relevant provider or network, not to Hive Keychain. We will clearly disclose any future Hive Keychain fee before it applies to a transaction.</p>
        <h2>4. Charges you may still pay</h2>
        <ul>
          <li><strong>Network and approval costs.</strong> Gas, blockchain resource charges, token approvals, and other on-chain transactions may require payment, including where a swap fails or an approval is later revoked.</li>
          <li><strong>Provider and route fees.</strong> Exchanges, bridge operators, aggregators, liquidity pools, and settlement providers may charge fees or use a rate that incorporates a spread. Some route fees are included in the quote rather than billed separately.</li>
          <li><strong>Price impact and slippage.</strong> Market movement, available liquidity, and execution timing can change the amount received. These are economic costs, not necessarily a separately charged fee.</li>
          <li><strong>Token-specific deductions.</strong> Some assets apply transfer taxes or other contract-level deductions.</li>
          <li><strong>Refund and recovery costs.</strong> An unsuccessful or interrupted route may result in network, provider, conversion, or administrative deductions. The amount returned may be lower than the amount sent.</li>
        </ul>
        <h2>5. Quotes and estimates</h2>
        <p>Where available, Keychain displays a provider fee, estimated network cost, expected output, and relevant route information before confirmation. A fee may sometimes be included in the exchange rate or not available as a separate line item. A missing or “undisclosed” fee field does not mean that a route has no cost.</p>
        <p>Quotes may expire, and some costs cannot be calculated precisely before execution. Always check the last confirmation screen and the provider's instructions. If you leave Keychain to complete a transaction with a provider, review that provider's final price and fee disclosure as well.</p>
        <h2>6. Fiat purchases and sales</h2>
        <p>Fiat on-ramp and off-ramp transactions are not currently enabled through Keychain. If these features are introduced, any payment-provider charges, foreign-exchange costs, or Keychain fees, if applicable, will be disclosed in the relevant flow before you proceed.</p>
        <h2>7. Failed transactions and refunds</h2>
        <p>Blockchain gas and some provider costs may be incurred even if a transaction fails or is cancelled. A provider may also hold a transaction for review or require additional information before refunding it. Refunds are governed by the route and provider involved; we cannot promise that every fee will be returned or that the refund will equal the original value.</p>
        <p>For a disputed charge, contact <a href="mailto:contact@hive-keychain.com">contact@hive-keychain.com</a> with the provider, network, transaction hash, and date. Do not send private keys or recovery phrases.</p>
        <h2>8. Changes to our fees</h2>
        <p>We may revise the Keychain Swap fee or introduce a Hive Keychain fee for another feature in the future. We will update this page and make reasonable efforts to notify users of material fee-policy changes through Keychain or our website. Supported versions of the browser extension may also ask you to acknowledge the updated Fees page when its published version changes. You are responsible for reviewing the current fee information before transacting.</p>
        <p>Any Hive Keychain fee that applies to a new transaction will be disclosed in the relevant confirmation flow. The rate presented when you confirm a transaction governs that transaction, subject to the validity of the quote; an expired or replaced quote may need to be confirmed again. A later fee-policy update does not retroactively change a fee for an already confirmed transaction.</p>
      <nav className="legal-crosslinks" aria-label="More legal pages">
        <span>Legal</span>
          <a className="btn btn-ghost btn-sm" href="#/terms">Terms of Service</a>
          <a className="btn btn-ghost btn-sm" href="#/privacy">Privacy Policy</a>
        <a className="btn btn-ghost btn-sm" href="#/">← Back to home</a>
      </nav>
    </article>
  );
}
