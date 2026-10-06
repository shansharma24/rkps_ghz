import React from 'react';
import { Quote, Sparkles, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Being an alumna of the school, I already have an idea of how good RKPS is. Coming back here after so many years to enroll my twins says a lot about the values, culture, and academic standard this institution upholds.",
    author: "Alumna Jaya Srivastava",
    role: "Batch of 2008 • Mother of Vivaan & Vihaan (Grade I)",
    tag: "Alumni & Parent",
    initials: "JS",
    accentColor: "border-t-amber-500",
    avatarBg: "bg-gradient-to-br from-amber-500 to-amber-700 text-white",
    rating: 5
  },
  {
    id: 2,
    quote: "Though I graduated more than two years ago, I still cherish every memory. The teachers have an incredible gift of polishing students into fine, compassionate leaders who can take on the world with confidence.",
    author: "Alumna Ishita Srivastava",
    role: "Class of 2022 Graduate • Software Engineer at Microsoft",
    tag: "Alumni Spotlight",
    initials: "IS",
    accentColor: "border-t-blue-600",
    avatarBg: "bg-gradient-to-br from-blue-600 to-indigo-800 text-white",
    rating: 5
  },
  {
    id: 3,
    quote: "It was an overwhelming experience walking through RKPS. The curiosity among students, state-of-the-art laboratory infrastructure, and research-driven pedagogy are truly at par with global institutions.",
    author: "Prof. A.K. Saha",
    role: "Geography, Delhi School Of Economics (DSE), Delhi University",
    tag: "Academician & Scholar",
    initials: "AS",
    accentColor: "border-t-emerald-600",
    avatarBg: "bg-gradient-to-br from-emerald-500 to-teal-700 text-white",
    rating: 5
  },
  {
    id: 4,
    quote: "The best part of the school is that it is eco-friendly and fosters a true culture of innovation. Every single child is seen as unique, valued, and encouraged to discover their innate brilliance.",
    author: "Megha Chaturvedi",
    role: "Mother of Sharvi Chaturvedi (Grade VI)",
    tag: "Current Parent",
    initials: "MC",
    accentColor: "border-t-purple-600",
    avatarBg: "bg-gradient-to-br from-purple-500 to-pink-600 text-white",
    rating: 5
  },
  {
    id: 5,
    quote: "The individual attention given to each student in STEM and sports is commendable. My son has gained immense self-confidence and analytical rigor under the guidance of wonderful mentors.",
    author: "Dr. Rajeshwar Sharma",
    role: "Sr. Consultant Cardiologist • Parent of Aryan (Grade XI)",
    tag: "Parent & Doctor",
    initials: "RS",
    accentColor: "border-t-cyan-600",
    avatarBg: "bg-gradient-to-br from-cyan-500 to-blue-700 text-white",
    rating: 5
  },
  {
    id: 6,
    quote: "Radha Krishna Public School balances rigorous CBSE academics with moral values and cultural heritage. The faculty's round-the-clock mentorship during board preparations has been phenomenal.",
    author: "Sunita Verma",
    role: "Mother of Tanvi Verma (CBSE 98.4% Topper)",
    tag: "Board Merit Parent",
    initials: "SV",
    accentColor: "border-t-rose-500",
    avatarBg: "bg-gradient-to-br from-rose-500 to-red-700 text-white",
    rating: 5
  },
  {
    id: 7,
    quote: "Discipline, leadership, and athletic rigor are woven into daily life at RKPS. The Olympic-standard sports arena and lush green campus provide the exact environment a growing child needs.",
    author: "Col. Sanjeev Rawat (Retd.)",
    role: "Indian Army Veteran • Parent of Kabir (Grade VIII)",
    tag: "Defence Fraternity",
    initials: "SR",
    accentColor: "border-t-indigo-600",
    avatarBg: "bg-gradient-to-br from-indigo-600 to-blue-900 text-white",
    rating: 5
  },
  {
    id: 8,
    quote: "My transition from school to National Law University was seamless thanks to the public speaking, moot court competitions, and ethical grounding inculcated throughout my years at RKPS.",
    author: "Adv. Priyanshu Gupta",
    role: "High Court Advocate • RKPS Alumnus",
    tag: "Distinguished Alumni",
    initials: "PG",
    accentColor: "border-t-amber-600",
    avatarBg: "bg-gradient-to-br from-amber-600 to-orange-700 text-white",
    rating: 5
  }
];

export default function ParentsSpeak() {
  return (
    <section 
      className="relative py-10 md:py-14 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white text-slate-800 overflow-hidden border-t border-slate-200/80"
      data-purpose="parents-speak-section"
      id="parents-speak"
    >
      {/* Decorative Eye-Catching Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Subtle Dot Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Clean, Focused Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300/60 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>Voices of Trust &amp; Pride</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 heading-serif tracking-tight leading-tight">
            Parents Speak
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-medium">
            Heartfelt reflections and experiences from our parent fraternity and distinguished alumni.
          </p>
        </div>

      </div>

      {/* Auto-scrolling Continuous Testimonial Track (Generously Sized & Eye-Catching) */}
      <div className="relative w-full overflow-hidden select-none py-3">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track Container */}
        <div className="animate-marquee flex items-stretch gap-6 sm:gap-7 px-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-[320px] sm:w-[380px] md:w-[410px] shrink-0 flex flex-col group transition-all duration-300"
            >
              {/* Premium Speech Bubble Card Container */}
              <div className={`relative flex-1 bg-white text-slate-800 p-6 sm:p-7 rounded-2xl shadow-md border border-slate-200/90 border-t-4 ${item.accentColor} flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl`}>
                
                {/* Card Header: Rating Stars & Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  {/* 5 Golden Rating Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Category Pill */}
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100 shadow-2xs">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative flex-1">
                  <Quote className="w-7 h-7 text-blue-900/10 absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal relative z-10 pl-2">
                    "{item.quote}"
                  </p>
                </div>

                {/* Speech Bubble Pointer Triangle at bottom */}
                <div className="absolute -bottom-3 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-white drop-shadow-xs"></div>
              </div>

              {/* Author Profile Information with Gradient Avatar below speech bubble */}
              <div className="pt-5 pb-1 pl-4 flex items-center gap-3.5">
                {/* Initials Avatar */}
                <div className={`w-11 h-11 rounded-full ${item.avatarBg} font-black text-xs sm:text-sm flex items-center justify-center shadow-sm shrink-0 ring-2 ring-white`}>
                  {item.initials}
                </div>

                {/* Name & Role */}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 tracking-wide truncate group-hover:text-blue-900 transition-colors">
                      {item.author}
                    </h4>
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-black shrink-0" title="Verified Parent/Alumni">
                      ✓
                    </span>
                  </div>
                  {item.role && (
                    <p className="text-[11.5px] text-slate-500 font-medium truncate mt-0.5">
                      {item.role}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
