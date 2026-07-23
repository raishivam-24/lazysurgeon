import './WhySection.css'

const PAIN_POINTS = [
  {
    lead: 'Shadows over the field',
    text: 'your own head and hands block the overhead light.',
  },
  {
    lead: 'Power cut mid-procedure',
    text: 'half of surveyed clinics face outages monthly or worse.',
  },
  {
    lead: 'No way to document',
    text: 'one hand holds the phone, the other holds everything else.',
  },
  {
    lead: 'Heavy, fixed, fiddly',
    text: "lights that can't move between rooms and need constant re-adjustment.",
  },
]

const ANSWERS = [
  {
    lead: 'Light from where you need it',
    text: 'clamp beside the field, bend the neck, done. Shadow-free by design.',
  },
  {
    lead: '8 hours on battery',
    text: 'the procedure continues whether the grid cooperates or not.',
  },
  {
    lead: 'Phone mounted over the field',
    text: 'record, photograph and teleconsult completely hands-free.',
  },
  {
    lead: 'Carry it in one hand',
    text: 'OPD to minor OT to home visit, set up again in under a minute.',
  },
]

const STATS = [
  { value: '1 in 2', label: 'surveyed clinics face power cuts monthly, weekly or daily' },
  { value: '86%', label: 'would use the phone mount for photography & teleconsults' },
  { value: '#1 ask', label: 'voice control & magnification — now built into Ultra' },
]

const USAGE = [
  {
    eyebrow: 'In the OPD',
    title: 'Everyday examinations',
    text: 'Bright, neutral daylight for skin, scalp, ENT and oral exams — with the 3X magnifier for lesions and fine detail.',
  },
  {
    eyebrow: 'In the Minor OT',
    title: 'Procedures & suturing',
    text: 'Spot focus on the field, instruments on the tray, colors switched by voice — your hands never break sterility.',
  },
  {
    eyebrow: 'Beyond the Clinic',
    title: 'Teleconsults & teaching',
    text: 'The phone stand turns every procedure into documentation, a second opinion or a teaching video — no assistant needed.',
  },
]

const FRUSTRATIONS = [
  { label: 'Limited mobility / portability', count: 24, total: 50 },
  { label: 'Lack of brightness', count: 23, total: 50 },
  { label: 'Shadows over the field', count: 21, total: 50 },
  { label: "Can't document / photograph", count: 20, total: 50 },
  { label: 'No battery during power cuts', count: 19, total: 50 },
]

export default function WhySection() {
  return (
    <section id="why-lumiflex" className="why">
      <div className="why__inner">
        <p className="why__eyebrow">Why Lumiflex</p>
        <h2 className="why__title">Built from what 50+ clinicians told us was broken.</h2>
        <p className="why__lede">
          Before designing the Lumiflex, we surveyed dermatologists, surgeons and GPs across
          India about their examination lighting. Their frustrations became our spec sheet.
        </p>

        <div className="why__compare">
          <div className="why__card why__card--pain">
            <h3 className="why__card-title why__card-title--pain">Sound familiar?</h3>
            <ul className="why__list">
              {PAIN_POINTS.map((p) => (
                <li key={p.lead} className="why__item">
                  <span className="why__marker why__marker--pain" aria-hidden="true">✕</span>
                  <p><strong>{p.lead}</strong> — {p.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="why__card why__card--answer">
            <h3 className="why__card-title why__card-title--answer">The Lumiflex answer</h3>
            <ul className="why__list">
              {ANSWERS.map((a) => (
                <li key={a.lead} className="why__item">
                  <span className="why__marker why__marker--answer" aria-hidden="true">✓</span>
                  <p><strong>{a.lead}</strong> — {a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="why__stats">
          {STATS.map((s) => (
            <div className="why__stat" key={s.value}>
              <span className="why__stat-value">{s.value}</span>
              <p className="why__stat-label">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="why__usage">
          {USAGE.map((u) => (
            <div className="why__usage-card" key={u.title}>
              <span className="why__usage-eyebrow">{u.eyebrow}</span>
              <h4 className="why__usage-title">{u.title}</h4>
              <p className="why__usage-text">{u.text}</p>
            </div>
          ))}
        </div>

        <div className="why__chart">
          <h3 className="why__chart-title">
            Top frustrations clinicians reported with their current lighting
          </h3>
          <div className="why__chart-rows">
            {FRUSTRATIONS.map((f) => (
              <div className="why__chart-row" key={f.label}>
                <span className="why__chart-label">{f.label}</span>
                <div className="why__chart-bar-track">
                  <div
                    className="why__chart-bar"
                    style={{ width: `${(f.count / f.total) * 100}%` }}
                  ></div>
                </div>
                <span className="why__chart-count">
                  {f.count}<span className="why__chart-total">/{f.total}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="why__quote">
          "Designed by surgeons, <strong>for surgeons</strong> — because we were tired of it too."
        </p>
      </div>
    </section>
  )
}
