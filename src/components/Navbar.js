import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-800 text-white p-6 z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl font-bold"><a href="#introduction">Siddharth Manna</a> </h1>

        {/* Hamburger and Close Icon */}
        <button
          className="text-3xl md:hidden focus:outline-none relative z-20"
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-800 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:static md:transform-none md:flex md:flex-row md:space-x-10 md:bg-transparent md:justify-end`}
          style={{ zIndex: 15 }} // Ensure menu is below the button
        >
          <li className="text-xl md:text-2xl mb-6 md:mb-0 transform hover:scale-110 transition duration-300">
            <a
              href="#about"
              className="hover:text-yellow-400 "
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li className="text-xl md:text-2xl mb-6 md:mb-0 transform hover:scale-110 transition duration-300">
            <a
              href="#projects"
              className="hover:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience 
            </a>
          </li>
          <li className="text-xl md:text-2xl mb-6 md:mb-0 transform hover:scale-110 transition duration-300">
            <a
              href="#skills"
              className="hover:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li className="text-xl md:text-2xl mb-6 md:mb-0 transform hover:scale-110 transition duration-300">
            <a
              href="#contact"
              className="hover:text-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;