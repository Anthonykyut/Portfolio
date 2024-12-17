import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import image1 from '../assets/javascript.png';
import image2 from '../assets/html.png';
import image3 from '../assets/css.png';
import image4 from '../assets/tailwind.png';
import image5 from '../assets/bootstrap.png';
import image6 from '../assets/php.png';
import image7 from '../assets/mysql.png';
import image8 from '../assets/figma.png';
const Skills = () => {

   
    
    return (
        <div className=' px-24 py-10'>
            <div className='text-center '>
                <h2 className='text-4xl  font-medium mb-3'>My Skills</h2>
                <div id='line2' className='m-auto mb-10' data-aos="fade-left"></div>
                    <p className='text-xl p-8'> 
                        Throughout my Front-End development studies, I've gained familiarity with various technology stacks. 
                        Currently, my focus is on mastering the ReactJS framework to enhance my ability in creating engaging 
                        user interfaces and improving overall user experience.
                    </p>
            </div>
            <div className='flex align-center justify-center w-100'>
            <div id="skill-container" className='mt-10 bg-black w-50 h-50 p-10 text-white ' data-aos="zoom-in-left">
                
                <h3 className=' mb-2 font-medium'>Front End</h3>
                    <div className='flex space-x-8 flex align-center mb-5'> 
                        <img src={image1} />
                        <img src={image2} />
                        <img src={image3} />
                        <img src={image4} />
                        <img src={image5} />
                    </div>
                <h3 className='font-medium mb-2' > Back End </h3>
                    <div className='flex space-x-8 align-center mb-5'>
                        <img src={image6} />
                        <img src={image7} />
                    </div>
                <h3 className='font-medium mb-2'> Others </h3>
                    <div className='flex space-x-8 align-center '>
                        <img src={image8}/>
                    </div>
            </div>
            </div>
        </div>

)
}

export default Skills