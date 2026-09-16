import Reveal from './Reveal'

export default function ImageFrame({ src, alt, className = '', position = 'center', caption, preserveSubject = false }) {
  return (
    <Reveal className={`image-frame image-reveal ${preserveSubject ? 'safe-image' : ''} ${className}`} direction="scale">
      {preserveSubject && <span className="safe-image-backdrop" style={{ backgroundImage: `url(${src})`, backgroundPosition: position }} aria-hidden="true" />}
      <img src={src} alt={alt} style={{ objectPosition: position, objectFit: preserveSubject ? 'contain' : 'cover' }} loading="lazy" />
      {caption && <span className="image-caption">{caption}</span>}
    </Reveal>
  )
}
