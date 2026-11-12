/* ─────────────────────────────────────────────────────────────
   INQUIRY SPOTLIGHT DATA (MIT "Ask an Engineer" Architecture)
   Provocative questions answered by RKPS educators and student researchers.
   ───────────────────────────────────────────────────────────── */

export const INQUIRY_DATA = [
  {
    id: 'inq-81',
    number: '#81',
    question: 'How do our scholars engineer autonomous obstacle-avoidance rovers in the Atal Tinkering Lab?',
    category: 'STEM & Robotics',
    categoryTag: 'Robotics & Automation',
    colorPop: {
      color: '#ef4444',
      glow: 'rgba(239, 68, 68, 0.45)',
      core: 'rgba(244, 63, 94, 0.90)',
      lightBg: 'rgba(241, 245, 249, 0.92)',
      border: 'hover:border-rose-500'
    },
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
    summary: 'Using LiDAR sensors, ultrasonic micro-transceivers, and Python algorithms, students prototype autonomous navigation systems for real-world automation.',
    answer: `In our Atal-inspired STEM laboratory, scholars bridge computational theory with hands-on mechanical fabrication. 

Students start with kinematics fundamentals, learning differential drive locomotion before interfacing ultrasonic distance sensors and infrared edge detectors with ESP32 and Arduino microcontrollers.

By Grade VIII, students advance to writing PID (Proportional-Integral-Derivative) control loops in Python and C++, allowing their prototypes to calculate velocity vectors, dynamically avoid dynamic obstacles, and map indoor corridors. 

This experiential pathway prepares our students for national robotics olympiads and collegiate engineering pursuits.`,
    author: {
      name: 'Er. Alok Verma',
      role: 'Head of STEM & Innovation Labs',
      credentials: 'M.Tech (Robotics), 12+ Years Mentorship'
    },
    metrics: [
      { label: 'Prototypes Built', val: '45+ Yearly' },
      { label: 'Competitions Won', val: '14 Regional' },
      { label: 'Age Group', val: 'Grades VI–XII' }
    ]
  },
  {
    id: 'inq-75',
    number: '#75',
    question: 'How does RKPS synchronize competitive IIT-JEE / NEET mastery with the CBSE Board syllabus?',
    category: 'Academic Rigor',
    categoryTag: 'Board & Entrance Synergy',
    colorPop: {
      color: '#06b6d4',
      glow: 'rgba(6, 182, 212, 0.45)',
      core: 'rgba(14, 165, 233, 0.90)',
      lightBg: 'rgba(241, 245, 249, 0.92)',
      border: 'hover:border-cyan-500'
    },
    thumbnail: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=400&q=80',
    summary: 'Our integrated curriculum architecture aligns CBSE NCERT theory with advanced multi-concept numericals, eliminating duplicate coaching stress.',
    answer: `Traditional schooling often forces senior students to juggle conflicting school schedules and evening coaching institutes. RKPS eliminates this friction through an integrated pedagogical timeline.

Every CBSE core topic is taught in parallel with its competitive depth:
1. Concept Induction: Rigorous conceptual clarity matching NCERT and CBSE blueprint guidelines.
2. Advanced Extension: Weekly DPPs (Daily Practice Problem sheets) covering previous 15 years' JEE Advanced and NEET question archetypes.
3. Diagnostic Benchmarking: Regular chapter-wise computer-based testing (CBT) and OMR evaluations mimicking actual NTA testing conditions.

Our in-house master faculty provide personalized doubt-clearing sessions during school hours, ensuring students achieve top board percentiles (up to 98.4%) while securing top ranks in JEE, NEET, and CUET.`,
    author: {
      name: 'Dr. Rupa Tyagi',
      role: 'Principal & Senior Physics Mentor',
      credentials: 'Ph.D., 22+ Years in CBSE Senior Pedagogy'
    },
    metrics: [
      { label: 'CBSE Pass Rate', val: '100%' },
      { label: 'JEE / NEET Selections', val: '125+ Scholars' },
      { label: 'Top Score 2026', val: '98.4%' }
    ]
  },
  {
    id: 'inq-42',
    number: '#42',
    question: 'How does early sensory and play-way discovery accelerate mathematical reasoning in foundational years?',
    category: 'Early Childhood',
    categoryTag: 'Cognitive Development',
    colorPop: {
      color: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.45)',
      core: 'rgba(251, 146, 60, 0.90)',
      lightBg: 'rgba(241, 245, 249, 0.92)',
      border: 'hover:border-amber-500'
    },
    thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=400&q=80',
    summary: 'Through Montessori manipulatives, sensory cylinders, and geometric pattern blocks, pre-primary children develop intuitive spatial logic.',
    answer: `Cognitive neuroscience demonstrates that young children understand mathematical concepts through tactile, three-dimensional manipulation before they can decipher abstract numerical symbols.

In our Foundational Wing (Pre-Nursery through Kindergarten), children work daily with self-correcting Montessori apparatus:
- Golden Bead Materials for concrete decimal understanding
- Cylindrical Blocks for dimensional discernment and fine motor coordination
- Geometric Solids to develop spatial intuition and architectural awareness

Rather than rote memorization, children develop spontaneous mathematical wonder. When they encounter formal arithmetic in Grade I, they already possess an internalized, concrete understanding of numerical relationships.`,
    author: {
      name: 'Ms. Shalini Gupta',
      role: 'Foundational Stage Coordinator',
      credentials: 'Certified Early Childhood & Montessori Specialist'
    },
    metrics: [
      { label: 'Teacher Ratio', val: '1 : 15' },
      { label: 'Sensory Toolkits', val: '120+ Kits' },
      { label: 'Age Group', val: '2.5 – 5 Years' }
    ]
  }
];

