'use client';

import { useState } from 'react';
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

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

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
            <Footer />
        </div>
    );
}
