import { cases } from '../data/cases'
import { CaseCard } from './CaseCard'

export function Portfolio() {
  return (
    <section id="portfolio" aria-label="Portfólio de campanhas">
      <ul className="flex flex-col">
        {cases.map((item, index) => (
          <li key={item.id}>
            <CaseCard item={item} index={index} />
          </li>
        ))}
      </ul>
    </section>
  )
}
