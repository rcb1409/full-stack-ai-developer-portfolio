import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/lib/projects'
import { getPostsByProject } from '@/lib/blog'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-heading">
            Featured Projects
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors uppercase tracking-widest"
          >
            All Blog Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const postCount = getPostsByProject(project.slug).length
            return (
              <div
                key={project.slug}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <Link href={`/projects/${project.slug}`} className="relative overflow-hidden aspect-[4/3] block">
                  <Image
                    src={project.imageFile}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                      View Project <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-red-600 transition-colors font-heading">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Blog post count */}
                  {postCount > 0 && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 mb-5 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {postCount} technical {postCount === 1 ? 'deep-dive' : 'deep-dives'}
                    </Link>
                  )}

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                    >
                      Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
