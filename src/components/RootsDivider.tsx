export const RootsDivider = ({ opacity = 0.5 }: { opacity?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity }}>
    <div style={{
      flex: 1,
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, #C8A96E 100%)'
    }} />
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 2 Q19 8 14 13 Q9 18 4 21" stroke="#C8A96E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M24 2 Q29 8 34 13 Q39 18 44 21" stroke="#C8A96E" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <path d="M24 2 Q21 7 17 11 Q13 15 10 18" stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
      <path d="M24 2 Q27 7 31 11 Q35 15 38 18" stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
    </svg>
    <div style={{
      flex: 1,
      height: '1px',
      background: 'linear-gradient(90deg, #C8A96E 0%, transparent 100%)'
    }} />
  </div>
)
