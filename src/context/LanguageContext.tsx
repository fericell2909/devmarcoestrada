import { useState, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Locale, Translations, NavItem, Experience, Education, Project } from '../types';
import { translations } from '../i18n';
import { getLocalizedData } from '../data';
import { LanguageContext } from './languageContextDef';

export interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
  t: Translations;
  navItems: NavItem[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  contactInfo: {
    location: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
  };
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('lang') as Locale | null;
  if (stored === 'es' || stored === 'en') return stored;
  return 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('lang', locale);
  }, [locale]);

  const toggleLocale = () => setLocale((l) => (l === 'es' ? 'en' : 'es'));

  const value = useMemo(() => {
    const t = translations[locale];
    const data = getLocalizedData(locale);
    return { locale, toggleLocale, t, ...data };
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
