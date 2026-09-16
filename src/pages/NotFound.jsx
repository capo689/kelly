import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="not-found">
        <div><span>404</span><h1>This trail does not lead anywhere.</h1><p>Let’s get you back to Kelly’s Oregon.</p><Link className="button-link" to="/">Return Home</Link></div>
      </section>
    </PageTransition>
  )
}
