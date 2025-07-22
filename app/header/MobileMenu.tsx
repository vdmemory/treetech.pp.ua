import { AnimatePresence, motion } from 'framer-motion';
import { SocialLinks } from '@/components/common/SocialLinks';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import { getNavLinks } from '@/app/header/getNavLinks';

interface MobileMenuProps {
    scrollToSection?: (sectionId: string) => void;
    isMenuOpen?: boolean;
}

export function MobileMenu({
    scrollToSection = () => {},
    isMenuOpen = false,
}: MobileMenuProps) {
    const { t } = useLanguage();

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {getNavLinks(t).map((item, index) => (
                            <motion.button
                                key={item.key}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                onClick={() =>
                                    scrollToSection(item.key.toLowerCase())
                                }
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                        <div className="px-3 py-2 flex items-center justify-between space-x-4 border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                            <SocialLinks variant="header" />
                            {/*<ThemeToggle />*/}
                            <LanguageSwitcher />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
