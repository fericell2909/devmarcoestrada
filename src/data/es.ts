import type { NavItem, Experience, Education, Project } from '../types';

export const NAV_ITEMS_ES: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Resumen', href: '#resume' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' },
];

export const EXPERIENCES_ES: Experience[] = [
  {
    role: 'Desarrollador Full Stack Senior Remoto',
    company: 'GUX Tech',
    period: 'Enero 2021 – Presente',
    description: 'Desarrollo de soluciones web escalables para clientes internacionales. Liderazgo en proyectos FullStack y despliegue en AWS. Integración con APIs externas y servicios cloud AWS.',
    tech: ['Django', 'Laravel', 'React', 'Rails', 'AWS', 'PostgreSQL'],
  },
  {
    role: 'Desarrollador Full Stack Senior Remoto',
    company: 'Brandfood',
    period: 'Julio 2020 – Diciembre 2020',
    description: 'Desarrollo y mantenimiento de plataforma e-commerce. Implementación de módulos de pago y gestión de inventario.',
    tech: ['Node.js', 'Vue.js', 'MySQL'],
  },
  {
    role: 'Desarrollador de Software Senior',
    company: 'Uladech Católica',
    period: '2018 – 2020',
    description: 'Desarrollo de sistemas de gestión académica y administrativa. Liderazgo de equipo de 5 desarrolladores.',
    tech: ['PHP', 'C#', '.NET', 'SQL Server', 'JavaScript'],
  },
];

export const EDUCATION_ES: Education[] = [
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

export const PROJECTS_ES: Project[] = [
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
