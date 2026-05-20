'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Instagram, Twitter, X } from 'lucide-react'
import { socialLinks } from '@/data/social'

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

const bioEN = [
    'I grew up in Peru seeing how access and stability sometimes determine potential, so at 18, I decided to venture to Canada without speaking great English. Honestly, I didn\'t have a clear idea what I wanted to do, I thought about medicine from the courses I took in IB, then tried Biomedical Engineering for a semester in Peru. But what really excited me was something different: those courses on problem-solving, MVPs, prototypes. I didn\'t want to box myself into a specialty too early. I was fascinated by the idea of building and leading a project. With the tech wave, I decided to apply to Computer Science at UBC, and that\'s where my journey started.',
    'The last five years, I learned much more than programming: I improved my English, experienced new cultures, and discovered that technology isn\'t magic or as hard as it seems (well, it\'s difficult, tedious, and takes time, but like everything in life, it\'s a matter of practice and effort). However, the best part was the people, amazing people I never would have met if I hadn\'t emigrated. Between mountains, new languages, events, and conversations, I learned fundamental things beyond the academic side. I feel that the best work comes from truly understanding people, from knowing what matters to them and why. I believe technology should be a bridge, not a barrier and it has to have soul.',
    'Technically, I\'ve done everything: frontend development, full-stack, research, leadership. But it all comes from the same place: building things with vision. Whether I\'m optimizing workflows, writing research, designing accessible platforms, or analyzing data to find what really matters, I always ask myself the same thing: How does this help me become the professional and person I want to be, and that others perceive?',
    'I\'m drawn to working with teams and projects that think big but stay grounded, that balance rigor with genuine care for the people using what we build. Now I\'m deep into data analytics and AI, constantly learning, always exploring because the day you stop being curious is the day you stop growing.',
]

const bioES = [
    'Crecí en Perú viendo cómo el acceso y la estabilidad a veces determinaban el potencial, así que a los 18 años decidí aventurarme a Canadá sin dominar el inglés. Sinceramente, no tenía claro qué quería hacer; pensé en medicina por los cursos que tomé en el Bachillerato Internacional, y luego probé Ingeniería Biomédica durante un semestre en Perú. Pero lo que realmente me apasionó fue algo diferente: esos cursos sobre resolución de problemas, productos mínimos viables (MVP) y prototipos. No quería encasillarme en una especialidad demasiado pronto. Me fascinaba la idea de construir y liderar un proyecto. Con la ola tecnológica, decidí postularme a Ciencias de la Computación en la UBC, y ahí comenzó mi aventura.',
    'En los últimos cinco años, aprendí mucho más que programación: mejoré mi inglés, conocí nuevas culturas y descubrí que la tecnología no es magia ni tan difícil como parece (bueno, es difícil, tediosa y lleva tiempo, pero como todo en la vida, es cuestión de práctica y esfuerzo). Sin embargo, lo mejor de todo fue la gente increíble que nunca habría conocido si no hubiera emigrado. Entre montañas, nuevos idiomas, eventos y conversaciones, aprendí cosas fundamentales que van más allá del ámbito académico. Siento que el mejor trabajo surge de comprender verdaderamente a las personas, de saber qué les importa y por qué. Creo que la tecnología debe ser un puente, no una barrera, y debe tener alma.',
    'Técnicamente, he hecho de todo: desarrollo frontend, full-stack, investigación, liderazgo. Pero todo parte del mismo origen: construir con visión. Ya sea optimizando flujos de trabajo, escribiendo investigaciones, diseñando plataformas accesibles o analizando datos para descubrir lo que realmente importa, siempre me pregunto lo mismo: ¿Cómo me ayuda esto a convertirme en el profesional y la persona que quiero ser, y que los demás perciben?',
    'Me atrae trabajar con equipos y proyectos que piensan a lo grande pero mantienen los pies en la tierra, que equilibran el rigor con una preocupación genuina por las personas que usan lo que creamos. Ahora estoy inmerso en el análisis de datos y la IA, aprendiendo y explorando constantemente, porque el día que dejas de ser curioso es el día que dejas de crecer.',
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

const sections = [
    { id: 'communities', label: 'Communities' },
    { id: 'exploring', label: 'Exploring' },
    { id: 'beyond-work', label: 'Beyond Work' },
    { id: 'shelf', label: 'Shelf' },
]

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter,
}

export default function AboutPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; label?: string } | null>(null)
    const [lang, setLang] = useState<'EN' | 'ES'>('EN')
    const [activeSection, setActiveSection] = useState('communities')
    const [photoIndex, setPhotoIndex] = useState<Record<string, number>>({})
    const bio = lang === 'EN' ? bioEN : bioES

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                }
            },
            { rootMargin: '-80px 0px -55% 0px' }
        )
        for (const s of sections) {
            const el = document.getElementById(s.id)
            if (el) observer.observe(el)
        }
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [selectedImage])

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleDotClick = (e: React.MouseEvent, org: string, index: number) => {
        e.stopPropagation()
        setPhotoIndex((prev) => ({ ...prev, [org]: index }))
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        ;(e.currentTarget as HTMLElement).dataset.touchX = e.touches[0].clientX.toString()
    }

    const handleTouchEnd = (e: React.TouchEvent, org: string, total: number) => {
        const startX = parseFloat((e.currentTarget as HTMLElement).dataset.touchX || '0')
        const endX = e.changedTouches[0].clientX
        const diff = startX - endX
        if (Math.abs(diff) > 50) {
            const prev = photoIndex[org] ?? 0
            if (diff > 0) {
                setPhotoIndex((p) => ({ ...p, [org]: (prev + 1) % total }))
            } else {
                setPhotoIndex((p) => ({ ...p, [org]: (prev - 1 + total) % total }))
            }
        }
    }

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
            <section className="max-w-4xl mx-auto px-6 sm:px-12 pt-16 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                    {/* Left: Bio + Info */}
                    <div className="flex flex-col gap-5">
                        <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1A1A1A] leading-tight animate-fade-up">
                            Hi, I&#39;m Richard!
                        </h1>

                        <div className="flex items-center gap-3 text-xs font-mono text-[#6B7280] uppercase animate-fade-up stagger-1">
                            <span>📍 Toronto, ON</span>
                            <span>·</span>
                            <span>🎓 UBC &#39;25</span>
                        </div>

                        {/* Language Toggle */}
                        <div className="flex items-center gap-1.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full p-0.5 w-fit animate-fade-up stagger-2">
                            {(['EN', 'ES'] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full transition-all ${lang === l ? 'bg-[#1A1A1A] text-white' : 'text-[#6B7280] hover:text-[#1A1A1A]'
                                        }`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>

                        {/* Bio */}
                        <div className="flex flex-col gap-[14px] text-[#1A1A1A] text-[16px] font-display font-light leading-[1.65] animate-fade-up stagger-2">
                            {bio.map((paragraph, i) => (
                                <p key={i} className="m-0">{paragraph}</p>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="flex items-center gap-3 pt-4 mt-2 border-t border-[#F3F4F6] animate-fade-up stagger-3">
                            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] font-display font-bold text-base shrink-0">
                                U
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-semibold text-[#1A1A1A]">{education.degree} · {education.minor}</span>
                                <span className="text-[11px] text-[#6B7280] font-mono">{education.school} — {education.period} | {education.location}</span>
                            </div>
                        </div>

                        {/* Social icons (mobile) */}
                        <div className="flex items-center gap-4 md:hidden mt-2">
                            {socialLinks.slice(0, 4).map((link) => {
                                const Icon = iconMap[link.platform] ?? Github
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

                    {/* Right: Polaroid Stack + Social Icons (desktop) */}
                    <div className="flex-col items-center gap-12 hidden lg:flex justify-end" aria-hidden="true">
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
                                const Icon = iconMap[link.platform] ?? Github
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
            </section>

            {/* ── Content + Sidebar ── */}
            <div className="border-t border-[#F3F4F6]">
                <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16 md:py-24">

                    {/* Mobile Tab Bar */}
                    <div className="flex md:hidden overflow-x-auto gap-2 pb-2 mb-8 sticky top-16 z-20 bg-white py-2 -mx-6 px-6 border-b border-[#F3F4F6] scrollbar-hide">
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => scrollToSection(s.id)}
                                className={`shrink-0 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all ${activeSection === s.id
                                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                                    : 'text-[#6B7280] border-[#E5E7EB] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
                                    }`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-[140px_1fr] gap-8 xl:gap-12">
                        {/* Desktop Sidebar */}
                        <aside className="hidden md:flex flex-col sticky top-28 self-start gap-3">
                            {sections.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => scrollToSection(s.id)}
                                    className={`group text-left text-[11px] font-mono font-bold tracking-[0.08em] uppercase transition-all duration-200 ${activeSection === s.id
                                        ? 'text-[#1A1A1A]'
                                        : 'text-[#6B7280] hover:text-[#1A1A1A]'
                                        }`}
                                >
                                    <span
                                        className={`inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle transition-all ${activeSection === s.id
                                            ? 'bg-[#10B981]'
                                            : 'bg-transparent group-hover:bg-[#D1D5DB]'
                                            }`}
                                    />
                                    {s.label}
                                </button>
                            ))}
                        </aside>

                        {/* Content Sections */}
                        <div className="flex flex-col gap-20 md:gap-24">

                            {/* ── Communities ── */}
                            <section id="communities">
                                <div className="flex flex-col gap-2 mb-10">
                                    <h2 className="text-2xl font-bold text-[#1A1A1A]">My Communities</h2>
                                    <p className="text-[#6B7280] text-sm">The people who make it all worth it ❤️</p>
                                    <p className="text-[10px] font-mono text-[#6B7280] opacity-60">Click images to expand · tap dots to browse</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                                    {communities.map((comm) => {
                                        const currIdx = photoIndex[comm.org] ?? 0
                                        const currImg = comm.images[currIdx]
                                        const currLabel = comm.labels[currIdx] ?? ''
                                        return (
                                            <div key={comm.org} className="flex flex-col gap-3">
                                                {/* Icon + Org */}
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center text-sm shadow-sm font-display font-bold text-[#1A1A1A] shrink-0">
                                                        {comm.title[0]}
                                                    </div>
                                                    <div className="flex flex-col gap-0 min-w-0">
                                                        {comm.url ? (
                                                            <a href={comm.url} target="_blank" rel="noopener noreferrer" className="font-display font-bold text-[#1A1A1A] hover:text-[#10B981] transition-colors text-sm truncate">{comm.org}</a>
                                                        ) : (
                                                            <h3 className="font-display font-bold text-[#1A1A1A] text-sm truncate">{comm.org}</h3>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Description */}
                                                <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">{comm.description}</p>
                                                {/* Polaroid */}
                                                <div
                                                    onClick={() => setSelectedImage({ src: currImg, label: currLabel })}
                                                    onTouchStart={handleTouchStart}
                                                    onTouchEnd={(e) => handleTouchEnd(e, comm.org, comm.images.length)}
                                                    className="w-[140px] h-[180px] polaroid transition-all hover:scale-105 cursor-zoom-in self-start mt-1"
                                                >
                                                    <div className="relative w-full h-[140px] bg-[#F3F4F6] rounded overflow-hidden">
                                                        <div className="absolute inset-0 flex items-center justify-center text-[#6B7280] font-mono text-[7px] z-10 opacity-40 capitalize">{comm.title}_polaroid</div>
                                                        <Image src={currImg} alt={currLabel} fill className="object-cover z-20" />
                                                    </div>
                                                    <p className="text-center mt-2 font-display text-[8px] text-[#6B7280] px-1 truncate">{currLabel}</p>
                                                </div>
                                                {/* Dots */}
                                                {comm.images.length > 1 && (
                                                    <div className="flex items-center gap-1.5">
                                                        {comm.images.map((_, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={(e) => handleDotClick(e, comm.org, i)}
                                                                className={`w-2 h-2 rounded-full transition-all ${i === currIdx ? 'bg-[#1A1A1A]' : 'bg-[#D1D5DB] hover:bg-[#6B7280]'
                                                                    }`}
                                                                aria-label={`Photo ${i + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>

                            {/* ── Exploring ── */}
                            <section id="exploring" className="pt-12 md:pt-0 border-t md:border-t-0 border-[#F3F4F6]">
                                <h2 className="text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-6">Exploring</h2>
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

                            {/* ── Beyond Work ── */}
                            <section id="beyond-work" className="pt-12 md:pt-0 border-t md:border-t-0 border-[#F3F4F6]">
                                <h2 className="text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-6">Beyond Work</h2>
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

                            {/* ── Shelf ── */}
                            <section id="shelf" className="pt-12 md:pt-0 border-t md:border-t-0 border-[#F3F4F6]">
                                <h2 className="text-sm font-bold text-[#6B7280] uppercase tracking-widest mb-6">Shelf</h2>
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
                                        ].map((fav: { src: string; label?: string; position?: string }, i) => (
                                            <div
                                                key={fav.src}
                                                onClick={() => setSelectedImage(fav)}
                                                className={`w-[120px] h-[170px] polaroid transition-all hover:scale-110 hover:z-10 cursor-zoom-in ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                                            >
                                                <div className="relative w-full h-[130px] bg-[#F3F4F6] rounded overflow-hidden">
                                                    <Image
                                                        src={fav.src}
                                                        alt={fav.label ?? ''}
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

                    {/* Back to Top */}
                    <div className="flex justify-center mt-16 pt-8 border-t border-[#F3F4F6]">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest uppercase text-[#6B7280] hover:text-[#10B981] transition-colors group"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D1D5DB] group-hover:bg-[#10B981] transition-colors" />
                            ↑ Back to top
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
