
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-red-200 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
