import React, { useState } from 'react';
import { BEYOND_CLASSROOM_TABS } from '../data/rkpsData';
import { ChevronRight } from 'lucide-react';

export default function BeyondClassroom({ onOpenAdmission }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const active = BEYOND_CLASSROOM_TABS[activeTabIdx];

  return (
    <section className="py-20 sm:py-28 bg-[#052051] text-white relative overflow-hidden watermark-shield-dark" id="beyond">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row (Exact match of Screenshot Page 10) */}
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-end justify-between gap-6 border-b border-white/15 pb-6">
          
          {/* Left: 3 Tabs with Active Underline */}
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {BEYOND_CLASSROOM_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`font-bebas text-lg sm:text-2xl tracking-wider uppercase transition-all pb-2 relative ${
                  idx === activeTabIdx ? 'text-[#f0b429]' : 'text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
                {idx === activeTabIdx && (
                  <span className="absolute bottom-[-25px] left-0 right-0 h-1 bg-[#f0b429]" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Big Bold White Title (Exact match of Screenshot Page 10) */}
          <div className="text-left lg:text-right">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wider uppercase leading-none">
              CULTIVATING EXCEPTIONAL THINKERS
            </h2>
          </div>
        </div>

        {/* Content Showcase Card (Exact match of Screenshot Page 11) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Narrative Description */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase">
              {active.title}
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              {active.desc}
            </p>
            <div className="mt-6">
              <button
                onClick={onOpenAdmission}
                className="px-6 py-2.5 rounded-full bg-[#9b2335] hover:bg-[#7a1f2b] text-white font-bebas text-base uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Join Our Guilds
              </button>
            </div>
          </div>

          {/* Right: Image Card with White Bottom Footer & Red Arrow (Exact match of Screenshot Page 11) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group bg-white">
              
              {/* Media Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* White Footer Bar with Red Arrow Button (Exact match of Screenshot Page 11) */}
              <div className="bg-white text-[#2b2b2b] px-6 py-4 flex items-center justify-between">
                <span className="font-bebas text-xl sm:text-2xl text-[#0b2a63] tracking-wide uppercase">
                  {active.cta}
                </span>

                <button
                  onClick={onOpenAdmission}
                  className="w-10 h-10 bg-[#9b2335] hover:bg-[#7a1f2b] text-white flex items-center justify-center rounded transition-transform group-hover:scale-110"
                  aria-label={active.cta}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
