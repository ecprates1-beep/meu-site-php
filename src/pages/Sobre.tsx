import type { ReactNode } from 'react'
import { ArrowLeft, Check, Mail } from 'lucide-react'
import { Link } from '../lib/router'

const CONTACT_EMAIL = 'contato@ahh.net.br'

const steps = [
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
    description: 'Definimos o caminho: mensagem, canais e prioridades para chegar onde queremos.',
  },
  {
    title: 'Gestão',
    description:
      'Acompanhamos a execução do início ao fim, ajustando a rota com base nos resultados.',
  },
]

const modes = [
  { title: 'Orientação pontual', description: 'Para demandas específicas.' },
  { title: 'Consultoria contínua', description: 'Para mandatos e gestões.' },
  { title: 'Campanha completa', description: 'Para o período eleitoral.' },
  { title: 'Formação e treinamento', description: 'Para equipar sua equipe.' },
]

const intelligence = [
  'Diagnóstico e pesquisa (quali/quanti)',
  'Planejamento estratégico de campanha',
  'Análise de cenário e viabilidade eleitoral',
  'Gestão de crise de imagem',
]

const digital = [
  'Gestão de redes sociais (orgânico e pago)',
  'Produção de conteúdo (vídeos, motion, design, roteiros e textos)',
  'Gestão de tráfego pago e segmentação',
  'Monitoramento e análise de dados',
  'Gestão de WhatsApp e canais de mobilização',
  'Desenvolvimento de sites e landing pages',
]

const offline = [
  'Produção de material gráfico (santinhos, adesivos, bandeiras)',
  'Jingle e produção de áudio',
  'Eventos e comícios',
]

const training = [
  'Assessoria de imprensa e relações com a mídia',
  'Media training',
  'Formação de lideranças e equipes',
  'Mentoria para candidatos e gestores',
]

type SectionRowProps = {
  id: string
  eyebrow: string
  title: string
  image: string
  reverse?: boolean
  level?: 1 | 2
  children: ReactNode
}

function SectionRow({ id, eyebrow, title, image, reverse, level = 2, children }: SectionRowProps) {
  const headingClass =
    'mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] text-white'

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`w-full max-w-[340px] justify-self-center sm:max-w-[380px] lg:max-w-[420px] ${
            reverse ? 'lg:order-2' : ''
          }`}
        />

        <div className={reverse ? 'lg:order-1' : ''}>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>

          {level === 1 ? (
            <h1 id={`${id}-title`} className={headingClass}>
              {title}
            </h1>
          ) : (
            <h2 id={`${id}-title`} className={headingClass}>
              {title}
            </h2>
          )}

          <div className="mt-6 space-y-5 text-base leading-relaxed text-white/65 sm:text-lg">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
          <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Sobre() {
  return (
    <div className="bg-ink">
      <section aria-labelledby="essencia-title" className="pt-24 sm:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16">
          <img
            src="/images/sobre/quem-somos.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-[340px] justify-self-center sm:max-w-[380px] lg:max-w-[420px]"
          />

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Início
            </Link>

            <p className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Quem somos
            </p>

            <h1
              id="essencia-title"
              className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] text-white"
            >
              Nossa essência
            </h1>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/65 sm:text-lg">
              <p>
                Somos apaixonados por política e acreditamos que a boa comunicação é a ponte entre
                uma causa e o coração do eleitor.
              </p>
              <p>
                Unimos inteligência de dados, criação de conteúdo e mobilização para construir
                campanhas vitoriosas e mandatos potentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionRow
        id="metodologia"
        eyebrow="Metodologia"
        title="Nossa metodologia"
        image="/images/sobre/metodologia.png"
        reverse
      >
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="border border-white/10 p-5">
              <span className="font-display text-2xl leading-none text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg uppercase leading-none text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.description}</p>
            </li>
          ))}
        </ol>
      </SectionRow>

      <SectionRow
        id="como-trabalhamos"
        eyebrow="Método de trabalho"
        title="Como trabalhamos"
        image="/images/sobre/como-trabalhamos.png"
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {modes.map((mode) => (
            <li key={mode.title} className="border border-white/10 p-5">
              <h3 className="font-display text-lg uppercase leading-none text-white">
                {mode.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{mode.description}</p>
            </li>
          ))}
        </ul>
      </SectionRow>

      <section aria-labelledby="servicos-title" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Serviços
          </p>
          <h2
            id="servicos-title"
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase leading-[0.95] text-white"
          >
            O que fazemos
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Do diagnóstico à entrega, atuamos em todas as frentes da comunicação política.
          </p>
        </div>
      </section>

      <SectionRow
        id="inteligencia"
        eyebrow="Dados e cenário"
        title="Inteligência e estratégia"
        image="/images/sobre/inteligencia-estrategia.png"
        level={2}
      >
        <Checklist items={intelligence} />
      </SectionRow>

      <SectionRow
        id="digital"
        eyebrow="Online e redes"
        title="Comunicação digital"
        image="/images/sobre/comunicacao-digital.png"
        reverse
      >
        <Checklist items={digital} />
      </SectionRow>

      <SectionRow
        id="offline"
        eyebrow="Rua e tradicional"
        title="Eventos offline"
        image="/images/sobre/eventos-offline.png"
      >
        <Checklist items={offline} />
      </SectionRow>

      <SectionRow
        id="assessoria"
        eyebrow="Imprensa e lideranças"
        title="Assessoria e formação"
        image="/images/sobre/assessoria-formacao.png"
        reverse
      >
        <Checklist items={training} />
      </SectionRow>

      <SectionRow
        id="contatos"
        eyebrow="Fale com a gente"
        title="Nossos contatos"
        image="/images/sobre/contatos.png"
      >
        <p>Vamos construir a próxima campanha vitoriosa juntos.</p>
        <p className="text-sm tracking-wide text-white/45">{CONTACT_EMAIL}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex w-fit items-center gap-3 border border-accent px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Fale com a gente
        </a>
      </SectionRow>
    </div>
  )
}
