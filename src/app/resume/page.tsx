import { Download } from 'lucide-react'
import { ResumePaper } from '@/components/ResumePaper'

export default function ResumePage() {
    return (
        <div className="bg-[#f8f9fa] min-h-screen py-16">
            <div className="max-w-[850px] mx-auto">
                {/* Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-6 mb-8 px-6 animate-fade-up">
                    <a
                        href="/resume.pdf"
                        download="RichardPillaca_Resume.pdf"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#0c5a40]"
                    >
                        <Download size={15} strokeWidth={2} aria-hidden="true" />
                        Download Résumé
                    </a>
                </div>

                {/* The Resume "Paper" */}
                <div className="animate-fade-up stagger-1">
                    <ResumePaper />
                </div>
            </div>
        </div>
    )
}
