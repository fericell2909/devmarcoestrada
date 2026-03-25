import { createContext } from 'react';
import type { LanguageContextValue } from './LanguageContext';

export const LanguageContext = createContext<LanguageContextValue | null>(null);
