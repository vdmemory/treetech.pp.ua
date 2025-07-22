'use client';

import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/common/SocialLinks';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import { getNavLinks } from '@/app/header/getNavLinks';

interface NavigationProps {
    scrollToSection?: (sectionId: string) => void;
}

export function Navigation({ scrollToSection = () => {} }: NavigationProps) {
    const { t } = useLanguage();

    return (
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
    );
}
