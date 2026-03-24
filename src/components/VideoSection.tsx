import { useState } from 'react'
import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const VIDEO_ID = 'AddLHCszm5k'

export const VideoSection = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      className="crosshatch-dark"
      style={{
        backgroundColor: '#1C1C1C',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-ultra section-padding">
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn delay={0}>
            <p className="eyebrow-ultra" style={{ marginBottom: '1.5rem' }}>ASSISTA ANTES DE DECIDIR</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p style={{
              fontFamily: 'DM Serif Text, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#FAF7F2',
              opacity: 0.75,
              lineHeight: 1.75,
              marginBottom: '2.5rem',
            }}>
              Gravei esse vídeo para você que já tentou de tudo e ainda sente que algo falta. Não vou te prometer milagre. Vou te mostrar como cheguei onde as terapias anteriores não chegaram. Assista com calma.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{
              position: 'relative',
              maxWidth: '400px',
              margin: '0 auto 2.5rem',
              border: '1px solid rgba(200,169,110,0.2)',
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: '9/16',
            }}>
              {!playing ? (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, #1E4A2B 0%, #1C1C1C 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                  onClick={() => setPlaying(true)}
                >
                  <span style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '3rem',
                    color: '#C8A96E',
                    opacity: 0.4,
                    marginBottom: '1.5rem',
                    display: 'block',
                  }}>CS</span>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: '#C8A96E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 40px rgba(200,169,110,0.25)',
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5L19 12L8 19V5Z" fill="#1E4A2B"/>
                    </svg>
                  </motion.div>

                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    color: '#FAF7F2',
                    opacity: 0.5,
                    marginTop: '1rem',
                    letterSpacing: '0.08em',
                  }}>ASSISTIR AGORA</p>
                </div>
              ) : null}

              <iframe
                src={playing ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0` : `https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
                title="Cristina Sobreira — O Código da Cura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  zIndex: 1,
                }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p style={{
              fontFamily: 'DM Serif Text, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
              color: '#FAF7F2',
              opacity: 0.6,
              lineHeight: 1.7,
              marginBottom: '3rem',
            }}>
              O que eu acabei de explicar tem um nome e tem uma lógica. Deixa eu te mostrar como funciona de verdade.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <RootsDivider opacity={0.25} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
