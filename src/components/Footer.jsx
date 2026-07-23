import './Footer.css'

const LINKS = ['Terms of Service', 'Privacy Policy', 'Contact Support']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__mark">THE LAZY SURGEON</div>
        <p className="footer__copy">© THE LAZY SURGEON. By surgeons, for surgeons.</p>
        <nav className="footer__nav" aria-label="Footer">
          {LINKS.map((link) => (
            <a href="#" className="footer__link" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
