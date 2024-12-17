import React from 'react'
import fb from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'


const Header = () => {
  return (
    <div className='absolute top-0 left-0 right-0 z-50 bg-white flex p-7 h-17 justify-between items-center ' >
      <div className='w-100'>
        <p className="font-poppins text-2xl font-bold">
          <span style={{ color:"#8708C4" }}>Anthony</span>Kyut.
        </p>
      </div>
      <div className='flex items-center space-x-4 '>
        <a href='#' className='w-8'>
          <img src={github} alt="GitHub" />
        </a>
        <a href='#' className='w-8'>
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href='https://www.facebook.com/anthonylngkyut' target="_blank" className='w-8'>
          <img src={fb} alt="Facebook" />
        </a>
      </div>
    </div>
  );
}


export default Header;
