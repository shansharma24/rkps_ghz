import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, X, Award } from 'lucide-react';
import directorImg from '../assets/director.png';
import principalImg from '../assets/principal.png';

const leaders = [
  {
    id: 'director',
    role: 'DIRECTOR',
    name: 'Dr. Satish Yadav',
    experience: '28+ Years in Educational Leadership',
    image: directorImg,
    quote: '“Education is the most powerful weapon which you can use to change the world.”',
    quoteAuthor: 'Nelson Mandela',
    previewText:
      'Dear Parents, Students, and Well-wishers, It is with great joy and immense pride that I welcome you to Radha Krishna Public School, Ghaziabad. Over the last two and a half decades, our institution has established itself as a sacred sanctuary of learning, values, and progressive innovation. Every brick of this campus carries our unyielding commitment to academic brilliance and the transformative empowerment of each child.',
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
    role: 'PRINCIPAL',
    name: 'Dr. Rupa Tyagi ',
    experience: '22+ Years in Pedagogy & Curriculum Excellence',
    image: principalImg,
    quote: '“The mind is not a vessel to be filled, but a fire to be kindled.”',
    quoteAuthor: 'Plutarch',
    previewText:
      'Dear Parents, Students, and Aspiring Learners, Welcome to the vibrant academic fraternity of Radha Krishna Public School. As educators, our supreme privilege is to create an inspiring ecosystem where intellectual curiosity flourishes, critical thinking takes root, and every young learner discovers their distinct voice and potential.',
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swipe every 2.5 seconds unless paused on hover or when modal is open
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, isModalOpen]);

  const currentLeader = leaders[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      className="py-8 sm:py-10 md:py-12 bg-[#FFF7F6] relative overflow-hidden" 
      data-purpose="leadership-message"
      id="leadership"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle ambient decorative dots */}
      <div 
        className="absolute top-4 right-10 w-40 h-40 opacity-20 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: 'radial-gradient(#e11d48 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      />
      <div 
        className="absolute bottom-4 left-10 w-36 h-36 opacity-15 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: 'radial-gradient(#1e3a8a 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Single-line Header without tabs */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#192A56] tracking-tight heading-serif inline-flex items-center gap-2 sm:gap-3">
            <span>Leadership</span>
            <span className="text-[#EF4444]">Message</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#192A56] via-[#EF4444] to-[#192A56] mx-auto mt-2 rounded-full" />
        </div>

        {/* =========================================================================
            SLIDER SHOWCASE (Utilizes full horizontal space & compact vertical height)
           ========================================================================= */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 bg-white z-20 cursor-pointer"
            aria-label="Previous leader"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Main Card Container */}
          <div className="flex-1 bg-white/75 backdrop-blur-xs rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-rose-100 shadow-sm transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Stylized Portrait Frame */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-52 sm:w-60 md:w-64 lg:w-72">
                  
                  {/* Decorative background dot grid accent */}
                  <div 
                    className="absolute -top-3 -right-3 w-20 h-20 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(#f43f5e 1.5px, transparent 1.5px)',
                      backgroundSize: '10px 10px'
                    }}
                  />

                  {/* Red/Coral Top-Left Curved Outer Accent Arc */}
                  <div className="absolute -top-2.5 -left-2.5 w-28 sm:w-32 h-28 sm:h-32 border-t-[6px] sm:border-t-[7px] border-l-[6px] sm:border-l-[7px] border-[#EF4444] rounded-tl-[40px] pointer-events-none" />

                  {/* Deep Navy Bottom-Right Curved Outer Accent Arc */}
                  <div className="absolute -bottom-2.5 -right-2.5 w-28 sm:w-32 h-28 sm:h-32 border-b-[6px] sm:border-b-[7px] border-r-[6px] sm:border-r-[7px] border-[#192A56] rounded-br-[40px] pointer-events-none" />

                  {/* Portrait Card */}
                  <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-900 shadow-lg border-3 border-white aspect-square">
                    <img
                      key={currentLeader.id}
                      src={currentLeader.image}
                      alt={currentLeader.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 animate-fadeIn"
                    />

                    {/* Subtle bottom shadow vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Desk Name Plate Overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-xl py-1.5 px-2.5 border border-amber-400/40 shadow-md text-center backdrop-blur-md">
                      <div className="text-xs sm:text-sm font-extrabold tracking-wider text-amber-300 uppercase truncate">
                        {currentLeader.name}
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-300 tracking-widest uppercase">
                        {currentLeader.role}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Quotes & Message (Utilizes wide horizontal space) */}
              <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
                
                {/* Quote Box matching reference */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#EF4444]/60 shadow-xs">
                  <Quote className="absolute -top-3 right-4 w-6 h-6 text-[#192A56] fill-[#192A56] transform rotate-180" />

                  <p className="text-sm sm:text-base font-bold text-[#192A56] leading-snug pr-4">
                    {currentLeader.quote} – <span className="font-extrabold text-[#EF4444]">{currentLeader.quoteAuthor}</span>
                  </p>
                </div>

                {/* Main Message Text */}
                <div className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  <p className="line-clamp-4 sm:line-clamp-none">
                    {currentLeader.previewText}..{' '}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-[#EF4444] hover:text-[#DC2626] font-bold underline inline-flex items-center gap-0.5 cursor-pointer ml-1 transition-colors"
                    >
                      Read More
                    </button>
                  </p>
                </div>

                {/* Leader Credential Meta Strip */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-500 border-t border-rose-100">
                  <div className="flex items-center gap-1.5 font-semibold text-[#192A56]">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>{currentLeader.experience}</span>
                  </div>
                  {currentLeader.credentials && (
                    <>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-600 font-medium">{currentLeader.credentials}</span>
                    </>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 bg-white z-20 cursor-pointer"
            aria-label="Next leader"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>

        {/* Bottom Pagination Dots with subtle auto-swipe progress pulse */}
        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
          {leaders.map((leader, idx) => (
            <button
              key={leader.id}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-7 h-2 bg-[#EF4444]'
                  : 'w-2 h-2 bg-rose-200 hover:bg-rose-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* =========================================================================
          FULL LEADERSHIP MESSAGE MODAL
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-rose-100 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#192A56] p-5 sm:p-6 text-white relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0">
                  <img 
                    src={currentLeader.image} 
                    alt={currentLeader.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold uppercase tracking-wider inline-block mb-1">
                    {currentLeader.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold heading-serif text-white">
                    {currentLeader.name}
                  </h3>
                  {currentLeader.credentials && (
                    <p className="text-xs text-slate-300">
                      {currentLeader.credentials}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="p-4 rounded-xl bg-[#FFF7F6] border-l-4 border-[#EF4444] text-xs sm:text-sm font-semibold text-[#192A56] italic">
                {currentLeader.quote} – <span className="font-bold text-[#EF4444]">{currentLeader.quoteAuthor}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentLeader.fullMessage.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#192A56] hover:bg-[#101e3d] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  Close Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
