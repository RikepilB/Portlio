import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/blog', destination: '/en/essays', permanent: true },
      { source: '/blog/:slug', destination: '/en/essays/:slug', permanent: true },
      { source: '/skills', destination: '/en', permanent: false },
      { source: '/resume', destination: '/en/journey', permanent: false },
      { source: '/:locale(en|es)/skills', destination: '/:locale', permanent: false },
      { source: '/:locale(en|es)/resume', destination: '/:locale/journey', permanent: false },
    ]
  },
}

export default nextConfig
