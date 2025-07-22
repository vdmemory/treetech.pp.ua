import type { Metadata } from 'next';
import { configCompany } from '@/config/configCompany';

export const siteMetadata: Metadata = {
    title: `${configCompany.name} - IT Solutions & Technology Services`,
    description:
        'Leading provider of innovative IT solutions, software development, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
    keywords:
        'IT solutions, software development, cybersecurity, mobile apps, cloud services, digital transformation',
    authors: [{ name: configCompany.name }],
    viewport: 'width=device-width, initial-scale=1',
};
