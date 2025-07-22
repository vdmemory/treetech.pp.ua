import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    rating: number;
}

export function TestimonialsRating(testimonial: TestimonialProps) {
    return (
        <motion.div
            className="flex mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.2,
            }}
        >
            {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: i * 0.1,
                    }}
                >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </motion.div>
            ))}
        </motion.div>
    );
}
