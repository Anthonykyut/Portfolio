import React from 'react'
import proj1 from '../assets/proj1.png'




const Projects = () => {
  return (
    
    <div className='p-6 md:p-24 pb-10 md:mx-20'id='project'>

        <h2 className='text-2xl text-center md:text-start md:text-3xl font-medium mb-4 px-12'>
        My Project
        </h2>

      <div className='w-full flex items-center justify-center md:items-start md:justify-start px-12'>
        <div id='line1' className='mb-10' data-aos="fade-right"></div>
      </div>

        <div id='project-container'> 
        
        

        <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
          
  <div className='project-container flex flex-col lg:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 p-20'>
    <div>
      <img 
        src={proj1} 
        alt="Project Thumbnail"
        className="w-full max-w-md md:max-w-lg rounded-lg object-cover"
        style={{ width: "100%", maxWidth: "50rem", minWidth:"25rem" , height: "auto" }}
      />
    </div>
    <div >
      <div className='space-y-3'>
        <p className='text-xl font-medium sm:px-7'>
          Furlove: Canine / Feline Profiling Management System
        </p>
        <p className='text-justify sm:px-7'>
          This website, our Capstone Project, aims to build a supportive community for pet owners. A key feature is pet profiling, 
          enabling users to create detailed profiles of their pets, including breed, age, medical history, and personality traits, to better 
          manage and celebrate their pets' unique needs.
        </p>
        <p className='font-medium sm:px-7'> Tool Used :</p>
        <div className='flex flex-wrap gap-3 sm:px-7'>
          <div className='proj-skill'>HTML</div>
          <div className='proj-skill'>CSS</div>
          <div className='proj-skill'>JavaScript</div>
          <div className='proj-skill'>PHP</div>
          <div className='proj-skill'>MYSQL</div>
          <div className='proj-skill'>Bootstrap</div>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>



    </div>
  )
}

export default Projects