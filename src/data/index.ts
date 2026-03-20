import type { NavItem, Skill, Experience, Education, Project, Certification } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Resumen', href: '#resume' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' },
];

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

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full Stack Developer Remote',
    company: 'GUX Tech',
    period: 'Enero 2021 – Presente',
    description: 'Desarrollo de soluciones web escalables para clientes internacionales. Liderazgo en proyectos FullStack y despliegue en AWS. Integración con APIs externas y servicios cloud AWS.',
    tech: ['Django', 'Laravel', 'React','Rails','AWS', 'PostgreSQL'],
  },
  {
    role: 'Full Stack Developer Remote',
    company: 'Brandfood',
    period: 'Julio 2020 – Diciembre 2020',
    description: 'Desarrollo y mantenimiento de plataforma e-commerce. Implementación de módulos de pago y gestión de inventario.',
    tech: ['Node.js', 'Vue.js', 'MySQL'],
  },
  {
    role: 'Senior Software Developer',
    company: 'Uladech Católica',
    period: '2018 – 2020',
    description: 'Desarrollo de sistemas de gestión académica y administrativa. Liderazgo de equipo de 5 desarrolladores.',
    tech: ['PHP','C#', '.NET', 'SQL Server', 'JavaScript'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Maestría en Gestión de Tecnologías de Información',
    institution: 'Universidad Nacional del Santa',
    period: '2018 – 2020',
  },
  {
    degree: 'Ingeniero de Sistemas e Informática',
    institution: 'Universidad Nacional del Santa',
    period: '2006 – 2010',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Scrum Developer Certified (SDC)', issuer: 'SCRUMstudy' },
  { name: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy' },
];

export const PROJECTS: Project[] = [
  // {
  //   title: 'Consultorio García',
  //   description: 'Web corporativa con sistema de reserva de citas médicas online.',
  //   image: 'https://fericell2909.github.io/devmarcoestrada/assets/proyectos/web_consultorio.png',
  //   url: 'https://consultoriosgarcia.com/',
  //   tags: ['Web', 'PHP', 'Laravel'],
  //   category: 'web',
  // },
  {
    title: 'Hotel Costabella',
    description: 'Landing page y sistema de reservas para hotel boutique.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/hotelcostabella.png',
    url: 'https://hotelcostabela.com/',
    tags: ['WordPress', 'PHP'],
    category: 'wordpress',
  },
  {
    title: 'Bipolar',
    description: 'Tienda virtual e-commerce con gestión de catálogo y pagos.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/bipolar.png',
    url: 'https://www.bipolar.com.pe',
    tags: ['E-commerce', 'PHP'],
    category: 'ecommerce',
  },
  {
    title: 'Dev Marco Estrada',
    description: 'Portfolio personal con diseño oscuro y animaciones CSS.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/devmarcoestrada.png',
    url: 'https://devmarcoestrada.com/',
    tags: ['HTML', 'CSS', 'JS'],
    category: 'web',
  },
];

export const CONTACT_INFO = {
  location: 'Nuevo Chimbote, Perú',
  phone: '+51 902 530 468',
  email: 'fericell2909@gmail.com',
  github: 'https://github.com/fericell2909',
  linkedin: 'https://www.linkedin.com/in/marcoestradalopez',
  whatsapp: 'https://api.whatsapp.com/send?phone=51902530468&text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n',
};
