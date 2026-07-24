import { useEffect, useState } from 'react'
import { Icon, icons } from './icons.jsx'

const links = [
  ['Features', '#features'],
  ['Why Lumiflex', '#why'],
  ['Pricing', '#pricing'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur bg-navy/90 border-b transition-all duration-300 ${
        scrolled ? 'border-white/15 shadow-lg shadow-black/20' : 'border-white/10'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-white group">
          <span className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-[10px] font-bold transition-transform duration-500 group-hover:rotate-[360deg]">
            TLS
          </span>
          <span className="text-xs tracking-[0.2em] font-semibold">THE LAZY SURGEON</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="underline-grow hover:text-white transition">
              {label}
            </a>
          ))}
          <a
            href="#pricing"
            className="magnetic-btn bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full font-semibold transition"
          >
            Book a Demo
          </a>
        </nav>
        <button className="md:hidden text-white transition-transform active:scale-90" onClick={() => setOpen(!open)}>
          <Icon path={icons.menu} />
        </button>
      </div>
      <div
        className={`md:hidden bg-navy-deep px-6 flex flex-col gap-3 text-white/85 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-64 pb-4 pt-1 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {links.map(([label, href], i) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 40}ms` }}
            className={`transition-all duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
          >
            {label}
          </a>
        ))}
        <a
          href="#pricing"
          onClick={() => setOpen(false)}
          className="magnetic-btn bg-accent text-white px-4 py-2 rounded-full font-semibold text-center"
        >
          Book a Demo
        </a>
      </div>
    </header>
  )
}
