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
    description: 'Construcción de aplicaciones web completas: desde interfaces de usuario con React o Vue hasta APIs robustas con Laravel, Django o Node.js. Entrego productos escalables, bien testeados y listos para producción.',
    tags: ['React', 'Vue.js', 'Laravel', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Arquitectura Cloud & AWS',
    description: 'Diseño e implementación de infraestructura cloud en AWS: Lambda, API Gateway, RDS, S3, CloudFront. Pipelines CI/CD con GitHub Actions, contenedores Docker y estrategias de escalabilidad automática.',
    tags: ['AWS', 'Docker', 'CI/CD', 'Lambda', 'Terraform'],
  },
  {
    id: 'mentoring',
    icon: 'GraduationCap',
    title: 'Mentoría & Code Review',
    description: 'Sesiones 1:1 para desarrolladores que quieren crecer: buenas prácticas, patrones de diseño, preparación para entrevistas técnicas y revisión de proyectos personales con feedback detallado.',
    tags: ['1:1 Mentoring', 'Clean Code', 'SOLID', 'Entrevistas'],
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'Desarrollo E-commerce',
    description: 'Tiendas virtuales completas: catálogo de productos, carrito, integración con pasarelas de pago (Culqi, PayPal, Stripe), gestión de inventario y panel de administración personalizado.',
    tags: ['WooCommerce', 'Pagos', 'Catálogo', 'PHP', 'Vue.js'],
  },
  {
    id: 'apis',
    icon: 'Plug',
    title: 'Integración de APIs & Microservicios',
    description: 'Diseño e integración de APIs REST y GraphQL, conexión con servicios de terceros, webhooks y arquitecturas de microservicios. Experiencia con pasarelas de pago, ERPs y plataformas SaaS.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'AWS Lambda', 'Node.js'],
  },
  {
    id: 'migration',
    icon: 'ArrowRightLeft',
    title: 'Migración y Modernización',
    description: 'Evaluación y modernización de plataformas tecnológicas obsoletas: análisis del sistema actual, rediseño de arquitectura, migración de datos y refactoring progresivo. Sin importar el stack de origen, garantizo continuidad del negocio durante toda la transición.',
    tags: ['Legacy Systems', 'Refactoring', 'Arquitectura', 'Migración de Datos', 'CI/CD'],
  },
];
