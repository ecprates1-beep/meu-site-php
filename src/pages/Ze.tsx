import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Identidade visual de pré-campanha',
  'Planejamento Estratégico da pré-campanha',
  'Estratégia e Produção do conteúdo digital para as redes pré-campanha',
  'Produção de peças gráficas digitais',
  'Produção de material impresso',
  'Estratégia de impulsionamento',
]

export function Ze() {
  return (
    <CasePage
      srTitle="Zé Dirceu — AHH Comunicação Política"
      headerSrc="/images/ze/ze-header.png"
      headerAlt="Zé Dirceu — Deputado Federal"
      lead="CANDIDATO A DEPUTADO FEDERAL"
      items={ITEMS}
      dotColor="#A1142D"
    />
  )
}
