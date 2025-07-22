export const getNavLinks = (t: (key: string) => string) => [
    // { key: 'Home', label: t('nav.home') },
    {
        key: 'Services',
        label: t('nav.services'),
    },
    // { key: 'About', label: t('nav.about') },
    {
        key: 'Portfolio',
        label: t('nav.portfolio'),
    },
    // { key: 'Team', label: t('nav.team') },
    { key: 'FAQ', label: t('nav.faq') },
    { key: 'Contact', label: t('nav.contact') },
];
