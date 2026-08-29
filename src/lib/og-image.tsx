import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

export function portfolioOgImage({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#4f6258',
          color: '#ffffff',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#d4af37',
          }}
        >
          {kicker}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 48 ? 52 : 64,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                lineHeight: 1.35,
                color: '#eaeced',
                maxWidth: 920,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            color: '#f2e3c6',
            letterSpacing: '0.04em',
          }}
        >
          richardpillaca.com
        </div>
      </div>
    ),
    { ...ogSize },
  )
}
