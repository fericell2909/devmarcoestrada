import type { NavItem, Experience, Education, Project } from '../types';

export const NAV_ITEMS_EN: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCES_EN: Experience[] = [
  {
    role: 'Remote Senior Full Stack Developer',
    company: 'GUX Tech',
    period: 'January 2021 – Present',
    description: 'Development of scalable web solutions for international clients. Leadership in FullStack projects and AWS deployment. Integration with external APIs and AWS cloud services.',
    tech: ['Django', 'Laravel', 'React', 'Rails', 'AWS', 'PostgreSQL'],
  },
  {
    role: 'Remote Senior Full Stack Developer',
    company: 'Brandfood',
    period: 'July 2020 – December 2020',
    description: 'Development and maintenance of e-commerce platform. Implementation of payment modules and inventory management.',
    tech: ['Node.js', 'Vue.js', 'MySQL'],
  },
  {
    role: 'Remote Senior Full Stack Developer',
    company: 'Uladech Católica',
    period: '2018 – 2020',
    description: 'Development of academic and administrative management systems. Leadership of a team of 5 developers.',
    tech: ['PHP', 'C#', '.NET', 'SQL Server', 'JavaScript'],
  },
];

export const EDUCATION_EN: Education[] = [
  {
    degree: "Master's in Information Technology Management",
    institution: 'Universidad Nacional del Santa',
    period: '2018 – 2020',
  },
  {
    degree: 'Systems & Computer Engineer',
    institution: 'Universidad Nacional del Santa',
    period: '2006 – 2010',
  },
];

export const PROJECTS_EN: Project[] = [
  {
    title: 'Hotel Costabella',
    description: 'Landing page and booking system for a boutique hotel.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/hotelcostabella.png',
    url: 'https://hotelcostabela.com/',
    tags: ['WordPress', 'PHP'],
    category: 'wordpress',
  },
  {
    title: 'Bipolar',
    description: 'E-commerce store with catalog management and payments.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/bipolar.png',
    url: 'https://www.bipolar.com.pe',
    tags: ['E-commerce', 'PHP'],
    category: 'ecommerce',
  },
  {
    title: 'Dev Marco Estrada',
    description: 'Personal portfolio with dark design and CSS animations.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/devmarcoestrada.png',
    url: 'https://devmarcoestrada.com/',
    tags: ['HTML', 'CSS', 'JS'],
    category: 'web',
  },
];
