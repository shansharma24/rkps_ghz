import React, { useState, useRef } from 'react';
import { STUDENT_WORKS } from '../data/studentWorksData';
import ProjectLightboxModal from './modals/ProjectLightboxModal';
import { Maximize2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function StudentWorkShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  // Mouse Drag-to-Scroll State
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    // Don't drag if clicking a button (like the expand icon)
    if (e.target.closest('button')) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity multiplier
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleCardClick = (work) => {
    // Only open lightbox if user clicked without dragging
    if (hasDragged) return;
    setSelectedProject(work);
  };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#fff6f8] relative overflow-hidden border-b border-rose-100/80"
      data-purpose="student-work-showcase"
      id="student-works"
    >
      {/* 1. Signature Staggered Polka Dot Pattern (Ravensbourne Reference) */}
      <div 
        className="absolute inset-0 pointer-events-none bg-ravensbourne-dots"
      />

      {/* Top-Left Magenta Circles & Diagonal Hatching (Matching Reference Design) */}
      <div className="absolute -top-8 sm:-top-12 left-4 sm:left-10 flex items-center gap-2 pointer-events-none z-0 opacity-85">
        <div className="w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full bg-[#e11d48] shadow-md" />
        <div 
          className="w-20 sm:w-32 md:w-40 h-12 sm:h-16 md:h-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #f43f5e 0, #f43f5e 1.5px, transparent 0, transparent 8px)',
            opacity: 0.75
          }}
        />
        <div className="w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full bg-[#e11d48] shadow-md -ml-4 sm:-ml-6" />
      </div>

      {/* 2. Top-Right Magenta/Rose Curved Corner Accent (Exact match from Reference Design) */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none overflow-hidden z-0">
        <div 
          className="w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] -top-24 sm:-top-32 md:-top-36 -right-24 sm:-right-32 md:-right-36 absolute rounded-full bg-gradient-to-bl from-[#e11d48] via-[#e11d48] to-[#be185d] opacity-90 shadow-md"
        />
      </div>

      {/* 3. Subtle Ambient Rose Glow across Section */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* 4. Top Solid Golden Yellow Header Banner Box & Main Title (Exact match from Reference Design) */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 heading-serif tracking-tight leading-tight mb-4">
            Amazing things happen here
          </h2>
          <div className="inline-block bg-[#f59e0b] text-slate-950 font-black px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm tracking-wider uppercase shadow-sm">
            See what our students and staff have been working on
          </div>
        </div>

        {/* 5. Section Heading & Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 heading-serif tracking-tight">
              Student Innovations &amp; Creative Portfolio
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-normal max-w-xl">
              From broadcasting audio suites and regional robotics prototypes to fine art galleries and ecological audits — explore authentic student creations.
            </p>
          </div>

          {/* Controls with Drag Hint and Navigation Buttons */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="hidden md:inline-flex text-[11px] font-semibold text-slate-400 items-center gap-1 select-none">
              Drag to explore
            </span>
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-slate-950 hover:bg-[#f59e0b] text-white hover:text-slate-950 flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-slate-950 hover:bg-[#f59e0b] text-white hover:text-slate-950 flex items-center justify-center transition-all shadow-md cursor-pointer active:scale-95"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6. Horizontal Draggable Carousel (with mouse grab & drag physics) */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex gap-5 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth select-none ${
              isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {STUDENT_WORKS.map((work) => (
              <div
                key={work.id}
                onClick={() => handleCardClick(work)}
                className="w-[280px] sm:w-[340px] md:w-[360px] shrink-0 bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden snap-start hover:-translate-y-1.5"
              >
                {/* Photo Area with Expand Button (Exact Ravensbourne Style from Image 3) */}
                <div className="relative h-56 sm:h-64 md:h-70 w-full overflow-hidden bg-slate-900">
                  <img
                    src={work.image}
                    alt={work.title}
                    draggable="false"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                    loading="lazy"
                  />
                  
                  {/* Expand Icon Button on Bottom-Left */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(work);
                    }}
                    className="absolute bottom-3 left-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/90 hover:bg-[#f59e0b] text-white hover:text-slate-950 flex items-center justify-center transition-all shadow-lg cursor-pointer"
                    aria-label="Expand project"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Category Badge on Top-Right */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-950/85 text-white shadow-sm border border-white/10 uppercase tracking-wider backdrop-blur-xs">
                      {work.categoryBadge}
                    </span>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 heading-serif line-clamp-2 group-hover:text-blue-900 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 font-normal leading-relaxed">
                      {work.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="font-semibold text-slate-800">{work.creator}</span>
                    <span className="text-amber-600 font-bold">{work.grade}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* 7. Floating Right Navigation Arrow (Signature Ravensbourne Element from Image 3) */}
          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-950 hover:bg-black text-[#f59e0b] items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer border-2 border-white"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 text-[#f59e0b]" />
          </button>
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      <ProjectLightboxModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
