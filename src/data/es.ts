import type { NavItem, Experience, Education, Project, Service } from '../types';

export const NAV_ITEMS_ES: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Resumen', href: '#resume' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
  { label: 'Blog', href: '/blog' },
];

export const EXPERIENCES_ES: Experience[] = [
  {
    role: 'Desarrollador Full Stack — Especialista Python & React',
    company: 'GUX (Great User Experience)',
    period: 'Ene 2021 – Actualidad',
    description: 'Desarrollé tiendas virtuales de extremo a extremo con React y Python, implementé despliegues serverless en AWS, documenté APIs REST y modernicé sistemas legacy con pipelines CI/CD y buenas prácticas de testing.',
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Django REST Framework', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Desarrollador de Software Senior',
    company: 'Universidad Los Ángeles de Chimbote',
    period: 'Dic 2018 – Dic 2020',
    description: 'Construí módulos de gestión académica y administrativa con Python y React, automatizando procesos institucionales y aplicando flujos de datos en la nube.',
    tech: ['React', 'Python', 'Django REST Framework', 'AWS', 'PostgreSQL', 'SQL Server'],
  },
  {
    role: 'Analista Programador de Sistemas',
    company: 'Peruana de Combustible SAC',
    period: 'Nov 2012 – Nov 2018',
    description: 'Desarrollé sistemas de costos y presupuestos para cinco plantas, mejoré los controles de producción y entregué soluciones POS y facturación electrónica con integraciones de pago y despliegues CI/CD.',
    tech: ['Python', 'Django', 'PHP', 'Laravel', 'MySQL', 'SQL Server', 'AWS'],
  },
];

export const EDUCATION_ES: Education[] = [
  {
    degree: 'Ingeniería de Sistemas e Informática (CIP 202610) — Titulado',
    institution: 'Universidad Nacional del Santa',
    period: '2006 – 2010',
  },
  {
    degree: 'Maestría en Gestión de TI — Graduado',
    institution: 'Universidad Nacional del Santa',
    period: '2018 – 2020',
  },
];

export const PROJECTS_ES: Project[] = [
  {
    title: 'Hotel Costabella',
    description: 'Landing page y sistema de reservas para hotel boutique.',
    longDescription: 'Desarrollo completo del sitio web y sistema de reservas en línea para Hotel Costabella, un hotel boutique ubicado en la costa peruana. Incluye integración con pasarela de pagos, gestión de disponibilidad en tiempo real y panel de administración personalizado.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/hotelcostabella.png',
    url: 'https://hotelcostabela.com/',
    tags: ['WordPress', 'PHP', 'MySQL'],
    category: 'wordpress',
  },
  {
    title: 'Bipolar',
    description: 'Tienda virtual e-commerce con gestión de catálogo y pagos.',
    longDescription: 'Plataforma e-commerce completa para tienda de ropa Bipolar. Desarrollo de catálogo de productos con filtros avanzados, carrito de compras, integración con múltiples métodos de pago (Culqi, PayPal), gestión de inventario y panel de administración para el equipo de ventas.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/bipolar.png',
    url: 'https://www.bipolar.com.pe',
    tags: ['E-commerce', 'PHP', 'Vue.js', 'MySQL'],
    category: 'ecommerce',
  },
  {
    title: 'Dev Marco Estrada',
    description: 'Portfolio personal con diseño oscuro y animaciones CSS.',
    longDescription: 'Diseño y desarrollo del portafolio personal con estética editorial oscura. Construido con React 19, TypeScript y Vite. Incluye animaciones con Framer Motion, soporte bilingüe (ES/EN), modo claro/oscuro, formulario de contacto con validación y despliegue automatizado en AWS.',
    image: 'https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/devmarcoestrada.png',
    url: 'https://devmarcoestrada.com/',
    repoUrl: 'https://github.com/fericell2909',
    tags: ['React', 'TypeScript', 'Vite', 'AWS'],
    category: 'web',
  },
];

export const SERVICES_ES: Service[] = [
  {
    id: 'fullstack',
    icon: 'Code2',
    title: 'Desarrollo Web Full Stack',
    description: 'Aplicaciones completas con React y Python, desde interfaces modernas hasta APIs robustas, despliegues en la nube y buenas prácticas de ingeniería.',
    tags: ['React', 'Python', 'FastAPI', 'Django', 'AWS'],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Arquitectura Cloud & AWS',
    description: 'Diseño e implementación de infraestructura en AWS con Lambda, API Gateway, RDS, S3, CloudFront, Docker y pipelines CI/CD.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Lambda', 'Serverless'],
  },
  {
    id: 'mentoring',
    icon: 'GraduationCap',
    title: 'Mentoría & Code Review',
    description: 'Mentoría técnica y revisión de código para desarrolladores que quieren crecer con hábitos sólidos de ingeniería, patrones de diseño y mejor entrega.',
    tags: ['1:1 Mentoring', 'Clean Code', 'SOLID', 'Entrevistas'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'Desarrollo E-commerce',
    description: 'Tiendas virtuales completas con gestión de catálogo, pagos, flujos de inventario y paneles de administración personalizados.',
    tags: ['E-commerce', 'Pagos', 'Catálogo', 'PHP', 'Vue.js'],
  },
  {
    id: 'apis',
    icon: 'Plug',
    title: 'Integración de APIs & Microservicios',
    description: 'Diseño e integración de APIs REST, servicios de terceros, webhooks e integraciones cloud para procesos escalables.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'AWS Lambda', 'Node.js'],
  },
  {
    id: 'migration',
    icon: 'ArrowRightLeft',
    title: 'Migración y Modernización',
    description: 'Evaluación y modernización de plataformas legacy con rediseño de arquitectura, migración de datos y refactoring progresivo con mínima interrupción.',
    tags: ['Legacy Systems', 'Refactoring', 'Arquitectura', 'Migración de Datos', 'CI/CD'],
  },
];
