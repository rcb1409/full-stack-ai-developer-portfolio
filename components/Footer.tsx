'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {currentYear} Designed and developed by{' '}
          <span className="text-white font-bold">ravibollepalli.dev</span>
        </div>

        <nav className="flex items-center space-x-8 text-xs font-black uppercase tracking-widest">
          <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <a
            href="mailto:ravichandubollepalli@gmail.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-black uppercase tracking-widest bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-all"
        >
          Back to Top
        </button>
      </div>
    </footer>
  )
}
