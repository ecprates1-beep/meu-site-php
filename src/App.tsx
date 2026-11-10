import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'
import { Servicos } from './pages/Servicos'
import { Juventude } from './pages/Juventude'
import { Marina } from './pages/Marina'
import { Nabil } from './pages/Nabil'
import { Luna } from './pages/Luna'
import { Zanatta } from './pages/Zanatta'
import { Paulo } from './pages/Paulo'
import { Ze } from './pages/Ze'
import { Dilma } from './pages/Dilma'
import { Haddad } from './pages/Haddad'
import { Guajajara } from './pages/Guajajara'
import { Congresso } from './pages/Congresso'
import { usePathname } from './lib/router'

const STATIC_ROUTES: Record<string, { title: string; element: JSX.Element }> = {
  '/servicos': { title: 'Serviços', element: <Servicos /> },
  '/juventude': { title: 'Juventude', element: <Juventude /> },
}

const CASE_ROUTES: Record<string, { title: string; element: JSX.Element }> = {
  '/marina': { title: 'Marina Silva', element: <Marina /> },
  '/nabil': { title: 'Nabil Bonduki', element: <Nabil /> },
  '/luna': { title: 'Luna Zarattini', element: <Luna /> },
  '/zanatta': { title: 'Eduardo Zanatta', element: <Zanatta /> },
  '/paulo': { title: 'Paulo Teixeira', element: <Paulo /> },
  '/ze': { title: 'Zé Dirceu', element: <Ze /> },
  '/dilma': { title: 'Dilma Rousseff', element: <Dilma /> },
  '/haddad': { title: 'Fernando Haddad', element: <Haddad /> },
  '/guajajara': { title: 'Sônia Guajajara', element: <Guajajara /> },
  '/congresso': { title: 'Congresso do Povo', element: <Congresso /> },
}

const ROUTES = { ...STATIC_ROUTES, ...CASE_ROUTES }

export default function App() {
  const pathname = usePathname()
  const route = ROUTES[pathname]

  useEffect(() => {
    document.title = route
      ? `${route.title} — AHH Comunicação Política`
      : 'AHH — Comunicação Política 360'
  }, [route])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        {route ? route.element : <><Hero /><Portfolio /></>}
      </main>
      <Footer />
    </div>
  )
}
