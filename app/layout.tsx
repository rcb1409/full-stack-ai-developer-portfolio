import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Ravi Bollepalli',
    default: 'Ravi Bollepalli',
  },
  description:
    'Full-stack engineer and GenAI developer building scalable applications that integrate AI to solve real-world problems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-white text-slate-900 overflow-x-hidden selection:bg-red-200 selection:text-red-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
