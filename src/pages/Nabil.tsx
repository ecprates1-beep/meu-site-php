const ITEMS = [
  'Planejamento estratégico',
  'Estratégia de redes',
  'Produção de conteúdo para as redes',
  'Identidade visual da campanha',
  'Produção de material impresso',
  'Produção de peças gráficas digitais',
  'Produção de site',
  'Estratégia de impulsionamento',
]

export function Nabil() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Nabil Bonduki — AHH Comunicação Política</h1>

      <img
        src="/images/nabil/nabil-header.png"
        alt="Nabil Bonduki — Vereador 2012–2024"
        className="block h-auto w-full"
        decoding="async"
      />

      <section
        aria-label="Sobre a campanha"
        className="px-6 py-14 sm:px-10 lg:px-[10vw] lg:py-[6vw]"
      >
        <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">Nabil Bonduki (2012 - 2024)</strong>
        </p>
        <p className="mt-4 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">Vereador Eleito</p>

        <ul className="mt-8 space-y-5 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#961C49]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
