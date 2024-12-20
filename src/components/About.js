import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import image2 from '../assets/2.png';

const About = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []);

  return (
    <div className='p-6 md:p-24 pb-10'>
      <div className='h-0.5 bg-black my-5'></div>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center mt-10'>
        <div className='w-full md:w-1/2 ml-0 md:ml-20'>
      
          <h2 className='text-2xl text-center md:text-left md:text-3xl font-medium mb-4'> Personal Details </h2>
        
          <div className='w-full flex items-center justify-center md:items-start md:justify-start'>
            <div id='line1' className='mb-10 ' data-aos="fade-right"></div>
          </div>
          <p className='text-center p-3 sm:mb-4 text-xl text-left md:text-1xl text-justify' data-aos="fade-right">
            I'm passionate about <span className='font-medium' style={{ color: "rgb(80 0 228)", fontweight:"bold"}}>Front-End Development</span>, where creativity and technology intersect. With HTML, CSS, and JavaScript, I craft captivating digital experiences, honing my skills with each line of code to leave my mark on the digital landscape, project by project.
          </p>
          <p className='mt-4 text-xl p-3 md:text-1xl text-justify' data-aos="fade-right">
            Throughout my academic journey, I've developed a deep passion for creating innovative and user-friendly web applications. My studies have equipped me with a solid foundation in various programming languages, web technologies, and development frameworks.
          </p> 
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center p-8'>
          <img src={image2} id="aboutme-image" className=" rounded-lg  " data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};

export default About;
