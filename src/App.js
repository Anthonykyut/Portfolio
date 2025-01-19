import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certificate from './components/Certificate';

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
        <Certificate />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section>
        <Footer/>
      </section>
    
    </div>
  );
};

export default App;
