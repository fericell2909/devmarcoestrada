import type { NavItem, Experience, Education, Project, Service } from '../types';

export const NAV_ITEMS_EN: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '/blog' },
];

export const EXPERIENCES_EN: Experience[] = [
  {
    role: 'Full Stack Developer — Python & React Specialist',
    company: 'GUX (Great User Experience)',
    period: 'Jan 2021 – Present',
    description: 'Built end-to-end e-commerce solutions with React and Python, delivered serverless deployments on AWS, documented REST APIs, and modernized legacy systems with CI/CD and testing practices.',
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Django REST Framework', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Senior Software Developer',
    company: 'Universidad Los Ángeles de Chimbote',
    period: 'Dec 2018 – Dec 2020',
    description: 'Developed academic and administrative management modules using Python and React, automating institutional processes and implementing cloud-based data workflows.',
    tech: ['React', 'Python', 'Django REST Framework', 'AWS', 'PostgreSQL', 'SQL Server'],
  },
  {
    role: 'Systems Programmer Analyst',
    company: 'Peruana de Combustible SAC',
    period: 'Nov 2012 – Nov 2018',
    description: 'Delivered cost and budgeting systems for five plants, improved production controls, and created POS and e-invoicing solutions with payment integrations and CI/CD deployment.',
    tech: ['Python', 'Django', 'PHP', 'Laravel', 'MySQL', 'SQL Server', 'AWS'],
  },
];

export const EDUCATION_EN: Education[] = [
  {
    degree: 'Systems & Computer Engineering (CIP 202610) — Graduated',
    institution: 'Universidad Nacional del Santa',
    period: '2006 – 2010',
  },
  {
    degree: "Master's in Information Technology Management — Graduated",
    institution: 'Universidad Nacional del Santa',
    period: '2018 – 2020',
  },
];

export const PROJECTS_EN: Project[] = [
  {
    title: 'Hotel Costabella',
    description: 'Landing page and booking system for a boutique hotel.',
    longDescription: 'Full development of the website and online booking system for Hotel Costabella, a boutique hotel on the Peruvian coast. Includes payment gateway integration, real-time availability management, and a custom admin panel.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/hotelcostabella.png',
    url: 'https://hotelcostabela.com/',
    tags: ['WordPress', 'PHP', 'MySQL'],
    category: 'wordpress',
  },
  {
    title: 'Bipolar',
    description: 'E-commerce store with catalog management and payments.',
    longDescription: 'Full e-commerce platform for Bipolar clothing store. Developed a product catalog with advanced filters, shopping cart, integration with multiple payment methods (Culqi, PayPal), inventory management, and an admin panel for the sales team.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/bipolar.png',
    url: 'https://www.bipolar.com.pe',
    tags: ['E-commerce', 'PHP', 'Vue.js', 'MySQL'],
    category: 'ecommerce',
  },
  {
    title: 'Dev Marco Estrada',
    description: 'Personal portfolio with dark editorial design and animations.',
    longDescription: 'Design and development of a personal portfolio with a dark editorial aesthetic. Built with React 19, TypeScript, and Vite. Features Framer Motion animations, bilingual support (ES/EN), light/dark mode, a validated contact form, and automated deployment on AWS.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/devmarcoestrada.png',
    url: 'https://devmarcoestrada.com/',
    repoUrl: 'https://github.com/fericell2909',
    tags: ['React', 'TypeScript', 'Vite', 'AWS'],
    category: 'web',
  },
];

export const SERVICES_EN: Service[] = [
  {
    id: 'fullstack',
    icon: 'Code2',
    title: 'Full Stack Web Development',
    description: 'End-to-end applications built with React and Python, from modern frontends to robust APIs, cloud deployment, and quality engineering practices.',
    tags: ['React', 'Python', 'FastAPI', 'Django', 'AWS'],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Cloud Architecture & AWS',
    description: 'Design and implementation of cloud infrastructure on AWS with Lambda, API Gateway, RDS, S3, CloudFront, Docker, and CI/CD pipelines.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Lambda', 'Serverless'],
  },
  {
    id: 'mentoring',
    icon: 'GraduationCap',
    title: 'Mentoring & Code Review',
    description: 'Technical mentoring and code review for developers who want to grow with strong engineering habits, design patterns, and better delivery practices.',
    tags: ['1:1 Mentoring', 'Clean Code', 'SOLID', 'Interviews'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce Development',
    description: 'Full-featured online stores with catalog management, payments, inventory workflows, and custom administration panels.',
    tags: ['E-commerce', 'Payments', 'Catalog', 'PHP', 'Vue.js'],
  },
  {
    id: 'apis',
    icon: 'Plug',
    title: 'API Integration & Microservices',
    description: 'Design and integration of REST APIs, third-party services, webhooks, and cloud-native integrations for scalable business processes.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'AWS Lambda', 'Node.js'],
  },
  {
    id: 'migration',
    icon: 'ArrowRightLeft',
    title: 'Migration & Modernization',
    description: 'Assessment and modernization of legacy platforms with architecture redesign, data migration, and progressive refactoring with minimal disruption.',
    tags: ['Legacy Systems', 'Refactoring', 'Architecture', 'Data Migration', 'CI/CD'],
  },
];
