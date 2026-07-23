import { useState } from 'react'
import { Icon, icons } from './icons.jsx'

const links = [
  ['Features', '#features'],
  ['Why Lumiflex', '#why'],
  ['Pricing', '#pricing'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-navy/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-[10px] font-bold">
            TLS
          </span>
          <span className="text-xs tracking-[0.2em] font-semibold">THE LAZY SURGEON</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-white transition">
              {label}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full font-semibold transition"
          >
            Book a Demo
          </a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Icon path={icons.menu} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy-deep px-6 pb-4 flex flex-col gap-3 text-white/85">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="bg-accent text-white px-4 py-2 rounded-full font-semibold text-center"
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  )
}
