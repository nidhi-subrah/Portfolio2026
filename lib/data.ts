export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  overview: string;
  techStack?: string[];
  companyWebsite?: string;
  github?: string;
  liveDemo?: string;
  keyFeatures?: string[];
  carouselImages?: string[];
  youtube?: string;
  awards?: string[];
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

    •  Developed and deployed a Power App integrated with Dataverse and SQL for real-time shortage tracking, improving supply chain visibility and helping resolve <strong>10+</strong> product shortages per month.`,
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
    title: "STILL THERE?",
    subtitle: "Personalized AI-Study Buddy",
    year: "2026",
    image: "Still-there.jpg",
    overview:
    "An AI-powered study companion that monitors focus in real time and delivers personalized nudges, voice check-ins and structured accountability during study sessions.",

    keyFeatures: [
    "Monitors focus in real time using optional camera-based posture and attention signals.",
    "Sends personalized nudges with a range of adjustable tones.",
    "Supports Pomodoro sessions, voice-based goal setting and other study techniques.",
    "Generates an end-of-session summary with total work time, distraction analysis and suggested remedies.",
    ],
    techStack: ["PostgreSQL", "ElevenLabs", "FastAPI", "Overshoot AI", "TypeScript", "Next.js"],
    github: "https://github.com/nidhi-subrah/still-there-",
    liveDemo: "https://www.youtube.com/watch?v=_n6_pCrBDhA",
  },
  {
    id: "project-4",
    title: "THERAMIND",
    subtitle: "Real-Time AI-Powered Therapist",
    year: "2025",
    image: "TheraMind.png",
    overview:
  "TheraMind is a therapy companion that offers real-time conversational support, daily check-ins and personalized mental health resources.",

keyFeatures: [
  "Provides real-time AI therapy-style conversations through a web interface.",
  "Supports both anonymous and authenticated sign-ins for accessible and flexible use.",
  "Stores and retrieves past chats with MongoDB so users can revisit therapy history and track progress.",
  "Includes daily check-ins to help users reflect on their emotional well-being over time.",
  "Detects concerning behavior patterns and surfaces relevant mental health resources for additional support.",
],
    techStack: ["React.js", "Tailwind CSS", "MongoDB", "Gemini API"],
    github: "https://github.com/nidhi-subrah/ai-therapist",
    liveDemo: "https://www.youtube.com/watch?v=VV4pqjJQuNw",
  },
    {
    id: "project-5",
    title: "SOIL GUARD",
    subtitle: "Smart Soil Irrigation System",
    year: "2025",
    image: "STM32.jpg",
    overview: "Built a portable, low-power irrigation system using STM32 microcontrollers to monitor soil moisture in real time, automatically activating watering below a set threshold and providing LED-based status feedback.",
    keyFeatures: [
  "Developed an automated soil irrigation system prototype with real-time soil moisture detection and ±5% accuracy.",
  "Programmed STM32 microcontrollers in C to trigger pumps within 10 seconds when soil moisture dropped below 30%.",
  "Designed intuitive LED-based feedback to provide clear, user-friendly system status during operation."
],
    techStack: ["C", "STM-32 Nucleo Microcontrollers"],
    github: "https://github.com/nidhi-subrah/Automated-Soil-Irrigation-System",
  },
    {
    id: "project-6",
    title: "PODORA",
    subtitle: "Textbook-to-Podcast Converter",
    year: "2025",
    image: "Podcastify.png",
    overview: "Built a web app that converts textbook files into summarized, natural-sounding podcasts in seconds and includes an interactive AI chatbot to help students ask questions and better understand the material.",
    keyFeatures: [
      "Developed a Vue.js and Flask app that converts PDF and DOCX textbooks into summarized podcast-style audio in under 4 seconds.",
      "Used NLP with spaCy and NLTK to extract key content from study materials before generating audio with the Speechify API.",
      "Built an interactive chatbot with the Voiceflow API that lets students ask questions and receive AI-driven explanations."
    ],
    techStack: ["Python", "SpaCy", "NLTK", "Voiceflow API", "Speechify API", "Vue.js", "Flask"],
    github: "https://github.com/nidhi-subrah/Podcastify",
  },
];

export const activitiesData: Project[] = [
  {
    id: "activity-1",
    title: "SINGING + RECORDING MUSIC",
    subtitle: "Vocalist • Performer • Recording Artist",
    year: "2011-Present",
    image: "/yt.png",
    carouselImages: [
    "/singing-5.png",
    "/singing-7.jpeg",
    "/singing-2.jpeg",
    "/singing-3.jpeg",
    "/singing-6.png",
    "/singing-4.png",
  ],
    overview: "I began singing at the ripe age of 5, performing at the age of 8 and recording music professionally at the age of 10. Since then, I have released two Indian classical albums, performed across Carnatic, Hindustani and Western styles and sung in languages including Kannada, Malayalam, Tamil, Tulu, Konkani, Telugu, Marathi, Hindi, English, French, and Italian. I also share my music on YouTube, where my channel has grown to 4.23K subscribers with videos averaging 500K views.",
    awards: [
  "MusicFest Canada, Nationals - Jazz Band Solo Vocalist Honour Award",
  "'KHNA Super Singer' Senior Title Winner",
  "Flowers TV USA 'Singing Sensation' and Runner Up",
  "2X North America Vishwa Kannada Association (NAVIKA) Teen Idol",
  "2X Winner, Bhavageethe Competition conducted by Raju Ananthaswamy Trust",
  "'Panorama India' Idol Runner Up",
  "2.6M+ total views on YouTube Channel",
  "Royal Conservatory of Music - Level 9 Voice Certificate with Distinction",
],
  techStack: [],
    youtube: "https://www.youtube.com/@NidhiSubrahmanya",
  },
  {
    id: "activity-2",
    title: "MENTORING",
    subtitle: "Waterloo WiCs Technovation • Peer Tutor",
    year: "2020-Present",
    image: "/wics_uw_logo.png",
    carouselImages: [
    "/wics_uw_logo.png",
    "/Technovation-Girls-Canada.png",
  ],
    overview: " I’ve enjoyed mentoring students in math and science since freshman year of high school, helping them turn confusion into confidence! Now, through the University of Waterloo Women in Computer Science (WiCS) Technovation Girls program, I support teams in building thoughtful, polished technical projects from idea to execution.",
    techStack: [],
    companyWebsite: "https://uwaterloo.ca/women-in-computer-science/youth-programs/technovation",
  },
  {
    id: "activity-3",
    title: "PUBLIC SPEAKING",
    subtitle: "Concours d'art Oratoire • Toastmasters International",
    year: "2015-Present",
    image: "/public-speaking.jpeg",
    overview: "I first stepped into public speaking as a shy kid looking for confidence, and it quickly became one of the most defining parts of my growth. In middle school, I competed in French prepared and impromptu speech, advancing to regionals and then placing first among 15+ students to reach the provincial finals with my speech, <em>Le Pouvoir d’un Sourire ~ The Power of a Smile </em>. In high school, I continued that journey through the Toastmasters International Youth Leadership Program, completing two terms and serving as President in 2023. Safe to say, I really do love talking to people now!",
    techStack: [],
    companyWebsite: "https://www.toastmasters.org/education/youth-leadership-program"
  },
  
  {
    id: "activity-4",
    title: "DANCE",
    subtitle: "Bharatanatyam • Bollywood • Contemporary",
    year: "2010-Present",
    image: "/dance-6.png",
    carouselImages:[
    "/dance-6.png",
    "/dance-3.jpeg",
    "/dance-1.png",
    "/dance-4.png",
    ],
    overview: "Some of my earliest memories are tied to dance. I began learning Bharatanatyam at the age of 4, then Kathak and Bollywood at 5, and over the years I’ve performed and competed with dance groups at events like the Toronto Carassauga Festival of Events. What I love most about dance is that it has kept me rooted in culture while still leaving room to explore, experiment and have fun with a variety of dance styles and cultures!",
    techStack: [],
  },
  {
    id: "activity-5",
    title: "INSTRUMENTS",
    subtitle: "9 Instruments and counting!",
    year: "2010-Present",
    image: "/singing-1.jpeg",
    carouselImages:[
    "/singing-1.jpeg",
    "/music.jpeg",
    "/violin-1.jpeg",
    "/violin-2.jpeg",
    "/piano-2.png",
    "/piano-1.png",
    "little-nidhi-dance.mp4"
    ],
    overview: "Alongside singing, music has always been a huge part of my life. I have been involved in band since high school, mainly playing guitar and bass, and outside of school I take lessons in violin, piano and Indian instruments such as harmonium and tabla. Over time, I’ve learned to play a total of nine instruments: guitar, bass, piano, violin, ukelele, recorder, harmonium, tabla and the banjo! Whenever I have some free time, I try to pick up a new instrument...",
    techStack: [],
    companyWebsite: "https://www.rcmusic.com/",
  },
  {
    id: "activity-6",
    title: "WINTER SPORTS",
    subtitle: "Skating • Skiing",
    year: "2015-Present",
    image: "/skating.jpeg",
    carouselImages:[
    "/skating.jpeg",
    "/tobagganing.jpeg",
    ],
    overview: "I’ve been involved in winter sports since I was six, starting with skating lessons alongside my usual swimming lessons at the local community center. Over the years, that grew into a real love for the season, and skiing with friends and family is still one of my favorite things to do!",
    techStack: [],
  },
  {
    id: "activity-7",
    title: "VISUAL ARTS",
    subtitle: "Painting • Sketching",
    year: "2012-Present",
    image: "/visual-arts2.jpeg",
    carouselImages:[
    "/visual-arts2.jpeg",
    "/visual-arts.jpeg",
    ],
    overview: "Painting has always been a calming creative outlet for me, especially when it comes to landscapes and scenes from nature. I began taking art lessons from a young age and have since created many pieces using oil pastels, watercolor, pencil crayon, charcoal and acrylic. It’s a practice that has taught me patience, attention to detail and how to find calm in the process.",
    techStack: [],
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
