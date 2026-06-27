export type ProjectCategory = 'Professional' | 'Open Source' | 'Personal';

export interface Project {
  id: number;
  title: string;
  tagline?: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  highlights: string[];
  githubLink?: string;
  liveLink?: string;
  proprietary?: boolean;
  featured?: boolean;
}

export interface Experience {
  id: number;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  stack?: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface OpenSourceContribution {
  id: number;
  repo: string;
  repoUrl: string;
  stars?: string;
  prNumber: number;
  prUrl: string;
  title: string;
  area: string;
  description: string;
  status: 'Merged' | 'Open';
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  bio: string[];
}

export interface PortfolioData {
  personal: Personal;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  openSource: OpenSourceContribution[];
}
