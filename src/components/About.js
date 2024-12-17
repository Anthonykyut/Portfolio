import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import image2 from '../assets/2.png';

const About = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <div className='p-24 pb-10'>
      <div className='h-0.5 bg-black my-5'></div>

      <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
       
        <div className='w-full md:w-1/2 ml-0 md:ml-20 '>
          <h2 className='text-4xl font-medium '>Personal Details</h2>
          <div id='line1' className='mb-10'></div>
          <p className='mb-4 text-2xl' data-aos="fade-right">
            I'm passionate about <span className='font-medium' style={{ color: "#8247EF"}}>front-end development</span>, where creativity and technology intersect. With HTML, CSS, and JavaScript, I craft captivating digital experiences, honing my skills with each line of code to leave my mark on the digital landscape, project by project.
          </p>
          <p className='mt-4 text-2xl' data-aos="fade-right">
            Throughout my academic journey, I've developed a deep passion for creating innovative and user-friendly web applications. My studies have equipped me with a solid foundation in various programming languages, web technologies, and development frameworks.
          </p>
        </div>

       
        <div className='w-full md:w-1/2 flex items-center justify-center p-8'>
          <img src={image2} alt="About Me" className='max-w-md' data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};

export default About;
