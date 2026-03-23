import FadeIn from './FadeIn'

const pillars = [
  {
    num: '1',
    title: 'Ir na Raiz, não na folha.',
    body: 'A maioria das terapias trabalha o sintoma: a ansiedade, a tristeza, o comportamento. O Código da Cura trabalha a causa. A ferida original que programou você para funcionar em modo de sobrevivência. Sem chegar lá, o alívio é temporário.',
  },
  {
    num: '2',
    title: 'A Mão Estendida.',
    body: 'Você não precisa fazer isso sozinha. Estou presente em cada etapa, respeitando o seu tempo. Não forço, não apresso, não julgo. Entro quando você abre a porta.',
  },
  {
    num: '3',
    title: 'Autorresponsabilidade.',
    body: 'A cura não acontece sem a sua participação ativa. Eu abro o caminho. Você decide caminhar. Ninguém pode curar uma ferida que a pessoa não está disposta a olhar.',
  },
]

export default function Method() {
  return (
    <section
      id="metodo"
      style={{
        backgroundColor: '#E8EDE6',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p className="eyebrow-ultra" style={{ color: '#1E4A2B', marginBottom: '1rem' }}>
              Por dentro do processo
            </p>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
                color: '#1E4A2B',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              O Código da Cura
            </h2>
            <p
              style={{
                fontFamily: '"DM Serif Text", serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#3a3a3a',
                maxWidth: '580px',
                margin: '0 auto 1rem',
                lineHeight: 1.7,
              }}
            >
              Por que nada do que você tentou funcionou de verdade.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: '#3a3a3a',
              maxWidth: '680px',
              margin: '0 auto 4rem',
              textAlign: 'center',
            }}
          >
            Criei O Código da Cura porque precisei ir mais fundo do que qualquer método
            convencional me levou. Terapia de conversa não chegava na raiz. Medicação
            silenciava, mas não curava. O que eu descobri é que a ferida que governa tudo
            começa antes da memória consciente.
          </p>
        </FadeIn>

        {/* 3 pilares */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}
        >
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.num} delay={i * 0.15}>
              <div
                style={{
                  position: 'relative',
                  padding: '2.5rem 2rem 2rem',
                  backgroundColor: '#FAF7F2',
                  borderLeft: '3px solid #C8A96E',
                  overflow: 'hidden',
                }}
              >
                {/* Numeração gigante decorativa */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    right: '1rem',
                    fontFamily: '"DM Serif Display", serif',
                    fontStyle: 'italic',
                    fontSize: '6rem',
                    lineHeight: 1,
                    color: '#C8A96E',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {pillar.num}
                </span>

                <h3
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: '1.3rem',
                    color: '#1E4A2B',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    color: '#4a4a4a',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Nao prometo */}
        <FadeIn delay={0.1}>
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.85,
                color: '#4a4a4a',
              }}
            >
              Não prometo que vai ser fácil. Não prometo resultado sem comprometimento. Não
              prometo cura em sessões contadas. O que prometo é que, se você estiver disposta
              a olhar para o que dói, eu sei o caminho até a raiz.
            </p>
          </div>
        </FadeIn>

        {/* Box destaque */}
        <FadeIn delay={0.2}>
          <div
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: '2.5rem 3rem',
              backgroundColor: '#1E4A2B',
              borderLeft: '4px solid #C8A96E',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: '"DM Serif Text", serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: 1.75,
                color: '#FAF7F2',
              }}
            >
              "A dor de não mexer é a que você já carrega todos os dias. A dor do processo
              é temporária e tem destino: a liberdade."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
