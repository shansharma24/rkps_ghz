import React from 'react';
import { ArrowRight, Phone, Download, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import studentsImg from '../assets/admissions_students.png';

export default function CtaBanner({ onOpenAdmission, onOpenEnquiry }) {
  return (
    <section className="relative w-full pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 bg-[#fff6f8] overflow-visible border-b border-rose-100/80" data-purpose="admissions-cta-banner" id="admissions">
      {/* Signature Red/Rose Polka-Dot Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f43f5e 1.75px, transparent 1.75px)',
          backgroundSize: '22px 22px',
          opacity: 0.5
        }}
      />

      {/* ─── Architectural Divider Line & Centered Emblem Badge ─── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 relative z-10">
        <div className="relative flex items-center justify-center">
          {/* Dual-Tone Rose to Amber Gradient Divider Line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-rose-300 via-amber-400/80 to-transparent shadow-xs" />
          
          {/* Centered Glassmorphic Emblem Pill */}
          <div className="absolute px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-rose-200/90 shadow-[0_4px_20px_rgba(244,63,94,0.14)] flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-slate-800 transition-transform hover:scale-105 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b] animate-pulse" />
            <span className="text-slate-900 font-black">ADMISSIONS CONTINUUM 2026–27</span>
            <span className="text-rose-200 font-light">|</span>
            <span className="text-amber-600 font-black flex items-center gap-1.5">
              <span>ENROL TODAY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact Midnight Container with Golden Amber Top Accent Rim */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-[#0b1f4d] to-slate-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border-t-2 border-t-amber-400/70 border-x border-b border-blue-900/40">

          
          {/* Ambient Radial Accent Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean Eyebrow (No Pill) */}
              <p className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
                Admissions Open for Academic Session 2026–27
              </p>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white heading-serif leading-[1.08] tracking-tight">
                Begin Your Child's Journey Toward Excellence.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                Limited enrolment openings across Pre-Nursery, Kindergarten, Primary, Middle, and Senior Secondary (Science, Commerce &amp; Humanities). Experience a transformative CBSE education in Ghaziabad.
              </p>

              {/* Quick Perks Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Fee Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Merit Scholarships</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transport Across NCR</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAdmission}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.8)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>Apply Online Now</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <Link
                  to="/admissions"
                  className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md border border-white/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  View Enrolment Roadmap
                </Link>
              </div>

            </div>

            {/* Right Visual: Students Image Cutout (5 cols) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-md">
                
                {/* Background Ring Accent */}
                <div className="absolute inset-0 rounded-full border border-amber-400/20 animate-pulse pointer-events-none scale-105" />

                <img
                  src={studentsImg}
                  alt="Radha Krishna Public School Scholars"
                  className="w-full h-auto object-contain max-h-[380px] sm:max-h-[440px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] relative z-10"
                />

                {/* Floating Contact Card on Image */}
                <div className="absolute -bottom-3 left-4 right-4 sm:left-6 sm:right-6 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-center shadow-2xl z-20">
                  <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    Direct Admissions Helpline
                  </div>
                  <a
                    href="tel:9310300600"
                    className="text-sm sm:text-base font-black text-white hover:text-amber-300 transition-colors flex items-center justify-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>+91 9310300600</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
