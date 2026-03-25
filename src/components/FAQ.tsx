import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from './FadeIn'

const FAQS = [
  {
    q: 'Já fiz terapia antes e não funcionou. Por que seria diferente?',
    a: 'Porque a maioria das terapias trabalha o que você pensa e sente hoje. O Código da Cura vai onde essas terapias não chegaram: a ferida original, gravada antes da memória consciente. Não é uma terapia de conversa. É um trabalho de reprogramação emocional profunda.',
  },
  {
    q: 'Funciona online?',
    a: 'Sim. As sessões são 100% online e funcionam com a mesma profundidade do presencial. O que precisamos é de um espaço tranquilo onde você possa se sentir segura. A conexão acontece independente da distância.',
  },
  {
    q: 'Qual o investimento?',
    a: 'Trabalho principalmente com pacotes de acompanhamento terapêutico — um processo completo em direção à ressignificação. O investimento é conversado na nossa primeira sessão, após entender o que você precisa. Temos opções de parcelamento.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'Depende da profundidade do que vamos trabalhar. A maioria das mulheres começa a sentir mudanças reais a partir da terceira ou quarta sessão. Um processo completo costuma ter entre 8 e 16 encontros, com encontros semanais ou quinzenais.',
  },
  {
    q: 'E se o problema for a outra pessoa?',
    a: 'O problema pode estar na outra pessoa. Mas o sofrimento está em você. E é só o seu sofrimento que você tem poder de transformar. Trabalhar a sua ferida não é desculpar o outro. É parar de deixar que o passado dirija o seu presente.',
  },
  {
    q: 'Vou ficar inconsciente durante a hipnose?',
    a: 'Não. Você permanece consciente, ouvindo tudo, podendo falar a qualquer momento. A hipnose clínica é um estado de relaxamento profundo com foco aumentado — semelhante ao que acontece quando você está totalmente absorta em um livro ou filme.',
  },
]

const FAQItem = ({ item, index }: { item: typeof FAQS[0]; index: number }) => {
  const [open, setOpen] = useState(false)

  return (
    <FadeIn delay={index * 0.06}>
      <div style={{
        borderBottom: '1px solid rgba(200,169,110,0.2)',
        overflow: 'hidden',
      }}>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            padding: '1.5rem 0',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'background-color 0.2s ease',
            backgroundColor: open ? 'transparent' : 'transparent',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(30,74,43,0.04)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
          }}
        >
          <span style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(0.9375rem, 1.3vw, 1.125rem)',
            color: '#1E4A2B',
            lineHeight: 1.35,
          }}>{item.q}</span>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#C8A96E',
              opacity: 0.7,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                color: '#1C1C1C',
                opacity: 0.7,
                lineHeight: 1.85,
                paddingBottom: '1.5rem',
              }}>{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}

export const FAQ = () => {
  return (
    <section style={{ backgroundColor: '#F0E8DA', position: 'relative' }}>
      <div className="container-ultra section-padding">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}>
          <FadeIn delay={0}>
            <p className="eyebrow-ultra" style={{ marginBottom: '1.25rem', color: '#C8A96E' }}>PERGUNTAS SOBRE O PROCESSO</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#1E4A2B',
            }}>
              Perguntas sobre o processo
            </h2>
          </FadeIn>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
