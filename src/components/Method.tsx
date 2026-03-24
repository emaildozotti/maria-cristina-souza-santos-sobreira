// DECISÃO CRIATIVA: 3 cards horizontais — limpo, arquitetural, sem duplicação.
// Numerais romanos em dourado opacity 0.12 criam profundidade sem poluir.
// Background E8EDE6 (névoa de raiz) contrasta com cards verde floresta escuro.
// Linha dourada no topo de cada card introduz o accent antes do numeral.
// Layout responsivo: 3 colunas desktop → stack mobile.
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const PILLARS = [
  {
    numeral: 'I',
    title: 'Ir na Raiz, não na folha.',
    text: 'A maioria das terapias trabalha o sintoma: a ansiedade, a tristeza, o comportamento. O Código da Cura trabalha a causa. A ferida original que programou você para funcionar em modo de sobrevivência. Sem chegar lá, o alívio é temporário.',
  },
  {
    numeral: 'II',
    title: 'A Mão Estendida.',
    text: 'Você não precisa fazer isso sozinha. Estou presente em cada etapa, respeitando o seu tempo. Não forço, não apresso, não julgo. Entro quando você abre a porta.',
  },
  {
    numeral: 'III',
    title: 'Autorresponsabilidade.',
    text: 'A cura não acontece sem a sua participação ativa. Eu abro o caminho. Você decide caminhar. Ninguém pode curar uma ferida que a pessoa não está disposta a olhar.',
  },
]

export const Method = () => {
  return (
    <section style={{ backgroundColor: '#E8EDE6', position: 'relative', overflow: 'hidden' }}>
      <div className="container-ultra section-padding">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}>
          <FadeIn delay={0}>
            <p className="eyebrow-ultra" style={{ marginBottom: '1.25rem', color: '#C8A96E' }}>O MÉTODO</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#1E4A2B',
              marginBottom: '1.75rem',
            }}>
              O Código da Cura
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <RootsDivider opacity={0.45} />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: 'DM Serif Text, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
              color: '#1C1C1C',
              opacity: 0.7,
              lineHeight: 1.8,
              marginTop: '1.75rem',
            }}>
              Criei O Código da Cura porque precisei ir mais fundo do que qualquer método
              convencional me levou. Terapia de conversa não chegava na raiz. O que eu descobri
              é que a ferida que governa tudo começa antes da memória consciente.
            </p>
          </FadeIn>
        </div>

        {/* 3 cards horizontais */}
        <div
          className="method-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.numeral} delay={0.1 + i * 0.12} direction="up">
              <div
                style={{
                  backgroundColor: '#1E4A2B',
                  borderRadius: i === 1 ? '4px 16px 4px 16px' : '16px 4px 16px 4px',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Linha dourada no topo */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '2rem',
                  right: '2rem',
                  height: '2px',
                  background: 'linear-gradient(90deg, #C8A96E 0%, transparent 100%)',
                  opacity: 0.6,
                }} />

                {/* Numeral decorativo */}
                <span style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  right: '1rem',
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '9rem',
                  color: '#C8A96E',
                  opacity: 0.1,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}>
                  {pillar.numeral}
                </span>

                {/* Numeral badge */}
                <span style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '1rem',
                  color: '#C8A96E',
                  opacity: 0.85,
                  letterSpacing: '0.05em',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {pillar.numeral}
                </span>

                {/* Título */}
                <h3 style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
                  color: '#FAF7F2',
                  lineHeight: 1.25,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {pillar.title}
                </h3>

                {/* Divisor interno */}
                <div style={{
                  height: '1px',
                  background: 'rgba(200,169,110,0.2)',
                  position: 'relative',
                  zIndex: 1,
                }} />

                {/* Corpo */}
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#FAF7F2',
                  opacity: 0.72,
                  lineHeight: 1.8,
                  position: 'relative',
                  zIndex: 1,
                  flex: 1,
                }}>
                  {pillar.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Não prometo box */}
        <FadeIn delay={0.2}>
          <div style={{
            borderLeft: '3px solid #C8A96E',
            backgroundColor: 'rgba(30,74,43,0.06)',
            padding: '1.75rem 2rem',
            borderRadius: '0 8px 8px 0',
            maxWidth: '720px',
            margin: '0 auto 3rem',
          }}>
            <p style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1rem',
              color: '#1E4A2B',
              marginBottom: '0.75rem',
            }}>
              O que eu não prometo:
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              color: '#1C1C1C',
              opacity: 0.7,
              lineHeight: 1.85,
            }}>
              Não prometo que será fácil. Não prometo resultado sem comprometimento.
              Não prometo cura em sessões contadas. O que prometo é que, se você estiver
              disposta a olhar para o que dói, eu sei o caminho até a raiz.
            </p>
          </div>
        </FadeIn>

        {/* Transition pull */}
        <FadeIn delay={0.3}>
          <p style={{
            fontFamily: 'DM Serif Text, serif',
            fontStyle: 'italic',
            textAlign: 'center',
            color: '#1C1C1C',
            opacity: 0.55,
            fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
            marginBottom: '3rem',
          }}>
            Deixa eu te contar de onde veio tudo isso.
          </p>
        </FadeIn>

        <FadeIn>
          <RootsDivider opacity={0.35} />
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .method-cards {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .method-cards {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .method-cards > *:last-child {
            grid-column: 1 / -1;
            max-width: calc(50% - 0.75rem);
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}
