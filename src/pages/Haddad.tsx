import { CasePage } from '../components/CasePage'

const ITEMS = [
  <>
    Produção do documentário de longa-metragem <em>Partido</em>, sobre a campanha
    presidencial de 2018
  </>,
]

export function Haddad() {
  return (
    <CasePage
      srTitle="Fernando Haddad — AHH Comunicação Política"
      headerSrc="/images/haddad/haddad-header.png"
      headerAlt="Fernando Haddad — Presidência 2018"
      lead="CANDIDATO A PRESIDÊNCIA"
      items={ITEMS}
      dotColor="#002C8D"
    />
  )
}
