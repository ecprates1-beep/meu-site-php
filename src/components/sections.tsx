import { useState, type CSSProperties, type ReactNode } from 'react'
import { Check } from 'lucide-react'

export type ServiceItem = {
  id: string
  title: string
  image: string
  color: string
  items: string[]
}

function readableColor(color: string) {
  return color.toUpperCase() === '#FFFC00' ? '#8A8824' : color
}

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

export function PageHeroBand() {
  return (
    <div className="bg-[#323232]">
      <div className="h-28 sm:h-36" />
    </div>
  )
}

type SectionDividerProps = {
  tone?: 'cream' | 'white'
  size?: 'sm' | 'lg'
}

export function SectionDivider({ tone = 'cream' }: SectionDividerProps) {
  return (
    <div
      className={`flex justify-center ${tone === 'white' ? 'bg-white' : 'bg-cream'} py-6 lg:py-[1.6vw]`}
      aria-hidden="true"
    >
      <img
        src="/star.png"
        alt=""
        className="h-[18px] w-[18px] lg:h-[1.7vw] lg:w-[1.7vw]"
      />
    </div>
  )
}

type SplitSectionProps = {
  id: string
  title: string
  image: string
  color: string
  align?: 'center' | 'bottom'
  contentClassName?: string
  ratio?: number
  imageBg?: string
  imageCover?: boolean
  children: ReactNode
}

export function SplitSection({
  id,
  title,
  image,
  color,
  align = 'center',
  contentClassName = 'w-full max-w-[22rem] lg:ml-[13vw]',
  ratio = 0.8,
  imageBg,
  imageCover = false,
  children,
}: SplitSectionProps) {
  return (
    <section aria-labelledby={`${id}-title`} className="bg-cream">
      <div
        className="grid lg:min-h-[clamp(430px,calc(50vw/var(--split-ratio)),900px)] lg:grid-rows-[minmax(0,1fr)] lg:grid-cols-2"
        style={{ '--split-ratio': ratio } as CSSProperties}
      >
        <div className={imageBg ? '' : 'bg-charcoal'} style={imageBg ? { backgroundColor: imageBg } : undefined}>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className={imageCover ? 'h-auto w-full object-cover' : 'h-auto w-full object-contain lg:h-full'}
          />
        </div>

        <div
          className={`relative flex px-6 py-14 sm:px-10 lg:px-0 lg:py-0 ${
            align === 'bottom' ? 'items-center lg:items-end lg:pb-[2.5vw]' : 'items-center'
          }`}
        >
          <div className={contentClassName}>
            <h2 id={`${id}-title`} className="sr-only">
              {title}
            </h2>
            {children}
          </div>

          <Staircase
            color={color}
            className="absolute bottom-8 right-6 h-8 w-14 sm:right-10 lg:bottom-[3vw] lg:right-[2.25vw] lg:h-[3.5vw] lg:w-[6.9vw]"
          />
        </div>
      </div>
    </section>
  )
}

type ServicesStripProps = {
  services: ServiceItem[]
  columns?: 4 | 5
}

export function ServicesStrip({ services, columns = 4 }: ServicesStripProps) {
  const [open, setOpen] = useState<string | null>(null)
  const gridClass = columns === 5 ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4'

  return (
    <section aria-labelledby="servicos-title" className="bg-black">
      <h2 id="servicos-title" className="sr-only">
        Serviços
      </h2>

      <div className={`grid gap-2 ${gridClass}`}>
        {services.map((service, index) => {
          const active = open === service.id
          const fillOnMobile = services.length % 2 === 1 && index === services.length - 1

          return (
            <div
              key={service.id}
              className={`bg-charcoal ${fillOnMobile ? 'col-span-2 sm:col-span-1' : ''}`}
            >
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
                aria-controls={`servico-detalhe-${service.id}`}
                className="w-full py-3.5 text-center text-lg text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:text-xl"
              >
                {active ? 'fechar −' : 'saiba+'}
              </button>

              {active && (
                <div
                  id={`servico-detalhe-${service.id}`}
                  className="bg-cream px-5 py-8 sm:px-6"
                >
                  <h3
                    className="text-xl font-semibold sm:text-2xl"
                    style={{ color: readableColor(service.color) }}
                  >
                    {service.title}
                  </h3>
                  <ul className="mt-5 grid gap-y-3 text-sm text-charcoal sm:text-base">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0"
                          aria-hidden="true"
                          style={{ color: readableColor(service.color) }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>

    </section>
  )
}
