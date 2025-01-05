import React, { useState } from "react";

const Header = ({ userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header
      className="bg-[#27272a] p-2 fixed w-full top-0"
      style={{ zIndex: "100" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a
            href="/"
            className="hover:text-[#a78bfa] italic font-black -tracking-normal " // Apply hover effect
          >
            {userName}
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Toggle Hamburger / Close Icon */}
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="#home"
            className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#27272a]">
          <div className="flex flex-col items-start space-y-4 py-2 h-screen">
            <a
              href="#home"
              className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white font-bold hover:text-[#a78bfa] transition-colors duration-300 px-3 py-1 rounded"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
