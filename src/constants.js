// src/constants.js

export const projects = [
  {
    id: 1,
    title: "Clean-Sweep AI",
    img: "/project-cleansweep.png",
    desc: "A web platform combining AI-verified reporting, live heatmaps, an e-Kabadiwala marketplace, and IoT smart bins to create a unified urban waste management system.",
    impact: "This project aims to revolutionize urban waste management in India by creating a transparent, tech-driven ecosystem that connects citizens with municipal authorities and recyclers.",
    tech: "HTML, CSS, JavaScript, Supabase, Google Gemini API, Leaflet, Arduino, IoT",
    link: "https://github.com/SaumyaPratapSingh-cyber/CLEAN-SWEEP-AI",
    prototypeLink: "#", // Add link to prototype if available
  },
  {
    id: 2,
    title: "Krishi-Seva App",
    img: "/project-krishi.png",
    desc: "Empowering Indian Farmers with AI-powered disease detection, easy access to government schemes, smart crop recommendations, and comprehensive farming knowledge—all in one mobile app.",
    impact: "Krishi Seva provides critical, accessible information directly to farmers, helping to increase crop yield, reduce losses, and improve their livelihood through technology.",
    tech: "Flutter, Firebase, GCP, Gemini, AI, Firestore Database",
    link: "https://github.com/SaumyaPratapSingh-cyber/Krishi-Seva-App-for-to-farmers-",
    prototypeLink: "#",
  },
  {
    id: 3,
    title: "Tech Bazaar Ecommerce",
    img: "/project-ecommerce.png",
    desc: "A MERN-stack e-commerce app for selling tech products, with features for browsing, shopping, order management, and a secure admin panel.",
    impact: "This project demonstrates full-stack development capabilities, including secure authentication, state management, and RESTful API design for a complete e-commerce experience.",
    tech: "MERN Stack, Postman API, Vercel",
    link: "https://github.com/SaumyaPratapSingh-cyber/TechBazar---A-MERN-Stack-E-commerce-Application",
    prototypeLink: "#",
  },
  {
    id: 4,
    title: "AKTU-FIRM",
    img: "/project-aktu.png", // Add your image to /public
    desc: "A Flutter-based mobile app for B.Tech CSE students, providing access to notes, PYQs, and quantums. Features an in-built AI for generating concise solutions.",
    impact: "This app serves as a valuable educational tool, demonstrating skills in mobile development and AI integration to support student learning and exam preparation.",
    tech: "Flutter, Firebase, GCP",
    link: "https://github.com/SaumyaPratapSingh-cyber/AKTU-FIRM",
    prototypeLink: "#",
  },
  {
    id: 5,
    title: "Multi-Functional GUI",
    img: "/project-gui.png", // Add your image to /public
    desc: "A versatile Python-based desktop application using Tkinter, bundling multiple tools like a digital clock, calculator, notepad, and web search.",
    impact: "This project showcases core Python scripting skills, GUI development with Tkinter, and the integration of various libraries to create a practical, everyday utility.",
    tech: "Python, Modern TKinter",
    link: "https://github.com/SaumyaPratapSingh-cyber/Multi-Functional-GUI",
    prototypeLink: "#",
  },
];

// src/constants.js

// ... (projects array is above this) ...

export const experience = [
  {
    role: "Rapid Prototyping and Design Thinking Intern",
    company: "Centre for Advanced Studies-Kalam Pragati",
    duration: "August 2025 - September 2025",
    desc: "Spearheaded CleanSweep AI, a data-driven platform linking citizens, authorities, and recyclers for smarter cleanup.",
    certificateLink: "https://lnkd.in/p/gwd9DCqn", // Add your certificate link here
  },
  {
    role: "Core Member",
    company: "GDG Prayagraj",
    duration: "April 2025 - September 2025",
    desc: "Actively drove diverse chapter operations encompassing development, design, and event management to foster community growth.",
    certificateLink: "https://drive.google.com/file/d/19X8nF0b9DmdozUjWztaHH0XjwG_6p8MM/view?usp=sharing", // Add your certificate link here
  },
  {
    role: "Internship Trainee",
    company: "1M1B (1 Million for 1 Billion)",
    duration: "June 2025 - August 2025",
    desc: "Contributed to environmental projects by leveraging Tableau and other analytical tools to visualize impact and support sustainable decision-making.",
    certificateLink: "https://drive.google.com/file/d/1S-I0fopKgTsX5yvzVDGLK9AhQuS9jnxJ/view?usp=sharing", // Add your certificate link here
  },
  {
    role: "Web Development Internship Trainee",
    company: "IBM",
    duration: "July 2025",
    desc: "Developed and deployed a full-stack MERN e-commerce platform, \"Tech Bazaar,\" managing products and authentication via a secure RESTful API.",
    certificateLink: "https://courses.ibmmooc.skillsnetwork.site/certificates/5ec25edf9b204a81a425c9fd3861ea98", // Add your certificate link here
  },
  {
    role: "Graphic Design and Development Internship",
    company: "Padhle Akshay (Edtech Domain)",
    duration: "March 2025 - April 2025",
    desc: "Designed 50+ digital graphics and promotional materials using Figma, resulting in a 15% increase in social media engagement.",
    certificateLink: "https://drive.google.com/file/d/1S_sNQ8UhRy7FteiWJNUtYLoGi6NtcyHF/view?usp=sharing", // Add your certificate link here
  }
];

// ... (education, summary, and skills arrays are below this) ...

// This line must start with "export const"
export const education = [
    {
        degree: "B.Tech, Computer Science",
        institution: "United College of Engineering and Research",
        duration: "2023 - 2027",
        courses: "Key Courses: Data Structures, AI, DBMS, OOPs, Full Stack Web Dev, OS, Machine Learning."
    },
];

export const summary = "I am an aspiring Software Engineer with a passion for building scalable and efficient systems using modern technologies. My expertise spans C++, Python, and cloud-native architectures (BaaS), grounded in a strong understanding of data structures and algorithms. I thrive in dynamic environments, driving projects from conception to deployment, and am committed to continuous learning and community leadership.";

export const skills = [
  {
    title: "Languages",
    items: [
      { name: "Python", logo: "/python.png", proficiency: 85 },
      { name: "C++", logo: "/c++.png", proficiency: 80 },
      { name: "JavaScript", logo: "/js.png", proficiency: 90 },
      { name: "HTML", logo: "/html.png", proficiency: 98 },
      { name: "CSS/Sass", logo: "/css.png", proficiency: 90 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React.js", logo: "/react.png", proficiency: 95 },
      { name: "Node.js", logo: "/node.js.png", proficiency: 90 },
      { name: "Express.js", logo: "/express.png", proficiency: 85 },
      { name: "Flutter", logo: "/flutter.png", proficiency: 75 },
    ],
  },
  {
    title: "Databases & BaaS",
    items: [
      { name: "MongoDB", logo: "/MongoDB.png", proficiency: 80 },
      { name: "Firebase", logo: "/firebase.png", proficiency: 85 },
      { name: "Supabase", logo: "/supabase.png", proficiency: 75 },
    ],
  },
  {
    title: "Design & Tools",
    items: [
      { name: "Figma", logo: "/figma.png", proficiency: 80 },
      { name: "Git & GitHub", logo: "/git.png", proficiency: 90 },
    ],
  },
];