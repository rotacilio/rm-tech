import { ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal'

interface CTAProps {
  title?: string
  description?: string
}

export default function CTA({
  title = 'Vamos montar o time que sua próxima fase de crescimento exige',
  description = 'Agende um diagnóstico gratuito de 30 minutos e receba uma proposta de squad em até 5 dias úteis.',
}: CTAProps) {
  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface via-surface to-violet/10 px-8 py-16 text-center sm:px-16">
            <div className="animate-pulse-glow absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/25 blur-[100px]" />
            <div className="bg-grid absolute inset-0 opacity-20" />

            <div className="relative z-10">
              <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">{description}</p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:contato@rmtechnology.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan via-blue to-violet px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)] transition-transform hover:scale-[1.03]"
                >
                  Agendar diagnóstico
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:contato@rmtechnology.com"
                  className="font-mono text-sm text-muted transition-colors hover:text-ink"
                >
                  contato@rmtechnology.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
