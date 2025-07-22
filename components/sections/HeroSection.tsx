'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal, FadeIn } from '@/components/animations/ScrollReveal';
import { TypeWriter, AnimatedText } from '@/components/animations/TypeWriter';
import { useLanguage } from '@/hooks/useLanguage';
import bg from '@/assets/back.png';

interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
    const { t } = useLanguage();

    const renderHeroCenter = () => (
        <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
                <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {t('hero.badge')}
                </Badge>
            </FadeIn>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            >
                <AnimatedText text={t('hero.title.transform')} delay={0.6} />
                <br />
                <TypeWriter
                    text={t('hero.title.innovation')}
                    delay={1500}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
            </motion.h1>
            <ScrollReveal direction="up" delay={0.8}>
                <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                    {t('hero.description')}
                </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={1.0}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-8 text-xl"
                            onClick={() => scrollToSection('contact')}
                        >
                            {t('hero.cta.start')}{' '}
                            <ArrowRight className="ml-2" size={24} />
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-8 text-xl"
                            onClick={() => scrollToSection('portfolio')}
                        >
                            {t('hero.cta.portfolio')}
                        </Button>
                    </motion.div>
                </div>
            </ScrollReveal>
        </div>
    );

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 bg"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
                {renderHeroCenter()}
            </div>
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <ChevronDown
                    className="text-gray-400 dark:text-gray-500"
                    size={32}
                />
            </motion.div>
        </section>
    );
}
