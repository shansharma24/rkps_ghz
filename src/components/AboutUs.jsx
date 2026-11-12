import React from 'react';
import { ArrowRight, BookOpen, Compass, Award, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import facadeImg from '../assets/Radha Krishna Public School Exterior.png';

const corePillars = [
  {
    icon: BookOpen,
    title: 'Academic Distinction',
    highlight: '100% CBSE Pass Rate • NEP 2020 Framework'
  },
  {
    icon: Compass,
    title: 'Character & Heritage',
    highlight: 'Bharatiya Values • Ethical Leadership'
  },
  {
    icon: Award,
    title: 'World-Class Campus',
    highlight: '12-Acre Verdant Grounds • Olympic Sports'
  }
];

export default function AboutUs() {
  return (
    <section 
      className="relative overflow-hidden bg-[#0A1128] text-white border-y border-slate-800" 
      data-purpose="about-section" 
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[580px] items-stretch">
        
        {/* Left Side: Vibrant Diagonal Hatching Yellow Block (Exact Image 2 Style) */}
        <div 
          className="lg:col-span-7 bg-[#f59e0b] text-slate-950 p-7 sm:p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 1.5px, transparent 1.5px, transparent 12px)'
          }}
        >
          {/* Subtle Ambient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Clean Kicker */}
            <p className="text-xs font-black tracking-widest text-slate-950/80 uppercase mb-3 sm:mb-4">
              ABOUT RADHA KRISHNA PUBLIC SCHOOL • ESTD. 1999
            </p>

            {/* Giant Bold Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.05] uppercase mb-4 sm:mb-6 font-sans">
              Inspiring Curiosity. Shaping Character.
            </h2>

            {/* Narrative Paragraph */}
            <p className="max-w-xl text-slate-950 font-semibold text-sm sm:text-base leading-relaxed mb-6">
              Founded in 1999, Radha Krishna Public School is a premier CBSE institution in Ghaziabad delivering holistic scholarship, experiential NEP 2020 learning, and value-guided leadership across 25 glorious years.
            </p>

            {/* 3 Pillars in High-Contrast Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/10 border border-slate-950/20 backdrop-blur-xs transition-all hover:bg-slate-950/15"
                  >
                    <IconComponent className="w-5 h-5 text-slate-950 mb-2" />
                    <h4 className="text-xs sm:text-sm font-black text-slate-950 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-950/80 mt-1 leading-normal font-medium">
                      {pillar.highlight}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="relative z-10 mt-6 sm:mt-8 pt-6 border-t border-slate-950/20 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              to="/school-legacy"
              className="px-6 sm:px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:scale-102 active:scale-98"
            >
              <span>Discover 25-Year Legacy</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>

            <Link
              to="/vision-mission"
              className="px-6 sm:px-7 py-3.5 rounded-xl bg-amber-400/90 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] border border-slate-950/20"
            >
              <span>Vision &amp; Mission Principles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Right Side: Deep Obsidian Navy with High-Resolution Campus Photography & Floating Metric Cards */}
        <div className="lg:col-span-5 relative bg-[#070D1B] min-h-[380px] lg:min-h-auto overflow-hidden flex flex-col justify-end">
          <img
            src={facadeImg}
            alt="Radha Krishna Public School Campus Facility"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Deep gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D1B] via-[#070D1B]/40 to-transparent pointer-events-none" />

          {/* Top Tag */}
          <div className="absolute top-5 left-5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-white shadow-md flex items-center gap-2 z-10">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide">Estd. 1999 • Silver Jubilee Era</span>
          </div>

          {/* Floating Metric Cards (Exact Image 2 Style & Shadowing) */}
          <div className="relative z-10 p-5 sm:p-6 lg:p-8 flex items-center gap-3">
            <div className="flex-1 p-3.5 sm:p-4 rounded-xl bg-[#0B1226]/90 backdrop-blur-md border border-white/10 shadow-[0_14px_36px_rgba(0,0,0,0.65)] text-center transition-transform hover:-translate-y-1">
              <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tracking-tight">
                25+
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-bold uppercase tracking-wider mt-1">
                Years Legacy
              </p>
            </div>

            <div className="flex-1 p-3.5 sm:p-4 rounded-xl bg-[#0B1226]/90 backdrop-blur-md border border-white/10 shadow-[0_14px_36px_rgba(0,0,0,0.65)] text-center transition-transform hover:-translate-y-1">
              <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tracking-tight">
                5,000+
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-bold uppercase tracking-wider mt-1">
                Alumni Scholars
              </p>
            </div>

            <div className="flex-1 p-3.5 sm:p-4 rounded-xl bg-[#0B1226]/90 backdrop-blur-md border border-white/10 shadow-[0_14px_36px_rgba(0,0,0,0.65)] text-center transition-transform hover:-translate-y-1">
              <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tracking-tight">
                12-Acre
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-300 font-bold uppercase tracking-wider mt-1">
                Campus
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
