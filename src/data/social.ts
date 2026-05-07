export interface SocialLink {
    platform: string
    label: string
    href: string
    icon: string
}

export const socialLinks: SocialLink[] = [
    {
        platform: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/richard-pillaca',
        icon: 'linkedin',
    },
    {
        platform: 'github',
        label: 'GitHub',
        href: 'https://github.com/RikepilB',
        icon: 'github',
    },
    {
        platform: 'instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/richard_3.14llaca/',
        icon: 'instagram',
    },
    {
        platform: 'twitter',
        label: 'X / Twitter',
        href: 'https://x.com/richard_pillaca',
        icon: 'twitter',
    },
    {
        platform: 'substack',
        label: 'Substack',
        href: 'https://substack.com/@richardpillaca',
        icon: 'substack',
    },
]

export const contactInfo = {
    email: 'ridi.pillaca@gmail.com',
    phone: '+1 236 457 5593',
    location: 'Toronto, Ontario, Canada',
    linkedin: 'https://www.linkedin.com/in/richard-pillaca',
    github: 'https://github.com/RikepilB',
}
