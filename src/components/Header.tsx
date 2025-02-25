import React, { useState, useRef } from 'react';
  import { Download, Menu, X, ChevronDown } from 'lucide-react';
  import { LanguageSelector } from '../context/LanguageContext';
  import { useActiveSection } from '../hooks/useActiveSection';
  import { useLocation } from 'react-router-dom';
  import { useLanguage } from '../context/LanguageContext';

  const Header = () => {
    const { t } = useLanguage();
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const activeSection = useActiveSection();
    const location = useLocation();
    const resourcesRef = useRef<HTMLDivElement>(null);
    const languageDropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuContentRef = useRef<HTMLDivElement>(null);

    const menuItems = [
      { href: '#why', label: t('nav.why') },
      { href: '#download', label: t('nav.download') },
      { href: '#ecosystem', label: t('nav.ecosystem') },
      { href: '#team', label: t('nav.team') },
      { href: '#testimonials', label: t('nav.testimonial') },
      { href: '#contact', label: t('nav.contact') },
    ];

    const resourceItems = [
      { href: 'https://www.npmjs.com/package/keychain-sdk', label: 'Keychain SDK' },
      { href: 'https://play.hive-keychain.com/', label: 'Keychain playground' },
      { href: 'https://github.com/hive-keychain', label: 'Github' },
      { href: 'https://multisig-doc.hive-keychain.com/', label: 'Hive Multisig' },
      { href: 'https://qr.hive-keychain.com/', label: 'Hive QR Code Generator' },
    ];

    const toggleResources = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setIsResourcesOpen(prev => !prev);
    };

    const toggleLanguageDropdown = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setIsLanguageDropdownOpen(prev => !prev);
    };

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      event.preventDefault();
      const targetElement = document.querySelector(targetId);
      const headerElement = document.querySelector('header');

      if (targetElement && headerElement) {
        const offset = headerElement.clientHeight;
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
      setIsLanguageDropdownOpen(false);
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

                <div className="relative" ref={resourcesRef}>
                  <button
                    onClick={toggleResources}
                    className="flex items-center text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
                  >
                    {t('nav.resources')} <ChevronDown size={16} className={`ml-1 transform transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isResourcesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {resourceItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-red-100"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <div ref={languageDropdownRef}>
                  <LanguageSelector 
                    isOpen={isLanguageDropdownOpen}
                    onToggle={toggleLanguageDropdown}
                  />
                </div>
                <a
                  href="#download"
                  onClick={(e) => scrollToSection(e, '#download')}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
                >
                  <Download size={20} />
                  <span>{t('nav.download_now')}</span>
                </a>
              </div>

              {isMenuOpen && (
                <div
                  className="fixed inset-0 bg-white z-50"
                  onClick={(e) => {
                    const target = e.target as Node;
                    if (mobileMenuContentRef.current && !mobileMenuContentRef.current.contains(target)) {
                      if (!isResourcesOpen && !isLanguageDropdownOpen) {
                        closeMenu();
                      } else {
                        if (resourcesRef.current && !resourcesRef.current.contains(target)) {
                          setIsResourcesOpen(false);
                        }
                        if (languageDropdownRef.current && !languageDropdownRef.current.contains(target)) {
                          setIsLanguageDropdownOpen(false);
                        }
                      }
                    }
                  }}
                >
                  <button
                    onClick={closeMenu}
                    className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
                  >
                    <X size={24} />
                  </button>

                  <div 
                    ref={mobileMenuContentRef}
                    className="h-full overflow-y-auto my-20 mx-10"
                    onClick={(e) => e.stopPropagation()}
                  >
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

                      <div className="relative w-full max-w-xs" ref={resourcesRef}>
                        <button
                          onClick={toggleResources}
                          className="flex items-center justify-center w-full text-gray-700 hover:text-red-600 transition-colors text-xl focus:outline-none"
                        >
                          {t('nav.resources')}
                          <ChevronDown
                            size={16}
                            className={`ml-1 transform transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        <div
                          className={`w-full bg-gray-50 rounded-lg mt-2 overflow-hidden transition-all duration-300 ${
                            isResourcesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {resourceItems.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-red-100 text-center border-b border-gray-100 last:border-b-0"
                              onClick={() => setIsResourcesOpen(false)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div ref={languageDropdownRef}>
                        <LanguageSelector 
                          isOpen={isLanguageDropdownOpen}
                          onToggle={toggleLanguageDropdown}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </nav>
      </header>
    );
  };

  export default Header;