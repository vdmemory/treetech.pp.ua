'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
    value: number;
    duration?: number;
    delay?: number;
    suffix?: string;
    className?: string;
}

export function CountUp({
    value,
    duration = 2,
    delay = 0,
    suffix = '',
    className = '',
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                motionValue.set(value);
            }, delay * 1000);

            return () => clearTimeout(timer);
        }
    }, [motionValue, isInView, value, delay]);

    useEffect(() => {
        springValue.on('change', latest => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return (
        <span ref={ref} className={className}>
            0{suffix}
        </span>
    );
}
