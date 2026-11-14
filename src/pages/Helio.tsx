const ITEMS = [
  'Planejamento estratégico',
  'Estratégia de redes',
  'Produção de conteúdo',
  'Manual de identidade',
]

export function Helio() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Hélio Rodrigues — AHH Comunicação Política</h1>

      <img
        src="/images/helio/helio-header.png"
        alt="Hélio Rodrigues — Mandato Vereador 2026"
        className="block h-auto w-full"
        decoding="async"
      />

      <section
        aria-label="Sobre a campanha"
        className="px-6 py-14 sm:px-10 lg:px-[10vw] lg:py-[6vw]"
      >
        <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">Hélio Rodrigues (2026)</strong>
        </p>

        <p className="mt-4 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">Mandato de vereador</strong>
        </p>

        <ul className="mt-6 space-y-5 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#0A3D91]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
