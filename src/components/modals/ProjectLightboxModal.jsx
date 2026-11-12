import React from 'react';
import { X, Calendar, User, Tag, ArrowRight } from 'lucide-react';

export default function ProjectLightboxModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Project Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500 text-slate-950 uppercase tracking-wider inline-block mb-2">
              {project.categoryBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black heading-serif leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-5">
          
          {/* Creator & Date Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5 font-bold text-slate-900">
              <User className="w-4 h-4 text-blue-900" />
              <span>{project.creator}</span>
            </div>
            <span className="h-3 w-px bg-slate-200" />
            <span className="font-medium text-slate-500">{project.grade}</span>
            <span className="h-3 w-px bg-slate-200" />
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>Session {project.year}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <p className="font-semibold text-slate-900">
              {project.summary}
            </p>
            <p className="text-slate-600">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 items-center">
            <Tag className="w-4 h-4 text-slate-400" />
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between rounded-b-3xl">
          <span className="text-xs text-slate-500 font-medium">
            Student Showcase &amp; Creative Portfolio • RKPS
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}

