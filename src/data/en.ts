import type { NavItem, Experience, Education, Project, Service } from '../types';

export const NAV_ITEMS_EN: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
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
    description: 'End-to-end web application development: from user interfaces with React or Vue to robust APIs with Laravel, Django, or Node.js. I deliver scalable, well-tested, production-ready products.',
    tags: ['React', 'Vue.js', 'Laravel', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Cloud Architecture & AWS',
    description: 'Design and implementation of cloud infrastructure on AWS: Lambda, API Gateway, RDS, S3, CloudFront. CI/CD pipelines with GitHub Actions, Docker containers, and auto-scaling strategies.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Lambda', 'Terraform'],
  },
  {
    id: 'mentoring',
    icon: 'GraduationCap',
    title: 'Mentoring & Code Review',
    description: '1:1 sessions for developers looking to grow: best practices, design patterns, technical interview preparation, and detailed feedback on personal projects.',
    tags: ['1:1 Mentoring', 'Clean Code', 'SOLID', 'Interviews'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'E-commerce Development',
    description: 'Full-featured online stores: product catalog, shopping cart, payment gateway integration (Culqi, PayPal, Stripe), inventory management, and custom admin panel.',
    tags: ['WooCommerce', 'Payments', 'Catalog', 'PHP', 'Vue.js'],
  },
  {
    id: 'apis',
    icon: 'Plug',
    title: 'API Integration & Microservices',
    description: 'Design and integration of REST and GraphQL APIs, third-party service connections, webhooks, and microservice architectures. Experience with payment gateways, ERPs, and SaaS platforms.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'AWS Lambda', 'Node.js'],
  },
  {
    id: 'migration',
    icon: 'ArrowRightLeft',
    title: 'Migration & Modernization',
    description: 'Assessment and modernization of outdated technology platforms: analysis of the current system, architecture redesign, data migration, and progressive refactoring. Regardless of the original stack, I ensure business continuity throughout the entire transition.',
    tags: ['Legacy Systems', 'Refactoring', 'Architecture', 'Data Migration', 'CI/CD'],
  },
];
