import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Award, Trophy } from 'lucide-react';

const statsData = [
  {
    id: 'students',
    title: 'STUDENTS NURTURED',
    target: 5000,
    suffix: '+',
    icon: Users,
    format: (val) => val.toLocaleString('en-IN') + '+'
  },
  {
    id: 'teachers',
    title: 'EXPERT FACULTY',
    target: 100,
    suffix: '+',
    icon: GraduationCap,
    format: (val) => val.toLocaleString('en-IN') + '+'
  },
  {
    id: 'alumni',
    title: 'DISTINGUISHED ALUMNI',
    target: 10,
    suffix: 'k+',
    icon: Award,
    format: (val) => `${val}k+`
  },
  {
    id: 'awards',
    title: 'AWARDS & HONORS',
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
      className="w-full bg-[#071330] text-white py-14 sm:py-16 md:py-20 relative overflow-hidden"
      data-purpose="stats-counter"
      id="stats"
    >
      {/* Subtle Dot Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:20px_20px]" />
      
      {/* Ambient Radial Accent Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            A Legacy of Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white heading-serif mt-1">
            Impact in Numbers Over 25 Glorious Years
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-2.5 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>

                {/* Counter Number in Glowing Gold */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans leading-tight">
                  {stat.format(counts[stat.id])}
                </div>

                {/* Counter Title */}
                <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-300 mt-2 font-sans">
                  {stat.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

