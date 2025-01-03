import React from 'react';
import { Apple, Chrome, Download } from 'lucide-react';
import { FaApple, FaAndroid, FaChrome, FaFirefoxBrowser } from 'react-icons/fa'; // Importamos los iconos necesarios


const DownloadSection = () => {
  return (
    <section id="download" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Download Hive Keychain
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl text-center font-semibold mb-4">Mobile Apps</h3>
            <a
              href="https://apps.apple.com/us/app/hive-keychain/id1552190010"
              className="flex items-center space-x-3 bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition-colors w-full"
            >
              <FaApple size={24} />
              <span>Download for iOS</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mobilekeychain"
              className="flex items-center space-x-3 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors w-full"
            >
              <FaAndroid size={24} />
              <span>Download for Android</span>
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-center font-semibold mb-4">Browser Extensions</h3>
            <a
              href="https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep?hl=en"
              className="flex items-center space-x-3 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors w-full"
            >
              <FaChrome size={24} />
              <span>Install Chrome Extension</span>
            </a>
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/hive-keychain/"
              className="flex items-center space-x-3 bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors w-full"
            >
              <FaFirefoxBrowser size={24} />
              <span>Install Firefox Extension</span>
            </a>
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