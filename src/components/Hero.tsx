import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Globe2, ShieldCheck } from 'lucide-react'
import NetworkField from './ui/NetworkField'
import Counter from './ui/Counter'

const badges = [
  { icon: Users, label: 'Processo técnico rigoroso' },
  { icon: Globe2, label: 'Talentos remotos, fuso alinhado' },
  { icon: ShieldCheck, label: 'SLA & compliance garantidos' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 -z-[5] opacity-60">
        <NetworkField className="h-full w-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-cyan backdrop-blur"
            >
              <Sparkles className="size-3.5" />
              Outsourcing de tecnologia, orientado por dados
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Times de tecnologia de elite,
              <br className="hidden sm:block" />
              <span className="text-gradient">prontos em semanas</span>, não trimestres.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              A RM Technology conecta sua empresa a especialistas de qualquer senioridade e squads
              dedicados, prontos para integrar seu time rápido — via staff augmentation ou
              outsourcing completo. Escale sem fricção, entregue com previsibilidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contato"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan via-blue to-violet px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)] transition-transform hover:scale-[1.03]"
              >
                Diagnóstico gratuito
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#processo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface/50 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-violet/50 hover:bg-surface-2"
              >
                Como funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
            >
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted">
                  <Icon className="size-4 text-cyan" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="animate-float-slow absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan/20 via-blue/10 to-violet/20 blur-2xl" />

            <div className="rounded-2xl border border-line bg-surface/70 p-1.5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="size-2.5 rounded-full bg-magenta/70" />
                <span className="size-2.5 rounded-full bg-cyan/70" />
                <span className="size-2.5 rounded-full bg-violet/70" />
                <span className="font-mono ml-3 text-xs text-muted">
                  rm-ops · squad-dashboard.live
                </span>
              </div>

              <div className="space-y-5 p-6">
                <div className="grid grid-cols-3 gap-3">
                  <StatBlock display="Jr–Sr" label="Todas as senioridades" />
                  <StatBlock display="Flexível" label="Modelo de contrato" />
                  <StatBlock value={14} suffix=" dias" label="Ramp-up alvo" />
                </div>

                <div className="space-y-2.5 rounded-xl border border-line bg-void/60 p-4">
                  <p className="font-mono text-xs text-cyan">$ rmtech deploy --squad=platform-team</p>
                  <TerminalLine label="Alocando profissionais por senioridade" done />
                  <TerminalLine label="Validando stack & compliance" done />
                  <TerminalLine label="Sincronizando com seu time" pulse />
                </div>

                <div className="flex items-center justify-between rounded-xl border border-line bg-gradient-to-r from-violet/10 to-cyan/10 p-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">Squad Platform Alpha</p>
                    <p className="text-xs text-muted">6 especialistas · 3 fusos horários</p>
                  </div>
                  <div className="flex -space-x-2">
                    {['A', 'M', 'R', 'K'].map((letter, i) => (
                      <div
                        key={letter}
                        style={{ zIndex: 4 - i }}
                        className="flex size-8 items-center justify-center rounded-full border-2 border-surface bg-gradient-to-br from-cyan to-violet text-xs font-semibold text-void"
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatBlock({
  value,
  suffix,
  display,
  label,
}: {
  value?: number
  suffix?: string
  display?: string
  label: string
}) {
  return (
    <div className="rounded-xl border border-line bg-void/40 p-3 text-center">
      {value !== undefined ? (
        <Counter
          to={value}
          suffix={suffix}
          className="font-display block text-xl font-semibold text-ink"
        />
      ) : (
        <span className="font-display block text-xl font-semibold text-ink">{display}</span>
      )}
      <p className="mt-1 text-[11px] leading-tight text-muted">{label}</p>
    </div>
  )
}

function TerminalLine({ label, done, pulse }: { label: string; done?: boolean; pulse?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`size-1.5 rounded-full ${
          done ? 'bg-cyan' : pulse ? 'animate-pulse-glow bg-violet' : 'bg-line'
        }`}
      />
      <span className="text-xs text-muted">{label}</span>
      {done && <span className="font-mono ml-auto text-[10px] text-cyan">OK</span>}
    </div>
  )
}
