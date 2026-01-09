export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  achievements: string[];
  tools: string[];
  languages: string[];
  recommendationLetterUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  duration: string;
  gpa?: string;
  coursework?: string[];
  subjects?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  link?: string;
  linkText?: string;
  links?: Array<{ url: string; text: string }>;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  github: string | undefined;
  linkedin: string | undefined;
  email: string;
  location: string;
  phone?: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  education: string;
  interests: string[];
  resumeUrl: string;
  profileImage: string;
}
export type CourseLevel = "Bachelor" | "Master";
export type CourseCategory = "Theory" | "Lab" | "Theorie" | "Labor";

export interface Course {
  id: string;
  title: string;
  level: CourseLevel;
  category?: CourseCategory;
}
