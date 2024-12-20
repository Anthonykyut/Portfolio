import React from 'react';
import fb from '../assets/facebook.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 z-50 bg-white p-5 md:p-7 pb-10 md:pb-0 flex flex-wrap justify-between items-center static md:absolute">
      {/* Logo Section */}
      <div className="w-full md:w-auto text-center md:text-left">
        <p className="font-poppins text-2xl font-bold">
          <span style={{ color: "#8247EF" }}>Easy</span>Dev.
        </p>
      </div>

      {/* Social Icons */}
      <nav className="w-full md:w-auto flex justify-center md:justify-end items-center space-x-4 mt-4 md:mt-0">
        <a href="#" className="w-8">
          <img src={github} alt="GitHub" />
        </a>
        <a href="#" className="w-8">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://www.facebook.com/anthonylngkyut"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8"
        >
          <img src={fb} alt="Facebook" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
