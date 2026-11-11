import {
  PageHeroBand,
  SectionDivider,
  SplitSection,
} from '../components/sections'

const RULES = [
  { label: 'IDADE', text: 'Até 40 anos.' },
  {
    label: 'CARGO ATUAL',
    text: 'Vereador, deputado estadual, deputado federal em primeiro mandato, ou liderança jovem de partido/movimento.',
  },
  {
    label: 'EXPERIÊNCIA',
    text: 'Pelo menos 1 cargo eletivo ou 1 candidatura relevante ou liderança de movimento.',
  },
  {
    label: 'BASE DIGITAL',
    text: 'Mínimo de 30.000 a 50.000 seguidores somados (Instagram, TikTok, YouTube, Facebook).',
  },
  {
    label: 'TERRITÓRIO',
    text: 'Atuação clara em um município, estado, região ou movimento.',
  },
  {
    label: 'ALINHAMENTO',
    text: 'Compromisso com renovação política, transparência e boas práticas.',
  },
]

export function Juventude() {
  return (
    <div className="bg-cream text-charcoal">
      <h1 className="sr-only">Juventude — AHH Comunicação Política</h1>

      <PageHeroBand />

      <SplitSection
        id="investindo"
        title="Investindo na juventude"
        image="/images/juventude/investindo.png"
        color="#FF0075"
        ratio={0.888}
        imageBg="#323232" imageCover
        align="bottom"
        contentClassName="w-full max-w-[30rem] lg:ml-[11vw] lg:mr-[10vw]"
      >
        <div className="space-y-6 text-[clamp(1.4rem,2.3vw,2.3rem)] leading-[1.34]">
          <p>
            Temos uma frente da agência dedicada a{' '}
            <strong className="font-semibold text-[#FF0075]">
              jovens que estão começando ou crescendo na política
            </strong>{' '}
            com preço acessível, formação estratégica e um modelo que investe no futuro do país.
          </p>
          <p>
            <strong className="font-semibold text-[#FF0075]">
              Os jovens são o futuro da política.
            </strong>{' '}
            Quem aposta neles agora ajuda a{' '}
            <strong className="font-semibold text-[#FF0075]">construir o futuro</strong> do
            Congresso, das assembleias e das câmaras municipais.
          </p>
        </div>
      </SplitSection>

      <SectionDivider tone="white" size="lg" />

      <SplitSection
        id="tamo-junto"
        title="Tamo junto"
        image="/images/juventude/tamo-junto.png"
        color="#00CF87"
        ratio={0.888}
        imageBg="#323232" imageCover
        align="bottom"
        contentClassName="w-full max-w-[28rem] lg:ml-[11vw] lg:mr-[10vw]"
      >
        <div className="space-y-4 text-[clamp(1.3rem,2.25vw,2.25rem)] leading-[1.42]">
          <p>
            <strong className="font-semibold text-[#00CF87]">
              Estamos investindo no jovem vereador de hoje
            </strong>{' '}
            que será deputado estadual amanhã, federal depois, senador, governador.{' '}
            <strong className="font-semibold text-[#00CF87]">
              Queremos ser parceiros da sua trajetória política.
            </strong>
          </p>
          <p>
            É um investimento na próxima geração de líderes do Brasil.{' '}
            <strong className="font-semibold text-[#00CF87]">
              Investir na renovação política é fortalecer a democracia brasileira.
            </strong>
          </p>
        </div>
      </SplitSection>

      <SectionDivider tone="white" size="lg" />

      <SplitSection
        id="regras"
        title="Regras de entrada"
        image="/images/juventude/regras-de-entrada.png"
        color="#025FFF"
        ratio={0.888}
        imageBg="#323232" imageCover
        align="bottom"
        contentClassName="w-full max-w-[40rem] lg:ml-[9.5vw] lg:mr-[10vw]"
      >
        <ul className="space-y-1 text-[clamp(1.2rem,2.05vw,2.05rem)] leading-[1.4] lg:space-y-0">
          {RULES.map((rule) => (
            <li key={rule.label}>
              <strong className="font-semibold text-[#025FFF]">{rule.label}:</strong> {rule.text}
            </li>
          ))}
        </ul>
      </SplitSection>

      <SectionDivider tone="white" size="lg" />
    </div>
  )
}
