import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CommunityLinks({ communities, title = 'Explore the communities' }) {
  return (
    <section className="section mist community-links-section">
      <div className="wrap">
        <Reveal className="community-links-heading">
          <div className="section-kicker">Local guides</div>
          <h2>{title}</h2>
          <p>Start with the place, then narrow the search around the way you want to live.</p>
        </Reveal>
        <div className="community-link-grid">
          {communities.map((community, index) => (
            <Reveal key={community.path} delay={index * 45}>
              <Link className="community-link-card" to={community.path}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{community.name}</h3><p>{community.answer}</p></div>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
