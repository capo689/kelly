import Reveal from './Reveal'

export default function ImageFrame({ src, alt, className = '', position = 'center', caption }) {
  return (
    <Reveal className={`image-frame image-reveal ${className}`} direction="scale">
      <img src={src} alt={alt} style={{ objectPosition: position }} loading="lazy" />
      {caption && <span className="image-caption">{caption}</span>}
    </Reveal>
  )
}
