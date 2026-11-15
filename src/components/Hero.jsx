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

          {/* Subtle Bottom Scrim for CTA Button Contrast */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Accessible Institutional Title for Screen Readers & SEO */}
      <h1 className="sr-only">
        Radha Krishna Public School — 25 Years of Scholastic Excellence, Pratap Vihar, Ghaziabad
      </h1>

      {/* Hero Foreground Action Controls — Clean Floating CTA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="flex flex-wrap items-center gap-3">
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

    </section>
  );
}
