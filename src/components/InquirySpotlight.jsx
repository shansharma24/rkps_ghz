import React, { useState, useRef } from 'react';
import { INQUIRY_DATA } from '../data/inquiryData';
import InquiryAnswerModal from './modals/InquiryAnswerModal';
import { Sparkles, ArrowUpRight, HelpCircle } from 'lucide-react';

function InquiryCard({ item, onClick }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`bg-[#141822] border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 cursor-pointer hover:-translate-y-1.5 shadow-lg relative overflow-hidden ${item.colorPop.border}`}
      style={{
        boxShadow: isHovered ? `0 20px 45px -15px ${item.colorPop.glow}` : undefined
      }}
    >
      {/* 1. SOFT AMBIENT LIGHT SURFACE UNDER MOUSE (Exact MIT look from Image 1) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(460px circle at ${mousePos.x}px ${mousePos.y}px, rgba(235, 240, 248, 0.95) 0%, rgba(148, 163, 184, 0.5) 55%, transparent 95%)`
        }}
      />

      {/* 2. VIBRANT COLOR POP ORB ON THE MOUSE (Exact Red/Rose glow from Image 1 card #81) */}
      <div
        className="pointer-events-none absolute z-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-150"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '200px',
          height: '200px',
          opacity: isHovered ? 0.85 : 0,
          background: `radial-gradient(circle, ${item.colorPop.core} 0%, transparent 70%)`,
          filter: 'blur(28px)',
          mixBlendMode: 'normal'
        }}
      />

      {/* 3. LUMINOUS CURSOR RING SHAPE (Dynamic shape on mouse) */}
      <div
        className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-75 border-2 border-white pointer-events-none"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '44px',
          height: '44px',
          opacity: isHovered ? 0.9 : 0,
          boxShadow: `0 0 25px ${item.colorPop.color}, inset 0 0 10px ${item.colorPop.color}`
        }}
      />



      {/* Card Content (Dynamic contrast shift on hover as in Image 1) */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className={`font-mono text-sm sm:text-base font-black transition-colors ${
            isHovered ? 'text-slate-900 font-extrabold' : 'text-slate-400'
          }`}>
            {item.number}
          </span>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
            isHovered ? 'bg-slate-900 text-white' : 'bg-white/5 border border-white/10 text-slate-400'
          }`}>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Big Question: Switches to dark charcoal on light hover surface (Image 1) */}
        <h3 className={`text-lg sm:text-xl font-extrabold heading-serif leading-snug transition-colors mb-4 ${
          isHovered ? 'text-slate-950 font-black drop-shadow-2xs' : 'text-white'
        }`}>
          {item.question}
        </h3>

        <p className={`text-xs leading-relaxed font-normal line-clamp-3 transition-colors ${
          isHovered ? 'text-slate-800 font-medium' : 'text-slate-400'
        }`}>
          {item.summary}
        </p>
      </div>

      {/* Bottom Thumbnail & School Crest Watermark */}
      <div className="pt-6 mt-6 border-t border-slate-800/70 flex items-end justify-between gap-4 relative z-10">
        <div className="relative w-24 h-20 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 shrink-0 shadow-sm">
          <img
            src={item.thumbnail}
            alt={item.category}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Mascot / School Seal Watermark (like MIT beaver logo on bottom right) */}
        <div className={`flex flex-col items-end transition-opacity ${
          isHovered ? 'opacity-90' : 'opacity-40'
        }`}>
          <img
            src="/logo.jpg"
            alt="RKPS Seal"
            className={`w-8 h-8 rounded-full object-contain transition-all ${
              isHovered ? 'grayscale-0 ring-2 ring-slate-900/40' : 'grayscale'
            }`}
          />
          <span className={`font-mono text-[9px] tracking-wider mt-1 transition-colors ${
            isHovered ? 'text-slate-900 font-bold' : 'text-slate-400'
          }`}>
            RKPS // #2130572
          </span>
        </div>
      </div>

    </div>
  );
}

export default function InquirySpotlight({ onOpenAdmission }) {
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  return (
    <section 
      className="py-18 sm:py-24 bg-[#0d1017] text-white relative overflow-hidden border-y border-slate-800"
      data-purpose="inquiry-spotlight"
      id="inquire"
    >
      {/* Precision 1px grid pattern (MIT Architecture) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Kicker Header (MIT Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-6 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>ASK AN EDUCATOR // INQUIRY &amp; DISCOVERY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black heading-serif tracking-tight text-white">
              Curiosity, Science &amp; Pedagogy Unpacked
            </h2>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-normal leading-relaxed">
            Exploring big questions in 21st-century education, STEM research, and board distinction answered by our faculty and scholars.
          </p>
        </div>

        {/* MIT Inquiry Cards Grid (Side-by-Side Asymmetric Layout with Mouse Color Pop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {INQUIRY_DATA.map((item) => (
            <InquiryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedInquiry(item)}
            />
          ))}
        </div>

        {/* Bottom Interactive Strip */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Have a specific academic question? Our mentors respond within 24 hours.</span>
          </div>

          <button
            onClick={() => setSelectedInquiry(INQUIRY_DATA[0])}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all cursor-pointer"
          >
            Submit an Inquiry
          </button>
        </div>

      </div>

      {/* Q&A Modal */}
      <InquiryAnswerModal
        inquiry={selectedInquiry}
        isOpen={!!selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        onOpenAdmission={onOpenAdmission}
      />
    </section>
  );
}
