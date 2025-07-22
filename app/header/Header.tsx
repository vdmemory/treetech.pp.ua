import { motion } from 'framer-motion';
import { Navigation } from '@/app/header/Navigation';
import { MobileMenu } from '@/app/header/MobileMenu';
import { useEffect, useState } from 'react';

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
    isMenuOpen?: boolean;
    setIsMenuOpen?: (isOpen: boolean) => void;
}

export function Header({
    scrollToSection,
    isMenuOpen,
    setIsMenuOpen,
}: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/70 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <Navigation
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <MobileMenu
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
            />
        </motion.nav>
    );
}
