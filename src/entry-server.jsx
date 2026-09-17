/* eslint-disable react-refresh/only-export-components */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export { getSeo, indexableRoutes, siteRoutes, SITE_NAME, SITE_URL } from './seo/routeSeo'

export function render(url) {
  // main.jsx hydrates this markup; keep React's text boundaries and IDs.
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}
