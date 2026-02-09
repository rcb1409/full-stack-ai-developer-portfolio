
import React from 'react';
import { Calendar } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Me</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
          Bridging the gap between <span className="text-slate-400">complex data</span> and <span className="text-red-600">intuitive design</span>.
        </h2>
        <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          <p>
            Currently pursuing my Master's in Computer Science at <strong>North Carolina State University</strong>, I've dedicated my studies to the intersection of high-scale backend engineering and cutting-edge machine learning.
          </p>
          <p>
            My philosophy is simple: technology should be invisible. I strive to build intelligent systems that aren't just powerful under the hood, but also seamless and delightful for humans to interact with.
          </p>
          
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 mt-12 p-8 bg-slate-50 rounded-[32px] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                <Calendar size={24} />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Available From</p>
                <p className="font-bold text-slate-900">May 2026</p>
              </div>
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-slate-200" />
            <div className="text-left">
              <p className="text-slate-500 font-medium text-sm">
                Actively seeking <span className="text-red-600 font-bold">Full-Time Software Engineering</span> & <span className="text-indigo-600 font-bold">ML Engineer</span> positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
