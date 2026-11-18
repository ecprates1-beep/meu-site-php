import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Identidade visual da campanha',
  'Planejamento Estratégico da campanha',
  'Estratégia e produção de conteúdo para as redes',
  'Produção de todo o material impresso',
  'Produção de peças gráficas digitais',
  'Produção de site',
]

export function Zanatta() {
  return (
    <CasePage
      srTitle="Eduardo Zanatta — AHH Comunicação Política"
      headerSrc="/images/zanatta/zanatta-header.png"
      headerAlt="Eduardo Zanatta — Deputado Federal"
      lead="CANDIDATO A DEPUTADO FEDERAL"
      items={ITEMS}
      dotColor="#003C86"
    />
  )
}
