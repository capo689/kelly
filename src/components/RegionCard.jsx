import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

export default function RegionCard({ card, index = 0 }) {
  return (
    <Reveal delay={index * 90} className="region-card">
      <Link to={card.to} aria-label={`Explore ${card.title}`}>
        <div className="region-card-media">
          <img src={card.image} alt={`${card.eyebrow}: ${card.title}`} loading="lazy" />
          <span className="region-card-index">0{index + 1}</span>
        </div>
        <div className="region-card-copy">
          <div className="section-kicker">{card.eyebrow}</div>
          <h3>{card.title}</h3>
          <p>{card.copy}</p>
          <span className="text-link">Explore <ArrowUpRight size={16} /></span>
        </div>
      </Link>
    </Reveal>
  )
}
