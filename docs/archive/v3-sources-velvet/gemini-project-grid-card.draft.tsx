'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface ProjectProps {
  id: string;
  category: string;
  title: string;
  description: string;
  techTags: string[];
  dateString: string;
}

export const ProjectGridCard: React.FC<ProjectProps> = ({
  id,
  category,
  title,
  description,
  techTags,
  dateString
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#262221] border border-[#3A3432] rounded-xs p-8 flex flex-col justify-between min-h-[380px] shadow-lg transition-all duration-300 hover:border-[#C58E7F]/50"
      style={{
        // Custom properties for subtle cursor glow backing
        ['--mouse-x' as any]: '50%',
        ['--mouse-y' as any]: '50%',
      }}
    >
      {/* Soft lighting dynamic foil overlay layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xs mix-blend-color-dodge"
        style={{
          background: `radial-gradient(circle 220px at var(--mouse-x) var(--mouse-y), rgba(197, 142, 127, 0.15), transparent 80%)`
        }}
      />

      <div>
        <div className="flex justify-between items-baseline font-mono text-[11px] uppercase tracking-widest text-[#8C8380] border-b border-[#3A3432] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[#C58E7F] font-bold font-sans">{id}</span>
            <span>// {category}</span>
          </div>
          <div>{dateString}</div>
        </div>

        <h3 
          className="font-serif text-3xl font-bold tracking-tight text-[#F4F4F3] group-hover:text-white transition-colors mb-4 bg-gradient-to-r from-[#F4F4F3] via-[#F4F4F3] to-[#C58E7F] bg-[length:200%_auto] group-hover:bg-right transition-all duration-700"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          {title}
        </h3>
        
        <p className="font-sans text-sm text-[#8C8380] leading-relaxed font-light line-clamp-4">
          {description}
        </p>
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {techTags.map((tag) => (
            <span 
              key={tag} 
              className="font-mono text-[10px] tracking-wide bg-[#1C1A19] text-[#C58E7F] border border-[#3A3432] px-2 py-0.5 rounded-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="inline-flex items-center gap-1 font-serif text-xs text-[#C58E7F] tracking-wide transition-all duration-300 group-hover:translate-x-1">
          Read case study <span className="font-sans">→</span>
        </div>
      </div>
    </motion.div>
  );
};