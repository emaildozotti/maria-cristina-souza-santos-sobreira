import { useState } from 'react'
import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const WA_LINK = 'https://wa.me/5527981038931?text=Ol%C3%A1%2C%20Cristina!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20processo%20de%20Cura%20Interior.'

const RootsSVG = () => (
  <svg
    viewBox="0 0 300 100"
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
      opacity: 0.25
    }}
  >
    <path d="M150 10 Q130 35 110 55 Q90 75 70 85 Q50 95 30 92" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M150 10 Q170 35 190 55 Q210 75 230 85 Q250 95 270 92" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M150 10 Q142 30 130 48 Q118 65 108 78" stroke="#C8A96E" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
    <path d="M150 10 Q158 30 170 48 Q182 65 192 78" stroke="#C8A96E" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
  </svg>
)

export const Hero = () => {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      className="diagonal-lines"
      style={{
        backgroundColor: '#1E4A2B',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Aurora blobs */}
      <div
        className="blur-orb"
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '55%',
          height: '55%',
          backgroundColor: '#2D6B3E4D',
          borderRadius: '50%',
          animation: 'aurora-1 18s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        className="blur-orb"
        style={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: '45%',
          height: '50%',
          backgroundColor: '#C8A96E33',
          borderRadius: '50%',
          animation: 'aurora-2 22s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        className="blur-orb"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '10%',
          width: '50%',
          height: '45%',
          backgroundColor: '#1E4A2B66',
          borderRadius: '50%',
          animation: 'aurora-3 26s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      <div className="container-ultra" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(280px, 55%, 640px) 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: Text */}
          <div>
            <FadeIn delay={0}>
              <p className="eyebrow-ultra" style={{ marginBottom: '1.5rem' }}>NO LIMITE</p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                color: '#FAF7F2',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}>
                Você cuida de todos.{' '}
                <em style={{ color: '#C8A96E', fontStyle: 'italic' }}>
                  Quem cuida da ferida que você carrega há anos?
                </em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p style={{
                fontFamily: 'DM Serif Text, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#FAF7F2',
                opacity: 0.75,
                marginBottom: '2.5rem',
                lineHeight: 1.7,
              }}>
                A raiz do que você sente não está no presente. E pode ser alcançada.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ marginBottom: '2rem' }}>
                <RootsDivider opacity={0.35} />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer"
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: '#C8A96E',
                    color: '#1E4A2B',
                    padding: '0.875rem 2rem',
                    borderRadius: '9999px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                  }}
                >
                  Quero cuidar de mim
                </motion.a>

                <motion.a
                  href="#how-it-works"
                  className="btn-shimmer-light"
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.875rem 2rem',
                    borderRadius: '9999px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Entender o processo
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Right: Photo */}
          <FadeIn delay={0.25} direction="left">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              {/* L-frame container */}
              <div style={{
                position: 'relative',
                padding: '8px 0 0 8px',
              }}>
                {/* L-frame (inverted) */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: '12px',
                  bottom: '12px',
                  borderLeft: '2px solid rgba(200,169,110,0.5)',
                  borderTop: '2px solid rgba(200,169,110,0.5)',
                  borderRadius: '16px 4px 0 0',
                  pointerEvents: 'none',
                  zIndex: 2,
                }} />

                {/* Photo container */}
                <div style={{
                  position: 'relative',
                  borderRadius: '16px 4px 16px 4px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  width: 'clamp(220px, 28vw, 380px)',
                  borderLeft: '2px solid rgba(200,169,110,0.5)',
                  borderBottom: '2px solid rgba(200,169,110,0.5)',
                }}>
                  {!imgError ? (
                    <img
                      src="/foto-cristina.jpg"
                      alt="Cristina Sobreira"
                      className="client-photo"
                      onError={() => setImgError(true)}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(30,74,43,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                      position: 'relative',
                    }}>
                      <span style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontSize: '4rem',
                        color: '#C8A96E',
                        opacity: 0.6,
                      }}>CS</span>
                    </div>
                  )}
                  <div className="image-overlay" style={{ zIndex: 2 }} />
                  <RootsSVG />
                </div>
              </div>

              {/* Credential badge */}
              <div style={{
                backgroundColor: 'rgba(30,74,43,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(200,169,110,0.2)',
                borderRadius: '9999px',
                padding: '0.5rem 1.25rem',
                textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C8A96E',
                  opacity: 0.9,
                }}>
                  Hipnose Clínica | TCC | Cura Interior
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
