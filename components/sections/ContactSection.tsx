import {
    FadeIn,
    ScrollReveal,
    SlideIn,
} from '@/components/animations/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { ContactForm } from '@/components/common/ContactForm';

const getContacts = (t: (key: string) => string) => [
    {
        icon: <Mail className="text-blue-400" size={24} />,
        title: t('contact.email.title'),
        content: t('contact.email.content'),
    },
    {
        icon: <Phone className="text-green-400" size={24} />,
        title: t('contact.phone.title'),
        content: t('contact.phone.content'),
    },
    {
        icon: <MapPin className="text-purple-400" size={24} />,
        title: t('contact.address.title'),
        content: t('contact.address.content'),
    },
];

export function ContactSection() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    <SlideIn direction="left">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">
                            {t('contact.badge')}
                        </Badge>
                        <AnimatedText
                            text={t('contact.title')}
                            className="text-4xl font-bold text-white dark:text-gray-100 mb-6"
                        />
                        <FadeIn delay={0.4}>
                            <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
                                {t('contact.description')}
                            </p>
                        </FadeIn>

                        <div className="space-y-6">
                            {getContacts(t).map((contact, index) => (
                                <ScrollReveal
                                    key={index}
                                    direction="right"
                                    delay={index * 0.2}
                                >
                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="flex items-start space-x-4"
                                    >
                                        <motion.div
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                            }}
                                            className="flex-shrink-0 p-3 bg-gray-800 dark:bg-gray-700 rounded-lg"
                                        >
                                            {contact.icon}
                                        </motion.div>
                                        <div>
                                            <div className="font-semibold text-white dark:text-gray-200">
                                                {contact.title}
                                            </div>
                                            <div className="text-gray-300 dark:text-gray-400">
                                                {contact.content}
                                            </div>
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </SlideIn>

                    <SlideIn direction="right">
                        <Card className="bg-white dark:bg-gray-800 p-8 border-0">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('contact.form.title')}
                                </CardTitle>
                                <CardDescription className="dark:text-gray-300">
                                    {t('contact.form.description')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </SlideIn>
                </div>
            </div>
        </section>
    );
}
