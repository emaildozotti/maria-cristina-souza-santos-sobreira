import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'
import { RootsDivider } from './RootsDivider'

const WA_LINK = 'https://wa.me/5527981038931?text=Ol%C3%A1%2C%20Cristina!%20Vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20processo%20de%20Cura%20Interior.'

const STEPS = [
  {
    num: '1',
    title: 'Conversa inicial (gratuita, sem compromisso).',
    text: 'Você me conta o que está carregando. Eu te explico como o processo funciona. Sem julgamento, sem pressão. O objetivo é você entender se faz sentido para o que você está vivendo.',
  },
  {
    num: '2',
    title: 'Como as sessões funcionam.',
    text: 'Trabalhamos juntas em sessões individuais online. Cada encontro tem foco, direção e cuidado. Usamos hipnose clínica, TCC e reprogramação emocional de forma integrada — cada ferramenta no momento certo.',
  },
  {
    num: '3',
    title: 'O que o processo produz.',
    text: 'Você começa a identificar os padrões que repetem. A ferida original perde o poder de comandar suas reações. Você ganha acesso a uma versão sua que existia antes da dor. E aprende a ficar com ela.',
  },
]

const FAQ_HIPNOSE = [
  {
    q: 'Vou ficar inconsciente?',
    a: 'Não. Você permanece totalmente consciente durante todo o processo. A hipnose clínica é um estado de foco aprofundado — você ouve tudo, pode falar, pode encerrar quando quiser.',
  },
  {
    q: 'É o que eu vi na TV?',
    a: 'Não. A hipnose clínica não tem nada a ver com shows de entretenimento. Não faço você fazer coisas ridículas. Trabalho com o que está guardado na memória emocional para acessar e ressignificar.',
  },
  {
    q: 'Vou lembrar de tudo?',
    a: 'Sim. Você tem acesso a tudo que acontece durante a sessão. Inclusive pode se surpreender com o que emerge — coisas que estavam enterradas mas que sempre influenciaram sua vida.',
  },
]

export const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ backgroundColor: '#E8EDE6', position: 'relative' }}>
      <div className="container-ultra section-padding">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 5rem' }}>
          <FadeIn delay={0}>
            <p className="eyebrow-ultra" style={{ marginBottom: '1.25rem', color: '#C8A96E' }}>COMO FUNCIONA</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#1E4A2B',
            }}>
              Como é o processo
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '760px', margin: '0 auto 4rem' }}>
          {STEPS.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0,
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(200,169,110,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(30,74,43,0.06)',
                }}>
                  <span style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '1.25rem',
                    color: '#C8A96E',
                  }}>{step.num}</span>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                    color: '#1E4A2B',
                    marginBottom: '0.5rem',
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: '#1C1C1C',
                    opacity: 0.7,
                    lineHeight: 1.85,
                  }}>{step.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Hipnose desmistificação */}
        <FadeIn delay={0.2}>
          <div style={{
            backgroundColor: 'rgba(30,74,43,0.06)',
            border: '1px solid rgba(200,169,110,0.3)',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '760px',
            margin: '0 auto 4rem',
          }}>
            <p style={{
              fontFamily: 'DM Serif Display, serif',
              fontSize: '1rem',
              color: '#1E4A2B',
              marginBottom: '1.5rem',
            }}>Sobre a hipnose clínica:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {FAQ_HIPNOSE.map((item) => (
                <div key={item.q}>
                  <p style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: '0.9375rem',
                    color: '#1E4A2B',
                    marginBottom: '0.25rem',
                  }}>{item.q}</p>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#1C1C1C',
                    opacity: 0.65,
                    lineHeight: 1.8,
                  }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Quote box */}
        <FadeIn delay={0.25}>
          <div style={{
            borderLeft: '3px solid #C8A96E',
            paddingLeft: '1.5rem',
            maxWidth: '640px',
            margin: '0 auto 3rem',
          }}>
            <p style={{
              fontFamily: 'DM Serif Text, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
              color: '#1C1C1C',
              opacity: 0.8,
              lineHeight: 1.75,
            }}>
              "A dor de não mexer é a que você já carrega todos os dias. A dor do processo é temporária e tem destino: a liberdade."
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.a
              href="#testimonials"
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
              Ver o que outras mulheres viveram
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn>
          <RootsDivider opacity={0.35} />
        </FadeIn>
      </div>
    </section>
  )
}
