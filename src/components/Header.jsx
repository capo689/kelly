import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BrandMark from './BrandMark'
import { nav } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menu = useRef(null)
  const toggle = useRef(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return undefined
    const content = [...document.querySelectorAll('.page-main, .site-footer, .skip-link')]
    content.forEach((node) => { node.inert = true })
    menu.current?.querySelector('a')?.focus()
    const keydown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        toggle.current?.focus()
      }
      if (event.key === 'Tab') {
        const links = [toggle.current, ...menu.current.querySelectorAll('a')]
        const first = links[0]
        const last = links.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    const desktop = window.matchMedia('(min-width: 1181px)')
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    document.addEventListener('keydown', keydown)
    return () => {
      document.body.classList.remove('menu-open')
      content.forEach((node) => { node.inert = false })
      document.removeEventListener('keydown', keydown)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-menu-open' : ''}`}>
      <div className="header-inner">
        <BrandMark inverse />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>
          ))}
        </nav>
        <Link className="header-cta" to="/contact">Get in Touch</Link>
        <button ref={toggle} className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav ref={menu} id="mobile-navigation" aria-label="Mobile navigation" inert={!open} className={`mobile-menu ${open ? 'is-open' : ''}`}>
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
      </nav>
    </header>
  )
}
