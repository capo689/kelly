import { useEffect, useId, useRef, useState } from 'react'
import { Play } from 'lucide-react'

export default function VideoFrame({ video }) {
  const [source, setSource] = useState(null)
  const [failed, setFailed] = useState(false)
  const player = useRef(null)
  const descriptionId = useId()

  useEffect(() => {
    if (source) player.current?.focus({ preventScroll: true })
  }, [source])

  function play() {
    setSource(window.matchMedia('(max-width: 900px)').matches ? video.mobileSrc : video.src)
  }

  return (
    <figure className="feature-video">
      {source && !failed ? (
        <video ref={player} src={source} poster={video.poster} controls autoPlay muted playsInline
          preload="none" aria-label={video.title} aria-describedby={descriptionId}
          onError={() => setFailed(true)} />
      ) : (
        <div className="feature-video-still">
          <picture>
            <source media="(max-width: 900px)" srcSet={video.mobilePoster} />
            <img src={video.poster} alt="" width="1920" height="1080" loading="lazy" />
          </picture>
          {!failed && <button type="button" onClick={play} aria-label={`Play ${video.title}`} aria-describedby={descriptionId}>
            <Play size={20} aria-hidden="true" fill="currentColor" /><span>Watch the film</span>
          </button>}
          {failed && <p className="feature-video-error" role="status">The film couldn’t load. Please try again later.</p>}
        </div>
      )}
      <figcaption id={descriptionId}><strong>{video.title}</strong><span>{video.description}</span></figcaption>
    </figure>
  )
}
