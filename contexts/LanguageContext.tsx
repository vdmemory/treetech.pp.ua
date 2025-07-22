'use client';

import { createContext } from 'react';
import { Language } from '@/types/language';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);
