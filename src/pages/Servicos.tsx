import { MessageCircle } from 'lucide-react'
import {
  PageHeroBand,
  SectionDivider,
  ServicesStrip,
  SplitSection,
  type ServiceItem,
} from '../components/sections'

const CONTACT_WHATSAPP_LABEL = '(11) 97774-3781'
const CONTACT_WHATSAPP_HREF = 'https://wa.me/5511977743781'
const CONTACT_CITY = 'São Paulo/SP'

const METHOD_STEPS: { title: string; description: string }[] = [
  {
    title: 'Pesquisa',
    description:
      'Escutamos o território, o público e o cenário para entender onde estamos pisando.',
  },
  {
    title: 'Diagnóstico',
    description:
      'Transformamos os dados em leitura clara dos problemas, das oportunidades e do ponto de partida.',
  },
  {
    title: 'Estratégia',
    description:
      'Definimos o caminho: mensagem, canais e prioridades para chegar onde queremos.',
  },
  {
    title: 'Gestão',
    description:
      'Acompanhamos a execução do início ao fim, ajustando a rota com base nos resultados.',
  },
  {
    title: 'Produção de conteúdo',
    description:
      'Audiovisual, jingle, rádio e TV, design gráfico, sites, redes e material impresso: da ideia à entrega.',
  },
  {
    title: 'Tráfego pago',
    description:
      'Impulsionamento nas redes para levar sua mensagem a quem precisa ouvir.',
  },
]


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
    image: '/images/servicos/comunicacao-digital.png',
    color: '#FF3F00',
    items: [
      'Gestão de Redes Sociais (Orgânico e Pago)',
      'Produção de Conteúdo (Vídeos, Motion, Design, Roteiros e Textos)',
      'Gestão de Tráfego Pago e Segmentação',
      'Monitoramento e Análise de Dados',
    ],
  },
  {
    id: 'eventos',
    title: 'Eventos Offline',
    image: '/images/servicos/eventos-offline.png',
    color: '#FFFC00',
    items: [
      'Produção de material gráfico (santinhos, adesivos, bandeiras)',
      'Eventos e comícios',
    ],
  },
  {
    id: 'assessoria',
    title: 'Assessoria Imprensa',
    image: '/images/servicos/assessoria-imprensa.png',
    color: '#00A2FF',
    items: [
      'Assessoria de imprensa e relações com a mídia',
      'Media training',
      'Formação de lideranças e equipes',
      'Mentoria para candidatos e gestores',
    ],
  },
  {
    id: 'inteligencia',
    title: 'Inteligência e Estratégia',
    image: '/images/servicos/inteligencia-estrategia.png',
    color: '#00FF84',
    items: [
      'Diagnóstico e pesquisa (quali/quanti)',
      'Planejamento estratégico de campanha',
      'Análise de cenário e viabilidade eleitoral',
      'Gestão de crise de imagem',
    ],
  },
  {
    id: 'gestao-redes',
    title: 'Gestão de Redes Sociais',
    image: '/images/servicos/gestao-redes.png',
    color: '#FF3F00',
    items: [
      'Gestão de redes sociais (orgânico e pago)',
      'Produção de conteúdo (vídeos, motion, design, roteiros e textos)',
      'Gestão de tráfego pago e segmentação',
      'Monitoramento e análise de dados',
      'Gestão de WhatsApp e canais de mobilização',
      'Desenvolvimento de sites e landing pages',
      'Jingle e produção de áudio',
    ],
  },
  {
    id: 'posicionamento',
    title: 'Posicionamento',
    image: '/images/servicos/posicionamento.png',
    color: '#00CF87',
    items: [
      'Análise de redes, cenário e definição de narrativa pessoal.',
    ],
  },
  {
    id: 'planejamento',
    title: 'Planejamento Estratégico',
    image: '/images/servicos/planejamento.png',
    color: '#FFFC00',
    items: [
      'Metas, mensagens-chave, cronograma e territórios prioritários.',
    ],
  },
  {
    id: 'trafego',
    title: 'Tráfego Pago',
    image: '/images/servicos/trafego-pago.png',
    color: '#00A2FF',
    items: [
      'Impulsionamento segmentado para alcance e captação.',
    ],
  },
  {
    id: 'formacao',
    title: 'Formação e Mentoria',
    image: '/images/servicos/formacao-mentoria.png',
    color: '#025FFF',
    items: [
      'Encontros periódicos de formação comunicação e estratégica (coletivos ou individuais).',
    ],
  },
  {
    id: 'manual',
    title: 'Manual de Identidade Visual',
    image: '/images/servicos/manual-identidade.png',
    color: '#6F00FF',
    items: [
      'Criação de logo marca',
      'Aplicações da logo',
      'Diretrizes visuais online e offline',
      'Brand book',
    ],
  },
]

export function Servicos() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Serviços da AHH — Comunicação Política</h1>

      <PageHeroBand />

      <SplitSection
        id="essencia"
        title="Nossa essência"
        image="/images/sobre/quem-somos.png"
        color="#FF3E00"
        ratio={0.888}
        imageBg="#323232"
        imageCover
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
        ratio={0.888}
        imageBg="#323232"
        imageCover
      >
        <ul className="flex flex-col gap-2 text-[clamp(1.15rem,1.7vw,1.5rem)] leading-[1.35]">
          {METHOD_STEPS.map((step) => (
            <li key={step.title}>
              <span className="font-semibold">{step.title}</span>
              <span className="block text-[0.85em] leading-[1.3] opacity-80">
                {step.description}
              </span>
            </li>
          ))}
        </ul>
      </SplitSection>

      <SectionDivider />

      <ServicesStrip services={SERVICES} columns={5} />

      <SectionDivider />

      <SplitSection
        id="como-trabalhamos"
        title="Como trabalhamos"
        image="/images/sobre/como-trabalhamos.png"
        color="#025FFF"
        ratio={0.888}
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
        ratio={0.888}
      >
        <ul className="space-y-5 text-[clamp(1.15rem,1.8vw,1.75rem)] leading-snug">
          <li>
            <a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#6F00FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F00FF] focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              WhatsApp: {CONTACT_WHATSAPP_LABEL}
            </a>
          </li>
          <li>
            <a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-[#6F00FF] px-7 py-2.5 font-display text-[0.9em] uppercase leading-none tracking-wide text-[#6F00FF] transition-colors duration-300 hover:bg-[#6F00FF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F00FF] focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
            >
              <MessageCircle className="h-[1.2em] w-[1.2em]" aria-hidden="true" />
              Conversar no WhatsApp
            </a>
          </li>
          <li>{CONTACT_CITY}</li>
        </ul>
      </SplitSection>
    </div>
  )
}
