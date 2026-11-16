// Import media assets from shared repository
import slide1Video from '@assets/slides/1.mp4';
import slide2Img from '@assets/slides/2.png';
import slide3Img from '@assets/slides/3.png';
import slide4Img from '@assets/slides/4.png';
import slide5Img from '@assets/slides/5.png';
import principalImg from '@assets/principal.png';
import directorImg from '@assets/director.png';
import exteriorImg from '@assets/Radha Krishna Public School Exterior.png';
import admissionsStudentsImg from '@assets/admissions_students.png';
import logoImg from '@assets/logo.jpg';

export const SCHOOL_INFO = {
  name: "Radha Krishna Public School",
  tagline: "Quality Education for All",
  founded: "2004",
  yearsOfExcellence: "20+",
  affiliation: "Affiliated to CBSE, New Delhi (Affiliation Code: 2132212 / 2130572)",
  principal: "Ms. Monika Sharma",
  director: "Dr. Satish Yadav",
  campusAddresses: [
    {
      label: "Main Campus",
      address: "NH-9, Lal Kuan, Ghaziabad, Uttar Pradesh 201001"
    },
    {
      label: "City Wing",
      address: "Sector-11, Pratap Vihar, Ghaziabad, Uttar Pradesh 201009"
    }
  ],
  phones: ["9810624925", "9315099591", "9310300600", "+91 9718080400"],
  email: "rkps.gzb@gmail.com",
  socials: {
    facebook: "https://facebook.com/rkpsgzb",
    instagram: "https://instagram.com/rkpsgzb",
    youtube: "https://youtube.com/@rkpsgzb",
    linkedin: "https://linkedin.com/school/rkpsgzb"
  }
};

export const HERO_SLIDES = [
  {
    type: "video",
    src: slide1Video,
    title: "EDUCATION FOR ALL",
    kicker: "RADHA KRISHNA PUBLIC SCHOOL",
    subtitle: "CBSE-affiliated excellence, personalized care, and holistic growth for over 2,500 scholars across Ghaziabad.",
    cta1: "ADMISSIONS",
    cta2: "ACADEMICS"
  },
  {
    type: "image",
    src: slide2Img,
    title: "EXTRAORDINARY CARE",
    kicker: "NURTURING VALUES",
    subtitle: "A supportive sanctuary where every child is understood, mentored, and empowered to reach their highest potential.",
    cta1: "ADMISSIONS",
    cta2: "ACADEMICS"
  },
  {
    type: "image",
    src: slide3Img,
    title: "LOVE, JOY, FAITH",
    kicker: "HOLISTIC DEVELOPMENT",
    subtitle: "Balancing academic rigor with performing arts, sports academies, and lifelong character building.",
    cta1: "ADMISSIONS",
    cta2: "ACADEMICS"
  },
  {
    type: "image",
    src: slide4Img,
    title: "20 YEARS OF EXCELLENCE",
    kicker: "LEGACY SINCE 2004",
    subtitle: "Two decades of scholastic leadership, board merit distinctions, and competitive entrance triumphs.",
    cta1: "ADMISSIONS",
    cta2: "ACADEMICS"
  }
];

export const CORE_PILLARS = [
  {
    title: "QUALITY LEARNING",
    badge: "EXCELLENCE",
    desc: "CBSE academics in a stress-free setting that encourages creativity, conceptual clarity, and critical thinking with personalized teacher mentorship."
  },
  {
    title: "EVERY CHILD VALUED",
    badge: "EXTRAORDINARY CARE",
    desc: "A friendly school where each student is understood, valued, and given individual attention to foster self-confidence and moral integrity."
  },
  {
    title: "BEYOND THE CLASSROOM",
    badge: "POSSIBILITIES",
    desc: "Equal attention to athletics, yoga, music, dance, art and craft, abacus, and Vedic mathematics alongside traditional academic disciplines."
  }
];

export const WHY_CHOOSE_TABS = [
  {
    id: "EDUCATORS",
    tabLabel: "Educators",
    tag: "EDUCATORS",
    kicker: "OUR EDUCATORS",
    title: "TEACHERS WHO RAISE THE STANDARD",
    desc: "Led by Principal Ms. Monika Sharma, RKPS teachers focus on the academic growth and holistic well-being of every child through dedicated classroom mentoring and continuous innovation.",
    image: principalImg,
    stats: [
      { num: "100+", label: "Teachers & Mentors", icon: "GraduationCap" },
      { num: "8.5", label: "Avg Years Experience", icon: "Clock" },
      { num: "85%", label: "Post-Graduate Qualified", icon: "Award" },
      { num: "50+", label: "Annual Training Sessions", icon: "Users" }
    ]
  },
  {
    id: "COMMUNITY",
    tabLabel: "Community",
    tag: "COMMUNITY",
    kicker: "OUR COMMUNITY",
    title: "OVER TWO DECADES OF FAMILIES",
    desc: "Since 2004, RKPS has served families across Lal Kuan, Pratap Vihar, and Greater Ghaziabad. Parents and teachers work hand-in-hand through transparent communication and school events.",
    image: admissionsStudentsImg,
    stats: [
      { num: "15,000+", label: "Distinguished Alumni", icon: "GraduationCap" },
      { num: "2,000+", label: "Active Families", icon: "Users" },
      { num: "200+", label: "Parent Volunteers", icon: "Heart" },
      { num: "40+", label: "Annual Celebrations", icon: "Sparkles" }
    ]
  },
  {
    id: "FACILITIES",
    tabLabel: "Facilities",
    tag: "FACILITIES",
    kicker: "OUR CAMPUS",
    title: "SPACES BUILT FOR LEARNING",
    desc: "A rich learning environment equipped with modern digital smart classes, science laboratories, computer labs, an expansive library, sports grounds, yoga studio, and activity arenas.",
    image: exteriorImg,
    stats: [
      { num: "11", label: "Specialized Facility Areas", icon: "Building2" },
      { num: "20,000+", label: "Library Books & Resources", icon: "BookOpen" },
      { num: "5", label: "Advanced Science & STEM Labs", icon: "Microscope" },
      { num: "4", label: "Sports & Athletics Arenas", icon: "Trophy" }
    ]
  },
  {
    id: "HISTORY",
    tabLabel: "History",
    tag: "HISTORY",
    kicker: "OUR HISTORY",
    title: "A LEGACY SINCE 2004",
    desc: "Radha Krishna Public School began in 2004 and is proudly affiliated with the Central Board of Secondary Education, New Delhi. It has steadily grown with the families and aspirations of Ghaziabad.",
    image: directorImg,
    stats: [
      { num: "2004", label: "Founded with Quality Vision", icon: "Calendar" },
      { num: "100%", label: "CBSE Board Pass Record", icon: "CheckCircle2" },
      { num: "CBSE", label: "Affiliation #2132212 / 2130572", icon: "ShieldCheck" },
      { num: "20+", label: "Years of Scholastic Growth", icon: "Award" }
    ]
  },
  {
    id: "STUDENTS",
    tabLabel: "Students",
    tag: "STUDENTS",
    kicker: "OUR STUDENTS",
    title: "A FULL STUDENT LIFE",
    desc: "Students from Playgroup to Class X engage in challenging classroom curricula while actively taking part in sports, martial arts, abacus, Vedic mathematics, and performing arts.",
    image: slide3Img,
    stats: [
      { num: "14", label: "Classes (Play to Class X)", icon: "BookOpen" },
      { num: "2,500+", label: "Enrolled Scholars", icon: "Users" },
      { num: "4", label: "Houses & Activity Guilds", icon: "Shield" },
      { num: "30+", label: "Co-Curricular Activities", icon: "Trophy" }
    ]
  }
];

export const LEARNING_STAGES = [
  {
    id: "pre-primary",
    label: "Pre Primary",
    stageName: "Pre Primary Years",
    ageRange: "Play, Nursery, LKG & UKG • Ages 3–5",
    desc: "A calm, structured first step into school. Children build early language fluency, phonics, number sense, and social skills in a safe, play-way, and well-supervised setting.",
    btnText: "LEARN MORE ABOUT PRE PRIMARY",
    image: slide5Img,
    highlights: ["Sensory Discovery & Motor Skills", "Montessori Play-way Routines", "Phonics, Rhymes & Story Circles"]
  },
  {
    id: "primary",
    label: "Primary",
    stageName: "Primary School",
    ageRange: "Classes I to V • Ages 6–10",
    desc: "Strong foundations in reading, writing, and mathematics, taught with clear routines, interactive smartboards, and regular feedback to parents.",
    btnText: "LEARN MORE ABOUT PRIMARY SCHOOL",
    image: slide2Img,
    highlights: ["Mental Math & Bilingual Literacy", "Environmental Science Investigations", "Abacus & Computer Basics"]
  },
  {
    id: "middle",
    label: "Middle",
    stageName: "Middle School",
    ageRange: "Classes VI to VIII • Ages 11–13",
    desc: "Subjects deepen and expectations rise. Students learn to study independently with hands-on composite science labs while teachers track conceptual progress closely.",
    btnText: "LEARN MORE ABOUT MIDDLE SCHOOL",
    image: slide3Img,
    highlights: ["Physics, Chemistry & Biology Labs", "Advanced Problem Solving", "Inter-House Debates & Athletics"]
  },
  {
    id: "secondary",
    label: "Secondary",
    stageName: "Secondary School",
    ageRange: "Classes IX & X • Ages 14–16",
    desc: "Focused CBSE preparation with careful subject guidance, structured mock assessments, and steady academic and career support through the milestone board years.",
    btnText: "LEARN MORE ABOUT SECONDARY SCHOOL",
    image: slide4Img,
    highlights: ["Board Examination Mastery", "Regular Revision & Diagnostic Tests", "Personalized Mentor Guidance"]
  }
];

export const BEYOND_CLASSROOM_TABS = [
  {
    id: "activities",
    label: "Activities & Sports",
    title: "ACTIVITIES & SPORTS",
    desc: "Sports, yoga, martial arts, music, dance, art and craft sit alongside academics, so every student has a platform to build physical stamina, creative expression, and teamwork.",
    cta: "MORE ABOUT ACTIVITIES & SPORTS",
    image: slide4Img
  },
  {
    id: "experiential",
    label: "Experiential Learning",
    title: "EXPERIENTIAL LEARNING",
    desc: "Educational trips and excursions, environmental campaigns, science innovation exhibits, and guest lectures provide hands-on learning that goes well beyond textbooks.",
    cta: "MORE ABOUT EXPERIENTIAL LEARNING",
    image: slide2Img
  },
  {
    id: "service",
    label: "Service Learning",
    title: "SERVICE LEARNING",
    desc: "Social responsibility initiatives, community cleanliness drives, and ecological projects teach students empathy, active citizenship, and respect for their surroundings.",
    cta: "MORE ABOUT SERVICE LEARNING",
    image: slide3Img
  }
];

export const ALUMNI_TOPPERS = [
  {
    id: "ananya",
    name: "ANANYA SINGHAL",
    classYear: "Class of 2024",
    score: "98.8% CBSE XII",
    stream: "Science Stream Topper",
    highlight: "Admitted to IIT Delhi",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDADta2QPOo3lnW1mvx810hecTNdLql6oRO5oIh_n_IPehzHiAxt2ZfORiPzfZd_qkphYVmc6cctoRVsyM8_vKrWXT_1_UbGetlgCcLIl2w5mfeb-jlgRtL52riGZP37bV0CJcunFfQYckNJ2lWllSs3-04u1Yvos4ox0cRsCy6YWKmZaI0M6uPwlt6ncekRw_rpaX8mPK5s0SHSsIVqdicBw3rHmbuKnLzZIPO58_dzrFtIpSWFFjtiw"
  },
  {
    id: "rohan",
    name: "ROHAN AGRAWAL",
    classYear: "Class of 2024",
    score: "98.4% CBSE XII",
    stream: "Commerce Stream Topper",
    highlight: "SRCC (Delhi University) Selected",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC3yncjklmzit2NMEQ5a_Xqqdb-InBGpDDglWjjJQXcnpO4djYwoDlgFYcFrpXfVliXioKItTnODfU5VhAIQBCwaa3HrC9hT3k4RKqIIiZJCwwidnXTIq1kR6prhd2ifxDZW3y0oXT0k0klY-SalrmPsHkRNycMOVwynl3ab95bAy_4TvxUYPYRi4TgmYkuKNMBZXSSZUArWe2jqgXlSNqvABIa2AMMafzJvsVnBwpxfQ1QepJTuASbw"
  },
  {
    id: "meera",
    name: "MEERA CHAWLA",
    classYear: "Class of 2024",
    score: "98.2% CBSE XII",
    stream: "Humanities Topper",
    highlight: "St. Stephen's College Admitted",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACUhXwaXYLGIjPccwLVpLIuy0ONweW3KTypkMHuoJ11AwhWGTybooi_c_Fe955ESOfH4ENzZXpvdSQ1fskzeaf304dliDljlvRAElqvpUbWl7LtNC-eqyXu8vSW5Cg-RheP37L0QsNlboWbql4MgKQpi3Y-s-jjNA83WOM01O4N3BZxnqTltMFRHy0VZwj2eTcvlOTAn27VblDSIjqrB_DwsgfmgStQC7y2KkWUtk44tqWuZpL8n7cSOzmutwXsrFxs6c"
  },
  {
    id: "aditya",
    name: "ADITYA TYAGI",
    classYear: "Class of 2025",
    score: "99.0% CBSE X",
    stream: "Class X City Rank 1",
    highlight: "100/100 Perfect Math Score",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlaYWmmy_8g1OfqJvgZQ3JizyjCSSb-QQKImGgYZBRTXxZoIT_M-2GU9CKeJesRbekKKqBcHkJwBJyfC7vkHNeknYGKGs4WvTiMvdC0eogRxORV_5IR7OErBjqHxHq9DWZIk7I-V0-06FmO64u7Ve7b4obFHkjAD5_7-Onog-Q-r1VXcOHCYu2tyoX8wo4W_5WkxbXLFSRt0qO82ryuPjfb6x3_VctC-g6A7bkthIH8lYit-kAimoQatUd_GlJUg2Ymjg"
  }
];

export const PARENT_TESTIMONIALS = [
  {
    parent: "Kanika Pandey",
    role: "Parent of Grade IV Student",
    text: "Praises the cooperative staff and management, and the extra effort teachers put into her daughter's holistic growth and moral values."
  },
  {
    parent: "Rajesh & Sunita Verma",
    role: "Parents of Grade X Scholar",
    text: "The dedicated faculty guidance and regular revision tests gave our child the confidence to excel in board examinations."
  },
  {
    parent: "Amitabh Srivastava",
    role: "Parent of Grade VII Student",
    text: "RKPS provides a wonderful balance of rigorous academics, yoga, and sports. The teachers truly care about every child."
  }
];

export const COLLEGE_MARQUEE = [
  "IIT DELHI",
  "AIIMS NEW DELHI",
  "SRCC DELHI UNIVERSITY",
  "ST. STEPHEN'S COLLEGE",
  "DELHI TECHNOLOGICAL UNIVERSITY (DTU)",
  "NIT ALLAHABAD",
  "BITS PILANI",
  "NATIONAL DEFENCE ACADEMY (NDA)",
  "100% CBSE BOARD RESULTS"
];

export const CAMPUS_STORIES = [
  {
    title: "Annual Sports Championship & Yoga Showcase",
    tag: "Athletics",
    img: slide4Img
  },
  {
    title: "Science & Robotics Innovation Exhibition",
    tag: "STEM & Labs",
    img: slide2Img
  },
  {
    title: "Cultural Heritage & Annual Day Celebrations",
    tag: "Performing Arts",
    img: slide3Img
  },
  {
    title: "Pre-Primary Sensory & Nature Exploration",
    tag: "Early Years",
    img: slide5Img
  },
  {
    title: "Digital Smart Classroom Interactive Session",
    tag: "Academics",
    img: admissionsStudentsImg
  },
  {
    title: "Campus Botanical Garden Ecological Field Study",
    tag: "Environment",
    img: exteriorImg
  }
];
