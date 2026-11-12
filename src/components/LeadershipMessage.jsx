import React, { useState } from 'react';
import { Quote, Award, ArrowRight, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import directorImg from '../assets/director.png';
import principalImg from '../assets/principal.png';

const leaders = [
  {
    id: 'director',
    tabName: "Director's Vision",
    role: 'MANAGING DIRECTOR & FOUNDER',
    name: 'Dr. Satish Yadav',
    experience: '28+ Years in Educational Leadership',
    image: directorImg,
    deskUrl: '/directors-desk',
    quote: '“Education is the most powerful weapon which you can use to change the world.”',
    quoteAuthor: 'Nelson Mandela',
    previewText:
      'Dear Parents, Students, and Well-wishers, It is with immense pride that I welcome you to Radha Krishna Public School. Over a quarter-century, our institution has stood firm as a sanctuary of learning, values, and progressive innovation. Every brick of this campus carries our unyielding commitment to academic brilliance and the transformative empowerment of each child.',
    highlights: [
      'Pioneering non-commercial, values-based schooling in NCR since 1999',
      'Integration of 21st-century digital competencies with timeless Bharatiya heritage',
      'Dedicated parental partnership and personalized mentorship for all scholars'
    ],
    fullMessage: [
      'Dear Parents, Students, and Well-wishers,',
      'It is with great joy and immense pride that I welcome you to Radha Krishna Public School, Ghaziabad. Over the last two and a half decades, our institution has established itself as a sacred sanctuary of learning, values, and progressive innovation. Every brick of this campus carries our unyielding commitment to academic brilliance and the transformative empowerment of each child.',
      'At RKPS, we firmly believe that true education is never confined to classrooms or standard textbooks. It is an experiential odyssey dedicated to uncovering the unique genius within every student, nurturing fearless creativity, instilling disciplined integrity, and preparing young minds to navigate tomorrow’s world with compassion and fortitude.',
      'As we embrace 21st-century digital competencies, STEM discovery, and global perspectives, our cultural roots and timeless moral compass remain our steadfast foundation. We are deeply grateful to our parent community for their enduring trust and partnership in this noble educational mission.',
      'Together, let us continue kindling fires of wisdom and shaping future leaders who will illuminate society.'
    ]
  },
  {
    id: 'principal',
    tabName: "Principal's Desk",
    role: 'PRINCIPAL & ACADEMIC HEAD',
    name: 'Dr. Rupa Tyagi',
    experience: '22+ Years in Pedagogy & Curriculum Excellence',
    image: principalImg,
    deskUrl: '/principals-desk',
    quote: '“The mind is not a vessel to be filled, but a fire to be kindled.”',
    quoteAuthor: 'Plutarch',
    previewText:
      'Dear Parents, Students, and Aspiring Learners, Welcome to the vibrant academic fraternity of Radha Krishna Public School. As educators, our supreme privilege is to create an inspiring ecosystem where intellectual curiosity flourishes, critical thinking takes root, and every young learner discovers their distinct voice and potential.',
    highlights: [
      'Student-centric CBSE curriculum balanced with artistic and athletic expression',
      'Individualized mentorship ensuring no learner is left behind in board preparations',
      'Cutting-edge experiential laboratories fostering hands-on scientific mastery'
    ],
    fullMessage: [
      'Dear Parents, Students, and Aspiring Learners,',
      'Welcome to the vibrant academic fraternity of Radha Krishna Public School. As educators, our supreme privilege is to create an inspiring ecosystem where intellectual curiosity flourishes, critical thinking takes root, and every young learner discovers their distinct voice and potential.',
      'Under our student-centric CBSE curriculum, academic rigor walks hand-in-hand with artistic expression, sportsmanship, and emotional intelligence. We foster an environment where questioning is celebrated, collaborative inquiry is nurtured, and mistakes are embraced as vital stepping stones toward mastery.',
      'Our team of seasoned faculty members is passionately dedicated to ensuring that no child is left behind. Through individualized mentorship, cutting-edge experiential laboratories, and a rich tapestry of co-curricular clubs, we empower every child to conquer their highest personal summits.',
      'I warmly invite you to walk with us on this transformative path of joyful scholarship and holistic character building.'
    ]
  }
];

export default function LeadershipMessage() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const current = leaders[activeTab];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#fff6f8] border-y border-rose-100/80 relative overflow-hidden" data-purpose="leadership-message" id="leadership">
      
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

      {/* 3. Ambient Rose Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-rose-200/35 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header & Tab Bar (MIT/Pathways Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Governance &amp; Mentorship
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 heading-serif tracking-tight">
              Messages from Educational Leadership
            </h2>
          </div>

          {/* Executive Switcher Tabs */}
          <div className="flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs self-start md:self-auto">
            {leaders.map((leader, idx) => (
              <button
                key={leader.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-blue-950 text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {leader.tabName}
              </button>
            ))}
          </div>
        </div>

        {/* Executive Showcase Card (Clean White with Hairline Borders) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: Formal Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                
                {/* Accent Corner Line */}
                <div className="absolute -top-3 -left-3 w-28 h-28 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-28 h-28 border-b-4 border-r-4 border-blue-950 rounded-br-3xl pointer-events-none" />

                {/* Portrait */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl aspect-[4/5] border-2 border-white">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Nameplate Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-center">
                    <h3 className="text-base font-extrabold text-amber-300 heading-serif">
                      {current.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mt-0.5">
                      {current.role}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      {current.experience}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Editorial Message & Leadership Pillars */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quote Box */}
              <div className="relative bg-slate-50 p-6 rounded-2xl border-l-4 border-amber-500 border border-slate-200/80 shadow-xs">
                <Quote className="w-8 h-8 text-amber-500/20 absolute top-3 right-4 pointer-events-none" />
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug italic">
                  {current.quote}
                </p>
                <span className="block text-xs font-extrabold text-amber-700 uppercase tracking-wider mt-2 not-italic">
                  — {current.quoteAuthor}
                </span>
              </div>

              {/* Message Narrative */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.previewText}
              </p>

              {/* Key Leadership Pillars */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Read Full Message (Letter)
                </button>

                <Link
                  to={current.deskUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors uppercase tracking-wider"
                >
                  <span>Visit {current.tabName} Page</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Full Executive Message Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp max-h-[88vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-blue-950 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400"
                />
                <div>
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">
                    {current.role}
                  </span>
                  <h3 className="text-xl font-bold heading-serif text-white">
                    {current.name}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {current.experience}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto flex-1">
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm font-semibold text-amber-900 italic">
                {current.quote} — <span className="font-bold">{current.quoteAuthor}</span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {current.fullMessage.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-blue-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors shadow"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
