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
import { useLanguage } from '@/hooks/useLanguage';

const getTeamMembers = (t: (key: string) => string) => [
    {
        name: t('team.sarah.name'),
        role: t('team.sarah.role'),
        image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
        name: t('team.michael.name'),
        role: t('team.michael.role'),
        image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
        name: t('team.emily.name'),
        role: t('team.emily.role'),
        image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
        name: t('team.david.name'),
        role: t('team.david.role'),
        image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
];

export function TeamSection() {
    const { t } = useLanguage();

    return (
        <section
            id="team"
            className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up" className="text-center mb-16">
                    <Badge className="mb-4 bg-purple-100 text-purple-800">
                        {t('team.badge')}
                    </Badge>
                    <AnimatedText
                        text={t('team.title')}
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    />
                    <FadeIn delay={0.4}>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            {t('team.description')}
                        </p>
                    </FadeIn>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {getTeamMembers(t).map((member, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={index * 0.2}
                        >
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="group text-center hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 border-0">
                                    <CardHeader>
                                        <div className="relative mx-auto mb-4">
                                            <motion.img
                                                src={member.image}
                                                alt={member.name}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                                className="w-32 h-32 rounded-full object-cover mx-auto"
                                            />
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                                className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"
                                            />
                                        </div>
                                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {member.name}
                                        </CardTitle>
                                        <CardDescription className="text-blue-600 font-medium">
                                            {member.role}
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
