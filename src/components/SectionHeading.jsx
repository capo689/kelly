import Reveal from './Reveal'

export default function SectionHeading({ kicker, title, copy, light = false, align = 'left' }) {
  return (
    <Reveal className={`section-heading ${light ? 'light' : ''}`}>
      {kicker && <div className="section-kicker">{kicker}</div>}
      <h2 style={{ textAlign: align }}>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  )
}
