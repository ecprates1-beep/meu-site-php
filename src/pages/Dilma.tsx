import { CasePage } from '../components/CasePage'

const ITEMS = [
  'Estratégia de comunicação da campanha do Projeto de Lei do Marco Regulatório das Organizações da Sociedade Civil (MROSC)',
  'Identidade visual da campanha',
  'Produção de conteúdo da campanha para as redes',
]

export function Dilma() {
  return (
    <CasePage
      srTitle="Dilma Rousseff — AHH Comunicação Política"
      headerSrc="/images/dilma/dilma-header.png"
      headerAlt="Dilma Rousseff — Mandato 2014"
      lead="Dilma Rousseff (2014)"
      subtitle="Mandato"
      items={ITEMS}
      dotColor="#A1143C"
    />
  )
}
