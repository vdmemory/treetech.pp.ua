import { FadeIn } from '@/components/animations/ScrollReveal';
import { SocialLinks } from '@/components/common/SocialLinks';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { configCompany } from '@/config/configCompany';

const getFooterLinks = (t: (key: string) => string) => [
    {
        title: t('footer.services.title'),
        items: [
            {
                title: t('footer.services.software'),
                key: 'services',
            },
            {
                title: t('footer.services.security'),
                key: 'services',
            },
            {
                title: t('footer.services.mobile'),
                key: 'services',
            },
            {
                title: t('footer.services.cloud'),
                key: 'services',
            },
        ],
    },
    {
        title: t('footer.company.title'),
        items: [
            {
                title: t('footer.company.about'),
                key: 'about',
            },
            {
                title: t('footer.company.team'),
                key: 'team',
            },
            {
                title: t('footer.company.projects'),
                key: 'portfolio',
            },
            {
                title: t('footer.company.contact'),
                key: 'contact',
            },
        ],
    },
];

const getListPararams = (itemIndex: number) => ({
    initial: {
        opacity: 0,
        x: -20,
    },
    whileInView: {
        opacity: 1,
        x: 0,
    },
    transition: {
        duration: 0.3,
        delay: itemIndex * 0.1,
    },
    whileHover: {
        x: 5,
        color: '#60a5fa',
    },
});

interface FooterProps {
    scrollToSection?: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
    const { t, language } = useLanguage();

    return (
        <footer className="bg-black dark:bg-gray-950 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between p-6 md:flex-row flex-col gap-8">
                    <FadeIn>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            {configCompany.name}
                        </div>
                        <p className="text-gray-400 dark:text-gray-500 mb-6">
                            {language === 'en'
                                ? configCompany.infoEng +
                                  ', ' +
                                  configCompany.addressEng
                                : configCompany.info +
                                  ', ' +
                                  configCompany.address}
                        </p>
                        <SocialLinks variant="footer" />
                    </FadeIn>

                    <div
                        className={
                            'flex flex-row gap-6 md:flex-row w-full md:justify-end'
                        }
                    >
                        {getFooterLinks(t).map((section, index) => (
                            <FadeIn
                                key={section.title}
                                delay={0.2 + index * 0.1}
                            >
                                <div>
                                    <h4 className="font-semibold mb-4 text-white dark:text-gray-200">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                                        {section.items.map(
                                            (item, itemIndex) => (
                                                <motion.li
                                                    key={item.key}
                                                    {...getListPararams(
                                                        itemIndex,
                                                    )}
                                                    className="cursor-pointer transition-colors"
                                                >
                                                    <a
                                                        href={`#${item.key}`}
                                                        onClick={() =>
                                                            scrollToSection?.(
                                                                item.key,
                                                            )
                                                        }
                                                        className="hover:text-blue-400 dark:hover:text-blue-500"
                                                    >
                                                        {item.title}
                                                    </a>
                                                </motion.li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500"
                >
                    <p>
                        {`© ${new Date().getFullYear()} ${configCompany.name}. `}
                        {t('footer.copyright')}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
