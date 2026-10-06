import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Being an alumna of the school, I already have idea of how good RKPS is. Coming back here after so many years to enroll my twins says a lot about how I feel about the school.",
    author: "Alumna Jaya Srivastava",
    role: "Batch of 2008 & Parent",
    tag: "Alumni & Parent"
  },
  {
    id: 2,
    quote: "Though I moved on from school more than two years ago, I still cherish each memory as fresh as ever. My best wishes to the school for the next 25 years and beyond. The school has been doing a wonderful job of bringing the best out in us students and polishing us into fine human beings.",
    author: "Alumna Ishita Srivastava",
    role: "Class of 2022 Graduate",
    tag: "Alumni"
  },
  {
    id: 3,
    quote: "It was an overwhelming experience walking through the school. All the best to Radha Krishna Public School for fostering such high academic benchmarks and world-class ethos.",
    author: "Prof. A.K. Saha",
    role: "Delhi School Of Economics (DSE), DU",
    tag: "Academician"
  },
  {
    id: 4,
    quote: "The best part of the school is that it is eco-friendly and promotes a culture of innovation amongst students. Every child is seen as unique here.",
    author: "Megha Chaturvedi",
    role: "Mother of Sharvi Chaturvedi",
    tag: "Current Parent"
  },
  {
    id: 5,
    quote: "The individual attention given to each student in STEM subjects and sports is commendable. My son has gained immense self-confidence and leadership skills under wonderful mentors.",
    author: "Dr. Rajeshwar Sharma",
    role: "Senior Consultant Cardiologist & Parent",
    tag: "Current Parent"
  },
  {
    id: 6,
    quote: "Radha Krishna Public School balances rigorous CBSE academics with moral values and cultural heritage. The faculty's dedication during board preparations has been phenomenal.",
    author: "Sunita Verma",
    role: "Mother of Tanvi Verma (98.4% Topper)",
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
];

export default function ParentsSpeak() {
  return (
    <section 
      className="relative py-8 md:py-9 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-blue-900/40"
      data-purpose="parents-speak-section"
      id="parents-speak"
    >
      {/* Background Watermark Decorative Speech Bubbles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] select-none overflow-hidden">
        <div className="absolute -top-10 -left-12 w-64 h-48 border-4 border-white rounded-[32px] rounded-bl-none transform -rotate-6"></div>
        <div className="absolute top-1/4 left-1/3 w-80 h-56 border-4 border-white rounded-[40px] rounded-br-none transform rotate-3"></div>
        <div className="absolute -bottom-8 right-10 w-72 h-48 border-4 border-white rounded-[36px] rounded-tl-none transform rotate-12"></div>
      </div>

      {/* Radial lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 md:mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-[10.5px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Voices of Trust &amp; Pride
          </div>
          
          <h2 className="text-xl sm:text-2xl font-extrabold text-white heading-serif tracking-tight">
            Parents Speak
          </h2>
          
          <div className="w-10 h-0.5 bg-amber-400 mx-auto mt-1.5 rounded-full"></div>
        </div>
      </div>

      {/* Auto-scrolling Review Track with edge fades */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-blue-950 via-blue-950/70 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent z-10 pointer-events-none"></div>

        {/* Continuous Marquee Container */}
        <div className="animate-marquee py-1.5 gap-4 px-4 flex items-stretch">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-[260px] sm:w-[290px] md:w-[310px] shrink-0 flex flex-col group"
            >
              {/* White Speech Bubble Card */}
              <div className="relative flex-1 bg-white text-slate-800 p-4 rounded-xl shadow-md border border-slate-100 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                {/* Header inside bubble */}
                <div className="flex items-center justify-between mb-2">
                  <Quote className="w-4 h-4 text-blue-900/25 group-hover:text-amber-500/50 transition-colors" />
                  <span className="text-[9.5px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-100">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-[11.5px] text-slate-700 leading-relaxed font-normal line-clamp-3">
                  "{item.quote}"
                </p>

                {/* Downward Pointer Triangle */}
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-white drop-shadow-2xs"></div>
              </div>

              {/* Author Details Below */}
              <div className="pt-3 pb-0.5 pl-2.5">
                <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                  {item.author}
                </h4>
                {item.role && (
                  <p className="text-[10.5px] text-blue-200/70 mt-0.5 line-clamp-1">
                    {item.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
