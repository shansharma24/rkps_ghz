import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  BookOpen, 
  Microscope, 
  X, 
  FileText
} from 'lucide-react';

import slide2Img from '../assets/slides/2.png';
import studentsImg from '../assets/admissions_students.png';

const academicStages = [
  {
    id: 'foundational',
    index: '01',
    stage: 'Foundational Stage',
    badge: 'Pre-Nursery – UKG',
    ageGroup: 'Ages 2.5–5',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/founnew2.jpg',
    fallbackImage: slide2Img,
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    summary: 'Sensory discovery, early phonics fluency, and Montessori play-way learning.',
    stats: [
      { label: 'Teacher Ratio', val: '1 : 15' },
      { label: 'Activity Hubs', val: '5 Modern Zones' },
      { label: 'Care Model', val: 'Montessori + NEP' },
    ],
    curriculumOverview: 'Aligned with NEP 2020 Early Childhood Care and Education (ECCE), our Foundational Stage transforms early learning from rote drill to experiential joy. Children build neural pathways through tactile exploration, social bonding, and artistic self-expression.',
    subjectsOffered: [
      'Foundational Literacy: Phonics, Letter Association, Rhyme & Story Reading',
      'Foundational Numeracy: Number Shapes, Basic Sorting, Counting & Pattern Logic',
      'Environmental Awareness: Nature Exploration, Sensory Observation & Hygiene',
      'Creative Expression: Finger Painting, Clay Modeling, Dance, Rhythm & Vocal Music',
      'Physical Kinesthetics: Gross Motor Obstacle Courses, Free Play & Yoga Basics'
    ],
    infrastructure: [
      'Dedicated Junior Activity Amphitheater',
      'Montessori Motor-Skill Stimulation Lab',
      'Indoor Splash Pool & Secure Play Park',
      'Smart Interactive Touch-Display Storyboards'
    ]
  },
  {
    id: 'primary',
    index: '02',
    stage: 'Primary Wing',
    badge: 'Grades I to V',
    ageGroup: 'Ages 6–10',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner2.jpg',
    fallbackImage: slide2Img,
    accentColor: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    summary: 'Core conceptual clarity in arithmetic, bilingual literacy, and environmental inquiry.',
    stats: [
      { label: 'Class Size', val: 'Max 30' },
      { label: 'Digital Hubs', val: '100% Smartboards' },
      { label: 'Languages', val: 'English & Hindi' },
    ],
    curriculumOverview: 'Transitioning from sensory discovery to formal conceptual understanding. The Primary Wing emphasizes experiential pedagogy, language immersion, mental math routines, and project-based science investigations.',
    subjectsOffered: [
      'English Language & Literature: Reading Comprehension, Creative Writing & Grammar',
      'Mathematics: Mental Math, Practical Geometry, Data Handling & Word Problems',
      'Environmental Studies (EVS): Ecosystems, Community Living, Weather & Health',
      'Second Language: Hindi Grammar, Prose, Poetry & Oral Recitation',
      'Information & Comm. Technology: Computer Basics, Digital Canvas & Typing Fluency',
      'Co-Curriculars: Classical Dance, Vocal Music, Taekwondo & Visual Arts'
    ],
    infrastructure: [
      'Primary Junior Computer Laboratory with Child-Safe Browsing',
      'Smart Classrooms with Touch-Enabled Interactive Whiteboards',
      'Junior Lending Library with Curated Illustrated Readers',
      'Indoor Table Tennis & Gymnastics Activity Studio'
    ]
  },
  {
    id: 'middle',
    index: '03',
    stage: 'Middle Wing',
    badge: 'Grades VI to VIII',
    ageGroup: 'Ages 11–13',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner7.jpg',
    fallbackImage: slide2Img,
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    summary: 'Analytical rigor, hands-on composite science labs, coding, and inter-house athletics.',
    stats: [
      { label: 'STEM Labs', val: '4 Dedicated' },
      { label: 'Competitions', val: 'District & State' },
      { label: 'Mentorship', val: 'Faculty Led' },
    ],
    curriculumOverview: 'Bridging foundational concepts with advanced secondary disciplines. Middle schoolers develop scientific temperament, algorithmic problem-solving, and communicative eloquence through laboratory research and collaborative projects.',
    subjectsOffered: [
      'Science Disciplines: Physics, Chemistry & Biology with dedicated practical lab periods',
      'Advanced Mathematics: Algebra, Geometry, Mensuration & Practical Statistics',
      'Social Sciences: History, Political Life, Geography & Disaster Management',
      'Languages: English, Hindi & Third Language (Sanskrit / French elective)',
      'Artificial Intelligence & Robotics: Block-based Logic, Python Syntax & Sensor Prototyping',
      'Physical Education: Athletics Track, Badminton Academy, Football & Basketball'
    ],
    infrastructure: [
      'Middle School Composite Science & Tinkering Laboratory',
      'Advanced Robotics & Microcontroller Workstations',
      'Spacious Language & Debate Audio Studio',
      'Inter-House Cricket Nets & Synthetic Basketball Court'
    ]
  },
  {
    id: 'senior',
    index: '04',
    stage: 'Senior Secondary',
    badge: 'Grades IX to XII',
    ageGroup: 'Ages 14–18',
    image: studentsImg,
    fallbackImage: studentsImg,
    accentColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    summary: 'CBSE streams (Science, Commerce, Humanities) with integrated IIT-JEE & NEET preparation.',
    stats: [
      { label: 'Board Pass Rate', val: '100%' },
      { label: 'Top Score 2025', val: '98.4%' },
      { label: 'Selections', val: '125+ Placements' },
    ],
    curriculumOverview: 'The culmination of the RKPS academic journey. Our Senior Secondary Wing delivers uncompromising scholastic rigor, producing district toppers, IITians, medical professionals, chartered accountants, and civil service aspirants year after year.',
    subjectsOffered: [
      'Science Stream (Non-Med): English Core, Physics, Chemistry, Mathematics, Computer Science / Physical Ed.',
      'Science Stream (Medical): English Core, Physics, Chemistry, Biology, Mathematics / Psychology / PE',
      'Commerce Stream: English Core, Accountancy, Business Studies, Economics, Applied Math / IP / PE',
      'Humanities Stream: English Core, Political Science, History, Economics / Psychology, Geography / PE',
      'Integrated Test Prep: Chapter-wise question banks, weekly DPPs, full-length OMR mock examinations'
    ],
    infrastructure: [
      'Senior Physics Laboratory with Precision Optical & Electrical Apparatus',
      'Senior Chemistry Research Lab with Fume Exhaust & Titration Stations',
      'Senior Biology & Biotech Lab with High-Magnification Compound Microscopes',
      'Senior Career Guidance Cell & University Application Resource Center'
    ]
  }
];

/* ─────────────────────────────────────────────────────────────
   MINIMAL COMPACT STAGE CARD (Red/Rose Dot Pattern Compatible)
   ───────────────────────────────────────────────────────────── */
function MinimalStageCard({ stage, onOpenCurriculum }) {
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl bg-white border border-rose-100/90 shadow-md hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5"
    >
      {/* Subtle mouse color glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244, 63, 94, 0.08), transparent 75%)`
        }}
      />

      {/* Top Details & Dedicated Inset Photo */}
      <div className="relative z-10">
        {/* Subtle Mono Index & Age Badge */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono pb-2.5 border-b border-slate-100">
          <span className="group-hover:text-rose-600 transition-colors font-bold text-slate-700">
            {stage.index} // {stage.badge}
          </span>
          <span className="text-[11px] text-rose-700 font-semibold bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
            {stage.ageGroup}
          </span>
        </div>

        {/* Crisp Aspect-Ratio Photo (No text on photo, clean frame) */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mt-3 mb-3.5 bg-slate-950 border border-slate-200/80 shadow-sm">
          <img
            src={stage.image}
            alt={stage.stage}
            onError={(e) => {
              if (stage.fallbackImage && e.target.src !== stage.fallbackImage) {
                e.target.src = stage.fallbackImage;
              }
            }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Stage Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#0B1E48] tracking-tight group-hover:text-rose-600 transition-colors heading-serif">
          {stage.stage}
        </h3>

        {/* 1 Short, Clean Sentence */}
        <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed font-normal">
          {stage.summary}
        </p>
      </div>

      {/* Clean Minimalist Trigger Link */}
      <div className="relative z-10 pt-3.5 mt-3.5 border-t border-slate-100">
        <button
          onClick={() => onOpenCurriculum(stage)}
          className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-[#f59e0b] hover:text-slate-950 text-white border border-slate-800 hover:border-amber-400 text-xs font-bold tracking-wide flex items-center justify-between transition-all duration-200 cursor-pointer group/btn shadow-xs active:scale-98"
        >
          <span>Curriculum Blueprint</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CLEAN CURRICULUM BLUEPRINT MODAL
   ───────────────────────────────────────────────────────────── */
function CurriculumModal({ stage, onClose, onOpenAdmission }) {
  if (!stage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-[#0B1E48] text-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold mb-1">
              <span>STAGE {stage.index}</span>
              <span>•</span>
              <span>{stage.badge}</span>
              <span>•</span>
              <span>{stage.ageGroup}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight heading-serif">
              {stage.stage} Curriculum Blueprint
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm bg-slate-50/60">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Pedagogical Overview
            </h4>
            <p className="text-slate-700 leading-relaxed font-medium">
              {stage.curriculumOverview}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {stage.stats.map((s, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3.5 text-center shadow-xs">
                <p className="text-lg font-black text-rose-600 font-mono">
                  {s.val}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Core Academic Disciplines</span>
            </h4>
            <div className="space-y-2">
              {stage.subjectsOffered.map((subj, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                  <span>{subj}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-2">
              <Microscope className="w-4 h-4 text-blue-600" />
              <span>Specialized Facilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {stage.infrastructure.map((infra, idx) => (
                <div key={idx} className="text-xs text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/80 flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{infra}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-white flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAdmission();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#f59e0b] hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
          >
            <span>Apply for {stage.stage}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN ACADEMIC PROGRAMS SECTION (RED/ROSE DOTTED PATTERN STYLE)
   ───────────────────────────────────────────────────────────── */
export default function AcademicPrograms({ onOpenAdmission }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section 
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#fff6f8] text-slate-900 border-y border-rose-100/80 overflow-hidden" 
      data-purpose="academic-programs" 
      id="academics"
    >
      {/* 1. Signature Red/Rose Polka-Dot Pattern (Ravensbourne Style) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f43f5e 1.75px, transparent 1.75px)',
          backgroundSize: '22px 22px',
          opacity: 0.5
        }}
      />

      {/* 2. Top-Right Magenta/Rose Curved Corner Accent */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none overflow-hidden z-0">
        <div 
          className="w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] -top-24 sm:-top-32 md:-top-36 -right-24 sm:-right-32 md:-right-36 absolute rounded-full bg-gradient-to-bl from-[#e11d48] via-[#e11d48] to-[#be185d] opacity-90 shadow-md"
        />
      </div>

      {/* 3. Subtle Ambient Rose Glow across Section */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-rose-200/35 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Clean, Minimal Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-rose-200/70 pb-5 mb-8 sm:mb-10 gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-1">
              ACADEMIC CONTINUUM
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E48] tracking-tight heading-serif">
              Four Stages of Learning
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md sm:text-right font-medium leading-relaxed">
            NEP 2020-aligned pedagogical framework from early childhood exploration to senior secondary distinction.
          </p>
        </div>

        {/* 4 Clean, Compact Cards with Balanced Spacing & No Dead Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch w-full">
          {academicStages.map((stage) => (
            <MinimalStageCard
              key={stage.id}
              stage={stage}
              onOpenCurriculum={(stg) => setSelectedProgram(stg)}
            />
          ))}
        </div>

      </div>

      {/* Curriculum Details Modal */}
      <CurriculumModal
        stage={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenAdmission={onOpenAdmission}
      />
    </section>
  );
}
