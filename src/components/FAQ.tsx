import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from './FadeIn'

const faqs = [
  {
    q: 'Já fiz terapia antes e não funcionou. Por que seria diferente?',
    a: 'Você não falhou na terapia. A terapia falhou em ir fundo o suficiente. O Código da Cura foi criado por quem precisou ir mais fundo do que qualquer método convencional alcançou. Aqui, não trabalhamos o sintoma. Trabalhamos a raiz que o alimenta.',
  },
  {
    q: 'Funciona online?',
    a: 'Sim. O atendimento é 100% online, com sessões por vídeo. A cura interior não depende de presença física. Depende de presença emocional, e essa acontece onde você se sentir segura.',
  },
  {
    q: 'Qual o investimento?',
    a: 'Cada processo é personalizado, então o investimento depende do formato que fizer sentido para você. Na conversa inicial, explico as opções com transparência. O que posso dizer é: a exaustão que você sente está consumindo muito mais do que o tempo e o valor que a cura levaria.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'O processo não tem prazo artificial. A maioria das mulheres percebe mudanças significativas entre 3 e 6 meses. Mas o ritmo é seu. Não apresso, não forço, não encurto o que precisa de tempo.',
  },
  {
    q: 'E se o problema for a outra pessoa?',
    a: 'Se o problema fosse só a outra pessoa, você não estaria aqui buscando ajuda. Isso não significa que a outra pessoa não contribua para a dor. Significa que existe algo em você que precisa ser cuidado primeiro. Quando a sua ferida cicatriza, a relação com o outro muda, porque você muda.',
  },
  {
    q: 'Vou ficar inconsciente durante a hipnose? Vou perder o controle?',
    a: 'Não. A hipnose clínica terapêutica é um estado de foco e relaxamento profundo. Você mantém a consciência o tempo todo, lembra de tudo que aconteceu e nenhuma etapa acontece sem o seu consentimento. Não é o que você viu na TV.',
  },
]

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(30,74,43,0.15)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: '0.95rem',
            color: '#1E4A2B',
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#C8A96E',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.35s ease',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 5L7 10L12 5" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.85,
                color: '#4a4a4a',
                paddingBottom: '1.5rem',
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section
      style={{
        backgroundColor: '#FAF7F2',
        padding: '7rem 2rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="eyebrow-ultra" style={{ color: '#1E4A2B', marginBottom: '1rem' }}>
              Tire suas dúvidas
            </p>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                color: '#1E4A2B',
                lineHeight: 1.25,
              }}
            >
              Perguntas sobre o processo
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
