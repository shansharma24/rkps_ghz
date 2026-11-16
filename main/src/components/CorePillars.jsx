import React from 'react';
import { CORE_PILLARS } from '../data/rkpsData';
import logoImg from '@assets/logo.jpg';

export default function CorePillars() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden watermark-shield" id="pillars">
      {/* Subtle Crest Watermark in Left/Center Background */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <img src={logoImg} alt="Watermark" className="w-full h-full object-contain grayscale" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Center Crest Shield (Matching Screenshot Page 2) */}
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full border-2 border-[#9b2335] p-1 bg-white shadow-md flex items-center justify-center">
            <img src={logoImg} alt="RKPS Crest" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        {/* Section Headline in Crimson Red Bebas Neue (Exact match of Screenshot Page 2) */}
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#9b2335] tracking-wider uppercase leading-none">
          THE RKPS WAY IS ABOUT...
        </h2>

        {/* 3 Red-Pinned Columns (Exact match of Screenshot Page 2) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 text-center">
          {CORE_PILLARS.map((col, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              
              {/* Crimson Diamond Pin Icon at top of column */}
              <div className="w-3.5 h-3.5 bg-[#9b2335] rotate-45 mb-4 shadow-sm group-hover:scale-125 transition-transform" />

              {/* Column Title in Bold Bebas Neue */}
              <h3 className="font-bebas text-2xl sm:text-3xl text-[#0b2a63] tracking-wide uppercase">
                {col.title}
              </h3>

              {/* Description in DM Sans */}
              <p className="mt-3 text-sm sm:text-base text-[#4a4a4a] leading-relaxed max-w-sm">
                {col.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
