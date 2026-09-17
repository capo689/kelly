import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function PageTransition({ children }) {
  const main = useRef(null)
  const reduceMotion = useReducedMotion()
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let id = hash.slice(1)
      try { id = decodeURIComponent(id) } catch { /* Keep malformed fragments harmless. */ }
      const target = hash ? document.getElementById(id) : main.current
      if (hash && target) target.scrollIntoView({ block: 'start' })
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      if (navigationType !== 'POP' && target) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, navigationType])
  return (
    <motion.main
      ref={main}
      id="main-content"
      tabIndex={-1}
      className="page-main"
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: reduceMotion ? 1 : 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
    >
      {children}
    </motion.main>
  )
}
