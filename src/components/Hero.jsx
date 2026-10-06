import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles, Award } from 'lucide-react';

const heroSlides = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkNW3umzMyBB0D-OKTmTGmg11eQ_LRoUIIE233XVxKg8P1wpRHu9QqikuGdOvOdf68Cp3gzZ7Z5DUuTGEYuPwjP-Z8Tm39d3tntcezXaCi1vxsiOoCOv0k0yZgeUshbkH0qzCG1nO4t6xx2wPSPB7AN5SAIWvma1dmnspO5A1Ccb1XVnq9XJD7o6U6f_mR6C7VOC0ZdHGn2TTS-Lo9qz-9dfXdl0GbyWC05PJVomZo6m9g-mRBbCpfhQ",
    badge: "Admissions Open 2025–26",
    headline: "Nurturing Intellect, Character & Excellence",
    subtitle: "Providing world-class CBSE education, cutting-edge STEM labs, lush green sports infrastructure, and dedicated values-based learning in Ghaziabad.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHxs-fv2VWuLUPllKQK1ZM_RUm00mjzXZsbroGND5b52EvI_URqkRy3qfk0KzaGUhlXl_SxpOSTG-ONJswFHXMHCCTXqM6V84U5SVkDmFqxFMqszkp57rQod4dnsLF8Qy7JTUXosoH48VQ5v5PuYnoT-FImlshqah0ZRsN19ky7McoBWrekaSS56sJFQLbF8eOsAy1l4r3_omznpOyX2qbv6LQgaw1E3ZERtPbV6WdDBQd-L-KkCNhfg",
    badge: "World-Class Academic Spaces",
    headline: "Inspiring Curiosity in State-of-the-Art Labs & Libraries",
    subtitle: "Over 20,000 literary volumes, high-speed digital research terminals, and AI-enabled smart learning classrooms.",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC9pWnp_2Ya6vgDc5Az9ZeJBYQDtoFvT2fS-CSwbiw6brg2FV28D6s7I0Wi82cVpi3VhbITPhNFlDEXr6KJjPD5WRLxXD2xOqYJELcz1dzYc75gL2SC7ZIfUv47o8xaievwBPwGkgD8uLUGfA3P6puufWIT4In3_YL5URVDTueuzsRvKEMTa36RLmIN6nrX6FFnk0Yd-OK-pDbxSSImrL4CjDIHZ_5h4FUqbFAjTPmqCtiilK9iwN-oAVeSDwC0-PiiBw",
    badge: "Champions of Tomorrow",
    headline: "Holistic Athletic Training & Olympic Sports Arena",
    subtitle: "Cricket turf, synthetic basketball court, badminton academy, and specialized martial arts coaching under certified trainers.",
  }
];

export default function Hero({ onOpenAdmission, onOpenVirtualTour }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover object-center filter brightness-[0.88] transform scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-900/40" />
        </div>
      ))}

      {/* Slide Arrow Controls */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 flex items-center justify-between pointer-events-none z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/60 hover:bg-blue-900 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-105 active:scale-95 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/60 hover:bg-blue-900 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-105 active:scale-95 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>


    </section>
  );
}
