import type { Skill, Certification, Locale } from '../types';
import { NAV_ITEMS_ES, EXPERIENCES_ES, EDUCATION_ES, PROJECTS_ES } from './es';
import { NAV_ITEMS_EN, EXPERIENCES_EN, EDUCATION_EN, PROJECTS_EN } from './en';

export const SKILLS: Skill[] = [
  { name: 'PHP / Laravel', level: 100, category: 'backend' },
  { name: 'C# / ASP.NET MVC', level: 100, category: 'backend' },
  { name: 'JavaScript / TypeScript', level: 100, category: 'frontend' },
  { name: 'React.js', level: 100, category: 'frontend' },
  { name: 'Vue.js', level: 100, category: 'frontend' },
  { name: 'Node.js', level: 100, category: 'backend' },
  { name: 'GraphQL', level: 100, category: 'backend' },
  { name: 'Python / Django / Flask', level: 100, category: 'backend' },
  { name: 'PostgreSQL / MySQL', level: 100, category: 'database' },
  { name: 'SQL Server / Oracle', level: 100, category: 'database' },
  { name: 'AWS', level: 100, category: 'tools' },
  { name: 'Docker', level: 100, category: 'tools' },
  { name: 'Git / Subversion / Github / Gitlab', level: 100, category: 'tools' },
  { name: 'Scrum / Agile', level: 100, category: 'tools' },
  { name: 'CI / CD', level: 100, category: 'tools' },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Scrum Developer Certified (SDC)', issuer: 'SCRUMstudy' },
  { name: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy' },
];

const CONTACT_INFO_ES = {
  location: 'Nuevo Chimbote, Perú',
  phone: '+51 902 530 468',
  email: 'info@devmarcoestrada.com',
  github: 'https://github.com/fericell2909',
  linkedin: 'https://www.linkedin.com/in/marcoestradalopez',
  whatsapp: 'https://api.whatsapp.com/send?phone=51902530468&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n',
};

const CONTACT_INFO_EN = {
  ...CONTACT_INFO_ES,
  location: 'Nuevo Chimbote, Peru',
  whatsapp: 'https://api.whatsapp.com/send?phone=51902530468&text=Hi!%20I%27d%20like%20more%20information',
};

export function getLocalizedData(locale: Locale) {
  if (locale === 'en') {
    return {
      navItems: NAV_ITEMS_EN,
      experiences: EXPERIENCES_EN,
      education: EDUCATION_EN,
      projects: PROJECTS_EN,
      contactInfo: CONTACT_INFO_EN,
    };
  }
  return {
    navItems: NAV_ITEMS_ES,
    experiences: EXPERIENCES_ES,
    education: EDUCATION_ES,
    projects: PROJECTS_ES,
    contactInfo: CONTACT_INFO_ES,
  };
}

// Keep backward-compatible default exports for CONTACT_INFO
export const CONTACT_INFO = CONTACT_INFO_ES;
