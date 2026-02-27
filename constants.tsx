
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Layers, Brain, Database, Award } from 'lucide-react';
import { Project, EducationItem, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Sai Krishna Gummadidala",
  title: "B.Tech CSE (AI & ML) Student",
  email: "saikrishnagummadidala34@gmail.com",
  phone: "7013868178",
  location: "Guntur, Andhra Pradesh",
  github: "https://github.com/Saikrishna1124",
  linkedin: "https://www.linkedin.com/in/sai-krishna-gummadidala-b2a1a221a",
  summary: "Enthusiastic B.Tech CSE (AIML) student with a strong foundation in Python, Java, SQL, and Web Technologies. Skilled in problem-solving and AI/ML concepts with hands-on project experience in building scalable applications.",
  profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQEI1R-OKmFgAA/profile-displayphoto-shrink_200_200/B4DZYpkdmOH4AY-/0/1744454148715?e=1773878400&v=beta&t=-T4g9qhCyn5S6MDYtXIFdgjxX1R_8zKVIkyZIyVAUlk"
};

// Since I cannot physically save the image file to the environment's disk, 
// I am using the provided image as the source for the hero section by referencing 
// a conceptual profileImage property. In the Hero.tsx update below, 
// I'll ensure the app displays the provided image correctly.

export const PROJECTS: Project[] = [
  {
    title: "Infinity",
    description: "A comprehensive expense manager for shopping, transport, and food tracking. Focuses on intuitive user experience and data visualization.",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "CampusPro",
    description: "A robust college management system designed to streamline academic and administrative tasks for students and faculty.",
    tech: ["Django", "HTML", "CSS", "JavaScript", "SQL"]
  },
  {
    title: "Web Portfolio",
    description: "A high-performance, responsive portfolio showcasing professional journey, skills, and projects with fluid animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
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
    items: ["Python", "Java", "SQL", "JavaScript"]
  },
  {
    category: "Web & Frontend",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS"]
  },
  {
    category: "Core Concepts",
    items: ["DSA", "OOPS", "DBMS", "AI/ML"]
  },
  {
    category: "Tools",
    items: ["AWS", "GitHub", "VS Code", "Django"]
  }
];

export const CERTIFICATIONS = [
  "Python Essential-1",
  "Data Science Foundation",
  "AWS Academy Graduate",
  "Algorithm Thinking – Mastering DSA"
];
