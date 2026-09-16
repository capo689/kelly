import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Facebook } from 'lucide-react'
import BrandMark from './BrandMark'
import { contact } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true">OREGON · CASCADES · COAST ·</div>
      <div className="wrap footer-main">
        <div className="footer-brand-block">
          <BrandMark inverse />
          <p>Thoughtful real estate guidance across Central Oregon and the Central Oregon Coast.</p>
          <img className="footer-fathom-logo" src="/brand/fathom-realty.webp" alt="Fathom Realty" />
        </div>
        <div className="footer-col">
          <h3>Browse</h3>
          <Link to="/">Home</Link>
          <Link to="/list-with-me">List With Me</Link>
          <Link to="/find-a-home">Find a Home</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className="footer-col">
          <h3>Discover</h3>
          <Link to="/central-oregon">Central Oregon</Link>
          <Link to="/central-oregon-coast">Oregon Coast</Link>
          <Link to="/about-me">About Kelly</Link>
          <Link to="/blog">Local Guides</Link>
        </div>
        <div className="footer-col footer-contact">
          <h3>Connect</h3>
          <a href={contact.emailHref}>{contact.email}<ArrowUpRight size={14} /></a>
          <a href={contact.phoneHref}>{contact.phone}<ArrowUpRight size={14} /></a>
          <div className="socials">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="wrap footer-fine">
        <span>Kelly Miller, REALTOR®/Broker · {contact.license}</span>
        <span>Equal Housing Opportunity</span>
        <span>© {new Date().getFullYear()} Kelly Miller Real Estate</span>
      </div>
    </footer>
  )
}
