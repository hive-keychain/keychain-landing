// Embedded snapshot of the live Hive ecosystem API response, captured
// 2026-11-04 and extracted verbatim from the original mockup script.
// Used only when every live fetch attempt for Hive fails: the dApps
// section renders this silently, with no notice and no retry button.
// It is never cached as live data (see DappsSection).
import type { DappGroup } from '../lib/dapps';

export const FALLBACK_HIVE: DappGroup[] = [
  {
    "category": "social",
    "dapps": [
      {
        "name": "3Speak",
        "description": "The main video platform of Hive",
        "icon": "https://pbs.twimg.com/profile_images/1619743899919990785/-ks1Ur8s_400x400.jpg",
        "url": "https://3speak.tv/",
        "mobileUrl": "https://3speak.tv/"
      },
      {
        "name": "Inji",
        "description": "Your social platform for Crypto, NFTs, DeFi and the Metaverse.",
        "icon": "https://images.hive.blog/u/inji/avatar",
        "url": "https://inji.com",
        "mobileUrl": "https://inji.com"
      },
      {
        "name": "Snapie",
        "description": "Short form content simplified",
        "icon": "https://files.peakd.com/file/peakd-hive/meno/AJkMZepc6KU2tfQCrKP49MwT5EQe2mKomkEk1ZR63hpRVprX3vaB8BqPpVdSkHd.png",
        "url": "https://snapie.io/",
        "mobileUrl": "https://snapie.io/"
      },
      {
        "name": "Hive.blog",
        "description": "Community interface for Hive",
        "icon": "https://images.hive.blog/u/hiveio/avatar",
        "url": "https://hive.blog",
        "mobileUrl": "https://hive.blog"
      },
      {
        "name": "HiveSuite",
        "description": "Access posts, replies, stats, polls, and more — without switching between apps",
        "icon": "https://hivesuite.app/logo.png",
        "url": "https://hivesuite.app",
        "mobileUrl": ""
      },
      {
        "name": "CheckinWith",
        "description": "Checkin with a trusted Hivean and earn instant HBD, Sats & Proof of Personhood",
        "icon": "https://checkinwith.xyz/favicon.ico",
        "url": "https://checkinwith.xyz/",
        "mobileUrl": ""
      },
      {
        "name": "Ecency",
        "description": "Decentralized, rewarding, true ownership social network",
        "icon": "https://images.hive.blog/u/ecency/avatar",
        "url": "https://ecency.com",
        "mobileUrl": ""
      },
      {
        "name": "HiveMicro",
        "description": "A microblogging platform built on Hive blockchain",
        "icon": "https://micro.crypto-dreamr.com/static/img/left.png",
        "url": "https://micro.crypto-dreamr.com/",
        "mobileUrl": "https://micro.crypto-dreamr.com/"
      },
      {
        "name": "Lumen",
        "description": "Where followers become holders",
        "icon": "https://files.peakd.com/file/peakd-hive/keychain/AL1fmFdvRKKUGm6SUBaYARZ4vCAmDzMfc1RxYin12E4xKgg8876JXc4VDB8DDNv.jpeg",
        "url": "https://lumensocial.net/",
        "mobileUrl": "https://lumensocial.net/"
      },
      {
        "name": "Substrat",
        "description": "Patreon-style gated content through subscriptions, tips and paywalls",
        "icon": "https://substrat.io/substrat-logo-icon.svg",
        "url": "https://substrat.io/",
        "mobileUrl": ""
      },
      {
        "name": "PeakD",
        "description": "Decentralized Social Media with True Ownership",
        "icon": "https://images.hive.blog/u/peakd/avatar",
        "url": "https://peakd.com",
        "mobileUrl": "https://peakd.com"
      },
      {
        "name": "Skatehive",
        "description": "Skateboarding social media platform ",
        "icon": "https://images.hive.blog/p/3DLAmCsuTe3ba2VJAE1ZhN2oVhekeqoshg9DUnSyUd2Cnt4YtUMpZp3tNYa2w3naiqKrjxjigAfGuPzPcMqFYf281SQbeeVXRUREdAXkyYScQGyoyegqyBLypjErNSK1C2DsK8wc173r7Shh8rkpZzNQmcVvQbG?format=match&mode=fit",
        "url": "https://www.skatehive.app/",
        "mobileUrl": ""
      },
      {
        "name": "BlockTunes",
        "description": "Building the WEB 3.0 Music Revolution on Hive and EVM chains.",
        "icon": "https://images.hive.blog/u/blocktunes/avatar",
        "url": "https://blocktunes.net/",
        "mobileUrl": "https://blocktunes.net/"
      },
      {
        "name": "Sports Talk Social",
        "description": "Rewarded Sports Media Platform",
        "icon": "https://images.hive.blog/u/sportstalksocial/avatar",
        "url": "https://www.sportstalksocial.com/",
        "mobileUrl": "https://www.sportstalksocial.com/"
      },
      {
        "name": "Worldmappin",
        "description": "The hive map service. Give your  post a pin on the world map.",
        "icon": "https://files.peakd.com/file/peakd-hive/louis88/23y8jLaxWULLEDuhL7Q1e4xwbbT2Kr124JkBTMg2HAi2e1usPvcPeSr2k9zt6bVj1DsAq.svg",
        "url": "https://worldmappin.com",
        "mobileUrl": "https://worldmappin.com"
      },
      {
        "name": "D.Buzz",
        "description": "Micro-Blogging Platform",
        "icon": "https://images.hive.blog/u/dbuzz/avatar",
        "url": "https://d.buzz/",
        "mobileUrl": "https://d.buzz/"
      },
      {
        "name": "Scrobble.Life",
        "description": "Entertainment logging and scrobbler, hub and social for all kinds of media. ",
        "icon": "https://files.peakd.com/file/peakd-hive/scrobble.life/HS.png",
        "url": "https://scrobble.life",
        "mobileUrl": ""
      },
      {
        "name": "Liketu",
        "description": "Social image sharing on Hive",
        "icon": "https://images.hive.blog/u/liketu/avatar",
        "url": "https://m.liketu.com/",
        "mobileUrl": "https://liketu.com/"
      },
      {
        "name": "Inleo",
        "description": "The Everything app. Democratizing access and knowledge to Web3.",
        "icon": "https://files.peakd.com/file/peakd-hive/keychain/AK5A3XHiE8dXnZWD2xGUXUMX3wA38uK7QToTj7id5gpHWpwUNDaa14eZt8ruZnw.png",
        "url": "https://inleo.io/",
        "mobileUrl": "https://inleo.io/"
      },
      {
        "name": "Travel Feed",
        "description": "Travel Blogging for Everyone",
        "icon": "https://travelfeed.com/avatar/travelfeed/large",
        "url": "https://travelfeed.com/",
        "mobileUrl": "https://travelfeed.com/"
      },
      {
        "name": "Actifit",
        "description": "Your Move2Earn Companion - Rewarding Your Everyday Activity",
        "icon": "https://images.hive.blog/u/actifit/avatar",
        "url": "https://actifit.io/",
        "mobileUrl": "https://actifit.io/"
      }
    ]
  },
  {
    "category": "nft",
    "dapps": [
      {
        "name": "Splinterlands",
        "description": "Collect, Trade, Battle!",
        "icon": "https://images.hive.blog/u/splinterlands/avatar",
        "url": "https://splinterlands.com?ref=keychain",
        "mobileUrl": ""
      },
      {
        "name": "WOO",
        "description": "Play-To-Earn wrestling business management game",
        "icon": "https://files.peakd.com/file/peakd-hive/theghost1980/AL1geTDPibhiR6soMiVAiLMoP9ymyNDf783WLXQCj71u42wj9C72R15ujEfVQxc.png",
        "url": "https://wrestlingorganizationonline.com/",
        "mobileUrl": "https://wrestlingorganizationonline.com/"
      },
      {
        "name": "NFT Showroom",
        "description": "Digital Art Marketplace",
        "icon": "https://images.hive.blog/u/nftshowroom/avatar",
        "url": "https://nftshowroom.com/",
        "mobileUrl": "https://nftshowroom.com/"
      },
      {
        "name": "dCity",
        "description": "City simulation game based on hive-engine NFT tokens",
        "icon": "https://images.hive.blog/u/dcitygame/avatar",
        "url": "https://dcity.io",
        "mobileUrl": "https://dcity.io"
      },
      {
        "name": "BlockTunes",
        "description": "Building the WEB 3.0 Music Revolution on Hive and EVM chains.",
        "icon": "https://images.hive.blog/u/blocktunes/avatar",
        "url": "https://blocktunes.net/",
        "mobileUrl": "https://blocktunes.net/"
      },
      {
        "name": "Hive NFTs",
        "description": "A custom marketplace to buy, sell, and track your NFTs",
        "icon": "https://hivenfts.com/images/favicon.png",
        "url": "https://hivenfts.com/",
        "mobileUrl": "https://hivenfts.com/"
      }
    ]
  },
  {
    "category": "gaming",
    "dapps": [
      {
        "name": "Holozing",
        "description": "Turn-based RPG with creatures and healers",
        "icon": "https://files.peakd.com/file/peakd-hive/holozing/HOLOZING20symbol.png",
        "url": "https://holozing.com?ref=keychain",
        "mobileUrl": ""
      },
      {
        "name": "dCrops",
        "description": "Farming simulator game built on the Hive blockchain",
        "icon": "https://images.hive.blog/u/dcrops/avatar",
        "url": "https://dcrops.com?ref=keychain",
        "mobileUrl": "https://dcrops.com?ref=keychain"
      },
      {
        "name": "Terracore",
        "description": "Citizen, your adventure begins.",
        "icon": "https://images.hive.blog/u/terracore/avatar",
        "url": "https://www.terracoregame.com?ref=keychain",
        "mobileUrl": "https://www.terracoregame.com?ref=keychain"
      },
      {
        "name": "Splinterlands",
        "description": "Collect, Trade, Battle!",
        "icon": "https://images.hive.blog/u/splinterlands/avatar",
        "url": "https://splinterlands.com?ref=keychain",
        "mobileUrl": ""
      },
      {
        "name": "Crownrend",
        "description": "Forge your own path in the world and rule your own kingdom",
        "icon": "https://files.peakd.com/file/peakd-hive/keychain/23tbPKsUfXpmZN2PkXnXGkd5U34wjwKXK4UFiLUyLUUf5T4aEUzvwV7Z2gT88ZvmEA3JY.png",
        "url": "https://crownrend.com?ref=SDNENFZMUHZE6",
        "mobileUrl": ""
      },
      {
        "name": "Rise of the Pixels",
        "description": "Simulation game where you manage your own game development studio",
        "icon": "https://images.hive.blog/u/riseofthepixels/avatar",
        "url": "https://riseofthepixels.com/?ref=keychain",
        "mobileUrl": "https://riseofthepixels.com/?ref=keychain"
      },
      {
        "name": "Big Dog Bone",
        "description": "Click to Earn Game created by the Virtual World community",
        "icon": "https://res.cloudinary.com/druu0mcam/image/upload/v1721663890/logo.5acc4af4e6491040e775_lfjrhm.png",
        "url": "https://www.bigdogbonegame.com/login",
        "mobileUrl": "https://www.bigdogbonegame.com/login"
      },
      {
        "name": "Hive Slot Games",
        "description": "Your Luck, Your Fortune, Your Casino!",
        "icon": "https://hiveslotgames.com/assets/icons/ssg.png",
        "url": "https://hiveslotgames.com/",
        "mobileUrl": "https://hiveslotgames.com/"
      },
      {
        "name": "WOO",
        "description": "Play-To-Earn wrestling business management game",
        "icon": "https://files.peakd.com/file/peakd-hive/theghost1980/AL1geTDPibhiR6soMiVAiLMoP9ymyNDf783WLXQCj71u42wj9C72R15ujEfVQxc.png",
        "url": "https://wrestlingorganizationonline.com/",
        "mobileUrl": "https://wrestlingorganizationonline.com/"
      },
      {
        "name": "Beat Brawls",
        "description": "A TCG+CCG where you collect songs and battle with them",
        "icon": "https://res.cloudinary.com/dwcu4lsen/image/upload/v1761666813/BeatBrawls/logos/beatbrawlsPng.png",
        "url": "https://beatbrawls.com/",
        "mobileUrl": ""
      },
      {
        "name": "Rising Star",
        "description": "Start as a lowly busker and work your way up to a global mega star!",
        "icon": "https://images.hive.blog/u/risingstargame/avatar",
        "url": "https://risingstargame.com",
        "mobileUrl": "https://risingstargame.com"
      },
      {
        "name": "Moon",
        "description": "Multiplayer Orbiting Optimization Network game for Hivers",
        "icon": "https://moon.hive.pizza/styles/resource/images/HiveNova.png",
        "url": "https://moon.hive.pizza/",
        "mobileUrl": ""
      },
      {
        "name": "dCity",
        "description": "City simulation game based on hive-engine NFT tokens",
        "icon": "https://images.hive.blog/u/dcitygame/avatar",
        "url": "https://dcity.io",
        "mobileUrl": "https://dcity.io"
      },
      {
        "name": "Arcade Colony",
        "description": "A platform to augment Web2 games into Web3.",
        "icon": "https://arcadecolony.com/assets/brand.png",
        "url": "https://arcadecolony.com",
        "mobileUrl": "https://arcadecolony.com"
      },
      {
        "name": "Crypto Shots",
        "description": "First Person Shooter",
        "icon": "https://pbs.twimg.com/profile_images/1462440244712812550/eX7zW7DJ_400x400.jpg",
        "url": "https://play.crypto-shots.com/",
        "mobileUrl": "https://play.crypto-shots.com/"
      },
      {
        "name": "Dungeon Cities",
        "description": "A P2E dungeon crawler with strategic PvP gameplay",
        "icon": "https://res.cloudinary.com/dwcu4lsen/image/upload/v1731962705/Dungeon/logo.png",
        "url": "https://dungeoncities.com/",
        "mobileUrl": ""
      },
      {
        "name": "DemoniCore",
        "description": "Slay demons in simple turn-based combat",
        "icon": "https://d28h36qk0p1alw.cloudfront.net/images/logo/dcore-logo11-trans.png",
        "url": "https://www.demonicore.com/",
        "mobileUrl": "https://www.demonicore.com/"
      },
      {
        "name": "King Of Duels",
        "description": "Game based on the famous YU-GI-OH card game",
        "icon": "https://res.cloudinary.com/druu0mcam/image/upload/v1721664278/LOGO_KOD_2-1_mxbwyl.png",
        "url": "https://www.kingofduels.online/login",
        "mobileUrl": "https://www.kingofduels.online/login"
      },
      {
        "name": "City Farm",
        "description": "Farm simulation game built on the Hive network",
        "icon": "https://res.cloudinary.com/druu0mcam/image/upload/v1721663996/logo_e52vyb.png",
        "url": "https://cityfarmgame.com/",
        "mobileUrl": "https://cityfarmgame.com/"
      },
      {
        "name": "Limitless miners",
        "description": "A mining, PVP game that aims to bring projects together",
        "icon": "https://images.hive.blog/p/NTy4GV6ooFRmaCXZ8UYgPhoud1kjiNX8QokLEZtbBKLuLWQ9yt7K3o4Jc6qMzdfmmySLnmS8Vwie5XiDhXmCb2gCz1gFRJriVWD2mtSi5tSH8YsVwYnQDS9n1kujpmMoUyEf9QVxZFez6uBwVGfP5dJ21cvekEHYnvPe7a9t?format=match&mode=fit",
        "url": "https://www.hivereward.co.uk/limitless",
        "mobileUrl": "https://www.hivereward.co.uk/limitless"
      },
      {
        "name": "Peakmonsters",
        "description": "Fast / Easy / Informative tools for Splinterlands",
        "icon": "https://peakmonsters.com/static/favicons/apple-touch-icon-144x144.png",
        "url": "https://peakmonsters.com/",
        "mobileUrl": "https://peakmonsters.com/"
      },
      {
        "name": "Kryptogamers",
        "description": "Leading Provably Fair Hive Casino - Play 30+ games with daily dividends",
        "icon": "https://images.hive.blog/u/kryptogames/avatar",
        "url": "https://kryptogamers.com/",
        "mobileUrl": "https://kryptogamers.com/"
      },
      {
        "name": "Exode",
        "description": "Explore. Colonize. Earn Crypto",
        "icon": "https://exode.io/graphics/pics/favicon_blue.png",
        "url": "https://exode.io/",
        "mobileUrl": "https://exode.io/"
      }
    ]
  },
  {
    "category": "tool",
    "dapps": [
      {
        "name": "Peakmonsters",
        "description": "Fast / Easy / Informative tools for Splinterlands",
        "icon": "https://peakmonsters.com/static/favicons/apple-touch-icon-144x144.png",
        "url": "https://peakmonsters.com/",
        "mobileUrl": "https://peakmonsters.com/"
      },
      {
        "name": "HiveBlocks",
        "description": "Block Explorer",
        "icon": "https://hiveblocks.com/images/logo-hive.png",
        "url": "https://hiveblocks.com/@",
        "mobileUrl": "https://hiveblocks.com/@"
      },
      {
        "name": "Keychain Recovery",
        "description": "Change keys and find out who your Recovery Account is.",
        "icon": "https://dashboard.hive-keychain.com/assets/images/iconhive.png",
        "url": "https://recovery.hive-keychain.com/",
        "mobileUrl": "https://recovery.hive-keychain.com/"
      },
      {
        "name": "HiveStats",
        "description": "Track & Analyze Your Hive Blockchain Account",
        "icon": "https://images.hive.blog/u/steem.leo/avatar",
        "url": "https://hivestats.io/@",
        "mobileUrl": "https://hivestats.io/@"
      },
      {
        "name": "HiveHub",
        "description": "A block explorer for the Hive ecosystem",
        "icon": "https://files.peakd.com/file/peakd-hive/theghost1980/23tbHLrpPr5Vr5HodaksVq3JbzsDJo7eA3vscTv65LYm15osgSspCWUx2qLTpj3t8usUU.png",
        "url": "https://hivehub.dev/market/swap",
        "mobileUrl": "https://hivehub.dev/market/swap"
      },
      {
        "name": "HiveTools",
        "description": "Comprehensive suite of clean and modern tools for the Hive blockchain.",
        "icon": "https://images.hive.blog/400x400/https://files.peakd.com/file/peakd-hive/thecrazygm/AK3fYrxxVrHvNwYs45CiUbVPXu9Lu1m6xcrU6TXcYSCsQBaTX3txhUjT843svnm.png",
        "url": "https://tools.crypto-dreamr.com/",
        "mobileUrl": "https://tools.crypto-dreamr.com/"
      },
      {
        "name": "Keychain Swap",
        "description": "Seemless swaps with Keychain",
        "icon": "https://dashboard.hive-keychain.com/assets/images/iconhive.png",
        "url": "https://swapwidget.hive-keychain.com/?username=",
        "mobileUrl": ""
      }
    ]
  },
  {
    "category": "finance",
    "dapps": [
      {
        "name": "V4V.app",
        "description": "Hive to Bitcoin Lightning Gateway.",
        "icon": "https://images.hive.blog/u/v4vapp/avatar",
        "url": "https://v4v.app/",
        "mobileUrl": "https://v4v.app/"
      },
      {
        "name": "Tribaldex",
        "description": "Create Tokens & Smart Contracts on Hive.",
        "icon": "https://files.peakd.com/file/peakd-hive/keychain/48Z7YEkS64Tj1TE4cKoDNQFwWYXoUPthPp8anZLgLM3kEMS5VkKaB8LuNKzVBmV6u6.png",
        "url": "https://tribaldex.com/",
        "mobileUrl": "https://tribaldex.com/"
      },
      {
        "name": "HiveHub",
        "description": "A block explorer for the Hive ecosystem",
        "icon": "https://files.peakd.com/file/peakd-hive/theghost1980/23tbHLrpPr5Vr5HodaksVq3JbzsDJo7eA3vscTv65LYm15osgSspCWUx2qLTpj3t8usUU.png",
        "url": "https://hivehub.dev/market/swap",
        "mobileUrl": "https://hivehub.dev/market/swap"
      },
      {
        "name": "Hive-Engine",
        "description": "Create Tokens & Smart Contracts on Hive.",
        "icon": "https://avatars.githubusercontent.com/u/51540775?s=200&v=4",
        "url": "https://hive-engine.com/",
        "mobileUrl": "https://hive-engine.com/"
      },
      {
        "name": "Keychain Swap",
        "description": "Seemless swaps with Keychain",
        "icon": "https://dashboard.hive-keychain.com/assets/images/iconhive.png",
        "url": "https://swapwidget.hive-keychain.com/?username=",
        "mobileUrl": ""
      },
      {
        "name": "Hive Market",
        "description": "Internal Hive/HBD exchange",
        "icon": "https://images.hive.blog/u/hiveio/avatar",
        "url": "https://wallet.hive.blog/market",
        "mobileUrl": "https://wallet.hive.blog/market"
      },
      {
        "name": "Distriator",
        "description": "Spend HUSD or BTC lightning and Claim stable coin discounts",
        "icon": "https://images.hive.blog/DQmUnMYyNPWV2yebPkRwxBQw4rnAzS1fEAkm1CVJFALK5qV/Distriator%20Logo%20D.png",
        "url": "https://distriator.com/",
        "mobileUrl": ""
      },
      {
        "name": "Hivedex.io",
        "description": "Modern exchange interface for the internal market",
        "icon": "https://hivedex.io/assets/img/hivedex-200.png",
        "url": "https://hivedex.io",
        "mobileUrl": "https://hivedex.io"
      }
    ]
  }
];
