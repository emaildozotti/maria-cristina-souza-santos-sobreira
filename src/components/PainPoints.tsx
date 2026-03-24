import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const PAINS = [
  {
    number: '01',
    text: 'Você dá conta de tudo. Do trabalho, dos filhos, do casamento, da casa. Todo mundo conta com você. E no fim do dia, quando tudo está em silêncio, o cansaço que vem não é do corpo. É da alma.',
  },
  {
    number: '02',
    text: 'Faz tempo que você não sabe mais quem é fora dos papéis que cumpre. Quando sobra um momento para si mesma, não sabe o que fazer com ele. Porque você esqueceu como é existir sem estar servindo alguém.',
  },
  {
    number: '03',
    text: 'Existe algo mais antigo. Uma sensação que você nunca colocou em palavras: a de que você nunca foi bem-vinda de verdade. Como se precisasse provar que merece estar aqui.',
  },
  {
    number: '04',
    text: 'Todo mundo acha que você é forte. Você sorri quando quer chorar. Diz que está bem quando está se afogando por dentro. Porque se alguém souber a verdade, você perde o único valor que acredita ter.',
  },
]

export const PainPoints = () => {
  return (
    <section
      className="diagonal-lines"
      style={{
        backgroundColor: '#1E4A2B',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-ultra section-padding">
        <FadeIn>
          <div style={{ marginBottom: '2rem' }}>
            <RootsDivider opacity={0.3} />
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 380px) 1fr',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Sticky sidebar */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <FadeIn delay={0.1}>
              <p className="eyebrow-ultra" style={{ marginBottom: '1.5rem' }}>O QUE VOCÊ CARREGA</p>
              <h2 style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#FAF7F2',
                lineHeight: 1.2,
                marginBottom: '2rem',
              }}>
                Você dá conta de tudo. Mas quem{' '}
                <em style={{ color: '#C8A96E' }}>carrega esse peso por você?</em>
              </h2>
            </FadeIn>
          </div>

          {/* Pain cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {PAINS.map((pain, i) => (
              <FadeIn key={pain.number} delay={i * 0.1}>
                <div
                  style={{
                    backgroundColor: 'rgba(30,74,43,0.6)',
                    border: '1px solid rgba(200,169,110,0.12)',
                    borderRadius: '16px 4px 16px 4px',
                    padding: '1.75rem',
                    transition: 'border-color 0.3s ease, background-color 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(200,169,110,0.35)'
                    el.style.backgroundColor = 'rgba(30,74,43,0.75)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(200,169,110,0.12)'
                    el.style.backgroundColor = 'rgba(30,74,43,0.6)'
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '0.75rem',
                    color: '#C8A96E',
                    opacity: 0.9,
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}>{pain.number}</span>
                  <p style={{
                    fontFamily: 'DM Serif Text, serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                    color: '#FAF7F2',
                    opacity: 0.85,
                    lineHeight: 1.75,
                  }}>{pain.text}</p>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.5}>
              <p style={{
                fontFamily: 'DM Serif Text, serif',
                fontStyle: 'italic',
                color: '#FAF7F2',
                opacity: 0.55,
                fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                marginTop: '1rem',
                lineHeight: 1.7,
              }}>
                Antes de te contar o que descobri, quero que você me ouça.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn>
          <div style={{ marginTop: '4rem' }}>
            <RootsDivider opacity={0.3} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
