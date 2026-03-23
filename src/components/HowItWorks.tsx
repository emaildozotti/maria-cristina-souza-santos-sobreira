import FadeIn from './FadeIn'

const steps = [
  {
    num: '1',
    title: 'Conversa inicial (gratuita, sem compromisso).',
    body: 'Uma conversa para entender o que você está vivendo. Sem pressão, sem julgamento. Você fala, eu escuto. E juntas decidimos se o processo faz sentido para você.',
  },
  {
    num: '2',
    title: 'Como as sessões funcionam.',
    body: 'O acompanhamento é individualizado. Cada sessão integra ferramentas diferentes conforme a sua necessidade: escuta ativa, hipnose clínica, técnicas de TCC e reprogramação emocional. Não existe sessão genérica. O processo é desenhado para você.',
  },
  {
    num: '3',
    title: 'O que o processo produz.',
    body: 'Você para de funcionar em modo de sobrevivência. Reconecta com quem é fora dos papéis que cumpre. E a ferida que governava suas escolhas, suas relações e sua exaustão deixa de ter poder sobre você.',
  },
]

const hypnoFAQ = [
  {
    q: 'Vou ficar inconsciente?',
    a: 'Não. Você mantém o controle o tempo todo. Não há estado de inconsciência, não há apagão, não há nada que você não queira que aconteça.',
  },
  {
    q: 'É o que eu vi na TV?',
    a: 'Não. A hipnose clínica terapêutica não tem relação com o espetáculo. É um estado de foco profundo, como quando você está completamente absorta em algo e o mundo ao redor some por uns instantes.',
  },
  {
    q: 'Vou lembrar de tudo?',
    a: 'Sim. Você sai sabendo exatamente o que aconteceu. Sem surpresas, sem revelações que você não escolheu acessar. O processo é conduzido com o seu consentimento em cada etapa.',
  },
]

export default function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: '#FAF7F2',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="eyebrow-ultra" style={{ color: '#1E4A2B', marginBottom: '1rem' }}>
              Passo a passo
            </p>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                color: '#1E4A2B',
                lineHeight: 1.25,
              }}
            >
              Como é o processo
            </h2>
          </div>
        </FadeIn>

        {/* 3 passos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '5rem' }}>
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.12}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '2rem',
                  alignItems: 'flex-start',
                }}
                className="step-row"
              >
                {/* Numero decorativo de fundo */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80px',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: '7.5rem',
                      lineHeight: 1,
                      color: '#C8A96E',
                      opacity: 0.15,
                      userSelect: 'none',
                      position: 'absolute',
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: '2rem',
                      color: '#C8A96E',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <h3
                    style={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: '1.25rem',
                      color: '#1E4A2B',
                      marginBottom: '0.65rem',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.9rem',
                      lineHeight: 1.85,
                      color: '#4a4a4a',
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desmistificação hipnose */}
        <FadeIn>
          <div style={{ marginBottom: '3rem' }}>
            <p className="eyebrow-ultra" style={{ color: '#1E4A2B', marginBottom: '1.5rem', textAlign: 'center' }}>
              Sobre a hipnose clínica
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {hypnoFAQ.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2rem 1fr',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1.5rem',
                    backgroundColor: '#F0E8DA',
                    borderLeft: '3px solid rgba(200,169,110,0.4)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: '1.4rem',
                      color: '#C8A96E',
                      lineHeight: 1,
                    }}
                  >
                    ?
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        color: '#1E4A2B',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.q}
                    </p>
                    <p
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.875rem',
                        lineHeight: 1.8,
                        color: '#4a4a4a',
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Box destaque */}
        <FadeIn delay={0.1}>
          <div
            style={{
              padding: '2.5rem 3rem',
              backgroundColor: '#1E4A2B',
              borderLeft: '4px solid #C8A96E',
              marginBottom: '3rem',
            }}
          >
            <p
              style={{
                fontFamily: '"DM Serif Text", serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: 1.75,
                color: '#FAF7F2',
                textAlign: 'center',
              }}
            >
              "A dor de não mexer é a que você já carrega todos os dias. A dor do processo
              é temporária e tem destino: a liberdade."
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-shimmer"
            >
              Ver o que outras mulheres viveram
            </button>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .step-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}
