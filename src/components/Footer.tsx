import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5527981038931?text=Ol%C3%A1%2C%20Cristina!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20processo%20de%20Cura%20Interior.'

export const Footer = () => {
  return (
    <footer
      className="diagonal-lines"
      style={{
        backgroundColor: '#1E4A2B',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora blobs */}
      <div
        className="blur-orb"
        style={{
          position: 'absolute',
          top: '10%',
          left: '30%',
          width: '40%',
          height: '50%',
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
          top: '20%',
          right: '10%',
          width: '35%',
          height: '40%',
          backgroundColor: '#C8A96E33',
          borderRadius: '50%',
          animation: 'aurora-2 22s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      {/* CTA section */}
      <div className="container-ultra" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '5rem', textAlign: 'center' }}>
        <FadeIn delay={0}>
          <p className="eyebrow-ultra" style={{ marginBottom: '1.5rem' }}>DAR O PRÓXIMO PASSO</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            color: '#FAF7F2',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
          }}>
            Você cuidou de todos. Agora é a sua vez de{' '}
            <em style={{ color: '#C8A96E' }}>ser cuidada.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: 'DM Serif Text, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
            color: '#FAF7F2',
            opacity: 0.7,
            lineHeight: 1.75,
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
          }}>
            A conversa inicial é gratuita e sem compromisso. Só precisa estar disposta a ser ouvida.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer"
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: '#C8A96E',
              color: '#1E4A2B',
              padding: '1rem 2.5rem',
              borderRadius: '9999px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              display: 'inline-block',
              border: 'none',
              marginBottom: '1.25rem',
            }}
          >
            Quero minha conversa inicial
          </motion.a>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            color: '#FAF7F2',
            opacity: 0.4,
            letterSpacing: '0.06em',
          }}>
            Conversa inicial gratuita · Sem compromisso · 100% online
          </p>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(200,169,110,0.15)',
        padding: '1.5rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <div className="container-ultra" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <span style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: '1rem',
            color: '#FAF7F2',
            opacity: 0.25,
          }}>Cristina Sobreira</span>

          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#C8A96E',
            opacity: 0.25,
          }}>CURA INTERIOR · HIPNOSE CLÍNICA</span>

          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            color: '#FAF7F2',
            opacity: 0.25,
          }}>[CRP]</span>
        </div>
      </div>
    </footer>
  )
}
