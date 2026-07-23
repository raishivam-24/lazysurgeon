export const Icon = ({ path, className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {path}
  </svg>
)

export const icons = {
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  bend: (
    <>
      <path d="M6 4c0 6 12 4 12 10" />
      <circle cx="6" cy="4" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  clamp: (
    <>
      <rect x="4" y="10" width="16" height="5" rx="1.5" />
      <path d="M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="8" width="17" height="8" rx="1.5" />
      <path d="M21 10.5v3" />
      <path d="M5 11.5h4" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />,
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  tray: (
    <>
      <path d="M3 15h18l-2 4H5l-2-4z" />
      <path d="M6 15V7a2 2 0 012-2h8a2 2 0 012 2v8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  cross: (
    <>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
}

export const FeatureIcon = ({ name }) => (
  <div className="w-11 h-11 rounded-xl bg-accentlight text-accent flex items-center justify-center mb-4">
    <Icon path={icons[name]} className="w-5 h-5" />
  </div>
)
