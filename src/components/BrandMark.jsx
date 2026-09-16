import { Link } from 'react-router-dom'

export default function BrandMark({ compact = false, inverse = false }) {
  return (
    <Link className={`brand-mark ${compact ? 'compact' : ''} ${inverse ? 'inverse' : ''}`} to="/" aria-label="Kelly Miller Real Estate home">
      <span className="brand-emblem" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <circle cx="32" cy="32" r="29" />
          <path d="M11 43 25 25l8 10 8-12 13 20" />
          <path d="m27 43 8-10 8 10" />
        </svg>
      </span>
      <span className="brand-copy">
        <b>Cascades to Coast</b>
        <small>Kelly Miller · Oregon Realtor®</small>
      </span>
    </Link>
  )
}
