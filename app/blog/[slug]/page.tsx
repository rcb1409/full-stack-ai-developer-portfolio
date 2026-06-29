import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getAllPostSlugs, getPost } from '@/lib/blog'
import { getProject } from '@/lib/projects'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.summary }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const project = getProject(post.project)

  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back */}
          <div className="flex items-center gap-4 mb-10 text-sm text-slate-500">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors font-medium"
            >
              <ArrowLeft size={16} /> Blog
            </Link>
            {project && (
              <>
                <span>/</span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:text-red-600 transition-colors font-medium"
                >
                  {project.title}
                </Link>
              </>
            )}
          </div>

          {/* Post header */}
          <header className="mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6 font-heading">
              {post.title}
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-6">{post.summary}</p>

            <div className="flex items-center gap-5 text-sm text-slate-400 pb-8 border-b border-slate-200">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTime}
              </span>
            </div>
          </header>

          {/* MDX content */}
          <article className="prose prose-slate prose-lg max-w-none">
            <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={16} /> All Posts
            </Link>
            {project && (
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                More from {project.title} →
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
