import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(30, 74, 43, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200, 169, 110, 0.2)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        <span
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontStyle: 'italic',
            fontSize: '1.25rem',
            color: '#C8A96E',
            letterSpacing: '0.02em',
          }}
        >
          Cristina Sobreira
        </span>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a
            href="#metodo"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C8A96E')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            O Método
          </a>
          <a
            href="#sobre"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C8A96E')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            Sobre
          </a>
          <a
            href="https://wa.me/5527981038931?text=Ol%C3%A1%20Cristina!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20processo%20de%20Cura%20Interior."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer-sm"
          >
            Conversa Inicial
          </a>
        </nav>
      </div>
    </header>
  )
}
