export function Haddad() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Fernando Haddad — AHH Comunicação Política</h1>

      <img
        src="/images/haddad/haddad-header.png"
        alt="Fernando Haddad — Presidência 2018"
        className="block h-auto w-full"
        decoding="async"
      />

      <section
        aria-label="Sobre a campanha"
        className="px-6 py-14 sm:px-10 lg:px-[10vw] lg:py-[6vw]"
      >
        <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <strong className="font-semibold">Fernando Haddad (2018)</strong>
        </p>
        <p className="mt-4 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          Candidato a Presidência
        </p>

        <ul className="mt-6 space-y-5 text-[clamp(1.3rem,2.2vw,2.2rem)] leading-[1.4]">
          <li className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="mt-[0.5em] h-3 w-3 shrink-0 rounded-full bg-[#002C8D]"
            />
            <span>
              Produção do documentário de longa-metragem <em>Partido</em>, sobre a campanha
              presidencial de 2018
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
