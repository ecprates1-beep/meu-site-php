export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
        <a
          href="#top"
          aria-label="AHH — início"
          className="inline-flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          <img src="/logo.png" alt="AHH" className="h-12 w-auto" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 sm:flex">
          <a
            href="#portfolio"
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white"
          >
            Portfólio
          </a>
          <a
            href="#contato"
            className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
