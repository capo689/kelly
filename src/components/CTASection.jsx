import ButtonLink from './ButtonLink'
import Reveal from './Reveal'

export default function CTASection({ title = 'Mountains. Ocean. Oregon.', copy = 'Let’s talk about the place and lifestyle you have in mind.', button = 'Start a Conversation', to = '/contact' }) {
  return (
    <section className="cta-section">
      <div className="cta-lines" aria-hidden="true" />
      <div className="wrap cta-inner">
        <Reveal>
          <div className="section-kicker">Cascades to Coast</div>
          <h2>{title}</h2>
          <p>{copy}</p>
        </Reveal>
        <Reveal direction="right" delay={120}><ButtonLink to={to}>{button}</ButtonLink></Reveal>
      </div>
    </section>
  )
}
