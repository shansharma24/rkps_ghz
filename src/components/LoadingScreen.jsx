import React, { useState, useEffect } from 'react';
import schoolLogo from '../assets/logo.jpg';

export default function LoadingScreen({ onFinished }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    // 1. Smooth percentage counter progression (12% -> 100%)
    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round(12 + (elapsed / duration) * 88), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
      }
    }, 25);

    // 2. Timeline states
    const completeTimer = setTimeout(() => setIsComplete(true), 2150);
    const exitTimer = setTimeout(() => setIsExiting(true), 2550);
    const finishTimer = setTimeout(() => {
      if (onFinished) onFinished();
    }, 3100);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div
      id="site-loading-screen"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-all duration-600 ease-in-out ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Light Theme Clean Architectural Grid & Ambient Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `
            radial-gradient(circle at 50% 36%, rgba(30, 58, 138, 0.05) 0%, transparent 65%),
            radial-gradient(circle at 50% 68%, rgba(217, 119, 6, 0.04) 0%, transparent 55%),
            radial-gradient(rgba(15, 23, 42, 0.04) 1.2px, transparent 1.2px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 26px 26px',
        }}
      />

      {/* Ambient Decorative Academic Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[420px] h-[420px] rounded-full border border-blue-900/5 animate-pulse" />
        <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-amber-600/10" />
      </div>

      {/* Center Branding Card */}
      <div className="relative flex flex-col items-center z-10 px-4 text-center select-none max-w-sm sm:max-w-md w-full">
        
        {/* Animated Emblem Badge with Circular Tracing Laser */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
          
          {/* Outer Elevation & Completion Glow */}
          <div
            className={`absolute inset-2 rounded-full transition-all duration-500 ${
              isComplete
                ? 'shadow-[0_0_40px_rgba(217,119,6,0.35)] ring-2 ring-amber-400'
                : 'shadow-[0_16px_40px_rgba(15,35,75,0.1),0_2px_12px_rgba(217,119,6,0.06)] ring-1 ring-slate-100'
            }`}
          />

          {/* SVG Animated Tracing Perimeter Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 200 200"
          >
            {/* Guide circle */}
            <circle
              cx="100"
              cy="100"
              r="94"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2.5"
            />
            {/* Animated Laser tracing ring */}
            <circle
              cx="100"
              cy="100"
              r="94"
              fill="none"
              stroke="url(#rkpsLightLaser)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="591"
              strokeDashoffset="591"
              className="loading-ring-svg"
            />
            <defs>
              <linearGradient id="rkpsLightLaser" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="45%" stopColor="#d97706" />
                <stop offset="80%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
          </svg>

          {/* Golden Orbiting Satellite Dot (Synchronized with circular laser beam) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none loading-dot-orbit">
            <span
              className="absolute top-[3%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-amber-400 flex items-center justify-center shadow-[0_0_12px_#f59e0b,0_0_22px_rgba(245,158,11,0.85)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#ffffff]" />
            </span>
          </div>

          {/* Pure White Circular Card housing the Logo Image */}
          <div className="relative z-10 w-34 h-34 sm:w-40 sm:h-40 rounded-full bg-white p-3 flex items-center justify-center ring-1 ring-slate-150 shadow-inner overflow-hidden">
            {/* Shimmer light sweep across the logo */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20" />

            {/* School Logo — Always clearly visible with soft breathing effect */}
            <img
              src={schoolLogo}
              alt="Radha Krishna Public School"
              className="w-full h-full object-contain relative z-10 drop-shadow-sm animate-breathe"
            />
          </div>
        </div>

        {/* School Name & Institutional Identity */}
        <div className="mt-6 sm:mt-7">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-wider uppercase font-sans">
            Radha Krishna
          </h1>
          <p className="text-xs sm:text-sm font-bold text-blue-900 tracking-[0.26em] uppercase mt-1">
            Public School
          </p>

          {/* Golden Badge Ornament */}
          <div className="flex items-center justify-center gap-2.5 mt-2.5">
            <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-amber-500 rounded-full" />
            <span className="text-[10px] sm:text-xs text-amber-700 font-bold tracking-[0.28em] uppercase">
              Ghaziabad
            </span>
            <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-amber-500 rounded-full" />
          </div>

          {/* CBSE Affiliation Info */}
          <p className="text-[11px] sm:text-xs text-slate-500 tracking-wide font-medium mt-2">
            CBSE Affiliated Senior Secondary School
          </p>
          <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
            Affiliation No: 2130572 &bull; School Code: 2132212
          </p>
        </div>

        {/* Clean Light-Themed Progress Indicator */}
        <div className="mt-7 sm:mt-8 w-52 sm:w-60 flex flex-col items-center gap-2">
          {/* Progress Track */}
          <div className="w-full h-1.5 bg-slate-100 border border-slate-200/80 rounded-full overflow-hidden p-[1px] shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-900 via-amber-500 to-blue-600 transition-all duration-75 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Status Text & Percentage */}
          <div className="flex items-center justify-between w-full text-[10px] tracking-wider uppercase text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              {progress < 100 ? 'Entering Campus...' : 'Welcome to RKPS'}
            </span>
            <span className="font-bold text-slate-700">{progress}%</span>
          </div>
        </div>

      </div>

      {/* Animation Keyframes */}
      <style>{`
        .loading-ring-svg {
          animation: drawLaserRing 2.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes drawLaserRing {
          0% {
            stroke-dashoffset: 591;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .loading-dot-orbit {
          animation: orbitLaserSync 2.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center center;
        }
        @keyframes orbitLaserSync {
          0% {
            transform: rotate(0deg);
            opacity: 1;
          }
          96% {
            transform: rotate(345.6deg);
            opacity: 1;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes shimmerGleam {
          0% { transform: translateX(-150%); }
          50%, 100% { transform: translateX(150%); }
        }
        .animate-shimmer {
          animation: shimmerGleam 2.1s infinite ease-in-out;
        }
        @keyframes subtleBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-breathe {
          animation: subtleBreathe 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
