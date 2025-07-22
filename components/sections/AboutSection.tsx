'use client';

import { motion } from 'framer-motion';
import { Award, Users, CheckCircle, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal, FadeIn } from '@/components/animations/ScrollReveal';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { CountUp } from '@/components/animations/CountUp';
import { useLanguage } from '@/hooks/useLanguage';

interface AboutSectionProps {
    scrollToSection?: (sectionId: string) => void;
}

export function AboutSection({ scrollToSection }: AboutSectionProps) {
    const { t } = useLanguage();

    const stats = [
        { number: '500+', label: t('about.stats.projects') },
        { number: '98%', label: t('about.stats.satisfaction') },
        { number: '15+', label: t('about.stats.experience') },
        { number: '50+', label: t('about.stats.team') },
    ];

    const achievements = [
        {
            icon: <Award className="text-blue-600" size={24} />,
            title: t('about.award.title'),
            subtitle: t('about.award.subtitle'),
            color: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
        },
        {
            icon: <Users className="text-green-600" size={24} />,
            title: t('about.expert.title'),
            subtitle: t('about.expert.subtitle'),
            color: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
        },
        {
            icon: <CheckCircle className="text-purple-600" size={24} />,
            title: t('about.quality.title'),
            subtitle: t('about.quality.subtitle'),
            color: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
        },
        {
            icon: <Globe className="text-orange-600" size={24} />,
            title: t('about.global.title'),
            subtitle: t('about.global.subtitle'),
            color: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
        },
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-purple-100 text-purple-800">
                            {t('about.badge')}
                        </Badge>
                        <AnimatedText
                            text={t('about.title')}
                            className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                        />
                        <FadeIn delay={0.4}>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                {t('about.description')}
                            </p>
                        </FadeIn>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

                        {achievements.map((achievement, index) => (
                            <ScrollReveal
                                key={index}
                                direction={index % 2 === 0 ? 'left' : 'right'}
                                delay={index * 0.2}
                            >
                                <div
                                    className={`flex items-center mb-2 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div
                                        className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}
                                    >
                                        <Card
                                            className={`p-6 bg-gradient-to-br ${achievement.color} border-0`}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center space-x-3"
                                            >
                                                {achievement.icon}
                                                <div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        {achievement.title}
                                                    </div>
                                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                                        {achievement.subtitle}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Card>
                                    </div>
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"
                                        />
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {stats.map((stat, index) => (
                            <ScrollReveal
                                key={index}
                                direction="up"
                                delay={index * 0.1}
                            >
                                <div className="text-center">
                                    <motion.div
                                        className="text-3xl font-bold text-blue-600 mb-1"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <CountUp
                                            value={parseInt(
                                                stat.number.replace(/\D/g, ''),
                                            )}
                                            suffix={stat.number.replace(
                                                /\d/g,
                                                '',
                                            )}
                                            delay={0.5 + index * 0.2}
                                        />
                                    </motion.div>
                                    <div className="text-gray-600 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
