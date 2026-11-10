export function Marina() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Marina Silva — AHH Comunicação Política</h1>

      <img
        src="/images/marina/marina-header.png"
        alt="Marina Silva — Campanha 2026"
        className="block h-auto w-full"
        decoding="async"
      />

      <section aria-label="Sobre a campanha" className="px-6 py-14 sm:px-10 lg:px-[10vw] lg:py-[6vw]">
        <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">Marina Silva</strong>
        </p>

        <ul className="mt-6 space-y-5 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <li className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#004433]" />
            <span>Candidata a senadora em 2026</span>
          </li>
          <li className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#004433]" />
            <span>Produção do programa de TV da Rede</span>
          </li>
          <li className="flex items-start gap-4">
            <span aria-hidden="true" className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#004433]" />
            <span>Produção do “diamante” da Marina Silva para as redes sociais</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
