import { FadeIn } from '@/components/animations/ScrollReveal';
import { SocialLinks } from '@/components/common/SocialLinks';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const getFooterLinks = (t: (key: string) => string) => [
    {
        title: t('footer.services.title'),
        items: [
            t('footer.services.software'),
            t('footer.services.security'),
            t('footer.services.mobile'),
            t('footer.services.cloud'),
        ],
    },
    {
        title: t('footer.company.title'),
        items: [
            t('footer.company.about'),
            t('footer.company.team'),
            t('footer.company.careers'),
            t('footer.company.contact'),
        ],
    },
    {
        title: t('footer.resources.title'),
        items: [
            t('footer.resources.blog'),
            t('footer.resources.cases'),
            t('footer.resources.docs'),
            t('footer.resources.support'),
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

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-black dark:bg-gray-950 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <FadeIn>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            AgileTech
                        </div>
                        <p className="text-gray-400 dark:text-gray-500 mb-6">
                            {t('footer.description')}
                        </p>
                        <SocialLinks variant="footer" />
                    </FadeIn>

                    {getFooterLinks(t).map((section, index) => (
                        <FadeIn key={section.title} delay={0.2 + index * 0.1}>
                            <div>
                                <h4 className="font-semibold mb-4 text-white dark:text-gray-200">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                                    {section.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={item}
                                            {...getListPararams(itemIndex)}
                                            className="cursor-pointer transition-colors"
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500"
                >
                    <p>{t('footer.copyright')}</p>
                </motion.div>
            </div>
        </footer>
    );
}
