import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
