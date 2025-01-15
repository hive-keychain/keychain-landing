import React, { useState } from 'react';
import { Download, Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSelector } from '../context/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';


const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const menuItems = [
    { href: '#why', label: 'Why' },
    { href: '#download', label: 'Download' },
    { href: '#ecosystem', label: 'Ecosystem' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
  <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/">
        <img src="/logo.png" className="h-12" alt="logo hive keychain" />
      </a>
      
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="hidden md:flex space-x-6">
        {menuItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={`text-gray-700 hover:text-red-600 transition-colors
              ${activeSection === item.href.substring(1) ? 'text-red-600 font-medium' : ''}`}
          >
            {item.label}
          </a>
        ))}
        
        <div
          className="relative"
          onMouseEnter={() => setIsResourcesOpen(true)}
          onMouseLeave={() => setIsResourcesOpen(false)}
        >
          <button className="flex items-center text-gray-700 hover:text-red-600 transition-colors focus:outline-none">
            Resources <ChevronDown size={16} className="ml-1" />
          </button>

          {isResourcesOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a href="/terms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Terms of Service
              </a>
              <a href="/privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Privacy Policy
              </a>
              <a href="/fees" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Fees
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <LanguageSelector />
        <a 
          href="#download" 
          className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
        >
          <Download size={20} />
          <span>Download Now</span>
        </a>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
          >
            <X size={24} />
          </button>
          {menuItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`text-gray-700 hover:text-red-600 transition-colors text-xl
                ${activeSection === item.href.substring(1) ? 'text-red-600 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="text-gray-700 hover:text-red-600 transition-colors text-xl">
            <button 
              onClick={() => setIsResourcesOpen(!isResourcesOpen)} 
              className="flex items-center w-full justify-center focus:outline-none"
            >
              Resources <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <LanguageSelector />
        </div>
      )}
    </nav>
  </header>
);

};

export default Header;