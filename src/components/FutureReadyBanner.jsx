import React from 'react';
import { FUTURE_READY_DATA } from '../data/futureReadyData';
import { ArrowRight, Building2 } from 'lucide-react';
import studentsImg from '../assets/admissions_students.png';

export default function FutureReadyBanner({ onOpenAdmission, onOpenVisitUs }) {
  return (
    <section 
      className="relative overflow-hidden bg-[#0A1128] text-white border-y border-slate-800" 
      data-purpose="future-ready-banner"
      id="future-ready"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[580px] items-stretch">
        
        {/* Left Side: Vibrant Diagonal Hatching Yellow Block (Image 2 Style) */}
        <div 
          className="lg:col-span-7 bg-[#f59e0b] text-slate-950 p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 1.5px, transparent 1.5px, transparent 12px)'
          }}
        >
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Clean Kicker (No Pill) */}
            <p className="text-xs font-black tracking-widest text-slate-950/80 uppercase mb-4">
              {FUTURE_READY_DATA.kicker}
            </p>

            {/* Giant Bold Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.05] uppercase mb-6 font-sans">
              {FUTURE_READY_DATA.title}
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 max-w-xl text-slate-950 font-semibold text-sm sm:text-base leading-relaxed">
              {FUTURE_READY_DATA.paragraphs.map((para, idx) => (
                <p key={idx} className={idx === 2 ? 'font-black text-base sm:text-lg pt-2 border-t border-slate-950/20' : ''}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="relative z-10 mt-8 pt-6 border-t border-slate-950/20 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenAdmission}
              className="px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-102 active:scale-98 cursor-pointer"
            >
              <span>{FUTURE_READY_DATA.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>

            {onOpenVisitUs && (
              <button
                onClick={onOpenVisitUs}
                className="px-7 py-3.5 rounded-xl bg-amber-400/90 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>{FUTURE_READY_DATA.secondaryCta}</span>
              </button>
            )}
          </div>

        </div>

        {/* Right Side: Deep Obsidian Navy with High-Resolution Student Photography & Cards from Image 2 */}
        <div className="lg:col-span-5 relative bg-[#070D1B] min-h-[380px] lg:min-h-auto overflow-hidden flex flex-col justify-end">
          <img
            src={studentsImg}
            alt="Radha Krishna Public School Future Scholars"
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-top"
          />
          {/* Deep gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-[#070D1B]/40 to-transparent pointer-events-none" />

          {/* Floating Metric Cards (Exact Image 2 Style & Shadowing) */}
          <div className="relative z-10 p-6 sm:p-8 flex items-center gap-3.5">
            {FUTURE_READY_DATA.metrics.slice(0, 2).map((m, idx) => (
              <div 
                key={idx} 
                className="flex-1 p-4 rounded-xl bg-[#0B1226]/90 backdrop-blur-md border border-white/10 shadow-[0_14px_36px_rgba(0,0,0,0.65)] text-center transition-transform hover:-translate-y-1"
              >
                <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tracking-tight">
                  {m.value}
                </p>
                <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider mt-1">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
