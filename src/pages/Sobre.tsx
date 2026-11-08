import { useState, type ReactNode } from 'react'
import { Check } from 'lucide-react'

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

const SERVICES = [
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

function Staircase({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 72 40"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      style={{ color }}
    >
      <rect x="0" y="24" width="22" height="16" />
      <rect x="25" y="12" width="22" height="16" />
      <rect x="50" y="0" width="22" height="16" />
    </svg>
  )
}

function Divider() {
  return (
    <div className="flex justify-center bg-cream py-3" aria-hidden="true">
      <img src="/star.png" alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
    </div>
  )
}

type SectionProps = {
  id: string
  title: string
  image: string
  color: string
  children: ReactNode
}

function Section({ id, title, image, color, children }: SectionProps) {
  return (
    <section aria-labelledby={`${id}-title`} className="bg-cream">
      <div className="grid lg:h-[clamp(430px,60vw,900px)] lg:grid-cols-2">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-auto w-full object-cover lg:h-full"
        />

        <div className="relative flex items-center px-6 py-14 sm:px-10 lg:px-0 lg:py-0">
          <div className="w-full max-w-[22rem] lg:ml-[13vw]">
            <h2 id={`${id}-title`} className="sr-only">
              {title}
            </h2>
            {children}
          </div>

          <Staircase
            color={color}
            className="absolute bottom-8 right-6 h-8 w-14 sm:right-10 lg:bottom-10 lg:right-12 lg:h-9 lg:w-16"
          />
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [open, setOpen] = useState<string | null>(null)
  const current = SERVICES.find((service) => service.id === open) ?? null

  return (
    <section aria-labelledby="servicos-title" className="bg-black">
      <h2 id="servicos-title" className="sr-only">
        Serviços
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {SERVICES.map((service) => {
          const active = open === service.id

          return (
            <div key={service.id} className="bg-charcoal">
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setOpen(active ? null : service.id)}
                aria-expanded={active}
                aria-controls="servico-detalhe"
                className="w-full py-3.5 text-center text-lg text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:text-xl"
              >
                {active ? 'fechar −' : 'saiba +'}
              </button>
            </div>
          )
        })}
      </div>

      {current && (
        <div id="servico-detalhe" className="bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
            <h3
              className="text-xl font-semibold sm:text-2xl"
              style={{ color: current.color === '#FFFC00' ? '#8A8824' : current.color }}
            >
              {current.title}
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm text-charcoal sm:grid-cols-2 sm:text-base">
              {current.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0"
                    aria-hidden="true"
                    style={{ color: current.color === '#FFFC00' ? '#8A8824' : current.color }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}

export function Sobre() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Sobre a AHH — Comunicação Política</h1>

      <Section id="essencia" title="Nossa essência" image="/images/sobre/quem-somos.png" color="#FF3E00">
        <p className="text-[clamp(1.5rem,2.7vw,2.6rem)] leading-[1.18]">
          Somos apaixonados por <strong className="font-semibold text-[#FF3E00]">política</strong> e
          acreditamos que a boa{' '}
          <strong className="font-semibold text-[#FF3E00]">comunicação</strong> é a{' '}
          <strong className="font-semibold text-[#FF3E00]">ponte</strong> entre uma causa e o{' '}
          <strong className="font-semibold text-[#FF3E00]">coração</strong> do{' '}
          <strong className="font-semibold text-[#FF3E00]">eleitor</strong>.
        </p>
      </Section>

      <Divider />

      <Section id="metodologia" title="Nossa metodologia" image="/images/sobre/metodologia.png" color="#00CF87">
        <ul className="text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.35]">
          {METHOD_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </Section>

      <Divider />

      <Services />

      <Divider />

      <Section
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
      </Section>

      <Divider />

      <Section id="contatos" title="Nossos contatos" image="/images/sobre/contatos.png" color="#6F00FF">
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
      </Section>
    </div>
  )
}
