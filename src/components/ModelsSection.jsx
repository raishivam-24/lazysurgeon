import './ModelsSection.css'

const TIERS = [
  {
    tier: 'LITE',
    tagline: 'The bright essential for everyday exams',
    price: '14,999',
    note: 'Type-C powered · incl. GST',
    cta: 'Select Lite',
    highlight: false,
  },
  {
    tier: 'PRO',
    tagline: "Battery backup + recording for clinics that can't stop",
    price: '19,999',
    note: '8-hr cordless runtime · incl. GST',
    cta: 'Select Pro',
    highlight: true,
    badge: 'Most popular',
  },
  {
    tier: 'ULTRA',
    tagline: 'The hands-free OT assistant — voice, UV & magnification',
    price: '29,999',
    strikePrice: '₹33,995 value',
    note: 'Everything in Pro + assist suite & case · incl. GST',
    cta: 'Select Ultra',
    highlight: false,
  },
]

export default function ModelsSection() {
  return (
    <section id="models" className="models">
      <div className="models__inner">
        <div className="models__intro">
          <p className="models__eyebrow">Pricing & models</p>
          <h2 className="models__title">Pick your Lumiflex.</h2>
          <p className="models__lede">
            Three builds on the same shadow-free platform. Pay for what your practice needs —
            upgrade paths and add-ons keep every option open.
          </p>
        </div>

        <div className="models__grid">
          {TIERS.map((t) => (
            <div
              className={`tier-card${t.highlight ? ' tier-card--highlight' : ''}`}
              key={t.tier}
            >
              {t.badge && <span className="tier-card__badge">{t.badge}</span>}
              <p className="tier-card__brand">LUMIFLEX</p>
              <h3 className="tier-card__name">{t.tier}</h3>
              <p className="tier-card__tagline">{t.tagline}</p>

              {t.strikePrice && (
                <span className="tier-card__strike">{t.strikePrice}</span>
              )}
              <div className="tier-card__price">
                <span className="tier-card__currency">₹</span>
                <span className="tier-card__amount">{t.price}</span>
              </div>
              <p className="tier-card__note">{t.note}</p>

              <button className="tier-card__cta">{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
