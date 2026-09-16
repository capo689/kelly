import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ButtonLink from './ButtonLink'

const TerrainCanvas = lazy(() => import('./TerrainCanvas'))

function DeferredTerrain() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 900px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (mobile || reducedMotion) return undefined

    const reveal = () => setShow(true)
    const id = window.requestIdleCallback ? window.requestIdleCallback(reveal, { timeout: 1200 }) : window.setTimeout(reveal, 500)
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id)
      else window.clearTimeout(id)
    }
  }, [])

  return show ? <Suspense fallback={null}><TerrainCanvas /></Suspense> : null
}

export default function Hero({ eyebrow, title, copy, image, imageRight, position = 'center', primary, secondary, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'compact' : ''} ${imageRight ? 'split' : ''}`}>
      <div className="hero-media" aria-hidden="true">
        <div className="hero-image" style={{ backgroundImage: `url(${image})`, backgroundPosition: position }} />
        {imageRight && <div className="hero-image right" style={{ backgroundImage: `url(${imageRight})` }} />}
      </div>
      <div className="hero-wash" />
      <DeferredTerrain />
      <div className="hero-coordinate" aria-hidden="true">44.0582° N&nbsp;&nbsp; 121.3153° W</div>
      <div className="wrap hero-content">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-kicker"><span />{eyebrow}</div>
          <h1>{title}</h1>
          {copy && <p>{copy}</p>}
          {(primary || secondary) && (
            <div className="hero-actions">
              {primary && <ButtonLink to={primary.to}>{primary.label}</ButtonLink>}
              {secondary && <ButtonLink to={secondary.to} variant="outline">{secondary.label}</ButtonLink>}
            </div>
          )}
        </motion.div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span />Scroll to explore</div>
    </section>
  )
}
