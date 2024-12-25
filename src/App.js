<<<<<<< HEAD
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Header />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default App;
=======

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Button from "./components/Button"


function App(){
    return(
        <div> 
            <Header/>
            <Hero/>
            <About/>
            <Skills/>
        </div>
        
    )
}export default App
>>>>>>> 1db729d18ed853b2e69830f9e92b52603a5be278
