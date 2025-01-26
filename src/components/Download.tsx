import React from 'react';
import { Apple, Chrome, Download } from 'lucide-react';
import { FaBrain, FaChrome, FaFirefoxBrowser } from 'react-icons/fa'; // Importamos los iconos necesarios


const DownloadSection = () => {
  return (
    <section id="download" className="py-16 bg-[#E5EDF5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Start with Keychain now!
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl text-center font-semibold mb-6">Mobile Apps</h3>
            <div className="flex justify-center gap-8 items-center">
              <a
              href="https://apps.apple.com/us/app/hive-keychain/id1552190010"
              className="flex justify-center items-center w-full hover:group-hover hover:transition-transform hover:scale-110 hover:brightness-125"
              target="_blank"
            >
              <img src="/appstore.svg" alt="Download on Apple Store" className="max-w-full h-[60px] mx-auto"/>
              {/* <FaApple size={24} />
              <span>Download for iOS</span> */}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mobilekeychain"
              className="flex justify-center items-center text-black w-full hover:group-hover hover:transition-transform hover:scale-110 hover:brightness-125"
              target="_blank"
            >
              <img src="/googleplay.png" alt="Download on Google Play" className="max-w-full h-[80px] mx-auto"/>
              {/* <FaAndroid size={24} />
              <span>Download for Android</span> */}
            </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-center font-semibold mb-6">Browser Extensions</h3>
            <div className='flex-column flex h-full justify-evenly items-start'>
              <a
              href="https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep?hl=en"
              className="flex justify-center items-center hover:group-hover hover:transition-transform hover:scale-110 hover:brightness-125"
              target="_blank"
              >
                <img src="/chrome.svg" alt="Install the Chrome Extension" className="max-w-full h-[70px] mx-auto"/>
              {/* <FaChrome size={65} /> */}
              {/* <span>Install Chrome Extension</span> */}
            </a>
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/hive-keychain/"
              className="flex justify-center items-center hover:group-hover hover:transition-transform hover:scale-110 hover:brightness-125"
              target="_blank" 
            >
              <img src="/firefox.svg" alt="Install the Brave Extension" className="max-w-full h-[70px] mx-auto"/>
              {/* <span>Install Firefox Extension</span> */}
            </a>
            <a
              href="https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep?hl=en"
              className="flex justify-center items-center hover:group-hover hover:transition-transform hover:scale-110 hover:brightness-125"
              target="_blank" 
            >
              <img src="/brave.png" alt="Install the Brave Extension" className="max-w-full h-[70px] mx-auto"/>
              {/* <span>Install Firefox Extension</span> */}
              </a>

              <a
              href="https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep?hl=en"
              className="flex justify-center items-center hover:group-hover hover:transition-transform hover:scale-110 hover:brightness-125"
              target="_blank" 
            >
              <img src="/edge.svg" alt="Install the Brave Extension" className="max-w-full h-[70px] mx-auto"/>
              {/* <span>Install Firefox Extension</span> */}
              </a>

              <a
              href="https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep?hl=en"
              className="flex justify-center items-center hover:group-hover hover:transition-transform hover:scale-110 hover:brightness-125"
              target="_blank" 
            >
              <img src="/opera.svg" alt="Install the Brave Extension" className="max-w-full h-[70px] mx-auto"/>
              {/* <span>Install Firefox Extension</span> */}
            </a>

            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-600">
          Start managing your Hive accounts securely today!
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;