import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ButtonLink({ to, children, variant = 'gold', external = false }) {
  const className = `button-link ${variant}`
  if (external) {
    return <a className={className} href={to} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={17} /></a>
  }
  return <Link className={className} to={to}>{children}<ArrowUpRight size={17} /></Link>
}
