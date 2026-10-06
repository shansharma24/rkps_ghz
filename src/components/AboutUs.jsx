import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import facadeImg from '../assets/Rajala Krishna Public School Facade.png';

export default function AboutUs({ onOpenLegacyModal }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white" data-purpose="about-section" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Outer Container with light blue gradient tone */}
        <div className="relative bg-sky-50/60 rounded-3xl p-6 sm:p-10 lg:p-14 border border-sky-100 shadow-sm overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Visual: Layered geometric cards & building image */}
            <div className="lg:col-span-6 relative">
              {/* Decorative Accent Dark Blue Corner Backplate */}
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-indigo-950 rounded-tl-[40px] rounded-br-[10px] -z-0 shadow-lg"></div>
              
              {/* Decorative Accent Coral Red Bottom Backplate */}
              <div className="absolute -bottom-4 -right-2 w-28 h-28 bg-rose-500 rounded-br-[36px] -z-0 shadow-md"></div>
              
              {/* Dotted Pattern Top Right */}
              <div className="absolute -top-8 right-6 w-32 h-16 grid grid-cols-8 gap-1.5 opacity-30 pointer-events-none">
                {[...Array(24)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                ))}
              </div>

              {/* Campus Image strictly matching layout */}
              <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img 
                  alt="Radha Krishna Public School Campus Facility" 
                  className="w-full h-[320px] sm:h-[390px] object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={facadeImg}
                />
                
                {/* Floating mini badge on image */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-slate-800">25+ Years of Pedigree</span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 relative z-10 flex flex-col justify-center">
              
              {/* Section Header Tag with Underline */}
              <div className="mb-3">
                <span className="text-lg font-bold text-indigo-950 relative inline-block">
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-indigo-900 rounded-full"></span>
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-5 leading-tight heading-serif">
                Radha Krishna Public School, Ghaziabad
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Radha Krishna Public School had its visionary inception with the sacred mission to provide enlightened, holistic, and value-guided education to young scholars. By the divine inspiration and relentless commitment to academic distinction, the institution has flourished into a sanctuary of transformative learning.
                </p>
                <p>
                  Affiliated with the Central Board of Secondary Education (CBSE), the school delivers rigorous academic standards balanced with sportsmanship, moral ethos, and advanced 21st-century technological literacy. In our verdant, modern campus, every child is nurtured to thrive, discover their unique passions, and evolve into compassionate global leaders.
                </p>

                {isExpanded && (
                  <div className="pt-2 space-y-3 text-slate-600 text-sm animate-fadeIn">
                    <div className="p-3.5 bg-white/80 rounded-xl border border-sky-100 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                        <span>NEP 2020 Pedagogical Integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                        <span>Holistic Character Building &amp; Life Skills Mentorship</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                        <span>Recognized by State &amp; National Education Boards</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button matching reference (Navy pill with red circular arrow) */}
              <div className="mt-7 flex items-center gap-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-3 bg-indigo-950 hover:bg-indigo-900 text-white font-bold text-sm px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all group"
                >
                  <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                  <span className="w-6 h-6 rounded-full bg-rose-500 group-hover:bg-rose-600 flex items-center justify-center transition-colors">
                    <svg className="w-3.5 h-3.5 fill-current text-white transform group-hover:translate-x-0.5 transition-transform" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
                    </svg>
                  </span>
                </button>

                <a 
                  href="#stats" 
                  className="text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors underline underline-offset-4"
                >
                  View School Statistics
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
