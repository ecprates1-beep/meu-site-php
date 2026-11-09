import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'
import { Sobre } from './pages/Sobre'
import { Juventude } from './pages/Juventude'
import { usePathname } from './lib/router'

export default function App() {
  const pathname = usePathname()
  const isSobre = pathname === '/sobre'
  const isJuventude = pathname === '/juventude'

  useEffect(() => {
    document.title = isSobre
      ? 'Sobre — AHH Comunicação Política'
      : isJuventude
        ? 'Juventude — AHH Comunicação Política'
        : 'AHH — Comunicação Política 360'
  }, [isSobre, isJuventude])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        {isSobre ? <Sobre /> : isJuventude ? <Juventude /> : <><Hero /><Portfolio /></>}
      </main>
      <Footer />
    </div>
  )
}
