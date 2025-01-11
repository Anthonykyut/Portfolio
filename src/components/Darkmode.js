
import React, { useState } from 'react';
import '../App.css';  

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label htmlFor="darkmode-toggle">
        <svg
          version="1.1"
          className="sun"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 496 496"
          style={{ enableBackground: 'new 0 0 496 496' }}
        >
          {/* Sun SVG code */}
          <rect x="152.994" y="58.921" transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)" width="40.001" height="16" />
          {/* Add other sun SVG paths */}
        </svg>
        <svg
          version="1.1"
          className="moon"
          xmlns="http://www.w       3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 49.739 49.739"
          style={{ enableBackground: 'new 0 0 49.739 49.739' }}
        >
          {/* Moon SVG code */}
          <path d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804..." />
        </svg>
      </label>
      <div className="background"></div>
    </div>
  );
};

export default DarkModeToggle;
