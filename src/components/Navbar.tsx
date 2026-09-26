import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './ui/Logo'

const LINKS = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Diferenciais', href: '/#diferenciais' },
  { label: 'Contato', href: '/#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div
          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? 'border-line/80 bg-surface/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
              : 'border-transparent bg-transparent'
          }`}
        >
          <Link to="/" className="relative z-10">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group relative text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan to-violet transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            to="/#contato"
            className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-void transition-transform hover:scale-[1.03] lg:inline-flex"
          >
            <span className="relative z-10">Fale com um especialista</span>
            <ArrowUpRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl border border-line bg-surface/95 p-4 backdrop-blur-xl lg:hidden"
          >
            {LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-void"
            >
              Fale com um especialista
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
