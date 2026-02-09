
import React from 'react';
import { GraduationCap, Building2 } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2 block">Career Path</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Experience & Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education - Left Column */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
              <GraduationCap size={20} /> Academic
            </h3>
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold mb-2">{EDUCATION.institution}</h4>
              <p className="text-red-600 font-semibold mb-4 leading-snug">{EDUCATION.degree}</p>
              <div className="space-y-2 text-sm font-medium text-slate-500">
                <p className="flex items-center gap-2 uppercase tracking-wider text-[10px] font-black">
                  <span className="w-2 h-2 rounded-full bg-slate-200" /> {EDUCATION.period}
                </p>
                <p className="flex items-center gap-2 uppercase tracking-wider text-[10px] font-black">
                  <span className="w-2 h-2 rounded-full bg-slate-200" /> {EDUCATION.location}
                </p>
              </div>
            </div>
          </div>

          {/* Experience - Right Column */}
          <div className="lg:col-span-8">
            <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
              <Building2 size={20} /> Professional
            </h3>
            <div className="space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="group relative bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-2xl font-bold group-hover:text-indigo-600 transition-colors">{exp.role}</h4>
                      <p className="text-slate-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
