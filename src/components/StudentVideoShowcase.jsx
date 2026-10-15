import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STUDENT_VIDEOS } from '../data/studentVideos';

/* ── Helpers ── */
const getPrev = (i, len) => (i - 1 + len) % len;
const getNext = (i, len) => (i + 1) % len;

/* ── Inline Minimal SVG Icons ── */
const PlayIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M4 2.5v11l9-5.5z" />
  </svg>
);

const PauseIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <rect x="3" y="2" width="3.5" height="12" rx="1" />
    <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
  </svg>
);

const VolumeIcon = ({ muted }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h2l3-3v10l-3-3H3V6z" fill="currentColor" />
    {!muted && (
      <>
        <path d="M11 5.5a3.5 3.5 0 010 5" />
        <path d="M13 3.5a6 6 0 010 9" />
      </>
    )}
    {muted && <line x1="12" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="1.6" />}
  </svg>
);

const ExpandIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 1 13 1 13 5" />
    <polyline points="5 13 1 13 1 9" />
    <line x1="13" y1="1" x2="8.5" y2="5.5" />
    <line x1="1" y1="13" x2="5.5" y2="8.5" />
  </svg>
);

const ArrowLeft = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4l-5 5 5 5" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 4l5 5-5 5" />
  </svg>
);

/* ─────────────────────────────────────────────────────────
   Interactive Video Card Component (Vertical Reel 9:16)
   ───────────────────────────────────────────────────────── */
const VideoCard = ({
  testimonial,
  index,
  isActive,
  isSide,
  onClick,
  setVideoRef,
  isPlaying,
  isMuted,
  onToggleMute,
  onTogglePlay,
  currentTime,
  onEnded,
}) => {
  const localVideoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [hasError, setHasError] = useState(false);

  const effectiveDuration = videoDuration > 0 ? videoDuration : 0;
  const formattedDuration =
    effectiveDuration > 0
      ? `${Math.floor(effectiveDuration / 60)}:${String(Math.floor(effectiveDuration % 60)).padStart(2, '0')}`
      : testimonial.duration || '0:10';

  const formattedTime = `${Math.floor(currentTime / 60)}:${String(
    Math.floor(currentTime % 60)
  ).padStart(2, '0')}`;

  // Forward ref callback
  const handleVideoRef = useCallback(
    (el) => {
      localVideoRef.current = el;
      if (setVideoRef) setVideoRef(el);
    },
    [setVideoRef]
  );

  // Sync muted state
  useEffect(() => {
    if (localVideoRef.current) {
      localVideoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Autoplay when active, pause when inactive
  useEffect(() => {
    const vid = localVideoRef.current;
    if (!vid) return;

    if (isActive) {
      vid.currentTime = 0;
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Autoplay notice:', err.message);
        });
      }
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  }, [isActive, testimonial.video]);

  return (
    <div
      className="relative overflow-hidden flex-shrink-0 group w-full h-full cursor-pointer select-none bg-slate-900 shadow-2xl"
      style={{
        borderRadius: '24px',
        boxShadow: isActive
          ? '0 20px 40px -10px rgba(11, 30, 72, 0.25), 0 0 25px rgba(245, 158, 11, 0.2)'
          : '0 10px 25px -5px rgba(11, 30, 72, 0.12)',
      }}
      onClick={isActive ? onTogglePlay : onClick}
      role="button"
      tabIndex={0}
      aria-label={
        isActive
          ? `${isPlaying ? 'Pause' : 'Play'} Testimonial Video ${index + 1}`
          : `Select Testimonial Video ${index + 1}`
      }
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (isActive) {
            onTogglePlay();
          } else {
            onClick();
          }
        }
      }}
    >
      {/* ── Top Progress Bar (Active Card Only) ── */}
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/20 z-20 overflow-hidden rounded-t-[24px]">
          <div
            className="h-full transition-[width] duration-150 ease-linear"
            style={{
              width:
                effectiveDuration > 0
                  ? `${Math.min(100, (currentTime / effectiveDuration) * 100)}%`
                  : '0%',
              background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
            }}
          />
        </div>
      )}

      {/* ── Background Poster Frame (Ensures card is never black) ── */}
      {testimonial.poster && (
        <img
          src={testimonial.poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-[1.02]"
          loading="eager"
        />
      )}

      {/* ── Video Element (Active Spotlight Card Only) ── */}
      {isActive && (
        <video
          key={testimonial.video}
          ref={handleVideoRef}
          src={testimonial.video}
          poster={testimonial.poster}
          muted={isMuted}
          playsInline
          preload="auto"
          onError={() => setHasError(true)}
          onCanPlay={() => setHasError(false)}
          onLoadedMetadata={(e) => {
            setHasError(false);
            if (e.target?.duration && !isNaN(e.target.duration)) {
              setVideoDuration(e.target.duration);
            }
          }}
          onEnded={onEnded}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] relative z-10"
          style={{
            display: 'block',
            borderRadius: '24px',
          }}
        />
      )}

      {/* ── Graceful Fallback if video error occurs ── */}
      {hasError && isActive && (
        <div className="absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center rounded-[24px]">
          <h4 className="text-sm font-bold text-white mb-1 tracking-wide">
            Video Loading
          </h4>
          <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-3">
            Loading {testimonial.video}...
          </p>
        </div>
      )}

      {/* ── Center Play / Pause Indicator (When Paused on Active Card) ── */}
      {isActive && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-amber-400 backdrop-blur-md shadow-2xl transition-transform transform scale-100 group-hover:scale-110"
            style={{
              background: 'rgba(7, 17, 38, 0.75)',
              border: '1.5px solid rgba(245, 158, 11, 0.5)',
            }}
          >
            <PlayIcon className="w-6 h-6 ml-1 text-amber-400" />
          </div>
        </div>
      )}

      {/* ── Side Card Center Play Badge Indicator ── */}
      {isSide && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white backdrop-blur-md shadow-lg transition-transform group-hover:scale-110"
            style={{
              background: 'rgba(7, 17, 38, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <PlayIcon className="w-5 h-5 ml-0.5 text-white/90" />
          </div>
        </div>
      )}

      {/* ── Cinematic Bottom Gradient Overlay ── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '45%',
          background:
            'linear-gradient(to top, rgba(7, 17, 38, 0.95) 0%, rgba(7, 17, 38, 0.5) 60%, transparent 100%)',
          borderRadius: '0 0 24px 24px',
        }}
      />

      {/* ── Playback Controls Bar (Active Card Only) ── */}
      {isActive && (
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTogglePlay();
            }}
            className="text-white hover:text-amber-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10 shrink-0"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <PauseIcon className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5" />}
          </button>

          <span className="text-[10px] sm:text-[10.5px] text-white/90 font-medium tabular-nums font-sans whitespace-nowrap shrink-0 select-none">
            {formattedTime} / {formattedDuration}
          </span>

          <div className="flex-1 min-w-[4px]" />

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleMute();
            }}
            className="text-white/80 hover:text-amber-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10 shrink-0"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <VolumeIcon muted={isMuted} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const vid = localVideoRef.current;
              if (vid) {
                if (vid.requestFullscreen) vid.requestFullscreen();
                else if (vid.webkitEnterFullScreen) vid.webkitEnterFullScreen();
              }
            }}
            className="text-white/80 hover:text-amber-400 transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10 shrink-0"
            aria-label="Fullscreen"
          >
            <ExpandIcon />
          </button>
        </div>
      )}

      {/* ── Clean Glassmorphic Border ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: '24px',
          border: isActive
            ? '2px solid rgba(245, 158, 11, 0.5)'
            : '1px solid rgba(255, 255, 255, 0.1)',
        }}
      />
    </div>
  );
};

/* ═════════════════════════════════════════════════════════════
   Main Student Video Showcase Section
   ═════════════════════════════════════════════════════════════ */
export default function StudentVideoShowcase({
  testimonials = STUDENT_VIDEOS,
  eyebrow = 'Campus Life in Motion · Student Stories',
  subtitle = 'Discover what life and learning are like at Radha Krishna Public School through authentic student video testimonials.',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [direction, setDirection] = useState(0);

  const videoRefs = useRef([]);
  const len = testimonials.length;
  const prevIndex = getPrev(activeIndex, len);
  const nextIndex = getNext(activeIndex, len);

  // Time tracking for current video
  useEffect(() => {
    const activeVideo = videoRefs.current[activeIndex];
    if (!activeVideo) return;

    const onTimeUpdate = () => setCurrentTime(activeVideo.currentTime);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    activeVideo.addEventListener('timeupdate', onTimeUpdate);
    activeVideo.addEventListener('play', onPlay);
    activeVideo.addEventListener('pause', onPause);

    return () => {
      activeVideo.removeEventListener('timeupdate', onTimeUpdate);
      activeVideo.removeEventListener('play', onPlay);
      activeVideo.removeEventListener('pause', onPause);
    };
  }, [activeIndex]);

  const goTo = useCallback(
    (index) => {
      setDirection(index > activeIndex ? 1 : -1);
      setCurrentTime(0);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentTime(0);
    setActiveIndex((prev) => getNext(prev, len));
  }, [len]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentTime(0);
    setActiveIndex((prev) => getPrev(prev, len));
  }, [len]);

  const togglePlay = useCallback(() => {
    const vid = videoRefs.current[activeIndex];
    if (!vid) return;

    if (vid.paused) {
      const p = vid.play();
      if (p !== undefined) {
        p.then(() => setIsPlaying(true)).catch((err) => {
          console.warn('Playback notice:', err.message);
          setIsPlaying(false);
        });
      }
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  }, [activeIndex]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const newMuted = !prev;
      const vid = videoRefs.current[activeIndex];
      if (vid) vid.muted = newMuted;
      return newMuted;
    });
  }, [activeIndex]);

  const handleVideoEnded = useCallback(() => {
    goNext();
  }, [goNext]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  /* ── Mobile Touch Swipe ── */
  const touchStart = useRef(null);
  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStart.current = null;
  };

  /* ── Framer Motion Variants ── */
  const cardVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 0.92,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.92,
      x: dir > 0 ? -100 : 100,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const sideCardVariants = {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.92, transition: { duration: 0.3 } },
  };

  return (
    <section
      className="relative w-full overflow-hidden text-slate-800 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 border-t border-slate-200/60"
      style={{
        paddingTop: 'clamp(2.5rem, 4vw, 3.5rem)',
        paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
      }}
      aria-label="Student Video Testimonials Section"
      id="student-videos"
    >
      {/* ── Atmospheric Ambient Radial Glows (Institutional Theme) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-[10%] left-1/4 w-[500px] h-[350px] rounded-full blur-[100px] opacity-25"
          style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[450px] h-[300px] rounded-full blur-[90px] opacity-20"
          style={{ background: 'radial-gradient(circle, #fcd34d 0%, transparent 70%)' }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (No Eyebrow Pill) ── */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E48] tracking-tight heading-serif mb-2.5">
            What Our <span className="text-amber-600">Students</span> Experience
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 text-xs sm:text-sm font-medium">
            {subtitle}
          </p>
        </motion.div>

        {/* ── 3D Spotlight Video Carousel (Vertical 9:16 Format) ── */}
        <div
          className="relative flex items-center justify-center gap-4 md:gap-7"
          onTouchStart={len > 1 ? onTouchStart : undefined}
          onTouchEnd={len > 1 ? onTouchEnd : undefined}
        >
          {/* ── Left Side Preview Card ── */}
          {len > 1 && (
            <div
              className="hidden md:block flex-shrink-0 cursor-pointer group"
              style={{
                height: 'clamp(250px, 36vh, 310px)',
                aspectRatio: '9/16',
                width: 'auto',
              }}
              onClick={goPrev}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`side-left-${prevIndex}`}
                  variants={sideCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full h-full overflow-hidden transition-all duration-300 group-hover:opacity-100"
                  style={{
                    opacity: 0.85,
                    transform: 'scale(0.92)',
                    transformOrigin: 'right center',
                  }}
                >
                  <VideoCard
                    testimonial={testimonials[prevIndex]}
                    index={prevIndex}
                    isActive={false}
                    isSide={true}
                    onClick={goPrev}
                    setVideoRef={(el) => {
                      videoRefs.current[prevIndex] = el;
                    }}
                    isPlaying={false}
                    isMuted={true}
                    onToggleMute={() => {}}
                    onTogglePlay={() => {}}
                    currentTime={0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* ── Center Spotlight Card (Vertical 9:16 Format) ── */}
          <div
            className="flex-shrink-0"
            style={{
              height: 'clamp(320px, 46vh, 400px)',
              aspectRatio: '9/16',
              width: 'auto',
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`center-${activeIndex}`}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full"
              >
                <VideoCard
                  testimonial={testimonials[activeIndex]}
                  index={activeIndex}
                  isActive={true}
                  isSide={false}
                  onClick={() => {}}
                  setVideoRef={(el) => {
                    videoRefs.current[activeIndex] = el;
                  }}
                  isPlaying={isPlaying}
                  isMuted={isMuted}
                  onToggleMute={toggleMute}
                  onTogglePlay={togglePlay}
                  currentTime={currentTime}
                  onEnded={handleVideoEnded}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Right Side Preview Card ── */}
          {len > 1 && (
            <div
              className="hidden md:block flex-shrink-0 cursor-pointer group"
              style={{
                height: 'clamp(250px, 36vh, 310px)',
                aspectRatio: '9/16',
                width: 'auto',
              }}
              onClick={goNext}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`side-right-${nextIndex}`}
                  variants={sideCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full h-full overflow-hidden transition-all duration-300 group-hover:opacity-100"
                  style={{
                    opacity: 0.85,
                    transform: 'scale(0.92)',
                    transformOrigin: 'left center',
                  }}
                >
                  <VideoCard
                    testimonial={testimonials[nextIndex]}
                    index={nextIndex}
                    isActive={false}
                    isSide={true}
                    onClick={goNext}
                    setVideoRef={(el) => {
                      videoRefs.current[nextIndex] = el;
                    }}
                    isPlaying={false}
                    isMuted={true}
                    onToggleMute={() => {}}
                    onTogglePlay={() => {}}
                    currentTime={0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* ── Minimal Navigation Controls (No Pills) ── */}
        {len > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center text-slate-700 bg-white hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90 shadow-sm transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous video testimonial"
            >
              <ArrowLeft />
            </button>

            <span className="text-sm font-semibold tracking-widest text-slate-500 font-sans tabular-nums select-none px-2">
              {activeIndex + 1} / {len}
            </span>

            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full flex items-center justify-center text-slate-950 bg-amber-500 hover:bg-amber-400 border border-amber-400 shadow-md transition-all duration-200 font-bold cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next video testimonial"
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
