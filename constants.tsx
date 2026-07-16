
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Layers, Brain, Database, Award } from 'lucide-react';
import { Project, EducationItem, Skill, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Sai Krishna Gummadidala",
  title: "B.Tech CSE (AI & ML) Student",
  email: "saikrishnagummadidala34@gmail.com",
  phone: "7013868178",
  location: "Guntur, Andhra Pradesh",
  github: "https://github.com/Saikrishna1124",
  linkedin: "https://www.linkedin.com/in/sai-krishna-gummadidala-261984354/",
  summary: "Enthusiastic B.Tech CSE (AIML) student with a strong foundation in Python, Java, SQL, and Web Technologies. Skilled in problem-solving and AI/ML concepts with hands-on project experience in building scalable applications.",
  profileImage: "/profile.jpg",
  resumeUrl: "/sai_Resume_.pdf"
};

// Since I cannot physically save the image file to the environment's disk, 
// I am using the provided image as the source for the hero section by referencing 
// a conceptual profileImage property. In the Hero.tsx update below, 
// I'll ensure the app displays the provided image correctly.

export const PROJECTS: Project[] = [
  {
    title: "CareerMap -- AI Career Guidance Platform",
    description: "Built an AI-powered career platform that analyzes resumes, identifies skill gaps, and recommends personalized career paths. Integrated the Gemini API to generate personalized roadmaps and learning recommendations for each user. Developed interactive dashboards with Recharts and a Node.js/PostgreSQL backend to visualize career insights and skill-gap analysis.",
    tech: ["TypeScript", "React.js", "Tailwind CSS", "Node.js", "Express.js", "Drizzle ORM", "PostgreSQL", "Gemini AI", "Recharts"],
    github: "https://github.com/Saikrishna1124/CareerMap",
    live: "https://careermap-c2vx.onrender.com/"
  },
  {
    title: "NexusLearn -- AI Powered Smart E-Learning Platform",
    description: "Built a full-stack e-learning platform with JWT authentication, real-time Firebase synchronization, and support for 100+ learning resources. Integrated the Gemini API to generate personalized learning recommendations for each user. Designed a responsive frontend with interactive 3D elements, improving user engagement and overall experience.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "Firebase", "Gemini AI"],
    github: "https://github.com/Saikrishna1124/NexusLearn",
    live: "https://nexus-learn-lyart.vercel.app/"
  },
  {
    title: "CampusPro -- College Management System",
    description: "Developed a college management system with secure authentication, attendance management, student records, and academic workflows. Designed the relational database schema in Django ORM for fast lookups and secure data handling.",
    tech: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Saikrishna1124/CampusPro",
    live: "https://campus-pro-zfrb-jsklfghsq-saikrishna1124s-projects.vercel.app/"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    year: "2023 – 2027",
    degree: "B.Tech CSE (AI & ML)",
    institution: "Parul University, Vadodara",
    grade: "CGPA: 8.01"
  },
  {
    year: "2021 – 2023",
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya College, Guntur",
    grade: "94%"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks",
    items: ["Django", "Flask", "React.js", "Node.js", "Express.js"]
  },
  {
    category: "AI Tools",
    items: ["Google Gemini API", "Prompt Engineering"]
  },
  {
    category: "Web Technologies",
    items: ["HTML5", "CSS3", "Tailwind CSS", "REST APIs"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "AWS", "Vercel", "Render", "VS Code"]
  },
  {
    category: "Core Concepts",
    items: ["DSA", "OOP", "DBMS", "SDLC", "Agile", "Authentication", "Deployment", "Problem Solving"]
  }
];

export const EXPERIENCE = [
  {
    role: "Python Developer Intern",
    company: "Elevate Labs (Ministry of MSME, Govt. of India)",
    period: "Sep 2025 – Nov 2025",
    description: "Successfully completed a Python Developer Internship under the Ministry of MSME, Govt. of India, at Elevate Labs. Worked on real-world Python development projects. Recognized as 'Best Performer' for exceptional dedication and analytical thinking."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Python Essentials 1", url: "https://drive.google.com/file/d/10Bsm0t5AJYcDeUDcfg-SEsxk2FFEFg8M/view?usp=sharing" },
  { name: "Data Science", url: "https://drive.google.com/file/d/1pVM_xqlKjgAxRreWuMZDmxV75y52HWg2/view?usp=sharing" },
  { name: "AWS Academy Graduate", url: "https://drive.google.com/file/d/19KU2JP--vHTSRRRsOSGjwKcnrnpEcg0z/view?usp=sharing" },
  { name: "Mastering DSA", url: "https://drive.google.com/file/d/1c9_Haq1vhq11KhCyYdFVkhtQLmq6MgLg/view?usp=sharing" },
  { name: "Generative AI for All", url: "https://drive.google.com/file/d/1-pKfCTjm7mTXxdV-yPmZq-HzARzWKv42/view?usp=sharing" },
  { name: "Computer Networks and Internet Protocol", url: "https://drive.google.com/file/d/1kkwsqMGgTgLUdz6ATN-6f4Iss8k0Uwd4/view?usp=sharing" },
  { name: "Best Performer Award", url: "https://drive.google.com/file/d/1X8oft_aRl5cBs3hmkHmy7-f2qKxqVHML/view?usp=sharing" }
];
