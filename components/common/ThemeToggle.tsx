'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <div className="w-4 h-4" />
            </Button>
        );
    }

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="w-9 h-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
                <motion.div
                    initial={false}
                    animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {theme === 'light' ? (
                        <Moon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    ) : (
                        <Sun className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    )}
                </motion.div>
                <span className="sr-only">Toggle theme</span>
            </Button>
        </motion.div>
    );
}
