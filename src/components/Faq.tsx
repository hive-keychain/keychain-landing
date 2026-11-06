import { useState } from 'react';

export default function Faq() {
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
          <div className="faq-list">
            <div className={'faq-item' + (openItems.has(0) ? ' open' : '')}>
              <button type="button" aria-expanded={openItems.has(0)} onClick={() => toggle(0)}>Can I import my existing EVM wallet into Keychain? <span className="new-pill">New</span><svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
              <div className="ans">Yes. Import your existing seed phrase or private key during setup and your EVM addresses appear next to your Hive accounts, in the same wallet and with the same backup. Your funds don’t move. Keychain simply manages the keys you already own, locally on your device.</div>
            </div>
            <div className={'faq-item reveal' + (openItems.has(1) ? ' open' : '')}>
              <button type="button" aria-expanded={openItems.has(1)} onClick={() => toggle(1)}>Which networks does Keychain support? <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
              <div className="ans">Hive plus Ethereum, BNB Chain, Polygon, Avalanche, Base, Arbitrum and Optimism come included, with fees and token discovery taken care of on all of them. Any other EVM network can be added and used too. Multichain is available now on the browser extension, and coming to iOS and Android soon.</div>
            </div>
            <div className={'faq-item reveal' + (openItems.has(2) ? ' open' : '')}>
              <button type="button" aria-expanded={openItems.has(2)} onClick={() => toggle(2)}>Is Keychain custodial? <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
              <div className="ans">No. You hold your own keys. They are created and encrypted on your device and never sent to a server. If you lose your device and your backup, nobody can recover your funds, not even us.</div>
            </div>
            <div className={'faq-item reveal' + (openItems.has(3) ? ' open' : '')}>
              <button type="button" aria-expanded={openItems.has(3)} onClick={() => toggle(3)}>I already use Keychain for Hive. What changes for me? <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
              <div className="ans">Nothing you don’t want. Your Hive accounts work exactly as before; EVM networks simply appear in the same wallet when you add them.</div>
            </div>
            <div className={'faq-item reveal' + (openItems.has(4) ? ' open' : '')}>
              <button type="button" aria-expanded={openItems.has(4)} onClick={() => toggle(4)}>How do swaps work across chains? <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
              <div className="ans">The swap built into Keychain compares several providers for your route and takes the best rate. You see the provider, the rate and the fees before you confirm. There is no hidden spread.</div>
            </div>
            <div className={'faq-item reveal' + (openItems.has(5) ? ' open' : '')}>
              <button type="button" aria-expanded={openItems.has(5)} onClick={() => toggle(5)}>Is Keychain free? <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
              <div className="ans">Yes. The extension and the mobile app are free, and the code is open source. Network fees and any provider fees on swaps are shown before you confirm.</div>
            </div>
          </div>
        </div>
      </section>
  );
}
