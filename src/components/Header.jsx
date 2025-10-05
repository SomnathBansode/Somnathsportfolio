import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Home", icon: FaHome },
  { href: "#about", label: "About", icon: FaUser },
  { href: "#projects", label: "Projects", icon: FaFolderOpen },
  { href: "#contact", label: "Contact", icon: FaEnvelope },
];

const Header = ({ userName = "Portfolio", setHeaderHeight = () => {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Update header height
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [setHeaderHeight]);

  // Scroll progress & active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      for (let section of sections) {
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (scrollTop >= top && scrollTop < bottom) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-[#09090b] fixed w-full top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        {/* Logo */}
        <div className="text-white text-xl xs:text-2xl font-bold relative">
          <a
            href="#home"
            className="font-black tracking-tight text-white hover:text-[#8b5cf6]"
          >
            {userName}
          </a>
          {/* Logo underline */}
          <div
            className="absolute bottom-0 left-0 h-1 bg-[#8b5cf6] transition-all"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-4 items-center">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white font-bold transition-colors px-3 py-1 flex flex-col items-center relative"
            >
              <Icon className="w-4 h-4 mb-1" />
              <span>{label}</span>
              {/* Nav underline */}
              <span
                className={`h-1 w-full rounded-full bg-[#8b5cf6] absolute bottom-0 left-0 transition-all ${
                  activeSection === href.slice(1) ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-menu"
        className={`lg:hidden bg-[#09090b] transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } absolute left-0 w-full`}
      >
        <div className="flex flex-col items-start space-y-4 py-4 px-4">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white font-bold hover:text-[#8b5cf6] transition-colors px-3 py-2 rounded flex items-center w-full relative"
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{label}</span>
              <span
                className={`h-1 w-full rounded-full bg-[#8b5cf6] absolute bottom-0 left-0 transition-all ${
                  activeSection === href.slice(1) ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
  setHeaderHeight: PropTypes.func,
};

export default Header;
