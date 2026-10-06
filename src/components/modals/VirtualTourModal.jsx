import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

const tourSpots = [
  {
    title: 'School Campus & Transport Fleet',
    category: 'Campus Grounds',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkNW3umzMyBB0D-OKTmTGmg11eQ_LRoUIIE233XVxKg8P1wpRHu9QqikuGdOvOdf68Cp3gzZ7Z5DUuTGEYuPwjP-Z8Tm39d3tntcezXaCi1vxsiOoCOv0k0yZgeUshbkH0qzCG1nO4t6xx2wPSPB7AN5SAIWvma1dmnspO5A1Ccb1XVnq9XJD7o6U6f_mR6C7VOC0ZdHGn2TTS-Lo9qz-9dfXdl0GbyWC05PJVomZo6m9g-mRBbCpfhQ',
    description: '12 verdant acres with secure gated entry, GPS-monitored fleet of air-conditioned school buses covering all major routes across Ghaziabad, Noida, and East Delhi.'
  },
  {
    title: 'Grand Central Library & Digital Hub',
    category: 'Academic Sanctuary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHxs-fv2VWuLUPllKQK1ZM_RUm00mjzXZsbroGND5b52EvI_URqkRy3qfk0KzaGUhlXl_SxpOSTG-ONJswFHXMHCCTXqM6V84U5SVkDmFqxFMqszkp57rQod4dnsLF8Qy7JTUXosoH48VQ5v5PuYnoT-FImlshqah0ZRsN19ky7McoBWrekaSS56sJFQLbF8eOsAy1l4r3_omznpOyX2qbv6LQgaw1E3ZERtPbV6WdDBQd-L-KkCNhfg',
    description: 'Double-height quiet reading gallery featuring 20,000+ reference volumes, Kindle e-book terminals, national periodicals, and dedicated research stations.'
  },
  {
    title: 'Shri Radha Krishna Multipurpose Auditorium',
    category: 'Performing Arts & Culture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCrKdJ_ZqjF2KyrEzZZOip394XRDO7PqKDpA7385hdxpSw547VKQTXfIpwu5HBQ5gUe0rTSuP9wG2gFknZ6XU47HSvUEuNzGdmaismAo5_oP1aK8jEtVrVd90IKE337Q7vAE7wieQgvMN8TOkLmNRUV6vtr1mf4bB1YXk2-Gztkhd5Iq00ijmlL08pedqGPvOgMBiFwy4jNlRU0Fy4hek7ReXI1EBruvIy-nMbqHBJWhTuA_TUTrwspQ',
    description: 'Centrally air-conditioned 1,200 seat theater with proscenium stage, motorized spotlights, and state-of-the-art acoustics for national MUNs and annual cultural productions.'
  },
  {
    title: 'Advanced Science Research Suites',
    category: 'STEM Innovation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5wVZ5a_9hK9wmSqLAsw5F5Z1cR8i7vo9QwBJDcDqTUQoC_NkjIHIYlZsqlIMouMLScwT1FUM6bvKwoWYL9S-YeynHB1r-bDYuG7z5nyz8clQcOkae9DUUrqIVnqN2Hm8JWENXVhd_loZu2LxK3Zr5tO3uw9k9pn5ezUwT2XH7HwhuF5T7nylBTeNUWyMHrKIKTaskQHna_KDogxyhWUMumarlpwL9rOrGd-NaME4vmv41xn5QsvZ7xQ',
    description: 'Separate well-equipped laboratories for Physics, Chemistry, Biology, and AI Robotics fostering deep practical discovery and scientific acumen.'
  }
];

export default function VirtualTourModal({ isOpen, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!isOpen) return null;

  const current = tourSpots[activeIdx];

  const prevSpot = () => {
    setActiveIdx((prev) => (prev === 0 ? tourSpots.length - 1 : prev - 1));
  };

  const nextSpot = () => {
    setActiveIdx((prev) => (prev + 1) % tourSpots.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative h-72 sm:h-96 bg-slate-950 overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30" />

          {/* Nav buttons */}
          <button
            onClick={prevSpot}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-blue-900 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSpot}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-blue-900 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full uppercase tracking-wider shadow">
              {current.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white heading-serif">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Details & Thumbnails */}
        <div className="p-6">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {current.description}
          </p>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex gap-2">
              {tourSpots.map((spot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeIdx ? 'border-amber-500 scale-105 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={spot.image} alt={spot.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="text-xs font-bold text-slate-500">
              {activeIdx + 1} of {tourSpots.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
