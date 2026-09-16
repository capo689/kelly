/* eslint-disable react-refresh/only-export-components */
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export { getSeo, indexableRoutes, SITE_NAME, SITE_URL } from './seo/routeSeo'

export function render(url) {
  return renderToStaticMarkup(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}
