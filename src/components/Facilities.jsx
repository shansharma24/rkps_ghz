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
      className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 text-slate-800 relative overflow-hidden" 
      data-purpose="facilities-accordion-gallery" 
      id="facilities"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist, Clean Header */}
        <div className="text-center mb-5 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E48] tracking-tight heading-serif">
            Campus &amp; Facilities
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Full-Width Accordion Gallery with Maximum Space Utilization */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-950 p-1.5 sm:p-2">
          <AccordionGallery
            items={facilityItems}
            defaultIndex={1}
            expandRatio={0.48}
            trigger="hover"
            accentColor="#f59e0b"
            overlayColor="#0b1e48"
            textColor="#ffffff"
            grayscale={false}
            height={460}
            gap={10}
            radius={16}
            tilt={6}
            parallax={0.4}
            duration={0.6}
            showLabels={true}
          />
        </div>

      </div>
    </section>
  );
}
