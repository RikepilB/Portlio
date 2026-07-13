'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Instagram, Twitter, X } from 'lucide-react'
import { socialLinks } from '@/data/social'
import { AboutVisionBoard } from '@/components/about/AboutVisionBoard'
import { Reveal } from '@/components/ui/Reveal'
import { useDictionary } from '@/contexts/LocaleContext'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
}

export default function AboutPage() {
  const dict = useDictionary()
  const [selectedImage, setSelectedImage] = useState<{ src: string; label?: string } | null>(null)
  const [bioExpanded, setBioExpanded] = useState(false)

  const communities = [
    {
      title: 'LASO',
      org: dict.about.communities[0].org,
      url: null as string | null,
      description: dict.about.communities[0].description,
      images: [
        '/images/Latin american student Organization/WhatsApp Image 2025-09-22 at 20.53.18_17a5ac8d.jpg',
        '/images/Latin american student Organization/LASOPIC.png',
      ],
      labels: [...dict.about.communities[0].labels],
    },
    {
      title: 'Hispanotech',
      org: dict.about.communities[1].org,
      url: 'https://hispanotech.ca',
      description: dict.about.communities[1].description,
      images: ['/images/Hispanotech/1764659307193.jpg', '/images/Hispanotech/Picture8.jpg'],
      labels: [...dict.about.communities[1].labels],
    },
    {
      title: 'Wealthsimple Foundation',
      org: dict.about.communities[2].org,
      url: null,
      description: dict.about.communities[2].description,
      images: [
        '/images/wealthsimple foundation/WhatsApp Image 2025-12-04 at 10.12.57 AM.jpeg',
        '/images/wealthsimple foundation/wealthsimpl4.jpeg',
      ],
      labels: [...dict.about.communities[2].labels],
    },
    {
      title: 'OTIN',
      org: dict.about.communities[3].org,
      url: null,
      description: dict.about.communities[3].description,
      images: ['/images/Okanagan tech industry night/1730065718844.jpg'],
      labels: [...dict.about.communities[3].labels],
    },
    {
      title: 'BrainTrainr',
      org: dict.about.communities[4].org,
      url: null,
      description: dict.about.communities[4].description,
      images: [
        '/images/Braintrainer/Screenshot 2026-02-08 135030.png',
        '/images/Braintrainer/Screenshot 2026-02-08 134600.png',
      ],
      labels: [...dict.about.communities[4].labels],
    },
    {
      title: 'Alianza Latina',
      org: dict.about.communities[5].org,
      url: null,
      description: dict.about.communities[5].description,
      images: [
        '/images/Alianza latina/Screenshot 2026-02-08 134128.png',
        '/images/Alianza latina/1772322136233.jpg',
      ],
      labels: [...dict.about.communities[5].labels],
    },
    {
      title: 'Cursor Community',
      org: dict.about.communities[6].org,
      url: null,
      description: dict.about.communities[6].description,
      images: [
        '/images/cursor community/1772147856117.jpg',
        '/images/cursor community/1772147856129.jpg',
      ],
      labels: [...dict.about.communities[6].labels],
    },
    {
      title: 'Canadian Cancer Society',
      org: dict.about.communities[7].org,
      url: null,
      description: dict.about.communities[7].description,
      images: ['/images/Canadian Cancer society/images.png'],
      labels: [...dict.about.communities[7].labels],
    },
    {
      title: 'Scale Without Borders',
      org: dict.about.communities[8].org,
      url: 'https://scalewithoutborders.com',
      description: dict.about.communities[8].description,
      images: [
        '/images/scale_withoutborders/WhatsApp Image 2025-10-16 at 23.17.46_2a277869.jpg',
        '/images/scale_withoutborders/WhatsApp Image 2025-10-22 at 20.19.29_c2e8688d.jpg',
      ],
      labels: [...dict.about.communities[8].labels],
    },
  ]

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <div className="relative min-h-screen bg-felt">
      <div className="side-light" aria-hidden="true" />

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-mist-ice/85 p-4 backdrop-blur-md animate-in fade-in duration-200 sm:p-8"
        >
          <div
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative flex w-full max-w-5xl cursor-default flex-col overflow-hidden rounded-2xl border border-silver/35 bg-mist-ice shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-2 duration-300"
          >
            <div className="flex items-center justify-between border-b border-silver/35 bg-mist-soft p-4">
              <h3 className="font-display text-sm font-bold tracking-tight text-anthracite">
                {selectedImage.label || dict.about.imagePreview}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-lg p-1 text-[#6e7481] transition-colors hover:bg-mist-deep"
                aria-label={dict.about.closePreview}
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

      <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-20 sm:px-12 md:pb-12">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[0.08em] text-gold-bright animate-fade-up sm:text-6xl">
              {dict.about.heading}
            </h1>

            <div className="flex max-w-2xl flex-col gap-[18px] font-sans text-[16px] font-light leading-[1.9] text-muted animate-fade-up stagger-2">
              <div className={bioExpanded ? 'flex flex-col gap-[18px]' : 'line-clamp-7'}>
                {(bioExpanded ? dict.about.bio : dict.about.bio.slice(0, 1)).map((paragraph, i) => (
                  <p key={i} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setBioExpanded(!bioExpanded)}
                className="inline-flex w-fit cursor-pointer items-center gap-1 text-sm font-semibold text-gold-bright transition-colors hover:text-gold"
              >
                {bioExpanded ? dict.about.showLess : dict.about.readMore}
                <span className="text-[10px]">{bioExpanded ? '↑' : '→'}</span>
              </button>
            </div>

            <div className="mt-3 flex items-center gap-4 rounded-2xl border border-rule bg-felt-deep/35 p-5 shadow-felt animate-fade-up stagger-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold font-display text-xl font-bold text-felt-deep shadow-md">
                U
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[15px] font-extrabold leading-snug text-matte">
                  {dict.about.education.degree} · {dict.about.education.minor}
                </span>
                <span className="font-mono text-[12px] font-semibold text-gold-bright">
                  {dict.about.education.school}
                </span>
                <span className="font-mono text-[12px] font-medium text-muted">
                  {dict.about.education.period} · {dict.about.education.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:hidden mt-2">
              {socialLinks.slice(0, 4).map((link) => {
                const Icon = iconMap[link.platform] ?? Github
                return (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-felt-deep/35 border border-rule flex items-center justify-center text-muted hover:text-gold-bright hover:border-gold hover:shadow-sm transition-all"
                    aria-label={link.label}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex-col items-center gap-12 hidden lg:flex justify-end" aria-hidden="true">
            <div className="relative h-[420px] w-full">
              <div className="absolute top-0 right-10 w-[200px] h-[240px] polaroid rotate-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all z-0 hover:z-20">
                <div className="relative w-full h-full bg-mist-deep rounded overflow-hidden">
                  <Image src="/images/About_hero/family.jpeg" alt="" fill className="object-cover object-center" />
                </div>
                <p className="text-center mt-3 font-display text-[9px] text-[#6e7481]">{dict.about.polaroids.family}</p>
              </div>
              <div className="absolute top-16 left-8 w-[220px] h-[260px] polaroid -rotate-3 z-10 hover:z-30">
                <div className="relative w-full h-full bg-mist-deep rounded overflow-hidden">
                  <Image src="/images/About_hero/travelling.jpeg" alt="" fill className="object-cover object-center" />
                </div>
                <p className="text-center mt-3 font-display text-[9px] text-[#6e7481]">{dict.about.polaroids.travelling}</p>
              </div>
              <div className="absolute bottom-4 right-4 w-[170px] h-[210px] polaroid -rotate-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all z-0 hover:z-40">
                <div className="relative w-full h-full bg-mist-deep rounded overflow-hidden">
                  <Image src="/images/About_hero/toronto.jpeg" alt="" fill className="object-cover object-center" />
                </div>
                <p className="text-center mt-3 font-display text-[9px] text-[#6e7481]">{dict.about.polaroids.toronto}</p>
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
                    className="w-11 h-11 rounded-full bg-felt-deep/35 border border-rule flex items-center justify-center text-muted hover:text-gold-bright hover:border-gold hover:shadow-md transition-all group"
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

      <div className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-8 sm:px-12 md:py-10">
          <Reveal delayMs={80}>
            <AboutVisionBoard
              communities={communities}
              beyondWork={dict.about.beyondWork.map((item) => ({ ...item }))}
              onPickImage={setSelectedImage}
              hint={dict.about.boardHint}
            />
          </Reveal>
        </div>
      </div>
    </div>
  )
}
