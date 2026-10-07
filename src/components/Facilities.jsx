import React from 'react';
import AccordionGallery from './AccordionGallery';

const facilityItems = [
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

export default function Facilities() {
  return (
    <section 
      className="py-10 sm:py-14 md:py-16 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 text-slate-800 relative overflow-hidden" 
      data-purpose="facilities-accordion-gallery" 
      id="facilities"
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Highlights utilizing space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E48] tracking-tight heading-serif">
              Campus &amp; Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-medium">
              Explore our 12-acre campus featuring state-of-the-art smart classrooms, research laboratories, athletics arena, and central library.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              12-Acre Campus
            </span>
            <span className="bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Smart Classrooms
            </span>
            <span className="bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Olympic Arena
            </span>
          </div>
        </div>

        {/* Full-Width Accordion Gallery with Maximum Space Utilization (No Outline Frame) */}
        <div className="w-full">
          <AccordionGallery
            items={facilityItems}
            defaultIndex={1}
            expandRatio={0.54}
            trigger="hover"
            accentColor="#f59e0b"
            overlayColor="#0b1e48"
            textColor="#ffffff"
            grayscale={false}
            height={520}
            gap={12}
            radius={20}
            tilt={5}
            parallax={0.35}
            duration={0.6}
            showLabels={true}
          />
        </div>

      </div>
    </section>
  );
}
