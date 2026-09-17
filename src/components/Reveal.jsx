import { useEffect, useRef } from 'react'

export default function Reveal({ children, as: Tag = 'div', direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    node.classList.add('will-reveal')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible')
        observer.disconnect()
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${className}`} data-reveal={direction} style={{ '--delay': `${delay}ms` }}>{children}</Tag>
}
