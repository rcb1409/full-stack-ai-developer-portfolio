
import React from 'react';
import { Calendar, GraduationCap, Building2 } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Column: Story */}
        <div>
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2 block">About Me</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Bridging Data & Design</h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Currently pursuing my Master's at <strong>NC State University</strong>, I'm passionate about the intersection of high-scale backend engineering and cutting-edge machine learning.
            </p>
            <p>
              My goal is to build intelligent systems that aren't just powerful under the hood, but also intuitive and delightful for humans to interact with.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl mt-8">
              <h4 className="text-red-700 font-bold flex items-center mb-2">
                <Calendar size={18} className="mr-2" /> Open for Opportunities
              </h4>
              <p className="text-red-800/80 text-sm">
                Actively seeking Software Engineering & ML Engineer roles starting <strong>May 2026</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Exp & Edu */}
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-4">Education</h3>
            <div className="bg-slate-50 p-8 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  <GraduationCap className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{EDUCATION.institution}</h4>
                  <p className="text-slate-600 mb-2">{EDUCATION.degree}</p>
                  <div className="flex items-center text-xs font-black uppercase tracking-wider text-slate-400 gap-4">
                    <span>{EDUCATION.period}</span>
                    <span>•</span>
                    <span>{EDUCATION.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-4">Experience</h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Building2 size={18} />
                    </div>
                    {idx !== EXPERIENCES.length - 1 && <div className="w-[2px] h-full bg-slate-100 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                    <p className="text-indigo-600 font-semibold text-sm mb-1">{exp.company}</p>
                    <p className="text-xs font-black uppercase text-slate-400 mb-4">{exp.period}</p>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
