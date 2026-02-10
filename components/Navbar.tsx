
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          ravibollepalli<span className="text-red-600">.</span>dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-sm font-medium uppercase tracking-widest text-slate-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-red-600 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 border-l pl-6 border-slate-200">
            <a href="https://github.com/rcb1409" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/ravi-chandu-bollepalli/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:ravichandubollepalli@gmail.com" className="text-slate-500 hover:text-slate-900 transition-colors" aria-label="Email"><Mail size={20} /></a>
            <span className="self-stretch w-px bg-slate-200 min-h-[20px]" aria-hidden="true" />
            <a
              href="https://calendly.com/ravichandubollepalli/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              <Calendar size={18} />
              Schedule a meeting
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'top-full opacity-100' : '-top-[500px] opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-bold border-b border-slate-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="https://github.com/rcb1409" target="_blank" rel="noopener noreferrer" className="text-slate-600"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/ravi-chandu-bollepalli/" target="_blank" rel="noopener noreferrer" className="text-slate-600"><Linkedin size={24} /></a>
            <a href="mailto:ravichandubollepalli@gmail.com" className="text-slate-600" aria-label="Email"><Mail size={24} /></a>
            <span className="self-center w-px h-6 bg-slate-200 shrink-0" aria-hidden="true" />
            <a
              href="https://calendly.com/ravibollepalli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={18} />
              Schedule a meeting
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
