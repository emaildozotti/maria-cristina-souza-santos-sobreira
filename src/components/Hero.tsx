const WA_LINK = 'https://wa.me/5527981038931?text=Ol%C3%A1%20Cristina!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20processo%20de%20Cura%20Interior.'

function RootsSVG() {
  return (
    <svg
      viewBox="0 0 400 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 'auto',
        opacity: 0.55,
      }}
      aria-hidden="true"
    >
      <path
        d="M200 180 C200 140 180 110 160 80 C145 55 130 30 110 10"
        stroke="#C8A96E"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M200 180 C200 145 215 115 235 90 C250 70 265 45 280 20"
        stroke="#C8A96E"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M190 160 C175 140 155 130 130 125"
        stroke="#C8A96E"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M210 155 C225 138 248 130 270 128"
        stroke="#C8A96E"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M155 100 C140 95 120 98 100 90"
        stroke="#C8A96E"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M240 110 C258 105 275 108 295 100"
        stroke="#C8A96E"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M130 50 C118 42 108 35 95 38"
        stroke="#C8A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M265 58 C278 50 290 44 305 47"
        stroke="#C8A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: '#1E4A2B',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Aurora blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            width: '55%',
            height: '70%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #2D6B3E4D 0%, transparent 70%)',
            animation: 'aurora-drift-1 18s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '-10%',
            width: '50%',
            height: '65%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #C8A96E33 0%, transparent 70%)',
            animation: 'aurora-drift-2 22s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30%',
            right: '20%',
            width: '35%',
            height: '45%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #1E4A2B66 0%, transparent 70%)',
            animation: 'aurora-drift-3 15s ease-in-out infinite',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '7rem 2rem 5rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left: copy */}
        <div>
          <p className="eyebrow-ultra hero-animate-0" style={{ marginBottom: '1.5rem' }}>
            NO LIMITE
          </p>

          <h1
            className="hero-animate-1"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              lineHeight: 1.15,
              color: '#FAF7F2',
              marginBottom: '1.5rem',
            }}
          >
            Você cuida de todos.{' '}
            <span style={{ color: '#C8A96E' }}>
              Quem cuida da ferida que você carrega há anos?
            </span>
          </h1>

          <p
            className="hero-animate-2"
            style={{
              fontFamily: '"DM Serif Text", serif',
              fontStyle: 'italic',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: 'rgba(250,247,242,0.82)',
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}
          >
            A raiz do que você sente não está no presente. E pode ser alcançada.
          </p>

          <div className="hero-animate-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer"
            >
              Quero cuidar de mim
            </a>
          </div>
        </div>

        {/* Right: photo with frame */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            minHeight: '480px',
          }}
        >
          {/* Frame L invertido dourado */}
          <div
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '60%',
              height: '60%',
              borderTop: '2px solid #C8A96E',
              borderRight: '2px solid #C8A96E',
              zIndex: 2,
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />

          {/* Photo container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '420px',
              aspectRatio: '3/4',
              backgroundColor: '#2D6B3E',
              overflow: 'hidden',
            }}
          >
            <img
              src="/foto-cristina.jpg"
              alt="Cristina Sobreira"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
              onError={e => {
                const el = e.currentTarget
                el.style.display = 'none'
                const parent = el.parentElement
                if (parent) {
                  parent.style.display = 'flex'
                  parent.style.alignItems = 'center'
                  parent.style.justifyContent = 'center'
                  const placeholder = document.createElement('div')
                  placeholder.style.cssText = `
                    font-family: 'DM Serif Display', serif;
                    font-style: italic;
                    font-size: 1.5rem;
                    color: rgba(200,169,110,0.6);
                    text-align: center;
                    padding: 2rem;
                  `
                  placeholder.textContent = 'Cristina Sobreira'
                  parent.appendChild(placeholder)
                }
              }}
            />

            {/* SVG raízes na base da foto */}
            <RootsSVG />
          </div>

          {/* Frame canto inferior esquerdo */}
          <div
            style={{
              position: 'absolute',
              bottom: '-16px',
              left: '-16px',
              width: '40%',
              height: '40%',
              borderBottom: '2px solid #C8A96E',
              borderLeft: '2px solid #C8A96E',
              zIndex: 2,
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding-top: 5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
