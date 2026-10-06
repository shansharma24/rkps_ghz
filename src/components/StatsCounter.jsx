import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  {
    id: 'students',
    title: 'STUDENTS',
    target: 5000,
    suffix: '+',
    format: (val) => val.toLocaleString('en-IN') + '+'
  },
  {
    id: 'teachers',
    title: 'TEACHERS',
    target: 100,
    suffix: '+',
    format: (val) => val.toLocaleString('en-IN') + '+'
  },
  {
    id: 'alumni',
    title: 'ALUMNI',
    target: 10,
    suffix: 'k +',
    format: (val) => `${val}k +`
  },
  {
    id: 'awards',
    title: 'AWARDS',
    target: 100,
    suffix: '+',
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
            // Ease out cubic
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
                students: 35000,
                teachers: 2500,
                alumni: 10,
                awards: 100
              });
            }
          }, frameDuration);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-8 sm:py-12"
      data-purpose="stats-counter-minimal"
      id="school-stats"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center">
              {/* Counter Number */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#08301d] font-sans leading-tight">
                {stat.format(counts[stat.id])}
              </div>

              {/* Counter Title */}
              <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#036a38] mt-1.5 font-sans">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
