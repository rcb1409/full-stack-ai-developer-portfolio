
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {currentYear} Designed and developed by <span className="text-white font-bold">ravibollepalli.dev</span>
        </div>
        
        <nav className="flex items-center space-x-8 text-xs font-black uppercase tracking-widest">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </nav>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-black uppercase tracking-widest bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
