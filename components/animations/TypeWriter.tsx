'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypeWriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

export function TypeWriter({
    text,
    delay = 0,
    speed = 50,
    className = '',
}: TypeWriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, speed, started]);

    return (
        <span className={className}>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                className="inline-block w-0.5 h-6 bg-current ml-1"
            />
        </span>
    );
}

interface AnimatedTextProps {
    text: string;
    delay?: number;
    className?: string;
}

export function AnimatedText({
    text,
    delay = 0,
    className = '',
}: AnimatedTextProps) {
    const words = text.split(' ');

    return (
        <motion.div className={className}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: delay + index * 0.1,
                        ease: 'easeOut',
                    }}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
