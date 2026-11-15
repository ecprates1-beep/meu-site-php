import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Planejamento estratégico',
  'Estratégia de redes',
  'Produção de conteúdo para as redes',
  'Identidade visual da campanha',
  'Produção de material impresso',
  'Produção de peças gráficas digitais',
  'Produção de site',
  'Estratégia de impulsionamento',
]

export function Nabil() {
  return (
    <CasePage
      srTitle="Nabil Bonduki — AHH Comunicação Política"
      headerSrc="/images/nabil/nabil-header.png"
      headerAlt="Nabil Bonduki — Vereador 2012–2024"
      lead="Nabil Bonduki (2012 - 2024)"
      subtitle="Vereador Eleito"
      items={ITEMS}
      dotColor="#961C49"
    />
  )
}
