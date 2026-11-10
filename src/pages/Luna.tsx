const ITEMS = [
  'Identidade visual da campanha',
  'Assessoria de imprensa',
  'Media training',
  'Estratégia de redes',
  'Produção de material impresso',
  'Produção de peças gráficas digitais',
]

export function Luna() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Luna Zarattini — AHH Comunicação Política</h1>

      <img
        src="/images/luna/luna-header.png"
        alt="Luna Zarattini — Deputada Federal"
        className="block h-auto w-full"
        decoding="async"
      />

      <section
        aria-label="Sobre a campanha"
        className="px-6 py-14 sm:px-10 lg:px-[10vw] lg:py-[6vw]"
      >
        <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">Deputada federal eleita</strong>
        </p>

        <ul className="mt-6 space-y-5 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#963E01]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
