'use client';

import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/common/SocialLinks';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { getNavLinks } from '@/app/header/getNavLinks';

interface NavigationProps {
    scrollToSection?: (sectionId: string) => void;
    isMenuOpen?: boolean;
    setIsMenuOpen?: (isOpen: boolean) => void;
}

export function Navigation({
    scrollToSection = () => {},
    isMenuOpen = false,
    setIsMenuOpen = () => {},
}: NavigationProps) {
    const { t } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AgileTech
                        </span>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-6">
                        {getNavLinks(t).map((item, index) => (
                            <motion.button
                                key={item.key}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() =>
                                    scrollToSection?.(item.key.toLowerCase())
                                }
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                        <div className="flex items-center space-x-2 border-l border-gray-300 dark:border-gray-600 pl-6">
                            <SocialLinks variant="header" />
                            {/*<ThemeToggle />*/}
                        </div>
                        <div className="flex items-center space-x-2 border-l border-gray-300 dark:border-gray-600 pl-6">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>

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
    );
}
