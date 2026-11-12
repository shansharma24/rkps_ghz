import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import QuickInfoBar from '../components/QuickInfoBar';
import AboutUs from '../components/AboutUs';
import LeadershipMessage from '../components/LeadershipMessage';
import AcademicPrograms from '../components/AcademicPrograms';
import FutureReadyBanner from '../components/FutureReadyBanner';
import Facilities from '../components/Facilities';
import StudentWorkShowcase from '../components/StudentWorkShowcase';
import WallOfFame from '../components/WallOfFame';
import StatsCounter from '../components/StatsCounter';
import InquirySpotlight from '../components/InquirySpotlight';
import StudentVideoShowcase from '../components/StudentVideoShowcase';
import NewsAndEvents from '../components/NewsAndEvents';
import CtaBanner from '../components/CtaBanner';
import ParentsSpeak from '../components/ParentsSpeak';
import ContactSection from '../components/ContactSection';
import AdmissionPosterModal from '../components/modals/AdmissionPosterModal';

export default function HomePage({ onOpenAdmission, onOpenVirtualTour, onOpenVisitUs, scrollToEnquiry }) {
  const [posterOpen, setPosterOpen] = useState(false);
  const enquirySectionRef = useRef(null);

  useEffect(() => {
    // Open admission poster popup smoothly after website is loaded
    const timer = setTimeout(() => {
      setPosterOpen(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToEnquiry = () => {
    if (enquirySectionRef.current) {
      enquirySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (scrollToEnquiry) {
      scrollToEnquiry();
    } else {
      onOpenAdmission();
    }
  };

  return (
    <main className="flex-1">
      {/* 0. Home Load Admission Poster Popup */}
      <AdmissionPosterModal
        isOpen={posterOpen}
        onClose={() => setPosterOpen(false)}
      />

      {/* 1. Immersive Full-Viewport Hero Carousel (Ravensbourne / MIT Style) */}
      <Hero 
        onOpenAdmission={onOpenAdmission} 
        onOpenVirtualTour={onOpenVirtualTour} 
        scrollToEnquiry={handleScrollToEnquiry}
      />

      {/* 2. At-a-Glance School Value Proposition Strip (Pathways Style) */}
      <QuickInfoBar />

      {/* 3. About Us & Heritage Section */}
      <AboutUs onOpenLegacyModal={onOpenAdmission} />

      {/* 4. Leadership Message (Director & Principal Dual Carousel) */}
      <LeadershipMessage />

      {/* 5. Future-Ready Immersion Banner ("Step Into Excellence" - Yellow Banner) */}
      <FutureReadyBanner 
        onOpenAdmission={onOpenAdmission}
        onOpenVisitUs={onOpenVisitUs}
      />

      {/* 6. Academic Programs & Educational Continuum (Four Stages of Learning) */}
      <AcademicPrograms onOpenAdmission={onOpenAdmission} />

      {/* 7. Campus & Infrastructure Accordion Gallery (Ravensbourne Style) */}
      <Facilities />

      {/* 8. Student & Staff Work Showcase Carousel (Ravensbourne Portfolio Style) */}
      <StudentWorkShowcase />

      {/* 9. Wall of Fame: Scholastic Distinction & Merit Dossier (MIT People Spotlight) */}
      <WallOfFame />

      {/* 10. Metrics Counter (High-Contrast Dark Navy MIT Style) */}
      <StatsCounter />

      {/* 11. Inquiry Spotlight: Ask an Educator (MIT "Ask an Engineer" Style) */}
      <InquirySpotlight onOpenAdmission={onOpenAdmission} />

      {/* 12. Student Video Showcase: Voices of RKPS (3D Vertical Reels 9:16) */}
      <StudentVideoShowcase />

      {/* 13. News, Stories & Event Spotlights (MIT Magazine Grid) */}
      <NewsAndEvents />

      {/* 14. Admissions Open 2026–27 CTA Banner with 3D Cutout */}
      <CtaBanner
        onOpenAdmission={onOpenAdmission}
        onOpenEnquiry={handleScrollToEnquiry}
      />

      {/* 15. Parents Speak Marquee Testimonials */}
      <ParentsSpeak />

      {/* 16. Direct Homepage Enquiry Form & Campus Map */}
      <ContactSection formRef={enquirySectionRef} />
    </main>
  );
}
