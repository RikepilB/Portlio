// src/app/about/page.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface BoardItemProps {
  children: React.ReactNode;
  className: string;
  rotation: number;
  zIndex: number;
}

// Draggable Board Wrapper Element
const VisionNode: React.FC<BoardItemProps> = ({ children, className, rotation, zIndex }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.05, zIndex: 100, rotate: rotation * 0.5 }}
      initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 25 }}
      className={`absolute p-4 pb-8 bg-[#FDFBF7] border border-white/60 shadow-[4px_6px_15px_rgba(47,53,66,0.06)] hover:shadow-[10px_15px_30px_rgba(47,53,66,0.12)] transition-shadow duration-300 cursor-grab active:cursor-grabbing rounded-xs ${className}`}
      style={{ zIndex }}
    >
      {children}
    </motion.div>
  );
};

export default function InteractiveAbout() {
  return (
    <main className="relative w-full min-h-[1200px] bg-gradient-to-br from-[#DCE3E8] via-[#D0D7DE] to-[#C2C9D0] overflow-hidden select-none px-4 py-12">
      {/* 3% Satin Matte Surface Filter */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZHRoPSIxIiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPg==')]" />

      {/* Center Top Title Element */}
      <div className="w-full text-center mt-8 mb-24 z-10 relative pointer-events-none">
        <span className="font-serif italic text-xs tracking-[0.3em] uppercase text-[#57606F]">
          Richard Pillaca // Context Workspace
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-[0.15em] text-[#2F3542] mt-2">
          About & Inspirations
        </h1>
        <p className="text-[10px] font-mono tracking-widest text-[#57606F]/60 mt-1 uppercase">
          [ Components are interactive • Click and drag to arrange ]
        </p>
      </div>

      {/* The Vision Board Workspace Layout */}
      <div className="relative max-w-6xl mx-auto h-[900px] w-full">
        
        {/* Node 1: Polaroids Style - The Personal Story */}
        <VisionNode className="top-[5%] left-[2%] w-[300px]" rotation={-2} zIndex={10}>
          <div className="w-full aspect-square bg-[#EAECEB] mb-4 overflow-hidden border border-[#D0D7DE] flex items-center justify-center relative">
            {/* Visual Placeholder for personal snapshot */}
            <span className="text-[10px] font-mono text-[#57606F]/50">Graduation Node // UBC</span>
          </div>
          <div className="font-sans text-xs text-[#2F3542] font-light leading-relaxed">
            <span className="font-bold">UBC Okanagan Alumnus.</span> Originally from Peru, now based in Toronto building analytics engines.
          </div>
        </VisionNode>

        {/* Node 2: Handwritten Quote Box Style - System Core Statement */}
        <motion.div
          drag
          dragMomentum={false}
          className="absolute top-[8%] left-[34%] bg-white w-[220px] aspect-square p-6 flex flex-col justify-center items-center shadow-[2px_4px_10px_rgba(0,0,0,0.04)] border border-white/40 cursor-grab active:cursor-grabbing rounded-xs"
          style={{ rotate: 3, zIndex: 15 }}
        >
          <p className="font-serif italic text-xl text-[#2F3542] text-center tracking-wide leading-snug">
            "I build architectures that balance data analytics with high-fidelity frontend craft."
          </p>
        </motion.div>

        {/* Node 3: Polaroid Style - Engineering Workspace View */}
        <VisionNode className="top-[35%] left-[28%] w-[280px]" rotation={-1} zIndex={5}>
          <div className="w-full aspect-video bg-[#2F3542] mb-4 flex items-center justify-center p-2">
            <code className="text-[9px] font-mono text-[#E1E8E9] block leading-normal select-none">
              {`const pipeline = await data\n  .filter(records => records.id)\n  .optimize(graphTheory);`}
            </code>
          </div>
          <div className="font-sans text-xs text-[#57606F]">
            <span className="font-mono text-[9px] block text-[#A2ACB5] mb-1">// System Execution Log</span>
            Transforming complex automation pipelines into clean, robust TypeScript data objects.
          </div>
        </VisionNode>

        {/* Node 4: Polaroid Style - Core Stack Focus */}
        <VisionNode className="top-[45%] right-[2%] w-[290px]" rotation={ 2} zIndex={12}>
          <div className="p-4 bg-[#2F3542] text-[#FDFBF7] mb-3 rounded-xs font-mono text-center py-8">
            <div className="text-xl font-bold tracking-wider text-white">NEXT.JS 16</div>
            <div className="text-[10px] text-[#A2ACB5] mt-1">TAILWIND CSS v4 // TS</div>
          </div>
          <div className="font-sans text-xs text-[#2F3542] leading-relaxed">
            Structuring system configurations with a strict preference for clean code models and zero typing errors.
          </div>
        </VisionNode>

        {/* Node 5: Handwritten Quote Box Style - Sports Philosophy */}
        <motion.div
          drag
          dragMomentum={false}
          className="absolute bottom-[10%] left-[15%] bg-white w-[200px] aspect-square p-6 flex flex-col justify-center items-center shadow-[3px_5px_12px_rgba(0,0,0,0.03)] border border-white/40 cursor-grab active:cursor-grabbing rounded-xs"
          style={{ rotate: -4, zIndex: 8 }}
        >
          <p className="font-serif italic text-lg text-[#57606F] text-center">
            "Driven by competitive focus, on the football pitch and inside the terminal layout."
          </p>
        </motion.div>

        {/* Node 6: Polaroid Style - Extra Activities */}
        <VisionNode className="bottom-[5%] left-[45%] w-[310px]" rotation={1} zIndex={6}>
          <div className="w-full h-32 bg-[#EAECEB] mb-3 flex items-center justify-center border border-[#D0D7DE]">
            <span className="text-[10px] font-mono text-[#57606F]/50">Analytical Intersection Node</span>
          </div>
          <div className="font-sans text-xs text-[#2F3542]">
            <span className="font-bold">Intersections.</span> Merging Computer Science disciplines with economic frameworks, sports analytics dashboards, and French language literacy goals.
          </div>
        </VisionNode>

      </div>
    </main>
  );
}