import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2 block">Career Path</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Professional Experience</h2>
        </div>

        <div>
          <div className="space-y-8 max-w-8xl mx-auto">
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
                {exp.description && (
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                )}
                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="list-none space-y-3">
                    {exp.bulletPoints.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-slate-400 shrink-0 mt-0.5" aria-hidden="true">•</span>
                        <span className="text-slate-600 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
