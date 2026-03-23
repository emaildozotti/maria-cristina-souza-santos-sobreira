import FadeIn from './FadeIn'

const pains = [
  {
    numeral: 'I',
    text: 'Você dá conta de tudo. Do trabalho, dos filhos, do casamento, da casa. Todo mundo conta com você. E no fim do dia, quando tudo está em silêncio, o cansaço que vem não é do corpo. É da alma. Você tem medo de parar porque, se parar, tudo desaba.',
  },
  {
    numeral: 'II',
    text: 'Faz tempo que você não sabe mais quem é fora dos papéis que cumpre. Mãe, esposa, profissional, cuidadora. Você vive para os outros e, quando sobra um momento para si mesma, não sabe o que fazer com ele. Porque você esqueceu como é existir sem estar servindo alguém.',
  },
  {
    numeral: 'III',
    text: 'Existe algo mais antigo. Uma sensação que você talvez nunca tenha colocado em palavras: a de que você nunca foi bem-vinda de verdade. Como se, desde sempre, precisasse provar que merece estar aqui. Que merece ser amada. Que merece existir.',
  },
  {
    numeral: 'IV',
    text: 'Todo mundo acha que você é forte. E você mantém a máscara. Sorri quando quer chorar. Diz que está bem quando está se afogando por dentro. Porque se alguém souber a verdade, você perde o único valor que acredita ter: ser a pessoa que aguenta tudo.',
  },
]

export default function PainPoints() {
  return (
    <section
      style={{
        backgroundColor: '#1E4A2B',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(200,169,110,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Abertura Cristina 1a pessoa */}
        <FadeIn>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto 4rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: '"DM Serif Text", serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                lineHeight: 1.75,
                color: 'rgba(250,247,242,0.85)',
              }}
            >
              "Conheço esse peso. Por anos carreguei o meu enquanto fingia que estava bem.
              Sorria por fora, desabava por dentro. E achava que o problema era eu."
            </p>
          </div>
        </FadeIn>

        {/* 4 pain cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {pains.map((pain, i) => (
            <FadeIn key={pain.numeral} delay={i * 0.12}>
              <div
                style={{
                  position: 'relative',
                  padding: '2rem 1.75rem 2rem',
                  border: '1px solid rgba(200,169,110,0.18)',
                  backgroundColor: 'rgba(250,247,242,0.04)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {/* Numeral decorativo */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-0.75rem',
                    left: '1.5rem',
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: '4rem',
                    lineHeight: 1,
                    color: '#C8A96E',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {pain.numeral}
                </span>

                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    color: 'rgba(250,247,242,0.78)',
                    marginTop: '1.5rem',
                  }}
                >
                  {pain.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transição separada */}
        <FadeIn>
          <p
            style={{
              fontFamily: '"DM Serif Text", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.75,
              color: '#C8A96E',
              textAlign: 'center',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Antes de te contar o que descobri, quero que você me ouça.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
