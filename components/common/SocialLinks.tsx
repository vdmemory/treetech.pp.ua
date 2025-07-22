'use client';

import { motion } from 'framer-motion';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Github,
    Youtube,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLinksProps {
    variant?: 'header' | 'footer';
    className?: string;
}

export function SocialLinks({
    variant = 'header',
    className = '',
}: SocialLinksProps) {
    const socialLinks = [
        {
            icon: Facebook,
            href: '#',
            label: 'Facebook',
            color: 'hover:text-blue-600',
        },
        {
            icon: Twitter,
            href: '#',
            label: 'Twitter',
            color: 'hover:text-sky-500',
        },
        {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn',
            color: 'hover:text-blue-700',
        },
        {
            icon: Instagram,
            href: '#',
            label: 'Instagram',
            color: 'hover:text-pink-600',
        },
        {
            icon: Github,
            href: '#',
            label: 'GitHub',
            color: 'hover:text-gray-900 dark:hover:text-white',
        },
        {
            icon: Youtube,
            href: '#',
            label: 'YouTube',
            color: 'hover:text-red-600',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
    };

    if (variant === 'footer') {
        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex space-x-4 ${className}`}
            >
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 ${social.color}`}
                        aria-label={social.label}
                    >
                        <social.icon size={20} className="text-gray-300" />
                    </motion.a>
                ))}
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex space-x-2 ${className}`}
        >
            {socialLinks.slice(0, 4).map((social, index) => (
                <motion.div
                    key={social.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className={`w-9 h-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 ${social.color}`}
                    >
                        <a href={social.href} aria-label={social.label}>
                            <social.icon size={16} />
                        </a>
                    </Button>
                </motion.div>
            ))}
        </motion.div>
    );
}
