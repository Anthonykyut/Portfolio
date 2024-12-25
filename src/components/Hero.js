<<<<<<< HEAD
import React, { useEffect } from 'react';
import picture from "../assets/1.png";
import '../index.css';





const Hero = () => {

  useEffect(() => {
   
    const options = {
      strings: [
        "I’m <span style='color: #8247EF;'>A</span>nthony <span style='color: #8247EF;'>B</span>alderas"
      ],
      typeSpeed: 100, // Speed of typing
      backSpeed: 100, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before typing starts
      loop: false, 
      contentType: 'html', // Allow HTML tags inside strings
    };

    const typed = new window.Typed(".typed-text", options);

    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-auto md:h-screen p-10 md:p-20">
     
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 md:ml-20 ">
        <p className="text-lg md:text-xl">Hello There <span className='waving-emoticon'>👋</span></p>
        
   
        <p className="mt-5 text-2xl md:text-3xl font-bold">
          <span className="typed-text"></span> 
        </p>
        
        <p className="mt-5 text-lg md:text-2xl">
          Aspiring Front-End Web Developer from Nueva Ecija. I am a 4th year student studying BSIT at Nueva Ecija University of Science and Technology.
        </p>
        
        <div className="flex justify-center md:justify-start items-center w-full">
          <a 
            href="/AnthonyBalderas-Resume.pdf" 
            download="AnthonyBalderas-Resume.pdf" 
            id="Downloadcv" 
            className="inline-block mt-5 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src={picture} alt="Anthony Balderas" className="md:max-w-md rounded-lg w-3/4" />
      </div>



    </div>

  );
};

export default Hero;
=======
import React, { useEffect } from 'react';
import picture from "../assets/1.png";
import '../index.css';

const Hero = () => {

  useEffect(() => {
   
    const options = {
      strings: [
        "I’m <span style='color: #8247EF;'>A</span>nthony <span style='color: #8247EF;'>B</span>alderas"
        
      ],
      typeSpeed: 100, // Speed of typing
      backSpeed: 100, // Speed of backspacing
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before typing starts
      loop: false, 
      contentType: 'html', // Allow HTML tags inside strings
    };

   
    const typed = new window.Typed(".typed-text", options);

    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center h-auto md:h-screen p-10 md:p-20">
     
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 md:ml-20 ">
        <p className="text-lg md:text-xl">Hello There <span className='waving-emoticon'>👋</span></p>
        
   
        <p className="mt-5 text-2xl md:text-3xl font-bold">
          <span className="typed-text"></span> 
        </p>
        
        <p className="mt-5 text-lg md:text-2xl">
          Aspiring Front-End Web Developer from Nueva Ecija. I am a 4th year student studying BSIT at Nueva Ecija University of Science and Technology.
        </p>
        
        <div className="flex justify-center md:justify-start items-center w-full">
          <a 
            href="/AnthonyBalderas-Resume.pdf" 
            download="AnthonyBalderas-Resume.pdf" 
            id="Downloadcv" 
            className="inline-block mt-5 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src={picture} alt="Anthony Balderas" className="md:max-w-md rounded-lg w-3/4" />
      </div>
    </div>
  );
};

export default Hero;
>>>>>>> 1db729d18ed853b2e69830f9e92b52603a5be278
