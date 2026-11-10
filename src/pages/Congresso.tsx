const ITEMS = [
  'Co-criação do movimento',
  'Estratégia de redes',
  'Identidade visual',
  'Produção de site',
  'Produção de conteúdo para as redes',
  'Produção de impressos',
]

export function Congresso() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Congresso do Povo — AHH Comunicação Política</h1>

      <img
        src="/images/congresso/congresso-header.png"
        alt="Movimento Congresso do Povo — 2026"
        className="block h-auto w-full"
        decoding="async"
      />

      <section
        aria-label="Sobre o case"
        className="px-6 py-14 sm:px-10 lg:px-[10vw] lg:py-[6vw]"
      >
        <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">Movimento Congresso do Povo (2026)</strong>
        </p>

        <ul className="mt-6 space-y-5 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#3E1E6E]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
