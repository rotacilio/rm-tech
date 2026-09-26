import {
  UserCheck,
  Timer,
  ShieldCheck,
  ClipboardList,
  Users2,
  MessageSquare,
  Rocket,
  Zap,
  Layers,
  Repeat,
  Users,
} from 'lucide-react'
import ServicePage, { type ServicePageData } from '../components/ServicePage'

const data: ServicePageData = {
  eyebrow: 'Staff Augmentation',
  title: (
    <>
      Reforce seu time com o <span className="text-gradient">profissional certo</span>, no tempo
      certo
    </>
  ),
  description:
    'Complementamos seu time interno com profissionais de tecnologia pré-validados — de júnior a sênior — que passam a atuar dentro do seu ambiente, com suas ferramentas e seus rituais, sem a demora de um processo seletivo tradicional.',
  badges: [
    { icon: UserCheck, label: 'Perfis validados tecnicamente' },
    { icon: Timer, label: 'Início em poucos dias' },
    { icon: ShieldCheck, label: 'Contrato flexível, sem burocracia' },
  ],
  steps: [
    {
      icon: ClipboardList,
      title: 'Briefing técnico',
      description:
        'Entendemos a vaga, a stack utilizada, a senioridade necessária e como é a cultura do seu time.',
    },
    {
      icon: Users2,
      title: 'Curadoria de talentos',
      description:
        'Selecionamos perfis compatíveis do nosso pool, já validados tecnicamente para a stack solicitada.',
    },
    {
      icon: MessageSquare,
      title: 'Entrevista e fit',
      description:
        'Você entrevista os candidatos finalistas e decide, com autonomia total, quem vai integrar o time.',
    },
    {
      icon: Rocket,
      title: 'Onboarding e acompanhamento',
      description:
        'Integração ao seu ambiente de trabalho, com check-ins recorrentes para acompanhar performance e satisfação.',
    },
  ],
  benefits: [
    {
      icon: Zap,
      title: 'Contratação sob demanda',
      description:
        'Sem processos seletivos longos: você recebe perfis compatíveis já filtrados tecnicamente.',
    },
    {
      icon: Layers,
      title: 'Qualquer senioridade',
      description:
        'De júnior a sênior — o profissional é escolhido de acordo com a necessidade real da vaga.',
    },
    {
      icon: Repeat,
      title: 'Flexibilidade contratual',
      description: 'Escale ou reduza o time em ciclos curtos, sem multas ou burocracia de CLT.',
    },
    {
      icon: Users,
      title: 'Dedicação ao seu time',
      description:
        'O profissional trabalha 100% integrado à sua equipe, ferramentas e processos — como um interno.',
    },
  ],
  idealFor: [
    'Picos de demanda ou prazos apertados que o time atual não dá conta sozinho',
    'Cobrir uma posição em aberto rapidamente, sem esperar meses por uma contratação CLT',
    'Testar um perfil em um projeto real antes de uma contratação definitiva',
    'Complementar competências que faltam no time (ex: DevOps, QA, mobile, dados)',
  ],
  faq: [
    {
      question: 'Qual o prazo médio para começar?',
      answer:
        'Depois do briefing técnico, normalmente apresentamos os primeiros perfis compatíveis em poucos dias, dependendo da complexidade da vaga.',
    },
    {
      question: 'O profissional trabalha só para a minha empresa?',
      answer: 'Sim. Durante o contrato, a dedicação é integral ao seu time e ao seu projeto.',
    },
    {
      question: 'Eu participo da escolha do profissional?',
      answer:
        'Sim, você entrevista os candidatos finalistas e tem a palavra final sobre quem entra no time.',
    },
    {
      question: 'Como funciona o modelo de contrato?',
      answer:
        'É um modelo de outsourcing flexível, sem vínculo CLT, com ciclos de renovação que acompanham a duração do seu projeto.',
    },
    {
      question: 'Quais tecnologias vocês cobrem?',
      answer:
        'Cobrimos as principais stacks de desenvolvimento web, mobile, dados e infraestrutura. Conte pra gente sua necessidade específica e validamos a disponibilidade.',
    },
  ],
  ctaTitle: 'Precisa reforçar o time agora?',
  ctaDescription:
    'Conte pra gente a vaga que você precisa preencher e receba um perfil compatível em poucos dias.',
}

export default function StaffAugmentation() {
  return <ServicePage data={data} />
}
