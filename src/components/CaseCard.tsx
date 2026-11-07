import { motion, useReducedMotion } from 'framer-motion'
import type { PortfolioCase } from '../data/cases'

type CaseCardProps = {
  item: PortfolioCase
}

export function CaseCard({ item }: CaseCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl"
      style={{ backgroundColor: item.bgColor }}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-display text-5xl text-white/20"
        >
          {item.imagePlaceholder}
        </span>
        <img
          src={item.image}
          alt={`${item.name} — ${item.role} ${item.year}`}
          width={1200}
          height={960}
          loading="lazy"
          decoding="async"
          className="relative h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  )
}
