import React from 'react'

import 'aos/dist/aos.css'; 
import image1 from '../assets/javascript.png';
import image2 from '../assets/html.png';
import image3 from '../assets/css.png';
import image4 from '../assets/tailwind.png';
import image5 from '../assets/bootstrap.png';
import image6 from '../assets/php.png';
import image7 from '../assets/mysql.png';
import image8 from '../assets/figma.png';
import image9 from '../assets/React.png';
import image10 from '../assets/git.png';
import image11 from '../assets/github-icon.png';
const Skills = () => {

   
    
    return (
        <div className='p-6  md:px-24 py-10'>
            <div className='text-center '>
                <h2 className='text-4xl  font-medium mb-3'>My Skills</h2>
                <div id='line2' className='m-auto mb-10' data-aos="fade-left"></div>
                    <p className='text-lg align-justify sm:text-lg px-8 sm:text-center'> 
                        Throughout my Front-End development studies, I've gained familiarity with various technology stacks. 
                        Currently, my focus is on mastering the ReactJS framework to enhance my ability in creating engaging 
                        user interfaces and improving overall user experience.
                    </p>
            </div>
            <div className='flex align-center justify-center w-100'>
                <div id="skill-container" className='mt-10 bg-black w-full h-auto p-10 text-white' data-aos="zoom-in-left">
                <h3 className='mt-2 font-medium'>Front End</h3>
                    <div className='skills-book'>
                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image9}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                React JS
                            </div>
                        </div>

                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image1}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                JavaScript
                            </div>
                        </div>

                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image2}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                HTML
                            </div>
                        </div>

                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image3}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                CSS
                            </div>
                        </div>

                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image4}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                Tailwind CSS
                            </div>
                        </div>

                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image5}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                Bootstrap
                            </div>
                        </div>
                    </div>

                    <h3 className='font-medium mt-9'>Back End</h3>
                    <div className='skills-book'>
                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image6}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                PHP
                            </div>
                        </div>
                        <div className='skills'>
                            <div className='icon-container'>
                                <img src={image7}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                MYSQL
                            </div>
                        </div>
                    </div>

                <h3 className='font-medium mt-9'>Others</h3>
                <div className='skills-book'>
                    <div className='skills'>
                            <div className='icon-container'>
                                <img src={image8}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                Figma
                            </div>
                    </div>
                    <div className='skills'>
                            <div className='icon-container'>
                                <img src={image10}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                Git
                            </div>
                    </div>
                    <div className='skills'>
                            <div className='icon-container'>
                                <img src={image11}  alt="Image" />
                            </div>
                            <div className='skills-text'>
                                Github
                            </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>

)
}

export default Skills