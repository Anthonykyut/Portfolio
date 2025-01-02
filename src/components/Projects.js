import React from 'react'
import img1 from '../assets/maintenance.png'
const Projects = () => {
  return (
    <div className='p-6 md:px-24 py-10'>
        <div className='text-center'>
        <h2 className='text-4xl  font-medium mt-5 text-center'>My Project</h2>
        <div id='line2' className='m-auto mb-10' data-aos="fade-left"></div>
                    <p className='text-xl align-justify sm:text-xl px-8 sm:text-center'> 
                    This collection highlights a variety of my academic and personal projects, all 
                     developed using the skills and knowledge I’ve gained throughout my educational 
                     journey. Each project represents a combination of creativity, technical expertise, 
                      dedication, showcasing the growth and capabilities I have cultivated over time.
                    </p>
        </div>
        <div id='project-container'> 
        <h3 className='text-center text-white text-3xl font-semibold'> Under Construction</h3>
        <div className='flex align-center justify-center '>

          
            <img src={img1} style={{maxWidth:"100%", width:"80%"}}></img>
            </div>  

        </div>



    </div>
  )
}

export default Projects