import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Identidade visual da campanha',
  'Assessoria de imprensa',
  'Media training',
  'Estratégia de redes',
  'Produção de material impresso',
  'Produção de peças gráficas digitais',
]

export function Luna() {
  return (
    <CasePage
      srTitle="Luna Zarattini — AHH Comunicação Política"
      headerSrc="/images/luna/luna-header.png"
      headerAlt="Luna Zarattini — Deputada Federal"
      lead="DEPUTADA FEDERAL ELEITA"
      items={ITEMS}
      dotColor="#963E01"
    />
  )
}
