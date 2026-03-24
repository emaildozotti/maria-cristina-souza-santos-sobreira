import FadeIn from './FadeIn'

export default function VideoSection() {
  return (
    <section
      style={{
        backgroundColor: '#1E4A2B',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Separator line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)',
        }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <FadeIn>
          <p className="eyebrow-ultra" style={{ marginBottom: '1rem' }}>
            Para você que ainda não me conhece
          </p>
          <h2
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: '#FAF7F2',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            O que nenhuma terapia anterior tocou
          </h2>
          <p
            style={{
              fontFamily: '"DM Serif Text", serif',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'rgba(250,247,242,0.75)',
              marginBottom: '2.5rem',
              maxWidth: '560px',
              margin: '0 auto 2.5rem',
            }}
          >
            Nos próximos minutos, vou te contar como descobri que a raiz do que eu carregava
            veio de antes de eu nascer.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Video container 9:16 */}
          <div
            style={{
              margin: '0 auto 2.5rem',
              width: '100%',
              maxWidth: '300px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                paddingBottom: '177.78%', /* 16/9 */
                height: 0,
                overflow: 'hidden',
                backgroundColor: '#0f2a17',
                outline: '2px solid rgba(200,169,110,0.45)',
                outlineOffset: '6px',
              }}
            >
              {/* YouTube iframe — URL PENDENTE */}
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                src="https://www.youtube.com/embed/AddLHCszm5k"
                title="Cristina Sobreira: Cura Interior de Raiz"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Placeholder visível enquanto URL não é substituída */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0f2a17',
                  gap: '1rem',
                  pointerEvents: 'none',
                }}
              >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                  <circle cx="28" cy="28" r="27" stroke="#C8A96E" strokeWidth="1.5" opacity="0.5" />
                  <polygon points="22,18 42,28 22,38" fill="#C8A96E" opacity="0.7" />
                </svg>
                <span
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.7rem',
                    color: 'rgba(200,169,110,0.5)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Vídeo em breve
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <button
            onClick={() => document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-shimmer-light"
          >
            O que o processo faz diferente
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
