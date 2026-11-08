import { motion, useReducedMotion } from 'framer-motion'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      <img
        src="/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20 pt-28 text-center sm:px-8">
        <div className="flex flex-col items-center">
          <img
            src="/logo-hero.png"
            alt="AHH — Comunicação Política 360°"
            width={293}
            height={356}
            className="h-[clamp(180px,26vw,340px)] w-auto brightness-0 invert"
          />
          <div className="mt-7 h-1.5 w-full bg-accent" aria-hidden="true" />
        </div>

        <p className="mt-9 max-w-3xl text-balance text-lg leading-snug text-white/65 sm:text-xl md:text-2xl">
          Unimos inteligência de dados, criação de conteúdo e mobilização para construir campanhas
          vitoriosas e mandatos potentes.
        </p>

        <motion.a
          href="#portfolio"
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center border-2 border-accent px-7 py-2.5 font-display text-lg uppercase leading-none tracking-wide text-accent transition-colors duration-300 hover:bg-accent hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        >
          Saiba mais
        </motion.a>
      </div>
    </section>
  )
}
