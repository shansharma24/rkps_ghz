import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import admissionPoster from '../../assets/admission.png';

export default function AdmissionPosterModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/65 backdrop-blur-[6px] transition-all animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Admissions Announcement"
    >
      {/* Modal Wrapper - Only Poster & Attached Close Button */}
      <div 
        className="relative max-w-4xl w-full rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transform transition-all duration-300 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Attached Close / Cross Button */}
        <button
          onClick={onClose}
          aria-label="Close poster and continue to website"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950/80 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-200" strokeWidth={2.5} />
        </button>

        {/* Poster Image Only */}
        <img
          src={admissionPoster}
          alt="Radha Krishna Public School Admissions Open 2026-27"
          className="w-full h-auto object-contain max-h-[85vh] select-none rounded-2xl sm:rounded-3xl block"
        />
      </div>
    </div>
  );
}

