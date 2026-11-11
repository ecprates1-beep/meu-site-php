import { motion, useReducedMotion } from 'framer-motion'
import { Link } from '../lib/router'
import type { PortfolioCase } from '../data/cases'

type CaseCardProps = {
  item: PortfolioCase
  index: number
}

export function CaseCard({ item, index }: CaseCardProps) {
  const reduce = useReducedMotion()

  const content = (
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
        width={1920}
        height={1080}
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
        className="block h-auto w-full"
      />
    </motion.article>
  )

  if (item.href) {
    return (
      <Link href={item.href} aria-label={`Ver case ${item.name}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        {content}
      </Link>
    )
  }

  return content
}
