'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter, X } from 'lucide-react'
import { socialLinks, contactInfo } from '@/data/social'

// Metadata is not supported in client components in Next.js. 
// It should be moved to a separate layout.tsx if needed.

const communities = [
    {
        title: 'LASO',
        org: 'Latin American Student Association — UBCO',
        url: null,
        description: 'VP Internal of a student-led club celebrating Latin American culture at UBC Okanagan. I managed logistics, budgets, and compliance, drove marketing through reels and targeted ads, and built partnerships with other clubs to co-host events and cut costs.',
        images: ['/images/Latin american student Organization/LASOPIC.png', '/images/Latin american student Organization/WhatsApp Image 2025-09-22 at 20.53.18_17a5ac8d.jpg'],
        labels: ['LASO community 🌎', 'Event night']
    },
    {
        title: 'Hispanotech',
        org: 'hispanotech.ca',
        url: 'https://hispanotech.ca',
        description: "A network connecting Spanish-speaking professionals in tech across Canada. I'm an active member, using this community to grow my network, share insights, and support other Latinos breaking into the Canadian tech industry.",
        images: ['/images/Hispanotech/1764659307193.jpg', '/images/Hispanotech/Picture8.jpg'],
        labels: ['Hispanotech community', 'Networking event']
    },
    {
        title: 'Wealthsimple Foundation',
        org: 'Wealthsimple Foundation',
        url: null,
        description: 'Selected as a member of the Wealthsimple Foundation program focused on economic empowerment. Working alongside driven peers to build financial literacy and entrepreneurial skills in underserved communities.',
        images: ['/images/wealthsimple foundation/wealthsimpl4.jpeg', '/images/wealthsimple foundation/WhatsApp Image 2025-12-04 at 10.12.57 AM.jpeg'],
        labels: ['Program kickoff', 'Community meetup']
    },
    {
        title: 'OTIN',
        org: 'Okanagan Tech Industry Night',
        url: null,
        description: 'Co-founded and coordinated OTIN — a 200+ person networking event connecting Okanagan College and UBCO students with industry professionals. I secured sponsorships, coordinated VIP guests and judging panels, and ran end-to-end event logistics.',
        images: ['/images/Okanagan tech industry night/1730065718844.jpg'],
        labels: ['OTIN event night 🎤']
    },
    {
        title: 'BrainTrainr',
        org: 'BrainTrainr',
        url: null,
        description: 'Web content and UX lead at BrainTrainr — a platform empowering social impact through AI-powered learning. I help shape the product\'s voice and user experience to close the education gap across underserved communities.',
        images: ['/images/Braintrainer/Screenshot 2026-02-08 135030.png', '/images/Braintrainer/Screenshot 2026-02-08 134600.png'],
        labels: ['Platform overview', 'Dashboard']
    },
    {
        title: 'Alianza Latina',
        org: 'Alianza Latina Canada',
        url: null,
        description: 'Member of Alianza Latina Canada — a national network building unity and data power for the Latino community across Canada. We work to amplify Latino voices through data, advocacy, and community programming.',
        images: ['/images/Alianza latina/Screenshot 2026-02-08 134128.png', '/images/Alianza latina/1772322136233.jpg'],
        labels: ['Alianza Latina 🇨🇦', 'Community event']
    },
    {
        title: 'Cursor Community',
        org: 'Cursor AI Community',
        url: null,
        description: 'Active member of the Cursor AI community — connecting with developers who are pushing the boundaries of AI-assisted coding. Sharing insights and collaborating on best practices for modern development workflows.',
        images: ['/images/cursor community/1772147856117.jpg', '/images/cursor community/1772147856129.jpg'],
        labels: ['Community event', 'Meetup']
    },
    {
        title: 'Canadian Cancer Society',
        org: 'Canadian Cancer Society',
        url: null,
        description: 'Volunteered with the Canadian Cancer Society to support fundraising and community outreach programs, contributing to awareness campaigns and community health initiatives.',
        images: ['/images/Canadian Cancer society/images.png'],
        labels: ['CCS 🇨🇦']
    },
    {
        title: 'Scale Without Borders',
        org: 'Scale Without Borders',
        url: 'https://scalewithoutborders.com',
        description: 'Scale Without Borders is a platform for newcomers in tech. I actively participate in this community to help other immigrants navigate the Canadian tech landscape and build meaningful connections.',
        images: [
            '/images/scale_withoutborders/WhatsApp Image 2025-10-16 at 23.17.46_2a277869.jpg',
            '/images/scale_withoutborders/WhatsApp Image 2025-10-22 at 20.19.29_c2e8688d.jpg'
        ],
        labels: ['Community Meetup', 'Tech Workshop']
    }
]

const beyondWork = [
    {
        emoji: '⚽',
        title: 'Football',
        description:
            "I've been playing football for 10+ years. Started with flat feet and no technique — now I hold my own against people who grew up with a ball at their feet. That same stubbornness shows up in my debugging.",
    },
    {
        emoji: '🌍',
        title: 'Travel',
        description:
            '14 countries and counting. Moving across continents taught me to adapt quickly and communicate clearly even when the words aren\'t perfect.',
    },
    {
        emoji: '💃',
        title: 'Dance',
        description:
            'Salsa, bachata, and anything that keeps me moving. Coming from Peru, rhythm is part of the package.',
    },
    {
        emoji: '🗣️',
        title: 'Languages',
        description:
            'Spanish (native), English (fluent), French (learning — intensive 4hr/day study right now). I believe learning a language and learning a programming language require the same muscle: pattern recognition + daily practice.',
    },
]

const education = {
    degree: 'B.Sc. Computer Science',
    minor: 'Minor in Economics',
    school: 'University of British Columbia',
    period: 'Sep 2021 – Nov 2025',
    location: 'Kelowna, BC',
}

export default function AboutPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, label?: string } | null>(null)

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [selectedImage])

    return (
        <div className="bg-white min-h-screen">
            {/* Image Preview Modal */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-white/80 backdrop-blur-md cursor-zoom-out animate-in fade-in duration-200"
                >
                    <div
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl border border-[#F3F4F6] overflow-hidden flex flex-col cursor-default animate-in zoom-in-95 slide-in-from-bottom-2 duration-300"
                    >
                        <div className="p-4 border-b border-[#F3F4F6] flex items-center justify-between bg-[#F9FAFB]">
                            <h3 className="font-display font-bold text-[#1A1A1A] text-sm tracking-tight">{selectedImage.label || 'Image Preview'}</h3>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="p-1 hover:bg-[#E5E7EB] rounded-lg transition-colors text-[#6B7280]"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-video w-full">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.label || ''}
                                fill
                                priority
                                className="object-contain p-2"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* ── Hero ── */}
            <div className="max-w-4xl mx-auto px-6 sm:px-12 pt-16 pb-24">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1A1A1A] leading-tight animate-fade-up">
                            Hi, I&#39;m Richard!
                        </h1>

                        <div className="flex items-center gap-3 text-xs font-mono text-[#6B7280] uppercase animate-fade-up stagger-1">
                            <span>📍 Toronto, ON</span>
                            <span>·</span>
                            <span>🎓 UBC &#39;25</span>
                        </div>

                        <div className="flex flex-col gap-6 text-[#1A1A1A] text-lg leading-relaxed animate-fade-up stagger-2">
                            <p>
                                I love data, business, technology, and the ways they can work together to create extraordinary tools for people.
                            </p>
                            <p>
                                I believe thoughtful engineering makes life more intuitive. I want to bring more of it into the world, whether through my automated pipelines, the products I build, or the businesses I help scale.
                            </p>
                            <p>
                                I grew up in Peru, moved to British Columbia for university, and recently relocated to Toronto. Along the way, I went from processing thousands of bike-share records for visualization to building PHP club management systems and delivering freelance solutions for clients across industries.
                            </p>
                        </div>

                        <div className="mt-4 pt-6 border-t border-[#F3F4F6] flex flex-col gap-6 animate-fade-up stagger-3">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-sm font-medium text-[#10B981] flex items-center gap-2 hover:translate-x-1 transition-transform"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                                Working on something cool? Get in touch!
                            </a>

                            <div className="flex items-center gap-4 md:hidden">
                                {socialLinks.slice(0, 4).map((link) => {
                                    const Icon = {
                                        github: Github,
                                        linkedin: Linkedin,
                                        instagram: Instagram,
                                        twitter: Twitter
                                    }[link.platform] || Github

                                    return (
                                        <a
                                            key={link.platform}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#10B981] hover:border-[#10B981] hover:shadow-sm transition-all"
                                            aria-label={link.label}
                                        >
                                            <Icon size={18} strokeWidth={2} />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Polaroid Stack & Social Icons */}
                    <div className="md:w-1/2 flex flex-col items-center gap-12 hidden md:flex animate-fade-up stagger-3" aria-hidden="true">
                        <div className="relative h-[420px] w-full">
                            <div className="absolute top-0 right-10 w-[200px] h-[240px] polaroid rotate-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all z-0 hover:z-20">
                                <div className="relative w-full h-full bg-[#F3F4F6] rounded overflow-hidden">
                                    <Image src="/images/About_hero/family.jpeg" alt="" fill className="object-cover object-center" />
                                </div>
                                <p className="text-center mt-3 font-display text-[9px] text-[#6B7280]">Family ❤️</p>
                            </div>
                            <div className="absolute top-16 left-8 w-[220px] h-[260px] polaroid -rotate-3 z-10 hover:z-30">
                                <div className="relative w-full h-full bg-[#E5E7EB] rounded overflow-hidden">
                                    <Image src="/images/About_hero/travelling.jpeg" alt="" fill className="object-cover object-center" />
                                </div>
                                <p className="text-center mt-3 font-display text-[9px] text-[#6B7280]">Travelling 🌍</p>
                            </div>
                            <div className="absolute bottom-4 right-4 w-[170px] h-[210px] polaroid -rotate-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all z-0 hover:z-40">
                                <div className="relative w-full h-full bg-[#F3F4F6] rounded overflow-hidden">
                                    <Image src="/images/About_hero/toronto.jpeg" alt="" fill className="object-cover object-center" />
                                </div>
                                <p className="text-center mt-3 font-display text-[9px] text-[#6B7280]">Toronto 🏙️</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            {socialLinks.slice(0, 4).map((link) => {
                                const Icon = {
                                    github: Github,
                                    linkedin: Linkedin,
                                    instagram: Instagram,
                                    twitter: Twitter
                                }[link.platform] || Github

                                return (
                                    <a
                                        key={link.platform}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#10B981] hover:border-[#10B981] hover:shadow-md transition-all group"
                                        aria-label={link.label}
                                    >
                                        <Icon size={20} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Content Blocks ── */}
            <div className="max-w-4xl mx-auto px-6 sm:px-12 py-24 flex flex-col gap-24 border-t border-[#F3F4F6]">

                {/* Communities Section */}
                <section className="flex flex-col gap-12">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-[#1A1A1A]">My Communities</h2>
                        <p className="text-[#6B7280] text-sm">The people who make it all worth it ❤️</p>
                    </div>

                    <div className="flex flex-col gap-20">
                        {communities.map((comm) => (
                            <div key={comm.org} className="flex flex-col gap-8">
                                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-xl shadow-sm font-display font-bold text-[#1A1A1A]">
                                            {comm.title[0]}
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            {comm.url ? (
                                                <a href={comm.url} target="_blank" rel="noopener noreferrer" className="font-display font-bold text-[#1A1A1A] hover:text-[#10B981] transition-colors">{comm.org}</a>
                                            ) : (
                                                <h3 className="font-display font-bold text-[#1A1A1A]">{comm.org}</h3>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#6B7280] leading-relaxed italic">{comm.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-8 justify-center py-4">
                                    {comm.images?.map((img, i) => (
                                        <div key={img}
                                            onClick={() => setSelectedImage({ src: img, label: comm.labels[i] })}
                                            className={`w-[180px] h-[220px] polaroid transition-all hover:scale-105 hover:z-10 cursor-zoom-in group ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'
                                                }`}>
                                            <div className="relative w-full h-[160px] bg-[#F3F4F6] rounded overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center text-[#6B7280] font-mono text-[8px] z-10 opacity-40 capitalize">{comm.title}_{i + 1}.jpg</div>
                                                <Image src={img} alt="" fill className="object-cover z-20" />
                                            </div>
                                            <p className="text-center mt-3 font-display text-[9px] text-[#6B7280] px-1">{comm.labels[i]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Travel Section */}
                <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 pt-12 border-t border-[#F3F4F6]">
                    <div className="text-sm font-bold text-[#6B7280] uppercase tracking-widest pt-1">
                        Exploring
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            14 countries and counting. Moving across continents taught me to adapt quickly and communicate clearly — even when the words aren&#39;t perfect.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { flag: '🇨🇦', name: 'Canada' },
                                { flag: '🇵🇪', name: 'Peru' },
                                { flag: '🇬🇧', name: 'UK' },
                                { flag: '🇨🇭', name: 'Switzerland' },
                                { flag: '🇬🇷', name: 'Greece' },
                                { flag: '🇲🇽', name: 'Mexico' },
                                { flag: '🇪🇨', name: 'Ecuador' },
                                { flag: '🇺🇸', name: 'USA' },
                                { flag: '🇩🇴', name: 'Dom. Republic' },
                                { flag: '✨', name: 'and more' },
                            ].map(({ flag, name }) => (
                                <span key={name} className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] border border-[#F3F4F6] rounded-full text-sm text-[#1A1A1A] font-medium hover:border-[#10B981]/40 hover:bg-[#10B981]/5 transition-colors">
                                    <span className="text-xl">{flag}</span>
                                    {name}
                                </span>
                            ))}
                        </div>
                        {/* Trip Photo Gallery */}
                        <div className="flex flex-wrap gap-6 justify-center py-4">
                            {[
                                { src: '/images/trips/UK.jpeg', label: 'United Kingdom 🇬🇧' },
                                { src: '/images/trips/greece.JPG', label: 'Greece 🇬🇷' },
                                { src: '/images/trips/Peru.jpeg', label: 'Peru 🇵🇪' },
                            ].map((trip, i) => (
                                <div
                                    key={trip.src}
                                    onClick={() => setSelectedImage(trip)}
                                    className={`w-[160px] h-[200px] polaroid transition-all hover:scale-105 hover:z-10 cursor-zoom-in ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
                                >
                                    <div className="relative w-full h-[150px] bg-[#F3F4F6] rounded overflow-hidden">
                                        <Image src={trip.src} alt={trip.label} fill className="object-cover" />
                                    </div>
                                    <p className="text-center mt-2 font-display text-[9px] text-[#6B7280]">{trip.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 pt-12 border-t border-[#F3F4F6]">
                    <div className="text-sm font-bold text-[#6B7280] uppercase tracking-widest pt-1">
                        Education
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] font-display font-bold text-2xl shrink-0">
                            U
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-display text-xl font-bold text-[#1A1A1A]">{education.school}</h3>
                            <p className="text-[#6B7280] font-medium">{education.degree} — {education.minor}</p>
                            <p className="text-xs text-[#6B7280] font-mono mt-1 opacity-70 uppercase tracking-widest">{education.period} | {education.location}</p>
                        </div>
                    </div>
                </section>

                {/* Beyond Work */}
                <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 border-t border-[#F3F4F6]">
                    <div className="text-sm font-bold text-[#6B7280] uppercase tracking-widest pt-1">
                        Beyond Work
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                            {beyondWork.map(({ emoji, title, description }) => (
                                <div key={title} className="flex flex-col gap-3">
                                    <h3 className="font-display font-bold text-[#1A1A1A] text-lg flex items-center gap-2">
                                        <span className="text-2xl">{emoji}</span> {title}
                                    </h3>
                                    <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
                                </div>
                            ))}
                        </div>
                        {/* Activity Photos */}
                        <div className="flex flex-wrap gap-6 justify-center">
                            {[
                                { src: '/images/Football club/WhatsApp Image 2026-03-02 at 1.14.12 PM.jpeg', label: 'Football ⚽' },
                                { src: '/images/Running club/download.jpeg', label: 'Running 🏃' },
                            ].map((activity, i) => (
                                <div
                                    key={activity.src}
                                    onClick={() => setSelectedImage(activity)}
                                    className={`w-[160px] h-[200px] polaroid transition-all hover:scale-105 cursor-zoom-in ${i % 2 === 0 ? 'rotate-1' : '-rotate-2'}`}
                                >
                                    <div className="relative w-full h-[150px] bg-[#F3F4F6] rounded overflow-hidden">
                                        <Image src={activity.src} alt={activity.label} fill className="object-cover" />
                                    </div>
                                    <p className="text-center mt-2 font-display text-[9px] text-[#6B7280]">{activity.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Shelf */}
                <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-8 pt-12 border-t border-[#F3F4F6]">
                    <div className="text-sm font-bold text-[#6B7280] uppercase tracking-widest pt-1">
                        Shelf
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-lg text-[#6B7280] leading-relaxed">
                            I love discovering new hidden food spots, getting excited about beautifully designed stationery, and listening to audiobooks on long drives.
                        </p>
                        {/* Favorites Gallery */}
                        <div className="flex flex-wrap gap-5 justify-center py-2">
                            {[
                                { src: '/images/Favorites/61LsXpUgxdL.jpg', label: 'Music 🎵' },
                                { src: '/images/Favorites/81FYASoyw0L._AC_UF894,1000_QL80_.jpg', label: 'Sports 🏃' },
                                { src: '/images/Favorites/Tintin_movie_poster_01.webp', label: 'Movies 🎬' },
                                { src: '/images/Favorites/MV5BZWNjZjQwZmItMWU1ZS00YTJhLWExYjUtYjk3YjcxMjJlOTdmXkEyXkFqcGc@._V1_.jpg', label: 'Music 🎶' },
                                { src: '/images/Running club/Screenshot 2025-10-15 143144.png', label: 'Sports 🏃', position: 'object-[80%_center]' },
                                { src: '/images/Favorites/Screenshot 2025-10-25 005945.png', label: 'Movies 🎬' },
                            ].map((fav: any, i) => (
                                <div
                                    key={fav.src}
                                    onClick={() => setSelectedImage(fav)}
                                    className={`w-[120px] h-[170px] polaroid transition-all hover:scale-110 hover:z-10 cursor-zoom-in ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                                >
                                    <div className="relative w-full h-[130px] bg-[#F3F4F6] rounded overflow-hidden">
                                        <Image
                                            src={fav.src}
                                            alt={fav.label}
                                            fill
                                            className={`object-cover ${fav.position || 'object-center'}`}
                                        />
                                    </div>
                                    <p className="text-center mt-2 font-display text-[8px] text-[#6B7280]">{fav.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-[#F9FAFB] p-8 rounded-2xl border border-[#F3F4F6] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#10B981]/5 rounded-bl-full transition-transform group-hover:scale-150 duration-500" />
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-4">Currently</h4>
                            <p className="text-[#6B7280] leading-relaxed text-[15px]">
                                Reading Malcolm Gladwell. Listening to <em className="not-italic text-[#1A1A1A] font-bold">AI Chat</em>. Learning French. Training for the next football season.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
