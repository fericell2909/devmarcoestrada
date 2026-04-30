import type { Skill, Certification, Locale, Testimonial } from '../types';
import { NAV_ITEMS_ES, EXPERIENCES_ES, EDUCATION_ES, PROJECTS_ES, SERVICES_ES } from './es';
import { NAV_ITEMS_EN, EXPERIENCES_EN, EDUCATION_EN, PROJECTS_EN, SERVICES_EN } from './en';

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
      services: SERVICES_EN,
      contactInfo: CONTACT_INFO_EN,
    };
  }
  return {
    navItems: NAV_ITEMS_ES,
    experiences: EXPERIENCES_ES,
    education: EDUCATION_ES,
    projects: PROJECTS_ES,
    services: SERVICES_ES,
    contactInfo: CONTACT_INFO_ES,
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Hebert Galué',
    role: 'Socio & Senior Backend Developer',
    company: 'Citorush System',
    text: 'Marco es un excelente profesional y mucha mejor persona. Es una eminencia en la gestión de proyectos, especialmente en el papel de Arquitecto y analista técnico funcional.',
    textEn: 'Marco is an excellent professional and an even better person. He is an authority in project management, especially in the role of Software Architect and functional technical analyst.',
    avatar: '/testimonials/hebert-galue.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/hebertgalue/',
  },
  {
    name: 'Ruben Dario Carvajal Herrera',
    role: 'Software Engineer',
    text: 'Siempre con ganas de aprender y dispuesto a colaborar. Es una persona que con gran dominio en el desarrollo de software.',
    textEn: 'Always eager to learn and ready to collaborate. He is someone with great mastery in software development.',
    avatar: '/testimonials/ruben-carvajal.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/ruben-carvajal-herrera/',
  },
  {
    name: 'Valeria Cerrada Cortes',
    role: 'Sr. Product Designer & UX/UI Designer',
    text: 'Excelente persona y compañero de trabajo, es un gran programador, con muchas ideas innovadoras y siempre en constante crecimiento. Muy proactivo y responsable en nuevos desafíos e involucrado en el equipo. Definitivamente lo recomiendo.',
    textEn: 'Excellent person and coworker, he is a great programmer with many innovative ideas and always in constant growth. Very proactive and responsible in new challenges and involved with the team. I definitely recommend him.',
    avatar: '/testimonials/valeria-cerrada.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/valeriacerrada/',
  },
  {
    name: 'Mr Omar',
    role: 'Database Administrator',
    text: 'Marco Estrada es un profesional a carta cabal, con el que se puede realizar proyectos de toda índole en TI. Su metodología y capacidad para afrontar retos con excelencia para mí es de sus mejores virtudes.',
    textEn: 'Marco Estrada is a thorough professional with whom you can carry out IT projects of all kinds. His methodology and ability to tackle challenges with excellence are, in my opinion, among his greatest strengths.',
    avatar: '/testimonials/mr-omar.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/mr-omar-50134210/',
  },
];

// Keep backward-compatible default exports for CONTACT_INFO
export const CONTACT_INFO = CONTACT_INFO_ES;
