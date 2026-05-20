'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [hoveredSide, setHoveredSide] = useState<'none' | 'left' | 'right'>('none')

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center pt-20">
      <div className="relative w-full h-full max-w-[1440px] flex group">

        {/* Left Side: AI Agent Systems */}
        <div
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide('none')}
          className={`relative h-full flex-1 transition-all duration-700 ease-in-out z-10 flex flex-col justify-center items-start px-12 md:px-24 min-w-0
            ${hoveredSide === 'left' ? 'flex-[1.5]' : hoveredSide === 'right' ? 'flex-[0.5]' : 'flex-1'}
          `}
        >
          <div
            className={`transition-all duration-500 text-left max-w-sm translate-x-0 w-full min-w-0 ${
              hoveredSide === 'left' ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-3 font-heading">
              AI AGENT SYSTEMS
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              Building ReAct agents with tool use, sub-agent delegation, and persistent memory.
              From prototype to production.
            </p>
          </div>
          <div
            className={`absolute inset-0 bg-red-50 -z-10 transition-opacity duration-500 ${
              hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Center Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] z-20 pointer-events-none perspective-1000">
          <div className="relative w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/portfolio.png"
              alt="Ravi Bollepalli — AI Engineer"
              fill
              className={`object-cover transition-all duration-700 ease-in-out
                ${hoveredSide === 'left' ? 'scale-110 -translate-x-4 grayscale' : hoveredSide === 'right' ? 'scale-110 translate-x-4 hue-rotate-180' : 'scale-100'}
              `}
              priority
            />
            <div
              className={`absolute inset-0 bg-red-600/10 mix-blend-multiply transition-opacity duration-500 ${
                hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div
              className={`absolute inset-0 bg-indigo-600/10 mix-blend-multiply transition-opacity duration-500 ${
                hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>

        {/* Tagline below image */}
        <div className="absolute left-1/2 -translate-x-1/2 z-30 text-center max-w-5xl px-4 top-[calc(50%+170px)] md:top-[calc(50%+270px)]">
          <p className="text-xs md:text-sm text-slate-500 font-medium whitespace-normal md:whitespace-nowrap">
            Building production AI agents, RAG pipelines, and LLM evaluation systems.
          </p>
          <p className="mt-2 text-sm text-red-600 font-semibold animate-flash">
            Looking for entry-level AI Engineer roles — available May 2026
          </p>
        </div>

        {/* Right Side: LLM Ops & Evals */}
        <div
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide('none')}
          className={`relative h-full flex-1 transition-all duration-700 ease-in-out z-10 flex flex-col justify-center items-end px-12 md:px-24 overflow-hidden
            ${hoveredSide === 'right' ? 'flex-[1.5]' : hoveredSide === 'left' ? 'flex-[0.5]' : 'flex-1'}
          `}
        >
          <div
            className={`transition-all duration-500 text-right max-w-xs translate-x-0 w-full min-w-0 ${
              hoveredSide === 'right' ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-3 text-slate-900 font-heading">
              LLM OPS <span className="text-indigo-600">&</span> EVALS
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              Shipping RAG systems, evaluation pipelines, and model-tier routing with measurable
              quality benchmarks.
            </p>
          </div>
          <div
            className={`absolute inset-0 bg-indigo-50 -z-10 transition-opacity duration-500 ${
              hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  )
}
