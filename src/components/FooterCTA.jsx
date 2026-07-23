import Reveal from './Reveal.jsx'

export default function FooterCTA() {
  return (
    <footer className="navy-grad text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <p className="font-display text-2xl md:text-3xl font-bold mb-8">Light. Record. Assist. All in One.</p>
          <a
            href="#pricing"
            className="inline-block bg-accent hover:bg-accent/90 transition px-8 py-3.5 rounded-full font-semibold mb-10"
          >
            Book a free clinic demo
          </a>
        </Reveal>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-white/50">
          <span>www.thelazysurgeon.com</span>
          <span className="hidden sm:inline">·</span>
          <span className="italic">By surgeons, for surgeons.</span>
        </div>
      </div>
    </footer>
  )
}
