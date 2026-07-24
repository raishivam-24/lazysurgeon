import Reveal from './Reveal.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'
import heroImg from '../assets/hero.jpg'

const badges = ['8-hr battery backup', 'Voice-command control', '3X magnification', 'Clamps in seconds']

export default function Hero() {
  return (
    <section id="top" className="navy-grad text-white pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <AnimatedBackground variant="hero" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center relative">
        <Reveal>
          <p className="text-xs md:text-sm tracking-[0.25em] text-white/60 font-semibold mb-5">
            THE ALL-IN-ONE PORTABLE OT LIGHT
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-[1.02] mb-6">
            LUMI<span className="italic shimmer-text">FLEX</span>
            <span className="align-top text-xl">™</span>
          </h1>
          <p className="font-display text-2xl md:text-3xl font-light mb-1">Light. Record. Assist.</p>
          <p className="font-display text-2xl md:text-3xl font-bold mb-6">All in One.</p>
          <p className="text-white/75 leading-relaxed max-w-md mb-8">
            One clamp-anywhere light that ends shadows, outlasts power cuts, records your
            procedures and answers to your voice — so your hands never leave the field.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map((b, i) => (
              <Reveal key={b} delay={200 + i * 90}>
                <span className="text-sm border border-white/25 rounded-full px-4 py-2 text-white/85 hover:border-accent hover:text-white hover:bg-white/5 transition cursor-default">
                  {b}
                </span>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#pricing" className="magnetic-btn bg-accent hover:bg-accent/90 transition px-6 py-3 rounded-full font-semibold">
              Book a free clinic demo
            </a>
            <p className="text-sm text-white/60">
              <span className="font-semibold text-white">LITE</span> ₹14,999 &nbsp;·&nbsp;
              <span className="font-semibold text-white">PRO</span> ₹19,999 &nbsp;·&nbsp;
              <span className="font-semibold text-white">ULTRA</span> ₹29,999
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-3 shadow-2xl shadow-black/40 max-w-xs w-full animate-float hover:shadow-accent/30 transition-shadow duration-500">
            <img
              src={heroImg}
              alt="Lumiflex portable OT light, clamped with phone stand, instrument tray and magnifier"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <p className="text-xs text-white/50 mt-4 tracking-wide">LUMIFLEX™ · shown with Ultra assist suite</p>
        </Reveal>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="italic text-white/70 text-sm">
          <span className="font-semibold not-italic text-white">By surgeons,</span> for surgeons.
        </p>
        <p className="text-white/50 text-sm">www.thelazysurgeon.com</p>
      </div>
    </section>
  )
}