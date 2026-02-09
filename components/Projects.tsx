
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Featured Work</h2>
          </div>
          <p className="max-w-md text-slate-500 text-lg">
            A selection of projects ranging from enterprise SaaS platforms to academic AI research experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full flex justify-between items-center text-white">
                    <span className="font-medium">{project.category}</span>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
