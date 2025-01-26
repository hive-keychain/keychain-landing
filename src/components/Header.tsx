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
    { href: '#contact', label: 'Contact' },
  ];

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80; // Ajusta este número según la altura de tu encabezado fijo
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Habilita el desplazamiento suave
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)} // Llama a la función personalizada
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
              Resources <ChevronDown size={16} className="ml-1" />
            </button>

            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a
                  href="https://www.npmjs.com/package/keychain-sdk"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Keychain SDK
                </a>
                <a
                  href="https://play.hive-keychain.com/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Keychain playground
                </a>
                <a
                  href="https://github.com/hive-keychain"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Github
                </a>
                <a
                  href="https://multisig-doc.hive-keychain.com/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Hive Multisig
                </a>
                <a
                  href="https://qr.hive-keychain.com/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Hive QR Code Generator
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
          <div
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6"
            onClick={closeMenu} // Cierra el menú al hacer clic en cualquier lugar
          >
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que el clic en el botón cierre el menú
                closeMenu();
              }}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
            >
              <X size={24} />
            </button>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.stopPropagation(); // Evita que el clic en el enlace cierre el menú
                  scrollToSection(e, item.href);
                  closeMenu();
                }}
                className={`text-gray-700 hover:text-red-600 transition-colors text-xl
                  ${activeSection === item.href.substring(1) ? 'text-red-600 font-medium' : ''}`}
              >
                {item.label}
              </a>
            ))}
            <div className="text-gray-700 hover:text-red-600 transition-colors text-xl">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Evita que el clic en el botón cierre el menú
                  toggleResources();
                }}
                className="flex items-center w-full justify-center focus:outline-none"
              >
                Resources <ChevronDown size={16} className="ml-1" />
              </button>
              {isResourcesOpen && (
                <div className="mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <a
                    href="https://www.npmjs.com/package/keychain-sdk"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Keychain SDK
                  </a>
                  <a
                    href="https://play.hive-keychain.com/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Keychain playground
                  </a>
                  <a
                    href="https://github.com/hive-keychain"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Github
                  </a>
                  <a
                    href="https://multisig-doc.hive-keychain.com/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Hive Multisig
                  </a>
                  <a
                    href="https://qr.hive-keychain.com/"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Hive QR Code Generator
                  </a>
                </div>
              )}
            </div>
            <LanguageSelector />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;