// Content data for Path Pilot landing page
export const writes = {
  hero: {
    title: "Navigate Life with Confidence and Independence",
    subtitle:
      "PathPilot is an intelligent navigation companion through voice and AI-enabled guidance. Be safe, digital, and hopeful.",
    cta: "Join the Waitlist",
    ctaSecondary: "Learn More",
  },
  about: {
    title: "What is PathPilot?",
    text: "PathPilot is an AI-powered navigation technology that helps visually impaired individuals navigate their surroundings with confidence, independence, and accessibility. Using cutting-edge computer vision and real-time audio guidance, our platform transforms how people move through the world.",
  },
  whyItMatters: {
    title: "Why it Matters",
    description:
      "Over 300 million people experience blindness. Many have strong desire to remain independent, but struggle with navigation obstacles - limiting access to education, employment, and community.",
    features: [
      {
        title: "79% of people counted",
        description: "Individually report employment hurdles",
        icon: "BriefcaseIcon",
        subPoints: [
          "Limited job opportunities",
          "Career advancement barriers",
          "Workplace accessibility challenges",
        ],
      },
      {
        title: "Commonly turn to unreliable methods",
        description: "Limiting freedom and independence",
        icon: "AlertCircleIcon",
        subPoints: [
          "Inconsistent GPS accuracy",
          "Lack of real-time navigation",
          "Safety concerns with current tools",
        ],
      },
      {
        title: "Social exclusion and isolation",
        description: "Difficulty participating in community activities",
        icon: "UsersIcon",
        subPoints: [
          "Limited access to social events",
          "Reduced community participation",
          "Mental health impact of isolation",
        ],
      },
    ],
  },
  features: [
    {
      title: "Real-time Navigation",
      description:
        "Turn-by-turn voice guidance with real-time obstacle detection",
      icon: "NavigationIcon",
    },
    {
      title: "AI-Powered Detection",
      description: "Intelligent environment awareness and safety analysis",
      icon: "BrainIcon",
    },
    {
      title: "Smart Community",
      description: "Connected network of users, mentors and advocates",
      icon: "UsersIcon",
    },
    {
      title: "Accessible Design",
      description: "Fully accessible interface designed with users in mind",
      icon: "AccessibilityIcon",
    },
    {
      title: "Multi-Language Support",
      description: "Supporting diverse communities worldwide",
      icon: "GlobeIcon",
    },
  ],
  cta: {
    title: "Be the First to Experience PathPilot",
    description:
      "Join our community of innovators and help shape the future of navigation technology.",
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "We'd love to hear from you. Get in touch with us about partnership, press, and accessibility.",
    email: "hqpathpilot@gmail.com",
    phone: "09073775381",
    address: "Abu Zaria, Samaru Campus, Nigeria",
  },
  footer: {
    text: "© 2025 PathPilot. All rights reserved.",
  },
};

interface TeamMember {
  name: string;
  role: string;
  image: string; 
}

export const teamMembers: TeamMember[] = [
  {
    name: "Saidu Hamza",
    role: "CEO",
    image: "/hamza.jpg",
  },
  {
    name: "Salamatu Umar Ardo",
    role: "Project Manager",
    image: "/salma.jpg",
  },
  {
    name: "Abdulrahman Abdulrahim",
    role: "FE Engineer",
    image: "/abdul.jpg",
  },
  {
    name: "Nasir Muhd Kabir",
    role: "AI Engineer",
    image: "/kabiru.jpg",
  },
  {
    name: "Yero Muhd",
    role: "Quality Assurance",
    image: "/yero.jpg",
  },
];
