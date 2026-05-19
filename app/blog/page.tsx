import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { PROJECTS } from '@/lib/projects'
import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical deep-dives on full-stack engineering, RAG pipelines, database optimization, and GenAI.',
}

export default function BlogIndex() {
  const allPosts = getAllPosts()

  return (
    <>
      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-heading">
              Blog
            </h1>
            <p className="text-lg text-slate-500 max-w-xl">
              Technical write-ups from building real projects — RAG pipelines, database
              optimization, Firebase RBAC, and more.
            </p>
          </div>

          {/* Posts grouped by project */}
          {PROJECTS.map((project) => {
            const posts = allPosts.filter((p) => p.project === project.slug)
            if (posts.length === 0) return null

            return (
              <section key={project.slug} className="mb-16">
                <div className="flex items-baseline gap-4 mb-6">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xl font-bold text-slate-900 hover:text-red-600 transition-colors font-heading"
                  >
                    {project.title}
                  </Link>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
                    {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )
          })}

          {allPosts.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 p-16 text-center text-slate-500">
              <p className="text-lg font-medium">No posts yet.</p>
              <p className="text-sm mt-1">Check back soon.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
