import './Header.css'

const NAV_ITEMS = [
  { label: 'Why Lumiflex', href: '#why-lumiflex' },
  { label: 'Features', href: '#features' },
  { label: 'Models', href: '#models' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__mark">
          <span className="header__dot" aria-hidden="true"></span>
          THE LAZY SURGEON
        </a>

        <nav className="header__nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <button className="header__cta">Book a Demo</button>
      </div>
    </header>
  )
}
