import type { ReactNode } from 'react'

interface CasePageProps {
  srTitle: string
  headerSrc: string
  headerAlt: string
  lead: string
  subtitle?: string
  items: ReactNode[]
  dotColor: string
}

export function CasePage({
  srTitle,
  headerSrc,
  headerAlt,
  lead,
  subtitle,
  items,
  dotColor,
}: CasePageProps) {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">{srTitle}</h1>

      <img
        src={headerSrc}
        alt={headerAlt}
        className="block h-auto w-full"
        decoding="async"
      />

      <section
        aria-label="Sobre a campanha"
        className="px-6 py-14 sm:px-10 lg:px-[10vw] lg:py-[6vw]"
      >
        <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">{lead}</strong>
        </p>

        {subtitle && (
          <p className="mt-4 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
            {subtitle}
          </p>
        )}

        <ul className="mt-6 space-y-5 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: dotColor }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
