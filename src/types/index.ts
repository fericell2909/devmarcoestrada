export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tech?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  category: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}
