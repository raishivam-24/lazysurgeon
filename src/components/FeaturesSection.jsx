import IconGlyph from './IconGlyph.jsx'
import './FeaturesSection.css'

const FEATURES = [
  {
    icon: 'bulb',
    title: 'Shadow-free LED',
    text: 'High-intensity, flicker-free illumination in neutral daylight — the tone 90% of surveyed clinicians prefer.',
  },
  {
    icon: 'focus',
    title: 'Spot ⇄ flood focus',
    text: 'Twist the head to go from a tight surgical spot to full-field flood — no accessories needed.',
  },
  {
    icon: 'gooseneck',
    title: '360° gooseneck',
    text: 'Bend it once and it holds position through the whole procedure. No drift, no re-adjusting.',
  },
  {
    icon: 'clamp',
    title: 'Clamps in seconds',
    text: 'No screws, no tools. The spring clamp grips OT bed rails, frames and tabletops up to 60 mm.',
  },
  {
    icon: 'battery',
    title: '8-hour battery',
    text: 'A full OPD day, cordless. Power cuts — which hit 1 in 2 surveyed clinics — simply stop mattering.',
  },
  {
    icon: 'bolt',
    title: 'Type-C fast charging',
    text: 'Charges on the same cable as your phone. Top up between patients, run all day.',
  },
  {
    icon: 'phone',
    title: 'Smartphone stand',
    text: 'Lock your phone over the field to record procedures, shoot clinical photos or run teleconsults hands-free.',
  },
  {
    icon: 'tray',
    title: 'Instrument tray',
    text: 'A stable tray on the arm keeps instruments within reach — no more turning away from the field.',
  },
  {
    icon: 'magnifier',
    title: '3X telescopic magnifier',
    text: 'An extendable lens brings fine detail into view — sutures, lesions, margins — without leaning in.',
  },
]

const MODES = [
  { name: 'White', color: '#ffffff' },
  { name: 'Yellow', color: '#FFC107' },
  { name: 'Red', color: '#E53935' },
  { name: 'UV', color: '#8E24AA' },
]

const GLANCE = [
  { value: 'One-hand', label: 'portable build' },
  { value: '≤ 60 mm', label: 'clamp grip' },
  { value: '8 hr', label: 'battery runtime' },
  { value: 'Type-C', label: 'fast charging' },
  { value: '4 modes', label: 'W · Y · R · UV' },
  { value: '3X', label: 'magnification' },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="features">
      <div className="features__inner">
        <p className="features__eyebrow">Every detail, engineered</p>
        <h2 className="features__title">One light that does the work of your whole setup.</h2>
        <p className="features__lede">
          Exam lamp, OT spotlight, recording rig, magnifier and instrument station — the
          Lumiflex replaces all of them with{' '}
          <strong>one clamp-on unit you can carry in one hand</strong>.
        </p>

        <div className="features__grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__icon">
                <IconGlyph name={f.icon} className="feature-card__glyph" />
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__text">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="signature-banner">
          <p className="signature-banner__eyebrow">Signature feature</p>
          <h3 className="signature-banner__title">Say the word. The light obeys.</h3>
          <p className="signature-banner__text">
            Mid-procedure, your hands stay sterile. Just say{' '}
            <strong>"White", "Yellow", "Red"</strong> or <strong>"UV"</strong> and the Lumiflex
            switches mode instantly — the #1 feature clinicians asked us to build.
          </p>

          <div className="signature-banner__modes">
            {MODES.map((m) => (
              <div className="signature-banner__mode" key={m.name}>
                <span
                  className="signature-banner__swatch"
                  style={{ background: m.color }}
                ></span>
                <span className="signature-banner__mode-name">{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glance">
          <span className="glance__label">At a glance</span>
          <div className="glance__stats">
            {GLANCE.map((g) => (
              <div className="glance__stat" key={g.value}>
                <span className="glance__value">{g.value}</span>
                <span className="glance__stat-label">{g.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
