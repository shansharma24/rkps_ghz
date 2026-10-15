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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-[6px] transition-all animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Admissions Announcement"
    >
      {/* Modal Wrapper - Compact Poster & Attached Close Button */}
      <div 
        className="relative max-w-3xl w-full rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transform transition-all duration-300 animate-scaleUp flex items-center justify-center bg-black/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Attached Close / Cross Button */}
        <button
          onClick={onClose}
          aria-label="Close poster and continue to website"
          className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950/85 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-200" strokeWidth={2.5} />
        </button>

        {/* Poster Image Only */}
        <img
          src={admissionPoster}
          alt="Radha Krishna Public School Admissions Open 2026-27"
          className="w-full h-auto object-contain max-h-[70vh] sm:max-h-[75vh] select-none rounded-2xl sm:rounded-3xl block"
        />
      </div>
    </div>
  );
}

