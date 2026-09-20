import { useEffect } from 'react'
import { initializeAnalytics, trackContactClick } from '../data/analytics'

export default function Analytics() {
  useEffect(() => {
    initializeAnalytics()
    document.addEventListener('click', trackContactClick)
    return () => document.removeEventListener('click', trackContactClick)
  }, [])
  return null
}
