import { useLanguage } from '@/hooks/useLanguage';
import { FadeIn, ScrollReveal } from '@/components/animations/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { motion } from 'framer-motion';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const getProjects = (t: (key: string) => string) => [
    {
        title: t('portfolio.ecommerce.title'),
        category: t('portfolio.ecommerce.category'),
        description: t('portfolio.ecommerce.description'),
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: t('portfolio.healthcare.title'),
        category: t('portfolio.healthcare.category'),
        description: t('portfolio.healthcare.description'),
        image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: t('portfolio.financial.title'),
        category: t('portfolio.financial.category'),
        description: t('portfolio.financial.description'),
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: t('portfolio.security.title'),
        category: t('portfolio.security.category'),
        description: t('portfolio.security.description'),
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: t('portfolio.iot.title'),
        category: t('portfolio.iot.category'),
        description: t('portfolio.iot.description'),
        image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        title: t('portfolio.cloud.title'),
        category: t('portfolio.cloud.category'),
        description: t('portfolio.cloud.description'),
        image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

export function PortfolioSection() {
    const { t } = useLanguage();

    return (
        <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up" className="text-center mb-16">
                    <Badge className="mb-4 bg-green-100 text-green-800">
                        {t('portfolio.badge')}
                    </Badge>
                    <AnimatedText
                        text={t('portfolio.title')}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    />
                    <FadeIn delay={0.4}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t('portfolio.description')}
                        </p>
                    </FadeIn>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getProjects(t).map((project, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={index * 0.1}
                        >
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 border-0">
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-48 object-cover"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                                        />
                                        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 dark:text-gray-300">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
