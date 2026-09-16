import Reveal from './Reveal'

export default function FAQSection({ title = 'Questions buyers ask', intro, items }) {
  return (
    <section className="section faq-section">
      <div className="wrap faq-layout">
        <Reveal className="faq-heading">
          <div className="section-kicker">Straight answers</div>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </Reveal>
        <div className="faq-list">
          {items.map(([question, answer], index) => (
            <Reveal as="article" className="faq-item" key={question} delay={index * 45}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{question}</h3><p>{answer}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
