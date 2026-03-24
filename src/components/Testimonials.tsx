import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from './FadeIn'

const TESTIMONIALS = [
  {
    name: 'Fernanda R., 42, Vitória',
    result: '15 anos em terapia, finalmente chegou na origem',
    highlight: 'foi por que eu sentia',
    text: 'Passei 15 anos em terapia. Melhorava, depois voltava ao mesmo padrão. Com a Cristina, pela primeira vez alguém me levou até a origem. Não foi o que eu sentia que mudou. Foi por que eu sentia. Hoje consigo existir sem precisar provar nada para ninguém.',
  },
  {
    name: 'Juliana M., 38, Vila Velha',
    result: 'Chorava escondida, hoje se sente cuidada de verdade',
    highlight: 'ferida aberta que ninguém tinha olhado',
    text: 'Eu tinha vergonha de admitir que, mesmo com a vida funcionando, eu chorava escondida no banheiro. A Cristina não me julgou. Me mostrou que aquela dor não era fraqueza. Era uma ferida aberta que ninguém tinha olhado. O processo foi intenso, mas pela primeira vez eu me senti cuidada de verdade.',
  },
  {
    name: 'Patrícia S., 45, Vitória',
    result: 'Tinha medo da hipnose. Voltou a sentir sem medo',
    highlight: 'Ganhei acesso a coisas que eu carregava sem saber',
    text: 'Tinha medo da hipnose. Achava que ia perder o controle. Não perdi nada. Ganhei acesso a coisas que eu carregava sem saber. Em três meses, parei de funcionar no automático. Voltei a sentir. E dessa vez, sem medo.',
  },
]

function highlightText(text: string, highlight: string) {
  if (!highlight) return <>{text}</>
  const idx = text.indexOf(highlight)
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <span style={{ color: '#C8A96E', fontWeight: 700 }}>{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  )
}

export const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, current])

  return (
    <section
      id="testimonials"
      className="diagonal-lines"
      style={{
        backgroundColor: '#1E4A2B',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-ultra section-padding">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <FadeIn delay={0}>
            <p className="eyebrow-ultra" style={{ marginBottom: '1.25rem' }}>O QUE DIZEM AS MULHERES</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
              color: '#FAF7F2',
              lineHeight: 1.2,
            }}>
              Mulheres que saíram do{' '}
              <em style={{ color: '#C8A96E' }}>modo sobrevivência</em>
            </h2>
          </FadeIn>
        </div>

        <div
          style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', minHeight: '340px' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Aspa gigante */}
          <div style={{
            position: 'absolute',
            top: '-1.5rem',
            left: '0',
            fontFamily: 'DM Serif Display, serif',
            fontSize: '10rem',
            color: '#FAF7F2',
            opacity: 0.06,
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}>"</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                backgroundColor: 'rgba(30,74,43,0.5)',
                border: '1px solid rgba(200,169,110,0.12)',
                borderRadius: '16px 4px 16px 4px',
                padding: '2.5rem',
              }}
            >
              {/* Result badge */}
              <div style={{
                display: 'inline-flex',
                backgroundColor: 'rgba(200,169,110,0.12)',
                border: '1px solid rgba(200,169,110,0.3)',
                borderRadius: '9999px',
                padding: '0.375rem 1rem',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#C8A96E',
                }}>
                  {TESTIMONIALS[current].result}
                </span>
              </div>

              <p style={{
                fontFamily: 'DM Serif Text, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
                color: '#FAF7F2',
                opacity: 0.9,
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}>
                {highlightText(TESTIMONIALS[current].text, TESTIMONIALS[current].highlight)}
              </p>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#C8A96E',
                opacity: 0.75,
                letterSpacing: '0.06em',
              }}>
                — {TESTIMONIALS[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Indicator bars */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
          }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  height: '3px',
                  width: i === current ? '28px' : '8px',
                  backgroundColor: i === current ? '#C8A96E' : 'rgba(255,255,255,0.3)',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background-color 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
