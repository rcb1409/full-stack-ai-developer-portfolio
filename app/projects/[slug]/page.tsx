import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Github, ExternalLink, ArrowLeft, BookOpen } from 'lucide-react'
import { PROJECTS, getProject } from '@/lib/projects'
import { getPostsByProject } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: project.title }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const posts = getPostsByProject(slug)

  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors mb-10 font-medium"
          >
            <ArrowLeft size={16} /> All Projects
          </Link>

          {/* Hero image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-xl">
            <Image
              src={project.imageFile}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-heading">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">{project.longDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-16 pb-16 border-b border-slate-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
              >
                <Github size={18} /> View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-slate-200 text-slate-700 text-sm font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>

          {/* Blog posts */}
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={22} className="text-red-600" />
            <h2 className="text-2xl font-bold tracking-tight font-heading">Technical Deep-Dives</h2>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
              <p className="text-base font-medium">Blog posts coming soon.</p>
              <p className="text-sm mt-1">
                Technical write-ups for this project are in progress.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
