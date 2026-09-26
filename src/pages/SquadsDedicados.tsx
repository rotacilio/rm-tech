import {
  Workflow,
  Gauge,
  ShieldCheck,
  Search,
  Users2,
  RefreshCw,
  Boxes,
  LineChart,
  TrendingUp,
} from 'lucide-react'
import ServicePage, { type ServicePageData } from '../components/ServicePage'

const data: ServicePageData = {
  eyebrow: 'Squads Dedicados',
  title: (
    <>
      Um time completo, <span className="text-gradient">dedicado ao seu produto</span>
    </>
  ),
  description:
    'Quando falta mais do que uma pessoa — falta um time inteiro. Montamos squads multidisciplinares (dev, QA, produto e DevOps, conforme a necessidade) que operam com a sua cadência, seus processos e sua cultura, como uma extensão do seu time interno.',
  badges: [
    { icon: Workflow, label: 'Opera com seu fluxo de trabalho' },
    { icon: Gauge, label: 'Métricas de performance em tempo real' },
    { icon: ShieldCheck, label: 'Gestão técnica dedicada' },
  ],
  steps: [
    {
      icon: Search,
      title: 'Diagnóstico do escopo',
      description:
        'Entendemos os objetivos do produto, prazos e qual a composição ideal de squad para o desafio.',
    },
    {
      icon: Users2,
      title: 'Montagem do squad',
      description:
        'Reunimos os perfis certos — dev, QA, produto, DevOps — de acordo com o que o projeto exige.',
    },
    {
      icon: Workflow,
      title: 'Integração ao seu fluxo',
      description:
        'O squad adota suas ferramentas, cerimônias e metodologia (Scrum, Kanban ou o que já funciona por aí).',
    },
    {
      icon: RefreshCw,
      title: 'Operação contínua',
      description:
        'Squads operando de acordo com o fluxo de trabalho do cliente, com métricas de performance e QBRs para evolução contínua.',
    },
  ],
  benefits: [
    {
      icon: Boxes,
      title: 'Squad multidisciplinar',
      description:
        'Um time completo sob uma única gestão técnica, sem você precisar coordenar contratações separadas.',
    },
    {
      icon: Workflow,
      title: 'Opera como time interno',
      description: 'O squad segue sua cadência, seus processos e sua cultura de engenharia.',
    },
    {
      icon: LineChart,
      title: 'Visibilidade total',
      description:
        'Métricas de performance e SLAs acompanhados de perto, sem surpresas no meio do caminho.',
    },
    {
      icon: TrendingUp,
      title: 'Escala com o produto',
      description: 'Aumente ou reduza o squad conforme o seu produto e roadmap evoluem.',
    },
  ],
  idealFor: [
    'Quando o gap não é uma vaga — é um time inteiro que falta montar',
    'Produtos com roadmap contínuo, não apenas um projeto pontual',
    'Empresas que querem previsibilidade sem montar uma área de tecnologia própria do zero',
    'Squads temporários para acelerar uma iniciativa específica do negócio',
  ],
  faq: [
    {
      question: 'Quem coordena o squad no dia a dia?',
      answer:
        'Uma gestão técnica dedicada acompanha o squad, garantindo entregas e alinhamento com o seu time.',
    },
    {
      question: 'O squad usa as nossas ferramentas ou as de vocês?',
      answer:
        'As suas. O squad se integra ao seu stack, suas ferramentas de gestão e suas cerimônias já existentes.',
    },
    {
      question: 'Dá pra começar pequeno e crescer depois?',
      answer:
        'Sim, o squad pode começar enxuto e escalar conforme a demanda do produto aumenta.',
    },
    {
      question: 'Como funciona a comunicação com o meu time?',
      answer:
        'O squad participa das suas cerimônias (dailies, plannings, reviews) e reporta métricas de performance em QBRs periódicos.',
    },
  ],
  ctaTitle: 'Precisa de um time completo tocando seu produto?',
  ctaDescription: 'Vamos desenhar o squad ideal para o seu contexto e seu momento de negócio.',
}

export default function SquadsDedicados() {
  return <ServicePage data={data} />
}
