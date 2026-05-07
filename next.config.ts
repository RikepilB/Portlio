import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    async redirects() {
        return [
            { source: '/blog', destination: '/essays', permanent: true },
            { source: '/blog/:slug', destination: '/essays/:slug', permanent: true },
        ]
    },
}

export default nextConfig
