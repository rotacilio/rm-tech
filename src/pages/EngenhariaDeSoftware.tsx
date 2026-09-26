import {
  Code2,
  GitBranch,
  ShieldCheck,
  Search,
  CheckCircle2,
  Rocket,
  Target,
  Layers,
  Eye,
} from 'lucide-react'
import ServicePage, { type ServicePageData } from '../components/ServicePage'

const data: ServicePageData = {
  eyebrow: 'Engenharia de Software',
  title: (
    <>
      Do MVP à <span className="text-gradient">plataforma em produção</span>
    </>
  ),
  description:
    'Quando o desafio exige mais do que gente — exige responsabilidade pela entrega. Desenvolvemos produtos digitais de ponta a ponta: descoberta, arquitetura, desenvolvimento, testes e deploy, com um time de engenharia dono do resultado.',
  badges: [
    { icon: Code2, label: 'Desenvolvimento end-to-end' },
    { icon: GitBranch, label: 'Boas práticas de engenharia' },
    { icon: ShieldCheck, label: 'Qualidade e testes contínuos' },
  ],
  steps: [
    {
      icon: Search,
      title: 'Discovery e arquitetura',
      description:
        'Entendemos o problema de negócio e desenhamos a solução técnica, pensando em escala desde o início.',
    },
    {
      icon: Code2,
      title: 'Desenvolvimento iterativo',
      description:
        'Construção do produto em sprints, com entregas visíveis desde as primeiras semanas.',
    },
    {
      icon: CheckCircle2,
      title: 'Qualidade e testes',
      description: 'Code review, testes automatizados e QA contínuo em cada entrega.',
    },
    {
      icon: Rocket,
      title: 'Deploy e evolução',
      description:
        'Colocamos o produto em produção e seguimos evoluindo a plataforma junto com o seu negócio.',
    },
  ],
  benefits: [
    {
      icon: Target,
      title: 'Responsabilidade pelo resultado',
      description:
        'Um time de engenharia dono da entrega, não apenas das horas trabalhadas.',
    },
    {
      icon: Layers,
      title: 'Arquitetura para escalar',
      description: 'Decisões técnicas pensadas para crescer junto com o seu produto.',
    },
    {
      icon: GitBranch,
      title: 'Boas práticas de verdade',
      description: 'Code review, testes automatizados e integração contínua desde o dia um.',
    },
    {
      icon: Eye,
      title: 'Visibilidade total',
      description: 'Você acompanha o progresso do roadmap a cada sprint, sem caixa-preta.',
    },
  ],
  idealFor: [
    'MVPs que precisam validar um novo produto rápido, com qualidade de produção',
    'Plataformas existentes que precisam de um time para evoluir com consistência',
    'Empresas sem time de engenharia interno que precisam entregar software crítico',
    'Projetos que exigem mais do que alocação de pessoas — exigem dono técnico da entrega',
  ],
  faq: [
    {
      question: 'Vocês entram em qualquer fase do projeto?',
      answer:
        'Sim, tanto para começar um produto do zero quanto para assumir a evolução de uma plataforma existente.',
    },
    {
      question: 'Como funciona o acompanhamento do projeto?',
      answer:
        'Trabalhamos em sprints com entregas visíveis e você acompanha o roadmap e o progresso técnico de perto.',
    },
    {
      question: 'Quem define a arquitetura da solução?',
      answer:
        'A definimos em conjunto na etapa de discovery, alinhando as necessidades do negócio com boas práticas técnicas.',
    },
    {
      question: 'Vocês cuidam do deploy e da operação depois?',
      answer:
        'Sim, entregamos em produção e podemos seguir evoluindo e dando suporte à plataforma conforme o combinado.',
    },
  ],
  ctaTitle: 'Tem um produto para construir ou evoluir?',
  ctaDescription: 'Conta pra gente o desafio e vamos desenhar o caminho técnico junto com você.',
}

export default function EngenhariaDeSoftware() {
  return <ServicePage data={data} />
}
