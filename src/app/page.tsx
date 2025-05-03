import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Made from './components/Made';

export default function Page() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <section id="home" className="-top-20">
        
        <Home />
      </section>

      <section id="services" className="py-0">
        <Services />
        <Made />
      </section>

      <section id="portfolio" className="py-20">
        <Portfolio />
      </section>

      <section id="partners" className="py-20">
        <Partners />
      </section>

      <section id="about" className="py-5">
        <About />
      </section>

      <section id="team" className="py-10">
        <Team />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
}