'use client';

import React, { useEffect, useState } from 'react';
import { translations } from '@/config/translations';
import { LanguageContext } from '@/contexts/LanguageContext';
import { Language } from '@/types/language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (
            savedLanguage &&
            (savedLanguage === 'en' || savedLanguage === 'uk')
        ) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return (
            translations[language][
                key as keyof (typeof translations)[typeof language]
            ] || key
        );
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage: handleSetLanguage, t }}
        >
            {children}
        </LanguageContext.Provider>
    );
}
