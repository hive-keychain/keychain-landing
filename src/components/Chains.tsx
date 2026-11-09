import { Plus } from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useSnapCarousel } from "../hooks/useSnapCarousel";
import CarouselDots from "./CarouselDots";

const DISCORD_URL = "https://discord.gg/M3xsZXSVQK";

type Platform = "extension" | "mobile";
type KindPart = "native" | "evm" | "mainnet" | "pos" | "cchain" | "l2";

type Chain = {
  id: string;
  name: string;
  platforms: Platform[];
  kinds: KindPart[];
  icon: ReactNode;
};

function HiveIcon() {
  return (
    <span className="ico" style={{ background: "#e31337" }}>
      <svg
        width="21"
        height="18"
        viewBox="0 0 220 190"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M157.27,107.26a1,1,0,0,1,.82,1.42l-46.75,80.85a1,1,0,0,1-.82.47H81.94a.94.94,0,0,1-.81-1.42l46.75-80.85a.94.94,0,0,1,.81-.47ZM129.48,84.09a1,1,0,0,1-.82-.47L81.13,1.42A.94.94,0,0,1,81.94,0h28.58a1,1,0,0,1,.82.47l47.53,82.2a.94.94,0,0,1-.81,1.42Z" />
        <path d="M135.13,1.42A.94.94,0,0,1,136,0h28.62a.93.93,0,0,1,.81.47l54.49,94.06a.93.93,0,0,1,0,.94l-54.49,94.06a.93.93,0,0,1-.81.47H136a.94.94,0,0,1-.82-1.42L189.34,95Zm-23.26,93.1a1,1,0,0,1,0,1L57.13,189.53a1,1,0,0,1-1.65,0L.13,95.48a1,1,0,0,1,0-1L54.87.47a1,1,0,0,1,1.65,0Z" />
      </svg>
    </span>
  );
}

function ChainLogo({ src }: { src: string }) {
  return (
    <span className="ico logo">
      <img src={src} alt="" />
    </span>
  );
}

const CHAINS: Chain[] = [
  {
    id: "hive",
    name: "Hive",
    platforms: ["extension", "mobile"],
    kinds: ["native"],
    icon: <HiveIcon />,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    platforms: ["extension"],
    kinds: ["evm", "mainnet"],
    icon: <ChainLogo src="assets/chain-ethereum.png" />,
  },
  {
    id: "bnb",
    name: "BNB Chain",
    platforms: ["extension"],
    kinds: ["evm"],
    icon: <ChainLogo src="assets/chain-bnb.png" />,
  },
  {
    id: "polygon",
    name: "Polygon",
    platforms: ["extension"],
    kinds: ["evm", "pos"],
    icon: <ChainLogo src="assets/chain-polygon.png" />,
  },
  {
    id: "avalanche",
    name: "Avalanche",
    platforms: ["extension"],
    kinds: ["evm", "cchain"],
    icon: <ChainLogo src="assets/chain-avalanche.png" />,
  },
  {
    id: "base",
    name: "Base",
    platforms: ["extension"],
    kinds: ["evm", "l2"],
    icon: <ChainLogo src="assets/chain-base.png" />,
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    platforms: ["extension"],
    kinds: ["evm", "l2"],
    icon: <ChainLogo src="assets/chain-arbitrum.png" />,
  },
  {
    id: "optimism",
    name: "Optimism",
    platforms: ["extension"],
    kinds: ["evm", "l2"],
    icon: <ChainLogo src="assets/chain-optimism.png" />,
  },
];

export default function Chains() {
  const { t } = useLanguage();
  const carousel = useSnapCarousel(CHAINS.length);

  return (
    <section className="block alt" id="chains" style={{ paddingTop: "64px" }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("chains.title")}</h2>
          <p>{t("chains.subtitle")}</p>
        </div>
        <h3 className="chains-builtin reveal">{t("chains.builtin")}</h3>
        <div className="chains-grid reveal-group" ref={carousel.trackRef}>
          {CHAINS.map((chain) => (
            <div className="chain-card" key={chain.id}>
              <div className="top">
                {chain.icon}
                <div>
                  <h4>{chain.name}</h4>
                  <div className="kind">
                    {chain.kinds.map((kind) => t(`chains.kind.${kind}`)).join(" · ")}
                  </div>
                </div>
              </div>
              <div className="chain-platforms">
                {chain.platforms.map((platform) => (
                  <span key={platform} className={`chain-platform ${platform}`}>
                    {t(`chains.platform.${platform}`)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <CarouselDots
          count={CHAINS.length}
          active={carousel.active}
          onDotClick={carousel.dotClick}
        />
        {/* Outside the snap track so it is never a ninth carousel slide. */}
        <div className="chains-custom reveal">
          <div className="chains-custom-main">
            <div className="chains-custom-icon" aria-hidden="true">
              <Plus size={22} strokeWidth={2} />
            </div>
            <div>
              <h3>{t("chains.custom.title")}</h3>
              <p>{t("chains.custom.description")}</p>
            </div>
          </div>
          <div className="chains-custom-aside">
            <p>{t("chains.custom.community")}</p>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              {t("chains.custom.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
