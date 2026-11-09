import { useState, type ReactNode } from 'react';
import HiveDemo from './HiveDemo';

const NETWORKS = {
  hive: { name: 'Hive', color: '#e31337', balance: '1,205 HIVE', from: '100 HIVE', to: '42.70 HBD' },
  ethereum: { name: 'Ethereum', color: '#627eea', balance: '0.42 ETH', from: '0.05 ETH', to: '132.40 USDC' },
  base: { name: 'Base', color: '#0052ff', balance: '100 USDC', from: '100 USDC', to: '0.037 ETH' },
  polygon: { name: 'Polygon', color: '#8247e5', balance: '640 POL', from: '100 POL', to: '19.80 USDC' },
  bnb: { name: 'BNB Chain', color: '#f0b90b', balance: '0.85 BNB', from: '0.10 BNB', to: '59.20 USDC' },
} as const;

type NetworkKey = keyof typeof NETWORKS;
type DemoTab = 'swap' | 'cross-chain' | 'portfolio' | 'power' | 'hive';

const TABS: { id: DemoTab; label: string }[] = [
  { id: 'swap', label: 'Swaps' },
  { id: 'cross-chain', label: 'Cross-chain' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'power', label: 'Hive Power' },
  { id: 'hive', label: 'Hive operations' },
];

function CheckIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>;
}

function HiveMark({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 220 190" fill="currentColor" aria-hidden="true">
      <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
      <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
    </svg>
  );
}

function NetworkIcon({ id, size = 'normal' }: { id: NetworkKey; size?: 'normal' | 'small' }) {
  const px = size === 'small' ? 12 : 14;
  if (id === 'hive') {
    return <span className="ico" style={{ background: NETWORKS[id].color }}><HiveMark size={px} /></span>;
  }
  return <span className="ico logo"><img src={`assets/chain-${id}.png`} alt="" /></span>;
}

function DemoHeader({ children, status = 'Illustrative example' }: { children: ReactNode; status?: string }) {
  return <div className="d-head"><span className="d-net">{children}</span><span className="d-live">● {status}</span></div>;
}

export default function ProductDemo() {
  const [tab, setTab] = useState<DemoTab>('swap');
  const [network, setNetwork] = useState<NetworkKey>('hive');
  const selected = NETWORKS[network];

  return (
    <section className="block" id="demo">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Explore what Keychain can do</h2>
          <p>Try five product views. Sample balances and routes are illustrative; the Hive operations tab connects to the real extension and asks before any action.</p>
        </div>

        <div className="tabs" role="tablist" aria-label="Product demo">
          {TABS.map((item) => (
            <button type="button" role="tab" id={`dtab-${item.id}`} aria-selected={tab === item.id} aria-controls={`dpanel-${item.id}`} onClick={() => setTab(item.id)} key={item.id}>
              {item.label}
            </button>
          ))}
        </div>

        <div id="dpanel-swap" role="tabpanel" aria-labelledby="dtab-swap" hidden={tab !== 'swap'}>
          <div className="demo-shell">
            <div className="demo-card">
              <DemoHeader><NetworkIcon id={network} />{selected.name}</DemoHeader>
              <div className="d-bal">Sample balance on this network<b>{selected.balance}</b></div>
              <div className="demo-route">
                <div className="r-lbl">Recommended route · sample only</div>
                <div className="r-main"><span>{selected.from}</span><span className="arrow">→</span><span>{selected.to}</span></div>
                <div className="r-sub"><b>Provider A</b> · expected output and estimated costs shown before approval</div>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Another available route</div>
                <div className="r-sub" style={{ marginTop: '4px' }}><b>Provider B</b> · compare the quote details and choose for yourself</div>
              </div>
              <div className="net-chips" role="group" aria-label="Switch illustrative network">
                {(Object.keys(NETWORKS) as NetworkKey[]).map((id) => (
                  <button type="button" aria-pressed={network === id} onClick={() => setNetwork(id)} key={id}>
                    <NetworkIcon id={id} size="small" />{NETWORKS[id].name}
                  </button>
                ))}
              </div>
              <p className="try-hint" style={{ color: '#57d98e' }}>↑ Try it: switch networks to update the illustrative route.</p>
            </div>
            <div className="demo-copy">
              <h3>Compare routes. Choose how you swap.</h3>
              <p>When quotes are available, Keychain can recommend a route and show alternatives. Review the provider, expected output, and costs before selecting one.</p>
              <ul>
                <li><CheckIcon /> Same-network and cross-network routes may be available</li>
                <li><CheckIcon /> Quote availability depends on the assets, networks, and providers</li>
                <li><CheckIcon /> See the <a href="/fees">Fees page</a> for Keychain’s fee policy</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="dpanel-cross-chain" role="tabpanel" aria-labelledby="dtab-cross-chain" hidden={tab !== 'cross-chain'}>
          <div className="demo-shell">
            <div className="demo-card">
              <DemoHeader><NetworkIcon id="base" />Cross-chain route</DemoHeader>
              <div className="demo-route">
                <div className="r-lbl">Sample route</div>
                <div className="r-main"><span>100 USDC · Ethereum</span><span className="arrow">→</span><span>USDC · Base</span></div>
                <div className="r-sub">Illustrative provider route · review the destination, expected output, and costs before approval</div>
              </div>
              <div className="demo-route">
                <div className="r-lbl">How routes can work</div>
                <div className="r-sub" style={{ marginTop: '4px' }}>Depending on availability, a provider may use smart contracts, bridges, or provider-managed exchanges.</div>
              </div>
            </div>
            <div className="demo-copy">
              <h3>Move assets between networks.</h3>
              <p>Keychain brings supported cross-network routes into the wallet so you can review the complete quote before deciding.</p>
              <ul>
                <li><CheckIcon /> Available routes vary by asset, source, destination, and provider</li>
                <li><CheckIcon /> You remain responsible for checking every transaction detail</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="dpanel-portfolio" role="tabpanel" aria-labelledby="dtab-portfolio" hidden={tab !== 'portfolio'}>
          <div className="demo-shell">
            <div className="demo-card">
              <DemoHeader>Portfolio overview</DemoHeader>
              <div className="d-bal">Illustrative total value<b>$4,820.30</b></div>
              <div className="demo-route">
                <div className="r-lbl">Sample assets</div>
                <div className="r-main"><span>HIVE · ETH · USDC</span></div>
                <div className="r-sub">Across Hive, Ethereum, Base, and Polygon · sample values only</div>
              </div>
              <div className="demo-route">
                <div className="r-lbl">More activity</div>
                <div className="r-sub" style={{ marginTop: '4px' }}>Token balances · NFTs where supported · transaction history</div>
              </div>
            </div>
            <div className="demo-copy">
              <h3>Your assets, in one place.</h3>
              <p>The browser extension can bring supported EVM token balances, NFTs, and history together with your wallet accounts.</p>
              <ul>
                <li><CheckIcon /> Switch networks without leaving the extension</li>
                <li><CheckIcon /> Asset data depends on network and data-provider support</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="dpanel-power" role="tabpanel" aria-labelledby="dtab-power" hidden={tab !== 'power'}>
          <div className="demo-shell">
            <div className="demo-card">
              <DemoHeader><NetworkIcon id="hive" />Hive Power</DemoHeader>
              <div className="d-bal">Illustrative balance<b>8,420 HP</b></div>
              <div className="demo-route">
                <div className="r-lbl">Sample account view</div>
                <div className="r-main"><span>Available RC</span><span className="arrow">·</span><span>82%</span></div>
                <div className="r-sub">Incoming and outgoing delegations · sample values only</div>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Account actions</div>
                <div className="r-sub" style={{ marginTop: '4px' }}>Power up · power down · delegate · manage resource credits</div>
              </div>
            </div>
            <div className="demo-copy">
              <h3>Take control of your Hive Power.</h3>
              <p>Manage Hive Power, delegations, and account resources directly from Keychain with operations designed for Hive accounts.</p>
              <ul>
                <li><CheckIcon /> Review the operation before it is broadcast</li>
                <li><CheckIcon /> See balances, delegations, and resource status together</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="dpanel-hive" role="tabpanel" aria-labelledby="dtab-hive" hidden={tab !== 'hive'}>
          <div className="demo-shell">
            <HiveDemo />
            <div className="demo-copy">
              <h3>Try real Hive operations—with your approval.</h3>
              <p>The sign-in step requests a signature only; it is not broadcast to Hive and does not change your account. Follow, vote, and post are optional onchain actions, each broadcast only after you approve it in Keychain.</p>
              <ul>
                <li><CheckIcon /> Sign in with a non-broadcast message signature</li>
                <li><CheckIcon /> Skip any optional follow, vote, or post action</li>
                <li><CheckIcon /> Keychain shows the request before you authorize it</li>
              </ul>
              <p style={{ marginTop: '14px', fontSize: '14px' }}>No Keychain yet? <a href="#download" style={{ color: 'var(--red)', fontWeight: 800 }}>Choose a supported app</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
