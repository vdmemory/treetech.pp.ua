'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollReveal, FadeIn } from '@/components/animations/ScrollReveal';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { useLanguage } from '@/hooks/useLanguage';

const getFaqs = (t: (key: string) => string) => [
    {
        question: t('faq.question1'),
        answer: t('faq.answer1'),
    },
    {
        question: t('faq.question2'),
        answer: t('faq.answer2'),
    },
    {
        question: t('faq.question3'),
        answer: t('faq.answer3'),
    },
    {
        question: t('faq.question4'),
        answer: t('faq.answer4'),
    },
    {
        question: t('faq.question5'),
        answer: t('faq.answer5'),
    },
    {
        question: t('faq.question6'),
        answer: t('faq.answer6'),
    },
];

export function FAQSection() {
    const { t } = useLanguage();

    return (
        <section id="faq" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up" className="text-center mb-16">
                    <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        {t('faq.badge')}
                    </Badge>
                    <AnimatedText
                        text={t('faq.title')}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    />
                    <FadeIn delay={0.4}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t('faq.description')}
                        </p>
                    </FadeIn>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.6}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-4"
                        >
                            {getFaqs(t).map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <AccordionItem
                                        value={`item-${index}`}
                                        className="bg-gray-50 dark:bg-gray-800 rounded-lg border-0 px-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </ScrollReveal>
            </div>
        </section>
    );
}
