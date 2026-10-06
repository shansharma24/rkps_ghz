import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles, Award } from 'lucide-react';
import slide1Video from '../assets/slides/1.mp4';
import slide2Img from '../assets/slides/2.png';
import slide3Img from '../assets/slides/3.png';
import slide4Img from '../assets/slides/4.png';
import slide5Img from '../assets/slides/5.png';


const heroSlides = [
  {
    type: 'video',
    src: slide1Video,
    badge: "Welcome to RKPS",
    headline: "Nurturing Intellect, Character & Excellence",
    subtitle: "Providing world-class CBSE education, cutting-edge STEM labs, lush green sports infrastructure, and dedicated values-based learning in Ghaziabad.",
  },
  {
    type: 'image',
    src: slide2Img,
    badge: "World-Class Academic Spaces",
    headline: "Inspiring Curiosity in State-of-the-Art Labs & Libraries",
    subtitle: "Over 20,000 literary volumes, high-speed digital research terminals, and AI-enabled smart learning classrooms.",
  },
  {
    type: 'image',
    src: slide3Img,
    badge: "Holistic Student Development",
    headline: "Fostering Innovation, Creative Arts & Leadership",
    subtitle: "Equipping young leaders with 21st-century problem-solving, collaboration, and experiential wisdom.",
  },
  {
    type: 'image',
    src: slide4Img,
    badge: "Champions of Tomorrow",
    headline: "Olympic Sports Arena & Champions Training",
    subtitle: "Cricket turf, synthetic basketball court, badminton academy, and specialized martial arts coaching under certified trainers.",
  },
  {
    type: 'image',
    src: slide5Img,
    badge: "Champions of Tomorrow",
    headline: "Olympic Sports Arena & Champions Training",
    subtitle: "Cricket turf, synthetic basketball court, badminton academy, and specialized martial arts coaching under certified trainers.",
  },
];

export default function Hero({ onOpenAdmission, onOpenVirtualTour }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Ensure video plays when currentSlide is 0
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative w-full h-[540px] md:h-[620px] lg:h-[680px] bg-slate-900 overflow-hidden" data-purpose="hero-carousel">
      {/* Background Slides */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              ref={videoRef}
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center filter brightness-[0.88]"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.headline}
              className="w-full h-full object-cover object-center filter brightness-[0.88] transform scale-105 transition-transform duration-10000"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-900/40" />
        </div>
      ))}

      {/* Slide Arrow Controls */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 flex items-center justify-between pointer-events-none z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/60 hover:bg-blue-900 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/60 hover:bg-blue-900 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
