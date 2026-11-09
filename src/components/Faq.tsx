import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const QUESTIONS = [
  {
    question: 'What is Hive Keychain?',
    answer: 'Hive Keychain is a self-custodial wallet for Hive. Its browser extension also supports selected EVM networks, while the iOS and Android apps remain focused on Hive.',
  },
  {
    question: 'Is Keychain free?',
    answer: <>Yes. The extension and mobile app are free and open source. Network fees and any applicable provider fees still apply; see the <a href="/fees">Fees page</a>.</>,
  },
  {
    question: 'Which networks does the browser extension support?',
    answer: 'Hive, Ethereum, BNB Chain, Avalanche C-Chain, Arbitrum One, Base, Polygon PoS, and Optimism are included. Supported testnets are available, and other compatible EVM networks can be configured manually.',
    answerKey: 'faq.networks.answer',
  },
  {
    question: 'Does Keychain Mobile support EVM?',
    answer: 'Not yet. EVM accounts and networks are currently only supported in the browser extension. The iOS and Android Apps only support Hive for the time being.',
  },
  {
    question: 'Can I import existing accounts?',
    answer: 'Yes. Hive accounts can be added with the relevant Hive keys or master password. EVM accounts can be added with a seed phrase, private key, or compatible Ledger device in the browser extension. Hive and EVM credentials are different, so back up each one using the instructions shown in Keychain.',
  },
  {
    question: 'Where does Keychain store my keys?',
    answer: 'Keychain encrypts wallet credentials locally on your device. It does not keep a server copy or offer account recovery. If you lose your credentials and backup, Keychain cannot restore them.',
  },
  {
    question: 'How do swaps and cross-chain routes work?',
    answer: <>When routes are available, Keychain can show a recommended option and alternatives so you can review the provider, expected output, and costs before choosing. Availability and results depend on the assets, networks, and providers involved. Read the <a href="/fees">Fees page</a> for the fee policy.</>,
  },
  {
    question: 'Do existing Hive users need to migrate?',
    answer: 'No. Existing Hive accounts continue to work as before. EVM accounts are an additional browser-extension feature you can choose to set up.',
  },
] as const;

export default function Faq() {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<ReadonlySet<number>>(new Set([0]));
  const toggle = (i: number) =>
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  return (
      <section className="block" id="faq">
        <div className="wrap">
          <div className="sec-head center reveal">
            <h2>Questions, answered</h2>
          </div>
          <div className="faq-list reveal-group">
            {QUESTIONS.map((item, index) => {
              const answerId = `faq-answer-${index}`;
              const isOpen = openItems.has(index);
              return (
                <div className={'faq-item' + (isOpen ? ' open' : '')} key={item.question}>
                  <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => toggle(index)}>
                    {item.question}
                    <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <div className="ans" id={answerId}>
                    {'answerKey' in item ? t(item.answerKey) : item.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
