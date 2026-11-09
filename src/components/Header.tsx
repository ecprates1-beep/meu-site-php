import { Link, usePathname } from '../lib/router'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Campanhas', href: '/#portfolio' },
  { label: 'Juventude', href: '/juventude' },
]

export function Header() {
  const pathname = usePathname()
  const isInternal = pathname !== '/'

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      {isInternal && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/35 to-transparent"
          aria-hidden="true"
        />
      )}

      <nav
        aria-label="Navegação principal"
        className="relative flex items-center justify-center gap-5 px-6 py-6 sm:gap-9 sm:py-8"
      >
        {links.map((link) => {
          const active = link.href === pathname

          return (
            <Link
              key={link.label}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={
                active
                  ? 'border-b-[3px] border-accent pb-0.5 font-display text-sm uppercase leading-none tracking-wide text-white sm:text-base'
                  : 'font-display text-sm uppercase leading-none tracking-wide text-white/80 transition-colors hover:text-accent sm:text-base'
              }
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
