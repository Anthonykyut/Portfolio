import React from 'react'
import picture from "../assets/1.png"
import '../index';



const Hero = () => {
  return (
<div class="flex items-center justify-center h-screen p-20  ">

    <div className='w-1/2 ml-20 p-15 '>

        <p className='text-xl '> Hello There 👋</p>
        <p className='mt-10 text-3xl font-bold'> I’m <span style={{color:"#8708C4"}}>A</span>nthony <span style={{color:"#8708C4"}}>B</span>alderas</p>
        <p className='mt-10 text-2xl '> Aspiring Front-End  Web Developer from Nueva Ecija, I am a 4th year student studying BSIT at Nueva Ecija University of Science and Technology.</p>
        <a href="#" id='Downloadcv' > Download CV </a>
   
    </div>

    <div className='w-1/2 items-center flex justify-center p-15 '>
        <img src={picture} className='max-w-md'></img>
    </div>

 </div>

  )
}



export default Hero