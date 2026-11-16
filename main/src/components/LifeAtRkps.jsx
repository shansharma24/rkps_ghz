import React from 'react';
import { COLLEGE_MARQUEE, CAMPUS_STORIES } from '../data/rkpsData';
import { ExternalLink } from 'lucide-react';

export default function LifeAtRkps() {
  return (
    <div id="life">
      {/* 1. Placement & Academic Marquee (Exact match of Screenshot Page 14) */}
      <div className="bg-white border-y border-slate-200 py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-2 text-center">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#9b2335]">
            PROUD ALUMNI ACCEPTANCES & BOARD DISTINCTIONS
          </span>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee gap-8 sm:gap-14 text-slate-700 font-bebas text-2xl sm:text-3xl tracking-widest uppercase items-center">
            {COLLEGE_MARQUEE.concat(COLLEGE_MARQUEE).map((item, i) => (
              <span key={i} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-[#f0b429] text-xl">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. "WHAT'S YOUR STORY?" Photo Grid (Exact match of Screenshot Pages 14 & 15) */}
      <section className="py-20 sm:py-28 bg-[#052051] text-white relative overflow-hidden watermark-shield-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Main Headline in Bebas Neue */}
          <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl text-white tracking-wider uppercase leading-none">
            WHAT'S YOUR STORY?
          </h2>

          {/* Social Tag Pill in Gold (Exact match of Screenshot Page 14) */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://facebook.com/rkpsgzb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#f0b429] text-[#071f4c] font-bebas text-base tracking-wider uppercase hover:bg-white transition-all shadow-md hover:scale-105"
            >
              <span>@rkpsgzb on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3-Column Photo Mosaic Grid (Exact match of Screenshot Page 15) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CAMPUS_STORIES.map((story, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/40"
              >
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 bg-[#9b2335] text-white font-bebas text-xs px-3 py-1 rounded shadow">
                  {story.tag}
                </div>

                {/* Bottom Story Title */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <h4 className="font-bebas text-2xl text-white tracking-wide uppercase leading-snug group-hover:text-[#f0b429] transition-colors">
                    {story.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
