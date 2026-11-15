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

export function Paulo() {
  return (
    <CasePage
      srTitle="Paulo Teixeira — AHH Comunicação Política"
      headerSrc="/images/paulo/paulo-header.png"
      headerAlt="Paulo Teixeira — Deputado Federal"
      lead="Candidato a deputado federal"
      items={ITEMS}
      dotColor="#907A00"
    />
  )
}
