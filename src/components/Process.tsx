import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, Users2, Rocket, RefreshCw } from 'lucide-react'
import Reveal from './ui/Reveal'

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico',
    description:
      'Mapeamos gaps técnicos, cultura de engenharia e objetivos de negócio em uma imersão de até 5 dias.',
  },
  {
    icon: Users2,
    title: 'Match de talentos',
    description:
      'Selecionamos especialistas do nosso pool global com fit técnico e cultural validado por IA e entrevistas humanas.',
  },
  {
    icon: Rocket,
    title: 'Onboarding acelerado',
    description:
      'Ramp-up guiado com playbooks, acesso seguro e integração ao seu stack em até 14 dias.',
  },
  {
    icon: RefreshCw,
    title: 'Entrega contínua',
    description:
      'Squads operando de acordo com o fluxo de trabalho do cliente, com métricas de performance e QBRs para evolução contínua.',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="processo" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
            Como funciona
          </span>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Do primeiro contato ao <span className="text-gradient">time em produção</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-line sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-6 w-px bg-gradient-to-b from-cyan via-blue to-violet sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-14">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute top-1 left-6 z-10 -translate-x-1/2 sm:left-1/2">
                  <Reveal delay={0.1}>
                    <span className="flex size-4 items-center justify-center rounded-full border-2 border-void bg-cyan shadow-[0_0_16px_2px_rgba(79,242,224,0.5)]" />
                  </Reveal>
                </div>

                <div className="w-full pl-14 sm:w-1/2 sm:pl-0 sm:even:text-right">
                  <Reveal delay={0.15} className={i % 2 === 1 ? 'sm:pl-12' : 'sm:pr-12'}>
                    <div className="rounded-2xl border border-line bg-surface/50 p-6 backdrop-blur">
                      <div
                        className={`flex items-center gap-3 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/15 to-violet/15">
                          <step.icon className="size-5 text-cyan" />
                        </div>
                        <span className="font-mono text-xs text-muted">0{i + 1}</span>
                      </div>
                      <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </Reveal>
                </div>

                <div className="hidden w-1/2 sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
