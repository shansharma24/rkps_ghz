import React from 'react';
import studentsImg from '../assets/admissions_students.png';

export default function CtaBanner({ onOpenAdmission, onOpenEnquiry }) {
  const handleAction = () => {
    if (onOpenAdmission) {
      onOpenAdmission();
    } else if (onOpenEnquiry) {
      onOpenEnquiry();
    }
  };

  return (
    <section 
      className="relative w-full bg-white pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16 overflow-visible" 
      data-purpose="admissions-cta-banner" 
      id="admissions"
    >
      {/* Main Colored Banner Bar - Themed in Royal Institutional Navy */}
      <div className="relative w-full bg-gradient-to-r from-blue-950 via-[#0d2259] to-blue-900 text-white overflow-visible shadow-md">
        
        {/* Subtle patterned overlay for institutional depth */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[170px] sm:min-h-[200px] md:min-h-[220px] flex items-center">
          
          {/* Left Text Block */}
          <div className="py-8 sm:py-10 md:py-12 z-10 max-w-xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-none font-sans select-none drop-shadow-md">
              ADMISSIONS OPEN
            </h2>
            <div className="text-2xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight mt-1.5 sm:mt-2.5 select-none font-sans drop-shadow-md">
              2026-27
            </div>
          </div>

          {/* Right Side: Students 3D Pop-out Image with transparent cutout overflowing the top */}
          <div className="absolute right-0 sm:right-4 lg:right-8 bottom-0 w-[42%] sm:w-[46%] md:w-[48%] max-w-[560px] h-[135%] sm:h-[145%] md:h-[155%] pointer-events-none flex items-end justify-end overflow-visible z-20">
            <img
              src={studentsImg}
              alt="Radha Krishna Public School Students"
              className="w-full h-full object-contain object-bottom select-none transform translate-y-0 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]"
              loading="eager"
            />
          </div>

          {/* Golden Yellow ENQUIRE NOW Button overlapping bottom edge */}
          <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:left-6 lg:left-8 z-30">
            <button
              onClick={handleAction}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 sm:px-10 py-3 sm:py-3.5 shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 select-none border border-amber-300 rounded-xs"
            >
              ENQUIRE NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
