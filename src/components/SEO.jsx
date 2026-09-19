import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeo, SITE_NAME } from '../seo/routeSeo'

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function SEO() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = getSeo(pathname)
    document.title = seo.title
    setMeta('name', 'description', seo.description)
    setMeta('name', 'robots', seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    setMeta('property', 'og:type', seo.articleHeadline ? 'article' : 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', seo.title)
    setMeta('property', 'og:description', seo.description)
    setMeta('property', 'og:url', seo.canonical)
    setMeta('property', 'og:image', seo.image)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', seo.title)
    setMeta('name', 'twitter:description', seo.description)
    setMeta('name', 'twitter:image', seo.image)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', seo.canonical)
    document.head.querySelectorAll('script[data-route-schema]').forEach((node) => node.remove())
    seo.schemas.forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.routeSchema = 'true'
      script.textContent = JSON.stringify(schema).replace(/</g, '\\u003c')
      document.head.appendChild(script)
    })
  }, [pathname])
  return null
}
