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

export type Locale = 'es' | 'en';

export interface Translations {
  hero: {
    badge: string;
    roles: string[];
    bio: string;
    cta: string;
    statYears: string;
    statRepos: string;
    statCerts: string;
    scrollLabel: string;
    presentation: string;
    rolePrefix: string;
  };
  navbar: {
    lightMode: string;
    darkMode: string;
    closeMenu: string;
    openMenu: string;
    mainNav: string;
    mobileNav: string;
  };
  about: {
    tag: string;
    title: string;
    titleAccent: string;
    description1: string;
    description2: string;
    birthDate: string;
    downloadCv: string;
    contactMe: string;
    locationTag: string;
  };
  resume: {
    tag: string;
    title: string;
    titleAccent: string;
    experience: string;
    education: string;
    certifications: string;
    technicalSkills: string;
    frontend: string;
    backend: string;
    databases: string;
    cloudTools: string;
  };
  portfolio: {
    tag: string;
    title: string;
    titleAccent: string;
    filterAll: string;
    filterWeb: string;
    filterEcommerce: string;
    filterWordpress: string;
    viewProject: string;
    screenshotOf: string;
    filtersLabel: string;
  };
  contact: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    footer: string;
    validation: {
      nameMin: string;
      nameMax: string;
      nameLettersOnly: string;
      nameProfanity: string;
      emailInvalid: string;
      emailProfanity: string;
      emailDisposable: string;
      messageMin: string;
      messageMax: string;
      messageCreditCard: string;
      messageProfanity: string;
    };
  };
  notFound: {
    title: string;
    titleAccent: string;
    text: string;
    goHome: string;
    goBack: string;
  };
  whatsapp: {
    ariaLabel: string;
  };
}
