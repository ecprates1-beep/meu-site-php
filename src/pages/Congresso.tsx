import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Co-criação do movimento',
  'Estratégia de redes',
  'Identidade visual',
  'Produção de site',
  'Produção de conteúdo para as redes',
  'Produção de impressos',
]

export function Congresso() {
  return (
    <CasePage
      srTitle="Congresso do Povo — AHH Comunicação Política"
      headerSrc="/images/congresso/congresso-header.png"
      headerAlt="Movimento Congresso do Povo — 2026"
      lead="MOVIMENTO CONGRESSO DO POVO"
      items={ITEMS}
      dotColor="#3E1E6E"
    />
  )
}
