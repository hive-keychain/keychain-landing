import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center">
        <a href="#" className="text-xl font-bold text-red-600">Hive Keychain</a>
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#why" className="text-gray-700 hover:text-red-600 transition-colors">Why Keychain</a>
            <a href="#download" className="text-gray-700 hover:text-red-600 transition-colors">Download</a>
            <a href="#tutorials" className="text-gray-700 hover:text-red-600 transition-colors">Tutorials</a>
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