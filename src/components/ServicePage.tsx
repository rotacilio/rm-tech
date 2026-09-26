import type { ComponentType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import Reveal from './ui/Reveal'
import GlowCard from './ui/GlowCard'
import CTA from './CTA'

type IconComponent = ComponentType<{ className?: string }>

export interface ServiceStep {
  icon: IconComponent
  title: string
  description: string
}

export interface ServiceBenefit {
  icon: IconComponent
  title: string
  description: string
}

export interface ServiceFaqItem {
  question: string
  answer: string
}

export interface ServicePageData {
  eyebrow: string
  title: ReactNode
  description: string
  badges: { icon: IconComponent; label: string }[]
  steps: ServiceStep[]
  benefits: ServiceBenefit[]
  idealFor: string[]
  faq: ServiceFaqItem[]
  ctaTitle: string
  ctaDescription: string
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Link
              to="/#servicos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-cyan"
            >
              <ArrowLeft className="size-4" />
              Todos os serviços
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="mt-6">
            <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              {data.eyebrow}
            </span>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{data.description}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/#contato"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan via-blue to-violet px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)] transition-transform hover:scale-[1.03]"
            >
              Falar sobre esse serviço
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-violet/50 hover:bg-surface-2"
            >
              Ver outros serviços
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {data.badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted">
                <Icon className="size-4 text-cyan" />
                {label}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              Como funciona
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Do primeiro contato à <span className="text-gradient">operação</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {data.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <GlowCard className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/15 to-violet/15">
                      <step.icon className="size-5 text-cyan" />
                    </div>
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              Benefícios
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Por que escolher <span className="text-gradient">esse modelo</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {data.benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.08}>
                <GlowCard className="h-full p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg border border-line bg-surface-2/60">
                    <benefit.icon className="size-5 text-cyan" />
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
                Ideal para
              </span>
              <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Quando esse serviço faz sentido
              </h2>
              <ul className="mt-8 space-y-4">
                {data.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/85">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
                Perguntas frequentes
              </span>
              <div className="mt-4 space-y-3">
                {data.faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-line bg-surface/50 p-5 backdrop-blur"
                  >
                    <p className="text-sm font-medium text-ink">{item.question}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA title={data.ctaTitle} description={data.ctaDescription} />
    </>
  )
}
