const PATHS = {
  bulb: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="M9.5 20h5M10 22.5h4" />
      <path d="M12 4V2" />
    </>
  ),
  focus: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),
  gooseneck: (
    <path d="M6 21c0-4 1-6 4-6s2-4-1-4 0-5 3-5 4 3 4 3" />
  ),
  clamp: (
    <>
      <path d="M5 6h5v5H5z" />
      <path d="M14 13h5v5h-5z" />
      <path d="M10 8.5h5M9 15.5h5" />
    </>
  ),
  battery: (
    <>
      <rect height="10" rx="1.5" width="16" x="3" y="7" />
      <rect height="4" width="2" x="21" y="10" />
      <path d="M6 10h8v4H6z" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  phone: (
    <>
      <rect height="18" rx="2" width="11" x="6.5" y="3" />
      <circle cx="12" cy="18" r="0.9" />
    </>
  ),
  tray: (
    <>
      <rect height="10" rx="1.5" width="18" x="3" y="7" />
      <path d="M3 12h18" />
    </>
  ),
  magnifier: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.35-4.35" />
    </>
  ),
}

export default function IconGlyph({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
