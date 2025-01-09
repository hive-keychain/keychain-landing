import React, { useState } from 'react';
import { Download, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/"> <img src="src/public/logo.png" className="h-12" alt="logo hive keychain" /></a>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-700 hover:text-red-600 transition-colors focus:outline-none">
            <Menu size={24} />
          </button>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
          <a href="#why" className="text-gray-700 hover:text-red-600 transition-colors">Why Keychain</a>
          <a href="#download" className="text-gray-700 hover:text-red-600 transition-colors">Download</a>
          <a href="#team" className="text-gray-700 hover:text-red-600 transition-colors">Team</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact Us</a>
          <div
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-red-600 transition-colors focus:outline-none">
              Resources <ChevronDown size={16} className="ml-1" />
            </button>
            {isResourcesOpen && (
              <div className="absolute top-4 left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="https://www.npmjs.com/package/keychain-sdk" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Keychain SDK
                </a>
                <a href="https://play.hive-keychain.com/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Keychain Playground
                </a>
                <a href="https://github.com/hive-keychain" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href="https://multisig-doc.hive-keychain.com/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Hive Multisig
                </a>
                <a href="https://qr.hive-keychain.com/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Hive QR Code Generator
                </a>
              </div>
            )}
          </div>
        </div>

        <a href="#download" className="hidden md:flex bg-red-600 text-white px-4 py-2 rounded-lg items-center space-x-2 hover:bg-red-700 transition-colors">
          <Download size={20} />
          <span>Download Now</span>
        </a>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-colors focus:outline-none">
            <X size={24} />
          </button>
          <a href="/" className="text-gray-700 hover:text-red-600 transition-colors text-xl">Home</a>
          <a href="#why" className="text-gray-700 hover:text-red-600 transition-colors text-xl">Why Keychain</a>
          <a href="#download" className="text-gray-700 hover:text-red-600 transition-colors text-xl">Download</a>
          <a href="#team" className="text-gray-700 hover:text-red-600 transition-colors text-xl">Team</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors text-xl">Contact Us</a>
          <div className="text-gray-700 hover:text-red-600 transition-colors text-xl">
            <button onClick={() => setIsResourcesOpen(!isResourcesOpen)} className="flex items-center focus:outline-none">
              Resources <ChevronDown size={16} className="ml-1" />
            </button>
            {isResourcesOpen && (
              <div className="flex flex-col items-center space-y-2 mt-2">
                <a href="https://www.npmjs.com/package/keychain-sdk" className="text-gray-700 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Keychain SDK
                </a>
                <a href="https://play.hive-keychain.com/" className="text-gray-700 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Keychain Playground
                </a>
                <a href="https://github.com/hive-keychain" className="text-gray-700 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href="https://multisig-doc.hive-keychain.com/" className="text-gray-700 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Hive Multisig
                </a>
                <a href="https://qr.hive-keychain.com/" className="text-gray-700 hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Hive QR Code Generator
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;