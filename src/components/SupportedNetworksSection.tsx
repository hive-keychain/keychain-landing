import {
  SiBnbchain,
  SiEthereum,
  SiHiveBlockchain,
  SiOptimism,
  SiPolygon,
} from "react-icons/si";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "../context/LanguageContext";

interface NetworkIconProps {
  className?: string;
}

const AvalancheIcon = ({ className = "" }: NetworkIconProps) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.2 5.1c-.6-1-1.9-1-2.5 0L7.1 18.2c-.6 1 .1 2.3 1.3 2.3h3.9c.5 0 .9-.2 1.2-.7l3.7-6.4 4.6 8c.3.4.7.7 1.2.7h3.9c1.2 0 1.9-1.3 1.3-2.3L17.2 5.1Z" />
    <path d="M12.7 22.9c-.6-1-1.9-1-2.5 0l-2.4 4.1c-.6 1 .1 2.3 1.3 2.3h4.8c1.2 0 1.9-1.3 1.3-2.3l-2.5-4.1Z" />
  </svg>
);

const BaseIcon = ({ className = "" }: NetworkIconProps) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="13" fill="currentColor" />
    <circle cx="13" cy="16" r="4.4" fill="white" />
    <rect x="15.8" y="13.3" width="7.2" height="5.4" rx="2.7" fill="white" />
  </svg>
);

const ArbitrumIcon = ({ className = "" }: NetworkIconProps) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M15.2 3.6a3 3 0 0 1 1.6 0l8 2.5a3 3 0 0 1 2 2.2l1.4 8.2a3 3 0 0 1-.3 1.8l-4.1 7.2a3 3 0 0 1-1.4 1.3l-7.6 3.3a3 3 0 0 1-2.4 0l-7.6-3.3a3 3 0 0 1-1.4-1.3L.1 18.3a3 3 0 0 1-.3-1.8l1.4-8.2a3 3 0 0 1 2-2.2l8-2.5Z"
      fill="#213147"
      transform="translate(1.8 0)"
    />
    <path
      d="M12.4 7.4h3.1l4.6 13.1H17l-.9-2.8h-4.3l.8-2.4h2.8l-1.7-5.1-4.3 12.4H6.3l6.1-17.2Z"
      fill="#28A0F0"
      transform="translate(2.6 1)"
    />
    <path
      d="M17.7 7.4h3l4.6 13.1h-3l-4.6-13.1Z"
      fill="#96BEDC"
      transform="translate(1.2 1)"
    />
  </svg>
);

const networks = [
  {
    name: "Hive",
    icon: <SiHiveBlockchain className="h-7 w-7 text-[#E31337]" aria-hidden="true" />,
  },
  {
    name: "Ethereum",
    icon: <SiEthereum className="h-7 w-7 text-[#627EEA]" aria-hidden="true" />,
  },
  {
    name: "BNB Chain",
    icon: <SiBnbchain className="h-7 w-7 text-[#F0B90B]" aria-hidden="true" />,
  },
  {
    name: "Polygon",
    icon: <SiPolygon className="h-7 w-7 text-[#8247E5]" aria-hidden="true" />,
  },
  {
    name: "Avalanche",
    icon: <AvalancheIcon className="h-7 w-7 text-[#E84142]" />,
  },
  {
    name: "Base",
    icon: <BaseIcon className="h-7 w-7 text-[#0052FF]" />,
  },
  {
    name: "Arbitrum",
    icon: <ArbitrumIcon className="h-7 w-7" />,
  },
  {
    name: "Optimism",
    icon: <SiOptimism className="h-7 w-7 text-[#FF0420]" aria-hidden="true" />,
  },
];

const SupportedNetworksSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="networks"
      aria-labelledby="supported-networks-title"
      className="bg-[#E5EDF5] py-16"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="mx-auto mb-10 max-w-3xl text-center">
          <h2
            id="supported-networks-title"
            className="text-3xl font-bold md:text-4xl"
          >
            {t("supportedNetworks.title")}
          </h2>
          <p className="mt-4 text-gray-600">{t("supportedNetworks.intro")}</p>
        </AnimatedSection>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {networks.map((network, index) => (
            <li key={network.name} className="list-none">
              <AnimatedSection
                direction="up"
                delay={index * 75}
                className="flex h-full flex-col items-center rounded-lg border border-white/70 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                <div
                  role="img"
                  aria-label={network.name}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F8FBFF]"
                >
                  {network.icon}
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  {network.name}
                </p>
              </AnimatedSection>
            </li>
          ))}
        </ul>

        <AnimatedSection
          direction="up"
          delay={150}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          <span className="rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            {t("supportedNetworks.testnets")}
          </span>
          <span className="rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            {t("supportedNetworks.moreSoon")}
          </span>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SupportedNetworksSection;
