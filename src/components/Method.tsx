import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const PILLARS = [
  {
    numeral: 'I',
    title: 'Ir na Raiz, não na folha.',
    text: 'A maioria das terapias trabalha o sintoma: a ansiedade, a tristeza, o comportamento. O Código da Cura trabalha a causa. A ferida original que programou você para funcionar em modo de sobrevivência. Sem chegar lá, o alívio é temporário.',
    align: 'left',
  },
  {
    numeral: 'II',
    title: 'A Mão Estendida.',
    text: 'Você não precisa fazer isso sozinha. Estou presente em cada etapa, respeitando o seu tempo. Não forço, não apresso, não julgo. Entro quando você abre a porta.',
    align: 'right',
  },
  {
    numeral: 'III',
    title: 'Autorresponsabilidade.',
    text: 'A cura não acontece sem a sua participação ativa. Eu abro o caminho. Você decide caminhar. Ninguém pode curar uma ferida que a pessoa não está disposta a olhar.',
    align: 'left',
  },
]

export const Method = () => {
  return (
    <section style={{ backgroundColor: '#E8EDE6', position: 'relative', overflow: 'hidden' }}>
      <div className="container-ultra section-padding">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 5rem' }}>
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
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: 'DM Serif Text, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
              color: '#1C1C1C',
              opacity: 0.7,
              lineHeight: 1.8,
            }}>
              Criei O Código da Cura porque precisei ir mais fundo do que qualquer método convencional me levou. Terapia de conversa não chegava na raiz. O que eu descobri é que a ferida que governa tudo começa antes da memória consciente.
            </p>
          </FadeIn>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.numeral} delay={i * 0.12} direction={pillar.align === 'right' ? 'left' : 'right'}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: pillar.align === 'right' ? '1fr auto' : 'auto 1fr',
                gap: '2rem',
                alignItems: 'center',
                maxWidth: '860px',
                margin: pillar.align === 'right' ? '0 0 0 auto' : '0 auto 0 0',
              }}>
                {pillar.align === 'left' && (
                  <div style={{
                    backgroundColor: '#1E4A2B',
                    borderRadius: '16px 4px 16px 4px',
                    padding: '2.5rem',
                    minWidth: '280px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '8rem',
                      color: '#FAF7F2',
                      opacity: 0.08,
                      position: 'absolute',
                      top: '-1rem',
                      right: '1rem',
                      lineHeight: 1,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}>{pillar.numeral}</span>
                    <h3 style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.375rem)',
                      color: '#FAF7F2',
                      marginBottom: '0.75rem',
                      position: 'relative',
                      zIndex: 1,
                    }}>{pillar.title}</h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9375rem',
                      color: '#FAF7F2',
                      opacity: 0.75,
                      lineHeight: 1.75,
                      position: 'relative',
                      zIndex: 1,
                    }}>{pillar.text}</p>
                  </div>
                )}

                {pillar.align === 'right' && (
                  <div style={{ flex: 1 }}>
                    <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(200,169,110,0.4) 0%, transparent 100%)', marginBottom: '1.5rem' }} />
                    <p style={{
                      fontFamily: 'DM Serif Text, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                      color: '#1C1C1C',
                      opacity: 0.65,
                      lineHeight: 1.8,
                    }}>"{pillar.text}"</p>
                  </div>
                )}

                {pillar.align === 'right' && (
                  <div style={{
                    backgroundColor: '#1E4A2B',
                    borderRadius: '4px 16px 4px 16px',
                    padding: '2.5rem',
                    minWidth: '280px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '8rem',
                      color: '#FAF7F2',
                      opacity: 0.08,
                      position: 'absolute',
                      top: '-1rem',
                      left: '1rem',
                      lineHeight: 1,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}>{pillar.numeral}</span>
                    <h3 style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.375rem)',
                      color: '#FAF7F2',
                      marginBottom: '0.75rem',
                      position: 'relative',
                      zIndex: 1,
                    }}>{pillar.title}</h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9375rem',
                      color: '#FAF7F2',
                      opacity: 0.75,
                      lineHeight: 1.75,
                      position: 'relative',
                      zIndex: 1,
                    }}>{pillar.text}</p>
                  </div>
                )}

                {pillar.align === 'left' && (
                  <div style={{ flex: 1 }}>
                    <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(200,169,110,0.4) 100%)', marginBottom: '1.5rem' }} />
                    <p style={{
                      fontFamily: 'DM Serif Text, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                      color: '#1C1C1C',
                      opacity: 0.65,
                      lineHeight: 1.8,
                    }}>"{pillar.text}"</p>
                  </div>
                )}
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
            }}>O que eu não prometo:</p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              color: '#1C1C1C',
              opacity: 0.7,
              lineHeight: 1.85,
            }}>
              Não prometo que será fácil. Não prometo que será rápido. Prometo que será real. Que vamos chegar onde importa. E que você não vai fazer isso sozinha.
            </p>
          </div>
        </FadeIn>

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
    </section>
  )
}
