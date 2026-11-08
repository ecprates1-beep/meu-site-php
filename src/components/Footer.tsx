import { ArrowUp, Mail } from 'lucide-react'

const CONTACT_EMAIL = 'contato@ahh.net.br'

export function Footer() {
  return (
    <footer id="contato" className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md">
            <img src="/logo.png" alt="AHH" className="h-10 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              Inteligência de dados, criação de conteúdo e mobilização para campanhas vitoriosas e
              mandatos potentes.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Fale com a gente
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AHH. Todos os direitos reservados.</p>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            Voltar ao topo
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
