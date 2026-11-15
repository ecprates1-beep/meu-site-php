import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Planejamento estratégico',
  'Estratégia de redes',
  'Produção de conteúdo',
  'Manual de identidade',
]

export function Jessy() {
  return (
    <CasePage
      srTitle="Jessy Dayane — AHH Comunicação Política"
      headerSrc="/images/jessy/jessy-header.png"
      headerAlt="Jessy Dayane — Candidata a Deputada Estadual 2026"
      lead="Jessy Dayane (2026)"
      subtitle="Candidata a deputada estadual"
      items={ITEMS}
      dotColor="#8E1E5B"
    />
  )
}
