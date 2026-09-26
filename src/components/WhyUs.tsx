import { CheckCircle2 } from 'lucide-react'
import Reveal from './ui/Reveal'

const points = [
  {
    title: 'Talento validado, de júnior a sênior',
    description: 'Menos de 3% de aprovação no nosso processo seletivo técnico e comportamental.',
  },
  {
    title: 'Transparência total de performance',
    description: 'Dashboards em tempo real com velocity, qualidade de código e SLAs por squad.',
  },
  {
    title: 'Flexibilidade contratual',
    description: 'Escale ou reduza squads em ciclos curtos, sem multas ou burocracia de CLT.',
  },
  {
    title: 'Segurança desde o design',
    description: 'Infraestrutura auditada, NDA por padrão e conformidade com LGPD e SOC 2.',
  },
]

const orbitNodes = ['Dev', 'QA', 'Ops', 'Data', 'Prod']

export default function WhyUs() {
  return (
    <section id="diferenciais" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              Por que a RM Technology
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Outsourcing sem o <span className="text-gradient">atrito de sempre</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Substituímos processos lentos e comunicação opaca por uma operação de tecnologia
              enxuta, mensurável e conectada ao seu roadmap.
            </p>

            <ul className="mt-10 space-y-6">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.08}>
                  <li className="flex gap-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan" />
                    <div>
                      <p className="font-medium text-ink">{point.title}</p>
                      <p className="mt-1 text-sm text-muted">{point.description}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center">
              <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-line" />
              <div className="absolute inset-8 rounded-full border border-line" />
              <div className="absolute inset-20 rounded-full border border-line" />

              <div className="animate-pulse-glow absolute inset-24 rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 blur-2xl" />

              <div className="font-display relative z-10 flex size-24 items-center justify-center rounded-full border border-violet/40 bg-surface/80 text-sm font-semibold text-ink backdrop-blur">
                Squad
              </div>

              {orbitNodes.map((node, i) => {
                const angle = (i / orbitNodes.length) * Math.PI * 2
                const radius = 46
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                return (
                  <div
                    key={node}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="font-mono absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-[11px] font-medium text-cyan shadow-lg"
                  >
                    {node}
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
