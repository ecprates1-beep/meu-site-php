import { CasePage } from '../components/CasePage'

const ITEMS = ['Produção do “diamante” para as redes sociais']

export function Guajajara() {
  return (
    <CasePage
      srTitle="Sônia Guajajara — AHH Comunicação Política"
      headerSrc="/images/guaja/guaja-header.png"
      headerAlt="Sônia Guajajara — Deputada Federal"
      lead="DEPUTADA FEDERAL ELEITA"
      items={ITEMS}
      dotColor="#00493C"
    />
  )
}
