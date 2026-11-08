import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from 'react'

function normalize(path: string) {
  return path.replace(/\/+$/, '') || '/'
}

export function usePathname() {
  const [path, setPath] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const update = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])

  return path
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function Link({ href, onClick, ...props }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return
    if (!href.startsWith('/')) return

    event.preventDefault()
    const hash = href.split('#')[1]
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))

    window.setTimeout(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }, 60)
  }

  return <a href={href} onClick={handleClick} {...props} />
}
