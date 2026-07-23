import './ModelStrip.css'

const MODELS = [
  { name: 'LITE', price: '₹14,999' },
  { name: 'PRO', price: '₹19,999' },
  { name: 'ULTRA', price: '₹29,999' },
]

export default function ModelStrip() {
  return (
    <section className="model-strip">
      <div className="model-strip__inner">
        <div className="model-strip__models">
          <span className="model-strip__label">Model lineup inside</span>
          <span className="model-strip__divider" aria-hidden="true"></span>
          {MODELS.map((m) => (
            <span className="model-strip__model" key={m.name}>
              {m.name} <span className="model-strip__price">{m.price}</span>
            </span>
          ))}
        </div>

        <p className="model-strip__tag">
          By surgeons, <span className="model-strip__tag--strong">for surgeons.</span>
        </p>
      </div>
    </section>
  )
}
