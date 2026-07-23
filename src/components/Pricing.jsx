import Reveal from './Reveal.jsx'
import { Icon, icons } from './icons.jsx'

const compareRows = [
  ['High-intensity shadow-free LED · flicker-free', true, true, true],
  ['Adjustable focus — spot ⇄ flood', true, true, true],
  ['360° gooseneck + non-screw clamp (up to 60 mm)', true, true, true],
  ['Type-C fast charging', true, true, true],
  ['Built-in rechargeable battery — 8-hr runtime', false, true, true],
  ['Smartphone stand — record, photograph, teleconsult', false, true, true],
  ['Stainless instrument tray', false, true, true],
  ['Voice-command control — hands stay sterile', false, false, true],
  ['4 light modes — White · Yellow · Red · UV', false, false, true],
  ['Hard-shell carry case included', false, false, true],
  ['Telescopic 3X magnifying lens', false, false, true],
]

const plans = [
  { name: 'LITE', tag: null, price: '₹14,999', sub: 'Type-C powered · incl. GST', blurb: 'The bright essential for everyday exams' },
  { name: 'PRO', tag: null, price: '₹19,999', sub: '8-hr cordless runtime · incl. GST', blurb: "Battery backup + recording for clinics that can't stop" },
  { name: 'ULTRA', tag: '★ MOST POPULAR', price: '₹29,999', value: '₹33,995 value', sub: 'Everything in Pro + assist suite & case · incl. GST', blurb: 'The hands-free OT assistant — voice, UV & magnification' },
]

const valueRows = [
  ['Lumiflex Pro platform', '₹19,999'],
  ['Voice-command module', '₹4,999'],
  ['4 light modes incl. UV', '₹2,999'],
  ['3X magnifier kit', '₹3,999'],
  ['Hard-shell carry case', '₹1,999'],
]

const includes = ['1-year standard warranty', 'Type-C charging cable', 'Direct manufacturer support', 'GST invoice for your clinic']
const addOns = [
  ['Hard-shell carry case', '₹1,999'],
  ['3X magnifier kit', '₹3,999'],
  ['Extended 2-yr warranty (3 yrs total)', '₹2,499'],
]

const howToBuy = [
  ['1', 'Enquire', 'Call or message us at www.thelazysurgeon.com'],
  ['2', 'Free demo at your clinic', 'See it clamped to your own OT bed or table'],
  ['3', 'Delivered & set up', 'Direct from the manufacturer, GST invoice included'],
]

function Cell({ ok }) {
  return ok ? (
    <span className="inline-flex w-5 h-5 rounded-full bg-accent/10 text-accent items-center justify-center mx-auto">
      <Icon path={icons.check} className="w-3 h-3" />
    </span>
  ) : (
    <span className="text-slate-300">—</span>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent text-xs tracking-[0.25em] font-bold mb-4">PRICING &amp; MODELS</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy max-w-2xl mb-4">
            Pick your Lumiflex.
          </h2>
          <p className="text-slate-500 max-w-2xl mb-14 leading-relaxed">
            Three builds on the same shadow-free platform. Pay for what your practice needs —
            upgrade paths and add-ons keep every option open.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`rounded-2xl p-7 h-full flex flex-col border ${
                  p.tag ? 'navy-grad text-white border-transparent shadow-2xl md:-translate-y-3' : 'border-slate-200 text-navy'
                }`}
              >
                {p.tag && <span className="text-gold text-xs font-bold tracking-widest mb-3">{p.tag}</span>}
                <p className="font-display font-extrabold text-xl mb-1">
                  LUMIFLEX <span className="text-accent">{p.name}</span>
                </p>
                <p className={`text-sm mb-6 ${p.tag ? 'text-white/70' : 'text-slate-500'}`}>{p.blurb}</p>
                {p.value && <p className={`text-xs line-through ${p.tag ? 'text-white/40' : 'text-slate-400'}`}>{p.value}</p>}
                <p className="font-display text-3xl font-extrabold mb-1">{p.price}</p>
                <p className={`text-xs mb-6 ${p.tag ? 'text-white/60' : 'text-slate-400'}`}>{p.sub}</p>
                <a
                  href="#"
                  className={`mt-auto text-center rounded-full px-5 py-3 font-semibold transition ${
                    p.tag ? 'bg-accent hover:bg-accent/90' : 'bg-navy text-white hover:bg-navy/90'
                  }`}
                >
                  Book a demo
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="border border-slate-200 rounded-2xl p-7">
              <p className="text-xs tracking-[0.2em] font-bold text-slate-400 mb-5">THE REAL VALUE OF ULTRA</p>
              <ul className="space-y-2.5 text-sm">
                {valueRows.map(([label, val]) => (
                  <li key={label} className="flex justify-between text-slate-600">
                    <span>{label}</span>
                    <span className="font-medium text-navy">{val}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-200 mt-4 pt-4 flex justify-between text-sm font-semibold">
                <span className="text-navy">Total value</span>
                <span className="text-navy">₹33,995</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-500">You pay</span>
                <span className="font-semibold text-navy">₹29,999</span>
              </div>
              <div
                className="mt-4 inline-block text-sm font-bold px-4 py-2 rounded-full"
                style={{ color: '#b6820f', background: '#fdf3dc' }}
              >
                YOU SAVE ₹3,996
              </div>
            </div>
            <div className="border border-slate-200 rounded-2xl p-7">
              <p className="text-xs tracking-[0.2em] font-bold text-slate-400 mb-5">EVERY LUMIFLEX INCLUDES</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {includes.map((x) => (
                  <li key={x} className="flex gap-3 items-center">
                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Icon path={icons.check} className="w-3 h-3" />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <p className="text-xs tracking-[0.2em] font-bold text-slate-400 mt-7 mb-4">ADD-ONS · LITE &amp; PRO</p>
              <ul className="space-y-2 text-sm">
                {addOns.map(([l, v]) => (
                  <li key={l} className="flex justify-between text-slate-600">
                    <span>{l}</span>
                    <span className="font-medium text-navy">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-x-auto mb-16 border border-slate-200 rounded-2xl">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-offwhite text-navy">
                  <th className="text-left font-semibold py-4 px-6">WHAT'S INCLUDED</th>
                  <th className="font-semibold py-4 px-4 text-center">LITE</th>
                  <th className="font-semibold py-4 px-4 text-center">PRO</th>
                  <th className="font-semibold py-4 px-4 text-center text-accent">ULTRA</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([label, l, p, u], i) => (
                  <tr key={label} className={i % 2 ? 'bg-white' : 'bg-offwhite/50'}>
                    <td className="py-3.5 px-6 text-slate-600">{label}</td>
                    <td className="text-center">
                      <Cell ok={l} />
                    </td>
                    <td className="text-center">
                      <Cell ok={p} />
                    </td>
                    <td className="text-center">
                      <Cell ok={u} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-xs tracking-[0.2em] font-bold text-slate-400 mb-6">HOW TO BUY</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {howToBuy.map(([n, t, d]) => (
              <div key={n} className="flex gap-4">
                <span className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-display font-bold shrink-0">
                  {n}
                </span>
                <div>
                  <p className="font-display font-bold text-navy mb-1">{t}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
