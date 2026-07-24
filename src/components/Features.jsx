import Reveal from './Reveal.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'
import { FeatureIcon } from './icons.jsx'

const features = [
  { icon: 'sun', title: 'Shadow-free LED', desc: 'High-intensity, flicker-free illumination in neutral daylight — the tone 90% of surveyed clinicians prefer.' },
  { icon: 'target', title: 'Spot ⇄ flood focus', desc: 'Twist the head to go from a tight surgical spot to full-field flood — no accessories needed.' },
  { icon: 'bend', title: '360° gooseneck', desc: 'Bend it once and it holds position through the whole procedure. No drift, no re-adjusting.' },
  { icon: 'clamp', title: 'Clamps in seconds', desc: 'No screws, no tools. The spring clamp grips OT bed rails, frames and tabletops up to 60 mm.' },
  { icon: 'battery', title: '8-hour battery', desc: 'A full OPD day, cordless. Power cuts — which hit 1 in 2 surveyed clinics — simply stop mattering.' },
  { icon: 'bolt', title: 'Type-C fast charging', desc: 'Charges on the same cable as your phone. Top up between patients, run all day.' },
  { icon: 'phone', title: 'Smartphone stand', desc: 'Lock your phone over the field to record procedures, shoot clinical photos or run teleconsults hands-free.' },
  { icon: 'tray', title: 'Instrument tray', desc: 'A stable tray on the arm keeps instruments within reach — no more turning away from the field.' },
  { icon: 'search', title: '3X telescopic magnifier', desc: 'An extendable lens brings fine detail into view — sutures, lesions, margins — without leaning in.' },
]

const glance = [
  ['One-hand', 'portable build'],
  ['≤ 60 mm', 'clamp grip'],
  ['8 hr', 'battery runtime'],
  ['Type-C', 'fast charging'],
  ['4 modes', 'W · Y · R · UV'],
  ['3X', 'magnification'],
]

const colorModes = [
  ['White', '#ffffff'],
  ['Yellow', '#f2b429'],
  ['Red', '#e13a3a'],
  ['UV', '#9b4de0'],
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent text-xs tracking-[0.25em] font-bold mb-4">EVERY DETAIL, ENGINEERED</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy max-w-2xl mb-5">
            One light that does the work of your whole setup.
          </h2>
          <p className="text-slate-500 max-w-2xl mb-14 leading-relaxed">
            Exam lamp, OT spotlight, recording rig, magnifier and instrument station — the
            Lumiflex replaces all of them with{' '}
            <span className="font-semibold text-navy">one clamp-on unit you can carry in one hand</span>.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="group tilt-card border border-slate-200 rounded-2xl p-6 h-full hover:shadow-xl hover:border-accent/30 transition bg-white">
                <div className="icon-pop inline-flex">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="navy-grad rounded-3xl mt-6 p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center text-white relative overflow-hidden">
            <AnimatedBackground variant="banner" />
            <div className="relative">
              <p className="text-gold text-xs tracking-[0.25em] font-bold mb-3">SIGNATURE FEATURE</p>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3">Say the word. The light obeys.</h3>
              <p className="text-white/70 max-w-xl leading-relaxed">
                Mid-procedure, your hands stay sterile. Just say "White", "Yellow", "Red" or "UV" and the
                Lumiflex switches mode instantly — the #1 feature clinicians asked us to build.
              </p>
            </div>
            <div className="flex gap-5 relative">
              {colorModes.map(([label, color], i) => (
                <div key={label} className="flex flex-col items-center gap-2 group/swatch">
                  <span
                    className="w-12 h-12 rounded-full border border-white/20 shadow-inner transition-transform duration-300 group-hover/swatch:scale-125"
                    style={{ background: color, animation: `pulseGlow 2.4s ease-in-out ${i * 0.3}s infinite` }}
                  ></span>
                  <span className="text-xs text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-6 border border-slate-200 rounded-3xl px-6 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <p className="text-xs tracking-[0.2em] font-bold text-slate-400 col-span-2 sm:col-span-1 self-center">
              AT A GLANCE
            </p>
            {glance.map(([big, small]) => (
              <div key={big} className="transition-transform duration-300 hover:-translate-y-1 cursor-default">
                <p className="font-display font-extrabold text-accent text-xl">{big}</p>
                <p className="text-xs text-slate-500 mt-1">{small}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}