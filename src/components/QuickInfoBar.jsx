import React from 'react';
import { ShieldCheck, Award, Users, Trophy, Trees, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  {
    icon: ShieldCheck,
    stat: 'CBSE Affiliated',
    sub: 'Sr. Secondary #2130572',
    accent: 'text-blue-700',
    tag: 'Board Recognized'
  },
  {
    icon: Award,
    stat: '25+ Years',
    sub: 'Silver Jubilee (1999–2026)',
    accent: 'text-amber-600',
    tag: 'Legacy of Trust'
  },
  {
    icon: Users,
    stat: '5,000+ Scholars',
    sub: 'Active Students Enrolled',
    accent: 'text-indigo-600',
    tag: 'Vibrant Fraternity'
  },
  {
    icon: Trophy,
    stat: '100% Board Pass',
    sub: 'IIT-JEE, NEET & CUET Merits',
    accent: 'text-emerald-600',
    tag: 'Academic Mastery'
  },
  {
    icon: Trees,
    stat: '12-Acre Campus',
    sub: 'Indirapuram, Ghaziabad',
    accent: 'text-teal-600',
    tag: 'Green Infrastructure'
  }
];

export default function QuickInfoBar() {
  return (
    <section className="relative z-20 w-full bg-[#fff8f9] border-y border-rose-200/80 shadow-xs overflow-hidden" data-purpose="quick-info-bar">
      {/* Subtle Rose Dot Accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f43f5e 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          opacity: 0.35
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-rose-200/60">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="py-5 sm:py-6 px-4 sm:px-6 flex flex-col justify-between hover:bg-white/90 backdrop-blur-xs transition-colors group cursor-default"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-rose-100 shadow-xs flex items-center justify-center group-hover:bg-[#f59e0b] group-hover:text-slate-950 transition-all">
                    <Icon className={`w-5 h-5 ${item.accent} group-hover:text-slate-950`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700/80 group-hover:text-rose-900 transition-colors">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#0B1E48] tracking-tight leading-tight group-hover:text-rose-600 transition-colors">
                    {item.stat}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
