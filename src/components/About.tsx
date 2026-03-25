import { useState } from 'react'
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const RootsSVGAbout = () => (
  <svg
    viewBox="0 0 300 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      userSelect: 'none',
      opacity: 0.15,
    }}
  >
    <path d="M150 20 Q130 50 110 75 Q90 100 70 115 Q50 130 30 135" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M150 20 Q170 50 190 75 Q210 100 230 115 Q250 130 270 135" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M150 20 Q140 45 125 65 Q110 85 100 100 Q90 112 85 125" stroke="#C8A96E" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
    <path d="M150 20 Q160 45 175 65 Q190 85 200 100 Q210 112 215 125" stroke="#C8A96E" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
    <path d="M150 20 Q148 60 145 85 Q142 105 140 130" stroke="#C8A96E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
  </svg>
)

export const About = () => {
  const [imgError, setImgError] = useState(false)

  return (
    <section style={{ backgroundColor: '#F0E8DA', position: 'relative', overflow: 'hidden' }}>
      <div className="container-ultra section-padding">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr minmax(280px, 420px)',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Text */}
          <div>
            <FadeIn delay={0}>
              <p className="eyebrow-ultra" style={{ marginBottom: '1.25rem', color: '#C8A96E' }}>ANTES DE AJUDAR ALGUÉM</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                color: '#1E4A2B',
                marginBottom: '1.25rem',
                lineHeight: 1.2,
              }}>
                Antes de ajudar alguém, precisei me salvar.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p style={{
                fontFamily: 'DM Serif Text, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                color: '#C8A96E',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}>
                "Fui rejeitada antes de nascer. Cresci achando que o problema era eu."
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.1vw, 0.9375rem)',
                  color: '#1C1C1C',
                  opacity: 0.75,
                  lineHeight: 1.85,
                }}>
                  Meu pai não queria que eu nascesse. Minha mãe queria — mas vivia sob o controle dele. Cresci sentindo isso no corpo antes de entender com a cabeça. Fui a menina que precisava ser invisível para não incomodar. A adulta que aprendeu a sorrir enquanto carregava um peso que ninguém via.
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.1vw, 0.9375rem)',
                  color: '#1C1C1C',
                  opacity: 0.75,
                  lineHeight: 1.85,
                }}>
                  Fiz terapia por anos. Cada terapeuta chegava até certo ponto e não passava. A dor voltava. A sensação de não ser bem-vinda continuava. Foi quando mergulhei na hipnose clínica e na reprogramação emocional que finalmente cheguei na raiz. Não no que eu sentia. Em por que eu sentia.
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.1vw, 0.9375rem)',
                  color: '#1C1C1C',
                  opacity: 0.75,
                  lineHeight: 1.85,
                }}>
                  Hoje, ajudo mulheres a fazer o mesmo caminho. Não porque aprendi em livros. Porque precisei percorrer cada passo dentro de mim primeiro.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{
                display: 'inline-flex',
                gap: '1rem',
                flexWrap: 'wrap',
                padding: '0.875rem 1.25rem',
                backgroundColor: 'rgba(30,74,43,0.08)',
                borderRadius: '8px',
                border: '1px solid rgba(200,169,110,0.2)',
                marginBottom: '2.5rem',
              }}>
                {['Hipnose Clínica', 'Terapia Cognitivo-Comportamental', 'Reprogramação Emocional'].map((cred) => (
                  <span key={cred} style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    color: '#1E4A2B',
                    opacity: 0.8,
                  }}>{cred}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p style={{
                fontFamily: 'DM Serif Text, serif',
                fontStyle: 'italic',
                color: '#1C1C1C',
                opacity: 0.55,
                fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                marginBottom: '3rem',
              }}>
                E foi por essa travessia que estruturei cada etapa do processo com cuidado.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <RootsDivider opacity={0.35} />
            </FadeIn>
          </div>

          {/* Right: Photo */}
          <FadeIn delay={0.2} direction="left">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '16px 4px 16px 4px',
                overflow: 'hidden',
                aspectRatio: '3/4',
              }}>
                {!imgError ? (
                  <img
                    src="/foto-cristina-sobre.jpg"
                    alt="Cristina Sobreira — Sobre"
                    className="client-photo"
                    onError={() => setImgError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.92,
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(30,74,43,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '4rem',
                      color: '#C8A96E',
                      opacity: 0.4,
                    }}>CS</span>
                  </div>
                )}
                <RootsSVGAbout />
              </div>

              {/* Decorative accent line */}
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                right: '-12px',
                width: '60%',
                height: '60%',
                border: '2px solid rgba(200,169,110,0.25)',
                borderRadius: '0 0 16px 0',
                pointerEvents: 'none',
                borderTop: 'none',
                borderLeft: 'none',
              }} />
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
