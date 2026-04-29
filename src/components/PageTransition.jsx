import { motion } from 'framer-motion'

export const pageVariants = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -100
  }
}

export const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5
}

export function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}