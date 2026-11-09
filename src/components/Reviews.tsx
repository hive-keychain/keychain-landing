import { useSnapCarousel } from "../hooks/useSnapCarousel";
import CarouselDots from "./CarouselDots";

export default function Reviews() {
  const carousel = useSnapCarousel(6);
  return (
    <section className="block alt" id="voices">
      <div className="wrap">
        <div className="sec-head center reveal">
          <h2>Trusted across ecosystems</h2>
          <p>Long trusted on Hive. Now hearing it from the EVM side too.</p>
        </div>
        <div className="quotes reveal-group" ref={carousel.trackRef}>
          <div className="quote">
            <span className="eco eco-hive">Hive</span>
            <p>
              “Keychain is the wallet I recommend to every new Hive user. It
              just works, and it keeps keys where they belong: with the user.”
            </p>
            <div className="who">
              <span className="avatar-dot" style={{ background: "#1b273b" }}>
                AS
              </span>
              <span>
                <b>Asgarth</b>
                <span>PeakD cofounder</span>
              </span>
            </div>
          </div>
          <div className="quote">
            <span className="eco eco-hive">Hive</span>
            <p>
              “For Splinterlands players, Keychain made Hive onboarding
              painless. Secure signing without the learning curve.”
            </p>
            <div className="who">
              <span className="avatar-dot" style={{ background: "#e31337" }}>
                YM
              </span>
              <span>
                <b>Yabapmatt</b>
                <span>Splinterlands cofounder</span>
              </span>
            </div>
          </div>
          <div className="quote">
            <span className="eco eco-hive">Hive</span>
            <p>
              “The standard for Hive account security. If you hold a Hive
              account, Keychain is how you should be signing.”
            </p>
            <div className="who">
              <span className="avatar-dot" style={{ background: "#5b4bc4" }}>
                AR
              </span>
              <span>
                <b>Arcange</b>
                <span>Hive witness & developer</span>
              </span>
            </div>
          </div>
          {/* <div className="quote">
            <span className="eco eco-evm">EVM · Partner</span>
            <p>
              “Routing our swaps through Keychain put us in front of Hive’s user
              base overnight. And because the ranking always picks the best
              rate, every provider has to stay honest.”
            </p>
            <div className="who">
              <span className="avatar-dot" style={{ background: "#627eea" }}>
                SP
              </span>
              <span>
                <b>Swap provider partner</b>
                <span>Aggregator integration</span>
              </span>
            </div>
          </div> */}
          {/* <div className="quote">
              <span className="eco eco-evm">EVM · Partner</span>
              <p>“Our dApp’s users were swapping on Base through Keychain the same day they installed it. One wallet for both ecosystems is the whole pitch.”</p>
              <div className="who"><span className="avatar-dot" style={{ background: '#0052ff' }}>DI</span><span><b>EVM dApp integrator</b><span>Swap Widget partner</span></span></div>
            </div> */}
          <div className="quote">
            <span className="eco eco-hive">Hive</span>
            <p>
              “Years of reliable updates and an open development process.
              Keychain is infrastructure the ecosystem quietly depends on.”
            </p>
            <div className="who">
              <span className="avatar-dot" style={{ background: "#0e8a5f" }}>
                HO
              </span>
              <span>
                <b>Howo</b>
                <span>Hive core developer</span>
              </span>
            </div>
          </div>
        </div>
        <CarouselDots
          count={6}
          active={carousel.active}
          onDotClick={carousel.dotClick}
        />
      </div>
    </section>
  );
}
