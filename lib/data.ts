export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  overview: string;
  techStack: string[];
  companyWebsite?: string;
  github?: string;
  liveDemo?: string;
  keyFeatures?: string[];
}

export const workData: Project[] = [
  {
    id: "company-1",
    title: "VIRTEK VISION INTERNATIONAL INC.",
    subtitle: "Full-Stack Software Developer Intern",
    year: "Jan-Apr 2026",
    image: "/Virtek_Vision.jpeg",
    overview: `Built responsive React and TypeScript features for web app and mobile interfaces integrated with a laser-projection system, enabling FOD capture, inspection workflows and real-time desktop-to-web synchronization.

  • Developed C#/.NET REST APIs for frontend-backend communication.

  • Resolved <strong>75+</strong> Jira tasks & defects and used Bitbucket and Jenkins for CI/CD.

  • Identified <strong>60+</strong> defects and built Python plus Playwright end-to-end automated tests to prevent regressions and improve system reliability.

  • Presented product updates and gave live demos to multiple teams, helping communicate progress and gather feedback.`,
    techStack: ["C#", ".NET", "Typescript", "React", "Python", "Jira", "Bitbucket", "Jenkins", "CI/CD"],
    companyWebsite: "https://virtekvision.com/products/home?view=home",
  },
{
  id: "company-2",
  title: "WATERLOO REALITY LABS",
  subtitle: "Software Developer, Part-time",
  year: "Dec-Apr 2026",
  image: "/Waterloo_Reality_Labs.gif",
  overview: `Contributed as part of the <em>software team</em> for <strong>Universal Gestures</strong>, a project focused on building a Unity package for Meta Quest headsets that enhances hand-tracking gesture recognition for mixed reality applications. My contributions include:

• Replaced binary gesture detection with a multi-class time-series classifier using PyTorch, enabling ranked outputs and improving debugging efficiency by <strong>40%</strong>.

• Implemented a Conv1D model for hand-tracking sequences (1x17 tensors), outputting <strong>top-4 gesture confidences</strong> for Unity VR integration.

• Refactored and optimized model-related code to improve efficiency, readability and maintainability across the gesture classification pipeline.`,
  techStack: ["PyTorch", "TensorFlow", "Unity", "VR/XR"],
  companyWebsite: "https://uwrealitylabs.com/",
},
  {
    id: "company-3",
    title: "GAY LEA",
    subtitle: "AI & Data Analytics Intern",
    year: "May-Aug 2025",
    image: "/Gay_Lea.png",
    overview: `•  Automated pricing approval workflows with Power Automate, reducing manual validation by <strong>60%</strong> and shortening approval turnaround from days to hours.

    •  Built a Microsoft Fabric agent to centralize sales forecasts, purchase orders, and safety metrics data for <strong>200+ employees</strong>.

    •  Developed and deployed a Power App integrated with Dataverse and SQL for real-time shortage tracking, improving supply chain visibility and helping resolve <strong>10+</strong>shortages per month.`,
    techStack: ["T-SQL", "Dataverse", "Power BI","Power Automate", "Power Apps"],
    companyWebsite: "https://www.gaylea.com/",
  },
];

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "NETWORKIFY",
    subtitle: "Interactive Network Visualizer & Graph-Based Referral Path Finder",
    year: "2026",
    image: "networkify.jpg",
    overview:
    "Transforms networking connections into an interactive graph that helps users uncover the strongest referral paths to companies, recruiters and career opportunities.",
    keyFeatures: [
    "Finds the strongest referral path through first, second and third-degree connections.",
    "Visualizes people, companies and relationships in an interactive network graph.",
    "Supports recruiter-only filtering for faster and more targeted networking.",
    "Merges multiple connection datasets to reveal hidden opportunities across expanded networks.",
    "Generates personalized AI-powered coffee chat/intro messages for outreach."
  ],
  techStack: ["Three.js", "FastAPI", "Authlib", "Neo4j","Next.js", "React.js", "Tailwind CSS"],
    github: "https://github.com/nidhi-subrah/HackCanada2026",
    liveDemo: "https://www.youtube.com/watch?v=OFqqsYXrrZY",
  },
  {
    id: "project-2",
    title: "DERMACARE",
    subtitle: "AI-Powered Skincare Scanner",
    year: "2025",
    image: "Dermacare.png",
    overview: "DermaCare helps users instantly scan skincare products, understand ingredients and make safer skincare choices with AI-powered recommendations.",
    keyFeatures: [
  "Scans product barcodes in real time using your device camera.",
  "Retrieves ingredient data and generates quick safety reports.",
  "Flags harmful or irritating ingredients using curated safety rules.",
  "Recommends safer alternatives and skincare tips with AI.",
  "Personalizes product ratings based on skin type and sensitivities.",
],
    techStack: ["Flask", "QuaggaJS", "Python","INCI Beauty API", "Serp API", "Gemini API", "React.js", "Tailwind CSS"],
    github: "https://github.com/nidhi-subrah/DermaCare",
    liveDemo: "https://www.youtube.com/watch?v=j2ykAA4lfdY",
  },
  {
    id: "project-3",
    title: "PROJECT THREE",
    subtitle: "web platform",
    year: "2026",
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
    year: "2025",
    image: "/placeholder-project-4.jpg",
    overview: "Award-winning hackathon project that addresses sustainability challenges through technology innovation.",
    techStack: ["Python", "TensorFlow", "React", "AWS"],
    github: "https://github.com",
  },
    {
    id: "project-5",
    title: "PROJECT FIVE",
    subtitle: "hackathon project",
    year: "2025",
    image: "/placeholder-project-5.jpg",
    overview: "Award-winning hackathon project that addresses sustainability challenges through technology innovation.",
    techStack: ["Python", "TensorFlow", "React", "AWS"],
    github: "https://github.com",
  },
    {
    id: "project-6",
    title: "PROJECT SIX",
    subtitle: "hackathon project",
    year: "2024",
    image: "/placeholder-project-6.jpg",
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
    year: "2025",
    image: "/placeholder-activity-1.jpg",
    overview: "Organized and participated in one of the largest student hackathons. Managed logistics, sponsorships, and mentorship programs.",
    techStack: ["Event Planning", "Leadership", "Community Building"],
  },
  {
    id: "activity-2",
    title: "CLUB NAME",
    subtitle: "president",
    year: "2025",
    image: "/placeholder-activity-2.jpg",
    overview: "Led a student organization focused on technology and innovation. Organized workshops, speaker events, and networking sessions.",
    techStack: ["Leadership", "Public Speaking", "Team Management"],
  },
  {
    id: "activity-3",
    title: "COMPETITION",
    subtitle: "finalist",
    year: "2024",
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
