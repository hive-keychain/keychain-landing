import React from 'react';

const BetaFees = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Hive Keychain Beta Fees</h1>

        <p className="text-gray-700 mb-4">
          This Fees page explains the fees currently charged by Hive Keychain for services made available through Hive Keychain Beta. It should be read together with the Hive Keychain Beta Terms of Service and Privacy Policy.
        </p>

        <p className="text-gray-700 mb-4">
          Hive Keychain may update this Fees page from time to time. Any Hive Keychain fee applicable to a transaction should be disclosed before you approve or confirm the relevant transaction.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">1. Hive Keychain Fees</h3>

        <p className="text-gray-700 mb-4">
          Hive Keychain currently charges the following fees:
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>
            <strong>Keychain Swap:</strong> 0.75% Hive Keychain fee on Keychain Swap transactions.
          </li>
          <li>
            <strong>Transak:</strong> 1% Hive Keychain fee on Transak transactions.
          </li>
          <li>
            <strong>LI.FI-powered routes:</strong> no Hive Keychain fee for now.
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          These are the only fees currently charged by Hive Keychain in connection with the Beta Services. Third-party fees and network costs may still apply as described below.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">2. Keychain Swap</h3>

        <p className="text-gray-700 mb-4">
          Keychain Swap may allow you to exchange supported Digital Assets through routes operated or processed by Hive Keychain. Hive Keychain currently charges a 0.75% fee on Keychain Swap transactions.
        </p>

        <p className="text-gray-700 mb-4">
          For certain Keychain Swap routes, you may send an input asset to a Hive Keychain-controlled or service-provider-controlled address so the requested swap can be processed and the resulting output asset can be sent to the address you provide or control. The Hive Keychain fee, estimated output amount, and relevant transaction details should be displayed before you approve or confirm the swap.
        </p>

        <p className="text-gray-700 mb-4">
          If a Keychain Swap transaction fails, is delayed, is partially completed, or cannot be completed as originally requested, you may receive the original input asset, an intermediate asset, a refund asset, a replacement asset, or another recovery amount depending on the route, liquidity, network conditions, and operational feasibility. The value of any returned or recovered asset may differ from the value expected when you initiated the swap.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">3. LI.FI-Powered Routes</h3>

        <p className="text-gray-700 mb-4">
          Some Beta swap, bridge, or cross-chain routes may be powered by LI.FI or other third-party providers. Hive Keychain does not currently charge a Hive Keychain fee on LI.FI-powered routes.
        </p>

        <p className="text-gray-700 mb-4">
          Even when Hive Keychain charges no fee on a LI.FI-powered route, you may still incur network gas, bridge fees, decentralized exchange fees, liquidity provider fees, route-provider fees, token transfer taxes, price impact, slippage, or other third-party costs. Those amounts are not charged by Hive Keychain unless expressly identified as a Hive Keychain fee.
        </p>

        <p className="text-gray-700 mb-4">
          LI.FI-powered routes are provided through third-party systems and protocols. Execution, settlement, refunds, recovery, route availability, quoted amounts, final output amounts, and support may depend on LI.FI, the relevant bridge, decentralized exchange, liquidity source, blockchain network, smart contract, RPC provider, or other third-party provider.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">4. Transak</h3>

        <p className="text-gray-700 mb-4">
          Hive Keychain currently charges a 1% fee on Transak transactions. Transak or its payment partners may also charge their own fees, spreads, payment processing fees, card fees, bank fees, or other charges. Those amounts are not Hive Keychain fees unless expressly identified as such.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">5. Network and Third-Party Costs</h3>

        <p className="text-gray-700 mb-4">
          When using the Beta Services, you may incur costs charged by blockchain networks, validators, RPC providers, bridges, decentralized exchanges, liquidity providers, aggregators, payment processors, token contracts, or other third parties. These may include gas, transaction fees, bridge fees, route fees, liquidity provider fees, slippage, price impact, token transfer taxes, payment processing fees, and similar costs.
        </p>

        <p className="text-gray-700 mb-4">
          Third-party and network costs are not charged by or paid to Hive Keychain unless they are clearly disclosed as a Hive Keychain fee. Hive Keychain is not responsible for third-party fees, network fees, route costs, price movement, slippage, failed transactions, delayed transactions, or changes in quoted or final amounts.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">6. Estimates and Displayed Amounts</h3>

        <p className="text-gray-700 mb-4">
          Fees, gas, output amounts, exchange rates, routes, bridge times, and other displayed values may be estimates. Actual amounts may differ due to network conditions, liquidity, volatility, gas changes, slippage, provider behavior, smart-contract execution, failed routes, delayed settlement, or other factors outside Hive Keychain's control.
        </p>

        <p className="text-gray-700 mb-4">
          Showing an estimated final output amount may not separately identify every fee, cost, spread, slippage effect, gas cost, route effect, bridge fee, provider charge, or third-party cost that affects the transaction. You are responsible for reviewing the transaction details before approval.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">7. Changes to Fees</h3>

        <p className="text-gray-700 mb-4">
          Hive Keychain may add, remove, or change fees at any time. Where Hive Keychain charges a fee, we aim to disclose the applicable fee before you approve or confirm the relevant transaction. Continued use of the relevant service after a fee change means you accept the updated fee.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-2">8. Contact</h3>

        <p className="text-gray-700 mb-4">
          If you have questions about Hive Keychain fees, please contact us at <a href="mailto:stoodkev@hive-keychain.com" className="text-red-700">stoodkev@hive-keychain.com</a>.
        </p>
      </div>
    </div>
  );
};

export default BetaFees;
