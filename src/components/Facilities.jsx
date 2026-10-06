import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Palette, 
  Music, 
  Trophy, 
  Cpu, 
  HeartHandshake, 
  X, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Layers
} from 'lucide-react';

const allProgramsData = [
  {
    id: 'foundation',
    number: '01',
    category: 'academic',
    categoryName: 'Academic Wings',
    title: 'Foundation School',
    stage: 'Pre-Nursery to KG • Ages 3–5',
    tag: 'Early Years',
    icon: Sparkles,
    desc: 'The joyful beginning of lifelong learning with sensory play, experiential curiosity, and foundational phonetics designed for happy early milestones.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/founnew2.jpg',
    highlights: [
      'Montessori-inspired activity stations',
      'Sensory play & psychomotor development',
      'Joyful storytelling & phonetics immersion',
      'Caring educator-student ratio (1:12)'
    ]
  },
  {
    id: 'preparatory',
    number: '02',
    category: 'academic',
    categoryName: 'Academic Wings',
    title: 'Preparatory School',
    stage: 'Grades I to V • Primary Wing',
    tag: 'Foundational Years',
    icon: BookOpen,
    desc: 'Where ideas come alive. Building strong foundations for thinking, communicating, and creating with confidence through inquiry-based learning.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner2.jpg',
    highlights: [
      'Conceptual mathematics & bilingual fluency',
      'Smart digital classroom engagement',
      'Junior STEM & environmental science discovery',
      'Values, discipline, and empathy cultivation'
    ]
  },
  {
    id: 'middle',
    number: '03',
    category: 'academic',
    categoryName: 'Academic Wings',
    title: 'Middle School',
    stage: 'Grades VI to VIII • Middle Wing',
    tag: 'Inquiry & Reasoning',
    icon: GraduationCap,
    desc: 'Curiosity meets capability — Nurturing independent thinkers who question, create, collaborate, and lead with empathy and moral courage.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner4.jpg',
    highlights: [
      'Rigorous CBSE syllabus foundation',
      'Inter-disciplinary science & robotics labs',
      'Public speaking, MUNs & literary clubs',
      'Specialized sports training & fitness assessments'
    ]
  },
  {
    id: 'senior',
    number: '04',
    category: 'creative',
    categoryName: 'Senior & Arts',
    title: 'Senior School',
    stage: 'Grades IX to XII • Senior Secondary',
    tag: 'Academic Mastery',
    icon: GraduationCap,
    desc: 'Where purpose takes flight. Empowering young adults to think deeply, act responsibly, and shape their future with national board excellence.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner3.jpg',
    highlights: [
      'Science, Commerce & Humanities streams',
      'Dedicated IIT-JEE, NEET & CUET prep mentors',
      'Modern collegiate research laboratories',
      'Career counseling & global university admissions'
    ]
  },
  {
    id: 'visual-arts',
    number: '05',
    category: 'creative',
    categoryName: 'Senior & Arts',
    title: 'Visual Arts Atelier',
    stage: 'Fine Arts, Sculpture & Digital Media',
    tag: 'Creative Expression',
    icon: Palette,
    desc: 'Inspiring imagination through visual arts, painting, pottery, sculpture, and multimedia expression in specialized sunlit creative studios.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner8.jpg',
    highlights: [
      'Professional fine arts & sculpting studios',
      'Pottery wheels & ceramic firing facilities',
      'Annual art exhibitions & portfolio guidance',
      'Digital graphic arts & animation lab'
    ]
  },
  {
    id: 'performing-arts',
    number: '06',
    category: 'creative',
    categoryName: 'Senior & Arts',
    title: 'Performing Arts',
    stage: 'Music, Dance, Theatre & Orchestra',
    tag: 'Stage & Symphony',
    icon: Music,
    desc: 'At Radha Krishna Public School, performing arts is an essential pathway to cultural pride, vocal confidence, poise, and expressive storytelling.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner1.jpg',
    highlights: [
      'Indian classical & western music academies',
      'Kathak, contemporary & folk dance studios',
      '1,200-seat acoustically engineered auditorium',
      'Annual theatrical productions & musical orchestra'
    ]
  },
  {
    id: 'sports',
    number: '07',
    category: 'sports-tech',
    categoryName: 'Sports & Innovation',
    title: 'Sports & Athletics',
    stage: 'Olympic Disciplines & Fitness Arena',
    tag: 'Athletic Excellence',
    icon: Trophy,
    desc: 'Fostering teamwork, discipline, and physical fitness through diverse sporting opportunities across synthetic courts and championship turf.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner5.jpg',
    highlights: [
      'Full-size turf cricket coaching nets',
      'Synthetic basketball & badminton academy',
      'Martial arts dojo & yoga wellness center',
      'NIS certified full-time athletic trainers'
    ]
  },
  {
    id: 'technology',
    number: '08',
    category: 'sports-tech',
    categoryName: 'Sports & Innovation',
    title: 'Digital & Robotics Lab',
    stage: 'Robotics, AI & STEM Labs',
    tag: 'Future-Ready Tech',
    icon: Cpu,
    desc: 'Developing future-ready skills in robotics, coding, design thinking, and emerging technologies in AI-enabled innovation laboratories.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner7.jpg',
    highlights: [
      'AI-enabled robotics & 3D printing lab',
      'High-speed coding & computational thinking hubs',
      '100% interactive smartboards across campus',
      'National tinkering olympiads & hackathons'
    ]
  },
  {
    id: 'special-education',
    number: '09',
    category: 'sports-tech',
    categoryName: 'Sports & Innovation',
    title: 'Inclusive Student Care',
    stage: 'Personalized Support & Wellness',
    tag: 'Care & Inclusion',
    icon: HeartHandshake,
    desc: 'Providing personalised support and inclusive learning environments to help every child thrive academically, socially, and emotionally.',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner6.jpg',
    highlights: [
      'Certified special educators & child psychologists',
      'Individualised Education Plans (IEP)',
      'Sensory integration & remedial therapy rooms',
      'Compassionate, zero-barrier campus infrastructure'
    ]
  }
];

export default function Facilities() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePlateIndex, setActivePlateIndex] = useState(0);
  const [selectedModalItem, setSelectedModalItem] = useState(null);

  // Filter items based on selected category tab
  const displayedItems = activeCategory === 'all'
    ? allProgramsData
    : allProgramsData.filter(item => item.category === activeCategory);

  // Reset active index if it goes out of bounds when category changes
  useEffect(() => {
    setActivePlateIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setActivePlateIndex((prev) => (prev === 0 ? displayedItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePlateIndex((prev) => (prev === displayedItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-800 relative overflow-hidden" 
      data-purpose="facilities-learning-programs" 
      id="facilities"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/5 border border-blue-900/15 text-blue-950 text-xs font-bold uppercase tracking-widest mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>Academic Wings &amp; Campus Facilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 heading-serif tracking-tight leading-tight">
            Our Learning Programs &amp; Campus
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900 mx-auto mt-4 rounded-full" />

          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-medium">
            At Radha Krishna Public School, every stage of learning is a carefully crafted experience; blending academic rigor, creative expression, and athletic vitality to nurture confident, curious, and compassionate leaders.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center gap-2 ${
                activeCategory === 'all'
                  ? 'bg-blue-950 text-white shadow-md ring-2 ring-blue-900/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>All 9 Wings</span>
            </button>
            <button
              onClick={() => setActiveCategory('academic')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center gap-2 ${
                activeCategory === 'academic'
                  ? 'bg-blue-950 text-white shadow-md ring-2 ring-blue-900/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Academic Wings</span>
            </button>
            <button
              onClick={() => setActiveCategory('creative')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center gap-2 ${
                activeCategory === 'creative'
                  ? 'bg-blue-950 text-white shadow-md ring-2 ring-blue-900/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>Senior &amp; Arts</span>
            </button>
            <button
              onClick={() => setActiveCategory('sports-tech')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs flex items-center gap-2 ${
                activeCategory === 'sports-tech'
                  ? 'bg-blue-950 text-white shadow-md ring-2 ring-blue-900/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Sports &amp; Innovation</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            COMBINED BOUNDARY MASTER ACCORDION CONTAINER
            All plates share a single uninterrupted perimeter with zero gaps!
           ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-slate-900/10 shadow-[0_25px_60px_-15px_rgba(11,30,72,0.22)] bg-slate-950">
          
          {/* Top Decorative Gold/Navy Gradient Accent Hairline */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-amber-400 to-blue-900" />

          {/* The Unified Plates Track (Zero gap between plates, shared boundaries) */}
          <div className="flex flex-col md:flex-row h-auto md:h-[500px] lg:h-[550px] w-full divide-y md:divide-y-0 md:divide-x divide-white/15 bg-slate-950">
            {displayedItems.map((item, idx) => {
              const isActive = activePlateIndex === idx;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActivePlateIndex(idx)}
                  onClick={() => setActivePlateIndex(idx)}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group select-none ${
                    isActive
                      ? 'min-h-[380px] md:min-h-0 md:flex-[4.5] lg:flex-[5.5]'
                      : 'min-h-[72px] md:min-h-0 md:flex-[0.9] lg:flex-[1]'
                  }`}
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Glassy Background Gradient Overlays */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive 
                        ? 'bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/25 opacity-95' 
                        : 'bg-slate-950/75 md:bg-slate-950/80 group-hover:bg-slate-950/65 backdrop-blur-[1px]'
                    }`} 
                  />

                  {/* Shimmer Border on Hover */}
                  <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    isActive ? 'opacity-100 ring-1 ring-inset ring-amber-400/30' : 'opacity-0'
                  }`} />

                  {/* -------------------------------------------------------------
                      COLLAPSED STATE PRESENTATION (Desktop vertical ribbon / Mobile bar)
                     ------------------------------------------------------------- */}
                  <div 
                    className={`absolute inset-0 p-4 transition-all duration-500 flex z-10 ${
                      isActive 
                        ? 'opacity-0 pointer-events-none md:flex' 
                        : 'opacity-100'
                    }`}
                  >
                    {/* Desktop Collapsed View (Vertical Column) */}
                    <div className="hidden md:flex flex-col justify-between items-center h-full w-full py-4 text-white">
                      {/* Top: Glowing Number & Icon */}
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs font-black text-amber-400 tracking-wider">
                          {item.number}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-110 group-hover:border-amber-400/60 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Center: Vertical Rotated Program Title */}
                      <div className="py-6 flex items-center justify-center">
                        <span 
                          className="text-sm font-bold tracking-wider text-slate-200 group-hover:text-white uppercase whitespace-nowrap transition-colors"
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)'
                          }}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Bottom: Expanding Dot */}
                      <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-amber-400 group-hover:scale-125 transition-all" />
                    </div>

                    {/* Mobile Collapsed View (Horizontal Bar) */}
                    <div className="flex md:hidden items-center justify-between w-full h-full text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-amber-400 tracking-wider">
                          {item.number}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-bold text-slate-100">
                          {item.title}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-amber-400/80 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* -------------------------------------------------------------
                      ACTIVE / EXPANDED STATE PRESENTATION
                     ------------------------------------------------------------- */}
                  <div 
                    className={`relative h-full w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-white z-20 transition-all duration-700 ${
                      isActive 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-6 pointer-events-none hidden md:flex'
                    }`}
                  >
                    {/* Top floating metadata row */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/20 shadow-xs flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5 text-amber-400" />
                          <span>{item.tag}</span>
                        </span>
                        <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-blue-950/60 backdrop-blur-md text-[11px] font-semibold text-slate-300 border border-blue-900/40">
                          {item.categoryName}
                        </span>
                      </div>

                      <span className="text-2xl sm:text-3xl font-black text-amber-400/80 tracking-tighter">
                        {item.number}
                      </span>
                    </div>

                    {/* Main Expanded Title & Details */}
                    <div className="space-y-3 max-w-xl">
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight heading-serif drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-300 font-semibold tracking-wide mt-1">
                          {item.stage}
                        </p>
                      </div>

                      <div className="w-12 h-0.5 bg-amber-400 rounded-full" />

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                        {item.desc}
                      </p>

                      {/* Highlights Pill Badges */}
                      <div className="hidden sm:grid grid-cols-2 gap-2 pt-2">
                        {item.highlights.slice(0, 4).map((hl, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-slate-300 text-xs font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Action Buttons */}
                      <div className="pt-3 sm:pt-4 flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedModalItem(item);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-amber-400/25 hover:scale-105 active:scale-95"
                        >
                          <span>Explore Wing Curriculum</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar Controls inside the Combined Frame */}
          <div className="px-5 py-3.5 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-white">
            
            {/* Quick Indicators / Direct plate selectors */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
              {displayedItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActivePlateIndex(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                    activePlateIndex === idx
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{item.number}</span>
                  <span className="hidden sm:inline">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-90"
                aria-label="Previous plate"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-90"
                aria-label="Next plate"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          PROGRAM CURRICULUM DETAIL MODAL
         ========================================================================= */}
      {selectedModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-56 sm:h-64 w-full">
              <img 
                src={selectedModalItem.image} 
                alt={selectedModalItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedModalItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  {selectedModalItem.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black heading-serif text-white">
                  {selectedModalItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-semibold">
                  {selectedModalItem.stage}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">
                  Program Philosophy &amp; Pedagogy
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedModalItem.desc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
                  Key Curriculum Pillars &amp; Infrastructure
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedModalItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-xs font-semibold text-slate-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                  Admissions open for academic session 2026–27.
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedModalItem(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="#admissions"
                    onClick={() => setSelectedModalItem(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md"
                  >
                    Apply for Admission
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
