export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
}

export interface Skills {
  development: {
    webFrameworks: string[];
    databases: string[];
    architecture: string[];
    devops: string[];
    cloud: string[];
  };
  languages: {
    primary: string[];
    systems: string[];
    web: string[];
  };
  aiAndML: {
    frameworks: string[];
    providers: string[];
    vectorAndRAG: string[];
    techniques: string[];
    agents: string[];
  };
  tools: {
    development: string[];
    apiAndTesting: string[];
    collaboration: string[];
  };
}

export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  bio: string;
}

export interface PortfolioData {
  personal: Personal;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
  achievements: string[];
}
