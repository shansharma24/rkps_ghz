import React, { useState } from 'react';
import { LEARNING_STAGES } from '../data/rkpsData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function LearningStages({ onOpenAdmission }) {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const active = LEARNING_STAGES[activeStageIdx];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="stages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline in Crimson Red Bebas Neue (Exact match of Screenshot Page 9) */}
        <div className="text-center sm:text-left mb-8 sm:mb-12">
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#9b2335] tracking-wider uppercase leading-none">
            LEARNING AT EVERY STAGE
          </h2>
          
          {/* 4 Horizontal Division Tabs (Exact match of Screenshot Page 9) */}
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-6 border-b border-slate-200 pb-3">
            {LEARNING_STAGES.map((stg, idx) => (
              <button
                key={stg.id}
                onClick={() => setActiveStageIdx(idx)}
                className={`font-bebas text-xl sm:text-2xl tracking-wide uppercase pb-2 transition-all relative ${
                  idx === activeStageIdx
                    ? 'text-[#9b2335]'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                {stg.label}
                {idx === activeStageIdx && (
                  <span className="absolute bottom-[-13px] left-0 right-0 h-1 bg-[#9b2335] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Split: Left Info + Right Large Photo (Exact match of Screenshot Page 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-8">
          
          {/* Left Column: Stage Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Age Range & Spec Subtitle */}
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#0b2a63] uppercase">
              {active.ageRange}
            </span>

            {/* Stage Title */}
            <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#2b2b2b] tracking-wide uppercase mt-1">
              {active.stageName}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {active.desc}
            </p>

            {/* Highlights List */}
            <div className="mt-6 space-y-2.5">
              {active.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#9b2335] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Red Outline Action Button (Exact match of Screenshot Page 9) */}
            <div className="mt-8">
              <button
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border-2 border-[#9b2335] text-[#9b2335] hover:bg-[#9b2335] hover:text-white font-bebas text-base sm:text-lg tracking-wider uppercase transition-all shadow-sm hover:scale-105 active:scale-95"
              >
                <span>{active.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Photo Card */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 group">
              <img
                src={active.image}
                alt={active.stageName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
