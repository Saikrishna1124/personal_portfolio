
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  grade: string;
}

export interface Skill {
  category: string;
  items: string[];
}
