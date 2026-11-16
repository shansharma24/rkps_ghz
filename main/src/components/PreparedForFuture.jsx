import React, { useState, useRef } from 'react';
import { ALUMNI_TOPPERS, PARENT_TESTIMONIALS } from '../data/rkpsData';
import { ChevronLeft, ChevronRight, Award, Trophy, Star, CheckCircle } from 'lucide-react';

export default function PreparedForFuture() {
  const [activeTab, setActiveTab] = useState('alumni');
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="future">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact match of Screenshot Page 12) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#9b2335] tracking-wider uppercase leading-none">
            PREPARED FOR THE FUTURE
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            University and career readiness is an important milestone in the learning journey cherished by the RKPS community. 
            Our graduates are remarkable young adults, equipped not just for college entrance examinations but for life beyond. 
            After all, education should inspire, not just instruct.
          </p>

          {/* Sub-Tabs (Exact match of Screenshot Page 12) */}
          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-8 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveTab('alumni')}
              className={`font-bebas text-lg sm:text-xl tracking-wider uppercase pb-1 transition-all ${
                activeTab === 'alumni' ? 'text-[#9b2335] border-b-2 border-[#9b2335]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              GRADUATES AND ALUMNI PROFILE
            </button>
            <button
              onClick={() => setActiveTab('parents')}
              className={`font-bebas text-lg sm:text-xl tracking-wider uppercase pb-1 transition-all ${
                activeTab === 'parents' ? 'text-[#9b2335] border-b-2 border-[#9b2335]' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              PARENT VOICES & BOARD NUMBERS
            </button>
          </div>
        </div>

        {/* Tab 1: Alumni Profiles Slider (Exact match of Screenshot Page 13) */}
        {activeTab === 'alumni' && (
          <div className="relative group">
            
            {/* Left Floating Red Circular Arrow Button */}
            <button
              onClick={scrollLeft}
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#9b2335] hover:bg-[#7a1f2b] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Floating Red Circular Arrow Button */}
            <button
              onClick={scrollRight}
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#9b2335] hover:bg-[#7a1f2b] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Horizontal Scroll Track */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {ALUMNI_TOPPERS.map((top) => (
                <div
                  key={top.id}
                  className="min-w-[280px] sm:min-w-[320px] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 snap-center group shrink-0"
                >
                  {/* Portrait Image */}
                  <img
                    src={top.image}
                    alt={top.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 right-4 bg-[#f0b429] text-[#071f4c] font-bebas text-sm px-3 py-1 rounded shadow-md">
                    {top.score}
                  </div>

                  {/* Bottom Content (Exact match of Screenshot Page 13) */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-center flex flex-col items-center">
                    <span className="text-xs font-bold tracking-widest text-[#f0b429] uppercase">
                      {top.classYear}
                    </span>

                    <h4 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight mt-0.5">
                      {top.name}
                    </h4>

                    {/* Red Underline Accent */}
                    <div className="w-12 h-0.5 bg-[#9b2335] my-2" />

                    <span className="text-xs text-white/90 font-medium">
                      {top.stream} • {top.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Parent Voices & Board Results */}
        {activeTab === 'parents' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {PARENT_TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-1 text-[#f0b429] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <h4 className="font-bebas text-xl text-[#0b2a63] tracking-wide uppercase">
                    {item.parent}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
