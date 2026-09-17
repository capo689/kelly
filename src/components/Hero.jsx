import { motion } from 'framer-motion'
import ButtonLink from './ButtonLink'
import HeroBackdrop from './HeroBackdrop'

export default function Hero({ eyebrow, title, copy, image, imageRight, video, position = 'center', primary, secondary, credit, compact = false, referenceSpacing = false }) {
  const hasActions = Boolean(primary || secondary)
  return (
    <section className={`page-hero ${compact ? 'compact' : ''} ${imageRight ? 'split' : ''} ${video ? 'has-video' : ''} ${hasActions ? 'has-actions' : ''} ${referenceSpacing ? 'reference-spacing' : ''}`}>
      <HeroBackdrop key={video?.src || image} image={image} imageRight={imageRight} position={position} video={video} />
      <div className="hero-wash" />
      <div className="wrap hero-content">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-kicker"><span />{eyebrow}</div>
          <h1>{title}</h1>
          {copy && <p>{copy}</p>}
          {hasActions && (
            <div className="hero-actions">
              {primary && <ButtonLink to={primary.to}>{primary.label}</ButtonLink>}
              {secondary && <ButtonLink to={secondary.to} variant="outline">{secondary.label}</ButtonLink>}
            </div>
          )}
        </motion.div>
      </div>
      {credit && <a className="hero-credit" href={credit.url} target="_blank" rel="noreferrer">Photo: {credit.label}</a>}
    </section>
  )
}
