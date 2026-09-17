/* global console */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const serverEntry = pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
const { getSeo, indexableRoutes, siteRoutes, render, SITE_NAME, SITE_URL } = await import(serverEntry)
const template = await readFile(resolve(dist, 'index.html'), 'utf8')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function headMarkup(seo) {
  const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
  const schema = seo.schemas.map((item) => `<script type="application/ld+json" data-route-schema="true">${JSON.stringify(item).replaceAll('<', '\\u003c')}</script>`).join('\n    ')
  return `
    <title>${escapeAttribute(seo.title)}</title>
    <meta name="description" content="${escapeAttribute(seo.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${seo.canonical}" />
    <meta property="og:type" content="${seo.path.includes('life-with-two-homes') ? 'article' : 'website'}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${escapeAttribute(seo.title)}" />
    <meta property="og:description" content="${escapeAttribute(seo.description)}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:image" content="${seo.image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttribute(seo.title)}" />
    <meta name="twitter:description" content="${escapeAttribute(seo.description)}" />
    <meta name="twitter:image" content="${seo.image}" />
    ${schema}`
}

async function writeRoute(path) {
  const seo = getSeo(path)
  const html = render(path)
  const output = template
    .replace(/\s*<title>.*?<\/title>/s, '')
    .replace('</head>', () => `${headMarkup(seo)}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
  if (path === '/') {
    await writeFile(resolve(dist, 'index.html'), output)
  } else {
    const directoryFile = resolve(dist, path.slice(1), 'index.html')
    const cleanUrlFile = resolve(dist, `${path.slice(1)}.html`)
    await mkdir(dirname(directoryFile), { recursive: true })
    await writeFile(directoryFile, output)
    await writeFile(cleanUrlFile, output)
  }
}

for (const route of siteRoutes) await writeRoute(route.path)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map(({ path }) => `  <url><loc>${SITE_URL}${path === '/' ? '' : path}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>`).join('\n')}
</urlset>\n`
await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
await writeFile(resolve(dist, 'llms.txt'), `# ${SITE_NAME}\n\nKelly Miller is an Oregon REALTOR®/Broker providing real estate guidance across Central Oregon and the Central Oregon Coast.\n\n## Primary regions\n- Central Oregon: Bend, Sisters, Tumalo, Black Butte Ranch, Camp Sherman, and Redmond\n- Central Oregon Coast: Newport, Waldport, Yachats, and Seal Rock\n\n## Important pages\n${indexableRoutes.map(({ path, title }) => `- [${title}](${SITE_URL}${path === '/' ? '' : path})`).join('\n')}\n\n## Contact\n- Phone: +1-307-699-0494\n- Email: kellymiller.realestate@gmail.com\n- Oregon License: #201246475\n`)

const notFound = template
  .replace(/\s*<title>.*?<\/title>/s, '')
  .replace('</head>', () => `${headMarkup(getSeo('/not-found'))}\n  </head>`)
  .replace('<div id="root"></div>', () => `<div id="root">${render('/not-found')}</div>`)
await writeFile(resolve(dist, '404.html'), notFound)

console.log(`Prerendered ${indexableRoutes.length} indexable routes.`)
