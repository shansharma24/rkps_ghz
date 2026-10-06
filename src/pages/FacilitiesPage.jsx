import React from 'react';
import { Sparkles, Building2, BookOpen, Trophy, Palette, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccordionGallery from '../components/AccordionGallery';

const facilityCards = [
  {
    title: 'Smart Digitized Classrooms',
    category: 'Learning Environment',
    desc: 'Equipped with interactive IFPD touch-panels, high-speed fiber internet, and ergonomic furniture tailored for collaboration.'
  },
  {
    title: 'Advanced Science Research Suites',
    category: 'STEM Laboratories',
    desc: 'CBSE-standard Physics, Chemistry, and Biology laboratories equipped with computerized sensor probes and safety apparatus.'
  },
  {
    title: 'AI & Robotics Tinkering Hub',
    category: 'Future Technology',
    desc: 'Arduino, Raspberry Pi, 3D printers, and drone aviation kits for hands-on computational learning and national hackathons.'
  },
  {
    title: 'Olympic-Standard Sports Arena',
    category: 'Athletics & Fitness',
    desc: 'Full-size cricket coaching nets, synthetic basketball and badminton academy, and dedicated martial arts & yoga studios.'
  },
  {
    title: 'Grand Central Library',
    category: 'Knowledge Repository',
    desc: 'Over 20,000 literary works, international research journals, quiet research carrels, and digital e-library stations.'
  },
  {
    title: '1,200-Seat Multipurpose Auditorium',
    category: 'Performing Arts',
    desc: 'Centrally air-conditioned with professional acoustics, theatrical stage lighting grids, and orchestral audio engineering.'
  }
];

const galleryItems = [
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/founnew2.jpg',
    label: 'Foundation Wing',
    alt: 'Foundation Wing',
    link: '#admissions'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner2.jpg',
    label: 'Central Library',
    alt: 'Central Library',
    link: '#admissions'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner3.jpg',
    label: 'Senior Wing',
    alt: 'Senior Wing',
    link: '#admissions'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner7.jpg',
    label: 'Robotics & STEM Lab',
    alt: 'Robotics and STEM Lab',
    link: '#admissions'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner5.jpg',
    label: 'Olympic Sports Arena',
    alt: 'Olympic Sports Arena',
    link: '#admissions'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner1.jpg',
    label: 'Performing Arts Auditorium',
    alt: 'Performing Arts Auditorium',
    link: '#admissions'
  }
];

export default function FacilitiesPage({ onOpenAdmission, onOpenVirtualTour }) {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>World-Class Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black heading-serif tracking-tight text-white leading-tight">
            Campus &amp; Facilities
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            Spread across 12 lush acres in Ghaziabad, our modern academic wings, advanced laboratories, and championship sporting arenas nurture future-ready leaders.
          </p>
        </div>
      </section>

      {/* 2. Interactive Accordion Gallery Showcase */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 p-2">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={1}
            expandRatio={0.48}
            trigger="hover"
            accentColor="#f59e0b"
            overlayColor="#0b1e48"
            textColor="#ffffff"
            grayscale={false}
            height={480}
            gap={10}
            radius={18}
            tilt={6}
            parallax={0.4}
            duration={0.6}
            showLabels={true}
          />
        </div>
      </section>

      {/* 3. Detailed Facilities Breakdown Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Infrastructure Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] heading-serif mt-1">
            Engineered for Comprehensive Growth
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityCards.map((card, idx) => (
            <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 inline-block mb-3">
                {card.category}
              </span>
              <h3 className="text-lg font-bold text-[#0B1E48] heading-serif mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Campus Visit CTA */}
      <section className="py-14 bg-gradient-to-r from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black heading-serif mb-4">
            Experience Our Campus in Person
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8 font-medium">
            Schedule a guided campus walkthrough with our admissions team to explore our classrooms, laboratories, and athletic complexes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAdmission}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Apply for Admission 2026–27
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              Book Campus Tour
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
