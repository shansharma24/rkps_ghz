import React from 'react';
import { Calendar, Users, GraduationCap, Award, Zap } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '25+',
    label: 'Years of Excellence',
  },
  {
    icon: Users,
    value: '1500+',
    label: 'Students',
  },
  {
    icon: GraduationCap,
    value: '100+',
    label: 'Dedicated Educators',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Clubs & Activities',
  },
  {
    icon: Zap,
    value: '95%+',
    label: 'Academic Success',
    extraCol: true
  }
];

export default function SchoolHighlights() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-950 text-white overflow-hidden" data-purpose="school-highlights" id="stats">
      {/* Background overlay of institution building */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo2PIckp-SJHhiAEATMFlwnqyhms9CFSlEdS3mkTnJugrER7RD2PQAufQoIJVk1bfIiJHD1yGqyD07UElR_gzQeQfY7eedFaU25wg4q9ZVeYgNgfJmLN8d3HB1gxQSiGReH7g8OBj55CZR8UbXWdrzFa3fzZNYdoeayA0y2rtG8OB99usBVr7DehWCJgyn3e2GspSrYL3kWcZ22i_gcfNt-XrHdBZ3HGppHj2eS-_sxirilOHXw5JV9S6jI_Esaq5Uh6c"
          alt="Campus Background"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-blue-950/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag in Yellow */}
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          School Highlights
        </span>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-12 heading-serif tracking-tight">
          A Legacy of Excellence, A Future of Possibilities
        </h2>

        {/* 5 Circular Metric Columns strictly matching reference */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center group ${stat.extraCol ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="w-14 h-14 rounded-full border-2 border-amber-400/80 flex items-center justify-center text-amber-400 mb-3 bg-amber-400/10 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-lg shadow-amber-400/20">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-300 mt-1 font-medium text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
