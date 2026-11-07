import { Star } from 'lucide-react'
import { cases } from '../data/cases'
import { CaseCard } from './CaseCard'

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-muted">
              <Star className="h-3.5 w-3.5 fill-ink text-ink" aria-hidden="true" />
              Portfólio
            </p>
            <h2 className="max-w-2xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
              Casos de sucesso
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            Campanhas, mandatos e movimentos que ganharam forma, voz e resultado com a AHH.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cases.map((item) => (
            <li key={item.id}>
              <CaseCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
