import { useSnapCarousel } from "../hooks/useSnapCarousel";
import CarouselDots from "./CarouselDots";

export default function Chains() {
  const carousel = useSnapCarousel(8);
  return (
    <section className="block alt" id="chains" style={{ paddingTop: "64px" }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Hive and EVM, ready to go.</h2>
          <p>
            Start with Hive and seven built-in EVM mainnets, plus supported
            testnets. Need another EVM network? Add it directly from Keychain.
          </p>
        </div>
        <div className="marquee reveal" aria-label="Supported networks">
          <div className="marquee-track">
            <span className="mq-item">
              <span className="ico" style={{ background: "#e31337" }}>
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 220 190"
                  fill="currentColor"
                >
                  <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
                  <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
                </svg>
              </span>
              Hive
            </span>
            <span className="mq-item">
              <span className="ico logo">
                <img src="assets/chain-ethereum.png" alt="" />
              </span>
              Ethereum
            </span>
            <span className="mq-item">
              <span className="ico logo">
                <img src="assets/chain-bnb.png" alt="" />
              </span>
              BNB Chain
            </span>
            <span className="mq-item">
              <span className="ico logo">
                <img src="assets/chain-polygon.png" alt="" />
              </span>
              Polygon
            </span>
            <span className="mq-item">
              <span className="ico logo">
                <img src="assets/chain-avalanche.png" alt="" />
              </span>
              Avalanche
            </span>
            <span className="mq-item">
              <span className="ico logo">
                <img src="assets/chain-base.png" alt="" />
              </span>
              Base
            </span>
            <span className="mq-item">
              <span className="ico logo">
                <img src="assets/chain-arbitrum.png" alt="" />
              </span>
              Arbitrum
            </span>
            <span className="mq-item">
              <span className="ico logo">
                <img src="assets/chain-optimism.png" alt="" />
              </span>
              Optimism
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico" style={{ background: "#e31337" }}>
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 220 190"
                  fill="currentColor"
                >
                  <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
                  <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
                </svg>
              </span>
              Hive
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico logo">
                <img src="assets/chain-ethereum.png" alt="" />
              </span>
              Ethereum
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico logo">
                <img src="assets/chain-bnb.png" alt="" />
              </span>
              BNB Chain
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico logo">
                <img src="assets/chain-polygon.png" alt="" />
              </span>
              Polygon
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico logo">
                <img src="assets/chain-avalanche.png" alt="" />
              </span>
              Avalanche
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico logo">
                <img src="assets/chain-base.png" alt="" />
              </span>
              Base
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico logo">
                <img src="assets/chain-arbitrum.png" alt="" />
              </span>
              Arbitrum
            </span>
            <span className="mq-item" aria-hidden="true">
              <span className="ico logo">
                <img src="assets/chain-optimism.png" alt="" />
              </span>
              Optimism
            </span>
          </div>
        </div>
        <p className="mc-line reveal">
          <strong>Browser extension: Hive + EVM</strong> · iOS and Android: Hive
        </p>
        <div className="chains-grid reveal-group" ref={carousel.trackRef}>
          <div className="chain-card">
            <div className="top">
              <span className="ico" style={{ background: "#e31337" }}>
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 220 190"
                  fill="currentColor"
                >
                  <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
                  <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
                </svg>
              </span>
              <div>
                <h3>Hive</h3>
                <div className="kind">Native chain</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
          <div className="chain-card">
            <div className="top">
              <span className="ico logo">
                <img src="assets/chain-ethereum.png" alt="" />
              </span>
              <div>
                <h3>Ethereum</h3>
                <div className="kind">EVM · Mainnet</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
          <div className="chain-card">
            <div className="top">
              <span className="ico logo">
                <img src="assets/chain-bnb.png" alt="" />
              </span>
              <div>
                <h3>BNB Chain</h3>
                <div className="kind">EVM</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
          <div className="chain-card">
            <div className="top">
              <span className="ico logo">
                <img src="assets/chain-polygon.png" alt="" />
              </span>
              <div>
                <h3>Polygon</h3>
                <div className="kind">EVM · PoS</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
          <div className="chain-card">
            <div className="top">
              <span className="ico logo">
                <img src="assets/chain-avalanche.png" alt="" />
              </span>
              <div>
                <h3>Avalanche</h3>
                <div className="kind">EVM · C-Chain</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
          <div className="chain-card">
            <div className="top">
              <span className="ico logo">
                <img src="assets/chain-base.png" alt="" />
              </span>
              <div>
                <h3>Base</h3>
                <div className="kind">EVM · L2</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
          <div className="chain-card">
            <div className="top">
              <span className="ico logo">
                <img src="assets/chain-arbitrum.png" alt="" />
              </span>
              <div>
                <h3>Arbitrum</h3>
                <div className="kind">EVM · L2</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
          <div className="chain-card">
            <div className="top">
              <span className="ico logo">
                <img src="assets/chain-optimism.png" alt="" />
              </span>
              <div>
                <h3>Optimism</h3>
                <div className="kind">EVM · L2</div>
              </div>
            </div>
            <span className="status">Available now</span>
          </div>
        </div>
        <CarouselDots
          count={8}
          active={carousel.active}
          onDotClick={carousel.dotClick}
        />
        <p className="chains-foot reveal">The Add Network flow configures the information Keychain needs for another compatible EVM network. Network availability and features can vary.</p>
      </div>
    </section>
  );
}
