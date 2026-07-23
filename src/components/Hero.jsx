import './Hero.css'

const CHIPS = [
  '8-hr battery backup',
  'Voice-command control',
  '3X magnification',
  'Clamps in seconds',
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__sweep" aria-hidden="true"></div>

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">The all-in-one portable OT light</p>

          <h1 className="hero__title">
            LUMIFLEX<span className="hero__trademark">™</span>
          </h1>

          <div className="hero__sub">
            <h2 className="hero__tagline">
              Light. Record. Assist.
              <br />
              <span className="hero__tagline--strong">All in One.</span>
            </h2>
            <p className="hero__desc">
              One clamp-anywhere light that ends shadows, outlasts power cuts,
              records your procedures and answers to your voice — so your
              hands never leave the field.
            </p>
          </div>

          <ul className="hero__chips">
            {CHIPS.map((chip) => (
              <li key={chip} className="hero__chip">
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__frame">
          <span className="hero__bracket hero__bracket--tl" aria-hidden="true"></span>
          <span className="hero__bracket hero__bracket--tr" aria-hidden="true"></span>
          <span className="hero__bracket hero__bracket--bl" aria-hidden="true"></span>
          <span className="hero__bracket hero__bracket--br" aria-hidden="true"></span>

          <img
            className="hero__image"
            alt="A highly detailed, professional product photography diagram of an advanced portable medical operating theater light system called Lumiflex. The device is pristine white with black and metallic accents, featuring a multi-articulated flexible gooseneck, a ring light head, a magnifying lens attachment, a smartphone holder, and a stainless steel surgical instrument tray. It is securely clamped to a bed rail."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHGqwFN5N0hu9WDYY5eDF0mMvSZ7lVSatwRbT5HGx1-tTMhrRppCylk7qccXa_cZgztRZ2gJLg7NunmUsV_j0PowXp5cxuVxhRh7MHOIGs-pS_9kHSB9k6R8TgEF6hUU37W0W2Z4GPaVWFeoMCwo2nWU6Y5U6IVvFP1rJhTOM4y4MEQS939jJT9IvXxz-8ZOWSE1gsB_CoQRbZL4Byr3MUYn2sqe9GeUZdx5fA4LqWq3vhU5LYaeI-"
          />

          <p className="hero__caption">LUMIFLEX™ · shown with Ultra assist suite</p>
        </div>
      </div>
    </section>
  )
}
