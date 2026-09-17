import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Pause, Play } from 'lucide-react'

const playbackQuery = '(min-width: 901px) and (prefers-reduced-motion: no-preference) and (pointer: fine)'

function subscribe(listener) {
  const query = window.matchMedia(playbackQuery)
  query.addEventListener('change', listener)
  navigator.connection?.addEventListener('change', listener)
  return () => {
    query.removeEventListener('change', listener)
    navigator.connection?.removeEventListener('change', listener)
  }
}

function canAutoplay() {
  return window.matchMedia(playbackQuery).matches && !navigator.connection?.saveData
}

export default function HeroBackdrop({ image, imageRight, position, video }) {
  const eligible = useSyncExternalStore(subscribe, canAutoplay, () => false)
  const player = useRef(null)
  const frame = useRef(null)
  const [pausedByUser, setPausedByUser] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [hasFrame, setHasFrame] = useState(false)
  const [failed, setFailed] = useState(false)
  const enabled = Boolean(video && eligible && !failed)

  useEffect(() => {
    const node = player.current
    if (!enabled || !node) return undefined
    let inView = true
    let active = true
    function update() {
      if (active && inView && !document.hidden && !pausedByUser) {
        node.play().catch(() => { /* Keep the poster and manual play control. */ })
      } else {
        node.pause()
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      update()
    }, { threshold: 0.05 })
    observer.observe(frame.current)
    document.addEventListener('visibilitychange', update)
    update()
    return () => {
      active = false
      observer.disconnect()
      document.removeEventListener('visibilitychange', update)
      node.pause()
    }
  }, [enabled, pausedByUser])

  function toggle() {
    const node = player.current
    if (!node) return
    if (!node.paused) {
      setPausedByUser(true)
      node.pause()
    } else {
      setPausedByUser(false)
      node.play().catch(() => {})
    }
  }

  return (
    <>
      <div className="hero-media" aria-hidden="true">
        {video ? (
          <div ref={frame} className="hero-image hero-video-frame" style={{ '--video-position': video.position, '--video-mobile-position': video.mobilePosition }}>
            <picture className="hero-poster">
              <source media="(max-width: 900px)" srcSet={video.mobilePoster} />
              <img src={video.poster} alt="" width="1920" height="1080" fetchPriority="high" />
            </picture>
            {enabled && <video ref={player} className={`hero-video ${hasFrame ? 'has-frame' : ''}`} src={video.src}
              muted loop playsInline preload="none" disablePictureInPicture
              onPlaying={() => { setPlaying(true); setHasFrame(true) }} onPause={() => setPlaying(false)}
              onError={() => setFailed(true)} />}
          </div>
        ) : <div className="hero-image" style={{ backgroundImage: `url(${image})`, backgroundPosition: position }} />}
        {imageRight && <div className="hero-image right" style={{ backgroundImage: `url(${imageRight})` }} />}
      </div>
      {enabled && <button type="button" className="hero-video-toggle" onClick={toggle}
        aria-label={playing ? 'Pause background video' : 'Play background video'}>
        {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        <span>{playing ? 'Pause film' : 'Play film'}</span>
      </button>}
    </>
  )
}
