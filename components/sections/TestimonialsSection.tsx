import { FadeIn, ScrollReveal } from '@/components/animations/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { TestimonialsRating } from '@/components/common/TestimonialRating';

const getTestimonials = (t: (key: string) => string) => [
    {
        quote: t('testimonials.jennifer.quote'),
        author: t('testimonials.jennifer.author'),
        role: t('testimonials.jennifer.role'),
        rating: 5,
    },
    {
        quote: t('testimonials.robert.quote'),
        author: t('testimonials.robert.author'),
        role: t('testimonials.robert.role'),
        rating: 5,
    },
    {
        quote: t('testimonials.lisa.quote'),
        author: t('testimonials.lisa.author'),
        role: t('testimonials.lisa.role'),
        rating: 5,
    },
];

export function TestimonialsSection() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up" className="text-center mb-16">
                    <Badge className="mb-4 bg-yellow-100 text-yellow-800">
                        {t('testimonials.badge')}
                    </Badge>
                    <AnimatedText
                        text={t('testimonials.title')}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    />
                    <FadeIn delay={0.4}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t('testimonials.description')}
                        </p>
                    </FadeIn>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {getTestimonials(t).map((testimonial, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={index * 0.2}
                        >
                            <motion.div
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="p-6 bg-white dark:bg-gray-700 hover:shadow-xl transition-all duration-300 border-0 h-full">
                                    <CardContent className="pt-6">
                                        <TestimonialsRating {...testimonial} />
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                            {`"${testimonial.quote}"`}
                                        </p>
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-sm text-blue-600">
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
