import { ChevronDown, Download, Menu, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { LanguageSelector, useLanguage } from "../context/LanguageContext";
import { useActiveSection } from "../hooks/useActiveSection";

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
  const mobileResourcesRef = useRef<HTMLDivElement>(null); // Nueva referencia para el dropdown de Resources en móvil

  // Añadir este useEffect para manejar clics fuera de los dropdowns
  // Modificar el useEffect para manejar los clics fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Primero verificamos si el clic fue dentro del menú móvil
      if (mobileMenuContentRef.current?.contains(event.target as Node)) {
        return; // Si el clic fue dentro del menú móvil, no hacemos nada
      }

      // Manejamos los dropdowns
      if (
        !resourcesRef.current?.contains(event.target as Node) &&
        !mobileResourcesRef.current?.contains(event.target as Node)
      ) {
        setIsResourcesOpen(false);
      }

      if (!languageDropdownRef.current?.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }

      // Si estamos en móvil y los dropdowns están cerrados, cerramos el menú
      if (
        window.innerWidth < 768 &&
        !isResourcesOpen &&
        !isLanguageDropdownOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isResourcesOpen, isLanguageDropdownOpen]);

  // Añadir este useEffect para controlar el scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      // Bloquear el scroll del body cuando el menú está abierto
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restaurar el scroll cuando el menú se cierra
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1);
      }
    }

    return () => {
      // Limpiar los estilos al desmontar el componente
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "#why", label: t("nav.why") },
    { href: "#download", label: t("nav.download") },
    { href: "#ecosystem", label: t("nav.ecosystem") },
    { href: "#team", label: t("nav.team") },
    { href: "#testimonials", label: t("nav.testimonial") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const resourceItems = [
    {
      href: "https://www.npmjs.com/package/keychain-sdk",
      label: t("footer.resources.sdk"),
    },
    {
      href: "https://play.hive-keychain.com/",
      label: t("footer.resources.playground"),
    },
    { href: "https://github.com/hive-keychain", label: "Github" },
    {
      href: "https://multisig-doc.hive-keychain.com/",
      label: t("footer.resources.multisig"),
    },
    { href: "https://qr.hive-keychain.com/", label: t("footer.resources.qr") },
    {
      href: "https://stores.hive-keychain.com/",
      label: t("footer.resources.map"),
    },
  ];

  const toggleResources = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsResourcesOpen((prev) => !prev);
  };

  const toggleLanguageDropdown = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    const headerElement = document.querySelector("header");

    if (targetElement && headerElement) {
      const offset = headerElement.clientHeight;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  // Modificar el manejador de clics del menú móvil
  // Modificar el manejador del menú móvil para evitar propagación innecesaria
  const handleMobileMenuClick = (e: React.MouseEvent) => {
    // Evitamos que el clic se propague si fue dentro del contenido del menú
    if (mobileMenuContentRef.current?.contains(e.target as Node)) {
      e.stopPropagation();
    }
  };

  const hideMenu =
    ["/privacy", "/terms", "/fees"].includes(location.pathname) ||
    location.hash.startsWith("#invoice/");

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

            <div className="hidden md:flex space-x-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-gray-700 hover:text-red-600 transition-colors
                      ${
                        activeSection === item.href.substring(1)
                          ? "text-red-600 font-medium"
                          : ""
                      }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="relative" ref={resourcesRef}>
                <button
                  onClick={toggleResources}
                  className="flex items-center text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
                >
                  {t("nav.resources")}{" "}
                  <ChevronDown
                    size={16}
                    className={`ml-1 transform transition-transform duration-200 ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    {resourceItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
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
                onClick={(e) => scrollToSection(e, "#download")}
                className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition-colors"
              >
                <Download size={20} />
                <span>{t("nav.download_now")}</span>
              </a>
            </div>

            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-white z-50"
                onClick={handleMobileMenuClick}
              >
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-gray-700 hover:text-red-600 transition-colors focus:outline-none"
                >
                  <X size={24} />
                </button>

                {/* En el JSX del menú móvil, modificar el div del contenido */}
                <div
                  ref={mobileMenuContentRef}
                  className="h-full overflow-y-auto my-20 mx-16"
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
                            ${
                              activeSection === item.href.substring(1)
                                ? "text-red-600 font-medium"
                                : ""
                            }`}
                      >
                        {item.label}
                      </a>
                    ))}

                    <div
                      className="relative w-full max-w-xs"
                      ref={mobileResourcesRef}
                    >
                      {/* En el botón de Resources en móvil, modificar el onClick */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleResources();
                        }}
                        className="flex items-center justify-center w-full text-gray-700 hover:text-red-600 transition-colors text-xl focus:outline-none"
                      >
                        {t("nav.resources")}
                        <ChevronDown
                          size={16}
                          className={`ml-1 transform transition-transform duration-200 ${
                            isResourcesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* En el contenedor del dropdown de Resources en móvil, modificar el onClick */}
                      <div
                        className={`w-full bg-gray-50 rounded-lg mt-2 overflow-hidden transition-all duration-300 ${
                          isResourcesOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        {resourceItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 text-center border-b border-gray-100 last:border-b-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsResourcesOpen(false);
                            }}
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
