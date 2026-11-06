// Complete legal text extracted verbatim from the original mockup.
export default function FeesPage() {
  return (
      <article className="legal-article" aria-label="Fees">
        <a className="legal-back" href="#/">← Back to home</a>
        <h1>Hive Keychain Beta Fees</h1>
        <p className="legal-effective">Effective Date: July 8th, 2026</p>
        <p>This Fees page explains the fees currently charged by Hive Keychain for services made available through Hive Keychain Beta. It should be read together with the Hive Keychain Beta Terms of Service and Privacy Policy.</p>
        <p>Hive Keychain may update this Fees page from time to time. Any Hive Keychain fee applicable to a transaction should be disclosed before you approve or confirm the relevant transaction.</p>
        <h2>1. Hive Keychain Fees</h2>
        <p>Hive Keychain currently charges the following fees:</p>
        <ul>
          <li><strong>Keychain Swap:</strong> 0.75% Hive Keychain fee on Keychain Swap transactions.</li>
          <li><strong>Transak:</strong> 1% Hive Keychain fee on Transak transactions.</li>
          <li><strong>LI.FI-powered routes:</strong> no Hive Keychain fee for now.</li>
        </ul>
        <p>These are the only fees currently charged by Hive Keychain in connection with the Beta Services. Third-party fees and network costs may still apply as described below.</p>
        <h2>2. Keychain Swap</h2>
        <p>Keychain Swap may allow you to exchange supported Digital Assets through routes operated or processed by Hive Keychain. Hive Keychain currently charges a 0.75% fee on Keychain Swap transactions.</p>
        <p>For certain Keychain Swap routes, you may send an input asset to a Hive Keychain-controlled or service-provider-controlled address so the requested swap can be processed and the resulting output asset can be sent to the address you provide or control. The Hive Keychain fee, estimated output amount, and relevant transaction details should be displayed before you approve or confirm the swap.</p>
        <p>If a Keychain Swap transaction fails, is delayed, is partially completed, or cannot be completed as originally requested, you may receive the original input asset, an intermediate asset, a refund asset, a replacement asset, or another recovery amount depending on the route, liquidity, network conditions, and operational feasibility. The value of any returned or recovered asset may differ from the value expected when you initiated the swap.</p>
        <h2>3. LI.FI-Powered Routes</h2>
        <p>Some Beta swap, bridge, or cross-chain routes may be powered by LI.FI or other third-party providers. Hive Keychain does not currently charge a Hive Keychain fee on LI.FI-powered routes.</p>
        <p>Even when Hive Keychain charges no fee on a LI.FI-powered route, you may still incur network gas, bridge fees, decentralized exchange fees, liquidity provider fees, route-provider fees, token transfer taxes, price impact, slippage, or other third-party costs. Those amounts are not charged by Hive Keychain unless expressly identified as a Hive Keychain fee.</p>
        <p>LI.FI-powered routes are provided through third-party systems and protocols. Execution, settlement, refunds, recovery, route availability, quoted amounts, final output amounts, and support may depend on LI.FI, the relevant bridge, decentralized exchange, liquidity source, blockchain network, smart contract, RPC provider, or other third-party provider.</p>
        <h2>4. Transak</h2>
        <p>Hive Keychain currently charges a 1% fee on Transak transactions. Transak or its payment partners may also charge their own fees, spreads, payment processing fees, card fees, bank fees, or other charges. Those amounts are not Hive Keychain fees unless expressly identified as such.</p>
        <h2>5. Network and Third-Party Costs</h2>
        <p>When using the Beta Services, you may incur costs charged by blockchain networks, validators, RPC providers, bridges, decentralized exchanges, liquidity providers, aggregators, payment processors, token contracts, or other third parties. These may include gas, transaction fees, bridge fees, route fees, liquidity provider fees, slippage, price impact, token transfer taxes, payment processing fees, and similar costs.</p>
        <p>Third-party and network costs are not charged by or paid to Hive Keychain unless they are clearly disclosed as a Hive Keychain fee. Hive Keychain is not responsible for third-party fees, network fees, route costs, price movement, slippage, failed transactions, delayed transactions, or changes in quoted or final amounts.</p>
        <h2>6. Estimates and Displayed Amounts</h2>
        <p>Fees, gas, output amounts, exchange rates, routes, bridge times, and other displayed values may be estimates. Actual amounts may differ due to network conditions, liquidity, volatility, gas changes, slippage, provider behavior, smart-contract execution, failed routes, delayed settlement, or other factors outside Hive Keychain's control.</p>
        <p>Showing an estimated final output amount may not separately identify every fee, cost, spread, slippage effect, gas cost, route effect, bridge fee, provider charge, or third-party cost that affects the transaction. You are responsible for reviewing the transaction details before approval.</p>
        <h2>7. Changes to Fees</h2>
        <p>Hive Keychain may add, remove, or change fees at any time. Where Hive Keychain charges a fee, we aim to disclose the applicable fee before you approve or confirm the relevant transaction. Continued use of the relevant service after a fee change means you accept the updated fee.</p>
        <h2>8. Contact</h2>
        <p>If you have questions about Hive Keychain fees, please contact us at <a href="mailto:stoodkev@hive-keychain.com">stoodkev@hive-keychain.com</a>.</p>
        <nav className="legal-crosslinks" aria-label="More legal pages"><span>Legal</span><a className="btn btn-ghost btn-sm" href="#/terms">Terms of Service</a><a className="btn btn-ghost btn-sm" href="#/privacy">Privacy Policy</a><a className="btn btn-ghost btn-sm" href="#/">← Back to home</a></nav>
      </article>
  );
}
