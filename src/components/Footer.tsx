import FadeIn from './FadeIn'

const WA_LINK = 'https://wa.me/5527981038931?text=Ol%C3%A1%20Cristina!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20processo%20de%20Cura%20Interior.'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1E4A2B',
        padding: '7rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Aurora sutil */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(200,169,110,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
        <FadeIn>
          {/* Headline */}
          <h2
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              color: '#FAF7F2',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
            }}
          >
            Você cuidou de todos. Agora é a sua vez de ser cuidada.
          </h2>

          <p
            style={{
              fontFamily: '"DM Serif Text", serif',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(250,247,242,0.75)',
              marginBottom: '2.5rem',
            }}
          >
            A conversa inicial é gratuita e sem compromisso. Só precisa estar disposta a ser
            ouvida.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer"
          >
            Quero minha conversa inicial
          </a>
        </FadeIn>

        {/* Divisor */}
        <div
          aria-hidden="true"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.25), transparent)',
            margin: '5rem 0 3rem',
          }}
        />

        <FadeIn delay={0.1}>
          {/* Nome centralizado italic */}
          <p
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontStyle: 'italic',
              fontSize: '1.5rem',
              color: 'rgba(200,169,110,0.7)',
              marginBottom: '1.5rem',
            }}
          >
            Cristina Sobreira
          </p>

          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              color: 'rgba(250,247,242,0.35)',
            }}
          >
            © 2026 Cristina Sobreira. Todos os direitos reservados.
          </p>
        </FadeIn>
      </div>
    </footer>
  )
}
