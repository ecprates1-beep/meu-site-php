import {
  SectionDivider,
  ServicesStrip,
  SplitSection,
  type ServiceItem,
} from '../components/sections'

const CONTACT_PHONES = [
  { label: '11 98447 3678', href: 'tel:+5511984473678' },
  { label: '11 98148 3848', href: 'tel:+5511981483848' },
]
const CONTACT_EMAIL = 'ahh@gmail.com'
const CONTACT_CITY = 'São Paulo/SP'

const METHOD_STEPS = ['Pesquisa', 'Diagnóstico', 'Estratégia', 'Gestão']

const WORK_MODES = [
  { title: 'Orientação Pontual', description: 'Para demandas específicas.' },
  { title: 'Consultoria Contínua', description: 'Para mandatos e gestões.' },
  { title: 'Campanha Completa', description: 'Para o período eleitoral.' },
  { title: 'Formação e Treinamento', description: 'Para equipar sua equipe.' },
]

const SERVICES: ServiceItem[] = [
  {
    id: 'digital',
    title: 'Comunicação Digital',
    image: '/images/sobre/comunicacao-digital.png',
    color: '#FF3F00',
    items: [
      'Gestão de redes sociais (orgânico e pago)',
      'Produção de conteúdo (vídeos, motion, design, roteiros e textos)',
      'Gestão de tráfego pago e segmentação',
      'Monitoramento e análise de dados',
      'Gestão de WhatsApp e canais de mobilização',
      'Desenvolvimento de sites e landing pages',
    ],
  },
  {
    id: 'inteligencia',
    title: 'Inteligência e Estratégia',
    image: '/images/sobre/inteligencia-estrategia.png',
    color: '#00FF84',
    items: [
      'Diagnóstico e pesquisa (quali/quanti)',
      'Planejamento estratégico de campanha',
      'Análise de cenário e viabilidade eleitoral',
      'Gestão de crise de imagem',
    ],
  },
  {
    id: 'offline',
    title: 'Eventos Offline',
    image: '/images/sobre/eventos-offline.png',
    color: '#FFFC00',
    items: [
      'Produção de material gráfico (santinhos, adesivos, bandeiras)',
      'Jingle e produção de áudio',
      'Eventos e comícios',
    ],
  },
  {
    id: 'assessoria',
    title: 'Assessoria e Formação',
    image: '/images/sobre/assessoria-formacao.png',
    color: '#00A2FF',
    items: [
      'Assessoria de imprensa e relações com a mídia',
      'Media training',
      'Formação de lideranças e equipes',
      'Mentoria para candidatos e gestores',
    ],
  },
]

export function Sobre() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Sobre a AHH — Comunicação Política</h1>

      <SplitSection
        id="essencia"
        title="Nossa essência"
        image="/images/sobre/quem-somos.png"
        color="#FF3E00"
      >
        <p className="text-[clamp(1.5rem,2.7vw,2.6rem)] leading-[1.18]">
          Somos apaixonados por <strong className="font-semibold text-[#FF3E00]">política</strong> e
          acreditamos que a boa{' '}
          <strong className="font-semibold text-[#FF3E00]">comunicação</strong> é a{' '}
          <strong className="font-semibold text-[#FF3E00]">ponte</strong> entre uma causa e o{' '}
          <strong className="font-semibold text-[#FF3E00]">coração</strong> do{' '}
          <strong className="font-semibold text-[#FF3E00]">eleitor</strong>.
        </p>
      </SplitSection>

      <SectionDivider />

      <SplitSection
        id="metodologia"
        title="Nossa metodologia"
        image="/images/sobre/metodologia.png"
        color="#00CF87"
      >
        <ul className="text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.35]">
          {METHOD_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </SplitSection>

      <SectionDivider />

      <ServicesStrip services={SERVICES} columns={4} />

      <SectionDivider />

      <SplitSection
        id="como-trabalhamos"
        title="Como trabalhamos"
        image="/images/sobre/como-trabalhamos.png"
        color="#025FFF"
      >
        <ul className="space-y-3 text-[clamp(1.15rem,1.7vw,1.55rem)] leading-snug">
          {WORK_MODES.map((mode) => (
            <li key={mode.title}>
              <span className="block font-semibold text-[#025FFF]">{mode.title}:</span>
              <span className="block">{mode.description}</span>
            </li>
          ))}
        </ul>
      </SplitSection>

      <SectionDivider />

      <SplitSection
        id="contatos"
        title="Nossos contatos"
        image="/images/sobre/contatos.png"
        color="#6F00FF"
      >
        <ul className="space-y-1 text-[clamp(1.15rem,1.8vw,1.75rem)] leading-snug">
          {CONTACT_PHONES.map((phone) => (
            <li key={phone.href}>
              <a
                href={phone.href}
                className="transition-colors hover:text-[#6F00FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F00FF] focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
              >
                {phone.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-[#6F00FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F00FF] focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>{CONTACT_CITY}</li>
        </ul>
      </SplitSection>
    </div>
  )
}
