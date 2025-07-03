   import React from 'react';
   import Header from '../components/layout/Header';
   import Hero from '../components/sections/Hero';
   import About from '../components/sections/About';
   import Partners from '../components/sections/Partners';
   import Projects from '../components/sections/Projects';
   import Contact from '../components/sections/Contact';

   const Home = () => {
     return (
       <div>
         <Header />
         <Hero />
         <About />
         <Partners />
         <Projects />
         <Contact />
       </div>
     );
   };

   export default Home;
