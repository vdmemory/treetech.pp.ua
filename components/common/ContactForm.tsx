import { useLanguage } from '@/hooks/useLanguage';
import { FadeIn } from '@/components/animations/ScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { configCompany } from '@/config/configCompany';

const actionEmail = `https://formsubmit.co/${configCompany.formEmail}`;

export function ContactForm() {
    const { t } = useLanguage();

    return (
        <form action={actionEmail} method="POST" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <FadeIn delay={0.2}>
                    <Input
                        name="firstName"
                        placeholder={t('contact.form.firstName')}
                        className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                </FadeIn>
                <FadeIn delay={0.3}>
                    <Input
                        name="lastName"
                        placeholder={t('contact.form.lastName')}
                        className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                </FadeIn>
            </div>
            <FadeIn delay={0.4}>
                <Input
                    name="email"
                    placeholder={t('contact.form.email')}
                    type="email"
                    className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </FadeIn>
            <FadeIn delay={0.5}>
                <Input
                    name="company"
                    placeholder={t('contact.form.company')}
                    className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </FadeIn>
            <FadeIn delay={0.6}>
                <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    rows={4}
                    className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </FadeIn>
            <FadeIn delay={0.7}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg">
                        {t('contact.form.submit')}{' '}
                        <ArrowRight className="ml-2" size={20} />
                    </Button>
                </motion.div>
            </FadeIn>
        </form>
    );
}
