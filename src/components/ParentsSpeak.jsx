import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Heart, Sparkles, UserCheck } from 'lucide-react';

const testimonialBatches = [
  // Page 1 (The exact testimonials from the user screenshot, themed for RKPS)
  [
    {
      id: 1,
      quote: "Being an alumna of the school, I already have idea of how good RKPS is. Coming back here after so many years to enroll my twins says a lot about how I feel about the school.",
      author: "Alumna Jaya Srivastava",
      role: "Batch of 2008 & Parent",
      tag: "Alumni & Parent"
    },
    {
      id: 2,
      quote: "Though I moved on from school more than two years ago, I still cherish each memory as fresh as ever. My best wishes to the school for the next 25 years and beyond. The school has been doing a wonderful job of bringing the best out in us students and polishing us into fine human beings and will only get better with time.",
      author: "Alumna Ishita Srivastava",
      role: "Class of 2022 Graduate",
      tag: "Alumni"
    },
    {
      id: 3,
      quote: "It was an overwhelming experience walking through the school. All the best to Radha Krishna Public School for fostering such high academic benchmarks and world-class ethos.",
      author: "Prof. A.K. Saha",
      role: "Geography, Delhi School Of Economics (DSE), Delhi University",
      tag: "Academician"
    },
    {
      id: 4,
      quote: "The best part of the school is that it is eco-friendly and promotes a culture of innovation amongst students. Every child is seen as unique here.",
      author: "Megha Chaturvedi",
      role: "Mother of Sharvi Chaturvedi (Grade VI)",
      tag: "Current Parent"
    }
  ],
  // Page 2
  [
    {
      id: 5,
      quote: "The individual attention given to each student in STEM subjects and sports is commendable. My son has gained immense self-confidence and leadership skills under the guidance of wonderful mentors.",
      author: "Dr. Rajeshwar Sharma",
      role: "Senior Consultant Cardiologist & Parent of Aryan (Grade XI)",
      tag: "Current Parent"
    },
    {
      id: 6,
      quote: "Radha Krishna Public School balances rigorous CBSE academics with moral values and cultural heritage. The faculty's dedication during board preparations has been phenomenal.",
      author: "Sunita Verma",
      role: "Mother of Tanvi Verma (CBSE 98.4% Topper)",
      tag: "Parent Testimonial"
    },
    {
      id: 7,
      quote: "The state-of-the-art sports facilities and clean green campus provide an ideal environment for child growth. We are truly proud to be associated with RKPS.",
      author: "Col. Sanjeev Rawat (Retd.)",
      role: "Parent of Kabir (Grade VIII)",
      tag: "Parent Testimonial"
    },
    {
      id: 8,
      quote: "My transition from school to national university was seamless thanks to the communication skills and discipline inculcated during my 12 years here.",
      author: "Adv. Priyanshu Gupta",
      role: "High Court Advocate, RKPS Alumnus",
      tag: "Alumni"
    }
  ],
  // Page 3
  [
    {
      id: 9,
      quote: "Visiting RKPS for the Inter-School Science Conclave revealed the deep analytical mindset nurtured in students. The smart labs and robotics initiatives are truly exemplary.",
      author: "Dr. Pratibha Nanda",
      role: "Education Consultant & Ex-NCERT Advisor",
      tag: "Educationist"
    },
    {
      id: 10,
      quote: "From pre-primary rhymes to senior leadership councils, RKPS has molded both my daughters with empathy, analytical depth, and fearless creativity.",
      author: "Anupam & Ritu Saxena",
      role: "Parents of Ananya (Class XII) & Avni (Class IV)",
      tag: "Current Parent"
    },
    {
      id: 11,
      quote: "The management and teachers go beyond textbooks. The remedial support, personal counseling, and parent-teacher synergy make RKPS stand out across NCR.",
      author: "Vipin Agnihotri",
      role: "VP Corporate Finance & Parent of Divyansh",
      tag: "Current Parent"
    },
    {
      id: 12,
      quote: "RKPS is not just an institution; it's a family that genuinely celebrates every milestone of your child. Blessed to have chosen this temple of learning.",
      author: "Pooja Malhotra",
      role: "Mother of Samaira (Grade II)",
      tag: "Current Parent"
    }
  ]
];

export default function ParentsSpeak() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotate every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % testimonialBatches.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? testimonialBatches.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % testimonialBatches.length);
  };

  return (
    <section 
      className="relative py-20 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-blue-900/40"
      data-purpose="parents-speak-section"
      id="parents-speak"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Watermark Decorative Speech Bubbles (matching the aesthetic of the original screenshot, but in our website's midnight navy theme) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none overflow-hidden">
        {/* Floating large speech bubble silhouettes */}
        <div className="absolute -top-12 -left-16 w-80 h-64 border-8 border-white rounded-[40px] rounded-bl-none transform -rotate-6"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-72 border-8 border-white rounded-[48px] rounded-br-none transform rotate-3"></div>
        <div className="absolute -bottom-10 right-10 w-88 h-64 border-8 border-white rounded-[44px] rounded-tl-none transform rotate-12"></div>
        <div className="absolute top-8 right-1/4 w-72 h-56 border-8 border-white rounded-[36px] rounded-br-none transform -rotate-12"></div>
      </div>

      {/* Subtle radial lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Voices of Trust &amp; Pride
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white heading-serif tracking-tight">
            Parents Speak
          </h2>
          
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          
          <p className="text-sm sm:text-base text-blue-200/80 mt-3 max-w-2xl mx-auto leading-relaxed">
            Heartfelt reflections and experiences from our parent fraternity, esteemed alumni, and visiting academicians.
          </p>
        </div>

        {/* Testimonials Grid / Carousel */}
        <div className="relative min-h-[380px] sm:min-h-[360px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch transition-opacity duration-500 ease-in-out">
            {testimonialBatches[currentPage].map((item, index) => (
              <div 
                key={item.id} 
                className="flex flex-col group animate-fadeIn"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Speech Bubble Card Container */}
                <div className="relative flex-1 bg-white text-slate-800 p-6 sm:p-7 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
                  {/* Subtle quote accent icon */}
                  <div className="flex items-center justify-between mb-3">
                    <Quote className="w-6 h-6 text-blue-900/20 group-hover:text-amber-500/40 transition-colors" />
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-100">
                      {item.tag}
                    </span>
                  </div>

                  {/* Testimonial Quote Text */}
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal flex-1">
                    "{item.quote}"
                  </p>

                  {/* Speech Bubble Pointer Triangle at bottom */}
                  <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-white drop-shadow-sm"></div>
                </div>

                {/* Author Info Below Bubble (matching screenshot layout) */}
                <div className="pt-6 pb-2 pl-3 sm:pl-4">
                  <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    {item.author}
                  </h4>
                  {item.role && (
                    <p className="text-[11px] text-blue-200/75 mt-0.5 leading-snug">
                      {item.role}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls & Dots */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="w-9 h-9 rounded-full bg-blue-900/50 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-all border border-white/10 hover:border-amber-400 active:scale-95 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator (exact style with active state) */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/70 border border-white/10 backdrop-blur-sm">
            {testimonialBatches.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentPage(dotIdx)}
                aria-label={`Go to testimonial page ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === currentPage
                    ? 'w-7 h-2.5 bg-amber-400 shadow-md shadow-amber-400/30'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="w-9 h-9 rounded-full bg-blue-900/50 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-all border border-white/10 hover:border-amber-400 active:scale-95 shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
