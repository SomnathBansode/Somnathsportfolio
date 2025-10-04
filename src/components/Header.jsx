import React, { useState } from "react";
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

const Header = ({ userName = "Portfolio" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#27272a] p-2 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">
          <a
            href="#home"
            className="hover:text-[#a78bfa] italic font-black tracking-tight"
          >
            {userName}
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav
          className="hidden lg:flex space-x-4"
          aria-label="Primary Navigation"
          role="navigation"
        >
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded flex items-center"
            >
              <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <nav
        id="mobile-menu"
        className={`lg:hidden bg-[#27272a] transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } absolute top-16 left-0 w-full`}
        aria-label="Mobile Navigation"
        role="navigation"
      >
        <div className="flex flex-col items-start space-y-4 py-4 px-4">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-2 rounded flex items-center w-full"
            >
              <Icon className="w-5 h-5 mr-3" aria-hidden="true" />
              <span className="text-lg">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
};

export default Header;
