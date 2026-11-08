import { motion, useReducedMotion } from 'framer-motion'
import type { PortfolioCase } from '../data/cases'

type CaseCardProps = {
  item: PortfolioCase
  index: number
}

export function CaseCard({ item, index }: CaseCardProps) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0 }}
      whileInView={reduce ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: item.bgColor }}
    >
      <img
        src={item.image}
        alt={`${item.name} — ${item.role} ${item.year}`}
        width={1200}
        height={960}
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
        className="block h-auto w-full"
      />
    </motion.article>
  )
}
