'use client';

import { useCallback } from 'react';

type SetIsMenuOpenType = ((isOpen: boolean) => void) | undefined;

export function useScrollToSection(setIsMenuOpen?: SetIsMenuOpenType) {
    const scrollToSection = useCallback(
        (sectionId: string) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            if (setIsMenuOpen) {
                setIsMenuOpen(false);
            }
        },
        [setIsMenuOpen],
    );

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        if (setIsMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [setIsMenuOpen]);

    return { scrollToSection, scrollToTop };
}
