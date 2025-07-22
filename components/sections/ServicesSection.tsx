'use client';

import { motion } from 'framer-motion';
import { Code, Shield, Smartphone, Globe } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollReveal, FadeIn } from '@/components/animations/ScrollReveal';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { useLanguage } from '@/hooks/useLanguage';

export function ServicesSection() {
    const { t } = useLanguage();

    const services = [
        {
            icon: <Code className="text-blue-600" size={40} />,
            title: t('services.software.title'),
            description: t('services.software.description'),
        },
        {
            icon: <Shield className="text-green-600" size={40} />,
            title: t('services.security.title'),
            description: t('services.security.description'),
        },
        {
            icon: <Smartphone className="text-purple-600" size={40} />,
            title: t('services.mobile.title'),
            description: t('services.mobile.description'),
        },
        {
            icon: <Globe className="text-orange-600" size={40} />,
            title: t('services.cloud.title'),
            description: t('services.cloud.description'),
        },
    ];

    const renderCardsGrid = () => (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                    <motion.div
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 border-0 h-full">
                            <CardHeader className="text-center">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="mx-auto mb-4 p-3 bg-gray-100 dark:bg-gray-600 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-500 transition-colors w-fit"
                                >
                                    {service.icon}
                                </motion.div>
                                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 dark:text-gray-300 text-center">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                </ScrollReveal>
            ))}
        </div>
    );

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up" className="text-center mb-16">
                    <Badge className="mb-4 bg-blue-100 text-blue-800">
                        {t('services.badge')}
                    </Badge>
                    <AnimatedText
                        text={t('services.title')}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    />
                    <FadeIn delay={0.4}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t('services.description')}
                        </p>
                    </FadeIn>
                </ScrollReveal>
                {renderCardsGrid()}
            </div>
        </section>
    );
}
