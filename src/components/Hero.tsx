import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-32 text-center sm:px-8">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/55">
          <img src="/star.png" alt="" aria-hidden="true" className="h-3 w-3 invert" />
          AHH · Comunicação política
        </p>

        <h1 className="mt-6 font-display text-[clamp(2.75rem,9vw,7rem)] uppercase leading-[0.9] tracking-tight text-white">
          Comunicação
          <br />
          Política <span className="text-accent">360</span>
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
          Unimos inteligência de dados, criação de conteúdo e mobilização para construir campanhas
          vitoriosas e mandatos potentes.
        </p>

        <div className="mt-10">
          <motion.a
            href="#portfolio"
            whileHover={reduce ? undefined : { scale: 1.04 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            Saiba mais
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
