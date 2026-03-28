import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';

const seo = {
  es: {
    title: 'Marco Estrada López — Full Stack Developer',
    description: 'Marco Estrada López — Full Stack Developer Senior con 15+ años de experiencia en PHP, Laravel, React, AWS. Disponible para proyectos remotos.',
    keywords: 'Marco Estrada Lopez, Full Stack Developer, PHP, Laravel, React, Vue, AWS, Peru, Remoto, Django, .NET, Node.js, TypeScript',
    ogDescription: 'Desarrollador Full Stack Senior · 15+ años · PHP, Laravel, React, AWS · Disponible para proyectos remotos',
  },
  en: {
    title: 'Marco Estrada López — Full Stack Developer',
    description: 'Marco Estrada López — Senior Full Stack Developer with 15+ years of experience in PHP, Laravel, React, AWS. Available for remote projects.',
    keywords: 'Marco Estrada Lopez, Full Stack Developer, PHP, Laravel, React, Vue, AWS, Peru, Remote, Django, .NET, Node.js, TypeScript',
    ogDescription: 'Senior Full Stack Developer · 15+ years · PHP, Laravel, React, AWS · Available for remote projects',
  },
};

export default function SEOHead() {
  const { locale } = useLanguage();
  const s = seo[locale];

  return (
    <Helmet>
      <html lang={locale} />
      <title>{s.title}</title>
      <meta name="description" content={s.description} />
      <meta name="keywords" content={s.keywords} />
      <meta name="author" content="Marco Estrada López" />
      <link rel="canonical" href="https://devmarcoestrada.com/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={s.title} />
      <meta property="og:description" content={s.ogDescription} />
      <meta property="og:url" content="https://devmarcoestrada.com/" />
      <meta property="og:site_name" content="Marco Estrada López — Portfolio" />
      <meta property="og:image" content="https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/devmarcoestrada.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={s.title} />
      <meta property="og:locale" content={locale === 'es' ? 'es_PE' : 'en_US'} />
      <meta property="og:locale:alternate" content={locale === 'es' ? 'en_US' : 'es_PE'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={s.title} />
      <meta name="twitter:description" content={s.ogDescription} />
      <meta name="twitter:image" content="https://amzn-s3-files-public.s3.us-east-1.amazonaws.com/devmarcoestrada.png" />
      <meta name="twitter:image:alt" content={s.title} />
    </Helmet>
  );
}
