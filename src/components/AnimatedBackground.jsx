import { useMemo } from 'react'

// Deterministic pseudo-random generator (seeded) so the layout doesn't
// reshuffle on every re-render.
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

// Layered animated background for dark navy sections: a drifting dot-grid,
// glow orbs that revolve on random orbits, and bright twinkling star-particles.
// Purely decorative, pointer-events-none, sits behind the section's content.
export default function AnimatedBackground({ variant = 'hero' }) {
  const starCount = variant === 'hero' ? 22 : 14
  const orbCount = variant === 'hero' ? 4 : 3

  const orbs = useMemo(() => {
    const rand = seeded(variant.length * 17 + 3)
    const palette = ['bg-accent/25', 'bg-white/10', 'bg-gold/15']
    return Array.from({ length: orbCount }).map((_, i) => ({
      id: i,
      top: `${Math.round(rand() * 90)}%`,
      left: `${Math.round(rand() * 90)}%`,
      size: 220 + Math.round(rand() * 260),
      radius: 60 + Math.round(rand() * 110),
      duration: 12 + rand() * 14,
      delay: -rand() * 20,
      reverse: rand() > 0.5,
      color: palette[i % palette.length],
    }))
  }, [variant, orbCount])

  const stars = useMemo(() => {
    const rand = seeded(variant.length * 53 + 11)
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.round(rand() * 100)}%`,
      left: `${Math.round(rand() * 100)}%`,
      size: 1 + Math.round(rand() * 2),
      radius: 12 + Math.round(rand() * 40),
      duration: 6 + rand() * 8,
      delay: -rand() * 14,
      twinkleDuration: 1.6 + rand() * 2.4,
      twinkleDelay: -rand() * 4,
    }))
  }, [variant, starCount])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* drifting dot grid */}
      <div className="absolute inset-0 opacity-[0.22] animate-grid-drift bg-dot-grid" />

      {/* diagonal shine sweep */}
      <div className="absolute -inset-y-1/2 -left-1/2 w-1/2 animate-shine-sweep bg-shine-bar" />

      {/* glow orbs revolving on random orbits */}
      {orbs.map((o) => (
        <div
          key={o.id}
          className={`absolute rounded-full blur-3xl animate-orbit ${o.color}`}
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            '--r': `${o.radius}px`,
            animationDuration: `${o.duration}s`,
            animationDelay: `${o.delay}s`,
            animationDirection: o.reverse ? 'reverse' : 'normal',
          }}
        />
      ))}

      {/* bright twinkling star-particles */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full animate-orbit"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            '--r': `${s.radius}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <span
            className="block w-full h-full rounded-full bg-white animate-twinkle"
            style={{
              boxShadow: '0 0 6px 1px rgba(255,255,255,0.9), 0 0 14px 3px rgba(120,170,255,0.5)',
              animationDuration: `${s.twinkleDuration}s`,
              animationDelay: `${s.twinkleDelay}s`,
            }}
          />
        </span>
      ))}
    </div>
  )
}