'use client';

import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Header } from '@/app/header/Header';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/app/footer/Footer';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { ArrowBigUpDash } from 'lucide-react';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollToSection, scrollToTop } = useScrollToSection(setIsMenuOpen);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <HeroSection scrollToSection={scrollToSection} />
            <ServicesSection />
            <AboutSection scrollToSection={scrollToSection} />
            <BrandsSection />
            <PortfolioSection />
            <TeamSection />
            <FAQSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer scrollToSection={scrollToSection} />
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-opacity duration-300"
                    aria-label="Вернуться наверх"
                >
                    <ArrowBigUpDash size={20} />
                </button>
            )}
        </div>
    );
}
