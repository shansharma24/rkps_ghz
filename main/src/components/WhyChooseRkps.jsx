import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  Clock, 
  Award, 
  Users, 
  Heart, 
  Sparkles, 
  Building2, 
  BookOpen, 
  Microscope, 
  Trophy, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Shield 
} from 'lucide-react';
import { WHY_CHOOSE_TABS } from '../data/rkpsData';

const iconMap = {
  GraduationCap,
  Clock,
  Award,
  Users,
  Heart,
  Sparkles,
  Building2,
  BookOpen,
  Microscope,
  Trophy,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Shield
};

export default function WhyChooseRkps() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const prevTab = () => {
    setActiveTabIdx((prev) => (prev - 1 + WHY_CHOOSE_TABS.length) % WHY_CHOOSE_TABS.length);
  };

  const nextTab = () => {
    setActiveTabIdx((prev) => (prev + 1) % WHY_CHOOSE_TABS.length);
  };

  const active = WHY_CHOOSE_TABS[activeTabIdx];

  return (
    <section className="py-20 sm:py-28 bg-[#071f4c] text-white relative overflow-hidden watermark-shield-dark" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block (Exact match of Screenshot Page 3) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white tracking-wider uppercase leading-none">
            REASONS TO SOAR WITH US
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            Choosing Radha Krishna Public School means embracing excellence, innovation, and endless opportunities. 
            Personalized learning, attentive mentoring, and a vibrant community help students thrive and prepare for a future full of possibilities.
          </p>

          {/* Horizontal Tab Bar (Pills matching Screenshot Page 3) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {WHY_CHOOSE_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-5 py-2 rounded-full font-bebas text-base sm:text-lg tracking-wider uppercase transition-all ${
                  idx === activeTabIdx
                    ? 'bg-[#9b2335] text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Content (2-Column Dossier matching Screenshot Pages 4 to 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Cutout / Framed Photo with Red Tag */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Crimson Tag Top Left of Photo (Exact match of Screenshot Pages 4 to 8) */}
              <div className="absolute top-4 left-4 bg-[#9b2335] text-white font-bebas text-sm sm:text-base px-3.5 py-1 rounded shadow-md tracking-wider">
                {active.tag}
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Content + 4 Circular Line-Icon Stat Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker in Gold (Exact match of Screenshot Pages 4 to 8) */}
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#f0b429] uppercase">
              {active.kicker}
            </span>

            {/* Main Tab Headline in Bebas Neue */}
            <h3 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight mt-1">
              {active.title}
            </h3>

            {/* Narrative Paragraph */}
            <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed font-normal max-w-2xl">
              {active.desc}
            </p>

            {/* 4 Circular Line-Icon Stat Cards (Exact match of Screenshot Pages 4 to 8) */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {active.stats.map((st, i) => {
                const IconComponent = iconMap[st.icon] || Award;
                return (
                  <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                    {/* Circular Line-Icon Border */}
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/90 group-hover:border-[#f0b429] group-hover:text-[#f0b429] group-hover:scale-110 transition-all mb-3 bg-white/5">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Big Bold Metric in Bebas Neue */}
                    <span className="font-bebas text-3xl sm:text-4xl text-white tracking-wider leading-none">
                      {st.num}
                    </span>

                    {/* Small Descriptive Label underneath */}
                    <span className="mt-1 text-xs text-white/70 leading-snug">
                      {st.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Right Carousel Navigation Arrows (Exact match of Screenshot Pages 4 to 8) */}
        <div className="mt-12 flex justify-end gap-2">
          <button
            onClick={prevTab}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#9b2335] text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 active:scale-95"
            aria-label="Previous Dossier"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTab}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#9b2335] text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 active:scale-95"
            aria-label="Next Dossier"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
