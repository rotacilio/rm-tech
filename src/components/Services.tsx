import { Code2, Users, Workflow, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './ui/Reveal'
import GlowCard from './ui/GlowCard'

const featured = [
  {
    icon: Users,
    tag: 'Mais contratado',
    title: 'Staff Augmentation',
    path: '/servicos/staff-augmentation',
    description:
      'Amplie seu time com profissionais pré-validados — de júnior a sênior —, prontos para integrar seu squad sem passar por um processo seletivo demorado.',
    points: [
      'Profissionais de qualquer senioridade aprovados em processo técnico rigoroso',
      'Integração ao seu time em até 7 dias',
      'Escale ou reduza o time sem multas ou burocracia',
    ],
    stat: { value: '7 dias', label: 'ramp-up médio' },
  },
  {
    icon: Workflow,
    tag: 'Maior impacto',
    title: 'Squads Dedicados',
    path: '/servicos/squads-dedicados',
    description:
      'Times multidisciplinares completos — dev, QA, produto e DevOps — operando com a sua cadência, processos e cultura como se fossem internos.',
    points: [
      'Squad completo entregue como unidade autônoma',
      'Métricas de performance e SLAs em tempo real',
      'Gestão técnica dedicada, sem sobrecarregar seu time',
    ],
    stat: { value: '98%', label: 'retenção de squads' },
  },
]

const secondary = {
  icon: Code2,
  title: 'Engenharia de Software',
  path: '/servicos/engenharia-de-software',
  description:
    'Quando o projeto exige mais do que um time: desenvolvimento de produtos digitais end-to-end, de MVPs a plataformas críticas em escala.',
}

export default function Services() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">
            O que entregamos
          </span>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Um outsourcing que se comporta como{' '}
            <span className="text-gradient">time interno</span>
          </h2>
          <p className="mt-4 text-muted">
            Nosso foco: colocar o time certo dentro da sua operação, rápido e sem fricção.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <GlowCard className="h-full p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-xl border border-line bg-gradient-to-br from-cyan/10 to-violet/10">
                    <service.icon className="size-7 text-cyan" />
                  </div>
                  <span className="font-mono rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-[11px] font-medium tracking-wide text-violet uppercase">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-2xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink/85">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center justify-between border-t border-line pt-6">
                  <div>
                    <p className="font-display text-2xl font-semibold text-ink">
                      {service.stat.value}
                    </p>
                    <p className="text-xs text-muted">{service.stat.label}</p>
                  </div>
                  <Link
                    to={service.path}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2/60 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-violet/40 hover:text-cyan"
                  >
                    Saiba mais
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-5">
          <GlowCard className="flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2/60">
              <secondary.icon className="size-6 text-muted" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-ink">{secondary.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{secondary.description}</p>
            </div>
            <Link
              to={secondary.path}
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-violet transition-colors hover:text-cyan"
            >
              Saiba mais <ArrowUpRight className="size-3.5" />
            </Link>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  )
}
