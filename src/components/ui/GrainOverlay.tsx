export function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="grain-overlay"
      focusable="false"
      preserveAspectRatio="none"
    >
      <filter id="grain-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  )
}
