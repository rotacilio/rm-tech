import { Link } from 'react-router-dom'
import Logo from './ui/Logo'
import type { SVGProps } from 'react'

function GithubMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  )
}

function LinkedinMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  )
}

function XMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 3H21l-6.6 7.54L22.2 21h-6.2l-4.86-6.36L5.6 21H2.8l7.06-8.07L2 3h6.35l4.4 5.82L18.24 3Zm-1.08 16.2h1.7L7.9 4.7H6.08l11.08 14.5Z" />
    </svg>
  )
}

const columns = [
  {
    title: 'Serviços',
    links: [
      { label: 'Staff Augmentation', href: '/servicos/staff-augmentation' },
      { label: 'Squads Dedicados', href: '/servicos/squads-dedicados' },
      { label: 'Engenharia de Software', href: '/servicos/engenharia-de-software' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre a RM Technology', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos de uso', href: '#' },
      { label: 'Segurança', href: '#' },
      { label: 'LGPD', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Outsourcing de tecnologia e staff augmentation com especialistas de qualquer
              senioridade — para empresas que precisam escalar times rápido e sem fricção.
            </p>
            <div className="mt-6 flex gap-3">
              {[GithubMark, LinkedinMark, XMark].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-violet/40 hover:text-cyan"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted transition-colors hover:text-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-muted">© 2026 RM Technology. Todos os direitos reservados.</p>
          <p className="font-mono text-xs text-muted">Feito com engenharia de verdade ✦</p>
        </div>
      </div>
    </footer>
  )
}
