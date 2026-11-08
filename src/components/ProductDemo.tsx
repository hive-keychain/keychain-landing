import { useState } from "react";
import HiveDemo from "./HiveDemo";

const NETS: Record<
  string,
  {
    name: string;
    color: string;
    balance: string;
    from: string;
    to: string;
    sub: string;
  }
> = {
  hive: {
    name: "Hive",
    color: "#e31337",
    balance: "1,205 HIVE · $1,940.55",
    from: "100 HIVE",
    to: "USDC · Base",
    sub: "6 providers compared · best rate by <b>Provider A</b> · 0% launch fee",
  },
  ethereum: {
    name: "Ethereum",
    color: "#627eea",
    balance: "0.42 ETH · $1,512.30",
    from: "0.05 ETH",
    to: "HIVE · Hive",
    sub: "6 providers compared · best rate by <b>Provider B</b> · gas estimate shown",
  },
  base: {
    name: "Base",
    color: "#0052ff",
    balance: "0.23 ETH · $827.27",
    from: "100 USDC",
    to: "HIVE · Hive",
    sub: "6 providers compared · best rate by <b>Provider A</b> · 0% launch fee",
  },
  polygon: {
    name: "Polygon",
    color: "#8247e5",
    balance: "640 POL · $412.80",
    from: "100 POL",
    to: "USDC · Ethereum",
    sub: "5 providers compared · best rate by <b>Provider C</b> · low L2 fees",
  },
  bnb: {
    name: "BNB Chain",
    color: "#f0b90b",
    balance: "0.85 BNB · $730.15",
    from: "0.1 BNB",
    to: "HBD · Hive",
    sub: "5 providers compared · best rate by <b>Provider B</b> · fee shown up front",
  },
};

const DEMO_TABS = ["swap", "bridge", "buy", "stake", "hive"] as const;
type DemoTab = (typeof DEMO_TABS)[number];

export default function ProductDemo() {
  const [tab, setTab] = useState<DemoTab>("swap");
  const [net, setNet] = useState<string>("hive");
  const netData = NETS[net];
  return (
    <section className="block" id="demo">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>See what one wallet can do</h2>
          <p>
            Put Keychain to the test before you go live. Swap, bridge, buy,
            stake and run your Hive operations in one place.
          </p>
        </div>
        <div className="tabs" role="tablist" aria-label="Product demo">
          <button
            type="button"
            role="tab"
            id="dtab-swap"
            aria-selected={tab === "swap"}
            onClick={() => setTab("swap")}
            aria-controls="dpanel-swap"
            data-dtab="swap"
          >
            Swap across chains
          </button>
          <button
            type="button"
            role="tab"
            id="dtab-bridge"
            aria-selected={tab === "bridge"}
            onClick={() => setTab("bridge")}
            aria-controls="dpanel-bridge"
            data-dtab="bridge"
          >
            Bridge
          </button>
          <button
            type="button"
            role="tab"
            id="dtab-buy"
            aria-selected={tab === "buy"}
            onClick={() => setTab("buy")}
            aria-controls="dpanel-buy"
            data-dtab="buy"
          >
            Buy
          </button>
          <button
            type="button"
            role="tab"
            id="dtab-stake"
            aria-selected={tab === "stake"}
            onClick={() => setTab("stake")}
            aria-controls="dpanel-stake"
            data-dtab="stake"
          >
            Stake
          </button>
          <button
            type="button"
            role="tab"
            id="dtab-hive"
            aria-selected={tab === "hive"}
            onClick={() => setTab("hive")}
            aria-controls="dpanel-hive"
            data-dtab="hive"
          >
            Hive operations
          </button>
        </div>
        <div
          id="dpanel-swap"
          role="tabpanel"
          aria-labelledby="dtab-swap"
          hidden={tab !== "swap"}
        >
          <div className="demo-shell">
            <div className="demo-card">
              <div className="d-head">
                <span className="d-net">
                  <span
                    className={net === "hive" ? "ico" : "ico logo"}
                    id="demoIco"
                    style={{
                      background: net === "hive" ? netData.color : "#fff",
                    }}
                  >
                    {net === "hive" ? (
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 220 190"
                        fill="currentColor"
                      >
                        <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
                        <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
                      </svg>
                    ) : (
                      <img src={`assets/chain-${net}.png`} alt="" />
                    )}
                  </span>
                  <span id="demoNetName">{netData.name}</span>
                </span>
                <span className="d-live">● Network active</span>
              </div>
              <div className="d-bal">
                Balance on this network<b id="demoBalance">{netData.balance}</b>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Best swap route</div>
                <div className="r-main">
                  <span id="demoFrom">{netData.from}</span>
                  <span className="arrow">→</span>
                  <span id="demoTo">{netData.to}</span>
                </div>
                <div
                  className="r-sub"
                  id="demoRouteSub"
                  dangerouslySetInnerHTML={{ __html: netData.sub }}
                />
              </div>
              <div
                className="net-chips"
                role="group"
                aria-label="Switch demo network"
              >
                <button
                  type="button"
                  aria-pressed={net === "hive"}
                  data-net="hive"
                  onClick={() => setNet("hive")}
                >
                  <span className="ico" style={{ background: "#e31337" }}>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 220 190"
                      fill="currentColor"
                    >
                      <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
                      <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
                    </svg>
                  </span>
                  Hive
                </button>
                <button
                  type="button"
                  aria-pressed={net === "ethereum"}
                  data-net="ethereum"
                  onClick={() => setNet("ethereum")}
                >
                  <span className="ico logo">
                    <img src="assets/chain-ethereum.png" alt="" />
                  </span>
                  Ethereum
                </button>
                <button
                  type="button"
                  aria-pressed={net === "base"}
                  data-net="base"
                  onClick={() => setNet("base")}
                >
                  <span className="ico logo">
                    <img src="assets/chain-base.png" alt="" />
                  </span>
                  Base
                </button>
                <button
                  type="button"
                  aria-pressed={net === "polygon"}
                  data-net="polygon"
                  onClick={() => setNet("polygon")}
                >
                  <span className="ico logo">
                    <img src="assets/chain-polygon.png" alt="" />
                  </span>
                  Polygon
                </button>
                <button
                  type="button"
                  aria-pressed={net === "bnb"}
                  data-net="bnb"
                  onClick={() => setNet("bnb")}
                >
                  <span className="ico logo">
                    <img src="assets/chain-bnb.png" alt="" />
                  </span>
                  BNB Chain
                </button>
              </div>
              <p className="try-hint" style={{ color: "#57d98e" }}>
                ↑ Try it. Tap a network and the wallet switches right away.
              </p>
            </div>
            <div className="demo-copy">
              <h3>One tap switches the whole wallet</h3>
              <p>
                Pick a network and everything else follows. Balances, dApp
                connections, signing prompts and swap routes all update. Tap the
                buttons in the demo to try it. That is how it feels in the app.
              </p>
              <ul>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Swaps between chains compare 6 providers for each route and
                  take the best rate
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Routes between Hive and EVM networks, not just within one
                  ecosystem
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Rate, provider and fees shown before you confirm
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="dpanel-bridge"
          role="tabpanel"
          aria-labelledby="dtab-bridge"
          hidden={tab !== "bridge"}
        >
          <div className="demo-shell">
            <div className="demo-card">
              <div className="d-head">
                <span className="d-net">
                  <span className="ico logo">
                    <img src="assets/chain-base.png" alt="" />
                  </span>
                  Bridge
                </span>
                <span className="d-live">● Route found</span>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Route</div>
                <div className="r-main">
                  <span>500 HBD</span>
                  <span className="arrow">→</span>
                  <span>USDC · Base</span>
                </div>
                <div className="r-sub">
                  Estimated arrival ~10 min · fee shown before you confirm ·{" "}
                  <b>no detours through wrapped tokens</b>
                </div>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Also available</div>
                <div className="r-sub" style={{ marginTop: "4px" }}>
                  HIVE → Ethereum · USDC → Hive · ETH → Arbitrum
                </div>
              </div>
            </div>
            <div className="demo-copy">
              <h3>Move value between ecosystems</h3>
              <p>
                Bridging is where most multichain wallets send you off to
                another website. With Keychain, the route, the fee and the
                arrival estimate are all on the same confirmation screen.
              </p>
              <ul>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Hive ↔ EVM routes in both directions
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  You can follow the status inside the wallet until it arrives
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="dpanel-buy"
          role="tabpanel"
          aria-labelledby="dtab-buy"
          hidden={tab !== "buy"}
        >
          <div className="demo-shell">
            <div className="demo-card">
              <div className="d-head">
                <span className="d-net">
                  <span className="ico" style={{ background: "#e31337" }}>
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 220 190"
                      fill="currentColor"
                    >
                      <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
                      <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
                    </svg>
                  </span>
                  Buy HIVE & USDC
                </span>
                <span className="d-live">● Providers live</span>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Pay with</div>
                <div className="r-main">
                  <span>Card · Pix · Local transfer</span>
                </div>
                <div className="r-sub">
                  Regional routes for <b>BRL, ARS, CUP</b> and more. Provider,
                  rate and limits are shown before you pay
                </div>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Delivered to</div>
                <div className="r-sub" style={{ marginTop: "4px" }}>
                  Straight to your Keychain address. No exchange account and no
                  manual withdrawal
                </div>
              </div>
            </div>
            <div className="demo-copy">
              <h3>Buy in your own currency</h3>
              <p>
                Buy through providers that take local payment methods, including
                routes in Latin America that most wallets skip. The funds land
                directly in your wallet, where you hold the keys.
              </p>
              <ul>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Guides written for each region, made for people buying for the
                  first time
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Multiple providers compared on rate and limits
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="dpanel-stake"
          role="tabpanel"
          aria-labelledby="dtab-stake"
          hidden={tab !== "stake"}
        >
          <div className="demo-shell">
            <div className="demo-card">
              <div className="d-head">
                <span className="d-net">
                  <span className="ico" style={{ background: "#e31337" }}>
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 220 190"
                      fill="currentColor"
                    >
                      <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
                      <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
                    </svg>
                  </span>
                  Stake & delegate
                </span>
                <span className="d-live">● Earning</span>
              </div>
              <div className="demo-route">
                <div className="r-lbl">Hive</div>
                <div className="r-main">
                  <span>Power up HIVE</span>
                </div>
                <div className="r-sub">
                  Stake for Hive Power, delegate to creators and dApps, track
                  curation rewards
                </div>
              </div>
              <div className="demo-route">
                <div className="r-lbl">EVM</div>
                <div className="r-sub" style={{ marginTop: "4px" }}>
                  Stake ETH and L2 assets through connected protocols. Your
                  positions sit next to your Hive stake
                </div>
              </div>
            </div>
            <div className="demo-copy">
              <h3>Put idle assets to work</h3>
              <p>
                Hive Power sits on one side and EVM staking on the other. One
                screen shows what you have staked, what it earns and when it
                unlocks.
              </p>
              <ul>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Delegations and unstaking timers in one view
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Rewards tracked across both ecosystems
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="dpanel-hive"
          role="tabpanel"
          aria-labelledby="dtab-hive"
          hidden={tab !== "hive"}
        >
          <div className="demo-shell">
            <HiveDemo />
            <div className="demo-copy">
              <h3>Hive is social. Do it from your wallet</h3>
              <p>
                This card is real, not a mockup. Connect with Keychain and it
                walks you through three live actions, one step at a time. Follow{" "}
                <strong>@keychain</strong>, vote on the Hive Keychain
                Development Proposal 2026 and publish a post of your own. You
                confirm and sign each one inside Keychain.
              </p>
              <ul>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Sign in by signing a message. No key ever leaves your device
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Follow @keychain so its posts land in your Hive feed
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>{" "}
                  Upvote the Hive Keychain Development Proposal 2026 at 100% and
                  publish your own post, all confirmed in Keychain
                </li>
              </ul>
              <p style={{ marginTop: "14px", fontSize: "14px" }}>
                No Keychain yet?{" "}
                <a
                  href="https://hive-keychain.com"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--red)", fontWeight: "800" }}
                >
                  Install the extension
                </a>{" "}
                and reload this page. The form to sign in will appear on its
                own.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
