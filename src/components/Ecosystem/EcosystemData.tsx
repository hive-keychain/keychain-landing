export type AppCategory = 'Social' | 'Games' | 'NFT' | 'DeFi' | 'Tools';

export interface EcosystemApp {
  name: string;
  description: string;
  logo: string;
  url: string;
  category: AppCategory;
}

export const ecosystemData: EcosystemApp[] = [
  {
    name: "PeakD",
    description: "Feature-rich social media interface for Hive",
    logo: "https://images.hive.blog/u/peakd/avatar",
    url: "https://peakd.com",
    category: "Social"
  },
  {
    name: "Hive.Blog",
    description: "The official Hive blockchain interface",
    logo: "https://images.hive.blog/u/hive.blog/avatar",
    url: "https://hive.blog",
    category: "Social"
  },
  {
    name: "Splinterlands",
    description: "Popular blockchain trading card game",
    logo: "https://images.hive.blog/u/splinterlands/avatar",
    url: "https://splinterlands.com",
    category: "Games"
  },
  {
    name: "LeoFinance",
    description: "Crypto & Finance blogging platform",
    logo: "https://images.hive.blog/u/leofinance/avatar",
    url: "https://leofinance.io",
    category: "DeFi"
  },
  {
    name: "NFTMart",
    description: "NFT marketplace on Hive",
    logo: "https://images.hive.blog/u/nftmart/avatar",
    url: "https://nftm.art",
    category: "NFT"
  },
  {
    name: "dCity",
    description: "Blockchain city building game",
    logo: "https://images.hive.blog/u/dcity/avatar",
    url: "https://dcity.io",
    category: "Games"
  },
  {
    name: "Actifit",
    description: "Move-to-earn fitness dApp",
    logo: "https://images.hive.blog/u/actifit/avatar",
    url: "https://actifit.io",
    category: "Social"
  },
  {
    name: "DBuzz",
    description: "Microblogging platform on Hive",
    logo: "https://images.hive.blog/u/dbuzz/avatar",
    url: "https://d.buzz",
    category: "Social"
  },
  {
    name: "Hive Engine",
    description: "Token creation and trading platform",
    logo: "https://images.hive.blog/u/hive-engine/avatar",
    url: "https://hive-engine.com",
    category: "DeFi"
  },
  {
    name: "Rising Star",
    description: "Music industry simulation game",
    logo: "https://images.hive.blog/u/risingstargame/avatar",
    url: "https://risingstargame.com",
    category: "Games"
  },
  {
    name: "Hive Stats",
    description: "Analytics for Hive blockchain",
    logo: "https://images.hive.blog/u/hivestats/avatar",
    url: "https://hivestats.io",
    category: "Tools"
  },
  {
    name: "HiveWallet",
    description: "Secure wallet for Hive assets",
    logo: "https://images.hive.blog/u/hivewallet/avatar",
    url: "https://wallet.hive.blog",
    category: "Tools"
  }
];