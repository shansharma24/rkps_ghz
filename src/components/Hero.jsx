import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import slide1Video from '../assets/slides/1.mp4';
import slide2Img from '../assets/slides/2.png';
import slide3Img from '../assets/slides/3.png';
import slide4Img from '../assets/slides/4.png';
import slide5Img from '../assets/slides/5.png';

const heroSlides = [
  {
    type: 'video',
    src: slide1Video,
    tag: "Silver Jubilee (1999–2026)",
    titlePart1: "Nurturing Intellect.",
    titlePart2: "Igniting Character.",
    subtitle: "World-class CBSE education, STEM innovation, and timeless values on a 12-acre campus.",
    label: "01 Campus Life"
  },
  {
    type: 'image',
    src: slide2Img,
    tag: "Academic Sanctuary",
    titlePart1: "Inspiring Curiosity.",
    titlePart2: "Leading Innovation.",
    subtitle: "20,000+ literary volumes, digital carrels, and AI-enabled collaborative smart classrooms.",
    label: "02 STEM & Labs"
  },
  {
    type: 'image',
    src: slide3Img,
    tag: "Holistic Development",
    titlePart1: "Creative Expression.",
    titlePart2: "Empowered Leadership.",
    subtitle: "Nurturing 21st-century problem-solving, fine arts, and compassionate civic leadership.",
    label: "03 Creative Arts"
  },
  {
    type: 'image',
    src: slide4Img,
    tag: "Olympic Infrastructure",
    titlePart1: "Champions of Tomorrow.",
    titlePart2: "Athletic Rigor.",
    subtitle: "Turf cricket nets, synthetic basketball academy, and athletics training under NIS mentors.",
    label: "04 Sports Arena"
  },
  {
    type: 'image',
    src: slide5Img,
    tag: "NEP 2020 Aligned",
    titlePart1: "Future-Ready Pedagogies.",
    titlePart2: "Lifelong Mastery.",
    subtitle: "Experiential NEP 2020 learning, robotics tinkering, and multidisciplinary scholarship.",
    label: "05 Pedagogy"
  },
];

export default function Hero({ onOpenAdmission }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  const active = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[580px] sm:h-[640px] lg:h-[720px] xl:h-[760px] bg-slate-950 overflow-hidden select-none" data-purpose="hero-carousel">
      
      {/* Background Media with High Visibility (Lightened overlays & clear view of campus) */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              ref={videoRef}
              src={slide.src}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center filter brightness-95 contrast-102"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.titlePart1}
              className={`w-full h-full object-cover object-center filter brightness-95 contrast-102 transition-transform duration-[8000ms] ease-out ${
                idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          )}

          {/* Localized Bottom-Left Scrim — Protects bottom-left typography while leaving top/right imagery unobstructed */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/85 via-slate-950/35 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Hero Foreground Content — Aligned to Bottom-Left, occupying only half the screen width */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="w-full md:w-1/2 lg:max-w-xl xl:max-w-2xl space-y-3.5 sm:space-y-4 md:space-y-5 text-left">
          
          {/* Live Indicator (Clean Typography, No Pill) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-200 uppercase drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-400 font-extrabold">{active.tag}</span>
            <span className="text-white/40">•</span>
            <span className="text-slate-200 font-medium">CBSE Affiliation #2130572</span>
          </div>

          {/* Bold Editorial Headline (Sans + Italic Serif) — Balanced Sizing */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
              <span>{active.titlePart1}</span>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 font-serif font-medium mt-1">
                {active.titlePart2}
              </span>
            </h1>
          </div>

          {/* Minimal 1-Sentence Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100 leading-relaxed max-w-lg font-normal drop-shadow">
            {active.subtitle}
          </p>

          {/* Single Admission Action Button */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(245,158,11,0.5)] hover:shadow-[0_4px_35px_rgba(245,158,11,0.8)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2.5"
            >
              <span>Apply for Admission 2026–27</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            {/* Video sound toggle only on video slide */}
            {active.type === 'video' && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                title={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
                aria-label="Toggle Hero Video Sound"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
              </button>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}
