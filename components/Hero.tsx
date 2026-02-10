import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import portfolioImage from '../portfolio.png';

const Hero: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'none' | 'left' | 'right'>('none');

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center pt-20">
      <div className="relative w-full h-full max-w-[1440px] flex group">
        
        {/* Left Side: Full Stack Developer */}
        <div 
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide('none')}
          className={`relative h-full flex-1 transition-all duration-700 ease-in-out z-10 flex flex-col justify-center items-end px-12 md:px-24 overflow-hidden
            ${hoveredSide === 'left' ? 'flex-[1.5]' : hoveredSide === 'right' ? 'flex-[0.5]' : 'flex-1'}
          `}
        >
          <div className="transition-all duration-500 text-right max-w-md opacity-100 translate-x-0">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
              <span className="flex items-center justify-end">
                <ChevronLeft className="mr-2 text-red-600" size={40} />
                Full Stack
                <ChevronRight className="ml-2 text-red-600" size={40} />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              I build scalable full-stack applications—from APIs and databases to polished frontends—with clean architecture and modern tooling.
            </p>
          </div>
          {/* Subtle background color block */}
          <div className="absolute inset-0 bg-red-50 -z-10 transition-transform duration-700 translate-x-0" />
        </div>

        {/* Center Image Container */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] z-20 pointer-events-none perspective-1000">
          <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
            {/* The base image (Face) */}
            <img 
              src={portfolioImage} 
              alt="Full-stack AI developer — human ingenuity meets digital intelligence" 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
                ${hoveredSide === 'left' ? 'scale-110 -translate-x-4 grayscale' : hoveredSide === 'right' ? 'scale-110 translate-x-4 hue-rotate-180' : 'scale-100'}
              `}
            />
            
            {/* Split Overlays */}
            <div className={`absolute inset-0 bg-red-600/10 mix-blend-multiply transition-opacity duration-500 ${hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`absolute inset-0 bg-indigo-600/10 mix-blend-multiply transition-opacity duration-500 ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>

        {/* Goal tagline */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-center max-w-2xl px-4">
          <p className="text-sm md:text-base text-slate-500 font-medium">
            Building scalable full-stack applications that integrate GenAI to solve real-world problems.
          </p>
          <p className="mt-2 text-sm text-red-600 font-semibold animate-flash">
            Looking for full-time opportunities starting May 2026
          </p>
        </div>

        {/* Right Side: GenAI & ML */}
        <div 
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide('none')}
          className={`relative h-full flex-1 transition-all duration-700 ease-in-out z-10 flex flex-col justify-center items-start px-12 md:px-24 overflow-hidden
            ${hoveredSide === 'right' ? 'flex-[1.5]' : hoveredSide === 'left' ? 'flex-[0.5]' : 'flex-1'}
          `}
        >
          <div className="transition-all duration-500 text-left max-w-md opacity-100 translate-x-0">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-slate-900">
              GenAI <span className="text-indigo-600">&</span> ML
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Passionate about generative AI and machine learning—LLMs, agents, and intelligent systems that augment how we build and ship products.
            </p>
          </div>
          {/* Subtle background color block */}
          <div className="absolute inset-0 bg-indigo-50 -z-10 transition-transform duration-700 translate-x-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
