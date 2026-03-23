import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px 0px' }}
      transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
