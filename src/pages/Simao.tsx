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

export function Simao() {
  return (
    <CasePage
      srTitle="Simão Pedro — AHH Comunicação Política"
      headerSrc="/images/simao/simao-header.png"
      headerAlt="Simão Pedro — Candidato a Deputado Estadual 2026"
      lead="Simão Pedro (2026)"
      subtitle="Candidato a deputado estadual"
      items={ITEMS}
      dotColor="#008A40"
    />
  )
}
