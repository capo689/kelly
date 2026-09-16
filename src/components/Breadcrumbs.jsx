import { Link } from 'react-router-dom'

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link to="/">Home</Link></li>
        {items.map((item, index) => (
          <li key={item.label} aria-current={index === items.length - 1 ? 'page' : undefined}>
            {item.to && index !== items.length - 1 ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
