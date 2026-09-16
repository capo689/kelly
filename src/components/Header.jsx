import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BrandMark from './BrandMark'
import { nav } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <BrandMark inverse />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>
          ))}
        </nav>
        <Link className="header-cta" to="/contact">Get in Touch</Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-label">Explore</div>
          {nav.map((item, index) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
            </NavLink>
          ))}
          <NavLink to="/contact"><span>07</span>Contact</NavLink>
          <div className="mobile-menu-foot">Mountains. Ocean. Oregon.</div>
        </div>
      </div>
    </header>
  )
}
