import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Candidata a senadora em 2026',
  'Produção do programa de TV da Rede',
  'Produção do “diamante” da Marina Silva para as redes sociais',
]

export function Marina() {
  return (
    <CasePage
      srTitle="Marina Silva — AHH Comunicação Política"
      headerSrc="/images/marina/marina-header.png"
      headerAlt="Marina Silva — Campanha 2026"
      lead="Marina Silva"
      items={ITEMS}
      dotColor="#004433"
    />
  )
}
