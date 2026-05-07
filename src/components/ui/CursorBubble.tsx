'use client'

import { useEffect, useRef } from 'react'

export function CursorBubble() {
    const bubbleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let rafId: number
        const target = { x: 0, y: 0, isPointer: false }

        const update = () => {
            const el = bubbleRef.current
            if (!el) return
            const offset = target.isPointer ? 20 : 8
            el.style.transform = `translate3d(${target.x - offset}px, ${target.y - offset}px, 0)`
            el.className = `fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden sm:flex items-center justify-center mix-blend-difference bg-white rounded-full ${target.isPointer ? 'w-10 h-10 opacity-60' : 'w-4 h-4 opacity-100'}`
            rafId = requestAnimationFrame(update)
        }

        const onMouseMove = (e: MouseEvent) => {
            target.x = e.clientX
            target.y = e.clientY
            const el = e.target as HTMLElement
            const inNavbar = el.closest('header') !== null
            target.isPointer = !inNavbar && (
                window.getComputedStyle(el).cursor === 'pointer' ||
                el.tagName === 'A' ||
                el.tagName === 'BUTTON'
            )
        }

        rafId = requestAnimationFrame(update)
        window.addEventListener('mousemove', onMouseMove, { passive: true })
        return () => {
            cancelAnimationFrame(rafId)
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <div
            ref={bubbleRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:flex items-center justify-center mix-blend-difference bg-white rounded-full w-4 h-4 opacity-100"
        />
    )
}
