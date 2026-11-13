import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Award, Trophy } from 'lucide-react';

const statsData = [
  {
    id: 'students',
    title: 'STUDENTS NURTURED',
    subtitle: 'Pre-Nursery to Grade XII',
    target: 5000,
    suffix: '+',
    icon: Users,
    format: (val) => val.toLocaleString('en-IN') + '+'
  },
  {
    id: 'teachers',
    title: 'EXPERT FACULTY',
    subtitle: '100% CBSE Certified Mentors',
    target: 100,
    suffix: '+',
    icon: GraduationCap,
    format: (val) => val.toLocaleString('en-IN') + '+'
  },
  {
    id: 'alumni',
    title: 'DISTINGUISHED ALUMNI',
    subtitle: 'Global Scholastic Network',
    target: 10,
    suffix: 'k+',
    icon: Award,
    format: (val) => `${val}k+`
  },
  {
    id: 'awards',
    title: 'AWARDS & HONORS',
    subtitle: 'Academic, Sports & STEM',
    target: 100,
    suffix: '+',
    icon: Trophy,
    format: (val) => `${val}+`
  }
];

export default function StatsCounter() {
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    alumni: 0,
    awards: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = Math.min(frame / totalFrames, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              students: Math.floor(easeOutProgress * 5000),
              teachers: Math.floor(easeOutProgress * 100),
              alumni: Math.floor(easeOutProgress * 10),
              awards: Math.floor(easeOutProgress * 100)
            });

            if (frame === totalFrames) {
              clearInterval(timer);
              setCounts({
                students: 5000,
                teachers: 100,
                alumni: 10,
                awards: 100
              });
            }
          }, frameDuration);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#f59e0b] text-slate-950 py-14 sm:py-16 md:py-20 relative overflow-hidden border-t-2 border-amber-600/20"
      style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 1.5px, transparent 1.5px, transparent 12px)'
      }}
      data-purpose="stats-counter"
      id="stats"
    >
      {/* Subtle Ambient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-slate-950/80 mb-2">
            A Legacy of Excellence • Estd. 1999
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 heading-serif tracking-tight">
            Impact in Numbers Over 25 Glorious Years
          </h2>
          <div className="w-20 h-1.5 bg-slate-950 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center p-6 sm:p-7 rounded-3xl bg-[#070D1B] text-white border border-slate-900/40 shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(0,0,0,0.35)] transition-all duration-300 group"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/35 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-slate-950 text-[#f59e0b] transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Counter Number in Glowing Gold */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#f59e0b] group-hover:text-amber-300 font-sans leading-tight transition-colors">
                  {stat.format(counts[stat.id])}
                </div>

                {/* Counter Title */}
                <div className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white mt-2 font-sans">
                  {stat.title}
                </div>

                {/* Counter Subtitle */}
                <div className="text-[11px] font-medium text-slate-400 mt-1 font-sans">
                  {stat.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


