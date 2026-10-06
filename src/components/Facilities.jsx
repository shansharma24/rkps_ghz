import React, { useState } from 'react';
import { BookOpen, FlaskConical, Trophy, MonitorPlay, Sparkles, X, ChevronRight } from 'lucide-react';

const facilitiesData = [
  {
    id: 'library',
    colSpan: 'md:col-span-6',
    title: 'Grand Central Library & Digital Media Hub',
    category: 'Resource Center',
    desc: 'Housing over 20,000 titles, national journals, e-readers, and quiet study alcoves.',
    fullDesc: 'Our bi-level library provides students with curated literature across international, CBSE, and competitive verticals. Fully air-conditioned with automated RFID checkout, computer research kiosks, Kindle e-readers, and private quiet study pods.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHxs-fv2VWuLUPllKQK1ZM_RUm00mjzXZsbroGND5b52EvI_URqkRy3qfk0KzaGUhlXl_SxpOSTG-ONJswFHXMHCCTXqM6V84U5SVkDmFqxFMqszkp57rQod4dnsLF8Qy7JTUXosoH48VQ5v5PuYnoT-FImlshqah0ZRsN19ky7McoBWrekaSS56sJFQLbF8eOsAy1l4r3_omznpOyX2qbv6LQgaw1E3ZERtPbV6WdDBQd-L-KkCNhfg',
    stat: '20,000+ Books & Journals'
  },
  {
    id: 'labs',
    colSpan: 'md:col-span-3',
    title: 'Advanced Science Labs',
    category: 'Research',
    desc: 'Dedicated Physics, Chemistry & Biology research suites.',
    fullDesc: 'State-of-the-art laboratory infrastructure adhering strictly to CBSE and international safety benchmarks. Equipped with digital microscopes, spectrum analyzers, fume hoods, and AI robotics experiment bays.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5wVZ5a_9hK9wmSqLAsw5F5Z1cR8i7vo9QwBJDcDqTUQoC_NkjIHIYlZsqlIMouMLScwT1FUM6bvKwoWYL9S-YeynHB1r-bDYuG7z5nyz8clQcOkae9DUUrqIVnqN2Hm8JWENXVhd_loZu2LxK3Zr5tO3uw9k9pn5ezUwT2XH7HwhuF5T7nylBTeNUWyMHrKIKTaskQHna_KDogxyhWUMumarlpwL9rOrGd-NaME4vmv41xn5QsvZ7xQ',
    stat: 'Physics, Chem & Bio Suites'
  },
  {
    id: 'sports',
    colSpan: 'md:col-span-3',
    title: 'Multi-Sport Complex',
    category: 'Fitness',
    desc: 'Cricket pitch, synthetic basketball, badminton, & martial arts.',
    fullDesc: 'Featuring full-size synthetic basketball court, international standard badminton arena, lawn tennis court, full turf cricket coaching nets, and yoga & martial arts dojo with NIS certified coaches.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC9pWnp_2Ya6vgDc5Az9ZeJBYQDtoFvT2fS-CSwbiw6brg2FV28D6s7I0Wi82cVpi3VhbITPhNFlDEXr6KJjPD5WRLxXD2xOqYJELcz1dzYc75gL2SC7ZIfUv47o8xaievwBPwGkgD8uLUGfA3P6puufWIT4In3_YL5URVDTueuzsRvKEMTa36RLmIN6nrX6FFnk0Yd-OK-pDbxSSImrL4CjDIHZ_5h4FUqbFAjTPmqCtiilK9iwN-oAVeSDwC0-PiiBw',
    stat: '10+ Outdoor & Indoor Disciplines'
  },
  {
    id: 'smart-class',
    colSpan: 'md:col-span-4',
    title: 'Smart Classrooms',
    category: 'Digitized',
    desc: '100% interactive smartboards with high-speed campus fiber.',
    fullDesc: 'Every classroom is equipped with high-definition interactive flat panel displays (IFPD), high-speed gigabit Wi-Fi 6, multimedia pedagogical animations, and ergonomic dual-desk furniture designed for posture and collaboration.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_5Vbnu_ew3ENBDDbx9Ev7iET92nt157bBwzfxVGhAlHfl_8lpQ1DTwk3ObZGKCnKKS3zfWGZDuw2JMog_UzJOAPQUtvkMk1sKhwCKrBgzbmAeMZg7SSWFPZbx2BWAQELgMBvTsz9EQz_WT5kvJfQtjF-cRoCy_QrWHyLH9gQXfRYGHanWFJkwFFXq8Ygt5-PBlOPsNqTI1R6O3JHWIiZRUUc5gIQ1-pXg0nhMQSIktHrg6Oxix7btoqFjM2gNOEaRWs',
    stat: '100% Interactive Tech'
  },
  {
    id: 'auditorium',
    colSpan: 'md:col-span-8',
    title: 'Shri Radha Krishna Multipurpose Auditorium',
    category: 'Auditorium & Culture',
    desc: 'Acoustically engineered 1,200-seat auditorium hosting cultural fests, MUNs, and national seminars.',
    fullDesc: 'Our centrally air-conditioned auditorium features a proscenium theater stage, professional motorized lighting grids, surround audio engineering, motorized projection screens, and green rooms.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrKdJ_ZqjF2KyrEzZZOip394XRDO7PqKDpA7385hdxpSw547VKQTXfIpwu5HBQ5gUe0rTSuP9wG2gFknZ6XU47HSvUEuNzGdmaismAo5_oP1aK8jEtVrVd90IKE337Q7vAE7wieQgvMN8TOkLmNRUV6vtr1mf4bB1YXk2-Gztkhd5Iq00ijmlL08pedqGPvOgMBiFwy4jNlRU0Fy4hek7ReXI1EBruvIy-nMbqHBJWhTuA_TUTrwspQ',
    stat: '1,200 Seating Capacity'
  }
];

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200" data-purpose="facilities-bento-grid" id="facilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Campus &amp; Facilities</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 mt-1 heading-serif">
              Infrastructure Engineered for Excellence
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Spread across 12 verdant acres in Ghaziabad, our modern learning sanctuaries inspire focus and well-being.
          </p>
        </div>

        {/* Bento Grid Layout strictly following IMAGE_7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {facilitiesData.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className={`${facility.colSpan} relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-72 sm:h-80 bg-slate-900 border border-slate-200 cursor-pointer`}
            >
              <img
                src={facility.img}
                alt={facility.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/45 to-transparent p-5 sm:p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                    {facility.category}
                  </span>
                  <span className="text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                    View Details <ChevronRight className="w-3 h-3 text-amber-400" />
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mt-1 heading-serif group-hover:text-amber-300 transition-colors">
                  {facility.title}
                </h3>
                
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp">
            <div className="relative h-60">
              <img 
                src={selectedFacility.img} 
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4">
                <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full uppercase tracking-wider">
                  {selectedFacility.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-950 heading-serif">
                {selectedFacility.title}
              </h3>
              
              <div className="mt-3 p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center gap-2 text-xs font-bold text-blue-900">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{selectedFacility.stat}</span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {selectedFacility.fullDesc}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Close Facility Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
