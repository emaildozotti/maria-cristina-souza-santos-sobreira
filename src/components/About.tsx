import FadeIn from './FadeIn'

function RootsSVGAbout() {
  return (
    <svg
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '60%',
        height: 'auto',
        opacity: 0.12,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <path d="M150 200 C150 160 135 130 115 100 C100 75 85 50 65 25" stroke="#1E4A2B" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M150 200 C150 165 165 135 185 110 C200 88 215 62 230 35" stroke="#1E4A2B" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M138 175 C120 158 98 152 75 148" stroke="#1E4A2B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M162 170 C180 155 200 150 225 148" stroke="#1E4A2B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        backgroundColor: '#F0E8DA',
        padding: '7rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <RootsSVGAbout />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* TEXT — order-2 mobile, order-1 desktop */}
        <div className="about-text" style={{ order: 2 }}>
          <FadeIn>
            <p className="eyebrow-ultra" style={{ color: '#1E4A2B', marginBottom: '1rem' }}>
              Quem é Cristina
            </p>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(1.7rem, 2.8vw, 2.5rem)',
                color: '#1E4A2B',
                lineHeight: 1.25,
                marginBottom: '0.75rem',
              }}
            >
              Antes de ajudar alguém, precisei me salvar.
            </h2>

            {/* Blockquote editorial */}
            <blockquote
              style={{
                borderLeft: '3px solid #C8A96E',
                paddingLeft: '1.25rem',
                margin: '1.5rem 0',
              }}
            >
              <p
                style={{
                  fontFamily: '"DM Serif Text", serif',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: '#3a3a3a',
                }}
              >
                "Fui rejeitada antes de nascer. Cresci achando que o problema era eu."
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.85,
                color: '#4a4a4a',
                marginBottom: '1.25rem',
              }}
            >
              Minha mãe tentou interromper a gravidez. Antes de eu ter consciência do mundo,
              meu corpo já carregava a mensagem de que eu não era bem-vinda. Cresci com um
              pai narcisista que reforçou essa programação todos os dias. Não importava o que
              eu fizesse: nunca era suficiente. O resultado veio no corpo. Depressão profunda.
              Síndrome do pânico. Anos de medicação controlada. Cada comprimido silenciava o
              sintoma, mas a ferida continuava aberta, sangrando por baixo da anestesia.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.85,
                color: '#4a4a4a',
                marginBottom: '1.25rem',
              }}
            >
              O momento de virada não foi bonito. Foi desesperador. Quando entendi que a
              medicação estava me mantendo viva, mas não estava me curando, busquei algo
              diferente. Encontrei a Cura Interior. E pela primeira vez, alguém me levou até
              a raiz: não o que eu sentia, mas por que eu sentia. A ferida de rejeição que
              antecedia qualquer memória consciente.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.85,
                color: '#4a4a4a',
                marginBottom: '1.75rem',
              }}
            >
              Hoje conduzo mulheres pelo mesmo caminho. Com O Código da Cura, integro Hipnose
              Clínica, TCC, Meditação e Reprogramação Emocional para chegar onde a terapia
              convencional não chega. Não porque a terapia convencional seja ruim, mas porque
              ela não foi desenhada para alcançar feridas que vieram antes das palavras.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              {['Hipnose Clínica', 'Terapia Cognitivo-Comportamental', 'Reprogramação Emocional'].map(
                cred => (
                  <span
                    key={cred}
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#1E4A2B',
                      border: '1px solid rgba(30,74,43,0.3)',
                      padding: '0.35rem 0.75rem',
                    }}
                  >
                    {cred}
                  </span>
                )
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p
              style={{
                fontFamily: '"DM Serif Text", serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: '#C8A96E',
                marginTop: '1.75rem',
              }}
            >
              E foi por essa travessia que estruturei cada etapa do processo com cuidado.
            </p>
          </FadeIn>
        </div>

        {/* PHOTO — order-1 mobile, order-2 desktop */}
        <div className="about-photo" style={{ order: 1, position: 'relative' }}>
          <FadeIn>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                maxWidth: '420px',
                margin: '0 auto',
                backgroundColor: '#d4c9b8',
                overflow: 'hidden',
              }}
            >
              <img
                src="/foto-cristina-sobre.jpg"
                alt="Cristina Sobreira"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  mixBlendMode: 'multiply',
                }}
                onError={e => {
                  const el = e.currentTarget
                  el.style.display = 'none'
                }}
              />

              {/* Accent border */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '-12px',
                  width: '50%',
                  height: '50%',
                  borderBottom: '2px solid #C8A96E',
                  borderRight: '2px solid #C8A96E',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-text { order: 1 !important; }
          .about-photo { order: 2 !important; }
        }
      `}</style>
    </section>
  )
}
