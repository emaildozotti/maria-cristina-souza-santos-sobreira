import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from './FadeIn'

const WA_LINK = 'https://wa.me/5527981038931?text=Ol%C3%A1%20Cristina!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20processo%20de%20Cura%20Interior.'

const testimonials = [
  {
    initials: 'M.R.',
    text: 'Passei 8 anos tomando remédio e achando que era isso pra sempre. Com a Cristina entendi que eu não tinha um problema químico: eu tinha uma ferida que nunca ninguém tinha me ajudado a ver de verdade. Em 4 meses do Código da Cura fui reduzindo com supervisão médica e hoje estou há 1 ano sem medicação. Não me reconheço mais na mulher que eu era.',
    attribution: '— M.R.',
  },
  {
    initials: 'A.P.',
    text: 'Eu achava que era fraca porque não conseguia largar um casamento que me destruía. A Cristina me fez enxergar que eu não estava presa por fraqueza: estava presa porque nunca aprendi que eu merecia espaço. Quando entendi a raiz disso, tudo mudou. Hoje me reconheço quando olho no espelho, coisa que não acontecia há anos.',
    attribution: '— A.P.',
  },
  {
    initials: 'C.S.',
    text: 'A minha vida toda foi em torno de agradar as pessoas e nunca ser suficiente pra mim mesma. Vim de uma família onde nunca me senti bem-vinda de verdade. A Cristina foi a primeira terapeuta que foi fundo nessa raiz: não ficou só na superfície dos sintomas. Hoje consigo me colocar em primeiro lugar sem sentir culpa. Isso para mim vale mais do que qualquer coisa.',
    attribution: '— C.S.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [paused])

  const prev = () => {
    setPaused(true)
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setPaused(true)
    setCurrent(c => (c + 1) % testimonials.length)
  }

  return (
    <section
      id="depoimentos"
      style={{
        backgroundColor: '#F0E8DA',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="eyebrow-ultra" style={{ color: '#1E4A2B', marginBottom: '1rem' }}>
              Resultados reais
            </p>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                color: '#1E4A2B',
                lineHeight: 1.25,
              }}
            >
              Mulheres que saíram do modo sobrevivência
            </h2>
          </div>
        </FadeIn>

        {/* Carrossel crossfade */}
        <div
          style={{ position: 'relative', minHeight: '320px' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Aspa decorativa */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              fontFamily: '"DM Serif Display", serif',
              fontSize: '8rem',
              lineHeight: 1,
              color: '#C8A96E',
              opacity: 0.2,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            "
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{ textAlign: 'center', padding: '3rem 1.5rem 0' }}
            >
              <p
                style={{
                  fontFamily: '"DM Serif Text", serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                  lineHeight: 1.8,
                  color: '#3a3a3a',
                  marginBottom: '1.75rem',
                }}
              >
                "{testimonials[current].text}"
              </p>
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C8A96E',
                }}
              >
                {testimonials[current].attribution}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              marginTop: '2.5rem',
            }}
          >
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              style={{
                background: 'none',
                border: '1.5px solid rgba(200,169,110,0.4)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#C8A96E',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#C8A96E')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)')}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 2L4 7L9 12" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPaused(true); setCurrent(i) }}
                  aria-label={`Depoimento ${i + 1}`}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: i === current ? '#C8A96E' : 'rgba(200,169,110,0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              style={{
                background: 'none',
                border: '1.5px solid rgba(200,169,110,0.4)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#C8A96E',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#C8A96E')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,169,110,0.4)')}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2L10 7L5 12" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer"
            >
              Restam dúvidas?
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
