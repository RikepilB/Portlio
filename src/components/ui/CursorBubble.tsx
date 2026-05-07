'use client'

import { useEffect, useState } from 'react'

export function CursorBubble() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })

            const target = e.target as HTMLElement
            const inNavbar = target.closest('header') !== null

            setIsPointer(!inNavbar && (
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON'
            ))
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [])

    return (
        <div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden sm:flex items-center justify-center mix-blend-difference bg-white rounded-full ${isPointer ? 'w-10 h-10 opacity-60' : 'w-4 h-4 opacity-100'
                }`}
            style={{
                transform: `translate3d(${position.x - (isPointer ? 20 : 8)}px, ${position.y - (isPointer ? 20 : 8)}px, 0)`
            }}
        />
    )
}
