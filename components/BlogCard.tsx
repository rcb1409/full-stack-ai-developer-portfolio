import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/blog'

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:shadow-red-500/5 hover:border-red-200 transition-all duration-300"
    >
      {/* Meta row */}
      <div className="flex items-center gap-3 mb-3">
        <time className="text-xs text-slate-400 font-medium">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC',
          })}
        </time>
        <span className="text-slate-300">·</span>
        <span className="inline-flex items-center gap-1 text-xs text-slate-400">
          <Clock size={12} />
          {post.readingTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2 leading-snug font-heading">
        {post.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-4 mb-4">{post.summary}</p>



      {/* CTA */}
      <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:gap-2 transition-all">
        Read post <ArrowRight size={14} />
      </div>
    </Link>
  )
}
