<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import fb from '../assets/facebook.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import home from "../assets/home.png";
import skills from "../assets/skills.png";
import profile from "../assets/profile.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [isNavVisible, setIsNavVisible] = useState(true); // Nav visibility state
  let timeoutId;

  // Function to hide the nav after 5 seconds of inactivity
  const hideNav = () => {
    timeoutId = setTimeout(() => {
      setIsNavVisible(false); // Hide nav after 5 seconds of inactivity
    }, 5000);
  };

  // Scroll event to change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Change navbar background when scrolled
      } else {
        setIsScrolled(false);
      }

      // Reset the inactivity timer whenever the user scrolls
      clearTimeout(timeoutId);
      setIsNavVisible(true); // Show the nav on scroll
      hideNav(); // Restart the timer after every scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Set the initial timer to hide the nav
    hideNav();

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // Clear timeout on component unmount
    };
  }, []);

  // Detect which section is in view and highlight the active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveLink(`#${currentSection}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Logo Section */}
      <header
        className={`top-0 left-0 right-0 z-50 bg-white p-5 md:p-7 pb-10 md:pb-0 flex flex-wrap justify-between items-center static md:absolute ${isScrolled ? 'bg-gray-800' : 'bg-transparent'}`}
      >
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
          <a href="https://www.facebook.com/anthonylngkyut" target="_blank" rel="noopener noreferrer" className="w-8">
            <img src={fb} alt="Facebook" />
          </a>
        </nav>
      </header>

      {/* Navbar with Links */}
      <div className={`align-center flex justify-center ${!isNavVisible && 'hidden'}`}>
        <div className="nav flex space-x-3 items-center justify-center p-3">
          <a href="#hero">
            <div className={`nav-content ${activeLink === '#hero' ? 'active-link' : ''}`}>
              <img src={home} alt="Home" />
            </div>
          </a>
          <a href="#about">
            <div className={`nav-content ${activeLink === '#about' ? 'active-link' : ''}`}>
              <img src={profile} alt="About" />
            </div>
          </a>
          <a href="#skills">
            <div className={`nav-content ${activeLink === '#skills' ? 'active-link' : ''}`}>
              <img src={skills} alt="Skills" />
            </div>
          </a>
          <a href="#projects">
            <div className={`nav-content ${activeLink === '#projects' ? 'active-link' : ''}`}>
              <img src={skills} alt="Projects" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
=======
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
>>>>>>> 1db729d18ed853b2e69830f9e92b52603a5be278
