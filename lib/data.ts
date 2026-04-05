export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  overview: string;
  techStack: string[];
  github?: string;
  liveDemo?: string;
}

export const workData: Project[] = [
  {
    id: "company-1",
    title: "COMPANY NAME",
    subtitle: "software engineering intern",
    year: "2025",
    image: "/placeholder-work-1.jpg",
    overview: "Worked on building scalable systems and implementing new features for the platform. Collaborated with cross-functional teams to deliver high-impact projects.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    github: "https://github.com",
  },
  {
    id: "company-2",
    title: "COMPANY NAME",
    subtitle: "research assistant",
    year: "2024-2025",
    image: "/placeholder-work-2.jpg",
    overview: "Conducted research on machine learning applications and contributed to published papers. Developed prototypes and ran experiments.",
    techStack: ["Python", "PyTorch", "TensorFlow", "Jupyter"],
  },
  {
    id: "company-3",
    title: "COMPANY NAME",
    subtitle: "frontend developer",
    year: "2024",
    image: "/placeholder-work-3.jpg",
    overview: "Built user interfaces and improved user experience for web applications. Implemented responsive designs and accessibility features.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    liveDemo: "https://example.com",
  },
];

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "PROJECT ONE",
    subtitle: "ai-powered application",
    year: "2025",
    image: "/placeholder-project-1.jpg",
    overview: "An innovative application leveraging AI to solve real-world problems. Built with modern technologies and best practices.",
    techStack: ["Next.js", "AI SDK", "OpenAI", "Vercel"],
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    id: "project-2",
    title: "PROJECT TWO",
    subtitle: "mobile application",
    year: "2024",
    image: "/placeholder-project-2.jpg",
    overview: "A cross-platform mobile application with intuitive user experience and robust backend integration.",
    techStack: ["React Native", "Firebase", "Node.js"],
    github: "https://github.com",
  },
  {
    id: "project-3",
    title: "PROJECT THREE",
    subtitle: "web platform",
    year: "2024",
    image: "/placeholder-project-3.jpg",
    overview: "A comprehensive web platform designed for collaboration and productivity. Features real-time updates and cloud integration.",
    techStack: ["Vue.js", "GraphQL", "PostgreSQL", "Docker"],
    github: "https://github.com",
    liveDemo: "https://example.com",
  },
  {
    id: "project-4",
    title: "PROJECT FOUR",
    subtitle: "hackathon project",
    year: "2023",
    image: "/placeholder-project-4.jpg",
    overview: "Award-winning hackathon project that addresses sustainability challenges through technology innovation.",
    techStack: ["Python", "TensorFlow", "React", "AWS"],
    github: "https://github.com",
  },
];

export const activitiesData: Project[] = [
  {
    id: "activity-1",
    title: "HACKATHON NAME",
    subtitle: "organizer & participant",
    year: "2024-2025",
    image: "/placeholder-activity-1.jpg",
    overview: "Organized and participated in one of the largest student hackathons. Managed logistics, sponsorships, and mentorship programs.",
    techStack: ["Event Planning", "Leadership", "Community Building"],
  },
  {
    id: "activity-2",
    title: "CLUB NAME",
    subtitle: "president",
    year: "2024",
    image: "/placeholder-activity-2.jpg",
    overview: "Led a student organization focused on technology and innovation. Organized workshops, speaker events, and networking sessions.",
    techStack: ["Leadership", "Public Speaking", "Team Management"],
  },
  {
    id: "activity-3",
    title: "COMPETITION",
    subtitle: "finalist",
    year: "2023",
    image: "/placeholder-activity-3.jpg",
    overview: "Competed in a national competition and reached the finals. Developed innovative solutions under time constraints.",
    techStack: ["Problem Solving", "Presentation", "Teamwork"],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:hello@example.com",
    icon: "email",
  },
];
