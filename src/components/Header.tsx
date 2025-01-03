import React, { useState } from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center">
        <a href="#" className="text-xl font-bold text-red-600">Hive Keychain</a>
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex space-x-6 relative">
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#why" className="text-gray-700 hover:text-red-600 transition-colors">Why Keychain</a>
            <a href="#download" className="text-gray-700 hover:text-red-600 transition-colors">Download</a>
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
              >
                Resources
              </button>
              {isResourcesOpen && (
                <div className="absolute top-4 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <a
                    href="https://www.npmjs.com/package/keychain-sdk"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Keychain SDK
                  </a>
                  <a
                    href="https://play.hive-keychain.com/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Keychain Playground
                  </a>
                  <a
                    href="https://github.com/hive-keychain"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://multisig-doc.hive-keychain.com/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hive Multisig
                  </a>
                  <a
                    href="https://qr.hive-keychain.com/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hive QR Code Generator
                  </a>
                </div>
              )}
            </div>
            <a href="#team" className="text-gray-700 hover:text-red-600 transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact Us</a>
          </div>
        </div>
        <a
          href="#download"
          className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
        >
          <Download size={20} />
          <span>Download Now</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;