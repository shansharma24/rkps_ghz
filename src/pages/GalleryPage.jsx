import React, { useState } from 'react';
import { Eye, X, Compass, ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccordionGallery from '../components/AccordionGallery';

const galleryPhotos = [
  {
    id: 1,
    title: 'Modern Architecture & Green Campus',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/founnew2.jpg',
    desc: 'Sprawling 12-acre lush green campus designed for optimal natural lighting and safety.'
  },
  {
    id: 2,
    title: 'Grand Central Knowledge Library',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner2.jpg',
    desc: 'Quiet reading chambers with over 20,000 academic titles and digital research carrels.'
  },
  {
    id: 3,
    title: 'Senior Academic Wing & Corridors',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner3.jpg',
    desc: 'Ergonomic, digitized classrooms with interactive touch panels for collaborative learning.'
  },
  {
    id: 4,
    title: 'AI, Robotics & STEM Innovation Hub',
    category: 'academics',
    categoryLabel: 'Science & Innovation',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner7.jpg',
    desc: 'Hands-on experimentation with IoT sensors, Arduino robotics, and 3D prototyping.'
  },
  {
    id: 5,
    title: 'Olympic-Standard Sports Complex',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner5.jpg',
    desc: 'Cricket coaching nets, synthetic basketball academy, football turf, and athletics track.'
  },
  {
    id: 6,
    title: '1,200-Seat Performing Arts Auditorium',
    category: 'cultural',
    categoryLabel: 'Cultural & Arts',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner1.jpg',
    desc: 'Acoustically treated multi-tier auditorium for theatrical drama, music, and annual fests.'
  },
  {
    id: 7,
    title: 'Annual Athletic Championship Meet',
    category: 'sports',
    categoryLabel: 'Sports & Athletics',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    desc: 'Students competing in inter-house sprint relays, high jumps, and championship sports.'
  },
  {
    id: 8,
    title: 'Inter-School Science Exhibition & Hackathon',
    category: 'academics',
    categoryLabel: 'Science & Innovation',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    desc: 'Innovative student prototypes addressing environmental conservation and smart city models.'
  },
  {
    id: 9,
    title: 'Vibrant Annual Cultural & Dance Festival',
    category: 'cultural',
    categoryLabel: 'Cultural & Arts',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    desc: 'Traditional classical dances, symphony orchestra performances, and vibrant stage plays.'
  }
];

const featuredAccordionItems = [
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/founnew2.jpg',
    label: 'Foundation Wing',
    alt: 'Foundation Wing',
    link: '#gallery-grid'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner2.jpg',
    label: 'Central Library',
    alt: 'Central Library',
    link: '#gallery-grid'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner3.jpg',
    label: 'Senior Wing',
    alt: 'Senior Wing',
    link: '#gallery-grid'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner7.jpg',
    label: 'Robotics & STEM Lab',
    alt: 'Robotics and STEM Lab',
    link: '#gallery-grid'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner5.jpg',
    label: 'Olympic Sports Arena',
    alt: 'Olympic Sports Arena',
    link: '#gallery-grid'
  },
  {
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner1.jpg',
    label: 'Performing Arts Auditorium',
    alt: 'Performing Arts Auditorium',
    link: '#gallery-grid'
  }
];

export default function GalleryPage({ onOpenAdmission, onOpenVirtualTour }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Page Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Campus Memories &amp; Moments</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black heading-serif tracking-tight text-white leading-tight">
            Photo &amp; Media Gallery
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            Explore glimpses of daily campus life, scientific inquiry, sports achievements, and vibrant celebrations at Radha Krishna Public School.
          </p>

          {/* Quick Virtual Tour Trigger */}
          {onOpenVirtualTour && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={onOpenVirtualTour}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Launch 360° Virtual Campus Tour</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 2. Interactive Accordion Showcase (No Outline Frame) */}
      <section className="py-10 max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="w-full">
          <AccordionGallery
            items={featuredAccordionItems}
            defaultIndex={0}
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
      </section>

      {/* 3. Filter Navigation & Photo Grid */}
      <section id="gallery-grid" className="scroll-mt-28 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'campus', label: 'Campus & Infrastructure' },
            { id: 'academics', label: 'Science & Labs' },
            { id: 'sports', label: 'Sports & Athletics' },
            { id: 'cultural', label: 'Cultural & Arts' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-md scale-105 ring-2 ring-blue-700'
                  : 'bg-white text-slate-600 hover:text-blue-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Photo Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-blue-900 shadow">
                  {photo.categoryLabel}
                </span>

                {/* View Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 rounded-full bg-amber-400 text-slate-950 shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Photo Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0B1E48] heading-serif mb-1 group-hover:text-blue-700 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {photo.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-700 font-bold">
                  <span>Click to expand</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[75vh] w-full bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                {selectedPhoto.categoryLabel}
              </span>
              <h2 className="text-xl font-bold heading-serif mt-1">
                {selectedPhoto.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. Campus Visit Callout */}
      <section className="py-14 bg-gradient-to-r from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black heading-serif mb-3">
            Want to See Our Campus in Person?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto mb-6 font-medium">
            Schedule a personalized campus tour with our admissions coordinators to experience our classes, laboratories, and sports grounds firsthand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              Apply for Admission 2026–27
            </button>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Book Physical Campus Tour
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
