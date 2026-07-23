import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { Icon, icons } from './icons.jsx'

const frustrations = [
  'Shadows over the field — your own head and hands block the overhead light.',
  'Power cut mid-procedure — half of surveyed clinics face outages monthly or worse.',
  'No way to document — one hand holds the phone, the other holds everything else.',
  "Heavy, fixed, fiddly — lights that can't move between rooms and need constant readjustment.",
]

const answers = [
  'Light from where you need it — clamp beside the field, bend the neck, done. Shadow-free by design.',
  '8 hours on battery — the procedure continues whether the grid cooperates or not.',
  'Phone mounted over the field — record, photograph and teleconsult completely hands-free.',
  'Carry it in one hand — OPD to minor OT to home visit, set up again in under a minute.',
]

const stats = [
  ['1 in 2', 'surveyed clinics face power cuts monthly, weekly or daily'],
  ['86%', 'would use the phone mount for photography & teleconsults'],
  ['#1 ask', 'voice control & magnification — now built into Ultra'],
]

const useCases = [
  ['IN THE OPD', 'Everyday examinations', 'Bright, neutral daylight for skin, scalp, ENT and oral exams — with the 3X magnifier for lesions and fine detail.'],
  ['IN THE MINOR OT', 'Procedures & suturing', 'Spot focus on the field, instruments on the tray, colors switched by voice — your hands never break sterility.'],
  ['BEYOND THE CLINIC', 'Teleconsults & teaching', 'The phone stand turns every procedure into documentation, a second opinion or a teaching video — no assistant needed.'],
]

const chartData = [
  ['Limited mobility / portability', 24],
  ['Lack of brightness', 23],
  ['Shadows over the field', 21],
  ["Can't document / photograph", 20],
  ['No battery during power cuts', 19],
]

function BarRow({ label, value, max, delay }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold text-navy">{value}/50</span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="bar-fill h-full bg-accent rounded-full"
          style={{ width: show ? `${(value / max) * 100}%` : '0%', transitionDelay: `${delay}ms` }}
        ></div>
      </div>
    </div>
  )
}

export default function WhyLumiflex() {
  return (
    <section id="why" className="py-24 bg-offwhite">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-accent text-xs tracking-[0.25em] font-bold mb-4">WHY LUMIFLEX</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy max-w-2xl mb-14">
            Built from what 50+ clinicians told us was broken.
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-slate-500 max-w-3xl mb-10 leading-relaxed">
            Before designing the Lumiflex, we surveyed dermatologists, surgeons and GPs across India
            about their examination lighting. Their frustrations became our spec sheet.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <Reveal>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full">
              <p className="text-xs tracking-[0.2em] font-bold text-slate-400 mb-5">SOUND FAMILIAR?</p>
              <ul className="space-y-4">
                {frustrations.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                      <Icon path={icons.cross} className="w-3 h-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="navy-grad rounded-2xl p-7 h-full text-white">
              <p className="text-xs tracking-[0.2em] font-bold text-white/50 mb-5">THE LUMIFLEX ANSWER</p>
              <ul className="space-y-4">
                {answers.map((a) => (
                  <li key={a} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center">
                      <Icon path={icons.check} className="w-3 h-3" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {stats.map(([big, small], i) => (
            <Reveal key={big} delay={i * 100}>
              <div className="text-center border border-slate-200 bg-white rounded-2xl py-8 px-5 h-full">
                <p className="font-display text-3xl font-extrabold text-accent mb-2">{big}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{small}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {useCases.map(([eyebrow, title, desc], i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full">
                <p className="text-accent text-xs tracking-[0.2em] font-bold mb-4">{eyebrow}</p>
                <h4 className="font-display font-bold text-navy mb-2">{title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10">
            <p className="text-xs tracking-[0.2em] font-bold text-slate-400 mb-6">
              TOP FRUSTRATIONS CLINICIANS REPORTED WITH THEIR CURRENT LIGHTING
            </p>
            <div className="max-w-2xl">
              {chartData.map(([label, value], i) => (
                <BarRow key={label} label={label} value={value} max={24} delay={i * 100} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-center font-display italic text-lg text-navy/70 max-w-2xl mx-auto">
            "Designed by surgeons, for surgeons — because we were tired of it too."
          </p>
        </Reveal>
      </div>
    </section>
  )
}
