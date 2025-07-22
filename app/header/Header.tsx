'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/app/header/Navigation';
import { MobileMenu } from '@/app/header/MobileMenu';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { configCompany } from '@/config/configCompany';
import logo from '../../assets/logo.png';

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div
                            className="flex-shrink-0 cursor-pointer flex items-center space-x-2 px-1"
                            onClick={() => scrollToSection?.('home')}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo.src}
                                alt="Company Logo"
                                className="w-14"
                            />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {configCompany.name}
                            </span>
                        </div>
                    </div>

                    <Navigation scrollToSection={scrollToSection} />

                    <div className="md:hidden">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen?.(!isMenuOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            <MobileMenu
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
            />
        </motion.nav>
    );
}
