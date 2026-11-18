import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Planejamento estratégico',
  'Estratégia de redes',
  'Produção de conteúdo',
  'Manual de identidade',
]

export function Helio() {
  return (
    <CasePage
      srTitle="Hélio Rodrigues — AHH Comunicação Política"
      headerSrc="/images/helio/helio-header.png"
      headerAlt="Hélio Rodrigues — Mandato Vereador 2026"
      lead="MANDATO DE VEREADOR"
      items={ITEMS}
      dotColor="#0A3D91"
    />
  )
}
