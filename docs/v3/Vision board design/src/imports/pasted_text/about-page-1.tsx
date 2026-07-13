// src/app/about/page.tsx
'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    containerRef.current.style.setProperty('--mouse-x', `${x}%`);
    containerRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gradient-to-br from-[#DCE3E8] via-[#D0D7DE] to-[#C2C9D0] text-[#2F3542] px-8 py-24 font-sans relative overflow-hidden select-none"
    >
      {/* 3% Smooth Satin Matte Surface Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZHRoPSIxIiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPg==')]" />

      {/* Header Segment - Center Balanced White Space */}
      <div className="max-w-6xl mx-auto text-center mb-24 space-y-3">
        <span className="font-serif italic text-xs tracking-[0.3em] uppercase text-[#57606F] block">
          About Identity // Context
        </span>
        <h1 
          className="text-5xl md:text-7xl font-black uppercase tracking-[0.15em] transition-all duration-300"
          style={{
            backgroundImage: `radial-gradient(circle at var(----mouse-x, 50%) var(----mouse-y, 50%), #FFFFFF 0%, #A2ACB5 60%, #57606F 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          HI, I'M RICHARD
        </h1>
        <div className="w-12 h-[1px] bg-[#57606F]/30 mx-auto mt-6" />
      </div>

      {/* Asymmetrical Vision Board Grid Workspace */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Core Narrative Node */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-8 bg-[#FDFBF7]/90 border border-white/40 p-12 shadow-[12px_12px_24px_rgba(47,53,66,0.06)] rounded-xs"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#A2ACB5] uppercase">// Professional Bio</span>
          <h2 className="font-sans font-bold text-3xl uppercase tracking-wider text-[#2F3542] mt-4 mb-6 leading-tight">
            Data Analyst & BI Developer
          </h2>
          <p className="text-sm text-[#57606F] leading-relaxed font-light max-w-xl">
            Originally from Peru, I graduated with a major in Computer Science and a minor in Economics from UBC Okanagan. 
            Currently based in Toronto, Canada, I center my architecture on high-fidelity interfaces, modular backend pipelines, 
            and automated data infrastructure workflows.
          </p>
        </motion.div>

        {/* Technical Capabilities Node */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-4 bg-[#2F3542] text-[#FDFBF7] p-8 shadow-[12px_12px_30px_rgba(0,0,0,0.08)] rounded-xs flex flex-col justify-between min-h-[320px]"
        >
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#A2ACB5] uppercase">// Core Focus</span>
            <h3 className="font-serif italic text-2xl tracking-wide text-white mt-4 mb-4">The Stack</h3>
            <p className="text-xs text-[#A2ACB5] font-light leading-relaxed">
              Engineering solutions using TypeScript, Next.js 16 (App Router), Tailwind CSS v4, Python, and automated SQL/M-Language processing configurations.
            </p>
          </div>
          <div className="border-t border-white/10 pt-4 mt-6 text-[11px] font-mono tracking-wider text-[#FDFBF7]/60">
            Strict Mode // Zero Errors
          </div>
        </motion.div>

        {/* Communities Focus Module */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-5 bg-[#FDFBF7]/60 border border-white/20 p-8 shadow-[6px_6px_20px_rgba(47,53,66,0.03)] rounded-xs"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#57606F] uppercase">01 / Communities</span>
          <h4 className="font-sans font-extrabold text-lg uppercase tracking-wider text-[#2F3542] mt-3 mb-2">Technical Spaces</h4>
          <p className="text-xs text-[#57606F] font-light leading-relaxed">
            Collaborating with active engineering groups and open source initiatives to build responsive, accessible web environments.
          </p>
        </motion.div>

        {/* Exploration Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="col-span-1 md:col-span-7 bg-[#FDFBF7]/90 border border-white/40 p-8 shadow-[12px_12px_24px_rgba(47,53,66,0.05)] rounded-xs"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#A2ACB5] uppercase">02 / Beyond Work</span>
          <h4 className="font-sans font-extrabold text-lg uppercase tracking-wider text-[#2F3542] mt-3 mb-2">Intersections</h4>
          <p className="text-xs text-[#57606F] font-light leading-relaxed">
            Analyzing complex sports metrics dashboards, advancing French language literacy targets, and balancing data analytics principles with structural macroeconomic frameworks.
          </p>
        </motion.div>

      </div>
    </main>
  );
}