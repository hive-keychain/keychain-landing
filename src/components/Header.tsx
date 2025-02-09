import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSelector } from '../context/LanguageContext';
import { useActiveSection } from '../hooks/useActiveSection';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();

  const menuItems = [
    { href: '#why', label: 'Why' },
    { href: '#download', label: 'Download' },
    { href: '#ecosystem', label: 'Ecosystem' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  const resourceItems = [
    { href: 'https://www.npmjs.com/package/keychain-sdk', label: 'Keychain SDK' },
    { href: 'https://play.hive-keychain.com/', label: 'Keychain playground' },
    { href: 'https://github.com/hive-keychain', label: 'Github' },
    { href: 'https://multisig-doc.hive-keychain.com/', label: 'Hive Multisig' },
    { href: 'https://qr.hive-keychain.com/', label: 'Hive QR Code Generator' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
  };

  const hideMenu = ['/privacy', '/terms', '/fees'].includes(location.pathname);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/">
          <img src="/logo.png" className="h-12" alt="logo hive keychain" />
        </a>

        {!hideMenu && (
          <>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
              >
                <Menu size={24} />
              </button>
            </div>

            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-gray-700 hover:text-red-600 transition-colors
                    ${activeSection === item.href.substring(1) ? 'text-red-600 font-medium' : ''}`}
                >
                  {item.label}
                </a>
              ))}

              <div className="relative">
                <button
                  onClick={toggleResources}
                  className="flex items-center text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
                >
                  Resources <ChevronDown size={16} className={`ml-1 transform transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {resourceItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-100"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-white z-50"
                onClick={closeMenu}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMenu();
                  }}
                  className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
                >
                  <X size={24} />
                </button>

                <div className="h-full overflow-y-auto py-20">
                  <div className="flex flex-col items-center space-y-6 w-full px-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection(e, item.href);
                          closeMenu();
                        }}
                        className={`text-gray-700 hover:text-red-600 transition-colors text-xl
                          ${activeSection === item.href.substring(1) ? 'text-red-600 font-medium' : ''}`}
                      >
                        {item.label}
                      </a>
                    ))}

                    <div className="relative w-full max-w-xs">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleResources();
                        }}
                        className="flex items-center justify-center w-full text-gray-700 hover:text-red-600 transition-colors text-xl focus:outline-none"
                      >
                        Resources 
                        <ChevronDown 
                          size={16} 
                          className={`ml-1 transform transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>

                      <div
                        className={`w-full bg-gray-50 rounded-lg mt-2 overflow-hidden transition-all duration-300 ${
                          isResourcesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {resourceItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-red-100 text-center border-b border-gray-100 last:border-b-0"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                      <LanguageSelector />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          <a
            href="#download"
            onClick={(e) => scrollToSection(e, '#download')}
            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
          >
            <Download size={20} />
            <span>Download Now</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;